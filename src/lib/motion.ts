// ============================================================
// SSCSS — Shared Framer Motion Animation Variants
// Reusable across all sections for consistent animation language.
// ============================================================

import type { Variants } from "framer-motion";

/**
 * Shared easing curve matching the design token --ease-premium.
 * cubic-bezier(0.16, 1, 0.3, 1)
 */
export const premiumEasing = [0.16, 1, 0.3, 1] as const;

/**
 * Shared easing curve matching --ease-premium-out.
 * cubic-bezier(0, 0, 0.2, 1)
 */
export const premiumEasingOut = [0, 0, 0.2, 1] as const;

// ─── Container Variants ──────────────────────────────────────

/** Stagger container: children animate in sequence */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

/** Stagger container with a slower, more deliberate pace */
export const staggerContainerSlow: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.15,
    },
  },
};

// ─── Child Variants ──────────────────────────────────────────

/** Fade in + slight upward reveal */
export const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: premiumEasing,
    },
  },
};

/** Fade in + upward reveal — faster variant */
export const fadeUpFast: Variants = {
  hidden: {
    opacity: 0,
    y: 16,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: premiumEasingOut,
    },
  },
};

/** Fade in only (no transform) */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: premiumEasingOut,
    },
  },
};

/** Slight scale reveal for visual elements (images, icons) */
export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: premiumEasing,
    },
  },
};

// ─── Viewport Options ────────────────────────────────────────

/** Standard viewport config for all sections */
export const viewportOptions = {
  once: true,
  amount: 0.2,
} as const;
