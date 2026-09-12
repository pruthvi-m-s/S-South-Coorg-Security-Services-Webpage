import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { Stat } from "@/types";

interface StatsGridProps {
  stats: Stat[];
  columns?: 2 | 3 | 4;
  className?: string;
}

// Context labels that ground stats in evidence
const EVIDENCE_LABELS: Record<string, string> = {
  "stat-years": "established 2008",
  "stat-guards": "active personnel deployed",
  "stat-clients": "partner organizations across sectors",
};

export default function StatsGrid({
  stats,
  columns = 3,
  className,
}: StatsGridProps) {
  if (stats.length === 0) return null;

  const columnClass =
    columns === 4
      ? "lg:grid-cols-4"
      : columns === 2
        ? "lg:grid-cols-2"
        : "lg:grid-cols-3";

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      className={cn(
        "grid grid-cols-1 sm:grid-cols-2",
        columnClass,
        className,
      )}
    >
      {stats.map((stat, index) => (
        <motion.div
          key={stat.id}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.45,
            delay: index * 0.08,
          }}
          className={cn(
            "border-b border-[#2b2927] px-0 py-7 sm:px-6",
            "lg:border-b-0 lg:border-r lg:px-8",
            index === 0 && "sm:pl-0 lg:pl-0",
            index === stats.length - 1 &&
              "lg:border-r-0 lg:pr-0",
          )}
        >
          <p className="font-heading text-5xl font-semibold leading-none tracking-tight text-[#f5f1e8] sm:text-6xl">
            {stat.value}
            <span className="text-[#b52b22]">+</span>
          </p>

          <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-[#c45a52]">
            {stat.label}
          </p>

          <p className="mt-2 text-sm leading-6 text-[#9a9590]">
            {EVIDENCE_LABELS[stat.id] ?? stat.suffix.replace("+", "").trim()}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
}