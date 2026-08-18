import { useEffect, useMemo, useRef, useState } from "react";
import { animate, stagger } from "animejs";
import { cn } from "@/lib/utils";
import ImageWithSkeleton from "@/components/common/ImageWithSkeleton";
import HeroSkeleton from "@/components/common/HeroSkeleton";
import type { CompanyHistoryEntry, ImageRef } from "@/types";

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
  const mediaRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  const history = useMemo(() => {
    return [entries[0], entries[1], entries[2], entries.at(-1)].filter(Boolean) as CompanyHistoryEntry[];
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
      { threshold: 0.18 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const items = timelineRef.current ? Array.from(timelineRef.current.children) : [];
    const timeline = items.length
      ? animate(items, {
          opacity: [0, 1],
          translateY: [12, 0],
          delay: stagger(130),
          duration: 420,
          ease: "out(4)",
        })
      : undefined;
    const line = lineRef.current
      ? animate(lineRef.current, {
          width: ["0%", "100%"],
          duration: 900,
          ease: "out(4)",
        })
      : undefined;

    return () => {
      timeline?.revert();
      line?.revert();
    };
  }, [visible]);

  useEffect(() => {
    const media = mediaRef.current;
    if (!visible || !media || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const reveal = animate(media, {
      opacity: [0, 1],
      scale: [1.025, 1],
      duration: 750,
      ease: "out(4)",
    });

    return () => {
      reveal.revert();
    };
  }, [visible]);

  const storyLead = paragraphs[0] ?? "";

  return (
    <section
      ref={storyRef}
      className={cn("relative overflow-hidden bg-background", className)}
      aria-labelledby="story-title"
    >
      <div className="section-container section-padding">
        <div className="relative min-h-152 overflow-hidden rounded-[1.75rem] border border-white/10 bg-card shadow-[0_30px_70px_-35px_rgba(0,0,0,0.9)]">
          <div ref={mediaRef} className="absolute inset-0">
            {!videoUnavailable && videoSrc ? (
              <video
                className="h-full w-full object-cover opacity-75"
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
                skeleton={<HeroSkeleton className="h-full w-full rounded-none" />}
                containerClassName="h-full w-full"
                className="h-full w-full object-cover opacity-60"
                loading="lazy"
                decoding="async"
                fetchPriority="low"
              />
            )}
          </div>

          <div className="absolute inset-0 bg-background/70" aria-hidden="true" />
          <div
            className="absolute inset-x-0 bottom-0 h-2/3 bg-linear-to-t from-background via-background/55 to-transparent"
            aria-hidden="true"
          />

          <div className="relative flex min-h-152 flex-col justify-end p-6 text-white sm:p-10 lg:p-14">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
              Since 2008
            </p>
            <h2
              id="story-title"
              className="mt-3 max-w-2xl font-heading text-3xl font-semibold tracking-tight sm:text-5xl"
            >
              {title}
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">
              {storyLead}
            </p>

            <div className="mt-8 flex flex-wrap gap-3 text-[10px] uppercase tracking-[0.12em] text-slate-200/90">
              <span className="rounded-full border border-white/15 bg-white/5 px-3 py-2 backdrop-blur-[2px]">
                Built on trust
              </span>
              <span className="rounded-full border border-white/15 bg-white/5 px-3 py-2 backdrop-blur-[2px]">
                15+ years
              </span>
              <span className="rounded-full border border-white/15 bg-white/5 px-3 py-2 backdrop-blur-[2px]">
                100+ guards
              </span>
            </div>

            <div className="relative mt-10 border-t border-white/20 pt-5">
              <div
                ref={lineRef}
                className="absolute left-0 -top-px h-px w-0 bg-primary"
                aria-hidden="true"
              />
              <div ref={timelineRef} className="grid gap-5 sm:grid-cols-4">
                {history.map((entry) => (
                  <div key={entry.year} className="opacity-0">
                    <p className="font-heading text-2xl font-semibold text-white">{entry.year}</p>
                    <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.12em] text-slate-300">
                      {entry.title}
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
