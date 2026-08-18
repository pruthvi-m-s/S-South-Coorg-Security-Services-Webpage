// ============================================================
// SSCSS — IndustriesHero Component
// Page-level hero for the Industries page.
// Content-driven: title (h1) and subtitle from content layer.
// Two-column layout on desktop, stacked on mobile.
// Uses staggerContainer, fadeUp, scaleIn animations.
// ============================================================

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import HeadlineReveal from "@/components/common/HeadlineReveal";
import ImageWithSkeleton from "@/components/common/ImageWithSkeleton";
import { techPark } from "@/lib/site-images";
import {
  staggerContainer,
  fadeUp,
  scaleIn,
  viewportOptions,
} from "@/lib/motion";

// ─── Props ────────────────────────────────────────────────────
interface IndustriesHeroProps {
  title: string;
  subtitle: string;
  className?: string;
}

// ─── IndustriesHero ───────────────────────────────────────────
export default function IndustriesHero({
  title,
  subtitle,
  className,
}: IndustriesHeroProps) {
  return (
    <section
      className={cn(
        "relative bg-muted",
        className,
      )}
      aria-label="Industries Hero"
    >
      <div className="section-container section-padding">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          viewport={viewportOptions}
          className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2"
        >
          {/* Text Content */}
          <div>
{/* Page Title */}
            <HeadlineReveal
              as="h1"
              delay={0.1}
              className={cn(
                "font-heading text-4xl font-semibold leading-tight tracking-tight",
                "sm:text-5xl",
                "text-ink",
              )}
            >
              {title}
            </HeadlineReveal>

            {/* Subtitle */}
            <motion.p
              variants={fadeUp}
              className={cn(
                "mt-5 text-base leading-relaxed",
                "sm:text-lg",
                "text-muted-foreground",
              )}
            >
              {subtitle}
            </motion.p>
          </div>

          {/* Wide environmental image */}
          <motion.div
            variants={scaleIn}
            className="overflow-hidden rounded-2xl border border-border bg-primary-50"
          >
            <ImageWithSkeleton src={techPark} alt="Corporate, residential, industrial and commercial environments served by SSCSS" containerClassName="aspect-[21/9] w-full" className="size-full object-cover object-center" loading="eager" decoding="async" fetchPriority="high" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

