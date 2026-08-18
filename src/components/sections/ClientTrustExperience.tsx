import { useEffect, useRef, useState } from "react";
import { animate } from "animejs";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { getIcon } from "@/lib/icons";
import { entranceOfficeGuards, gateSecurity, techPark, techParkGuards } from "@/lib/site-images";
import type { ClientCategory } from "@/content/clients-page";
import type { Stat, Testimonial } from "@/types";

function AnimatedStat({ stat }: { stat: Stat }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          setValue(stat.value);
          return;
        }
        const counter = { value: 0 };
        animate(counter, {
          value: stat.value,
          duration: 800,
          ease: "out(4)",
          onUpdate: () => setValue(Math.round(counter.value)),
        });
      },
      { threshold: 0.7 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [stat.value]);

  return (
    <div>
      <span ref={ref} className="font-heading text-3xl font-semibold text-ink sm:text-4xl">
        {value}
        {stat.suffix.replace("+", "+")}
      </span>
      <p className="mt-1 text-xs uppercase tracking-[0.12em] text-muted-foreground">
        {stat.label}
      </p>
    </div>
  );
}

const categoryImages: Record<string, string> = {
  Corporate: techParkGuards, Residential: techPark, Educational: entranceOfficeGuards,
  Healthcare: entranceOfficeGuards, "Banking & Finance": gateSecurity, Hospitality: techParkGuards,
  Industrial: techPark, Government: gateSecurity,
};

export default function ClientTrustExperience({
  categories,
  stats,
  testimonials,
}: {
  categories: ClientCategory[];
  stats: Stat[];
  testimonials: Testimonial[];
}) {
  const published = testimonials.filter((item) => !item.isPlaceholder);

  return (
    <>
      {/* ─── Sector strip (static, calm) ───────────────────── */}
      <section
        className="border-y border-border bg-muted py-6"
        aria-label="Client sectors"
      >
        <div className="section-container flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {categories.map((category) => (
            <span
              key={category.title}
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.13em] text-muted-foreground"
            >
              <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
              {category.title}
            </span>
          ))}
        </div>
      </section>

      {/* ─── Sector panels + stats ─────────────────────────── */}
      <section className="bg-background" aria-labelledby="trust-title">
        <div className="section-container section-padding">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
              Why organizations trust us
            </p>
            <h2
              id="trust-title"
              className="mt-3 font-heading text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
            >
              Trusted across the places that matter.
            </h2>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => {
              const Icon = getIcon(category.icon);
              return (
                <article
                  key={category.title}
                  className="group relative min-h-64 overflow-hidden rounded-xl border border-border bg-card p-5 text-white"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-35 transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url(${categoryImages[category.title]})` }}
                    aria-hidden="true"
                  >
                  </div>
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-card via-card/70 to-card/20" aria-hidden="true" />
                  <Icon className="relative size-6 text-primary" aria-hidden="true" />
                  <div className="absolute inset-x-5 bottom-5 transition-transform duration-300 group-hover:-translate-y-1">
                    <h3 className="font-heading text-xl font-semibold">{category.title}</h3>
                    <p className="mt-2 text-sm leading-5 text-muted-foreground">{category.description}</p>
                    <Link
                      to="/services"
                      className="mt-4 inline-flex min-h-9 items-center gap-1 text-sm font-semibold text-primary opacity-100 transition-opacity lg:opacity-0 lg:group-hover:opacity-100"
                    >
                      Explore support <ArrowUpRight className="size-4" aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-12 grid gap-6 border-y border-border py-8 sm:grid-cols-3">
            {stats.map((stat) => (
              <AnimatedStat key={stat.id} stat={stat} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── Partnership proof ─────────────────────────────── */}
      <section className="bg-muted" aria-labelledby="proof-title">
        <div className="section-container section-padding">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                Partnership proof
              </p>
              <h2
                id="proof-title"
                className="mt-3 font-heading text-3xl font-semibold tracking-tight text-ink"
              >
                Proof before promotion.
              </h2>
              <p className="mt-4 text-sm leading-6 text-muted-foreground">
                Only client permissions and approved testimonials are published.
              </p>
            </div>
            {published.length ? (
              <div className="grid gap-3 sm:grid-cols-2">
                {published.map((item) => (
                  <blockquote
                    key={item.id}
                    className="rounded-xl border border-border bg-background p-5 text-sm leading-6 text-muted-foreground"
                  >
                    “{item.quote}”
                    <footer className="mt-4 text-xs font-semibold text-ink">{item.authorName}</footer>
                  </blockquote>
                ))}
              </div>
            ) : (
              <div className="flex items-center gap-3 rounded-xl border border-border bg-background p-6 text-sm text-muted-foreground">
                <CheckCircle2 className="size-5 shrink-0 text-primary" aria-hidden="true" />
                Client names and testimonials are published only with approval.
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
