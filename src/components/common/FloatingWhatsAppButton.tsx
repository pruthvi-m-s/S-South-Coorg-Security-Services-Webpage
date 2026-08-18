// ============================================================
// SSCSS — Floating WhatsApp Button
// Persistent WhatsApp entry point on all pages.
// Static, always-available, never auto-opens. No pulsing,
// bouncing, tooltips, or unread badges.
// Renders only when a WhatsApp number is configured.
// ============================================================

import { cn } from "@/lib/utils";
import { CONTACT } from "@/content";
import WhatsAppIcon from "@/components/common/WhatsAppIcon";

// ─── Props ────────────────────────────────────────────────────
interface FloatingWhatsAppButtonProps {
  className?: string;
}

// ─── FloatingWhatsAppButton ───────────────────────────────────
export default function FloatingWhatsAppButton({
  className,
}: FloatingWhatsAppButtonProps) {
  const hasWhatsApp = Boolean(CONTACT.whatsapp);
  if (!hasWhatsApp) return null;

  const waNumber = CONTACT.whatsapp.replace(/\D/g, "");

  return (
    <a
      href={`https://wa.me/${waNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      data-analytics-component="floating_whatsapp_button"
      className={cn(
        "fixed bottom-5 right-5 z-toast",
        "flex size-12 items-center justify-center rounded-full",
        "bg-[#25D366] text-white shadow-lg",
        "transition-all duration-300 ease-premium-out",
        "hover:-translate-y-0.5 hover:bg-[#1ebe57] hover:shadow-xl",
        "active:translate-y-[1px]",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary focus-visible:shadow-[0_0_0_4px_rgba(139,30,30,0.12)]",
        className,
      )}
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <WhatsAppIcon className="size-6" />
    </a>
  );
}

