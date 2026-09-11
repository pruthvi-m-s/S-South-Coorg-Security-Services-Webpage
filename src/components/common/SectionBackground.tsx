// ============================================================
// SSCSS — SectionBackground
// Reusable, subtle decorative background for premium sections.
// Uses the brand-aligned low-poly grid SVG at very low opacity
// to add depth without reducing readability or distracting.
//
// Accessibility:
//   - aria-hidden="true" (purely decorative)
//   - pointer-events-none (never intercepts interaction)
//   - Rendered behind content via z-index layering
// =
// Motion: none. Static decorative texture only.
// ============================================================

import { cn } from "@/lib/utils";

// ─── Props ────────────────────────────────────────────────────
interface SectionBackgroundProps {
  className?: string;
  opacity?: number;
}

/**
 * Subtle low-poly grid texture aligned to the SSCSS deep-navy theme.
 * Only used where it genuinely improves composition (Process, Coverage).
 * Not applied site-wide to avoid visual clutter.
 */
export default function SectionBackground({
  className,
  opacity = 0.05,
}: SectionBackgroundProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 -z-0 overflow-hidden",
        className,
      )}
    >
      <img
        src="/images/low-poly-grid-haikei.svg"
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover"
        style={{ opacity }}
      />
    </div>
  );
}
