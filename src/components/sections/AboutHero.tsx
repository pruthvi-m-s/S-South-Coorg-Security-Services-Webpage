// ============================================================
// SSCSS — About Hero Section
// Page-level hero for the About page.
// Content-driven: heading, subtitle, and image from content layer.
// Simpler than the homepage hero — no CTAs, just introduces the page.
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
interface AboutHeroProps {
  title: string;
  subtitle: string;
  image: ImageRef;
  className?: string;
}

// ─── AboutHero ────────────────────────────────────────────────
export default function AboutHero({
  title,
  subtitle,
  image,
  className,
}: AboutHeroProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-background",
        "pt-24 pb-16 md:pt-32 md:pb-20 lg:pb-24",
        className,
      )}
      aria-label="About Hero"
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
            {/* Page label */}
            <motion.span
              variants={fadeUp}
              className={cn(
                "mb-4 inline-block text-xs font-semibold uppercase tracking-[0.12em]",
                "text-primary",
              )}
            >
              About Us
            </motion.span>

{/* Heading — H1 for the About page, Apple-style mask reveal */}
            <HeadlineReveal
              as="h1"
              delay={0.15}
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
                "mt-5 max-w-xl text-base leading-relaxed",
                "sm:text-lg",
                "text-muted-foreground",
              )}
            >
              {subtitle}
            </motion.p>
          </div>

          {/* ─── Right Visual ──────────────────────────── */}
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
        </motion.div>
      </div>
    </section>
  );
}

