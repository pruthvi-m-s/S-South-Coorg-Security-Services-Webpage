// ============================================================
// SSCSS — ResponseTimePromise
// One-line inline trust element shown near forms and CTAs.
// Only renders when a response time is configured in the
// content layer — never fabricates expectations.
// ============================================================

import { Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { CONTACT } from "@/content";

// ─── Props ────────────────────────────────────────────────────
interface ResponseTimePromiseProps {
  className?: string;
}

// ─── ResponseTimePromise ──────────────────────────────────────
export default function ResponseTimePromise({
  className,
}: ResponseTimePromiseProps) {
  const responseTime = CONTACT.responseTime.trim();
  if (!responseTime) return null;

  return (
    <p
      className={cn(
        "inline-flex items-center gap-2 text-sm font-medium text-muted-foreground",
        className,
      )}
    >
      <Clock size={16} className="shrink-0 text-primary" aria-hidden="true" />
      <span>{responseTime}</span>
    </p>
  );
}

