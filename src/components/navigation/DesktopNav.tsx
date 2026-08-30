// ============================================================
// SSCSS — Desktop Navigation
// Dark-theme navigation with services mega menu.
// ============================================================

import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  ChevronDown,
} from "lucide-react";
import {
  Link,
  useLocation,
} from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  ROUTES,
  servicePath,
} from "@/lib/routes";
import {
  getPrimaryServiceCategories,
  MAIN_NAVIGATION,
  SERVICES,
  type NavItem,
  type ResolvedPrimaryServiceCategory,
} from "@/content";

const PRIMARY_CATEGORIES =
  getPrimaryServiceCategories(SERVICES);

function isCurrentPath(
  pathname: string,
  href: string,
) {
  return href === "/"
    ? pathname === "/"
    : pathname.startsWith(href);
}

function NavLink({
  item,
  isActive,
}: {
  item: NavItem;
  isActive: boolean;
}) {
  return (
    <Link
      to={item.href}
      className={cn(
        "relative inline-flex min-h-11 items-center rounded-md px-3 py-2",
        "text-sm font-medium tracking-[0.01em]",
        "transition-colors duration-200",
        "after:absolute after:inset-x-3 after:bottom-1 after:h-px",
        "after:origin-left after:bg-[#b52b22]",
        "after:transition-transform after:duration-200",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c45a52]",
        "hover:bg-[#191918] hover:text-[#f5f1e8]",
        isActive
          ? "text-[#f5f1e8] after:scale-x-100"
          : "text-[#8f8981] after:scale-x-0 hover:after:scale-x-100",
      )}
      aria-current={
        isActive ? "page" : undefined
      }
    >
      {item.title}
    </Link>
  );
}

