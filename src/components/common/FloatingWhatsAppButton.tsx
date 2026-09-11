// ============================================================
// SSCSS — Floating WhatsApp Button
// Entrance animation + hover tooltip. No continuous pulse.
// Respects prefers-reduced-motion.
// ============================================================

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { CONTACT } from "@/content";
import WhatsAppIcon from "@/components/common/WhatsAppIcon";

interface FloatingWhatsAppButtonProps {
  className?: string;
}

export default function FloatingWhatsAppButton({
  className,
}: FloatingWhatsAppButtonProps) {
  if (!CONTACT.whatsapp) return null;

  const waNumber = CONTACT.whatsapp.replace(/\D/g, "");

  return (
    <motion.a
      href={`https://wa.me/${waNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      data-analytics-component="floating_whatsapp_button"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2, duration: 0.4, ease: [0, 0, 0.2, 1] }}
      className={cn(
        "fixed z-toast",
        "bottom-[max(1.25rem,env(safe-area-inset-bottom,1.25rem))]",
        "right-5",
        "group flex size-12 items-center justify-center rounded-full",
        "bg-[#25D366] text-white shadow-lg",
        "transition-all duration-300 ease-premium-out",
        "hover:-translate-y-0.5 hover:shadow-xl",
        "active:translate-y-[1px]",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c45a52]",
        "motion-reduce:transition-none",
        className,
      )}
    >
      <WhatsAppIcon className="size-6 relative z-10" />

      {/* Hover tooltip — hidden on touch devices via group-hover */}
      <span
        className={cn(
          "absolute right-full mr-3 whitespace-nowrap rounded-lg",
          "bg-[#191918] px-3 py-1.5 text-xs font-medium text-[#f5f1e8]",
          "shadow-lg ring-1 ring-[#2b2927]",
          "opacity-0 transition-opacity duration-200",
          "pointer-events-none",
          "group-hover:opacity-100",
          "max-md:hidden",
        )}
        aria-hidden="true"
      >
        Chat on WhatsApp
      </span>
    </motion.a>
  );
}
