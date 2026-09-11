// ============================================================
// SSCSS — GallerySkeleton
//
// Reusable placeholder for the GalleryGrid masonry layout while
// thumbnails load. Mirrors the grid's responsive columns
// (`columns-1 sm:columns-2 lg:columns-3`) and the filter-chip
// row so the final gallery does not shift the layout.
//
// Built on the shared `Skeleton` primitive. `aria-hidden`.
// ============================================================

import { cn } from "@/lib/utils";
import Skeleton from "@/components/common/Skeleton";

interface GallerySkeletonProps {
  /** Number of thumbnail placeholders (default 6). */
  count?: number;
  /** Number of filter chip placeholders (default 5). */
  chipCount?: number;
  className?: string;
}

export default function GallerySkeleton({
  count = 6,
  chipCount = 5,
  className,
}: GallerySkeletonProps) {
  return (
    <div aria-hidden="true" className={cn("mt-10", className)}>
      {/* Filter chip row */}
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {Array.from({ length: chipCount }).map((_, i) => (
          <Skeleton key={i} className="h-9 w-24 rounded-full" />
        ))}
      </div>

      {/* Masonry grid */}
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {Array.from({ length: count }).map((_, i) => (
          <Skeleton
            key={i}
            className={cn(
              "mb-4 w-full rounded-lg",
              i % 3 === 0 ? "aspect-[4/3]" : i % 3 === 1 ? "aspect-square" : "aspect-[4/3]",
            )}
          />
        ))}
      </div>
    </div>
  );
}
