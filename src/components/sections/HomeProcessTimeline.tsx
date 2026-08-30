import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { ProcessStep } from "@/types";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

export default function HomeProcessTimeline({
  steps,
}: {
  steps: ProcessStep[];
}) {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const items = Array.from(
      section.querySelectorAll<HTMLElement>("[data-process-step]"),
    );

    const context = gsap.context(() => {
      if (!reduced) {
        gsap.from(
          "[data-process-heading], [data-process-step]",
          {
            opacity: 0,
            y: 18,
            stagger: 0.08,
            duration: 0.58,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 78%",
              once: true,
            },
          },
        );

        gsap.to("[data-process-progress]", {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top 68%",
            end: "bottom 65%",
            scrub: 0.25,
          },
        });
      }

      items.forEach((item, index) => {
        ScrollTrigger.create({
          trigger: item,
          start: "top center+=80",
          end: "bottom center+=80",
          onEnter: () => setActive(index),
          onEnterBack: () => setActive(index),
        });
      });
    }, section);

    return () => context.revert();
  }, [steps.length]);

  return (
    <section
      ref={sectionRef}
      className="bg-[#f3efe6] text-[#171615]"
      aria-labelledby="process-title"
    >
      <div className="section-container section-padding">
        <div
          data-process-heading
          className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20"
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
            The process matters as much as the people you deploy. The objective
            is to understand the requirement, establish the deployment plan and
            maintain accountability after the first day.
          </p>
        </div>

        <ol className="relative mt-14 max-w-5xl">
          <div
            className="absolute bottom-8 left-[1rem] top-8 w-px bg-[#d9d1c5] sm:left-[6rem]"
            aria-hidden="true"
          >
            <div
              data-process-progress
              className="h-full w-full origin-top scale-y-0 bg-[#ad241c]"
            />
          </div>

          {steps.map((step, index) => {
            const isActive = active === index;

            return (
              <li
                key={step.step}
                data-process-step
                className="relative grid grid-cols-[2rem_1fr] gap-6 pb-12 last:pb-0 sm:grid-cols-[6rem_1fr] sm:gap-8"
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