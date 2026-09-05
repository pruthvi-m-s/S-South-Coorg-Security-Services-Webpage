// ============================================================
// SSCSS — ImageWithSkeleton
//
// Reusable image wrapper that:
//   - reserves layout
//   - shows a skeleton while loading
//   - fades the image in after load
//   - defaults non-critical images to lazy loading
//   - supports caller overrides for hero/priority images
// ============================================================

import { useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import Skeleton from "@/components/common/Skeleton";

interface ImageWithSkeletonProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {
  /** Classes for the wrapper (positioning / max-width). */
  containerClassName?: string;
  /** Optional custom skeleton node. */
  skeleton?: ReactNode;
}

export default function ImageWithSkeleton({
  containerClassName,
  skeleton,
  className,
  onLoad,
  loading = "lazy",
  decoding = "async",
  fetchPriority = "auto",
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
        loading={loading}
        decoding={decoding}
        fetchPriority={fetchPriority}
        onLoad={(event) => {
          setLoaded(true);
          onLoad?.(event);
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