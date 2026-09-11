# IMAGE STRATEGY — S South Coorg Security Services (SSCSS)

> **Master visual language document.** This file defines *why*, *how*, and *what kind* of imagery SSCSS should use across the website. It is the source of truth that every other image document (`IMAGE_SHOTLIST.md`, `IMAGE_PRIORITY.md`, `IMAGE_REUSE_MATRIX.md`, `IMAGE_SEO_GUIDE.md`, `IMAGE_ACQUISITION_GUIDE.md`) builds on.
>
> **Status:** Documentation only — no code has been or will be modified by this audit.

---

## 1. Purpose

This website exists for **one job only**: convert enterprise-grade B2B/institutional visitors (facility managers, HR/admin heads, apartment-association committees, procurement officers) into qualified inquiries. Imagery is one of the strongest — and most under-used — trust levers available to the site. Today the site is functionally complete but visually *empty*: the only real `<img>` surface is the Home and About heroes, service-detail heroes, and the founder portrait (all placeholders), while every other page relies on decorative icon grids, colored gradient placeholder "cards," or pure typography.

This document turns that weakness into a defined, consistent, premium visual system.

## 2. Brand positioning (non-negotiable)

Per `design.md` and `project-context.md`, SSCSS positions as:

**Reliable · Professional · Disciplined · Affordable (never "cheap") · Experienced · Responsive · Trustworthy · Enterprise Ready.**

Reference bench mark is **Mercedes / Stripe / Linear / Notion / IBM** — not "local security agency." Every image choice must reinforce: *premium enterprise security vendor*, not *man-with-a-uniform rental*.

### What imagery must communicate (the 8 brand signal)
1. **Discipline** — crisp uniforms, precise posture, orderly lines.
2. **Professionalism** — groomed personnel, corporate environments, correct equipment.
3. **Reliability** — calm, steady, dependable scenes (not flashy or chaotic).
4. **Trust** — eye-contact, verification moments, supervision, documentation.
5. **Enterprise readiness** — modern Bengaluru corporate/industrial environments, control rooms, structured operations.
6. **Local authenticity** — South-Bengaluru context (Electronic City, IT parks, gated communities, hospitals).
7. **Human quality** — real people, real work, warmth balanced with authority.
8. **Precision** — clean composition, consistent color grade, correct orientation.

## 3. Photographic style direction

| Principle | Direction |
|---|---|
| **Base style** | **Documentary / Editorial / Corporate** hybrid. Never "fashion," never "stock-y," never "AI-glossy." |
| **Mood** | Calm, confident, understated. No drama, no grit, no carnival energy. |
| **Lighting** | Natural daylight first; soft, warm interior light second. Avoid harsh flash, neon, or high-contrast HDR. |
| **Color grade** | Cool-neutral with the deep-red brand accent used sparingly (on uniform detailing, signage, ID cards). De-saturated, realistic skin tones. |
| **Depth of field** | Shallow to medium. Subject in focus, environment softly blurred — guides the eye to the guard/person. |
| **Composition** | Strong leading lines (entry gates, corridors, pathways). Rule of thirds. Generous negative space around subjects (allows text overlay / card cropping). |
| **Camera origin** | Real photography. If AI/synthetic is ever used for *concepting only*, it must never ship as final imagery (see `IMAGE_ACQUISITION_GUIDE.md`). |
| **People** | Genuine expressions. Posture = discipline. Uniforms = immaculate, consistent cut. Cultural authenticity for India/Bengaluru. |
| **Environments** | Authentic, current, clean modern Bengaluru properties: glass office lobbies, IT campuses, gated communities, hospital reception, warehouse gates, hotel concierge. |

### The 8 style buckets the library should cover
1. **Hero / cinematic** — wide, environmental, atmospheric, minimal people, strong negative space for headline overlap. *(Home, About, Services hub, service heroes.)*
2. **Operational documentary** — real work happening: patrol, inspection, verification. *(Service pages, Gallery, Industries.)*
3. **Corporate trust** — people in professional settings: receptionists, supervision, briefings, control rooms. *(About, Clients, Why Choose Us.)*
4. **Human / portrait** — the founder and leadership; respectful, approachable, confident. *(Founder section, About.)*
5. **Detail / equipment** — close-ups of uniforms, ID cards, radios, patrol logs, foot patrol. *(Key features, Gallery, Compliance.)*
6. **Training & process** — drills, fire-safety, physical training, briefings. *(Gallery, Services, About process.)*
7. **Client / evidence** — real sites, real deployments, client-adjacent scenes (with releases). *(Clients, Gallery, industries.)*
8. **Texture / abstract** — architectural lines, low-light silhouettes, macro of fabric/glass; for background texture and section spacing. *(Backgrounds, capture strips.)*

## 4. Color grading standards

