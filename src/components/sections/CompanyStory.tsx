import { useEffect, useMemo, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import ImageWithSkeleton from "@/components/common/ImageWithSkeleton";
import HeroSkeleton from "@/components/common/HeroSkeleton";
import type {
  CompanyHistoryEntry,
  ImageRef,
} from "@/types";

interface CompanyStoryProps {
  title: string;
  paragraphs: string[];
  entries: CompanyHistoryEntry[];
  fallbackImage: ImageRef;
  videoSrc?: string;
  className?: string;
}

export default function CompanyStory({
  title,
  paragraphs,
  entries,
  fallbackImage,
  videoSrc,
  className,
}: CompanyStoryProps) {
  const [videoUnavailable, setVideoUnavailable] = useState(!videoSrc);

  const storyRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  const history = useMemo(() => {
    const selected: CompanyHistoryEntry[] = [];

    for (const entry of [
      entries[0],
      entries[1],
      entries[2],
      entries.at(-1),
    ]) {
      if (
        entry &&
        !selected.some((item) => item.year === entry.year)
      ) {
        selected.push(entry);
      }
    }

    return selected;
  }, [entries]);

  useEffect(() => {
    const node = storyRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  const motionEnabled =
    visible &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return (
    <section
      ref={storyRef}
      className={cn(
        "bg-[#191918] text-[#f5f1e8]",
        className,
      )}
      aria-labelledby="about-story-title"
    >
      <div className="section-container section-padding">
        <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-center lg:gap-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#c45a52]">
              Since 2008
            </p>

            <h2
              id="about-story-title"
              className="mt-3 max-w-lg font-heading text-4xl font-semibold tracking-tight text-[#f5f1e8] sm:text-5xl"
            >
              {title}
            </h2>

            <div className="mt-7 space-y-5">
              {paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className={cn(
                    "max-w-xl text-sm leading-7 sm:text-base",
                    index === 0
                      ? "text-[#ded8cf]"
                      : "text-[#9f9991]",
                  )}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div>
            <div className="relative aspect-[4/3] overflow-hidden bg-[#10100f]">
              <div
                className={cn(
                  "absolute inset-0 transition-all duration-700 ease-premium-out",
                  motionEnabled
                    ? "opacity-100 scale-100"
                    : "opacity-100 scale-100 motion-reduce:transition-none",
                  visible || "opacity-0 scale-[1.025]",
                )}
              >
                {!videoUnavailable && videoSrc ? (
                  <video
                    className="size-full object-cover opacity-80"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    poster={fallbackImage.src}
                    onError={() => setVideoUnavailable(true)}
                  >
                    <source src={videoSrc} />
                  </video>
                ) : (
                  <ImageWithSkeleton
                    src={fallbackImage.src}
                    alt={fallbackImage.alt}
                    skeleton={
                      <HeroSkeleton className="size-full rounded-none" />
                    }
                    containerClassName="size-full"
                    className="size-full object-cover"
                    loading="lazy"
                    decoding="async"
                    fetchPriority="low"
                  />
                )}
              </div>

              <div
                className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent"
                aria-hidden="true"
              />
            </div>

            <div className="mt-6 border-t border-[#2b2927] pt-6">
              <div className="grid gap-6 sm:grid-cols-2">
                {history.map((entry, index) => (
                  <div
                    key={entry.year}
                    className={cn(
                      "transform-gpu transition-all duration-500 ease-premium-out",
                      visible
                        ? "translate-y-0 opacity-100"
                        : "translate-y-3 opacity-0",
                    )}
                    style={{
                      transitionDelay: `${index * 110}ms`,
                    }}
                  >
                    <p className="font-heading text-3xl font-semibold text-[#f5f1e8]">
                      {entry.year}
                    </p>

                    <p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-[#c45a52]">
                      {entry.title}
                    </p>

                    <p className="mt-2 text-sm leading-6 text-[#77716a]">
                      {entry.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}