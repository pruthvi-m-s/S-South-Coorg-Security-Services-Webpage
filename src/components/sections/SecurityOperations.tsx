import { useEffect, useRef, useState } from "react";
import {
  Activity,
  Building2,
  Radio,
  ShieldCheck,
  UsersRound,
} from "lucide-react";

const METRICS = [
  { label: "Active sites", value: 24, suffix: "", icon: Building2 },
  { label: "Personnel", value: 128, suffix: "", icon: UsersRound },
  { label: "Coverage", value: 96, suffix: "%", icon: Radio },
] as const;

const SITES = [
  { id: "gate", label: "Main gate", value: "Normal" },
  { id: "perimeter", label: "North perimeter", value: "Normal" },
  { id: "control", label: "Control room", value: "Monitored" },
  { id: "patrol", label: "Patrol route", value: "Active" },
] as const;

const SITE_POINTS: Array<[number, number]> = [
  [48, 150],
  [120, 96],
  [196, 150],
  [268, 92],
  [300, 150],
];

export default function SecurityOperations() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [metrics, setMetrics] = useState(() =>
    METRICS.map(() => 0),
  );

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
      { threshold: 0.18 },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduced) {
      setMetrics(METRICS.map((metric) => metric.value));
      return;
    }

    const start = performance.now();
    const duration = 900;
    let frame = 0;

    const update = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);

      setMetrics(
        METRICS.map((metric) =>
          Math.round(metric.value * eased),
        ),
      );

      if (progress < 1) {
        frame = window.requestAnimationFrame(update);
      }
    };

    frame = window.requestAnimationFrame(update);

    return () => window.cancelAnimationFrame(frame);
  }, [visible]);

  const animated = visible;

  return (
    <section
      ref={sectionRef}
      className="bg-muted"
      aria-labelledby="security-operations-title"
    >
      <div className="section-container section-padding">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
              Security operations
            </p>

            <h2
              id="security-operations-title"
              className="mt-3 font-heading text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
            >
              Oversight, at a glance.
            </h2>

            <p className="mt-4 max-w-md text-sm leading-6 text-muted-foreground">
              A conceptual view of how organized security operations can be
              managed — sites, personnel, and coverage in one place.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-xl border border-border bg-card text-slate-200 shadow-xl">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
              <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">
                <Activity
                  className="size-3.5 text-primary"
                  aria-hidden="true"
                />
                <span>Security operations</span>
              </div>

              <div className="flex items-center gap-1.5 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-emerald-300">
                <span
                  className="size-1.5 rounded-full bg-emerald-400"
                  aria-hidden="true"
                />
                Operational
              </div>
            </div>

            <div className="grid grid-cols-3 divide-x divide-white/10 border-b border-white/10">
              {METRICS.map((metric, index) => {
                const Icon = metric.icon;

                return (
                  <div key={metric.label} className="px-4 py-4">
                    <div className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-400">
                      <Icon
                        className="size-3.5 text-primary"
                        aria-hidden="true"
                      />
                      {metric.label}
                    </div>

                    <p className="mt-2 font-heading text-2xl font-semibold text-white tabular-nums">
                      <span>{metrics[index]}{metric.suffix}</span>
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="grid gap-3 p-4 sm:grid-cols-[1.45fr_0.8fr]">
              <div className="relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.03] p-3">
                <div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">
                  <span>Site overview</span>
                  <span className="text-emerald-300">Covered</span>
                </div>

                <svg
                  className="mt-3 h-44 w-full"
                  viewBox="0 0 360 200"
                  role="img"
                  aria-label="Illustrative map of a covered site with a patrol route"
                >
                  <path
                    d="M30 40H120V120H30Z M150 30H240V110H150Z M266 120H330V180H266Z M40 150H110V180H40Z"
                    fill="currentColor"
                    className="text-white/[0.03]"
                  />

                  <circle
                    cx="158"
                    cy="115"
                    r="72"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    className="text-primary/25"
                  />

                  <circle
                    cx="158"
                    cy="115"
                    r="46"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    className="text-primary/20"
                  />

                  <path
                    d="M48 150C88 96 132 140 158 115S220 92 268 92 300 150 300 150"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-primary"
                    pathLength="100"
                    strokeDasharray="100"
                    strokeDashoffset={animated ? 0 : 100}
                    style={{
                      transition:
                        "stroke-dashoffset 1000ms cubic-bezier(0.16, 1, 0.3, 1)",
                    }}
                  />

                  <g
                    className={`transition-opacity duration-500 ${
                      visible ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    {SITE_POINTS.map(([cx, cy], i) => (
                      <g
                        key={`${cx}-${cy}`}
                        style={{
                          transformOrigin: `${cx}px ${cy}px`,
                          transform: visible
                            ? "scale(1)"
                            : "scale(0)",
                          opacity: visible ? 1 : 0,
                          transition:
                            "transform 420ms cubic-bezier(0.16, 1, 0.3, 1), opacity 420ms ease",
                          transitionDelay: `${i * 90}ms`,
                        }}
                      >
                        <circle
                          cx={cx}
                          cy={cy}
                          r="9"
                          fill="currentColor"
                          className="text-primary/20"
                        />
                        <circle
                          cx={cx}
                          cy={cy}
                          r="4"
                          fill="currentColor"
                          className="text-emerald-300"
                        />
                      </g>
                    ))}
                  </g>
                </svg>

                <div className="mt-2 flex items-center justify-between text-[10px] text-slate-400">
                  <span className="inline-flex items-center gap-1.5">
                    <ShieldCheck
                      className="size-3.5 text-primary"
                      aria-hidden="true"
                    />
                    Patrol route
                  </span>

                  <span className="uppercase tracking-[0.12em]">
                    Live view
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <p className="px-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">
                  Site status
                </p>

                <div className="flex flex-1 flex-col gap-2">
                  {SITES.map((site, index) => (
                    <div
                      key={site.id}
                      className={`flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2.5 transition-all duration-300 hover:border-primary/30 hover:bg-white/[0.05] ${
                        visible
                          ? "translate-x-0 opacity-100"
                          : "translate-x-2.5 opacity-0"
                      }`}
                      style={{
                        transitionDelay: `${index * 100}ms`,
                      }}
                    >
                      <span className="text-xs text-slate-300">
                        {site.label}
                      </span>

                      <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.1em] text-emerald-300">
                        <span className="size-1.5 rounded-full bg-emerald-400" />
                        {site.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between border-t border-white/10 px-4 py-3">
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <span
                  className="size-1.5 rounded-full bg-emerald-400"
                  aria-hidden="true"
                />
                <span>All operations normal</span>
              </div>

              <span className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[0.12em] text-slate-400">
                Illustrative view
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}