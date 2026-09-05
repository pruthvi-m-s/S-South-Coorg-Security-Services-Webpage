import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export interface OperationalSlide {
  src: string;
  alt: string;
  position?: string;
}

interface OperationalImageSliderProps {
  slides: OperationalSlide[];
  className?: string;
  label: string;
}

export default function OperationalImageSlider({
  slides,
  className,
  label,
}: OperationalImageSliderProps) {
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const styleId = "sscss-operational-slider";

    if (document.getElementById(styleId)) return;

    const style = document.createElement("style");
    style.id = styleId;

    style.textContent = `
      @keyframes sscss-operational-scroll {
        from {
          transform: translateX(0);
        }

        to {
          transform: translateX(-50%);
        }
      }

      .sscss-operational-track {
        animation: sscss-operational-scroll 45s linear infinite;
      }

      .sscss-operational-track.paused {
        animation-play-state: paused;
      }

      @media (prefers-reduced-motion: reduce) {
        .sscss-operational-track {
          animation: none;
        }
      }
    `;

    document.head.appendChild(style);

    return () => {
      style.remove();
    };
  }, []);

  if (slides.length === 0) return null;

  const duplicatedSlides = [...slides, ...slides];

  return (
    <div
      className={cn("relative w-full overflow-hidden", className)}
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      <div
        className={cn(
          "sscss-operational-track flex w-max items-center gap-6",
          isPaused && "paused",
        )}
        style={{
          willChange: "transform",
        }}
      >
        {duplicatedSlides.map((slide, index) => (
          <div
            key={`${slide.src}-${index}`}
            className={cn(
              "relative shrink-0 overflow-hidden rounded-2xl",
              "h-[160px] w-[240px]",
              "sm:h-[180px] sm:w-[270px]",
              "lg:h-[200px] lg:w-[300px]",
            )}
          >
            <img
              src={slide.src}
              alt={index < slides.length ? slide.alt : ""}
              aria-hidden={index >= slides.length}
              className="absolute inset-0 size-full object-cover"
              style={{
                objectPosition: slide.position ?? "center",
              }}
              loading="lazy"
              decoding="async"
              fetchPriority="low"
            />
          </div>
        ))}
      </div>
    </div>
  );
}