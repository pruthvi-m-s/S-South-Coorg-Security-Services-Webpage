import { createElement, memo } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { getIcon } from "@/lib/icons";
import { servicePath } from "@/lib/routes";
import type { Service } from "@/types";

interface ServiceCardProps {
  service: Pick<
    Service,
    "slug" | "name" | "shortTagline" | "icon"
  >;
  className?: string;
}

const ServiceCard = memo(function ServiceCard({
  service,
  className,
}: ServiceCardProps) {
  return (
    <Link
      to={servicePath(service.slug)}
      className="group block"
      aria-label={`Learn more about ${service.name}`}
    >
      <article
        className={cn(
          "flex h-full flex-col border border-[#2b2927] bg-[#10100f] p-6",
          "transition-all duration-300 ease-premium-out",
          "hover:-translate-y-1 hover:border-[#b52b22]/50 hover:bg-[#141413]",
          className,
        )}
      >
        <div
          className="mb-7 flex size-11 items-center justify-center rounded-full border border-[#b52b22]/25 bg-[#3a211f] text-[#c45a52]"
          aria-hidden="true"
        >
          {createElement(getIcon(service.icon), {
            size: 20,
            strokeWidth: 1.5,
          })}
        </div>

        <h3 className="font-heading text-xl font-semibold tracking-tight text-[#f5f1e8]">
          {service.name}
        </h3>

        <p className="mt-3 flex-1 text-sm leading-6 text-[#99938c]">
          {service.shortTagline}
        </p>

        <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#c45a52]">
          Explore service
          <ArrowRight
            size={15}
            className="transition-transform duration-300 group-hover:translate-x-1"
            aria-hidden="true"
          />
        </span>
      </article>
    </Link>
  );
});

export default ServiceCard;