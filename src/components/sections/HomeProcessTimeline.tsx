import { useEffect, useRef, useState } from "react";
import type { ProcessStep } from "@/types";
import { cn } from "@/lib/utils";

export default function HomeProcessTimeline({
  steps,
}: {
  steps: ProcessStep[];
}) {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const sectionObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          sectionObserver.disconnect();
        }
      },
      { threshold: 0.12 },
    );

    sectionObserver.observe(section);

    const items = Array.from(
      section.querySelectorAll<HTMLElement>("[data-process-step]"),
    );

    if (reduced) {
      queueMicrotask(() => {
        setActive(steps.length - 1);
      });
    } else if (items.length > 0) {
      const itemObserver = new IntersectionObserver(
        (entries) => {
          let bestIndex = -1;
          let bestRatio = 0;

          for (const entry of entries) {
            if (!entry.isIntersecting || entry.intersectionRatio <= bestRatio) {
              continue;
            }

            const index = items.indexOf(entry.target as HTMLElement);

            if (index >= 0) {
              bestIndex = index;
              bestRatio = entry.intersectionRatio;
            }
          }

          if (bestIndex >= 0) {
            setActive(bestIndex);
          }
        },
        {
          root: null,
          rootMargin: "-35% 0px -35% 0px",
          threshold: [0.15, 0.35, 0.55, 0.75, 1],
        },
      );

      items.forEach((item) => itemObserver.observe(item));

      return () => {
        sectionObserver.disconnect();
        itemObserver.disconnect();
      };
    }

    return () => {
      sectionObserver.disconnect();
    };
  }, [steps.length]);

  const progress =
    steps.length <= 1
      ? 1
      : active / (steps.length - 1);

  return (
    <section
      ref={sectionRef}
      className="bg-[#f3efe6] text-[#171615]"
      aria-labelledby="process-title"
    >
      <div className="section-container section-padding">
        <div
          data-process-heading
          className={cn(
            "grid gap-8 transition-all duration-700 ease-premium-out lg:grid-cols-[0.7fr_1.3fr] lg:gap-20",
            visible
              ? "translate-y-0 opacity-100"
              : "translate-y-[18px] opacity-0",
          )}
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#ad241c]">
              How the engagement works
            </p>

            <h2
              id="process-title"
              className="mt-3 max-w-md font-heading text-4xl font-semibold tracking-tight text-[#171615] sm:text-5xl"
            >
              A clear path from requirement to deployment.
            </h2>
          </div>

          <p className="max-w-xl text-sm leading-7 text-[#6a655e] sm:text-base">
            The process matters as much as the people you deploy. The
            objective is to understand the requirement, establish the
            deployment plan and maintain accountability after the first day.
          </p>
        </div>

        <ol className="relative mt-14 max-w-5xl">
          <div
            className="absolute bottom-8 left-[1rem] top-8 w-px bg-[#d9d1c5] sm:left-[6rem]"
            aria-hidden="true"
          >
            <div
              data-process-progress
              className="h-full w-full origin-top bg-[#ad241c] transition-transform duration-300 ease-out motion-reduce:transition-none"
              style={{
                transform: `scaleY(${progress})`,
              }}
            />
          </div>

          {steps.map((step, index) => {
            const isActive = active === index;

            return (
              <li
                key={step.step}
                data-process-step
                className={cn(
                  "relative grid grid-cols-[2rem_1fr] gap-6 pb-12 last:pb-0 sm:grid-cols-[6rem_1fr] sm:gap-8",
                  "transition-all duration-700 ease-premium-out",
                  visible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-[18px] opacity-0",
                )}
                style={{
                  transitionDelay: `${index * 80}ms`,
                }}
              >
                <div className="relative z-10 flex justify-start sm:justify-center">
                  <span
                    className={cn(
                      "grid size-8 place-items-center rounded-full border text-xs font-semibold",
                      "transition-colors duration-300 motion-reduce:transition-none",
                      isActive
                        ? "border-[#ad241c] bg-[#ad241c] text-[#fffaf5]"
                        : "border-[#cfc7bb] bg-[#f3efe6] text-[#6a655e]",
                    )}
                  >
                    {String(step.step).padStart(2, "0")}
                  </span>
                </div>

                <div
                  className={cn(
                    "border-b border-[#d9d1c5] pb-8",
                    "transition-opacity duration-300 motion-reduce:transition-none",
                    isActive ? "opacity-100" : "opacity-60",
                  )}
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#ad241c]">
                    Step {String(step.step).padStart(2, "0")}
                  </p>

                  <h3 className="mt-2 font-heading text-2xl font-semibold tracking-tight text-[#171615] sm:text-3xl">
                    {step.title}
                  </h3>

                  <p className="mt-3 max-w-2xl text-sm leading-6 text-[#6a655e] sm:text-base">
                    {step.description}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}