function ServiceMegaMenu({
  pathname,
}: {
  pathname: string;
}) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] =
    useState<
      ResolvedPrimaryServiceCategory | undefined
    >(PRIMARY_CATEGORIES[0]);

  const closeTimer = useRef<
    number | undefined
  >(undefined);

  const menuRef =
    useRef<HTMLDivElement>(null);

  const triggerRef =
    useRef<HTMLAnchorElement>(null);

  const isActive = isCurrentPath(
    pathname,
    ROUTES.services,
  );

  const cancelClose = () => {
    if (closeTimer.current !== undefined) {
      window.clearTimeout(
        closeTimer.current,
      );
      closeTimer.current = undefined;
    }
  };

  const scheduleClose = () => {
    cancelClose();

    closeTimer.current = window.setTimeout(
      () => setOpen(false),
      220,
    );
  };

  useEffect(() => {
    return () => {
      cancelClose();
    };
  }, []);

  if (!selected) return null;

  return (
    <div
      ref={menuRef}
      className="relative"
      onMouseEnter={() => {
        cancelClose();
        setOpen(true);
      }}
      onMouseLeave={scheduleClose}
      onFocus={() => {
        cancelClose();
        setOpen(true);
      }}
      onBlur={(event) => {
        if (
          !event.currentTarget.contains(
            event.relatedTarget,
          )
        ) {
          scheduleClose();
        }
      }}
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          setOpen(false);
          triggerRef.current?.focus();
        }
      }}
    >
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-full z-40 h-[0.7rem]"
      />

      <Link
        ref={triggerRef}
        to={ROUTES.services}
        className={cn(
          "relative inline-flex min-h-11 items-center gap-1 rounded-md px-3 py-2",
          "text-sm font-medium tracking-[0.01em]",
          "transition-colors duration-200",
          "after:absolute after:inset-x-3 after:bottom-1 after:h-px",
          "after:origin-left after:bg-[#b52b22]",
          "after:transition-transform after:duration-200",
          "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c45a52]",
          "hover:bg-[#191918] hover:text-[#f5f1e8]",
          isActive
            ? "text-[#f5f1e8] after:scale-x-100"
            : "text-[#8f8981] after:scale-x-0 hover:after:scale-x-100",
        )}
        aria-haspopup="true"
        aria-expanded={open}
        aria-controls="services-mega-menu"
        onMouseEnter={() => setOpen(true)}
        onFocus={() => setOpen(true)}
        onKeyDown={(event) => {
          if (event.key === "ArrowDown") {
            event.preventDefault();
            setOpen(true);

            window.setTimeout(() => {
              menuRef.current
                ?.querySelector<HTMLAnchorElement>(
                  "#services-mega-menu a",
                )
                ?.focus();
            }, 0);
          }
        }}
      >
        Services

        <ChevronDown
          className={cn(
            "size-3.5 transition-transform duration-200",
            open && "rotate-180",
          )}
          aria-hidden="true"
        />
      </Link>

      <div
        id="services-mega-menu"
        className={cn(
          "absolute right-0 top-[calc(100%+0.65rem)]",
          "w-[min(58rem,calc(100vw-3rem))]",
          "origin-top-right overflow-hidden",
          "border border-[#3a3835]",
          "bg-[#191918]/98 p-3 shadow-2xl backdrop-blur-xl",
          "transition-[opacity,transform,visibility] duration-200 ease-premium-out",
          open
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-1 opacity-0",
        )}
      >
        <div className="grid grid-cols-[0.78fr_1fr_0.8fr] gap-3">
          <div className="border-r border-[#2b2927] pr-3">
            <p className="px-2 pb-2 pt-1 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-[#77716a]">
              Primary categories
            </p>

            <div className="space-y-0.5">
              {PRIMARY_CATEGORIES.map(
                (category, index) => (
                  <Link
                    key={category.id}
                    to={servicePath(
                      category.primarySlug,
                    )}
                    onMouseEnter={() =>
                      setSelected(category)
                    }
                    onFocus={() =>
                      setSelected(category)
                    }
                    className={cn(
                      "group flex items-center gap-2 rounded-md px-2 py-2",
                      "text-sm transition-colors duration-150",
                      "hover:bg-[#10100f] hover:text-[#f5f1e8]",
                      "focus-visible:outline-2 focus-visible:outline-[#c45a52]",
                      category.id === selected.id
                        ? "text-[#c45a52]"
                        : "text-[#ded8cf]",
                    )}
                  >
                    <span className="w-5 text-[0.68rem] tabular-nums text-[#77716a]">
                      {String(index + 1).padStart(
                        2,
                        "0",
                      )}
                    </span>

                    <span className="flex-1">
                      {category.name}
                    </span>

                    <ArrowUpRight
                      className="size-3.5 opacity-0 transition-opacity group-hover:opacity-100"
                      aria-hidden="true"
                    />
                  </Link>
                ),
              )}
            </div>
          </div>

          <div className="border-r border-[#2b2927] pr-3">
            <p className="px-2 pb-2 pt-1 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-[#77716a]">
              Specific services
            </p>

            <div className="grid grid-cols-2 gap-1">
              {selected.services.map(
                (service) => (
                  <Link
                    key={service.slug}
                    to={servicePath(
                      service.slug,
                    )}
                    className="rounded-md px-2 py-2 text-sm text-[#ded8cf] transition-colors duration-150 hover:bg-[#10100f] hover:text-[#c45a52] focus-visible:outline-2 focus-visible:outline-[#c45a52]"
                  >
                    {service.name}
                  </Link>
                ),
              )}
            </div>
          </div>

          <aside className="relative min-h-64 overflow-hidden bg-[#10100f]">
            <img
              key={selected.id}
              src={selected.image.src}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 size-full object-cover opacity-45"
            />

            <div
              className="absolute inset-0 bg-[#10100f]/65"
              aria-hidden="true"
            />

            <div className="relative flex h-full min-h-64 flex-col justify-end p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#c45a52]">
                Service category
              </p>

              <h3 className="mt-2 font-heading text-lg font-semibold text-[#f5f1e8]">
                {selected.name}
              </h3>

              <p className="mt-1.5 text-sm leading-6 text-[#8f8981]">
                {selected.primaryService.shortTagline}
              </p>

              <Link
                to={servicePath(
                  selected.primarySlug,
                )}
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#c45a52] transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-[#c45a52]"
              >
                Explore category
                <ArrowUpRight
                  className="size-4"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </aside>
        </div>

        <Link
          to={ROUTES.services}
          className="mt-3 inline-flex items-center gap-1.5 px-2 py-1 text-sm text-[#8f8981] transition-colors hover:text-[#c45a52] focus-visible:outline-2 focus-visible:outline-[#c45a52]"
        >
          View all services
          <ArrowUpRight
            className="size-3.5"
            aria-hidden="true"
          />
        </Link>
      </div>
    </div>
  );
}

export default function DesktopNav() {
  const { pathname } = useLocation();

  return (
    <nav
      aria-label="Main navigation"
      className="hidden items-center gap-0.5 lg:flex"
    >
      {MAIN_NAVIGATION.map((item) =>
        item.href === ROUTES.services ? (
          <ServiceMegaMenu
            key={item.href}
            pathname={pathname}
          />
        ) : (
          <NavLink
            key={item.href}
            item={item}
            isActive={isCurrentPath(
              pathname,
              item.href,
            )}
          />
        ),
      )}
    </nav>
  );
}