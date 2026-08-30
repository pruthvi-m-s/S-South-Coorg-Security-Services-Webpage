// ============================================================
// SSCSS — Navigation Configuration
// ============================================================

export interface NavItem {
  title: string;
  href: string;
  children?: NavItem[];
}

export const MAIN_NAVIGATION: NavItem[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Services",
    href: "/services",
  },
  {
    title: "Industries",
    href: "/industries",
  },
  {
    title: "Clients",
    href: "/clients",
  },
  {
    title: "Gallery",
    href: "/gallery",
  },
  {
    title: "FAQs",
    href: "/faqs",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

export const FOOTER_COMPANY_LINKS: NavItem[] =
  [
    {
      title: "About Us",
      href: "/about",
    },
    {
      title: "Compliance",
      href: "/compliance",
    },
    {
      title: "Clients",
      href: "/clients",
    },
    {
      title: "Gallery",
      href: "/gallery",
    },
    {
      title: "FAQs",
      href: "/faqs",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ];