const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSf3tUEyL-bChz2JFsXUQ-Vzn7CxgnofqI7BBbiTQsAjMCcUNA/formResponse";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      ok: false,
      message: "Method not allowed",
    });
  }

  try {
    const {
      name,
      company,
      phone,
      email,
      service,
      message,
    } = req.body || {};

    if (!name || !phone || !email || !service || !message) {
      return res.status(400).json({
        ok: false,
        message: "Required fields are missing",
      });
    }

    const formData = new URLSearchParams();

    formData.append("entry.890003161", name);
    formData.append("entry.476556914", company || "");
    formData.append("entry.1119866674", phone);
    formData.append("entry.44778419", email);
    formData.append("entry.1876012013", service);
    formData.append("entry.1098291040", message);

    const response = await fetch(GOOGLE_FORM_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formData.toString(),
      redirect: "follow",
    });

    if (!response.ok) {
      console.error(
        "Google Forms returned:",
        response.status,
        response.statusText,
      );

      return res.status(502).json({
        ok: false,
        message: "Google Forms submission failed",
      });
    }

    return res.status(200).json({
      ok: true,
      message: "Inquiry received",
    });
  } catch (error) {
    console.error("Contact submission error:", error);

    return res.status(500).json({
      ok: false,
      message: "Unable to submit inquiry",
    });
  }
}