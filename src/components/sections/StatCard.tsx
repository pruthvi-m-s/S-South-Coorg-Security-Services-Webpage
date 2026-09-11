// ============================================================
// SSCSS — StatCard Component
// Reusable card for displaying a single statistic (value + label).
// Content-driven — all copy comes from the content layer.
// Designed for future reuse across the site.
// ============================================================

import { createElement } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { getIcon } from "@/lib/icons";
import { fadeUp } from "@/lib/motion";
import type { Stat } from "@/types";

// ─── Props ────────────────────────────────────────────────────
interface StatCardProps {
  stat: Stat;
  className?: string;
}

// ─── StatCard ─────────────────────────────────────────────────
export default function StatCard({ stat, className }: StatCardProps) {
  const { icon, value, suffix, label, description } = stat;

  return (
    <motion.div variants={fadeUp}>
      <Card
        className={cn(
          "group/statcard flex flex-col items-center p-6 text-center sm:p-8",
          "border border-border bg-card",
          "transition-all duration-300 ease-premium-out",
          "hover:border-primary/20 hover:shadow-md",
          className,
        )}
      >
        {/* Icon */}
        <div
          className={cn(
            "mb-4 flex size-12 items-center justify-center rounded-full",
            "bg-primary-50 text-primary",
          )}
          aria-hidden="true"
        >
          {createElement(getIcon(icon), { size: 22, strokeWidth: 1.5 })}
        </div>

        {/* Value + Suffix */}
        <span
          className={cn(
            "font-heading text-3xl font-semibold leading-tight tracking-tight",
            "sm:text-4xl",
            "text-ink",
          )}
        >
          <span>{value}</span>
          <span>{suffix}</span>
        </span>

        {/* Label */}
        <span
          className={cn(
            "mt-1.5 text-sm font-medium",
            "text-muted-foreground",
          )}
        >
          {label}
        </span>

        {/* Optional description (reserved for future use) */}
        {description && (
          <p
            className={cn(
              "mt-3 text-xs leading-relaxed",
              "text-muted-foreground/70",
            )}
          >
            {description}
          </p>
        )}
      </Card>
    </motion.div>
  );
}

