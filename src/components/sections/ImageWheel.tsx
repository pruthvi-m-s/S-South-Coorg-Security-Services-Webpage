import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ImageWithSkeleton from "@/components/common/ImageWithSkeleton";
import HeroSkeleton from "@/components/common/HeroSkeleton";
import {
  entranceOfficeGuards,
  gateSecurity,
  techPark,
  techParkGuards,
  corporateEvent,
  entranceDark,
  officeFront,
  receptionGuard,
} from "@/lib/site-images";

gsap.registerPlugin(ScrollTrigger);

const COLUMN_ONE = [
  {
    src: entranceOfficeGuards,
    alt: "SSCSS security personnel managing a corporate entrance",
  },
  {
    src: techParkGuards,
    alt: "SSCSS security personnel deployed at a technology park",
  },
  {
    src: gateSecurity,
    alt: "SSCSS security officer managing access at a property entrance",
  },
  {
    src: receptionGuard,
    alt: "SSCSS security personnel providing reception security",
  },
];

const COLUMN_TWO = [
  {
    src: techPark,
    alt: "SSCSS security deployment across a technology park",
  },
  {
    src: entranceDark,
    alt: "SSCSS security presence at a corporate entrance",
  },
  {
    src: officeFront,
    alt: "SSCSS security deployment at a modern office",
  },
  {
    src: corporateEvent,
    alt: "SSCSS security personnel supporting a corporate event",
  },
];

export default function ImageWheel() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const context = gsap.context(() => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
      }

      gsap.from("[data-people-reveal]", {
        opacity: 0,
        y: 24,
        duration: 0.72,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 78%",
          once: true,
        },
      });
    }, section);

    return () => context.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden bg-muted/35"
      aria-labelledby="people-title"
    >
      <div className="section-container section-padding">
        <div
          data-people-reveal
          className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]"
        >
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
              Real SSCSS people
            </p>

            <h2
              id="people-title"
              className="mt-3 font-heading text-4xl font-semibold tracking-tight text-ink sm:text-5xl"
            >
              REAL PEOPLE.
              <br />
              REAL PRESENCE.
            </h2>

            <p className="mt-5 text-sm leading-6 text-muted-foreground">
              The teams, discipline, and presence behind every deployment.
            </p>
          </div>

          <div
            data-people-reveal
            className="relative h-[460px] overflow-hidden"
          >
            <div className="pointer-events-none absolute inset-x-0 top-0 z-20 h-20 bg-gradient-to-b from-muted/35 to-transparent" />

            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-20 bg-gradient-to-t from-muted/35 to-transparent" />

            <div className="grid h-full grid-cols-2 gap-5">
              <MarqueeColumn
  images={COLUMN_ONE}
  duration={18}
/>

<MarqueeColumn
  images={COLUMN_TWO}
  duration={22}
  reverse
/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MarqueeColumn({
  images,
  duration,
  reverse = false,
}: {
  images: Array<{
    src: string;
    alt: string;
  }>;
  duration: number;
  reverse?: boolean;
}) {
  return (
    <div className="relative h-full overflow-hidden">
      <div
        className={`people-marquee-track ${
          reverse ? "people-marquee-reverse" : ""
        }`}
        style={
          {
            "--people-marquee-duration": `${duration}s`,
          } as React.CSSProperties
        }
      >
        <div className="people-marquee-group">
          {images.map((image, index) => (
            <Photo key={`first-${index}`} image={image} />
          ))}
        </div>

        <div className="people-marquee-group" aria-hidden="true">
          {images.map((image, index) => (
            <Photo key={`second-${index}`} image={image} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Photo({
  image,
}: {
  image: {
    src: string;
    alt: string;
  };
}) {
  return (
    <div className="relative h-[140px] w-full shrink-0 overflow-hidden rounded-xl bg-card">
      <ImageWithSkeleton
        src={image.src}
        alt={image.alt}
        skeleton={<HeroSkeleton className="size-full rounded-none" />}
        containerClassName="size-full"
        className="size-full object-cover"
        loading="lazy"
        decoding="async"
        fetchPriority="low"
      />
    </div>
  );
}