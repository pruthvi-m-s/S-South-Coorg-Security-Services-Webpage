// ============================================================
// SSCSS — Hero Section
// Reusable hero component for the Home page.
// Content-driven: all copy and assets come from the content layer.
// ============================================================

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import HeadlineReveal from "@/components/common/HeadlineReveal";
import ImageWithSkeleton from "@/components/common/ImageWithSkeleton";
import HeroSkeleton from "@/components/common/HeroSkeleton";
import type { HeroContent } from "@/types";
import { fadeUp, viewportOptions } from "@/lib/motion";

// ─── Props ────────────────────────────────────────────────────
interface HeroProps {
  content: HeroContent;
  className?: string;
}

// ─── Hero ─────────────────────────────────────────────────────
export default function Hero({ content, className }: HeroProps) {
  const { eyebrow, headline, description, primaryCta, secondaryCta, heroImage } =
    content;

  return (
    <section
      className={cn(
        "relative overflow-hidden bg-background",
        "min-h-[calc(100vh-var(--header-height))]",
        "flex items-center",
        className,
      )}
      aria-label="Hero"
    >
      <div className="section-container section-padding w-full">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:gap-20">
          {/* ─── Left Content ──────────────────────────────── */}
          <div className="order-2 lg:order-1">
            {/* Eyebrow */}
            <motion.span
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.45 }}
              className={cn(
                "mb-4 inline-block text-xs font-semibold uppercase tracking-[0.12em]",
                "text-primary",
              )}
            >
              {eyebrow}
            </motion.span>

{/* Headline — single H1 for the page, Apple-style mask reveal */}
            <HeadlineReveal
              as="h1"
              delay={0.62}
              className={cn(
                "font-heading text-4xl font-semibold leading-tight tracking-tight",
                "sm:text-5xl lg:text-6xl",
                "text-ink",
              )}
            >
              {headline}
            </HeadlineReveal>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.95 }}
              className={cn(
                "mt-5 max-w-xl text-base leading-relaxed",
                "sm:text-lg",
                "text-muted-foreground",
              )}
            >
              {description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 1.12 }}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              {/* Primary CTA */}
              <Link
                to={primaryCta.href}
                className="w-full sm:w-auto"
              >
                <Button
                  variant="default"
                  size="lg"
                  data-analytics-cta={`hero_${primaryCta.label.toLowerCase().replace(/\s+/g, "_")}`}
                  className="w-full"
                >
                  {primaryCta.label}
                  <ArrowRight size={18} className="ml-1.5" aria-hidden="true" />
                </Button>
              </Link>

              {/* Secondary CTA */}
              <Link
                to={secondaryCta.href}
                className="w-full sm:w-auto"
              >
                <Button
                  variant="outline"
                  size="lg"
                  data-analytics-cta={`hero_${secondaryCta.label.toLowerCase().replace(/\s+/g, "_")}`}
                  className="w-full"
                >
                  {secondaryCta.label}
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* ─── Right Visual — real SSCSS photography, editorial ── */}
          <motion.div
            initial={{ opacity: 0, scale: 1.06, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.05, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            viewport={viewportOptions}
            className="order-1 flex justify-center lg:order-2"
          >
            <figure className="relative w-full max-w-2xl">
              <div className="relative overflow-hidden rounded-sm bg-card shadow-xl">
                <div className="aspect-[16/10] w-full">
                  <ImageWithSkeleton
                    src={heroImage.src}
                    alt={heroImage.alt}
                    skeleton={<HeroSkeleton className="h-full w-full rounded-none" />}
                    containerClassName="size-full"
                    className="size-full object-cover object-center"
                    width={1200}
                    height={750}
                    loading="eager"
                    fetchPriority="high"
                    decoding="sync"
                  />
                </div>
                {/* Subtle dark gradient for depth — readability only */}
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/25 via-transparent to-transparent"
                  aria-hidden="true"
                />
                {/* Refined inner hairline */}
                <div
                  className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/15"
                  aria-hidden="true"
                />
              </div>
              {heroImage.isPlaceholder && heroImage.credit && (
                <figcaption className="sr-only">{heroImage.credit}</figcaption>
              )}
            </figure>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

