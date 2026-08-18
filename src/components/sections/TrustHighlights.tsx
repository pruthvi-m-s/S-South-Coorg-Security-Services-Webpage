// ============================================================
// SSCSS — TrustHighlights Component
// Reusable trust/company highlights section showing key
// qualitative strengths (professionalism, trained staff,
// compliance, operational excellence).
// Content-driven: all copy from the content layer.
// Responsive: 4 cols desktop, 2 cols tablet, 1 col mobile.
// ============================================================

import { motion } from "framer-motion";
import { createElement } from "react";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { getIcon } from "@/lib/icons";
import {
  staggerContainer,
  fadeUp,
  viewportOptions,
} from "@/lib/motion";
import type { WhyChooseUsItem } from "@/types";

// ─── Props ────────────────────────────────────────────────────
interface TrustHighlightsProps {
  title: string;
  subtitle: string;
  items: WhyChooseUsItem[];
  className?: string;
}

// ─── TrustHighlights ──────────────────────────────────────────
export default function TrustHighlights({
  title,
  subtitle,
  items,
  className,
}: TrustHighlightsProps) {
  if (items.length === 0) return null;

  return (
    <section
      className={cn(
        "relative bg-background",
        className,
      )}
      aria-label="Trust and Company Highlights"
    >
      <div className="section-container section-padding">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
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

          {/* Section Intro */}
          <motion.p
            variants={fadeUp}
            className={cn(
              "mx-auto mt-4 max-w-2xl text-center text-base leading-relaxed",
              "sm:text-lg",
              "text-muted-foreground",
            )}
          >
            {subtitle}
          </motion.p>

          {/* Highlights Grid — responsive: 4/2/1 columns */}
          <motion.div
            variants={fadeUp}
            className="mt-12"
          >
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {items.map((item, index) => (
                <motion.div
                  key={`${item.title}-${index}`}
                  variants={fadeUp}
                >
                  <Card
                    className={cn(
"group/card flex flex-col items-center p-6 text-center sm:p-8",
                      "border border-border bg-card",
                      "transition-all duration-300 ease-premium-out",
                      "hover:-translate-y-1 hover:border-primary/20 hover:shadow-lg",
                      "h-full",
                    )}
                  >
                    {/* Icon */}
                    <div
                      className={cn(
                        "mb-4 flex size-14 items-center justify-center rounded-full",
                        "bg-primary-50 text-primary",
                      )}
                      aria-hidden="true"
                    >
                      {createElement(getIcon(item.icon), {
                        size: 24,
                        strokeWidth: 1.5,
                      })}
                    </div>

                    {/* Title */}
                    <h3
                      className={cn(
                        "font-heading text-lg font-semibold leading-snug tracking-tight",
                        "text-ink",
                      )}
                    >
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p
                      className={cn(
                        "mt-2 flex-1 text-sm leading-relaxed",
                        "text-muted-foreground",
                      )}
                    >
                      {item.description}
                    </p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

