# IMAGE / MEDIA AUDIT — Final Experience Polish (2026-08-09)

> **Purpose:** Internal audit of every image currently referenced by the website. No AI images were generated or wired in during this coding phase. This document records the KEEP / EDIT / REPLACE / REMOVE decision for each asset so the swap to real photography is mechanical and unambiguous.

**Guiding principles (from the polish brief):**
- Real company photographs of SSCSS personnel → **team credibility**, security-guard services, event deployment, housekeeping, About/company history.
- AI-generated/environmental imagery (or realistic stock) → **only** corporate, industrial, hospital, IT-park, warehouse, residential, hospitality, institutional *environments* (no fabricated personnel).
- Do not mix real personnel photography and synthetic personnel photography within one composition.
- Do not prominently present third-party client branding, signage, or personally identifiable material unless approved; prefer crop/positioning that removes identifying info.
- Do not heavily alter real employees with generative AI. Editing limited to exposure, denoise, upscale, color, background extension, distraction removal, cropping.

---

## 1. Referenced assets & decisions

| Asset / path | Used by | Current state | Decision | Notes |
| --- | --- | --- | --- | --- |
| `src/assets/placeholder/hero.svg` | Home Hero (LCP) | placeholder illustration | **REPLACE** | Replace with a real, bright, authentic SSCSS personnel photo (from `Images/`). Keep the current `ImageWithSkeleton` + `BorderTrail` hero treatment. |
| `/images/hero/about-hero.jpg` | AboutHero | placeholder path | **REPLACE** | Prefer a real company / office history image. Keep `lazy` + skeleton. |
| `/images/founder/founder.jpg` | Founder (Home) + AboutFounderPortrait | placeholder path | **REPLACE** | Use the real founder portrait photo once available. `aspect-[4/5]`, `lazy`. |
| `/images/services/{slug}.jpg` (14) | ServiceDetailHero / ServiceShowcase / mega-menu | placeholder paths | **REPLACE** | Map each service to the correct real image. Personnel services (security-guards, ex-army, event, housekeeping, skilled/unskilled labour) → real SSCSS personnel; environment services (corporate, industrial, residential, healthcare, hospitality, background-verification, private-detective, facility-management) → environmental/stock imagery. |
| `/images/gallery/team-01..04.svg` | GalleryGrid (team) | placeholder SVGs | **REPLACE** | Real SSCSS team / personnel photos. Reinforces team credibility. |
| `/images/gallery/deploy-01..06.svg` | GalleryGrid (deployments) | placeholder SVGs | **REPLACE** | Real deployment photos. **Crop/positioning must remove third-party client branding/signage unless approved.** |
| `/images/gallery/train-01..04.svg` | GalleryGrid (training) | placeholder SVGs | **EDIT / REPLACE** | Real training-session photos preferred; edit to remove identifiable attendees/faces if not approved. |
| `/images/gallery/equip-01..03.svg` | GalleryGrid (equipment) | placeholder SVGs | **KEEP** (as placeholder) / **EDIT** | Equipment shots are low-risk; can remain placeholder or use real equipment photos. |
| `/images/gallery/event-01..03.svg` | GalleryGrid (events) | placeholder SVGs | **EDIT / REPLACE** | Real team-event photos; crop to avoid identifiable unapproved individuals. |
| `public/images/low-poly-grid-haikei.svg` | SectionBackground (Process / Coverage) | decorative brand grid | **KEEP** | Low-opacity, `aria-hidden`, pointer-events-none. Intentional depth; not a photo. |
| Certification documents (`documentImage` on `Certification[]`) | AboutEvidenceSection / ComplianceSection | absent (request-only) | **KEEP (pending)** | Never fabricate. Render explicit "Preview on request" state until real scans are supplied. |

## 2. Real assets available (not yet wired)

The `Images/` folder contains real company photographs (e.g. bodyguards 1–7, Guards 1–3, HouseKeeping 1, Security at entrance, Security rear, CFEE1924.JPG, EMMR4893.JPG). These are the **primary source** for the REPLACE decisions above.

**Not wired in this coding phase** (deliberately — per scope lock "do not add AI images / do not change content data"). Wiring real photos into the `src/content/*` layer is the **next phase** and requires:
- confirming each real photo's subject/consent,
- cropping out any third-party client branding/signage/identifying material,
- setting `isPlaceholder: false` and pointing `src` at the real asset,
- keeping real personnel photos on personnel/team/About surfaces and environmental imagery on environment surfaces.

## 3. Image architecture support (verified)

All major image components already satisfy the required architecture:
- `ImageWithSkeleton` — reserves layout, lazy/eager control, `onLoad` fade-in, no CLS.
- Responsive aspect ratios via `aspect-[4/3]` (gallery), `aspect-[4/5]` (founder), `aspect-video` (video), `h-auto w-full` (heroes).
- Explicit `width`/`height` on hero images; `object-cover` throughout.
- Graceful missing-image fallback: gallery placeholder layer + `ImageWithSkeleton` `alt` semantics; `AboutEvidenceSection` request-only preview.
- Accessible `alt` text on every referenced image.
- Below-fold images are lazy; only the Home LCP hero is eager/high-priority — multiple high-res images are not loaded eagerly.
- Reduced-motion safe (skeleton fade disabled under `prefers-reduced-motion`).

## 4. Outcome

- **KEEP:** decorative brand grid, placeholder equipment/event tiles (until real assets), request-only certificate preview state.
- **EDIT:** real deployment/training/event photos — crop to remove unapproved client branding & identifiable individuals; color/exposure correction only; no generative alteration of personnel.
- **REPLACE:** all personnel/team/hero/founder/service placeholders with real SSCSS photography or approved environmental stock (no synthetic personnel mixed into real-personnel compositions).
- **REMOVE:** none are removed outright this phase; `public/og/sscss-default.svg` remains an unused runtime asset (pre-existing note, candidate for future removal).
