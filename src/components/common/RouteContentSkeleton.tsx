// ============================================================
// SSCSS — RouteContentSkeleton
//
// Route-level loading placeholder rendered INSIDE the Layout's
// `<main>` (via Suspense around `<Outlet/>`). Header and Footer
// stay visible during navigation — only the changing page
// content is skeletonized, giving a continuous, premium feel.
//
// Mirrors a typical page: hero heading block + body card grid,
// so the incoming page does not shift the viewport (no CLS).
//
// Accessibility:
//   - `role="status"` + `aria-live="polite"` announce loading.
//   - Inner skeleton blocks are `aria-hidden` (decorative).
// ============================================================

import { cn } from "@/lib/utils";
import Skeleton from "@/components/common/Skeleton";
import TextBlockSkeleton from "@/components/common/TextBlockSkeleton";
import CardSkeleton from "@/components/common/CardSkeleton";

interface RouteContentSkeletonProps {
  className?: string;
}

export default function RouteContentSkeleton({
  className,
}: RouteContentSkeletonProps) {
  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Loading page content"
      className={cn("section-padding", className)}
    >
      <div className="section-container">
        {/* ─── Hero heading block ─────────────────────────── */}
        <div className="mx-auto max-w-4xl space-y-5 text-center" aria-hidden="true">
          <Skeleton className="mx-auto h-4 w-24" />
          <Skeleton className="mx-auto h-10 w-2/3 sm:h-12" />
          <Skeleton className="mx-auto h-4 w-full max-w-xl" />
          <Skeleton className="mx-auto h-4 w-3/4 max-w-md" />
        </div>

        {/* ─── Body: card grid ────────────────────────────── */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <CardSkeleton key={i} />
          ))}
        </div>

        {/* ─── Secondary text block ───────────────────────── */}
        <div className="mx-auto mt-12 max-w-4xl">
          <TextBlockSkeleton lines={4} />
        </div>
      </div>

      {/* Screen-reader announcement */}
      <span className="sr-only">Loading page content, please wait...</span>
    </div>
  );
}
