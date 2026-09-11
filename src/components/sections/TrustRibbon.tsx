// ============================================================
// SSCSS — TrustRibbon
// Compact horizontal strip of key trust markers for use near
// CTAs and above the fold. Reuses Stat + Certification data.
// No counters / animated numbers — just a calm summary.
// ============================================================

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import PSARABadge from "@/components/sections/PSARABadge";
import { fadeUp, viewportOptions } from "@/lib/motion";
import { ROUTES } from "@/lib/routes";
import type { Stat, Certification } from "@/types";

// ─── Props ────────────────────────────────────────────────────
interface TrustRibbonProps {
  stats: Stat[];
  certifications?: Certification[];
  psaraLabels?: { verified: string; pending: string };
  className?: string;
}

// ─── Context labels that ground stats in evidence ──────────────
const EVIDENCE_LABELS: Record<string, string> = {
  "stat-years": "established 2008",
  "stat-guards": "active personnel",
  "stat-clients": "partner organizations",
};

// ─── TrustRibbon ──────────────────────────────────────────────
export default function TrustRibbon({
  stats,
  certifications,
  psaraLabels,
  className,
}: TrustRibbonProps) {
  const visibleStats = stats.slice(0, 3);
  const psara = certifications?.find((c) => c.type === "PSARA");

  if (visibleStats.length === 0 && !psara) return null;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportOptions}
      className={cn("grid grid-cols-1 divide-y divide-border border-y border-border sm:grid-cols-3 sm:divide-x sm:divide-y-0", className)}
    >
      {/* Key stats (compact, grounded in evidence) */}
      {visibleStats.map((stat) => (
        <motion.span
          key={stat.id}
          variants={fadeUp}
          className={cn(
            "flex items-baseline justify-between gap-4 px-1 py-5 sm:flex-col sm:items-start sm:justify-center sm:py-6 sm:px-7 first:sm:pl-0 last:sm:pr-0",
          )}
        >
          <span className="font-heading text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            {stat.value}<span className="text-primary">+</span>
          </span>
          <span className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            {EVIDENCE_LABELS[stat.id] ?? stat.suffix.replace("+ ", "")}
          </span>
        </motion.span>
      ))}

      {/* PSARA badge */}
      {psara && psaraLabels && (
        <motion.span variants={fadeUp} className="col-span-full flex items-center justify-center border-t border-border px-1 py-4 sm:col-span-3">
          <PSARABadge
            certification={psara}
            labels={psaraLabels}
            href={ROUTES.compliance}
          />
        </motion.span>
      )}
    </motion.div>
  );
}

