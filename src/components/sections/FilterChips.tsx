import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  fadeUp,
  staggerContainer,
  viewportOptions,
} from "@/lib/motion";

export interface ChipItem<T = string> {
  value: T;
  label: string;
}

interface FilterChipsProps<T = string> {
  items: ChipItem<T>[];
  selected: T | null;
  onChange: (value: T | null) => void;
  className?: string;
}

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
      className={cn(
        "flex flex-wrap items-center justify-center gap-2",
        className,
      )}
      role="group"
      aria-label="FAQ category filters"
    >
      <motion.button
        variants={fadeUp}
        type="button"
        onClick={() => onChange(null)}
        aria-pressed={selected === null}
        className={cn(
          "min-h-11 rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-200",
          "focus-visible:outline-2 focus-visible:outline-[#b52b22] focus-visible:outline-offset-2",
          selected === null
            ? "border-[#b52b22] bg-[#b52b22] text-white"
            : "border-[#3a3835] bg-transparent text-[#99938c] hover:border-[#9a9590] hover:text-[#f5f1e8]",
        )}
      >
        All
      </motion.button>

      {items.map((item) => {
        const isActive =
          selected === item.value;

        return (
          <motion.button
            key={String(item.value)}
            variants={fadeUp}
            type="button"
            onClick={() =>
              onChange(
                isActive ? null : item.value,
              )
            }
            aria-pressed={isActive}
            className={cn(
              "min-h-11 rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-200",
              "focus-visible:outline-2 focus-visible:outline-[#b52b22] focus-visible:outline-offset-2",
              isActive
                ? "border-[#b52b22] bg-[#b52b22] text-white"
                : "border-[#3a3835] bg-transparent text-[#99938c] hover:border-[#9a9590] hover:text-[#f5f1e8]",
            )}
          >
            {item.label}
          </motion.button>
        );
      })}
    </motion.div>
  );
}