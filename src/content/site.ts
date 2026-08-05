// ============================================================
// SSCSS — Company Information
// Single source of truth for contact details, social links, etc.
// ============================================================

export const SITE = {
  name: "S South Coorg Security Services",
  shortName: "SSCSS",
  tagline: "Reliable · Professional · Disciplined · Trusted",
  established: 2008,
  yearsInBusiness: 15,
  guardsCount: 100,
  clientsCount: 50,
  primaryServiceArea: "South Bengaluru",
  secondaryServiceArea: "All of Bengaluru (on request)",

  /**
   * Logo asset path.
   * Set to a path when a real logo asset is available:
   *   logo: "/logos/sscss-logo.svg"
   * Leave null to display the company name as a text logo.
   */
  logo: null as string | null,
} as const;

export const CONTACT = {
  phone: "+919945178228",
  whatsapp: "+91 President9945178228",
  email: "sscsecurityservices@gmail.com",
  address: "58, 5th Main, C Cross, Avalahalli, Byatarayanapura, Mysore Rd, Avalahalli, New Extension, Banashankari, Bengaluru, Karnataka 560026",
  officeHours: "Mon – Sat, 9:00 AM – 6:00 PM",
  googleBusinessProfile: "https://g.page/xxxxxxxx",
  responseTime: "We typically respond within one business day.",
} as const;

/**
 * Urgent / immediate-deployment contact channel.
 * Positioned as a direct line for visitors with urgent security
 * requirements (not framed as an emergency/panic message).
 * Rendered only when a phone value is configured.
 */
export const EMERGENCY_HOTLINE = {
  label: "Urgent Requirement?",
  headline: "Need security services urgently?",
  description:
    "Speak directly with our team for immediate deployment support and quick answers.",
  phoneLabel: "Call us directly",
  // phone is resolved from CONTACT.phone at render time — never duplicated here.
} as const;

export const SOCIAL = {
  // Add social links as they become available
} as const;