- Define **one** grade preset and apply to all imagery (LR preset / Capture One style / VSCO-style base).
- Scale: natural skin, lifted shadows with retained detail, slight warmth on skin, coolness on steel/glass.
- Brand deep red (`#8B1E1E`) must appear **only** as a deliberate accent (uniform detail, signage, badge) — never as a dominant wash.
- Do **not** use: crushed blacks, bleached highlights, heavy vignettes, teal-orange film looks, or HDR over-processing. These read "budget" or "digital illustration," contradicting the brand.

## 5. Composition & layout rules (per surface)

The layout system already constrains containers. Image crops must survive these spots:

| Surface | Preferred orientation | Approx. native ratio | Notes |
|---|---|---|---|
| Home hero right visual | Landscape | 4:3 → 3:2 (≈800×600 already coded) | Subject right-of-center, room for BorderTrail |
| About hero right visual | Landscape | 4:3 → 3:2 (≈800×600) | Same crops as home hero for consistency |
| Service-detail hero right visual | Landscape | 4:3 → 3:2 (≈800×600) | One per service (13) |
| Founder portrait | **Portrait** | 4:5 (aspect-[4/5] coded) | Tight head-and-shoulders crop zone |
| Gallery grid tiles | Landscape/square | 4:3 (coded), could use 1:1 | Leave headroom for bottom caption overlay |
| Client logo | Square | 1:1 | Transparent/solid, no photo |
| Cert documents | Portrait/landscape scan | doc-native | Straight-on scan, no shadows |
| Section background texture | Landscape ultra-wide | 16:9+ | Low opacity, brand-aligned |

> **Rule:** shoot landscapes with generous margins so a single capture can be re-cropped for hero, card, and thumbnail without losing composition.

## 6. Consistency & maintenance

- **Single image library** under `public/images/` with subfolders: `hero/`, `services/`, `founder/`, `gallery/`, `clients/`, `team/`, `certificates/`, `bg/` (see `IMAGE_SHOTLIST.md` naming).
- Every asset tagged in the content layer via `ImageRef` with `isPlaceholder` flipped to `false` the moment real assets replace placeholders (per `schema.md` §9). This makes swap-out mechanical.
- **File standards:** real exports as **WebP/AVIF** for the web (max ~1200px wide for hero, ~800px for cards, `image/svg+xml` only for logos/icons/textures). Provide source JPEG/RAW masters in 2000–4000px for future crops.
- **Performance budget:** hero is the LCP — keep it lightweight, `fetchPriority="high"`, `loading="eager"`. All below-fold images `loading="lazy"`, `decoding="async"` (already coded; do not regress).
- **Accessibility:** every image keeps its `alt` text accurate and non-redundant with surrounding text; decorative images are `aria-hidden`.
- **Metadata:** IPTC/EXIF with copyright "S South Coorg Security Services"; store model/property release status alongside assets in a spreadsheet (see `IMAGE_ACQUISITION_GUIDE.md`).

## 7. Where imagery pays off most (priority summary)

1. **Home hero** — first impression; the single highest-conversion surface.
2. **Founder portrait** — human trust anchor on Home.
3. **13 service-detail heroes** — each converts a specific need; unique imagery kills the "template" feel.
4. **About hero + story** — establishes company credibility.
5. **Gallery** — this page *is* imagery; currently empty gradients.
6. **Services hub, Industries, Clients** — the "trust-by-evidence" middle pages.
7. **Compliance** — verified document scans for procurement confidence.
8. **Contact & CTA bands** — trust-at-decision-point; optional atmospheric.

See `IMAGE_PRIORITY.md` for the ordered, phased rollout.

## 8. Recommended new imagery surfaces (beyond current placeholders)

The audit identified locations that have **no image component today** but would significantly increase trust/professionalism/storytelling/conversion if photography were added. These are **recommendations only** — no code modified.

- **Section header visuals** for: Why Choose Us (Home/About/Services), Process/Engagement, Testimonials backdrop, Key Features, Industry & Client category grids.
- **Atmospheric CTA bands** — a subtle wide photograph behind the Final CTA improves conversion framing.
- **Contact page** — a warm office/team photo beside contact info; a real mapped office exterior.
- **Industries hero** — replace decorative icon grid with a wide montage/photo (or keep grid hyper-targeted).
- **Clients hero** — replace icon grid with an authentic lobby/reception or a logo wall (when confirmed).
- **Gallery** — this is the single biggest "empty promise" today (20 gradient cards); fill with real photos/video.
- **Compliance** — add a professional overhead shot of a tidy documentation/procurement desk alongside certificate scans.
- **404 / Thank You** — optional friendly atmospheric photo to reduce friction (low priority).
- **Footer** — optional restrained building/exterior texture.

---

*Next: see `IMAGE_SHOTLIST.md` for the exhaustive per-section shot list.*

