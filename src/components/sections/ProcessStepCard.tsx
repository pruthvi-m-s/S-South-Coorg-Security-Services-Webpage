// ============================================================
// SSCSS — ProcessStepCard Component
// Reusable step card for the "How We Work" timeline section.
// Desktop: horizontal layout with connecting lines.
// Mobile: vertical layout with connecting lines.
// No scaling. Subtle hover border/shadow only.
// ============================================================

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { fadeUp } from "@/lib/motion";
import type { ProcessStep } from "@/types";

// ─── Props ────────────────────────────────────────────────────
interface ProcessStepCardProps {
  step: ProcessStep;
  isLast: boolean;
}

// ─── ProcessStepCard ──────────────────────────────────────────
export default function ProcessStepCard({
  step,
  isLast,
}: ProcessStepCardProps) {
  return (
    <motion.div
      variants={fadeUp}
      className={cn(
        "relative flex flex-col items-center text-center",
        "lg:flex-1",
      )}
    >
      {/* Step Number Circle + Connector */}
      <div className="relative flex flex-col items-center">
        {/* Step Circle */}
        <div
          className={cn(
            "relative z-10 flex size-14 items-center justify-center rounded-full",
            "border-2 border-primary bg-background",
            "transition-all duration-300 ease-premium-out",
            "group-hover:shadow-md",
          )}
          aria-hidden="true"
        >
          <span
            className={cn(
              "font-heading text-xl font-bold leading-none",
              "text-primary",
            )}
          >
            {String(step.step).padStart(2, "0")}
          </span>
        </div>

        {/* Connector Line — not rendered for last item */}
        {!isLast && (
          <div
            className={cn(
              "absolute top-14",
              // Desktop: horizontal line to the right
              "hidden lg:block",
              "left-1/2 h-0.5 w-full",
              "bg-border",
            )}
            aria-hidden="true"
          />
        )}
      </div>

      {/* Mobile/Tablet Vertical Connector */}
      {!isLast && (
        <div
          className={cn(
            "block lg:hidden",
            "h-8 w-0.5",
            "bg-border",
          )}
          aria-hidden="true"
        />
      )}

      {/* Content */}
      <div className="mt-4 lg:mt-6 lg:px-4">
        <h3
          className={cn(
            "font-heading text-lg font-semibold leading-snug tracking-tight",
            "text-ink",
          )}
        >
          {step.title}
        </h3>
        <p
          className={cn(
            "mt-2 text-sm leading-relaxed",
            "text-muted-foreground",
          )}
        >
          {step.description}
        </p>
      </div>
    </motion.div>
  );
}

