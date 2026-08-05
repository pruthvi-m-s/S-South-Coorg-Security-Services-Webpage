// ============================================================
// SSCSS — Company Story Section
// Rich narrative block for the About page.
// Content-driven: heading + array of paragraphs.
// ============================================================

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  staggerContainer,
  fadeUp,
  viewportOptions,
} from "@/lib/motion";

// ─── Props ────────────────────────────────────────────────────
interface CompanyStoryProps {
  title: string;
  paragraphs: string[];
  className?: string;
}

// ─── CompanyStory ─────────────────────────────────────────────
export default function CompanyStory({
  title,
  paragraphs,
  className,
}: CompanyStoryProps) {
  if (paragraphs.length === 0) return null;

  return (
    <section
      className={cn(
        "relative bg-background",
        className,
      )}
      aria-label="Our Story"
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

          {/* Divider accent */}
          <motion.div
            variants={fadeUp}
            className="mx-auto mt-4 h-1 w-12 rounded-full bg-primary"
            aria-hidden="true"
          />

          {/* Paragraphs */}
          <div className="mt-10 space-y-5">
            {paragraphs.map((paragraph, index) => (
              <motion.p
                key={index}
                variants={fadeUp}
                className={cn(
                  "text-base leading-relaxed",
                  "sm:text-lg",
                  "text-muted-foreground",
                )}
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

