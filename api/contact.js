const GOOGLE_APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycby5ZEpa7JtZis9PNFDqf2inuzrddOaTvIY-GcjjRNkquEFPA2DIPDRSYF_jlbdOD3Q4/exec";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      ok: false,
      message: "Method not allowed",
    });
  }

  try {
    const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(req.body),
    });

    const result = await response.json();

    if (!response.ok || !result.ok) {
      console.error("Apps Script error:", result);

      return res.status(502).json({
        ok: false,
        message: "Unable to submit inquiry",
      });
    }

    return res.status(200).json({
      ok: true,
      message: "Inquiry received",
    });
  } catch (error) {
    console.error("Contact API error:", error);

    return res.status(500).json({
      ok: false,
      message: "Unable to submit inquiry",
    });
  }
}