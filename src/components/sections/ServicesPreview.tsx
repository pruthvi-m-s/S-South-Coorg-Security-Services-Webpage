// ============================================================
// SSCSS — Homepage primary services editorial list
// ============================================================

import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import ImageWithSkeleton from "@/components/common/ImageWithSkeleton";
import HeroSkeleton from "@/components/common/HeroSkeleton";
import {
  getPrimaryServiceCategories,
  type ResolvedPrimaryServiceCategory,
} from "@/content";
import { cn } from "@/lib/utils";
import { servicePath, ROUTES } from "@/lib/routes";
import type { Service } from "@/types";

interface ServicesPreviewProps {
  services: Service[];
  className?: string;
}

const SECTION_HEADING = "Our Security & Facility Services";

const SECTION_INTRO =
  "From trained security personnel to professional housekeeping and investigative services, we offer comprehensive solutions to protect and manage your premises.";

function usePrefersReducedMotion() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    const update = () => setReducedMotion(media.matches);

    update();
    media.addEventListener("change", update);

    return () => media.removeEventListener("change", update);
  }, []);

  return reducedMotion;
}

function RelatedServiceLinks({
  category,
  onLinkFocus,
  compact = false,
}: {
  category: ResolvedPrimaryServiceCategory;
  onLinkFocus?: () => void;
  compact?: boolean;
}) {
  return (
    <div
      className={cn(
        "flex flex-wrap gap-2",
        compact ? "mt-4" : "mt-5",
      )}
    >
      {category.services.map((service) => (
        <Link
          key={service.slug}
          to={servicePath(service.slug)}
          onFocus={onLinkFocus}
          className={cn(
            "inline-flex min-h-9 items-center rounded-full border border-border/80 px-3 text-xs font-medium",
            "text-muted-foreground transition-colors duration-200 hover:border-primary/60 hover:text-primary",
            "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
          )}
        >
          {service.name}
        </Link>
      ))}
    </div>
  );
}

