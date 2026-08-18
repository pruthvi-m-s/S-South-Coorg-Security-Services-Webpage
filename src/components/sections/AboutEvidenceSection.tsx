import { createElement } from "react";
import { ArrowUpRight, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { getIcon } from "@/lib/icons";
import ImageWithSkeleton from "@/components/common/ImageWithSkeleton";
import Skeleton from "@/components/common/Skeleton";
import type { Certification } from "@/types";

export default function AboutEvidenceSection({ certifications, href }: { certifications: Certification[]; href: string }) {
  return (
    <section className="bg-background" aria-labelledby="evidence-title">
      <div className="section-container section-padding">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
              Evidence &amp; compliance
            </p>
            <h2
              id="evidence-title"
              className="mt-3 font-heading text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
            >
              Documentation, clearly presented.
            </h2>
          </div>
          <Link
            to={href}
            className="inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary-700 focus-visible:outline-2 focus-visible:outline-primary"
          >
            View compliance details
            <ArrowUpRight className="size-4" />
          </Link>
        </div>

        <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((certification) => (
            <article
              key={certification.id}
              className="group rounded-[1.35rem] border border-border bg-card p-3.5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-28px_rgba(10,10,10,0.35)]"
            >
              <div className="rounded-2xl border border-border bg-muted/70 p-2 shadow-inner shadow-black/2">
                <div className="aspect-4/3 overflow-hidden rounded-[0.7rem] border border-border bg-white">
                  {certification.documentImage ? (
                    <ImageWithSkeleton
                      src={certification.documentImage.src}
                      alt={certification.documentImage.alt}
                      skeleton={<Skeleton className="h-full w-full rounded-none" />}
                      containerClassName="size-full"
                      className="size-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  ) : (
                    <div className="flex size-full flex-col items-center justify-center bg-muted text-muted-foreground">
                      <FileText className="size-8" />
                      <span className="mt-3 text-[10px] font-semibold uppercase tracking-[0.12em]">
                        Preview on request
                      </span>
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className="text-primary">
                    {createElement(getIcon(certification.icon), { size: 16, strokeWidth: 1.5 })}
                  </span>
                  <h3 className="text-sm font-semibold text-ink">{certification.label}</h3>
                </div>
                <span className="rounded-full border border-primary/15 bg-primary/5 px-2 py-1 text-[9px] font-medium uppercase tracking-[0.12em] text-primary">
                  {certification.status === "verified" ? "Verified" : "Pending"}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
