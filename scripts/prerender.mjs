import fs from "node:fs/promises";
import path from "node:path";

const routes = [
  "/",
  "/about",
  "/compliance",
  "/services",
  "/industries",
  "/clients",
  "/gallery",
  "/faqs",
  "/contact",
  "/services/security-guards",
  "/services/corporate-security",
  "/services/industrial-security",
  "/services/residential-security",
  "/services/housekeeping",
  "/services/front-office-management",
  "/services/skilled-labour",
  "/services/unskilled-labour",
  "/services/corporate-staffing",
  "/services/ex-army-security-guards",
  "/services/event-security",
  "/services/background-verification",
  "/services/private-detective-services",
  "/services/integrated-facility-management-services",
];

const siteUrl = (
  process.env.VITE_SITE_URL ??
  "https://s-south-coorg-security-services-web-one.vercel.app"
).replace(/\/+$/, "");

const defaultOgImage = `${siteUrl}/og/sscss-default.png`;

const routeMeta = {
  "/": {
    title: "Security Services in Bengaluru | SSCSS",
    description:
      "S South Coorg Security Services provides professional security, manpower and facility support solutions across Bengaluru.",
    image: defaultOgImage,
    robots: "index, follow",
  },

  "/about": {
    title: "About SSCSS | 18+ Years in Bengaluru",
    description:
      "Learn about S South Coorg Security Services, its history since 2008, leadership, operating standards and service approach.",
    image: defaultOgImage,
    robots: "index, follow",
  },

  "/compliance": {
    title: "Security Compliance & Standards | SSCSS",
    description:
      "Learn about SSCSS compliance practices, operating standards and commitment to professional security services.",
    image: defaultOgImage,
    robots: "index, follow",
  },

  "/services": {
    title: "Security & Manpower Services | SSCSS",
    description:
      "Explore SSCSS security, facility and front-of-house, manpower, and verification and investigation services in Bengaluru.",
    image: defaultOgImage,
    robots: "index, follow",
  },

  "/industries": {
    title: "Industry-Specific Security Solutions | SSCSS",
    description:
      "Security and manpower solutions designed for corporate offices, apartments, factories, warehouses, hospitals, schools and more.",
    image: defaultOgImage,
    robots: "index, follow",
  },

  "/clients": {
    title: "Who We Help | SSCSS",
    description:
      "SSCSS supports corporate, residential, industrial, institutional and commercial environments across Bengaluru.",
    image: defaultOgImage,
    robots: "index, follow",
  },

  "/gallery": {
    title: "Proof of Operations | SSCSS",
    description:
      "View real SSCSS personnel, sites, events and operational environments.",
    image: defaultOgImage,
    robots: "index, follow",
  },

  "/faqs": {
    title: "Security Services FAQs | SSCSS",
    description:
      "Answers to common questions about security deployment, manpower, verification, supervision and service coverage.",
    image: defaultOgImage,
    robots: "index, follow",
  },

  "/contact": {
    title: "Contact SSCSS | Security Services Bengaluru",
    description:
      "Contact S South Coorg Security Services for security, manpower and facility support requirements in Bengaluru.",
    image: defaultOgImage,
    robots: "index, follow",
  },

  "/services/security-guards": {
    title: "Security Guards in Bengaluru | SSCSS",
    description:
      "Trained, disciplined security personnel for offices, apartments, commercial properties and other premises.",
    image: defaultOgImage,
    robots: "index, follow",
  },

  "/services/corporate-security": {
    title: "Corporate Security Services in Bengaluru | SSCSS",
    description:
      "Professional security management for corporate offices and IT parks in Bengaluru.",
    image: defaultOgImage,
    robots: "index, follow",
  },

  "/services/industrial-security": {
    title: "Industrial Security Services in Bengaluru | SSCSS",
    description:
      "Security solutions for factories, warehouses and industrial facilities.",
    image: defaultOgImage,
    robots: "index, follow",
  },

  "/services/residential-security": {
    title: "Residential Security Services in Bengaluru | SSCSS",
    description:
      "Trusted security for apartments, gated communities and residential complexes.",
    image: defaultOgImage,
    robots: "index, follow",
  },

  "/services/housekeeping": {
    title: "Housekeeping Services in Bengaluru | SSCSS",
    description:
      "Professional housekeeping and cleaning support for commercial and residential spaces.",
    image: defaultOgImage,
    robots: "index, follow",
  },

  "/services/front-office-management": {
    title: "Front Office Management in Bengaluru | SSCSS",
    description:
      "Professional reception and front desk management for businesses and facilities.",
    image: defaultOgImage,
    robots: "index, follow",
  },

  "/services/skilled-labour": {
    title: "Skilled Labour Services in Bengaluru | SSCSS",
    description:
      "Qualified skilled workers for operational and project requirements.",
    image: defaultOgImage,
    robots: "index, follow",
  },

  "/services/unskilled-labour": {
    title: "Unskilled Labour Services in Bengaluru | SSCSS",
    description:
      "Reliable general labour support for operations and projects.",
    image: defaultOgImage,
    robots: "index, follow",
  },

  "/services/corporate-staffing": {
    title: "Corporate Staffing Services in Bengaluru | SSCSS",
    description:
      "Staffing solutions for corporate and administrative roles.",
    image: defaultOgImage,
    robots: "index, follow",
  },

  "/services/ex-army-security-guards": {
    title: "Ex-Army Security Guards in Bengaluru | SSCSS",
    description:
      "Disciplined and experienced ex-servicemen for professional security requirements.",
    image: defaultOgImage,
    robots: "index, follow",
  },

  "/services/event-security": {
    title: "Event Security Services in Bengaluru | SSCSS",
    description:
      "Security management for events, conferences and gatherings.",
    image: defaultOgImage,
    robots: "index, follow",
  },

  "/services/background-verification": {
    title: "Background Verification Services in Bengaluru | SSCSS",
    description:
      "Professional background checks for individuals and organizations.",
    image: defaultOgImage,
    robots: "index, follow",
  },

  "/services/private-detective-services": {
    title: "Private Detective Services in Bengaluru | SSCSS",
    description:
      "Discreet and professional investigative services for individuals and businesses.",
    image: defaultOgImage,
    robots: "index, follow",
  },

  "/services/integrated-facility-management-services": {
    title: "Integrated Facility Management Services | SSCSS",
    description:
      "Security, housekeeping, staffing and facility operations under one accountable partner.",
    image: defaultOgImage,
    robots: "index, follow",
  },
};

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function metaTags(meta, route) {
  const title = escapeHtml(meta.title);
  const description = escapeHtml(meta.description);
  const canonical = `${siteUrl}${route === "/" ? "/" : route}`;
  const image = escapeHtml(meta.image);
  const robots = escapeHtml(meta.robots);

  return `
    <title>${title}</title>
    <meta name="description" content="${description}" />
    <meta name="robots" content="${robots}" />
    <meta name="author" content="S South Coorg Security Services" />
    <link rel="canonical" href="${canonical}" />

    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:url" content="${canonical}" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="S South Coorg Security Services" />
    <meta property="og:image" content="${image}" />
    <meta property="og:image:alt" content="S South Coorg Security Services" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${title}" />
    <meta name="twitter:description" content="${description}" />
    <meta name="twitter:image" content="${image}" />
  `.trim();
}

const sourceHtml = await fs.readFile(
  path.resolve("dist/index.html"),
  "utf8",
);

for (const route of routes) {
  const meta = routeMeta[route];

  if (!meta) {
    throw new Error(`Missing prerender metadata for route: ${route}`);
  }

  const renderedHtml = sourceHtml.replace(
    /<title>[\s\S]*?<\/title>|<meta name="description"[\s\S]*?\/>|<meta name="robots"[\s\S]*?\/>|<meta name="author"[\s\S]*?\/>|<link rel="canonical"[\s\S]*?\/>|<meta property="og:[^"]+"[\s\S]*?\/>|<meta name="twitter:[^"]+"[\s\S]*?\/>/g,
    "",
  );

  const html = renderedHtml.replace(
    "</head>",
    `${metaTags(meta, route)}\n  </head>`,
  );

  const outputPath =
    route === "/"
      ? path.resolve("dist", "index.html")
      : path.resolve(
          "dist",
          route.replace(/^\/|\/$/g, ""),
          "index.html",
        );

  await fs.mkdir(path.dirname(outputPath), {
    recursive: true,
  });

  await fs.writeFile(outputPath, html, "utf8");

  console.log(`Prerendered: ${route}`);
}