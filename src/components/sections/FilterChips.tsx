// ============================================================
// SSCSS — Generic Filter Chips Component
//
// Reusable chip-based filter for categories, tags, etc.
// Props: items, selected, onChange
// Can be used for FAQ categories, Gallery filters, etc.
// ============================================================

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { fadeUp, staggerContainer, viewportOptions } from "@/lib/motion";

// ─── Types ──────────────────────────────────────────────────

export interface ChipItem<T = string> {
  value: T;
  label: string;
}

interface FilterChipsProps<T = string> {
  /** Array of chip items to display */
  items: ChipItem<T>[];
  /** Currently selected value (or null for "All") */
  selected: T | null;
  /** Callback when a chip is selected */
  onChange: (value: T | null) => void;
  /** Optional CSS class name */
  className?: string;
}

// ─── FilterChips Component ──────────────────────────────────

export default function FilterChips<T = string>({
  items,
  selected,
  onChange,
  className,
}: FilterChipsProps<T>) {
  if (items.length === 0) return null;

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOptions}
      className={cn("flex flex-wrap items-center justify-center gap-2", className)}
      role="group"
      aria-label="Filters"
    >
      {items.map((item) => {
        const isActive = selected === item.value;

        return (
          <motion.button
            key={String(item.value)}
            variants={fadeUp}
            type="button"
            onClick={() => onChange(isActive ? null : item.value)}
            className={cn(
              "inline-flex items-center justify-center rounded-full border px-4 py-2.5 text-sm font-medium min-h-[44px]",
              "transition-all duration-300 ease-premium-out",
              "focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2",
              isActive
                ? "border-primary bg-primary text-primary-foreground shadow-xs"
                : "border-border bg-background text-muted-foreground hover:border-primary/30 hover:text-ink",
            )}
            aria-pressed={isActive}
          >
            {item.label}
          </motion.button>
        );
      })}
    </motion.div>
  );
}

