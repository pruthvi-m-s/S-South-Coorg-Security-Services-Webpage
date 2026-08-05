// ============================================================
// SSCSS — Contact Form Submission Adapter
//
// Defines the contract for form submission.
// Today: fake Promise with delay.
// Tomorrow: replace with fetch() to Formspree endpoint.
//
// The UI never changes — only this file is swapped.
// ============================================================

import type { ContactFormData } from "./validation";

// ─── Submission Result Type ──────────────────────────────────

export interface ContactSubmissionResult {
  success: boolean;
  message: string;
}

// ─── Success / Error Messages ────────────────────────────────

export const SUBMISSION_MESSAGES = {
  success:
    "Thank you! Your inquiry has been received. Our team will get back to you shortly.",
  error:
    "Something went wrong while submitting your request. Please try again or contact us directly by phone.",
} as const;

// ─── Simulated Submit Function ───────────────────────────────

/**
 * Simulated form submission.
 *
 * Replace the body of this function with a real API call:
 *
 * ```ts
 * const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
 *   method: "POST",
 *   headers: { "Content-Type": "application/json" },
 *   body: JSON.stringify(data),
 * });
 *
 * if (!response.ok) throw new Error("Submission failed");
 * ```
 *
 * The return type (ContactSubmissionResult) stays the same.
 */
export async function submitContactForm(
  _data: ContactFormData,
): Promise<ContactSubmissionResult> {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  void _data;

  // Simulate network delay (1.2–1.8s)
  const delay = 1200 + Math.random() * 600;

  await new Promise<void>((resolve) => {
    const timer = setTimeout(() => {
      clearTimeout(timer);
      resolve();
    }, delay);
  });

  // Simulate 95% success rate
  const isSuccess = Math.random() > 0.05;

  if (isSuccess) {
    return {
      success: true,
      message: SUBMISSION_MESSAGES.success,
    };
  }

  return {
    success: false,
    message: SUBMISSION_MESSAGES.error,
  };
}

