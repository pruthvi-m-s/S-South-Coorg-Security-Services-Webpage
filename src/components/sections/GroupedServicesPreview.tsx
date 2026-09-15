import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { servicePath } from "@/lib/routes";
import {
  staggerContainer,
  fadeUp,
  viewportOptions,
} from "@/lib/motion";
import type { ResolvedServiceGroup } from "@/content/services-hub";

interface GroupedServicesPreviewProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  groups: ResolvedServiceGroup[];
  viewAllHref: string;
  className?: string;
}

export default function GroupedServicesPreview({
  eyebrow,
  title,
  subtitle,
  groups,
  viewAllHref,
  className,
}: GroupedServicesPreviewProps) {
  if (groups.length === 0) return null;

  return (
    <section
      className={cn(
        "bg-[#10100f] text-[#f5f1e8]",
        className,
      )}
      aria-labelledby="home-grouped-services-title"
    >
      <div className="section-container section-padding">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
        >
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
            <div>
              <motion.p
                variants={fadeUp}
                className="text-xs font-semibold uppercase tracking-[0.14em] text-[#c45a52]"
              >
                {eyebrow}
              </motion.p>

              <motion.h2
                variants={fadeUp}
                id="home-grouped-services-title"
                className="mt-3 max-w-md font-heading text-4xl font-semibold tracking-tight text-[#f5f1e8] sm:text-5xl"
              >
                {title}
              </motion.h2>

              {subtitle && (
                <motion.p
                  variants={fadeUp}
                  className="mt-5 max-w-lg text-sm leading-7 text-[#b4aea5] sm:text-base"
                >
                  {subtitle}
                </motion.p>
              )}

              <motion.div
                variants={fadeUp}
                className="mt-7"
              >
                <Link to={viewAllHref}>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-[#3a3835] bg-transparent text-[#f5f1e8] hover:border-[#b52b22] hover:bg-[#b52b22]/10 hover:text-[#f5f1e8]"
                  >
                    View all services
                    <ArrowRight
                      className="ml-1 size-4"
                      aria-hidden="true"
                    />
                  </Button>
                </Link>
              </motion.div>
            </div>

            <motion.div
              variants={fadeUp}
              className="grid gap-px border border-[#2b2927] bg-[#2b2927] sm:grid-cols-2"
            >
              {groups.map((group, index) => (
                <article
                  key={group.id}
                  className="flex flex-col bg-[#191918] p-6 sm:p-7"
                >
                  <span className="text-xs font-semibold tracking-[0.14em] text-[#c45a52]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className="mt-3 font-heading text-2xl font-semibold tracking-tight text-[#f5f1e8]">
                    {group.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#b4aea5]">
                    {group.description}
                  </p>

                  <ul className="mt-6 space-y-3 border-t border-[#2b2927] pt-6">
                    {group.services.map((service) => (
                      <li key={service.slug}>
                        <Link
                          to={servicePath(service.slug)}
                          className="group inline-flex items-center justify-between gap-3 text-sm font-medium text-[#ded8cf] transition-colors hover:text-[#b52b22]"
                        >
                          <span>{service.name}</span>
                          <ArrowRight
                            className="size-3.5 opacity-50 transition-transform group-hover:translate-x-0.5 group-hover:opacity-100"
                            aria-hidden="true"
                          />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}