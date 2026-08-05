// ============================================================
// SSCSS — Pricing Disclaimer Content
// Single source of truth for the pricing disclaimer note shown
// near inquiry CTAs on service pages.
// Kept intentionally short — every deployment is different.
// ============================================================

export interface PricingDisclaimerContent {
  text: string;
}

export const PRICING_DISCLAIMER: PricingDisclaimerContent = {
  text: "Every deployment is different. Pricing is provided after understanding your requirements.",
};

