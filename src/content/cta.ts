// ============================================================
// SSCSS — Final CTA Section Content (Homepage)
// Single source of truth for the bottom-of-homepage CTA band.
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
  heading: "Ready to Secure Your Premises?",
  supportingText:
    "Get in touch with our team today for a free consultation and customized security or manpower solution for your organization.",
  primaryCta: {
    label: "Get a Free Quote",
    href: `${ROUTES.contact}#contact-form`,
  },
  secondaryCta: {
    label: "View All Services",
    href: ROUTES.services,
  },
};

