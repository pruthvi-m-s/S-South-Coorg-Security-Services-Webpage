import { useEffect, useRef, useState } from "react";
import { animate, stagger } from "animejs";
import { Activity, Building2, Radio, ShieldCheck, UsersRound } from "lucide-react";

// ============================================================
// SSCSS — Security Operations visual system
// A premium, dark, restrained security-operations console for the
// Home page. This is a conceptual / illustrative interface — NOT
// live company data. All numeric values are decorative UI figures
// framed explicitly as an "Illustrative view" of how organized
// security operations can be managed. It does not make factual
// company claims.
// ============================================================

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

// Site point coordinates within the map viewBox (0 0 360 200)
const SITE_POINTS: Array<[number, number]> = [
  [48, 150],
  [120, 96],
  [196, 150],
  [268, 92],
  [300, 150],
];

export default function SecurityOperations() {
  const sectionRef = useRef<HTMLElement>(null);
  const routeRef = useRef<SVGPathElement>(null);
  const pointsRef = useRef<SVGGElement>(null);
  const statusRowsRef = useRef<HTMLDivElement>(null);
  const metricRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const [visible, setVisible] = useState(false);

  // Reveal once on viewport entry.
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
      { threshold: 0.18 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  // One-time entrance animation (respects prefers-reduced-motion).
  useEffect(() => {
    if (!visible) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // When reduced motion is preferred, show the final static state.
    if (reduced) {
      metricRefs.current.forEach((node, index) => {
        if (node) node.textContent = `${METRICS[index].value}${METRICS[index].suffix}`;
      });
      return;
    }

    const animations: Array<ReturnType<typeof animate>> = [];

    // Patrol route draws once.
    if (routeRef.current) {
      animations.push(
        animate(routeRef.current, {
          strokeDashoffset: [100, 0],
          duration: 1000,
          ease: "out(4)",
        })
      );
    }

    // Site points appear sequentially (stagger).
    if (pointsRef.current) {
      animations.push(
        animate(Array.from(pointsRef.current.children), {
          opacity: [0, 1],
          scale: [0, 1],
          translateY: [6, 0],
          delay: stagger(90),
          duration: 420,
          ease: "out(4)",
        })
      );
    }

    // Status rows reveal in sequence.
    if (statusRowsRef.current) {
      animations.push(
        animate(Array.from(statusRowsRef.current.children), {
          opacity: [0, 1],
          translateX: [10, 0],
          delay: stagger(100),
          duration: 380,
          ease: "out(4)",
        })
      );
    }

    // Metric numbers count up once.
    METRICS.forEach((metric, index) => {
      const node = metricRefs.current[index];
      if (!node || !metric.value) return;
      const counter = { value: 0 };
      const animation = animate(counter, {
        value: metric.value,
        duration: 900,
        ease: "out(4)",
        onUpdate: () => {
          node.textContent = `${Math.round(counter.value)}${metric.suffix}`;
        },
      });
      animations.push(animation);
    });

    return () => {
      animations.forEach((animation) => {
        animation.revert();
      });
    };
  }, [visible]);

  return (
    <section
      ref={sectionRef}
      className="bg-muted"
      aria-labelledby="security-operations-title"
    >
      <div className="section-container section-padding">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
          {/* Copy column */}
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

          {/* Console */}
          <div className="relative overflow-hidden rounded-xl border border-border bg-card text-slate-200 shadow-xl">
            {/* Top bar */}
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
              <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">
                <Activity className="size-3.5 text-primary" aria-hidden="true" />
                <span>Security operations</span>
              </div>
              <div className="flex items-center gap-1.5 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-emerald-300">
                <span className="size-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
                Operational
              </div>
            </div>

            {/* Metrics row */}
            <div className="grid grid-cols-3 divide-x divide-white/10 border-b border-white/10">
              {METRICS.map((metric, index) => {
                const Icon = metric.icon;
                return (
                  <div key={metric.label} className="px-4 py-4">
                    <div className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-400">
                      <Icon className="size-3.5 text-primary" aria-hidden="true" />
                      {metric.label}
                    </div>
                    <p className="mt-2 font-heading text-2xl font-semibold text-white tabular-nums">
                      <span
                        ref={(node) => {
                          metricRefs.current[index] = node;
                        }}
                      >
                        0{metric.suffix}
                      </span>
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Map + status panel */}
            <div className="grid gap-3 p-4 sm:grid-cols-[1.45fr_0.8fr]">
              {/* Stylized site map */}
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
                  {/* Subtle district blocks */}
                  <path
                    d="M30 40H120V120H30Z M150 30H240V110H150Z M266 120H330V180H266Z M40 150H110V180H40Z"
                    fill="currentColor"
                    className="text-white/[0.03]"
                  />
                  {/* Coverage rings */}
                  <circle cx="158" cy="115" r="72" fill="none" stroke="currentColor" strokeWidth="1" className="text-primary/25" />
                  <circle cx="158" cy="115" r="46" fill="none" stroke="currentColor" strokeWidth="1" className="text-primary/20" />
                  {/* Patrol route (draws once) */}
                  <path
                    ref={routeRef}
                    d="M48 150C88 96 132 140 158 115S220 92 268 92 300 150 300 150"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-primary"
                    strokeDasharray="100"
                    strokeDashoffset="100"
                  />
                  {/* Site points (appear sequentially) */}
                  <g ref={pointsRef}>
                    {SITE_POINTS.map(([cx, cy], i) => (
                      <g key={i} opacity="0">
                        <circle cx={cx} cy={cy} r="9" fill="currentColor" className="text-primary/20" />
                        <circle cx={cx} cy={cy} r="4" fill="currentColor" className="text-emerald-300" />
                      </g>
                    ))}
                  </g>
                </svg>
                <div className="mt-2 flex items-center justify-between text-[10px] text-slate-400">
                  <span className="inline-flex items-center gap-1.5">
                    <ShieldCheck className="size-3.5 text-primary" aria-hidden="true" />
                    Patrol route
                  </span>
                  <span className="uppercase tracking-[0.12em]">Live view</span>
                </div>
              </div>

              {/* Site status list */}
              <div className="flex flex-col gap-2">
                <p className="px-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">
                  Site status
                </p>
                <div ref={statusRowsRef} className="flex flex-1 flex-col gap-2">
                  {SITES.map((site) => (
                    <div
                      key={site.id}
                      className="flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2.5 transition-colors duration-200 hover:border-primary/30 hover:bg-white/[0.05]"
                    >
                      <span className="text-xs text-slate-300">{site.label}</span>
                      <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.1em] text-emerald-300">
                        <span className="size-1.5 rounded-full bg-emerald-400" />
                        {site.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer status */}
            <div className="flex items-center justify-between border-t border-white/10 px-4 py-3">
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <span className="size-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
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

