import { useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import Skeleton from "@/components/common/Skeleton";

function getResponsiveImageProps(src: string) {
  if (
    (!src.startsWith("/images/real/") &&
      !src.startsWith("/images/site/")) ||
    !src.endsWith(".webp")
  ) {
    return {};
  }

  const fileName = src.split("/").pop();

  if (!fileName) {
    return {};
  }

  const baseName = fileName.slice(0, -".webp".length);
  const type = src.startsWith("/images/real/") ? "real" : "site";

  return {
    srcSet: [
      `/images/responsive/${type}/${baseName}-480.webp 480w`,
      `/images/responsive/${type}/${baseName}-768.webp 768w`,
      `/images/responsive/${type}/${baseName}-1024.webp 1024w`,
      `/images/responsive/${type}/${baseName}-1400.webp 1400w`,
    ].join(", "),
  };
}

interface ImageWithSkeletonProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {
  containerClassName?: string;
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
  sizes,
  src,
  srcSet,
  ...imgProps
}: ImageWithSkeletonProps) {
  const [loaded, setLoaded] = useState(false);

  const responsiveProps =
    src && !srcSet ? getResponsiveImageProps(src) : {};

  return (
    <div
      className={cn(
        "relative overflow-hidden",
        containerClassName,
      )}
    >
      {!loaded && (
        <div
          className="absolute inset-0"
          aria-hidden="true"
        >
          {skeleton ?? (
            <Skeleton className="h-full w-full rounded-lg" />
          )}
        </div>
      )}

      <img
        {...imgProps}
        src={src}
        srcSet={srcSet ?? responsiveProps.srcSet}
        sizes={
          sizes ??
          (responsiveProps.srcSet
            ? "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            : undefined)
        }
        loading={loading}
        decoding={decoding}
        fetchPriority={fetchPriority}
        onLoad={(event) => {
          setLoaded(true);
          onLoad?.(event);
        }}
        className={cn(
          "relative transition-opacity duration-200 ease-premium-out",
          loaded ? "opacity-100" : "opacity-0",
          className,
        )}
      />
    </div>
  );
}