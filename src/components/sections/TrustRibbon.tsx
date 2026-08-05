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
      className={cn(
        "flex flex-wrap items-center justify-center gap-x-8 gap-y-4",
        className,
      )}
    >
      {/* Key stats (compact, no counters) */}
      {visibleStats.map((stat) => (
        <motion.span
          key={stat.id}
          variants={fadeUp}
          className={cn(
            "inline-flex items-baseline gap-1.5",
            "text-sm font-medium text-muted-foreground",
          )}
        >
          <span className="font-heading text-lg font-semibold text-ink">
            {stat.value}
            {stat.suffix}
          </span>
          {stat.label}
        </motion.span>
      ))}

      {/* PSARA badge */}
      {psara && psaraLabels && (
        <motion.span variants={fadeUp} className="inline-flex items-center">
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

