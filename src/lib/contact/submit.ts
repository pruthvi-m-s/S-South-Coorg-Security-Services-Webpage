// ============================================================
// SSCSS — Contact Form Submission Adapter
// Google Forms direct submission
// ============================================================

import type { ContactFormData } from "./validation";

export interface ContactSubmissionResult {
  success: boolean;
  message: string;
}

export const SUBMISSION_MESSAGES = {
  success:
    "Thank you! Your inquiry has been received. Our team will get back to you shortly.",
  error:
    "We could not send your inquiry right now. Please try again in a moment or contact us directly by phone or WhatsApp.",
} as const;

const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSf3tUEyL-bChz2JFsXUQ-Vzn7CxgnofqI7BBbiTQsAjMCcUNA/formResponse";

export async function submitContactForm(
  data: ContactFormData,
): Promise<ContactSubmissionResult> {
  try {
    const iframeName = `google-form-${Date.now()}`;

    // Hidden iframe prevents Google Forms from navigating
    // the user's current page.
    const iframe = document.createElement("iframe");
    iframe.name = iframeName;
    iframe.style.display = "none";
    document.body.appendChild(iframe);

    const form = document.createElement("form");
    form.method = "POST";
    form.action = GOOGLE_FORM_URL;
    form.target = iframeName;
    form.style.display = "none";

    const fields = {
      "entry.890003161": data.name,
      "entry.476556914": data.company || "",
      "entry.1119866674": data.phone,
      "entry.44778419": data.email,
      "entry.1876012013": data.service || "",
      "entry.1098291040": data.message,
    };

    Object.entries(fields).forEach(([name, value]) => {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = name;
      input.value = value;
      form.appendChild(input);
    });

    document.body.appendChild(form);
    form.submit();

    // Google Forms does not provide a reliable CORS response,
    // so the submission is considered successful once the
    // browser accepts the POST.
    window.setTimeout(() => {
      form.remove();
      iframe.remove();
    }, 3000);

    return {
      success: true,
      message: SUBMISSION_MESSAGES.success,
    };
  } catch (error) {
    console.error("Google Form submission failed:", error);

    return {
      success: false,
      message: SUBMISSION_MESSAGES.error,
    };
  }
}