const GOOGLE_APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbx1Y7k8ZuxxsdHdvqQVmfQxCay-VVpKtw8vJuo5ic8jceGTFps3MCyZ8Gcw6J68TgF-/exec";

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

function jsonResponse(res, status, body) {
  return res.status(status).json(body);
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return jsonResponse(res, 405, {
      ok: false,
      message: "Method not allowed",
    });
  }

  try {
    const payload =
      typeof req.body === "string"
        ? JSON.parse(req.body)
        : req.body ?? {};

    const serviceValue = String(payload.service ?? "").trim();

    const formPayload = {
      name: String(payload.name ?? "").trim(),
      company: String(payload.company ?? "").trim(),
      phone: String(payload.phone ?? "").trim(),
      email: String(payload.email ?? "").trim(),
      service:
        SERVICE_LABELS[serviceValue] ??
        serviceValue ??
        "Not specified",
      message: String(payload.message ?? "").trim(),
    };

    if (
      !formPayload.name ||
      !formPayload.phone ||
      !formPayload.email ||
      !formPayload.service
    ) {
      return jsonResponse(res, 400, {
        ok: false,
        message: "Please complete all required fields.",
      });
    }

    console.log("Submitting contact inquiry:", {
      name: formPayload.name,
      company: formPayload.company,
      phone: "[redacted]",
      email: "[redacted]",
      service: formPayload.service,
      messageLength: formPayload.message.length,
    });

    const controller = new AbortController();

    const timeout = setTimeout(() => {
      controller.abort();
    }, 10000);

    let response;

    try {
      response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formPayload),
        signal: controller.signal,
      });
    } finally {
      clearTimeout(timeout);
    }

    const rawResponse = await response.text();

    let result = null;

    try {
      result = JSON.parse(rawResponse);
    } catch {
      console.error("Apps Script returned non-JSON response:", {
        status: response.status,
        body: rawResponse.slice(0, 500),
      });
    }

    if (!response.ok) {
      console.error("Apps Script HTTP error:", {
        status: response.status,
        result,
      });

      return jsonResponse(res, 502, {
        ok: false,
        message:
          "We could not send your inquiry right now. Please try again or contact us directly.",
      });
    }

    if (!result || result.ok !== true) {
      console.error("Apps Script reported lead failure:", result);

      return jsonResponse(res, 502, {
        ok: false,
        message:
          result?.message ||
          "We could not confirm delivery of your inquiry.",
      });
    }

    return jsonResponse(res, 200, {
      ok: true,
      message: "Inquiry received successfully.",
    });
  } catch (error) {
    console.error("Contact API error:", error);

    if (error?.name === "AbortError") {
      return jsonResponse(res, 504, {
        ok: false,
        message:
          "The inquiry service took too long to respond. Please try again or contact us directly.",
      });
    }

    return jsonResponse(res, 500, {
      ok: false,
      message:
        "We could not send your inquiry right now. Please try again or contact us directly.",
    });
  }
}