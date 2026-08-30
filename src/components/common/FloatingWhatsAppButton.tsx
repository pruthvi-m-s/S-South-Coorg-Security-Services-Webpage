// ============================================================
// SSCSS — Floating WhatsApp Button
// ============================================================

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

  const waNumber =
    CONTACT.whatsapp.replace(/\D/g, "");

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
        "hover:-translate-y-0.5 hover:shadow-xl",
        "active:translate-y-[1px]",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c45a52]",
        className,
      )}
    >
      <WhatsAppIcon className="size-6" />
    </a>
  );
}