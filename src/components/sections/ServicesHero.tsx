// ============================================================
// SSCSS — ServicesHero Component
// Page-level hero for the Services Hub page.
// Content-driven: title, subtitle from content layer.
// H1 heading for semantic hierarchy.
// Uses staggerContainer, fadeUp animations.
// Background: bg-muted for visual separation from the page.
// No CTAs — this is a hub overview hero.
// ============================================================

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import HeadlineReveal from "@/components/common/HeadlineReveal";
import {
  staggerContainer,
  fadeUp,
  viewportOptions,
} from "@/lib/motion";

// ─── Props ────────────────────────────────────────────────────
interface ServicesHeroProps {
  title: string;
  subtitle: string;
  className?: string;
}

// ─── ServicesHero ─────────────────────────────────────────────
export default function ServicesHero({
  title,
  subtitle,
  className,
}: ServicesHeroProps) {
  return (
    <section
      className={cn(
        "relative bg-muted",
        className,
      )}
      aria-label="Services Hub"
    >
      <div className="section-container section-padding">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="mx-auto max-w-4xl text-center"
        >
{/* Page Title — Apple-style mask reveal */}
          <HeadlineReveal
            as="h1"
            delay={0.1}
            className={cn(
              "font-heading text-4xl font-semibold leading-tight tracking-tight",
              "sm:text-5xl lg:text-6xl",
              "text-ink",
            )}
          >
            {title}
          </HeadlineReveal>

          {/* Subtitle */}
          <motion.p
            variants={fadeUp}
            className={cn(
              "mx-auto mt-5 max-w-3xl text-base leading-relaxed",
              "sm:text-lg",
              "text-muted-foreground",
            )}
          >
            {subtitle}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

