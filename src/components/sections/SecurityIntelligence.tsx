import { useEffect, useRef, useState } from "react";
import { CheckCircle2, MapPin, Radio, ShieldCheck } from "lucide-react";

export default function SecurityIntelligence() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  const reducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const animated = visible && !reducedMotion;

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden bg-background"
      aria-labelledby="intelligence-title"
    >
      <div className="section-container section-padding">
        <div className="grid gap-9 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
              Security intelligence
            </p>

            <h2
              id="intelligence-title"
              className="mt-3 font-heading text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
            >
              Operational awareness, made clear.
            </h2>

            <p className="mt-4 max-w-md text-sm leading-6 text-muted-foreground">
              An illustrative view of how people, access points, and response
              stay aligned.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-xl border border-border bg-card p-4 text-muted-foreground shadow-xl">
            <div
              className={`pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-primary/10 ${
                animated ? "animate-[security-scan_1200ms_ease-in-out]" : ""
              }`}
              aria-hidden="true"
            />

            <div className="relative grid gap-3 sm:grid-cols-[1.45fr_0.8fr]">
              <div className="relative min-h-64 overflow-hidden rounded-lg border border-white/10 bg-white/[0.03] p-4">
                <div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  <span>Site overview</span>
                  <span className="text-emerald-300">Secure</span>
                </div>

                <svg
                  className="mt-3 h-48 w-full"
                  viewBox="0 0 360 190"
                  aria-label="Illustrative site map"
                >
                  <path
                    d="M30 35H190V75H320V156H75V118H30Z"
                    fill="none"
                    stroke="currentColor"
                    className="text-muted-foreground"
                    strokeWidth="1"
                  />

                  <path
                    d="M55 150C90 88 125 145 165 105S230 80 282 50"
                    fill="none"
                    stroke="currentColor"
                    className="text-primary"
                    strokeWidth="2"
                    pathLength="100"
                    strokeDasharray="100"
                    strokeDashoffset={animated ? 0 : 100}
                    style={{
                      transition: "stroke-dashoffset 1000ms cubic-bezier(0.16, 1, 0.3, 1)",
                    }}
                  />

                  <circle cx="55" cy="150" r="5" className="fill-emerald-300" />
                  <circle cx="282" cy="50" r="5" className="fill-primary" />

                  {[
                    [95, 55],
                    [195, 145],
                    [285, 120],
                  ].map(([cx, cy]) => (
                    <circle
                      key={`${cx}-${cy}`}
                      cx={cx}
                      cy={cy}
                      r="4"
                      className="fill-muted-foreground"
                    />
                  ))}
                </svg>

                <div className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                  <MapPin className="size-3.5 text-primary" />
                  Patrol route
                </div>
              </div>

              <div className="grid gap-3">
                <div className="rounded-lg border border-white/10 bg-white/[0.03] p-3">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <ShieldCheck className="size-4 text-emerald-300" />
                    Personnel verified
                  </div>

                  <p className="mt-3 text-2xl font-semibold text-foreground">
                    100%
                  </p>
                </div>

                <div className="rounded-lg border border-white/10 bg-white/[0.03] p-3">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Radio className="size-4 text-primary" />
                    Access points
                  </div>

                  <div className="mt-3 flex gap-1">
                    {[0, 1, 2, 3].map((item) => (
                      <span
                        key={item}
                        className="h-1.5 flex-1 rounded-full bg-emerald-300/80"
                      />
                    ))}
                  </div>
                </div>

                <div className="rounded-lg border border-white/10 bg-white/[0.03] p-3 text-xs text-muted-foreground">
                  <CheckCircle2 className="mb-2 size-4 text-emerald-300" />
                  Response status
                  <br />
                  <span className="text-foreground">Ready</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes security-scan {
          0% {
            transform: translateY(-100%);
            opacity: 0;
          }
          50% {
            opacity: 0.8;
          }
          100% {
            transform: translateY(100%);
            opacity: 0;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-\\[security-scan_1200ms_ease-in-out\\] {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}