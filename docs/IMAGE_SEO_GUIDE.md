# IMAGE SEO GUIDE — S South Coorg Security Services (SSCSS)

> **Filename, alt-text, caption, and structured-data rules** for every image the site publishes. Following these maximizes image-search visibility, accessibility, and the site's JSON‑LD context (the project already ships `Organization`, `LocalBusiness`, `Service`, `FAQPage`, `WebSite`, `BreadcrumbList` schemas per `techspec.md` §4).

---

## 1. Filename conventions

**Pattern:** `sscss` + `-` + `context` + `-` + `descriptor` + `-` + `vN` (version) + correct extension.
All lower-case, kebab-case, no spaces, no underscores, no root-relative ambiguity.

### Folders
- **Hero stills/videos:** `public/images/hero/`
- **Service stills:** `public/images/services/`
- **Founder:** `public/images/founder/`
- **Gallery images:** `public/images/gallery/`
- **Gallery videos:** `public/images/gallery/video/` (or a CDN)
- **Client logos:** `public/images/clients/`
- **Certificates:** `public/images/certificates/`
- **Textures/backgrounds:** `public/images/bg/`

### Examples
| Asset | Filename |
|-------|----------|
| Home hero | `sscss-hero-guard-corporate-lobby-v1.jpg` |
| About hero team | `sscss-about-team-deployment-v1.jpg` |
| Security guards service | `sscss-service-security-guards-v1.jpg` |
| Industrial security service | `sscss-service-industrial-security-v1.jpg` |
| Founder portrait | `sscss-founder-mr-subramani-v1.jpg` |
| Gallery tile — fire drill | `sscss-gallery-fire-drill-v1.jpg` |
| Gallery video — patrol | `sscss-gallery-patrol-walkthrough-v1.mp4` |
| PSARA scan | `sscss-cert-psara-v1.jpg` |
| FIFM integrated team | `sscss-service-facility-management-v1.jpg` |

> Keep a version suffix (`v1`) so re-shoots/retouches don't break browser cache or share links.

## 2. Alt-text rules

- **Accurate, specific, non-redundant** with the surrounding text.
- **Keyword-natural** (include geographic/activity terms only where true): e.g., *"SSCSS security guard at a corporate office entrance in Bengaluru"*.
- Executable helpers:
  - `heroImage.alt` / `ImageRef.alt` already exist in the content layer — **update these in the content files when real assets land** (no code change needed; it's data).
  - Heroes: "SSCSS {person/team} {activity} at {Bengaluru-style location}."
  - Gallery tiles: "SSCSS {category} — {specific scene} at {site}."
  - Founder: keep the existing full name + designation alt.
  - Certificates: "SSCSS {GST/PSARA/PF/ESI} registration certificate."
  - **Decorative only:** `aria-hidden="true"` (do not restate).

### Alt examples
- Home hero: `SSCSS security guard standing at the entrance of a modern corporate office in Bengaluru`
- Security guards service: `SSCSS trained security guard saluting at an apartment gate in South Bengaluru`
- Industrial: `SSCSS industrial security guard inspecting an inbound truck at a factory gate in Bengaluru`
- Housekeeping: `SSCSS professional housekeeping staff cleaning a corporate office corridor`
- Founder: `Machettira Subramani, Founder, Proprietor and Managing Director of S South Coorg Security Services`
- Facility management: `SSCSS integrated facility management team of security, housekeeping and reception staff in a modern lobby`

## 3. Captions

Captions appear on hero images (`figcaption`), gallery tiles, and lightbox. Use in galleries (see `GalleryImage.title`/`description`) and hero `figcaption` when real assets arrive:
- Pattern: `{Subject} · {Site/location} · SSCSS Security Services, Bengaluru`
- Keep ≤140 characters.
- Never claim verified facts not yet true (e.g., don't caption pending certifications as "verified").

## 4. Open Graph / social shares

- **og:image** is currently a single fallback `public/og/sscss-default.png` (referenced by `SEO_DEFAULTS.ogImage`).
- **Recommendation:** generate a **per-page og:image** (1200×630) from each page's hero/master. At minimum, ensure the Home og:image is the premium hero still, not the placeholder dot.
- Rule: og:image must be JPG/WebP ≥600×315, ratio 1.91:1, and load without disrupting LCP.

## 5. Structured data / schema entities

The site already emits JSON‑LD. Add image nodes to strengthen rich results:

### Organization / LocalBusiness (site.ts / SEO layer)
```json
{
  "@type": "Organization",
  "name": "S South Coorg Security Services",
  "logo": { "@type": "ImageObject", "url": "https://sscss.example.com/images/logo/sscss-logo.svg" },
  "image": "https://sscss.example.com/images/hero/sscss-hero-guard-corporate-lobby-v1.jpg",
  "address": { "addressLocality": "Bengaluru", "addressRegion": "Karnataka", "addressCountry": "IN" }
}
```

### Service (per service page)
```json
{
  "@type": "Service",
  "name": "Industrial Security",
  "image": "https://sscss.example.com/images/services/sscss-service-industrial-security-v1.jpg",
  "provider": { "@type": "Organization", "name": "S South Coorg Security Services" },
  "areaServed": "Bengaluru"
}
```

### FAQPage (per FAQ page — `acceptedAnswer` already present)
Faq syntax already exists; add `encodingFormat`/image only if an illustrated answer is added.

### ImageObject for gallery tiles (optional enhancement)
```json
{
  "@type": "ImageObject",
  "contentUrl": "https://sscss.example.com/images/gallery/sscss-gallery-fire-drill-v1.jpg",
  "thumbnailUrl": "https://sscss.example.com/images/gallery/sscss-gallery-fire-drill-v1-thumb.jpg",
  "caption": "SSCSS fire drill training · Bengaluru",
  "license": "https://creativecommons.org/licenses/by-nd/4.0/",
  "creditText": "S South Coorg Security Services",
  "copyrightHolder": { "@type": "Organization", "name": "S South Coorg Security Services" }
}
```

## 6. Performance + SEO interplay (do not regress)

The performance budget (`techspec.md` §6, Lighthouse ≥95) depends on image discipline. On publish:
- **Hero (LCP):** keep `loading="eager"` + `fetchpriority="high"`; serve WebP/AVIF; width ≈800–1200px.
- **Below-fold:** `loading="lazy"`, `decoding="async"`, `fetchpriority="low"` (coded already — keep).
- **Provide poster frames for all video masters** so SEO/OG/AI crawlers still index a still when video autoplay is off.
- `llms.txt`/sitemap already generated at build; adding quality alt/filenames only improves discoverability.

## 7. What to avoid

- Meaningless alt (`image.jpg`, `photo1`) — fails accessibility + SEO.
- Keyword-stuffed alt ("security guards Bangalore best security guards India") — poor UX + risk.
- Publishing watermarked or unlicensed images.
- Setting `isPlaceholder=false` before assets are truly final/optimized.

See also `IMAGE_ACQUISITION_GUIDE.md` for the licensing/release checklist that protects reuse and schema publication.

