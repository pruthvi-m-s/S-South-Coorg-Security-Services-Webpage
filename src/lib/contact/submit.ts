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

export async function submitContactForm(
  data: ContactFormData,
): Promise<ContactSubmissionResult> {
  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        company: data.company,
        phone: data.phone,
        email: data.email,
        service: data.service,
        message: data.message,
      }),
    });

    const result = await response.json();

    if (!response.ok || !result.ok) {
      return {
        success: false,
        message:
          result.message || SUBMISSION_MESSAGES.error,
      };
    }

    return {
      success: true,
      message: SUBMISSION_MESSAGES.success,
    };
  } catch (error) {
    console.error("Contact submission failed:", error);

    return {
      success: false,
      message: SUBMISSION_MESSAGES.error,
    };
  }
}