// ============================================================
// SSCSS — Homepage Hero Content
// Single source of truth for hero section copy and assets.
// To swap the hero image later, update only the `heroImage` field.
// ============================================================

import type { HeroContent } from "../types";
import { ROUTES } from "@/lib/routes";
import { entranceOfficeGuards } from "@/lib/site-images";

export const HERO: HeroContent = {
  eyebrow: "S South Coorg Security Services",
  headline: "Trusted Security & Manpower Solutions Across Bengaluru",
  description:
    "With 15+ years of experience, 100+ trained personnel, and 50+ satisfied clients, SSCSS delivers enterprise-grade security and staffing services tailored to your needs. Reliable. Professional. Disciplined.",
  primaryCta: {
    label: "Get a Quote",
    href: ROUTES.contact,
  },
  secondaryCta: {
    label: "Explore Our Services",
    href: ROUTES.services,
  },
  heroImage: {
    src: entranceOfficeGuards,
    alt: "SSCSS security personnel at a modern corporate entrance",
    isPlaceholder: false,
  },
  // Reserved for future enhancements
  trustElements: undefined,
  background: {
    type: "none",
  },
};
