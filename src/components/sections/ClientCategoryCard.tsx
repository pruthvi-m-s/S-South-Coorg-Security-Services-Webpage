import { createElement, useMemo } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { getIcon } from "@/lib/icons";
import { getServiceBySlug } from "@/content/services";
import type { ClientCategory } from "@/content/clients-page";

interface ClientCategoryCardProps {
  category: ClientCategory;
  className?: string;
}

export default function ClientCategoryCard({
  category,
  className,
}: ClientCategoryCardProps) {
  const resolvedServices = useMemo(() => {
    return category.services
      .map((slug) => getServiceBySlug(slug))
      .filter(
        (
          service,
        ): service is NonNullable<
          ReturnType<typeof getServiceBySlug>
        > => Boolean(service),
      )
      .slice(0, 4);
  }, [category.services]);

  return (
    <motion.article
      variants={{
        hidden: {
          opacity: 0,
          y: 18,
        },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
          },
        },
      }}
      className={cn(
        "group flex h-full flex-col border border-[#2b2927] bg-[#10100f] p-6 transition-colors duration-300 sm:p-7",
        "hover:bg-[#151514] hover:border-[#3a3835]",
        className,
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex size-11 items-center justify-center rounded-full border border-[#b52b22]/25 bg-[#3a211f] text-[#c45a52]">
          {createElement(getIcon(category.icon), {
            size: 20,
            strokeWidth: 1.5,
            "aria-hidden": true,
          })}
        </div>

        <span className="text-xs font-semibold tracking-[0.14em] text-[#77716a]">
          {category.services.length
            .toString()
            .padStart(2, "0")}
        </span>
      </div>

      <h3 className="mt-7 font-heading text-2xl font-semibold tracking-tight text-[#f5f1e8]">
        {category.title}
      </h3>

      <p className="mt-3 flex-1 text-sm leading-7 text-[#8f8981]">
        {category.description}
      </p>

      {resolvedServices.length > 0 && (
        <div
          className="mt-6 border-t border-[#2b2927] pt-5"
          aria-label="Commonly used services"
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#77716a]">
            Common support
          </p>

          <div className="mt-3 flex flex-wrap gap-2">
            {resolvedServices.map((service) => (
              <span
                key={service.slug}
                className="border border-[#3a3835] px-2.5 py-1.5 text-xs text-[#a7a19a]"
              >
                {service.name}
              </span>
            ))}
          </div>
        </div>
      )}
    </motion.article>
  );
}