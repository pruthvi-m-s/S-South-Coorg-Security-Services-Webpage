import { useEffect, useRef } from "react";
import { animate } from "animejs";
import ImageWithSkeleton from "@/components/common/ImageWithSkeleton";
import HeroSkeleton from "@/components/common/HeroSkeleton";
import type { FounderContent } from "@/content/founder";

export default function AboutFounderPortrait({ content }: { content: FounderContent }) {
  const portraitRef = useRef<HTMLDivElement>(null);
  useEffect(() => { const node = portraitRef.current; if (!node || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return; const observer = new IntersectionObserver(([entry]) => { if (!entry.isIntersecting) return; observer.disconnect(); animate(node, { opacity: [0, 1], scale: [0.97, 1], duration: 600, ease: "out(4)" }); }, { threshold: 0.2 }); observer.observe(node); return () => observer.disconnect(); }, []);
  return (
    <section className="bg-primary-50" aria-labelledby="founder-title">
      <div className="section-container section-padding">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div ref={portraitRef} className="relative mx-auto w-full max-w-sm">
            <div className="absolute -inset-3 border border-primary/25" aria-hidden="true" />
            <ImageWithSkeleton
              src={content.image.src}
              alt={content.image.alt}
              skeleton={<HeroSkeleton className="size-full" />}
              containerClassName="relative aspect-[3/4] w-full"
              className="size-full object-contain object-center bg-background border border-primary/10 shadow-lg rounded-lg transition-transform duration-500 hover:scale-[1.015]"
              width={480}
              height={640}
              loading="lazy"
              decoding="async"
              fetchPriority="low"
            />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
              {content.eyebrow}
            </p>
            <h2 id="founder-title" className="mt-3 font-heading text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              {content.name}
            </h2>
            <p className="mt-2 text-sm font-medium text-primary">
              {content.designation}
            </p>
            <p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground">
              {content.message}
            </p>
            <blockquote className="mt-7 border-l-2 border-primary pl-5 text-lg italic leading-7 text-ink">
              “{content.quote}”
            </blockquote>
            <div className="mt-7 flex gap-8 border-t border-border pt-5">
              <div>
                <p className="font-heading text-2xl font-semibold text-ink">
                  {content.experienceBadge}
                </p>
                <p className="text-xs uppercase tracking-[0.12em] text-muted-foreground">
                  Experience
                </p>
              </div>
              <div>
                <p className="font-heading text-2xl font-semibold text-ink">
                  100+
                </p>
                <p className="text-xs uppercase tracking-[0.12em] text-muted-foreground">
                  Personnel
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

