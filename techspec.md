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
- Interaction polish is intentionally subtle: buttons, cards, nav items, badges, gallery controls, FAQ cards, accordions, service cards, trust badges, contact actions, and social links now use clearer hover, focus, active, and disabled feedback without changing the overall visual design or adding heavy motion.

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

---

## 11. Motion primitives & animation architecture (Motion Enhancement Pass)

### Animation vocabulary (shared, in `src/lib/motion.ts`)

- `premiumEasing` `[0.16, 1, 0.3, 1]` and `premiumEasingOut` `[0, 0, 0.2, 1]` are the single source of easing truth.
- Shared variants: `staggerContainer`, `staggerContainerSlow`, `fadeUp`, `fadeUpFast`, `fadeIn`, `scaleIn`.
- `viewportOptions` = `{ once: true, amount: 0.2 }` (reveal-once by default).
- Reduced motion is honored globally via `MotionConfig reducedMotion="user"` in `main.tsx` and the `prefers-reduced-motion` block in `index.css`.

### Motion Primitive components (local copies, official CLI)

Installed under `components/motion-primitives/`, all importing from `motion/react`:

- `disclosure.tsx` — accessible expand/collapse (ARIA, keyboard). Used by `WhyChooseCard`.
- `in-view.tsx` — once-per-viewport reveal. Used by `ProcessStepCard`.
- `border-trail.tsx` — subtle animated border sweep. Used only on the three hero/featured imagery films: `Hero` (Home), `AboutHero`, `ServiceDetailHero`. Not applied to gallery tiles or elsewhere (removed from `GalleryGrid` in the Final Experience Polish pass to eliminate repetitive looping).
- `text-effect.tsx` — per-line masked text reveal. Wrapped by `HeadlineReveal`.
- `animated-background.tsx` — available but intentionally unused (no section needed it).

### Reusable wrappers

- `src/components/common/HeadlineReveal.tsx` — Apple-style per-line mask reveal for hero headings (semantic `h1`/`h2`, subtitle/CTA keep `fadeUp`).
- `src/components/common/SectionBackground.tsx` — low-opacity decorative SVG background (`aria-hidden`, `pointer-events-none`).

### Integration rules (enforced in this pass)

1. **Reuse, don't reinvent** — every new effect builds on the installed primitives or `src/lib/motion.ts` variants. No new animation system.
2. **Motion supports hierarchy** — headlines reveal by line; cards lift on hover only where they are interactive; process steps reveal once as they enter the viewport.
3. **No flashy motion** — no bounce, no overshoot springs, no glow/neon, no glassmorphism, no infinite attention-seekers. The only `repeat: Infinity` remaining is the intentionally slow, subtle hero-film BorderTrail at 9s (Home hero). Per the Final Experience Polish pass, repetitive looping was removed from gallery tiles and the Clients marquee.
4. **Left intentionally static** — Final CTA band, Trust strip/ribbon, stats, footer, and testimonial cards keep their existing restrained motion to avoid distracting from conversion/trust messaging.
5. **Selective SVG backgrounds** — only the brand-aligned, low-opacity (`≤ ~10%`) blue grid is used behind `bg-muted` sections (Process, Coverage). Red/saturated SVGs were rejected to preserve palette and readability.
6. **Accessibility + performance** — all additions respect reduced motion, keep semantic elements, add no focus loss, add no new npm dependencies, and introduce no layout thrashing.

---

## 12. Loading experience & skeleton architecture (Loading Experience Pass)

### Goal

Improve perceived performance and eliminate layout shift (CLS) during route changes and image loads — **no redesign**. The global Header and Footer must never disappear during client-side navigation, and every image should render a layout-reserving placeholder that fades into the final asset.

### Reusable skeleton primitives (`src/components/common/`)

Single low-level shimmer block reused everywhere (no per-component shimmer implementations):

- `Skeleton.tsx` — base animated block (`animate-pulse`, `bg-muted`). Reduced-motion safe via the global `prefers-reduced-motion` block in `index.css`.
- `TextBlockSkeleton.tsx` — paragraph line placeholder.
- `HeroSkeleton.tsx` — hero / featured image frame with matching aspect ratio.
- `CardSkeleton.tsx` — card placeholder matching shared card anatomy (icon circle + title + body lines).
- `GallerySkeleton.tsx` — masonry grid + filter-chip placeholder.
- `RouteContentSkeleton.tsx` — page-content-only route loader rendered inside `<main>` so Header/Footer stay visible.
- `ImageWithSkeleton.tsx` — reusable wrapper: reserves layout, shows a skeleton behind the image, fades the real image in on `onLoad`. Skeleton is `aria-hidden`; the real `<img>` keeps `alt` semantics. No flash, no CLS.

