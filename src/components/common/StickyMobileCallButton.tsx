// ============================================================
// SSCSS — Sticky Mobile Call Button
// Persistent tap-to-call CTA for mobile visitors.
// Mobile only (hidden on md+). Positioned bottom-left so it
// never overlaps the Floating WhatsApp button (bottom-right).
// Respects device safe areas. Renders only when a phone is set.
// ============================================================

import { Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { CONTACT } from "@/content";

// ─── Props ────────────────────────────────────────────────────
interface StickyMobileCallButtonProps {
  className?: string;
}

// ─── StickyMobileCallButton ───────────────────────────────────
export default function StickyMobileCallButton({
  className,
}: StickyMobileCallButtonProps) {
  const hasPhone = Boolean(CONTACT.phone);
  if (!hasPhone) return null;

  return (
    <a
      href={`tel:${CONTACT.phone}`}
      aria-label={`Call us at ${CONTACT.phone}`}
      data-analytics-component="sticky_call_button"
      className={cn(
        "fixed bottom-5 left-5 z-toast",
        "inline-flex min-h-[44px] items-center gap-2 rounded-full",
        "bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-lg",
        "transition-all duration-300 ease-premium-out hover:-translate-y-0.5 hover:bg-primary-700 hover:shadow-xl active:translate-y-[1px]",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary focus-visible:shadow-[0_0_0_4px_rgba(139,30,30,0.12)]",
        "md:hidden",
        className,
      )}
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <Phone size={18} aria-hidden="true" />
      <span>Call Now</span>
    </a>
  );
}

