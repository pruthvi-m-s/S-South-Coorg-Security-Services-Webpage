// ============================================================
// SSCSS — Route Loading Fallback
// Displayed inside Suspense boundary while lazy-loaded routes load.
// Uses brand token colors, smooth pulse animation, and accessibility announcements.
// ============================================================

import { cn } from "@/lib/utils";

interface RouteLoadingFallbackProps {
  className?: string;
}

export default function RouteLoadingFallback({ className }: RouteLoadingFallbackProps) {
  return (
    <div
      className={cn(
        "flex min-h-[50vh] w-full flex-col items-center justify-center p-8",
        className,
      )}
      role="status"
      aria-label="Loading page content"
    >
      {/* Brand-inspired pulse badge */}
      <div className="relative mb-6 flex size-12 items-center justify-center">
        <div className="absolute inset-0 animate-ping rounded-full bg-primary/20 duration-1000" />
        <div className="relative flex size-10 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground shadow-sm">
          SSCSS
        </div>
      </div>

      {/* Content Skeleton Placeholder */}
      <div className="w-full max-w-md space-y-3">
        <div className="h-6 w-3/4 animate-pulse rounded-md bg-muted" />
        <div className="h-4 w-full animate-pulse rounded-md bg-muted/70" />
        <div className="h-4 w-5/6 animate-pulse rounded-md bg-muted/50" />
      </div>

      {/* Screen Reader Announcement */}
      <span className="sr-only">Loading page content, please wait...</span>
    </div>
  );
}