### Route suspense strategy

- `routes.tsx` — `<Suspense>` no longer wraps `<Layout/>` (kept `ErrorBoundary`). Only the lazy child routes are suspended.
- `Layout.tsx` — `<Outlet/>` is wrapped in `<Suspense fallback={<RouteContentSkeleton/>}/>`. Result: the page content area shows a skeleton while the Header, Footer, floating CTAs, and analytics provider stay mounted — continuous premium transitions.

### Image loading strategy

Every section image follows: **reserve layout → show skeleton → fade in on load**, via `ImageWithSkeleton` (+ `HeroSkeleton` where a large frame is needed):

| Component | Image | Optimization |
| --- | --- | --- |
| `Hero.tsx` | Home hero (LCP) | `eager`, `fetchPriority="high"` |
| `AboutHero.tsx` | About hero | `lazy` |
| `ServiceDetailHero.tsx` | Service hero | `lazy` |
| `FounderSection.tsx` | Founder portrait | `lazy`, `aspect-[4/5]` |
| `ComplianceSection.tsx` | Cert document | `lazy` |
| `GalleryGrid.tsx` | Gallery images | `lazy`; lazy `MediaLightbox` wrapped in `<Suspense fallback={null}>` |
| `MediaLightbox.tsx` | Lightbox image | skeleton behind + crossfade; keyed by `item.id` so navigating shows a fresh skeleton |

The previous duplicated `onLoad` opacity handler in `GalleryGrid` was removed — fade-in is owned solely by `ImageWithSkeleton` to avoid double-render/flicker.

### Forms

No skeleton is needed for the inquiry form — it already provides submit feedback via a `Loader2` spinner, disabled controls during submission, inline error banner, inline success state, and a screen-reader live region.

### Accessibility & reduced motion

- All skeletons use `animate-pulse` and are disabled under `prefers-reduced-motion` (global CSS).
- Skeleton layers are `aria-hidden`; real images retain `alt` semantics.
- No layout shift, no focus loss, no new live regions introduced.

### Cleanup

- Removed dead `src/components/common/RouteLoadingFallback.tsx` (superseded by `RouteContentSkeleton`). No references remain.

### Verification

- `npm run build` passes (exit 0, ~1.7s). No new npm dependencies added.

---

## 13. Performance optimization architecture (Performance Pass)

### Goal

Improve runtime performance and Lighthouse scores using only **safe** optimizations — **no redesign**, no new dependencies, no state-management libraries, and no overuse of `React.memo`. Every optimization is defensive and does not change behavior, markup, styling, accessibility, or SEO output.

### Principles

- **Only optimize what provably matters.** The global shell and the most-rendered lists get the attention; micro-optimizing every component is avoided.
- **Avoid over-memoization.** `React.memo` is used only where it pays off (`ServiceCard`). Adding it indiscriminately adds overhead and maintenance cost.
- **No state-management libraries.** The app is fully content-layer driven with local component state; nothing warrants a global store.
- **Derived data is hoisted or memoized, never recomputed on every render.**

### Audit findings & applied optimizations

| Area | Finding | Applied optimization |
| --- | --- | --- |
| Expensive renders | Global shell + hot lists are already lean | Verified no hot-path re-render storms; no change needed |
| Repeated calculations | Footer/PSARA derivations ran inside `Layout` render | Hoisted to module scope (`FOOTER_SERVICES`, `FOOTER_DESCRIPTION`, `PSARA_CERTIFICATION`) — computed once at load |
| Repeated calculations | Form service options mapped on every render | `ContactForm` wraps the mapping in `useMemo` (stable across renders) |
| Image loading | Already fully optimized in the Loading Experience pass | LCP hero `eager`/`high`/`sync`; below-fold `lazy`/`async`/`low`; explicit dimensions; skeleton + fade-in (no CLS) |
| Route prefetching | Home is the only critical-path route | Home eagerly loaded; all other routes `React.lazy()` code-split |
| Analytics | Must not block rendering | Loaded off the critical path via `requestIdleCallback` / first interaction |
| Memoization | Hot list item | `ServiceCard` stays `memo`-ized; no further `React.memo` added |
| Browser / static caching | Static SPA on Vercel/Netlify | Immutable caching for hashed assets at the hosting layer; self-hosted fonts with `font-display: swap` |
| Derived data | Filtered lists / handlers | `Faqs` and `GalleryGrid` already use `useMemo` / `useCallback` |
| Lazy loading | Heavy modal | `MediaLightbox` is `React.lazy()` + `Suspense fallback={null}` |
| Code splitting | All non-home routes | `lazy()` per route → separate chunks |

