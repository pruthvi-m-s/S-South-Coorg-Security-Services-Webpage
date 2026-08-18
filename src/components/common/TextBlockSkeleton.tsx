// ============================================================
// SSCSS — TextBlockSkeleton
//
// Reusable placeholder for a block of body / paragraph text.
// Renders a configurable number of "lines" that mirror a
// typical paragraph so the layout stays stable while content
// loads (no CLS).
//
// Built on the shared `Skeleton` primitive. `aria-hidden`.
// ============================================================

import { cn } from "@/lib/utils";
import Skeleton from "@/components/common/Skeleton";

interface TextBlockSkeletonProps {
  /** Number of text lines to render (default 3). */
  lines?: number;
  className?: string;
}

export default function TextBlockSkeleton({
  lines = 3,
  className,
}: TextBlockSkeletonProps) {
  return (
    <div aria-hidden="true" className={cn("space-y-3", className)}>
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          className={cn("h-4", i === lines - 1 ? "w-2/3" : "w-full")}
        />
      ))}
    </div>
  );
}
