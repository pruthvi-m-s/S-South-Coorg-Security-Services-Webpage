// ============================================================
// SSCSS — Contact Form Validation
// Validation rules for the inquiry form.
// Pure functions — no UI dependencies.
// Replace with Zod or any validation library later if needed.
// ============================================================

// ─── Types ──────────────────────────────────────────────────

export interface ContactFormData {
  name: string;
  company: string;
  phone: string;
  email: string;
  service: string;
  message: string;
}

export interface ContactFormErrors {
  name?: string;
  phone?: string;
  email?: string;
  message?: string;
}

// ─── Validation Messages ────────────────────────────────────

export const VALIDATION_MESSAGES = {
  nameRequired: "Name is required",
  nameTooShort: "Name must be at least 2 characters",
  phoneRequired: "Phone number is required",
  phoneInvalid: "Please enter a valid 10-digit Indian phone number",
  emailRequired: "Email address is required",
  emailInvalid: "Please enter a valid email address",
  messageRequired: "Message is required",
  messageTooShort: "Message must be at least 10 characters",
} as const;

// ─── Helpers ────────────────────────────────────────────────

/** Validate Indian phone number (10 digits, optionally prefixed with +91) */
function isValidIndianPhone(phone: string): boolean {
  const cleaned = phone.replace(/[\s\-()]/g, "");
  // Accept +91 followed by 10 digits, or just 10 digits
  const pattern = /^(\+91)?[6-9]\d{9}$/;
  return pattern.test(cleaned);
}

/** Validate email format */
function isValidEmail(email: string): boolean {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email.trim());
}

// ─── Main Validation Function ───────────────────────────────

export function validateContactForm(
  data: ContactFormData,
): ContactFormErrors {
  const errors: ContactFormErrors = {};

  const name = data.name.trim();
  if (!name) {
    errors.name = VALIDATION_MESSAGES.nameRequired;
  } else if (name.length < 2) {
    errors.name = VALIDATION_MESSAGES.nameTooShort;
  }

  const phone = data.phone.trim();
  if (!phone) {
    errors.phone = VALIDATION_MESSAGES.phoneRequired;
  } else if (!isValidIndianPhone(phone)) {
    errors.phone = VALIDATION_MESSAGES.phoneInvalid;
  }

  const email = data.email.trim();
  if (!email) {
    errors.email = VALIDATION_MESSAGES.emailRequired;
  } else if (!isValidEmail(email)) {
    errors.email = VALIDATION_MESSAGES.emailInvalid;
  }

  const message = data.message.trim();
  if (!message) {
    errors.message = VALIDATION_MESSAGES.messageRequired;
  } else if (message.length < 10) {
    errors.message = VALIDATION_MESSAGES.messageTooShort;
  }

  return errors;
}

/** Check if errors object has any errors */
export function hasErrors(errors: ContactFormErrors): boolean {
  return Object.values(errors).some((error) => error !== undefined);
}

