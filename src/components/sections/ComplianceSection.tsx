import { createElement } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { getIcon } from "@/lib/icons";
import ImageWithSkeleton from "@/components/common/ImageWithSkeleton";
import Skeleton from "@/components/common/Skeleton";
import type { Certification } from "@/types";

interface ComplianceSectionProps {
  certifications: Certification[];
  details: Partial<
    Record<
      Certification["type"],
      {
        title: string;
        description: string;
      }
    >
  >;
  statusLabels: {
    verified: string;
    pending: string;
  };
  className?: string;
}

export default function ComplianceSection({
  certifications,
  details,
  statusLabels,
  className,
}: ComplianceSectionProps) {
  if (certifications.length === 0) return null;

  return (
    <section
      className={cn(
        "bg-[#10100f] text-[#f5f1e8]",
        className,
      )}
      aria-labelledby="compliance-records-title"
    >
      <div className="section-container section-padding">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#c45a52]">
              Current records
            </p>

            <h2
              id="compliance-records-title"
              className="mt-3 max-w-md font-heading text-4xl font-semibold tracking-tight text-[#f5f1e8] sm:text-5xl"
            >
              Registrations and documentation for review.
            </h2>

            <p className="mt-5 max-w-md text-sm leading-7 text-[#b4aea5] sm:text-base">
              Each item below reflects the publication status of the relevant
              SSCSS record. No registration numbers are displayed unless
              supplied for publication.
            </p>

            <Link
              to="/contact"
              className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#c45a52] transition-colors hover:text-white"
            >
              Request documentation
              <ArrowRight
                className="size-4"
                aria-hidden="true"
              />
            </Link>
          </div>

          <div className="border-t border-[#2b2927]">
            {certifications.map((certification, index) => {
              const detail = details[certification.type];
              const isVerified =
                certification.status === "verified";

              return (
                <article
                  key={certification.id}
                  className="border-b border-[#2b2927] py-7"
                >
                  <div className="grid gap-5 sm:grid-cols-[auto_1fr_auto] sm:items-start sm:gap-6">
                    <div className="flex size-11 items-center justify-center rounded-full border border-[#b52b22]/25 bg-[#3a211f] text-[#c45a52]">
                      {certification.icon &&
                        createElement(
                          getIcon(certification.icon),
                          {
                            size: 20,
                            strokeWidth: 1.5,
                            "aria-hidden": true,
                          },
                        )}
                    </div>

                    <div>
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-semibold tracking-[0.14em] text-[#c45a52]">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <h3 className="font-heading text-xl font-semibold tracking-tight text-[#f5f1e8] sm:text-2xl">
                          {detail?.title ??
                            certification.label}
                        </h3>
                      </div>

                      <p className="mt-3 max-w-2xl text-sm leading-6 text-[#9f9991] sm:text-base">
                        {detail?.description}
                      </p>

                      {isVerified &&
                        certification.documentImage && (
                          <ImageWithSkeleton
                            src={
                              certification.documentImage.src
                            }
                            alt={
                              certification.documentImage.alt
                            }
                            skeleton={
                              <Skeleton className="mt-6 h-48 w-full rounded-none" />
                            }
                            containerClassName="mt-6 w-full max-w-2xl"
                            className="h-auto w-full border border-[#2b2927] object-contain"
                            loading="lazy"
                            decoding="async"
                          />
                        )}
                    </div>

                    <div
                      className={cn(
                        "inline-flex items-center gap-2 text-xs font-medium sm:justify-self-end",
                        isVerified
                          ? "text-[#8ec49c]"
                          : "text-[#9a9590]",
                      )}
                    >
                      {isVerified && (
                        <CheckCircle2
                          className="size-4"
                          aria-hidden="true"
                        />
                      )}

                      <span>
                        {isVerified
                          ? statusLabels.verified
                          : statusLabels.pending}
                      </span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}