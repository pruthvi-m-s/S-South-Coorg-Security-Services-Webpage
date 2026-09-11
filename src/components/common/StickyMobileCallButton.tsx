// ============================================================
// SSCSS — Sticky Mobile Call Button
// Entrance animation + safe-area handling. Mobile only.
// ============================================================

import { motion } from "framer-motion";
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
    <motion.a
      href={`tel:${CONTACT.phone}`}
      aria-label={`Call us at ${CONTACT.phone}`}
      data-analytics-component="sticky_call_button"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 2.5, duration: 0.4, ease: [0, 0, 0.2, 1] }}
      className={cn(
        "fixed z-toast md:hidden",
        "left-5",
        "inline-flex min-h-[44px] items-center gap-2",
        "rounded-full bg-[#b52b22] px-5 py-2.5",
        "text-sm font-semibold text-white shadow-lg",
        "transition-all duration-300 ease-premium-out",
        "hover:-translate-y-0.5 hover:bg-[#8f1912] hover:shadow-xl",
        "active:translate-y-[1px]",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c45a52]",
        "motion-reduce:transition-none",
        className,
      )}
      style={{
        bottom: "max(1.25rem, env(safe-area-inset-bottom, 1.25rem))",
        paddingBottom: "calc(0.625rem + env(safe-area-inset-bottom))",
      }}
    >
      <Phone
        size={18}
        aria-hidden="true"
      />
      <span>Call Now</span>
    </motion.a>
  );
}
