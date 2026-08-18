import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { ProcessStep } from "@/types";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

export default function HomeProcessTimeline({ steps }: { steps: ProcessStep[] }) {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const items = Array.from(section.querySelectorAll<HTMLElement>("[data-process-step]"));

    const context = gsap.context(() => {
      if (!reduced) {
        gsap.from("[data-process-heading], [data-process-step]", {
          opacity: 0,
          y: 18,
          stagger: 0.1,
          duration: 0.58,
          ease: "power3.out",
          scrollTrigger: { trigger: section, start: "top 78%", once: true },
        });
      }

      gsap.to("[data-process-progress]", {
        scaleY: 1,
        ease: "none",
        scrollTrigger: { trigger: section, start: "top 70%", end: "bottom 65%", scrub: 0.25 },
      });

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
    <section ref={sectionRef} className="bg-background" aria-labelledby="process-title">
      <div className="section-container section-padding">
        <div data-process-heading className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">Engagement process</p>
          <h2 id="process-title" className="mt-3 font-heading text-3xl font-semibold tracking-tight text-ink sm:text-4xl">A clear path from enquiry to deployment.</h2>
          <p className="mt-4 text-sm leading-6 text-muted-foreground">A proven six-step process that ensures smooth deployment and ongoing service excellence.</p>
        </div>

        <ol className="relative mt-14 max-w-4xl space-y-0">
          <div className="absolute bottom-8 left-[1.1rem] top-8 w-px bg-border" aria-hidden="true">
            <div data-process-progress className="h-full w-full origin-top scale-y-0 bg-primary" />
          </div>
          {steps.map((step, index) => {
            const isActive = active === index;
            return (
              <li key={step.step} data-process-step className="relative grid grid-cols-[2.25rem_1fr] gap-x-6 pb-12 last:pb-0 sm:grid-cols-[7rem_1fr] sm:gap-x-9">
                <div className="relative z-10 flex sm:justify-end">
                  <span className={cn("grid size-[2.25rem] place-items-center rounded-full border text-xs font-semibold transition-colors duration-300 motion-reduce:transition-none", isActive ? "border-primary bg-primary text-primary-foreground" : "border-border bg-background text-muted-foreground")}>{String(step.step).padStart(2, "0")}</span>
                </div>
                <div className={cn("pb-1 transition-opacity duration-300 motion-reduce:transition-none", isActive ? "opacity-100" : "opacity-55")}>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">Step {String(step.step).padStart(2, "0")}</p>
                  <h3 className="mt-2 font-heading text-xl font-semibold tracking-tight text-ink sm:text-2xl">{step.title}</h3>
                  <p className="mt-3 max-w-xl text-sm leading-6 text-muted-foreground">{step.description}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
