// ============================================================
// SSCSS — HeadlineReveal Component
//
// Apple-style mask reveal for hero headlines, built on the
// installed TextEffect Motion Primitive (components/motion-primitives).
//
// Each line of the headline is hidden inside an overflow-hidden
// mask and slides up into view with premium easing — never by
// character, always by line. Subtitle/CTA keep their existing
// fadeUp treatment; only the heading changes.
//
// Accessibility:
//   - The heading remains a real semantic h1/h2 (TextEffect renders
//     the requested tag), so screen readers announce the full text.
//   - Reduced motion is respected via the global MotionConfig
//     reducedMotion="user" and the index.css reduce block.
// ============================================================

import { TextEffect } from "../../../components/motion-primitives/text-effect";
import type { Variants } from "framer-motion";

// ─── Props ────────────────────────────────────────────────────
interface HeadlineRevealProps {
  children: string;
  as?: "h1" | "h2";
  className?: string;
  /** Delay before the reveal starts (used to sequence after an eyebrow). */
  delay?: number;
}

// ─── HeadlineReveal ───────────────────────────────────────────
export default function HeadlineReveal({
  children,
  as = "h1",
  className,
  delay = 0,
}: HeadlineRevealProps) {
  // Mask-reveal item variants: the line starts fully below its
  // overflow-hidden mask and settles into place. No overshoot.
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: "110%" },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="overflow-hidden">
      <TextEffect
        per="line"
        as={as}
        className={className}
        preset="fade"
        delay={delay}
        variants={{
          container: {
            visible: {
              transition: {
                staggerChildren: 0.15,
                delayChildren: delay,
              },
            },
          },
          item: itemVariants,
        }}
        segmentTransition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </TextEffect>
    </div>
  );
}
