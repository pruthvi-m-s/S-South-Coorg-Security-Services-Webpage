// ============================================================
// SSCSS — Sticky Mobile Call Button
// ============================================================

import { Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { CONTACT } from "@/content";

interface StickyMobileCallButtonProps {
  className?: string;
}

export default function StickyMobileCallButton({
  className,
}: StickyMobileCallButtonProps) {
  if (!CONTACT.phone) return null;

  return (
    <a
      href={`tel:${CONTACT.phone}`}
      aria-label={`Call us at ${CONTACT.phone}`}
      data-analytics-component="sticky_call_button"
      className={cn(
        "fixed bottom-5 left-5 z-toast md:hidden",
        "inline-flex min-h-[44px] items-center gap-2",
        "rounded-full bg-[#b52b22] px-5 py-2.5",
        "text-sm font-semibold text-white shadow-lg",
        "transition-all duration-300 ease-premium-out",
        "hover:-translate-y-0.5 hover:bg-[#8f1912] hover:shadow-xl",
        "active:translate-y-[1px]",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c45a52]",
        className,
      )}
      style={{
        paddingBottom:
          "calc(0.625rem + env(safe-area-inset-bottom))",
      }}
    >
      <Phone
        size={18}
        aria-hidden="true"
      />
      <span>Call Now</span>
    </a>
  );
}