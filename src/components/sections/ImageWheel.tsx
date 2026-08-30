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
      if (
        window.matchMedia(
          "(prefers-reduced-motion: reduce)",
        ).matches
      ) {
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
      className="overflow-hidden bg-[#10100f] text-[#f5f1e8]"
      aria-labelledby="people-title"
    >
      <div className="section-container section-padding">
        <div className="grid items-center gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
          <div
            data-people-reveal
            className="max-w-xl"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#c45a52]">
              Real people. Real presence.
            </p>

            <h2
              id="people-title"
              className="mt-3 max-w-lg font-heading text-4xl font-semibold tracking-tight text-[#f5f1e8] sm:text-6xl"
            >
              Security is ultimately about people.
            </h2>

            <p className="mt-6 max-w-lg text-base leading-7 text-[#b4aea5]">
              The uniforms, briefings, access points, reception desks and
              working environments behind a deployment are part of the service.
            </p>

            <div className="mt-8 grid gap-4 border-t border-[#2b2927] pt-6 sm:grid-cols-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#77716a]">
                  Presence
                </p>
                <p className="mt-2 text-sm leading-6 text-[#ded8cf]">
                  Visible personnel where the property needs them.
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#77716a]">
                  Professionalism
                </p>
                <p className="mt-2 text-sm leading-6 text-[#ded8cf]">
                  The standard of conduct matters as much as the uniform.
                </p>
              </div>
            </div>
          </div>

          <div
            data-people-reveal
            className="relative h-[520px] overflow-hidden"
          >
            <div
              className="pointer-events-none absolute inset-x-0 top-0 z-20 h-24 bg-gradient-to-b from-[#10100f] to-transparent"
              aria-hidden="true"
            />

            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-24 bg-gradient-to-t from-[#10100f] to-transparent"
              aria-hidden="true"
            />

            <div className="grid h-full grid-cols-2 gap-4 sm:gap-5">
              <MarqueeColumn
                images={COLUMN_ONE}
                duration={20}
              />

              <MarqueeColumn
                images={COLUMN_TWO}
                duration={24}
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
            <Photo
              key={`first-${index}`}
              image={image}
            />
          ))}
        </div>

        <div
          className="people-marquee-group"
          aria-hidden="true"
        >
          {images.map((image, index) => (
            <Photo
              key={`second-${index}`}
              image={image}
            />
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
    <div className="relative h-[150px] w-full shrink-0 overflow-hidden bg-[#191918] sm:h-[165px]">
      <ImageWithSkeleton
        src={image.src}
        alt={image.alt}
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
  );
}