### Verification

- `npm run build` passes (exit 0).
- `npm run lint` passes (0 errors; 16 pre-existing warnings only).
- No new npm dependencies added.

---

## 14. Global experience foundation (Phase 1 visual upgrade)

- The fixed global header remains mounted across routes. It gains a restrained translucent dark surface, backdrop blur, separator, and a compact desktop height after scrolling; the main-content offset deliberately reserves the larger header height to avoid content movement.
- Desktop Services is an accessible, focusable mega-menu. It groups the existing service data into Security, Workplace operations, and Manpower; service focus/hover updates the visual preview with an opacity crossfade, while every service and the services hub remains a direct route target.
- Tablet and mobile keep the hamburger navigation. Services becomes a tap-controlled, keyboard-accessible expandable list so no service route depends on hover.
- `RouteExperience` uses the installed Anime.js package for the shared page-content entrance (opacity + small translate only). It resets scroll for PUSH/REPLACE navigation, honors in-page hashes, and leaves POP navigation to normal browser history scroll restoration. Header and footer remain stable.
- Motion duration bands: ~150–220ms for interaction feedback, ~350–500ms for content reveal, and only existing hero treatments may use slower cinematic timing. All global motion remains reduced-motion safe; no layout-property animation, bounce, or continuous decorative movement is introduced.

---

## 15. Services experience (Phase 2 visual upgrade)

- `/services` uses `ServiceShowcase` in place of the repeated service-card grid. It reads the existing `Service[]` content and leaves all service routes, detail-page content, and the Home services preview unchanged.
- Desktop provides a selectable service list and a single large visual stage. Hover, focus, or click changes the active service; Anime.js handles the active indicator, selector entrance, image opacity crossfade, and restrained image scale.
- The visual consumes each service's existing `heroImage`. `ImageWithSkeleton` retains layout reservation and loading behavior. If a referenced image is unavailable, the component renders an explicit, non-deceptive image placeholder with the service icon rather than requesting a new asset.
- Below the desktop breakpoint, the same services become a touch-friendly single-open accordion with image, short tagline, and route CTA. No mobile interaction relies on hover.

---

## 16. Home visual storytelling (Phase 3 visual upgrade)

- Home-specific components replace the previous shared Why Choose and Process sections only on `/`: `HomeProofSection`, `HomeProcessTimeline`, and `SecurityIntelligence`. The shared components remain unchanged for other routes.
- `HomeProofSection` presents six business claims as a single proof canvas with compact CSS/SVG interface visualizations. Its staged entrance uses Anime.js once when it enters the viewport.
- `HomeProcessTimeline` retains the six content-layer process steps, limits presentation copy to their existing one-sentence descriptions, and advances an Anime.js progress line as steps enter the viewport or are selected.
- `SecurityIntelligence` is explicitly illustrative—not operational data. It uses CSS/SVG, runs its scan and route-draw motions once on entry, and has no looping behavior or external imagery.
- All Home additions honor `prefers-reduced-motion`; no dependencies, routes, navigation, Services, Industries, or Clients surfaces were changed.

---

## 17. Industries and clients experiences (Phase 4 visual upgrade)

- `/industries` replaces its card grid with `IndustryExplorer`: a desktop radial selector, touch-friendly compact selector on smaller screens, central industry visual crossfade, direct existing-services CTA, and a CSS/SVG environment brief. Anime.js drives the wheel and visual transitions only on selection; it does not auto-rotate.
- `/clients` uses `ClientTrustExperience`, intentionally distinct from Industries: a calm static wrapping sector chip strip (replaced the earlier infinite marquee in the Final Experience Polish pass), visual sector panels, Animated statistics, and an approval-only proof surface. The component does not manufacture client logos, names, or testimonials.
- Both components read their existing content sources (`Industry[]`, `ClientCategory[]`, `Stat[]`, and `Testimonial[]`), preserve routes, and add no external imagery or dependencies.

---

## 18. About cinematic storytelling (Phase 5 visual upgrade)

- `CompanyStory` is now a media-capable About-only story surface. It accepts an optional video source, uses the existing `ImageWithSkeleton` fallback image path when video is unavailable, and preserves lazy loading. The supplied fallback uses the existing About image; no footage is fabricated.
- The story surface reveals its media, condensed lead story, and a four-stage 2008-to-today history with Anime.js opacity, stagger, and line-draw motion. Reduced motion leaves the complete story visible statically.
- `AboutFounderPortrait` is separate from the Home founder section, preserving the existing MD image source while giving About its own portrait reveal and restrained hover treatment.
- `AboutEvidenceSection` presents certification records as document preview surfaces. It renders an actual document through `ImageWithSkeleton` when supplied and an explicit request-only preview state otherwise—never a fabricated certificate.

