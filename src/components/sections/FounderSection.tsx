// ============================================================
// SSCSS — Founder Highlight Section (Home)
// Premium "Meet Our Founder" trust-building section placed
// before the final CTA. Content-driven: all copy from the
// content layer. Responsive: 2-col desktop, stacked mobile.
// ============================================================

import { createElement } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { getIcon } from "@/lib/icons";
import {
  staggerContainer,
  fadeUp,
  scaleIn,
  viewportOptions,
} from "@/lib/motion";
import type { FounderContent } from "@/content/founder";

// ─── Props ────────────────────────────────────────────────────
interface FounderSectionProps {
  content: FounderContent;
  className?: string;
}

// ─── FounderSection ───────────────────────────────────────────
export default function FounderSection({
  content,
  className,
}: FounderSectionProps) {
  const {
    eyebrow,
    heading,
    name,
    designation,
    experienceBadge,
    experienceCaption,
    message,
    quote,
    image,
    achievements,
  } = content;

  return (
    <section
      className={cn(
        "relative overflow-hidden bg-primary-50",
        className,
      )}
      aria-label="Meet Our Founder"
    >
      {/* Subtle background pattern — decorative only */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #8B1E1E 1px, transparent 1px), linear-gradient(to bottom, #8B1E1E 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="section-container section-padding relative">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16"
        >
          {/* ─── Left Column — Portrait & Identity ─────────── */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col items-center text-center lg:items-start lg:text-left"
          >
            {/* Portrait */}
            <motion.figure
              variants={scaleIn}
              className="relative w-full max-w-sm"
            >
              <img
                src={image.src}
                alt={image.alt}
                className={cn(
                  "aspect-[4/5] w-full rounded-2xl object-cover",
                  "border border-primary/10 shadow-xl",
                  "bg-muted",
                )}
                width={480}
                height={600}
                loading="lazy"
                decoding="async"
                fetchPriority="low"
              />
              {image.isPlaceholder && image.credit && (
                <figcaption className="sr-only">{image.credit}</figcaption>
              )}
            </motion.figure>

            {/* Name */}
            <motion.h3
              variants={fadeUp}
              className={cn(
                "font-heading text-2xl font-semibold leading-tight tracking-tight",
                "sm:text-3xl",
                "text-ink",
              )}
            >
              {name}
            </motion.h3>

            {/* Designation */}
            <motion.p
              variants={fadeUp}
              className={cn(
                "mt-2 text-sm font-medium leading-relaxed tracking-wide",
                "text-primary",
              )}
            >
              {designation}
            </motion.p>

            {/* Experience Badge */}
            <motion.div
              variants={fadeUp}
              className={cn(
                "mt-6 inline-flex flex-col items-center rounded-xl",
                "border border-primary/15 bg-background px-6 py-4",
                "shadow-md",
              )}
            >
              <span
                className={cn(
                  "font-heading text-xl font-semibold leading-none tracking-tight",
                  "text-primary",
                )}
              >
                {experienceBadge}
              </span>
              <span
                className={cn(
                  "mt-1.5 text-xs leading-relaxed text-muted-foreground",
                )}
              >
                {experienceCaption}
              </span>
            </motion.div>
          </motion.div>

          {/* ─── Right Column — Message & Achievements ─────── */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col"
          >
            {/* Eyebrow */}
            <motion.span
              variants={fadeUp}
              className={cn(
                "mb-3 inline-block text-xs font-semibold uppercase tracking-[0.12em]",
                "text-primary",
              )}
            >
              {eyebrow}
            </motion.span>

            {/* Heading */}
            <motion.h2
              variants={fadeUp}
              className={cn(
                "font-heading text-3xl font-semibold leading-tight tracking-tight",
                "sm:text-4xl",
                "text-ink",
              )}
            >
              {heading}
            </motion.h2>

            {/* Accent line */}
            <motion.div
              variants={fadeUp}
              aria-hidden="true"
              className={cn(
                "mt-5 h-1 w-16 rounded-full",
                "bg-primary",
              )}
            />

            {/* Professional message */}
            <motion.p
              variants={fadeUp}
              className={cn(
                "mt-6 max-w-xl text-base leading-relaxed",
                "text-muted-foreground",
              )}
            >
              {message}
            </motion.p>

            {/* Quote */}
            <motion.blockquote
              variants={fadeUp}
              className={cn(
                "relative mt-8 max-w-xl rounded-xl border-l-4 border-primary",
                "bg-background px-6 py-5",
                "shadow-sm",
              )}
            >
              <div
                className={cn(
                  "mb-3 flex size-9 items-center justify-center rounded-full",
                  "bg-primary-50 text-primary",
                )}
                aria-hidden="true"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                  <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
                </svg>
              </div>
              <p className="text-base leading-relaxed italic text-ink">
                &ldquo;{quote}&rdquo;
              </p>
            </motion.blockquote>

            {/* Achievement Cards */}
            <motion.div
              variants={fadeUp}
              className="mt-10"
            >
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {achievements.map((achievement, index) => (
                  <motion.div key={`${achievement.title}-${index}`} variants={fadeUp}>
                    <Card
                      className={cn(
                        "flex items-center gap-4 p-5",
                        "border border-primary/10 bg-background",
                        "transition-all duration-300 ease-premium-out",
                        "hover:border-primary/20 hover:shadow-md",
                        "h-full",
                      )}
                    >
                      {/* Icon */}
                      <div
                        className={cn(
                          "flex size-11 shrink-0 items-center justify-center rounded-full",
                          "bg-primary-50 text-primary",
                        )}
                        aria-hidden="true"
                      >
                        {createElement(getIcon(achievement.icon), {
                          size: 20,
                          strokeWidth: 1.5,
                        })}
                      </div>

                      {/* Title */}
                      <span
                        className={cn(
                          "font-heading text-sm font-semibold leading-snug tracking-tight",
                          "text-ink",
                        )}
                      >
                        {achievement.title}
                      </span>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
