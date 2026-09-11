// ============================================================
// SSCSS — EmergencyHotlineCard
// Subtle, non-intrusive direct-phone card for visitors with
// urgent / immediate deployment needs. Positioned as a direct
// line to the team — NOT framed as an emergency/panic message.
// Renders only when a phone number is configured.
// ============================================================

import { motion } from "framer-motion";
import { PhoneCall } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { CONTACT, EMERGENCY_HOTLINE } from "@/content";
import { fadeUp, viewportOptions } from "@/lib/motion";

// ─── Props ────────────────────────────────────────────────────
interface EmergencyHotlineCardProps {
  className?: string;
}

// ─── EmergencyHotlineCard ─────────────────────────────────────
export default function EmergencyHotlineCard({
  className,
}: EmergencyHotlineCardProps) {
  const hasPhone = Boolean(CONTACT.phone);
  if (!hasPhone) return null;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportOptions}
      className={className}
    >
      <motion.div variants={fadeUp}>
        <Card
          className={cn(
            "mx-auto flex max-w-4xl flex-col items-start gap-4 p-6 sm:flex-row sm:items-center",
            "border border-border bg-card",
          )}
        >
          <div
            className={cn(
              "flex size-12 shrink-0 items-center justify-center rounded-full",
              "bg-primary-50 text-primary",
            )}
            aria-hidden="true"
          >
            <PhoneCall size={22} strokeWidth={1.5} />
          </div>

          <div className="min-w-0 flex-1">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-primary">
              {EMERGENCY_HOTLINE.label}
            </p>
            <h3 className="mt-1 font-heading text-lg font-semibold leading-snug tracking-tight text-ink">
              {EMERGENCY_HOTLINE.headline}
            </h3>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              {EMERGENCY_HOTLINE.description}
            </p>
          </div>

          <a
            href={`tel:${CONTACT.phone}`}
            data-analytics-component="emergency_hotline_phone"
            className={cn(
              "inline-flex min-h-[44px] shrink-0 items-center gap-2 rounded-lg",
              "bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground",
              "hover:bg-primary-700 transition-colors duration-300 ease-premium-out",
              "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
            )}
            aria-label={`${EMERGENCY_HOTLINE.phoneLabel}: ${CONTACT.phone}`}
          >
            <PhoneCall size={18} aria-hidden="true" />
            <span>{EMERGENCY_HOTLINE.phoneLabel}</span>
          </a>
        </Card>
      </motion.div>
    </motion.div>
  );
}