export default function ServicesPreview({
  services,
  className,
}: ServicesPreviewProps) {
  const categories = useMemo(
    () => getPrimaryServiceCategories(services),
    [services],
  );

  const [activeId, setActiveId] = useState(
    () => categories[0]?.id ?? "",
  );

  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  const reduceMotion = usePrefersReducedMotion();

  const activeCategory =
    categories.find((category) => category.id === activeId) ??
    categories[0];

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  if (!activeCategory) return null;

  return (
    <section
      ref={sectionRef}
      className={cn(
        "relative overflow-hidden bg-background",
        className,
      )}
      aria-labelledby="home-services-title"
    >
      <div className="section-container section-padding">
        <div
          data-services-reveal
          className={cn(
            "flex flex-col gap-5 transition-all duration-500 ease-premium-out lg:flex-row lg:items-end lg:justify-between",
            visible || reduceMotion
              ? "translate-y-0 opacity-100"
              : "translate-y-[18px] opacity-0",
          )}
        >
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
              Services
            </p>

            <h2
              id="home-services-title"
              className="mt-3 font-heading text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl lg:text-5xl"
            >
              {SECTION_HEADING}
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-muted-foreground sm:text-base">
            {SECTION_INTRO}
          </p>
        </div>

        <div className="mt-12 hidden gap-10 lg:grid lg:grid-cols-[minmax(0,1fr)_24rem] xl:grid-cols-[minmax(0,1fr)_28rem]">
          <div className="border-y border-border">
            {categories.map((category, index) => {
              const active = category.id === activeCategory.id;

              return (
                <Link
                  key={category.id}
                  to={servicePath(category.primarySlug)}
                  data-services-reveal
                  onMouseEnter={() => setActiveId(category.id)}
                  onFocus={() => setActiveId(category.id)}
                  className={cn(
                    "group relative flex min-h-[5.75rem] items-center gap-6 border-b border-border py-5 pr-2",
                    "transition-[opacity,color,transform] duration-300 ease-premium-out last:border-b-0",
                    "focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-primary",
                    active
                      ? "text-ink opacity-100"
                      : "text-muted-foreground opacity-55 hover:text-ink hover:opacity-100",
                  )}
                  aria-describedby={`home-service-${category.id}-summary`}
                >
                  <span
                    className={cn(
                      "w-10 text-sm font-semibold tabular-nums transition-colors duration-300",
                      active
                        ? "text-accent"
                        : "text-muted-foreground/70",
                    )}
                    aria-hidden="true"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="min-w-0 flex-1">
                    <span
                      className={cn(
                        "block font-heading text-3xl font-semibold leading-tight tracking-tight transition-transform duration-300 ease-premium-out xl:text-4xl",
                        active && "translate-x-2",
                      )}
                    >
                      {category.name}
                    </span>

                    <span
                      id={`home-service-${category.id}-summary`}
                      className={cn(
                        "mt-2 block max-w-2xl text-sm leading-6 text-muted-foreground transition-opacity duration-300",
                        active ? "opacity-100" : "opacity-70",
                      )}
                    >
                      {category.primaryService.shortTagline}
                    </span>
                  </span>

                  <ArrowRight
                    className={cn(
                      "size-5 shrink-0 transition-transform duration-300 ease-premium-out",
                      active && "translate-x-1 text-accent",
                    )}
                    aria-hidden="true"
                  />

                  <span
                    className={cn(
                      "absolute bottom-[-1px] left-0 h-px bg-accent transition-all duration-300 ease-premium-out",
                      active ? "w-full" : "w-0 group-hover:w-24",
                    )}
                    aria-hidden="true"
                  />
                </Link>
              );
            })}
          </div>

          <aside
            data-services-reveal
            className={cn(
              "sticky top-[calc(var(--header-height)+2rem)] h-fit transition-all duration-500 ease-premium-out",
              visible || reduceMotion
                ? "translate-y-0 opacity-100"
                : "translate-y-[18px] opacity-0",
            )}
            aria-label={`${activeCategory.name} preview`}
          >
            <div className="overflow-hidden rounded-xl border border-border bg-card shadow-lg">
              <div className="aspect-[4/5] overflow-hidden bg-muted">
                <ImageWithSkeleton
                  key={activeCategory.id}
                  src={activeCategory.image.src}
                  alt={activeCategory.image.alt}
                  skeleton={
                    <HeroSkeleton className="size-full rounded-none" />
                  }
                  containerClassName="size-full"
                  className="size-full object-cover transition-transform duration-700 ease-premium-out"
                  loading="lazy"
                  decoding="async"
                  fetchPriority="low"
                />
              </div>

              <div className="border-t border-border p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                  Includes
                </p>

                <RelatedServiceLinks
                  category={activeCategory}
                  onLinkFocus={() => setActiveId(activeCategory.id)}
                />
              </div>
            </div>
          </aside>
        </div>

        <div className="mt-10 border-y border-border lg:hidden">
          {categories.map((category, index) => {
            const active = category.id === activeCategory.id;

            return (
              <article
                key={category.id}
                data-services-reveal
                className="border-b border-border last:border-b-0"
              >
                <button
                  type="button"
                  className="group flex min-h-20 w-full items-center gap-4 py-4 text-left focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-primary"
                  aria-expanded={active}
                  aria-controls={`home-mobile-service-${category.id}`}
                  onClick={() => setActiveId(category.id)}
                >
                  <span
                    className={cn(
                      "w-8 text-sm font-semibold tabular-nums transition-colors",
                      active
                        ? "text-accent"
                        : "text-muted-foreground/70",
                    )}
                    aria-hidden="true"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="min-w-0 flex-1 font-heading text-2xl font-semibold leading-tight tracking-tight text-ink">
                    {category.name}
                  </span>

                  <ArrowRight
                    className={cn(
                      "size-5 shrink-0 transition-transform duration-300",
                      active
                        ? "translate-x-1 text-accent"
                        : "text-muted-foreground group-hover:text-primary",
                    )}
                    aria-hidden="true"
                  />
                </button>

                {active && (
                  <div
                    id={`home-mobile-service-${category.id}`}
                    className="pb-5"
                  >
                    <div className="aspect-[16/9] overflow-hidden rounded-lg bg-muted">
                      <ImageWithSkeleton
                        src={category.image.src}
                        alt={category.image.alt}
                        skeleton={
                          <HeroSkeleton className="size-full rounded-none" />
                        }
                        containerClassName="size-full"
                        className="size-full object-cover"
                        loading="lazy"
                        decoding="async"
                        fetchPriority="low"
                      />
                    </div>

                    <p className="mt-4 text-sm leading-6 text-muted-foreground">
                      {category.primaryService.shortTagline}
                    </p>

                    <RelatedServiceLinks
                      category={category}
                      compact
                    />
                  </div>
                )}
              </article>
            );
          })}
        </div>

        <div
          data-services-reveal
          className={cn(
            "mt-10 flex justify-start transition-all duration-500 ease-premium-out",
            visible || reduceMotion
              ? "translate-y-0 opacity-100"
              : "translate-y-[18px] opacity-0",
          )}
        >
          <Link
            to={ROUTES.services}
            className={cn(
              "inline-flex min-h-11 items-center gap-2 rounded-md border border-border px-4 text-sm font-semibold",
              "text-ink transition-colors duration-200 hover:border-primary/60 hover:text-primary",
              "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
            )}
          >
            View all services
            <ArrowUpRight
              className="size-4"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}