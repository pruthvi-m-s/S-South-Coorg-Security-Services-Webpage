# IMAGE PRIORITY — S South Coorg Security Services (SSCSS)

> **Prioritized rollout roadmap** for sourcing, shooting, and adding imagery. Ordering optimizes for **maximum trust/conversion impact per rupee/time invested**. Each item lists priority, effort, best sourcing route, and the exact surfaces it fills.

Priority key: 🔴 Critical · 🟠 High · 🟡 Medium · 🟢 Low
Sourcing key: 📷 Own photography · 📸 Stock · 🧾 Document scan · 🎬 Video

---

## 0. The single most important rule

**Real company photography of real SSCSS people at real Bengaluru sites always beats stock, always beats AI.** When real assets arrive, they replace stock/placeholders mechanically via the content layer's `ImageRef.isPlaceholder` flag (per `schema.md` §9). Use this guide to accelerate and de-risk that swap.

---

## Phase 1 — "Minimum Viable Premium" (Critical — do first, highest ROI)

These surfaces are seen by **every** visitor and set the entire brand tone. Launch with these and the site immediately reads enterprise-grade.

| Rank | Asset / Surface | Priority | Effort | Source | Fills |
|----|----------------|----------|--------|--------|-------|
| 1.1 | **Home hero** wide cinematic (guard at Bengaluru corporate lobby) | 🔴 | Medium | 📷 / by client | `hero.ts` heroImage |
| 1.2 | **Founder portrait** (head-and-shoulders 4:5, signed consent) | 🔴 | Low | 📷 / by client | `founder.ts` image |
| 1.3 | **13 service hero shots** (documentary, one per service) | 🔴 | High | 📷 shoot day / 📸 stock interim | `services.ts` heroImage ×13 |
| 1.4 | **About hero** (team-wide shot, reuse/crop of 1.1) | 🔴 | Low | reuse 1.1 | `about.ts` heroImage |

> **Quick-win:** Even before a full shoot, secure **one committed shoot day** and license/borrow a handful of premium authentic stock scene matches (Bengaluru corporate/industrial) to drop into 1.1–1.4 so the site is never "empty." Mark all `isPlaceholder=false`.

---

## Phase 2 — Trust-by-Evidence pages (High — strong credibility lift)

Fill the pages whose whole job is proving credentials.

| Rank | Asset / Surface | Priority | Effort | Source | Fills |
|----|----------------|----------|--------|--------|-------|
| 2.1 | **Certificate scans** (PSARA, GST, PF, ESI) — verified clean scans | 🟠 | Low | 🧾 client | `certifications.ts` documentImage; Compliance cards; About cert block |
| 2.2 | **Service-card thumbnails** (crop of each §1.3 hero) | 🟠 | Low | reuse 1.3 | ServicesPreview grid + Services hub grid |
| 2.3 | **Gallery real tiles** (Team/Deployments/Training/Equipment/Events ≈20) | 🟠 | High | 📷 + 🎬 shoot | `gallery.ts` images (+ videos array) |
| 2.4 | **Industries sector thumbnails** (≈12) | 🟠 | Medium | 📷/📸 | Industries grid + service "Industries Served" |
| 2.5 | **CompanyStory / About story image** (HQ exterior or founding-era candid) | 🟠 | Medium | 📷/📸 | About CompanyStory |
| 2.6 | **Clients hero / client-logo wall** (with permissions) | 🟠 | Medium | 📷 client-permitted | ClientsHero |

---

## Phase 3 — Ambience & Conversion framing (Medium — polish)

| Rank | Asset / Surface | Priority | Effort | Source | Fills |
|----|----------------|----------|--------|--------|-------|
| 3.1 | **Services hub montage hero** (cinematic multi-service loop) | 🟡 | Medium | 🎬 | ServicesHero |
| 3.2 | **Final CTA atmospheric backdrop** (dusk lobby, white-text safe) | 🟡 | Low | 📷/🎬 | FinalCtaSection (all pages) |
| 3.3 | **WhyChooseUs section frame** (low-opacity wide line-up) | 🟡 | Low | 📷 | Home/About/Services/Industries/Clients WhyChoose |
| 3.4 | **Process / site-assessment split image** | 🟡 | Low | 📷/🎬 | ProcessSection |
| 3.5 | **Contact office/team photo + live map embed** | 🟡 | Low | 📷 + embed | ContactInfo / Office & Coverage |
| 3.6 | **Compliance/Industries hero modernizations** (from icon grid → montage/cinematic) | 🟡 | Medium | 📷/🎬 | IndustriesHero, ComplianceHero |
| 3.7 | **Timeline era thumbnails** (2008→2023) | 🟡 | Low | 📷 archive | About Timeline |

---

## Phase 4 — Optional enrichment (Low — nice to have)

| Rank | Asset / Surface | Priority | Effort | Source | Fills |
|----|----------------|----------|--------|--------|-------|
| 4.1 | Testimonial avatars (real, authorized only) | 🟢 | Low | 📷 | Testimonials |
| 4.2 | Thank-You / 404 calm atmospheric photo | 🟢 | Low | 📷/🎬 | ThankYou hero, NotFound |
| 4.3 | Ultra-subtle photo texture behind `bg-muted` sections | 🟢 | Low | 📷 ≤5% opacity | Process/Coverage background |
| 4.4 | Real **logo** SVG/PNG (currently text) | 🟠 | Low | 🧱 brand | Header/Footer/Hero eyebrow |

---

## Estimated asset total (consolidated library)

After applying the REUSE model (`IMAGE_REUSE_MATRIX.md`), the full site needs roughly:

| Type | Count |
|------|-------|
| Hero/feature stills (shot once, re-cropped) | ~18–20 |
| Service thumbnails (crops of hero stills) | 13–14 |
| Industry/sector stills | ~12 |
| Gallery real tiles | ~18–20 (mix) |
| Founder portrait | 1 |
| Certificate scans | 4 |
| Client logos (permission-gated) | 5+ |
| Optional ambience/background textures | ~4–6 |
| Video clips (Hero, Service heroes, Gallery, Process, Control room) | ~10–14 |

> Because stills are re-cropped across heroes/cards/galleries, **one well-planned shoot day at 3–4 representative client sites** can cover ~70–80% of the still needs. A second session covers training/control-room video.

---

## Budget & sourcing guidance (summary)

- **Priority 1 (always):** Own photography of real SSCSS personnel & sites.
- **Priority 2:** Professional photographer (1–2 shoot days) — see `IMAGE_ACQUISITION_GUIDE.md`.
- **Priority 3:** Premium licensed stock (Adobe Stock / Shutterstock) only for scenes that cannot be shot (rare) or as interim while a site/team is not available. Tag `isPlaceholder=false` only if licensed for web; otherwise keep placeholder.
- **Avoid:** AI-generated final imagery, watermark images, obviously-stocked "smiling generic guard" or "handshake" shots, cartoon/3D-render hero (see `IMAGE_ACQUISITION_GUIDE.md`).

See also:
- `IMAGE_SHOTLIST.md` — exact per-section shots.
- `IMAGE_REUSE_MATRIX.md` — consolidate to a small library.
- `IMAGE_SEO_GUIDE.md` — filenames, alt, captions, structured data on publish.
- `IMAGE_ACQUISITION_GUIDE.md` — sourcing + licensing + release checklists.

