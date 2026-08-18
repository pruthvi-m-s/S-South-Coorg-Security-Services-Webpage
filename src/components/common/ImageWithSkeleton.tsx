// ============================================================
// SSCSS — ImageWithSkeleton
//
// Single reusable wrapper for every real image that should
// reserve layout, show a skeleton while loading, and fade in
// smoothly on load — no flashes, no CLS.
//
// Pattern:
//   Skeleton (reserves layout) → image loads → opacity transition
//   → skeleton removed.
//
// Accessibility:
//   - The skeleton is `aria-hidden`; the real `<img>` keeps its
//     `alt`/`aria` semantics (passed through).
//   - Reduced motion respected via global prefers-reduced-motion.
// ============================================================

import { useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import Skeleton from "@/components/common/Skeleton";

interface ImageWithSkeletonProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {
  /** Classes for the wrapper (positioning / max-width). */
  containerClassName?: string;
  /** Optional custom skeleton node (defaults to a filled Skeleton). */
  skeleton?: ReactNode;
}

export default function ImageWithSkeleton({
  containerClassName,
  skeleton,
  className,
  onLoad,
  ...imgProps
}: ImageWithSkeletonProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={cn("relative overflow-hidden", containerClassName)}>
      {!loaded && (
        <div className="absolute inset-0" aria-hidden="true">
          {skeleton ?? <Skeleton className="h-full w-full rounded-lg" />}
        </div>
      )}
      <img
        {...imgProps}
        onLoad={(e) => {
          setLoaded(true);
          onLoad?.(e);
        }}
        className={cn(
          "relative transition-opacity duration-500 ease-premium-out",
          loaded ? "opacity-100" : "opacity-0",
          className,
        )}
      />
    </div>
  );
}
