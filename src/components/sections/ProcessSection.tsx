// ============================================================
// SSCSS — Process Section ("How We Work")
// Homepage section showing the company's workflow as a
// responsive step timeline.
// Desktop: horizontal layout.
// Tablet/Mobile: vertical layout.
// Content-driven: all copy from the content layer.
// ============================================================

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import ProcessStepCard from "@/components/sections/ProcessStepCard";
import SectionBackground from "@/components/common/SectionBackground";
import {
  staggerContainer,
  fadeUp,
  viewportOptions,
} from "@/lib/motion";
import type { ProcessStep } from "@/types";

// ─── Props ────────────────────────────────────────────────────
interface ProcessSectionProps {
  title: string;
  subtitle: string;
  steps: ProcessStep[];
  className?: string;
}

// ─── ProcessSection ───────────────────────────────────────────
export default function ProcessSection({
  title,
  subtitle,
  steps,
  className,
}: ProcessSectionProps) {
  if (steps.length === 0) return null;

  return (
    <section
      className={cn(
        "relative bg-muted",
        className,
      )}
      aria-label="How We Work"
    >
      <SectionBackground />
      <div className="section-container section-padding relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
        >
          {/* Section Heading */}
          <motion.h2
            variants={fadeUp}
            className={cn(
              "font-heading text-3xl font-semibold leading-tight tracking-tight",
              "sm:text-4xl",
              "text-ink text-center",
            )}
          >
            {title}
          </motion.h2>

          {/* Section Intro */}
          <motion.p
            variants={fadeUp}
            className={cn(
              "mx-auto mt-4 max-w-2xl text-center text-base leading-relaxed",
              "sm:text-lg",
              "text-muted-foreground",
            )}
          >
            {subtitle}
          </motion.p>

          {/* Steps — Desktop: horizontal, Mobile: vertical */}
          <motion.div
            variants={fadeUp}
            className="mt-12"
          >
            <div className="flex flex-col items-center gap-0 lg:flex-row lg:gap-8">
              {steps.map((step, index) => (
                <ProcessStepCard
                  key={`${step.step}-${index}`}
                  step={step}
                  isLast={index === steps.length - 1}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
