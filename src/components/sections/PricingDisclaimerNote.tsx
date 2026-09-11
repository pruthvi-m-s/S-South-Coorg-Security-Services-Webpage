import { Info } from "lucide-react";
import { cn } from "@/lib/utils";
import { PRICING_DISCLAIMER } from "@/content";

interface PricingDisclaimerNoteProps {
  className?: string;
}

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
      <Info
        size={14}
        className="mt-0.5 shrink-0 opacity-60"
        aria-hidden="true"
      />

      <span>{PRICING_DISCLAIMER.text}</span>
    </p>
  );
}