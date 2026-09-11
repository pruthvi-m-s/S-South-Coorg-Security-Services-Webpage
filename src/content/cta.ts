// ============================================================
// SSCSS — Final CTA Content
// ============================================================

import type { HeroCTA } from "../types";
import { ROUTES } from "@/lib/routes";
import { CONTACT } from "@/content/site";

export interface CtaContent {
  heading: string;
  supportingText: string;
  primaryCta: HeroCTA;
  secondaryCta?: HeroCTA;
  tertiaryCta?: HeroCTA;
}

export const FINAL_CTA: CtaContent = {
  heading: "Ready to secure your property?",
  supportingText:
    "Fill out a quick form, call us directly, or message us on WhatsApp — whichever is easiest for you.",
  primaryCta: {
    label: "Fill Out the Form",
    href: `${ROUTES.contact}#contact-form`,
  },
  secondaryCta: {
    label: "Call Us Now",
    href: `tel:${CONTACT.phone}`,
  },
  tertiaryCta: {
    label: "Message on WhatsApp",
    href: `https://wa.me/${CONTACT.whatsapp?.replace(/\D/g, "")}`,
  },
};