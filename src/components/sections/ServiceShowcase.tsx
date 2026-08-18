import { createElement, useLayoutEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { animate, stagger } from "animejs";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { getIcon } from "@/lib/icons";
import { servicePath } from "@/lib/routes";
import ImageWithSkeleton from "@/components/common/ImageWithSkeleton";
import HeroSkeleton from "@/components/common/HeroSkeleton";
import type { Service } from "@/types";

interface ServiceShowcaseProps { services: Service[]; title: string; }

function ServiceVisual({ service, className }: { service: Service; className?: string }) {
  // State is reset by remounting via `key={service.slug}` at the call site,
  // so `src` changes never need a synchronous setState-in-effect.
  const [unavailable, setUnavailable] = useState(!service.heroImage.src);

  if (unavailable) return (
    <div className={cn("flex size-full flex-col items-center justify-center bg-muted px-6 text-center", className)} aria-label={`${service.name} image placeholder`}>
      <div className="flex size-14 items-center justify-center rounded-full border border-border bg-background text-primary" aria-hidden="true">
        {createElement(getIcon(service.icon), { size: 24, strokeWidth: 1.4 })}
      </div>
      <span className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">Image placeholder</span>
    </div>
  );

  return <ImageWithSkeleton src={service.heroImage.src} alt={service.heroImage.alt} onError={() => setUnavailable(true)} skeleton={<HeroSkeleton className="size-full rounded-none" />} containerClassName={cn("size-full", className)} className="size-full object-cover" loading="lazy" decoding="async" fetchPriority="low" />;
}

// ─── Shared stage metadata (icon chip / index) ───────────────
function StageIcon({ service, className }: { service: Service; className?: string }) {
  return (
    <div className={cn("pointer-events-none flex size-10 items-center justify-center rounded-full border border-white/15 bg-background/40 text-primary backdrop-blur-sm", className)} aria-hidden="true">
      {createElement(getIcon(service.icon), { size: 18, strokeWidth: 1.6 })}
    </div>
  );
}

function MobileServiceAccordion({ services }: { services: Service[] }) {
  const [openSlug, setOpenSlug] = useState(services[0]?.slug ?? "");
  return <div className="mt-8 space-y-2 lg:hidden">
    {services.map((service, index) => {
      const isOpen = service.slug === openSlug;
      return <article key={service.slug} className="overflow-hidden rounded-xl border border-border bg-card">
        <button type="button" className="flex min-h-14 w-full items-center justify-between gap-4 px-4 text-left text-base font-semibold text-ink focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-primary" aria-expanded={isOpen} aria-controls={`service-panel-${service.slug}`} onClick={() => setOpenSlug((current) => current === service.slug ? "" : service.slug)}>
          <span className="flex items-center gap-3">
            <span className={cn("text-xs font-semibold tabular-nums tracking-wide transition-colors", isOpen ? "text-primary" : "text-muted-foreground")} aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
            {service.name}
          </span>
          <span className={cn("size-2 rounded-full bg-primary transition-transform duration-200", isOpen ? "scale-100" : "scale-75 opacity-50")} aria-hidden="true" />
        </button>
        {isOpen && <div id={`service-panel-${service.slug}`} className="border-t border-border p-3">
          <div className="relative aspect-[16/9] overflow-hidden rounded-lg">
            <div className="absolute inset-0"><ServiceVisual service={service} /></div>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" aria-hidden="true" />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-4">
              <div className="min-w-0">
                <h4 className="font-heading text-lg font-semibold tracking-tight text-ink">{service.name}</h4>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">{service.shortTagline}</p>
              </div>
              <StageIcon service={service} className="shrink-0" />
            </div>
          </div>
          <Link to={servicePath(service.slug)} className="mt-4 inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">Explore service <ArrowUpRight className="size-4" aria-hidden="true" /></Link>
        </div>}
      </article>;
    })}
  </div>;
}

export default function ServiceShowcase({ services, title }: ServiceShowcaseProps) {
  const [selectedSlug, setSelectedSlug] = useState(services[0]?.slug ?? "");
  const selected = services.find((service) => service.slug === selectedSlug) ?? services[0];
  const [visual, setVisual] = useState<{ current: Service; previous?: Service }>(() => ({ current: services[0] }));
  const selectorRefs = useRef(new Map<string, HTMLButtonElement>());
  const selectorListRef = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLSpanElement>(null);
  const currentImageRef = useRef<HTMLDivElement>(null);
  const previousImageRef = useRef<HTMLDivElement>(null);
  const indexRef = useRef<HTMLSpanElement>(null);
  const stageContentRef = useRef<HTMLDivElement>(null);
  const selectService = (service: Service) => {
    if (service.slug === selectedSlug) return;
    setSelectedSlug(service.slug);
    setVisual((current) => ({ previous: current.current, current: service }));
  };

  useLayoutEffect(() => {
    const button = selectorRefs.current.get(selectedSlug);
    const indicator = indicatorRef.current;
    if (!button || !indicator) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      indicator.style.transform = `translateY(${button.offsetTop}px)`;
      indicator.style.height = `${button.offsetHeight}px`;
      return;
    }
    const movement = animate(indicator, { translateY: button.offsetTop, height: button.offsetHeight, duration: 280, ease: "out(4)" });
    return () => { movement.revert(); };
  }, [selectedSlug]);

  useLayoutEffect(() => {
    const current = currentImageRef.current;
    const previous = previousImageRef.current;
    if (!current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const animations = [animate(current, { opacity: [0, 1], scale: [1.02, 1], duration: 460, ease: "out(4)" }), ...(previous ? [animate(previous, { opacity: [1, 0], scale: [1, 1.015], duration: 300, ease: "out(4)" })] : [])];
    return () => { animations.forEach((animation) => animation.revert()); };
  }, [visual.current.slug]);

// ─── Selected index counter + overlay content (restrained) ──
  useLayoutEffect(() => {
    const activeIndex = services.findIndex((service) => service.slug === selectedSlug);
    const indexEl = indexRef.current;
    if (!indexEl) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      indexEl.textContent = String(activeIndex + 1).padStart(2, "0");
      return;
    }
    const counterValue = { n: 0 };
    const counter = animate(counterValue, {
      n: activeIndex + 1,
      duration: 420,
      ease: "out(4)",
      round: 1,
      update: () => {
        indexEl.textContent = String(counterValue.n).padStart(2, "0");
      },
    });
    return () => { counter.revert(); };
  }, [selectedSlug, services]);

  useLayoutEffect(() => {
    const content = stageContentRef.current;
    if (!content || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const reveal = animate(content, { opacity: [0, 1], translateY: [10, 0], duration: 420, ease: "out(4)" });
    return () => { reveal.revert(); };
  }, [visual.current.slug]);

  useLayoutEffect(() => {
    const list = selectorListRef.current;
    if (!list || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const entrance = animate(Array.from(list.querySelectorAll("button")), { opacity: [0, 1], translateX: [-8, 0], delay: stagger(35), duration: 360, ease: "out(4)" });
    return () => { entrance.revert(); };
  }, []);

  if (!selected) return null;
  return <section className="bg-background" aria-labelledby="service-showcase-title">
    <div className="section-container section-padding">
      <div className="flex items-end justify-between gap-6">
        <div className="max-w-2xl"><p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">Services</p><h2 id="service-showcase-title" className="mt-3 font-heading text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{title}</h2></div>
        <p className="hidden max-w-xs text-sm leading-6 text-muted-foreground lg:block">Select a service to preview it — each offering links to its full engagement detail.</p>
      </div>
      <div className="mt-8 hidden gap-8 lg:grid lg:grid-cols-[minmax(18rem,0.72fr)_minmax(0,1.35fr)] lg:items-stretch">
        <div ref={selectorListRef} className="relative border-y border-border py-2">
          <span ref={indicatorRef} className="pointer-events-none absolute left-0 top-0 w-0.5 rounded-full bg-primary" aria-hidden="true" />
          {services.map((service, index) => {
            const active = service.slug === selectedSlug;
            return <button key={service.slug} ref={(node) => { if (node) selectorRefs.current.set(service.slug, node); else selectorRefs.current.delete(service.slug); }} type="button" onMouseEnter={() => selectService(service)} onFocus={() => selectService(service)} onClick={() => selectService(service)} className={cn("group flex min-h-12 w-full items-center gap-3 rounded-md px-4 text-left text-sm font-medium transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-primary", active ? "bg-muted/70 text-ink" : "text-muted-foreground hover:bg-muted/40 hover:text-ink")} aria-pressed={active}>
              <span className={cn("text-xs font-semibold tabular-nums tracking-wide transition-colors duration-150", active ? "text-primary" : "text-muted-foreground/70 group-hover:text-primary")} aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
              <span className="flex-1">{service.name}</span>
              <span className={cn("size-1.5 rounded-full transition-colors duration-150", active ? "bg-primary" : "bg-border group-hover:bg-primary/50")} aria-hidden="true" />
            </button>;
          })}
        </div>
        <div className="relative min-h-[34rem] overflow-hidden rounded-2xl border border-border bg-card shadow-lg">
          {/* Stage image (fills the whole stage) */}
          <div className="absolute inset-0 min-h-0 bg-muted">
{visual.previous && <div ref={previousImageRef} className="absolute inset-0"><ServiceVisual key={visual.previous.slug} service={visual.previous} /></div>}
            <div ref={currentImageRef} className="absolute inset-0"><ServiceVisual key={visual.current.slug} service={visual.current} /></div>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/20 to-background/10" aria-hidden="true" />
          </div>

          {/* Stage index counter — top right */}
          <div className="pointer-events-none absolute right-5 top-5 flex items-center gap-2 rounded-full border border-white/10 bg-background/40 px-3 py-1.5 text-ink backdrop-blur-sm" aria-hidden="true">
            <span ref={indexRef} className="text-sm font-semibold tabular-nums tracking-wide">01</span>
            <span className="text-xs text-muted-foreground">/ {String(services.length).padStart(2, "0")}</span>
          </div>

          {/* Overlay content — bottom */}
          <div ref={stageContentRef} className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-6 p-6 lg:p-9">
            <div className="min-w-0 max-w-xl">
              <div className="flex items-center gap-3">
                <StageIcon service={selected} />
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">Service {String(services.findIndex((s) => s.slug === selected.slug) + 1).padStart(2, "0")}</p>
              </div>
              <h3 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-ink lg:text-4xl">{selected.name}</h3>
              <p className="mt-3 max-w-md text-sm leading-6 text-muted-foreground">{selected.shortTagline}</p>
            </div>
            <Link to={servicePath(selected.slug)} className="inline-flex min-h-11 shrink-0 items-center gap-1.5 rounded-md bg-primary px-4 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">Explore <ArrowUpRight className="size-4" aria-hidden="true" /></Link>
          </div>
        </div>
      </div>
      <MobileServiceAccordion services={services} />
    </div>
  </section>;
}
