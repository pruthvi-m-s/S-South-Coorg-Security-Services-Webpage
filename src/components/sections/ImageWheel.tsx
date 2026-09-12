import { useEffect, useRef, useState } from "react";
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
  const [visible, setVisible] = useState(false);
  const [marqueeOffset, setMarqueeOffset] = useState(-620);

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
      { threshold: 0.12 },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const computeOffset = () => {
      const w = window.innerWidth;
      if (w < 640) return -460;
      if (w < 1024) return -580;
      return -720;
    };

    setMarqueeOffset(computeOffset());

    const onResize = () => setMarqueeOffset(computeOffset());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
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
            className={`max-w-xl transition-all duration-700 ease-premium-out ${
              visible
                ? "translate-y-0 opacity-100"
                : "translate-y-6 opacity-0"
            }`}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#c45a52]">
              Real people. Real presence.
            </p>

            <h2
              id="people-title"
              className="mt-3 max-w-lg font-heading text-4xl font-semibold tracking-tight text-[#f5f1e8] sm:text-5xl"
            >
              Security is ultimately about people.
            </h2>

            <p className="mt-6 max-w-lg text-base leading-7 text-[#b4aea5]">
              The uniforms, briefings, access points, reception desks and
              working environments behind a deployment are part of the service.
            </p>

            <div className="mt-8 grid gap-4 border-t border-[#2b2927] pt-6 sm:grid-cols-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#9a9590]">
                  Presence
                </p>

                <p className="mt-2 text-sm leading-6 text-[#ded8cf]">
                  Visible personnel where the property needs them.
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#9a9590]">
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
            className={`relative h-[320px] overflow-hidden transition-all duration-700 ease-premium-out sm:h-[420px] lg:h-[520px] ${
              visible
                ? "translate-y-0 opacity-100"
                : "translate-y-6 opacity-0"
            }`}
            style={{ transitionDelay: "120ms" }}
          >
            <div
              className="pointer-events-none absolute inset-x-0 top-0 z-20 h-16 bg-gradient-to-b from-[#10100f] to-transparent sm:h-20 lg:h-24"
              aria-hidden="true"
            />

            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-16 bg-gradient-to-t from-[#10100f] to-transparent sm:h-20 lg:h-24"
              aria-hidden="true"
            />

            <div className="grid h-full grid-cols-2 gap-4 sm:gap-5">
              <MarqueeColumn
                images={COLUMN_ONE}
                duration={20}
                marqueeOffset={marqueeOffset}
              />

              <MarqueeColumn
                images={COLUMN_TWO}
                duration={24}
                reverse
                marqueeOffset={marqueeOffset}
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
  marqueeOffset = -620,
}: {
  images: Array<{
    src: string;
    alt: string;
  }>;
  duration: number;
  reverse?: boolean;
  marqueeOffset?: number;
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
            "--people-marquee-offset": `${marqueeOffset}px`,
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
    <div className="relative h-[100px] w-full shrink-0 overflow-hidden bg-[#191918] sm:h-[130px] lg:h-[165px]">
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