import { motion } from "framer-motion";
import { ArrowRight, FileCheck, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import type { Certification } from "@/types";

interface AboutEvidenceSectionProps {
  certifications: Certification[];
  href: string;
  className?: string;
}

export default function AboutEvidenceSection({
  certifications,
  href,
  className,
}: AboutEvidenceSectionProps) {
  if (certifications.length === 0) return null;

  return (
    <section
      className={cn(
        "bg-[#191918] text-[#f5f1e8]",
        className,
      )}
      aria-labelledby="about-evidence-title"
    >
      <div className="section-container section-padding">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#c45a52]">
              Registrations & compliance
            </p>

            <h2
              id="about-evidence-title"
              className="mt-3 max-w-md font-heading text-4xl font-semibold tracking-tight text-[#f5f1e8] sm:text-5xl"
            >
              Documentation should be clear before procurement begins.
            </h2>

            <p className="mt-5 max-w-md text-sm leading-7 text-[#b4aea5] sm:text-base">
              SSCSS keeps the published compliance information limited to
              documentation available for review rather than inventing
              certificate numbers or credentials.
            </p>

            <Link
              to={href}
              className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#c45a52] transition-colors hover:text-white"
            >
              Review compliance details
              <ArrowRight
                className="size-4"
                aria-hidden="true"
              />
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55 }}
            className="grid gap-px border border-[#2b2927] bg-[#2b2927] sm:grid-cols-2"
          >
            {certifications.map((certification) => {
              const Icon =
                certification.type === "PSARA"
                  ? ShieldCheck
                  : FileCheck;

              const pending =
                certification.status ===
                "pending-upload";

              return (
                <article
                  key={certification.id}
                  className="bg-[#10100f] p-6 sm:p-7"
                >
                  <div className="flex size-11 items-center justify-center rounded-full border border-[#b52b22]/25 bg-[#3a211f] text-[#c45a52]">
                    <Icon
                      className="size-5"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                  </div>

                  <h3 className="mt-6 font-heading text-xl font-semibold tracking-tight text-[#f5f1e8]">
                    {certification.label}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-[#77716a]">
                    {pending
                      ? "Documentation available on request."
                      : "Documentation available for review."}
                  </p>

                  {pending && (
                    <p className="mt-3 text-xs text-[#5a554f]">
                      Status reflects current publication records.
                    </p>
                  )}
                </article>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}