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
  const formData = new URLSearchParams();

  formData.append("entry.890003161", data.name);
  formData.append("entry.476556914", data.company || "");
  formData.append("entry.1119866674", data.phone);
  formData.append("entry.44778419", data.email);
  formData.append("entry.1876012013", data.service || "");
  formData.append("entry.1098291040", data.message);

  try {
    await fetch(GOOGLE_FORM_URL, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formData.toString(),
    });

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