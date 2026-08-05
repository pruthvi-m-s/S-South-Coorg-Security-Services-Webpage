# Tech Spec — SSCSS Website

## 1. Stack

| Layer | Choice | Notes |
|---|---|---|
| Framework | React 18 + Vite | Fast development, static SPA is sufficient for launch |
| Styling | Tailwind CSS | Utility-first, paired with design tokens from `design.md` |
| Components | shadcn/ui | Primary component library |
| Animation | Framer Motion | Entrance animations, hover states, page transitions |
| Smooth Scroll | Lenis | Premium scrolling experience, used sparingly |
| Icons | Lucide Icons | Consistent icon library |
| Component Sources | shadcn/ui → Magic UI → Aceternity UI → 21st.dev | Always check in this order before building custom components (see `rules.md`) |
| Forms | React Hook Form + Zod | Validation + typed form state |
| Routing | React Router v6 | Static routes, data-driven service pages |
| Lead Capture | **Formspree** (Free Tier) | See §5 |
| Hosting | Vercel or Netlify | Free tier sufficient for launch |

> If SSR/ISR or CMS-driven content becomes necessary later, migrate to Next.js. This is intentionally out of scope for v1.

---

## 2. Why no custom backend

Per `prd.md`, SSCSS does not require e-commerce, authentication, dashboards, or frequently changing content. All content is stored as typed static data (`schema.md`), while Formspree handles lead capture.

This keeps:

- hosting inexpensive,
- deployment simple,
- maintenance minimal,
- security surface small.

---

## 3. Folder structure

```text
src/
  assets/
    placeholder/
    real/

  components/
    ui/              → shadcn primitives
    layout/          → Header, Footer, MobileNav
    sections/        → Hero, Stats, CTA, etc.
    forms/           → InquiryForm
    common/          → FloatingWhatsAppButton,
                        StickyMobileCallButton,
                        BackToTopButton

  content/
    services.ts
    industries.ts
    clients.ts
    certifications.ts
    testimonials.ts
    stats.ts
    faqs.ts

  pages/
    Home.tsx
    About.tsx
    Services/
      ServicesHub.tsx
      [ServiceSlug].tsx
    Industries.tsx
    Clients.tsx
    Gallery.tsx
    Faqs.tsx
    Contact.tsx

  hooks/
  lib/
  routes.tsx
  main.tsx
```

All 13 service pages share a single template driven by structured content data.

The `/compliance` route is a content-driven trust page. It reads the existing `Certification[]` records and does not maintain a parallel registration or document source.

---

## 4. SEO & metadata

- One route-aware SEO component owns page title, description, canonical URL, robots, author, theme color, Open Graph, and Twitter Card metadata. Page and service content records remain the metadata source.
- Reusable JSON-LD generators provide `Organization`, `LocalBusiness`, `WebSite`, `Service`, `FAQPage`, and `BreadcrumbList` schemas only on appropriate routes.
- Natural integration of local SEO keywords.
- Google Business Profile link + embedded map.
- `sitemap.xml` and `robots.txt` are generated during the Vite build from the content-layer service routes. `VITE_SITE_URL` must be set to the production origin in the hosting environment.
- `llms.txt` is generated during the same build from the site, services, and industries content records. AI crawler directives are generated alongside the standard robots rules.
- Canonical paths use a no-trailing-slash convention (except `/`); a future redirect map is maintained in `src/lib/redirects.ts` when public URLs change.

---

## 5. Lead capture (Formspree)

Chosen because it requires no backend while providing reliable inquiry handling.

- One Formspree endpoint shared across all inquiry forms.
- Hidden service field identifies the originating page.
- React Hook Form + Zod validation.
- Success → inline confirmation + optional `/thank-you`.
- Failure → preserve entered data and display errors.
- Phone and WhatsApp remain available as parallel contact methods.

Future upgrades can replace Formspree with a CRM or serverless endpoint without changing the frontend contract.

---

## 6. Performance

- Lighthouse target: **95+** across Performance, Accessibility, SEO and Best Practices.
- Responsive WebP/AVIF images.
- Lazy-loading below the fold.
- Route-level code splitting.
- Respect `prefers-reduced-motion`.
- Self-hosted fonts with `font-display: swap`.

---

## 7. Accessibility

- Semantic HTML landmarks.
- Proper heading hierarchy.
- Full keyboard navigation.
- Accessible forms with `aria-live`.
- WCAG AA color contrast.

---

## 8. Analytics

Google Analytics 4 (GA4) will be used for lightweight conversion tracking.

Track:

- Page views
- Get Quote clicks
- Phone clicks
- WhatsApp clicks
- Successful inquiry submissions

Implementation should remain privacy-conscious by avoiding unnecessary collection of personally identifiable information (PII).

---

## 9. Typography

The project will use **Inter** as the primary typeface.

- Self-hosted font files.
- Limited font weights for performance.
- `font-display: swap`.
- Typography follows the scale defined in `design.md`.

---

## 10. Deployment

- Deploy to Vercel or Netlify.
- Automatic deployment from the `main` branch.
- Environment variables stored in the hosting dashboard:
  - Formspree endpoint
  - GA4 Measurement ID
  - Future third-party integration keys
