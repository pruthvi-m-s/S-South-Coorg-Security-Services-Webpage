// ============================================================
// SSCSS — HeroSkeleton
//
// Reusable placeholder for hero / featured image frames.
// Matches the hero figure's rounded, object-cover presentation
// so an image can fade in over it without layout shift.
//
// Built on the shared `Skeleton` primitive. `aria-hidden`.
// ============================================================

import { cn } from "@/lib/utils";
import Skeleton from "@/components/common/Skeleton";

interface HeroSkeletonProps {
  className?: string;
}

export default function HeroSkeleton({ className }: HeroSkeletonProps) {
  return <Skeleton className={cn("rounded-lg", className)} />;
}
