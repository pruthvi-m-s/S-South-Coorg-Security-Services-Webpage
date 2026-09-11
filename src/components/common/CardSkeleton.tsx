// ============================================================
// SSCSS — CardSkeleton
//
// Reusable placeholder for any card in the grid system
// (ServiceCard, IndustryCard, KeyFeatures, TrustHighlights, etc.).
// Mirrors the standard card anatomy: icon circle + title line
// + body lines — so the final content does not shift the layout.
//
// Built on the shared `Skeleton` primitive. `aria-hidden`.
// ============================================================

import { cn } from "@/lib/utils";
import Skeleton from "@/components/common/Skeleton";

interface CardSkeletonProps {
  className?: string;
  /** Show the leading icon circle (default true). */
  withIcon?: boolean;
}

export default function CardSkeleton({
  className,
  withIcon = true,
}: CardSkeletonProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "flex flex-col rounded-lg border border-border bg-card p-6 sm:p-8",
        className,
      )}
    >
      {withIcon && <Skeleton className="mb-4 size-12 rounded-full" />}
      <Skeleton className="h-5 w-3/4" />
      <Skeleton className="mt-3 h-4 w-full" />
      <Skeleton className="mt-2 h-4 w-5/6" />
    </div>
  );
}
