import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { servicePath } from "@/lib/routes";
import {
  staggerContainer,
  fadeUp,
  viewportOptions,
} from "@/lib/motion";
import type { ResolvedServiceGroup } from "@/content/services-hub";

interface ServiceGroupsSectionProps {
  eyebrow: string;
  title: string;
  description: string;
  groups: ResolvedServiceGroup[];
  className?: string;
}

export default function ServiceGroupsSection({
  eyebrow,
  title,
  description,
  groups,
  className,
}: ServiceGroupsSectionProps) {
  if (groups.length === 0) return null;

  return (
    <section
      id="service-groups"
      className={cn(
        "bg-background text-ink",
        className,
      )}
      aria-labelledby="service-groups-title"
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
                className="text-xs font-semibold uppercase tracking-[0.16em] text-primary"
              >
                {eyebrow}
              </motion.p>

              <motion.h2
                variants={fadeUp}
                id="service-groups-title"
                className="mt-3 max-w-md font-heading text-4xl font-semibold tracking-tight text-ink sm:text-5xl"
              >
                {title}
              </motion.h2>
            </div>

            <motion.p
              variants={fadeUp}
              className="max-w-xl text-sm leading-7 text-muted-foreground sm:text-base"
            >
              {description}
            </motion.p>
          </div>

          <div className="mt-14 grid gap-px border border-border bg-border md:grid-cols-2">
            {groups.map((group, index) => (
              <motion.article
                key={group.id}
                variants={fadeUp}
                className="flex flex-col bg-background p-8 sm:p-10"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold tracking-[0.14em] text-primary">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="text-xs font-semibold tabular-nums tracking-wide text-muted-foreground/60">
                    {String(group.services.length).padStart(2, "0")} services
                  </span>
                </div>

                <h3 className="mt-4 font-heading text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                  {group.title}
                </h3>

                <p className="mt-3 max-w-lg text-sm leading-6 text-muted-foreground">
                  {group.description}
                </p>

                <ul className="mt-7 space-y-1 border-t border-border pt-6">
                  {group.services.map((service) => (
                    <li key={service.slug}>
                      <Link
                        to={servicePath(service.slug)}
                        className="group flex items-center justify-between gap-4 rounded-md px-2 py-2.5 transition-colors hover:bg-muted/60 sm:px-3"
                      >
                        <span className="min-w-0">
                          <span className="block text-sm font-semibold text-ink transition-colors group-hover:text-primary">
                            {service.name}
                          </span>

                          <span className="mt-0.5 block truncate text-xs leading-5 text-muted-foreground">
                            {service.shortTagline}
                          </span>
                        </span>

                        <ArrowUpRight
                          className="size-4 shrink-0 text-muted-foreground/60 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary"
                          aria-hidden="true"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}