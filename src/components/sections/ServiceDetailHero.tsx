// ============================================================
// SSCSS — ServiceDetailHero Component
// Page-level hero for an individual service detail page.
// Content-driven: service name, tagline, hero image.
// Two-column layout: text left, image right.
// Uses staggerContainer, fadeUp, scaleIn animations.
// No CTAs — this hero introduces the specific service.
// ============================================================

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import HeadlineReveal from "@/components/common/HeadlineReveal";
import ImageWithSkeleton from "@/components/common/ImageWithSkeleton";
import HeroSkeleton from "@/components/common/HeroSkeleton";
import { BorderTrail } from "../../../components/motion-primitives/border-trail";
import type { ImageRef } from "@/types";
import {
  staggerContainer,
  fadeUp,
  scaleIn,
  viewportOptions,
} from "@/lib/motion";

// ─── Props ────────────────────────────────────────────────────
interface ServiceDetailHeroProps {
  name: string;
  tagline: string;
  image?: ImageRef;
  className?: string;
}

// ─── ServiceDetailHero ────────────────────────────────────────
export default function ServiceDetailHero({
  name,
  tagline,
  image,
  className,
}: ServiceDetailHeroProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-background",
        "pt-24 pb-16 md:pt-32 md:pb-20 lg:pb-24",
        className,
      )}
      aria-label={`${name} Hero`}
    >
      <div className="section-container">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          viewport={viewportOptions}
          className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16"
        >
          {/* ─── Left Content ──────────────────────────── */}
          <div>
            {/* Page label — service slug as breadcrumb context */}
            <motion.span
              variants={fadeUp}
              className={cn(
                "mb-4 inline-block text-xs font-semibold uppercase tracking-[0.12em]",
                "text-primary",
              )}
            >
              Our Services
            </motion.span>

{/* Service name — H1 for the page, Apple-style mask reveal */}
            <HeadlineReveal
              as="h1"
              delay={0.15}
              className={cn(
                "font-heading text-4xl font-semibold leading-tight tracking-tight",
                "sm:text-5xl lg:text-6xl",
                "text-ink",
              )}
            >
              {name}
            </HeadlineReveal>

            {/* Tagline */}
            <motion.p
              variants={fadeUp}
              className={cn(
                "mt-5 max-w-xl text-base leading-relaxed",
                "sm:text-lg",
                "text-muted-foreground",
              )}
            >
              {tagline}
            </motion.p>
          </div>

          {/* ─── Right Visual ──────────────────────────── */}
          {image && (
            <motion.div
              variants={scaleIn}
              className="flex justify-center"
            >
<figure className="relative rounded-lg">
              <ImageWithSkeleton
                src={image.src}
                alt={image.alt}
                skeleton={<HeroSkeleton className="h-full w-full" />}
                containerClassName="w-full max-w-lg"
                className={cn(
                  "h-auto w-full max-w-lg rounded-lg object-cover",
                  "shadow-lg",
                )}
                width={800}
                height={600}
                loading="lazy"
                decoding="async"
                fetchPriority="low"
              />
              <BorderTrail
                size={60}
                className="bg-primary/50"
                transition={{ repeat: Infinity, duration: 9, ease: "linear" }}
              />
                {image.isPlaceholder && image.credit && (
                  <figcaption className="sr-only">{image.credit}</figcaption>
                )}
              </figure>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}

