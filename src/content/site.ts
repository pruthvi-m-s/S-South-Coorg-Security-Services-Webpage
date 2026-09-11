// ============================================================
// SSCSS — Company Information
// ============================================================

import { getEnv } from "../lib/env";

export const SITE = {
  name: getEnv(
    "VITE_SITE_NAME",
    "S South Coorg Security Services",
  ),
  shortName: getEnv(
    "VITE_SITE_SHORT_NAME",
    "SSCSS",
  ),
  tagline: getEnv(
    "VITE_SITE_TAGLINE",
    "Reliable · Professional · Disciplined · Trusted",
  ),
  established: 2008,
  yearsInBusiness: 18,
  guardsCount: 100,
  clientsCount: 50,
  primaryServiceArea: getEnv(
    "VITE_PRIMARY_SERVICE_AREA",
    "South Bengaluru",
  ),
  secondaryServiceArea: getEnv(
    "VITE_SECONDARY_SERVICE_AREA",
    "All of Bengaluru (on request)",
  ),
  logo: null as string | null,
} as const;

export const CONTACT = {
  phone: getEnv(
    "VITE_CONTACT_PHONE",
    "+919945178228",
  ),
  whatsapp: getEnv(
    "VITE_CONTACT_WHATSAPP",
    "+919945178228",
  ),
  email: getEnv(
    "VITE_CONTACT_EMAIL",
    "sscsecurityservices@gmail.com",
  ),
  address: getEnv(
    "VITE_CONTACT_ADDRESS",
    "58, 5th Main, C Cross, Avalahalli, Byatarayanapura, Mysore Rd, Avalahalli, New Extension, Banashankari, Bengaluru, Karnataka 560026",
  ),
  officeHours: getEnv(
    "VITE_CONTACT_OFFICE_HOURS",
    "Mon – Fri, 9:00 AM – 6:00 PM",
  ),
  googleBusinessProfile: getEnv(
    "VITE_GOOGLE_BUSINESS_PROFILE",
    "https://g.page/xxxxxxxx",
  ),
  responseTime: getEnv(
    "VITE_CONTACT_RESPONSE_TIME",
    "We typically respond within one business day.",
  ),
} as const;

export const EMERGENCY_HOTLINE = {
  label: "Urgent Requirement?",
  headline:
    "Need security services urgently?",
  description:
    "Speak directly with our team for immediate deployment support and quick answers.",
  phoneLabel: "Call us directly",
} as const;

export const SOCIAL = {
  // Add social links when they become available.
} as const;