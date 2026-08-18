// ============================================================
// SSCSS — Contact Form Validation
// Validation rules for the inquiry form.
// Pure functions — no UI dependencies.
// Replace with Zod or any validation library later if needed.
// ============================================================

const MAX_TEXT_LENGTH = 200;
const MAX_MESSAGE_LENGTH = 2000;
const CONTROL_CHAR_PATTERN = /[\u0000-\u001F\u007F]/;
const HTML_TAG_PATTERN = /<\/?(?:a|abbr|acronym|b|blockquote|br|code|div|em|form|h1|h2|h3|h4|h5|h6|hr|i|img|li|ol|p|pre|script|span|strong|table|tbody|td|th|tr|ul)\b[^>]*>/i;
const SCRIPT_PATTERN = /(?:<\s*script|javascript:|on\w+\s*=)/i;

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
  company?: string;
  phone?: string;
  email?: string;
  service?: string;
  message?: string;
}

// ─── Validation Messages ────────────────────────────────────

export const VALIDATION_MESSAGES = {
  nameRequired: "Name is required",
  nameTooShort: "Name must be at least 2 characters",
  nameTooLong: "Name must be at most 200 characters",
  companyTooLong: "Company name must be at most 200 characters",
  phoneRequired: "Phone number is required",
  phoneInvalid: "Please enter a valid 10-digit Indian phone number",
  emailRequired: "Email address is required",
  emailInvalid: "Please enter a valid email address",
  serviceRequired: "Please select the service you are interested in",
  messageRequired: "Message is required",
  messageTooShort: "Message must be at least 10 characters",
  messageTooLong: "Message must be at most 2000 characters",
  invalidCharacters: "Input contains unsupported characters",
  invalidContent: "Input contains unsupported HTML or script content",
} as const;

// ─── Helpers ────────────────────────────────────────────────

function normalizeText(value: string): string {
  return value.replace(/\s+/g, " ").trim();
}

function containsUnsupportedCharacters(value: string): boolean {
  return CONTROL_CHAR_PATTERN.test(value);
}

function containsUnsafeContent(value: string): boolean {
  return HTML_TAG_PATTERN.test(value) || SCRIPT_PATTERN.test(value);
}

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

  const name = normalizeText(data.name);
  if (!name) {
    errors.name = VALIDATION_MESSAGES.nameRequired;
  } else if (name.length < 2) {
    errors.name = VALIDATION_MESSAGES.nameTooShort;
  } else if (name.length > MAX_TEXT_LENGTH) {
    errors.name = VALIDATION_MESSAGES.nameTooLong;
  } else if (containsUnsupportedCharacters(name) || containsUnsafeContent(name)) {
    errors.name = VALIDATION_MESSAGES.invalidContent;
  }

  const company = normalizeText(data.company);
  if (company && company.length > MAX_TEXT_LENGTH) {
    errors.company = VALIDATION_MESSAGES.companyTooLong;
  } else if (company && (containsUnsupportedCharacters(company) || containsUnsafeContent(company))) {
    errors.company = VALIDATION_MESSAGES.invalidContent;
  }

  const phone = normalizeText(data.phone);
  if (!phone) {
    errors.phone = VALIDATION_MESSAGES.phoneRequired;
  } else if (containsUnsupportedCharacters(phone) || containsUnsafeContent(phone)) {
    errors.phone = VALIDATION_MESSAGES.invalidContent;
  } else if (!isValidIndianPhone(phone)) {
    errors.phone = VALIDATION_MESSAGES.phoneInvalid;
  }

  const email = normalizeText(data.email).toLowerCase();
  if (!email) {
    errors.email = VALIDATION_MESSAGES.emailRequired;
  } else if (containsUnsupportedCharacters(email) || containsUnsafeContent(email)) {
    errors.email = VALIDATION_MESSAGES.invalidContent;
  } else if (!isValidEmail(email)) {
    errors.email = VALIDATION_MESSAGES.emailInvalid;
  }

  const service = normalizeText(data.service);
  if (!service) {
    errors.service = VALIDATION_MESSAGES.serviceRequired;
  }

  const message = normalizeText(data.message);
  if (!message) {
    errors.message = VALIDATION_MESSAGES.messageRequired;
  } else if (message.length < 10) {
    errors.message = VALIDATION_MESSAGES.messageTooShort;
  } else if (message.length > MAX_MESSAGE_LENGTH) {
    errors.message = VALIDATION_MESSAGES.messageTooLong;
  } else if (containsUnsupportedCharacters(message) || containsUnsafeContent(message)) {
    errors.message = VALIDATION_MESSAGES.invalidContent;
  }

  return errors;
}

/** Check if errors object has any errors */
export function hasErrors(errors: ContactFormErrors): boolean {
  return Object.values(errors).some((error) => error !== undefined);
}

