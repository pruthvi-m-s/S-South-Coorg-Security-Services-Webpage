import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Testimonial } from "@/types";

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
  className?: string;
}

export default function TestimonialsSection({
  testimonials,
  className,
}: TestimonialsSectionProps) {
  const published = testimonials.filter(
    (testimonial) => !testimonial.isPlaceholder,
  );

  const [active, setActive] = useState(0);

  if (!published.length) return null;

  const testimonial = published[active];

  const showPrevious = () =>
    setActive(
      (index) =>
        (index - 1 + published.length) %
        published.length,
    );

  const showNext = () =>
    setActive(
      (index) =>
        (index + 1) % published.length,
    );

  return (
    <section
      className={cn("bg-background", className)}
      aria-labelledby="testimonials-title"
    >
      <div className="section-container section-padding">
        <div className="grid gap-10 lg:grid-cols-[0.38fr_0.62fr] lg:items-end lg:gap-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
              Client perspective
            </p>

            <h2
              id="testimonials-title"
              className="mt-3 max-w-sm font-heading text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
            >
              Trusted in the moments that matter.
            </h2>

            {published.length > 1 && (
              <div className="mt-8 flex items-center gap-3">
                <button
                  type="button"
                  onClick={showPrevious}
                  className="group inline-flex size-10 items-center justify-center border border-border text-ink transition-colors hover:border-primary hover:text-primary"
                  aria-label="Show previous testimonial"
                >
                  <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-0.5 motion-reduce:transition-none" />
                </button>

                <button
                  type="button"
                  onClick={showNext}
                  className="group inline-flex size-10 items-center justify-center border border-border text-ink transition-colors hover:border-primary hover:text-primary"
                  aria-label="Show next testimonial"
                >
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5 motion-reduce:transition-none" />
                </button>

                <span className="ml-2 text-xs font-medium tracking-[0.12em] text-muted-foreground">
                  {String(active + 1).padStart(2, "0")} /{" "}
                  {String(published.length).padStart(2, "0")}
                </span>
              </div>
            )}
          </div>

          <div
            key={testimonial.id}
            className="animate-[testimonial-enter_420ms_cubic-bezier(0.16,1,0.3,1)] border-l-2 border-primary pl-6 motion-reduce:animate-none sm:pl-10"
          >
            <blockquote className="font-heading text-2xl font-medium leading-snug tracking-tight text-ink sm:text-3xl">
              “{testimonial.quote}”
            </blockquote>

            <footer className="mt-8">
              <cite className="not-italic text-sm font-semibold text-ink">
                {testimonial.authorName}
              </cite>

              {(testimonial.authorRole ||
                testimonial.organization) && (
                <p className="mt-1 text-sm text-muted-foreground">
                  {[
                    testimonial.authorRole,
                    testimonial.organization,
                  ]
                    .filter(Boolean)
                    .join(", ")}
                </p>
              )}
            </footer>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes testimonial-enter {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}