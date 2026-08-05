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
import type { HeroContent } from "@/types";
import {
  staggerContainer,
  fadeUp,
  scaleIn,
  viewportOptions,
} from "@/lib/motion";

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
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          viewport={viewportOptions}
          className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16"
        >
          {/* ─── Left Content ──────────────────────────────── */}
          <div className="order-2 lg:order-1">
            {/* Eyebrow */}
            <motion.span
              variants={fadeUp}
              className={cn(
                "mb-4 inline-block text-xs font-semibold uppercase tracking-[0.12em]",
                "text-primary",
              )}
            >
              {eyebrow}
            </motion.span>

            {/* Headline — single H1 for the page */}
            <motion.h1
              variants={fadeUp}
              className={cn(
                "font-heading text-4xl font-semibold leading-tight tracking-tight",
                "sm:text-5xl lg:text-6xl",
                "text-ink",
              )}
            >
              {headline}
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={fadeUp}
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

          {/* ─── Right Visual ──────────────────────────────── */}
          <motion.div
            variants={scaleIn}
            className="order-1 lg:order-2 flex justify-center"
          >
            <figure className="relative">
              <img
                src={heroImage.src}
                alt={heroImage.alt}
                className={cn(
                  "h-auto w-full max-w-lg rounded-lg object-cover",
                  "shadow-lg",
                )}
                width={800}
                height={600}
                loading="eager"
                fetchPriority="high"
                decoding="sync"
              />
              {heroImage.isPlaceholder && heroImage.credit && (
                <figcaption className="sr-only">{heroImage.credit}</figcaption>
              )}
              {/* Subtle overlay for readability if needed — reserved */}
            </figure>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

