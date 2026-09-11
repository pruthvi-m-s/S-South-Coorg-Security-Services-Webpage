// ============================================================
// SSCSS — Homepage Hero Content
// Single source of truth for hero section copy and assets.
// To swap the hero image later, update only the `heroImage` field.
// ============================================================

import type { HeroContent } from "../types";
import { ROUTES } from "@/lib/routes";
import { CONTACT } from "@/content/site";
import { entranceOfficeGuards } from "@/lib/site-images";

export const HERO: HeroContent = {
  eyebrow: "S South Coorg Security Services",
  headline: "Trusted Security & Manpower Solutions Across Bengaluru",
  description:
    "With 18+ years of company operations, 100+ trained personnel, and 50+ clients, SSCSS delivers enterprise-grade security and staffing services tailored to your needs. Reliable. Professional. Disciplined.",
  primaryCta: {
    label: "Get a Free Security Assessment",
    href: ROUTES.contact,
  },
  secondaryCta: {
    label: "Call Us Now",
    href: `tel:${CONTACT.phone}`,
  },
  tertiaryCta: {
    label: "WhatsApp Us",
    href: `https://wa.me/${CONTACT.whatsapp?.replace(/\D/g, "")}`,
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
