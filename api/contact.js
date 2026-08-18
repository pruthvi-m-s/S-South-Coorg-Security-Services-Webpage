const GOOGLE_APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycby5ZEpa7JtZis9PNFDqf2inuzrddOaTvIY-GcjjRNkquEFPA2DIPDRSYF_jlbdOD3Q4/exec";

const SERVICE_LABELS = {
  "security-guards": "Security Guards",
  "corporate-security": "Corporate Security",
  "industrial-security": "Industrial Security",
  "residential-security": "Residential Security",
  housekeeping: "Housekeeping",
  "front-office-management": "Front Office Management",
  "skilled-labour": "Skilled Labour",
  "unskilled-labour": "Unskilled Labour",
  "corporate-staffing": "Corporate Staffing",
  "ex-army-security-guards": "Ex-Army Security Guards",
  "event-security": "Event Security",
  "background-verification": "Background Verification",
  "private-detective-services": "Private Detective Services",
  "integrated-facility-management-services":
    "Integrated Facility Management Services",
  "not-sure-yet": "Not sure yet — discuss with team",
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      ok: false,
      message: "Method not allowed",
    });
  }

  try {
    const payload = req.body ?? {};

    const serviceValue = String(payload.service ?? "").trim();

    const serviceLabel =
      SERVICE_LABELS[serviceValue] ?? serviceValue;

    const formPayload = {
      ...payload,
      service: serviceLabel,
    };

    console.log("Submitting contact inquiry:", {
      ...formPayload,
      email: "[redacted]",
      phone: "[redacted]",
    });

    const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formPayload),
    });

    const result = await response.json();

    if (!response.ok || !result.ok) {
      console.error("Apps Script error:", result);

      return res.status(502).json({
        ok: false,
        message: result.message || "Unable to submit inquiry",
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