// ============================================================
// SSCSS — Final CTA Content
// ============================================================

import type { HeroCTA } from "../types";
import { ROUTES } from "@/lib/routes";

export interface CtaContent {
  heading: string;
  supportingText: string;
  primaryCta: HeroCTA;
  secondaryCta?: HeroCTA;
}

export const FINAL_CTA: CtaContent = {
  heading: "Tell us what your property needs.",
  supportingText:
    "Whether you need security personnel, facility support, manpower or verification services, start with the requirement and we’ll help you identify the right next step.",
  primaryCta: {
    label: "Discuss Your Requirement",
    href: `${ROUTES.contact}#contact-form`,
  },
  secondaryCta: {
    label: "View All Services",
    href: ROUTES.services,
  },
};