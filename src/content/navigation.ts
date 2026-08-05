// ============================================================
// SSCSS — Navigation Configuration
// ============================================================

export interface NavItem {
  title: string;
  href: string;
  children?: NavItem[];
}

/**
 * Main navigation links (static pages).
 */
export const MAIN_NAVIGATION: NavItem[] = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  {
    title: "Services",
    href: "/services",
  },
  { title: "Industries", href: "/industries" },
  { title: "Clients", href: "/clients" },
  { title: "Gallery", href: "/gallery" },
  { title: "FAQs", href: "/faqs" },
  { title: "Contact", href: "/contact" },
];

/**
 * Footer link groups.
 */
export const FOOTER_COMPANY_LINKS: NavItem[] = [
  { title: "About Us", href: "/about" },
  { title: "Compliance", href: "/compliance" },
  { title: "Clients", href: "/clients" },
  { title: "Gallery", href: "/gallery" },
  { title: "FAQs", href: "/faqs" },
  { title: "Contact", href: "/contact" },
];
