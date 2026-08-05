// ============================================================
// SSCSS — ServiceOverview Component
// Displays the overview text for a service detail page.
// Content-driven: title and overview paragraphs from content layer.
// Uses staggerContainer, fadeUp animations.
// ============================================================

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  staggerContainer,
  fadeUp,
  viewportOptions,
} from "@/lib/motion";

// ─── Props ────────────────────────────────────────────────────
interface ServiceOverviewProps {
  title?: string;
  overview: string;
  className?: string;
}

// ─── ServiceOverview ──────────────────────────────────────────
export default function ServiceOverview({
  title,
  overview,
  className,
}: ServiceOverviewProps) {
  return (
    <section
      className={cn(
        "relative bg-background",
        className,
      )}
      aria-label="Service Overview"
    >
      <div className="section-container section-padding">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="mx-auto max-w-4xl"
        >
          {/* Section Heading */}
          {title && (
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
          )}

          {/* Overview Paragraphs */}
          <motion.div
            variants={fadeUp}
            className={cn(
              "space-y-5 text-base leading-relaxed sm:text-lg",
              "text-muted-foreground",
              title ? "mt-8" : "",
            )}
          >
            {/* Split overview string by double newlines into paragraphs */}
            {overview.split("\n\n").filter(Boolean).map((paragraph, index) => (
              <p key={index} className={index === 0 ? "font-medium text-ink" : undefined}>
                {paragraph}
              </p>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

