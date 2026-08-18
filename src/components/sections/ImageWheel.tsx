import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ImageWithSkeleton from "@/components/common/ImageWithSkeleton";
import HeroSkeleton from "@/components/common/HeroSkeleton";
import { entranceOfficeGuards, gateSecurity, techParkGuards } from "@/lib/site-images";

gsap.registerPlugin(ScrollTrigger);

const PEOPLE_IMAGES = [
  { src: techParkGuards, alt: "SSCSS security personnel operating at a technology park" },
  { src: gateSecurity, alt: "Security officer monitoring a modern property entrance" },
  { src: entranceOfficeGuards, alt: "SSCSS personnel at a modern corporate entrance" },
];

export default function ImageWheel() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const context = gsap.context(() => {
      gsap.from("[data-people-reveal]", {
        opacity: 0,
        y: 24,
        duration: 0.72,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: { trigger: section, start: "top 78%", once: true },
      });
    }, section);
    return () => context.revert();
  }, []);

  return (
    <section ref={sectionRef} className="overflow-hidden bg-muted/35" aria-labelledby="people-title">
      <div className="section-container section-padding">
        <div data-people-reveal className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">Real SSCSS people</p>
          <h2 id="people-title" className="mt-3 font-heading text-4xl font-semibold tracking-tight text-ink sm:text-5xl">REAL PEOPLE.<br />REAL PRESENCE.</h2>
          <p className="mt-5 text-sm leading-6 text-muted-foreground">The teams, discipline, and presence behind every deployment.</p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-[1.42fr_0.58fr] md:gap-6">
          <figure data-people-reveal className="relative aspect-[4/3] overflow-hidden bg-card">
            <Photo image={PEOPLE_IMAGES[0]} className="transition-transform duration-700 hover:scale-[1.015] motion-reduce:transition-none" />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/80 to-transparent px-6 pb-6 pt-16 text-xs font-semibold uppercase tracking-[0.14em] text-foreground">Ready where it matters</figcaption>
          </figure>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-1 md:gap-6">
            <figure data-people-reveal className="aspect-[4/3] overflow-hidden bg-card"><Photo image={PEOPLE_IMAGES[1]} className="transition-transform duration-700 hover:scale-[1.015] motion-reduce:transition-none" /></figure>
            <figure data-people-reveal className="aspect-[4/3] overflow-hidden bg-card"><Photo image={PEOPLE_IMAGES[2]} className="transition-transform duration-700 hover:scale-[1.015] motion-reduce:transition-none" /></figure>
          </div>
        </div>
      </div>
    </section>
  );
}

function Photo({ image, className }: { image: (typeof PEOPLE_IMAGES)[number]; className?: string }) {
  return <ImageWithSkeleton src={image.src} alt={image.alt} skeleton={<HeroSkeleton className="size-full rounded-none" />} containerClassName="size-full" className={`size-full object-cover ${className ?? ""}`} loading="lazy" decoding="async" fetchPriority="low" />;
}
