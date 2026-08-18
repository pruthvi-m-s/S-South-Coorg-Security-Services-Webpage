import { createElement } from "react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import ImageWithSkeleton from "@/components/common/ImageWithSkeleton";
import Skeleton from "@/components/common/Skeleton";
import { getIcon } from "@/lib/icons";
import { cn } from "@/lib/utils";
import type { Certification } from "@/types";

interface ComplianceSectionProps {
  certifications: Certification[];
  details: Partial<Record<Certification["type"], { title: string; description: string }>>;
  statusLabels: { verified: string; pending: string };
  className?: string;
}

export default function ComplianceSection({ certifications, details, statusLabels, className }: ComplianceSectionProps) {
  return (
    <section className={cn("relative bg-background", className)} aria-label="Compliance documentation">
      <div className="section-container section-padding">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {certifications.map((certification) => {
            const detail = details[certification.type];
            const isVerified = certification.status === "verified";
            return (
              <Card key={certification.id} className="border border-border bg-card p-6 sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex min-w-0 items-start gap-3">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary-50 text-primary" aria-hidden="true">
                      {createElement(getIcon(certification.icon), { size: 20, strokeWidth: 1.5 })}
                    </div>
                    <div>
                      <h2 className="font-heading text-lg font-semibold leading-snug tracking-tight text-ink">
                        {detail?.title ?? certification.label}
                      </h2>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {detail?.description}
                      </p>
                    </div>
                  </div>
                  <Badge variant="outline" className={cn("h-auto shrink-0 px-2 py-1 text-[10px]", !isVerified && "text-muted-foreground")}>
                    {isVerified ? statusLabels.verified : statusLabels.pending}
                  </Badge>
                </div>
{isVerified && certification.documentImage && (
                  <ImageWithSkeleton
                    src={certification.documentImage.src}
                    alt={certification.documentImage.alt}
                    skeleton={<Skeleton className="mt-6 h-40 w-full rounded-lg" />}
                    containerClassName="mt-6 h-auto w-full"
                    className="h-auto w-full rounded-lg border border-border object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                )}
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
