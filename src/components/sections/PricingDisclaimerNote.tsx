// ============================================================
// SSCSS — PricingDisclaimerNote
// Small, honest note clarifying that pricing is quote-based.
// Shown near inquiry CTAs on service pages.
// Kept extremely short — every deployment is different.
// ============================================================

import { Info } from "lucide-react";
import { cn } from "@/lib/utils";
import { PRICING_DISCLAIMER } from "@/content";

// ─── Props ────────────────────────────────────────────────────
interface PricingDisclaimerNoteProps {
  className?: string;
}

// ─── PricingDisclaimerNote ────────────────────────────────────
export default function PricingDisclaimerNote({
  className,
}: PricingDisclaimerNoteProps) {
  if (!PRICING_DISCLAIMER.text) return null;

  return (
    <p
      className={cn(
        "inline-flex items-start gap-2 text-xs leading-relaxed text-muted-foreground",
        className,
      )}
    >
      <Info size={14} className="mt-0.5 shrink-0 text-muted-foreground/60" aria-hidden="true" />
      <span>{PRICING_DISCLAIMER.text}</span>
    </p>
  );
}

