// ============================================================
// SSCSS — TestimonialCard Component
// Displays a single testimonial with quote, author, and org.
// No carousel. No slider. Rendered in a responsive grid.
// Subtle hover effects — no scaling.
// ============================================================

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { fadeUp } from "@/lib/motion";
import type { Testimonial } from "@/types";

// ─── Props ────────────────────────────────────────────────────
interface TestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
}

// ─── TestimonialCard ──────────────────────────────────────────
export default function TestimonialCard({
  testimonial,
  className,
}: TestimonialCardProps) {
  const { quote, authorName, authorRole, organization } = testimonial;

  return (
    <motion.div variants={fadeUp}>
      <Card
        className={cn(
          "group/card flex flex-col p-6 sm:p-8",
          "border border-border bg-card",
          "transition-all duration-300 ease-premium-out",
          "hover:border-primary/20 hover:shadow-md",
          "h-full",
          className,
        )}
      >
        {/* Quote Icon */}
        <div
          className={cn(
            "mb-4 flex size-10 items-center justify-center rounded-full",
            "bg-primary-50 text-primary",
          )}
          aria-hidden="true"
        >
          <svg
            width="18"
            height="18"
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

        {/* Quote */}
        <blockquote
          className={cn(
            "flex-1 text-sm leading-relaxed italic",
            "text-muted-foreground",
          )}
        >
          &ldquo;{quote}&rdquo;
        </blockquote>

        {/* Author & Organization */}
        <div className="mt-6 border-t border-border pt-4">
          <cite
            className={cn(
              "not-italic",
              "font-heading text-sm font-semibold leading-snug",
              "text-ink",
            )}
          >
            {authorName}
          </cite>
          {(authorRole || organization) && (
            <p
              className={cn(
                "mt-0.5 text-xs leading-relaxed",
                "text-muted-foreground",
              )}
            >
              {[authorRole, organization].filter(Boolean).join(", ")}
            </p>
          )}
        </div>
      </Card>
    </motion.div>
  );
}