---

## 19. Real company image assets (Real Company Image Integration)

The approved real SSCSS photography has been copied from `Images/` into `public/images/real/` (kebab-case SEO filenames) and wired into the content layer's personnel/team image slots. This section records the source→public mapping, where each asset is used, and how the decisions align with `docs/IMAGE_AUDIT_FINAL.md`.

### Source → public mapping (`Images/` → `public/images/real/`)

| Source (in `Images/`) | Public asset (`public/images/real/`) | Used by |
| --- | --- | --- |
| Guards 1.jpg | `sscss-guards-team-1.jpg` | About hero / CompanyStory fallback; Gallery team-02 |
| Guards 2.jpg | `sscss-guards-team-2.jpg` | `security-guards` service hero; Gallery team-01 |
| Guards 3.jpg | `sscss-guards-team-3.jpg` | Gallery team-03 |
| Security at entrance.webp | `sscss-security-at-entrance.webp` | `residential-security` service hero; Gallery deploy-01 |
| Security rear.webp | `sscss-security-rear.webp` | Gallery deploy-02 |
| HouseKeeping 1.jpg | `sscss-housekeeping-1.jpg` | `housekeeping` service hero |
| bodyguards 1.jpg | `sscss-bodyguard-1.jpg` | `event-security` service hero; Gallery event-03 |
| bodyguards 3.jpg | `sscss-bodyguard-3.jpg` | `ex-army-security-guards` service hero; Gallery team-04 |
| CFEE1924.JPG | `sscss-event-cfee1924.jpg` | Gallery event-01 |
| EMMR4893.JPG | `sscss-event-emmr4893.jpg` | Gallery event-02 |

All real assets are referenced with `isPlaceholder: false` in the content layer (`src/content/about.ts`, `src/content/services.ts`, `src/content/gallery.ts`); the existing `ImageWithSkeleton` reserve/skeleton/fade-in loading behavior is unchanged.

### Where real assets are surfaced

- **Guards team photographs** (`sscss-guards-team-1/2/3.jpg`) — About hero + story fallback, the Security Guards service hero, and Gallery "Our Team" tiles.
- **Security personnel photographs** (`sscss-bodyguard-3.jpg`) — the Ex-Army Security Guards service hero and a Gallery team tile.
- **Housekeeping photograph** (`sscss-housekeeping-1.jpg`) — the Housekeeping service hero.
- **Bodyguard/event photographs** (`sscss-bodyguard-1.jpg`, `sscss-event-cfee1924.jpg`, `sscss-event-emmr4893.jpg`) — the Event Security service hero and Gallery events tiles.
- **Deployment photographs** (`sscss-security-at-entrance.webp`, `sscss-security-rear.webp`) — the Residential Security service hero and Gallery "Deployments" tiles.

### Alignment with IMAGE_AUDIT_FINAL.md decisions

Consistent with the audit's KEEP / EDIT / REPLACE / REMOVE decisions:

- **REPLACE** — personnel/team/hero surfaces now use the real SSCSS photography above (About, personnel service heroes, Gallery team/deployments/events).
- **KEEP** — decorative brand grid (`public/images/low-poly-grid-haikei.svg`), certification request-only preview state, and the placeholder `public/og/sscss-default.svg` runtime asset remain as documented.
- **EDIT** — real deployment/training/event photos are used as-supplied in this phase; any cropping/object-position clean-up to remove unapproved client branding or identifiable individuals is a deferred non-blocking follow-up (no generative editing).
- **REMOVE** — none removed; `public/og/sscss-default.svg` remains an unused runtime asset (pre-existing candidate for future removal).

### Deliberately left as placeholders

Per the audit rule against mixing synthetic personnel into real-personnel compositions, and because no approved real assets exist for these categories, the following remain placeholders: the Home hero (`src/assets/placeholder/hero.svg`), the founder portrait, certification documents (request-only), and the environment service heroes (corporate, industrial, front-office, skilled/unskilled labour, corporate-staffing, background-verification, private-detective, facility-management) plus Gallery training/equipment tiles.

### Verification

Content-layer changes type-check cleanly (`npx tsc --noEmit -p tsconfig.app.json`). No source, layout, route, animation, or content-data changes were introduced by this documentation pass; no new dependencies were added.
