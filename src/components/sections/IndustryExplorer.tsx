import { createElement, useMemo, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { getIcon } from "@/lib/icons";
import { industryPath } from "@/lib/routes";
import { servicePath } from "@/lib/routes";
import { getServiceBySlug } from "@/content/services";
import type { Industry } from "@/types";

interface IndustryExplorerProps {
  industries: Industry[];
  className?: string;
}

export default function IndustryExplorer({
  industries,
  className,
}: IndustryExplorerProps) {
  const [activeSlug, setActiveSlug] = useState(
    industries[0]?.slug ?? "",
  );

  const activeIndustry = useMemo(
    () =>
      industries.find(
        (industry) => industry.slug === activeSlug,
      ) ?? industries[0],
    [industries, activeSlug],
  );

  const activeServices = useMemo(() => {
    if (!activeIndustry) return [];

    return activeIndustry.relevantServiceSlugs
      .map((slug) => getServiceBySlug(slug))
      .filter(
        (
          service,
        ): service is NonNullable<
          ReturnType<typeof getServiceBySlug>
        > => Boolean(service),
      )
      .slice(0, 4);
  }, [activeIndustry]);

  if (!activeIndustry) return null;

  return (
    <section
      className={cn(
        "bg-[#10100f] text-[#f5f1e8]",
        className,
      )}
      aria-labelledby="industry-explorer-title"
    >
      <div className="section-container section-padding">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#c45a52]">
              Where we work
            </p>

            <h2
              id="industry-explorer-title"
              className="mt-3 max-w-md font-heading text-4xl font-semibold tracking-tight text-[#f5f1e8] sm:text-5xl"
            >
              Security and manpower for the environments you operate in.
            </h2>

            <p className="mt-5 max-w-md text-sm leading-7 text-[#b4aea5] sm:text-base">
              Select an industry to see the type of requirements SSCSS
              can support and the services commonly associated with it.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {industries.map((industry, index) => {
                const active =
                  industry.slug === activeIndustry.slug;

                return (
                  <button
                    key={industry.slug}
                    type="button"
                    onClick={() => setActiveSlug(industry.slug)}
                    onMouseEnter={() => setActiveSlug(industry.slug)}
                    className={cn(
                      "inline-flex items-center gap-2 border px-3 py-2 text-left text-xs font-semibold transition-all duration-200",
                      active
                        ? "border-[#b52b22] bg-[#b52b22] text-white"
                        : "border-[#3a3835] bg-transparent text-[#a7a19a] hover:border-[#77716a] hover:text-[#f5f1e8]",
                    )}
                    aria-pressed={active}
                  >
                    <span className="opacity-60">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {industry.name}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="border border-[#2b2927] bg-[#191918]">
            <div className="border-b border-[#2b2927] p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-full border border-[#b52b22]/25 bg-[#3a211f] text-[#c45a52]">
                  {createElement(getIcon(activeIndustry.icon), {
                    size: 22,
                    strokeWidth: 1.5,
                    "aria-hidden": true,
                  })}
                </span>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#c45a52]">
                    Selected environment
                  </p>

                  <h3 className="mt-2 font-heading text-3xl font-semibold tracking-tight text-[#f5f1e8]">
                    {activeIndustry.name}
                  </h3>
                </div>
              </div>

              <p className="mt-6 max-w-2xl text-base leading-7 text-[#b4aea5]">
                {activeIndustry.description}
              </p>
            </div>

            <div className="p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#77716a]">
                Relevant services
              </p>

              <div className="mt-4 border-t border-[#2b2927]">
                {activeServices.map((service) => (
                  <Link
                    key={service.slug}
                    to={servicePath(service.slug)}
                    className="group flex items-center gap-4 border-b border-[#2b2927] py-4 transition-colors hover:text-white"
                  >
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-[#3a3835] bg-[#10100f] text-[#c45a52]">
                      {createElement(getIcon(service.icon), {
                        size: 16,
                        strokeWidth: 1.5,
                        "aria-hidden": true,
                      })}
                    </span>

                    <span className="min-w-0 flex-1">
                      <span className="block text-sm font-semibold text-[#ded8cf] group-hover:text-white">
                        {service.name}
                      </span>

                      <span className="mt-1 block text-xs leading-5 text-[#77716a]">
                        {service.shortTagline}
                      </span>
                    </span>

                    <ArrowRight
                      className="size-4 shrink-0 text-[#77716a] transition-transform duration-200 group-hover:translate-x-1 group-hover:text-[#c45a52]"
                      aria-hidden="true"
                    />
                  </Link>
                ))}
              </div>

              <Link
                to={industryPath(activeIndustry.slug)}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#c45a52] hover:text-white"
              >
                Full industry overview
                <ArrowRight
                  className="size-4"
                  aria-hidden="true"
                />
              </Link>

              <Link
                to="/services"
                className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-[#c45a52] hover:text-white"
              >
                Explore all services
                <ArrowRight
                  className="size-4"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}