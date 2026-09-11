// ============================================================
// SSCSS — Skeleton (base loading primitive)
//
// The single low-level shimmer block used by every other
// skeleton on the site. No gradients, no shimmer libraries —
// just the brand's `bg-muted` tone with Tailwind's built-in
// `animate-pulse`.
//
// Accessibility:
//   - `aria-hidden="true"` — skeleton blocks are decorative
//     placeholders; real content carries the accessible label.
//   - Reduced motion is handled by the global
//     `prefers-reduced-motion` block in index.css, which collapses
//     animation duration to ~0 so `animate-pulse` becomes static.
//
// ✓ Reuse everywhere. Do NOT create per-component shimmer blocks.
// ============================================================

import { cn } from "@/lib/utils";

interface SkeletonProps {
  className?: string;
}

export default function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      aria-hidden="true"
      className={cn("animate-pulse rounded-md bg-muted", className)}
    />
  );
}
