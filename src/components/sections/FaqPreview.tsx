// ============================================================
// SSCSS — FaqPreview Component
// FAQ preview for the Services Hub page.
// Displays the first N FAQs from the content layer.
// Simple stacked layout — no accordion, no expand/collapse.
// Each FAQ shows question (h3) and answer in a styled card.
// Includes a "View All FAQs" CTA linking to the full FAQ page.
// Content-driven: all copy from the content layer.
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
import { ROUTES } from "@/lib/routes";
import type { Faq } from "@/types";

// ─── Props ────────────────────────────────────────────────────
interface FaqPreviewProps {
  title: string;
  subtitle: string;
  faqs: Faq[];
  /** Number of FAQs to display (default: 5) */
  count?: number;
  /** Link for the "View All FAQs" button (default: ROUTES.faqs) */
  viewAllHref: string;
  className?: string;
}

// ─── FaqPreview ───────────────────────────────────────────────
export default function FaqPreview({
  title,
  subtitle,
  faqs,
  count = 5,
  viewAllHref = ROUTES.faqs,
  className,
}: FaqPreviewProps) {
  if (faqs.length === 0) return null;

  const displayedFaqs = faqs.slice(0, count);

  return (
    <section
      className={cn(
        "relative bg-background",
        className,
      )}
      aria-label="Frequently Asked Questions"
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

          {/* Section Subtitle */}
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

          {/* FAQ List — Stacked layout, no accordion */}
          <motion.div
            variants={fadeUp}
            className="mt-12 mx-auto max-w-4xl"
          >
            <div className="space-y-6">
              {displayedFaqs.map((faq) => (
                <article
                  key={faq.id}
                  className={cn(
                    "rounded-xl border border-border bg-card p-6 sm:p-8",
                    "transition-all duration-300 ease-premium-out",
                    "hover:border-primary/20 hover:shadow-md",
                  )}
                >
                  {/* Question */}
                  <h3
                    className={cn(
                      "font-heading text-lg font-semibold leading-snug tracking-tight",
                      "text-ink",
                    )}
                  >
                    {faq.question}
                  </h3>

                  {/* Answer */}
                  <p
                    className={cn(
                      "mt-3 text-base leading-relaxed",
                      "text-muted-foreground",
                    )}
                  >
                    {faq.answer}
                  </p>
                </article>
              ))}
            </div>
          </motion.div>

          {/* View All FAQs CTA */}
          <motion.div
            variants={fadeUp}
            className="mt-10 flex justify-center"
          >
            <Link to={viewAllHref}>
              <Button
                variant="outline"
                size="lg"
                className="group/cta"
              >
                View All FAQs
                <ArrowRight
                  size={16}
                  strokeWidth={2}
                  className="ml-1.5 transition-transform duration-300 ease-premium-out group-hover/cta:translate-x-0.5"
                  aria-hidden="true"
                />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

