// ============================================================
// SSCSS — Final CTA Section (Homepage)
// Premium centered CTA band at the bottom of the homepage.
// Content-driven: heading, text, and buttons from content layer.
// ============================================================

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  staggerContainer,
  fadeUp,
  viewportOptions,
} from "@/lib/motion";
import type { CtaContent } from "@/content/cta";

// ─── Props ────────────────────────────────────────────────────
interface FinalCtaSectionProps {
  content: CtaContent;
  className?: string;
}

// ─── FinalCtaSection ──────────────────────────────────────────
export default function FinalCtaSection({
  content,
  className,
}: FinalCtaSectionProps) {
  const { heading, supportingText, primaryCta, secondaryCta } = content;

  return (
    <section
      className={cn(
        "relative bg-muted",
        className,
      )}
      aria-label="Call to Action"
    >
      <div className="section-container section-padding">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="mx-auto max-w-3xl text-center"
        >
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

          {/* Supporting Text */}
          <motion.p
            variants={fadeUp}
            className={cn(
              "mx-auto mt-4 max-w-2xl text-base leading-relaxed",
              "sm:text-lg",
              "text-muted-foreground",
            )}
          >
            {supportingText}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            {/* Primary CTA */}
            {primaryCta.href.startsWith("tel:") ||
primaryCta.href.startsWith("mailto:") ||
primaryCta.href.startsWith("http") ? (
  <a href={primaryCta.href}>
    <Button
      variant="default"
      size="lg"
      data-analytics-cta={`final_cta_${primaryCta.label.toLowerCase().replace(/\s+/g, "_")}`}
      className="w-full sm:w-auto"
    >
      {primaryCta.label}
      <ArrowRight size={18} className="ml-1.5" aria-hidden="true" />
    </Button>
  </a>
) : (
  <Link to={primaryCta.href}>
    <Button
      variant="default"
      size="lg"
      data-analytics-cta={`final_cta_${primaryCta.label.toLowerCase().replace(/\s+/g, "_")}`}
      className="w-full sm:w-auto"
    >
      {primaryCta.label}
      <ArrowRight size={18} className="ml-1.5" aria-hidden="true" />
    </Button>
  </Link>
)}

            {/* Secondary CTA */}
            {secondaryCta &&
  (secondaryCta.href.startsWith("tel:") ||
  secondaryCta.href.startsWith("mailto:") ||
  secondaryCta.href.startsWith("http") ? (
    <a
      href={secondaryCta.href}
      target={secondaryCta.href.startsWith("http") ? "_blank" : undefined}
      rel={secondaryCta.href.startsWith("http") ? "noopener noreferrer" : undefined}
    >
      <Button
        variant="outline"
        size="lg"
        data-analytics-cta={`final_cta_${secondaryCta.label.toLowerCase().replace(/\s+/g, "_")}`}
        className="w-full sm:w-auto"
      >
        {secondaryCta.label}
      </Button>
    </a>
  ) : (
    <Link to={secondaryCta.href}>
      <Button
        variant="outline"
        size="lg"
        data-analytics-cta={`final_cta_${secondaryCta.label.toLowerCase().replace(/\s+/g, "_")}`}
        className="w-full sm:w-auto"
      >
        {secondaryCta.label}
      </Button>
    </Link>
  ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

