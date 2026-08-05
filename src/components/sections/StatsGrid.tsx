// ============================================================
// SSCSS — StatsGrid Component
// Displays a responsive grid of StatCards.
// Content-driven — all data from the content layer.
// Reusable across pages (Home, About, etc.).
// ============================================================

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import StatCard from "@/components/sections/StatCard";
import {
  staggerContainer,
  viewportOptions,
} from "@/lib/motion";
import type { Stat } from "@/types";

// ─── Props ────────────────────────────────────────────────────
interface StatsGridProps {
  stats: Stat[];
  className?: string;
  /** Number of columns on desktop (default: based on content count) */
  columns?: 2 | 3 | 4;
}

// ─── StatsGrid ────────────────────────────────────────────────
export default function StatsGrid({
  stats,
  className,
  columns,
}: StatsGridProps) {
  if (stats.length === 0) return null;

  // Determine column count based on content or explicit prop
  const gridCols = columns ?? (stats.length === 2 ? 2 : stats.length === 3 ? 3 : 4);

  const gridClass = {
    2: "sm:grid-cols-2",
    3: "sm:grid-cols-2 lg:grid-cols-3",
    4: "sm:grid-cols-2 lg:grid-cols-4",
  }[gridCols];

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOptions}
      className={cn(
        "grid grid-cols-1 gap-6",
        gridClass,
        className,
      )}
    >
      {stats.map((stat) => (
        <StatCard key={stat.id} stat={stat} />
      ))}
    </motion.div>
  );
}

