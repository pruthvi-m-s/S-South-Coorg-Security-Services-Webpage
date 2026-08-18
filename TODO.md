# TODO — Final Homepage Cleanup

Final cleanup/refinement pass making the home page feel like a real premium security
company rather than an AI-generated SaaS template. This is the **last** homepage
visual phase — no further visual phases after this.

## Constraints (locked)
- Use the real SSCSS photography in `public/images/real/` as the strongest trust signal.
- Remove the AI-looking hero shield/grid illustration entirely.
- Remove dashboard-style sections (SecurityOperations, SecurityIntelligence).
- Remove the generic six-card "Why Choose SSCSS" grid (HomeProofSection).
- Fix the Services mega-menu hover gap so the dropdown stays open when moving the cursor.
- Do NOT add dashboards, fake maps/analytics/statistics, AI-looking security interfaces,
  decorative flow diagrams, unnecessary card grids, more sections, or more animations.
- Prioritize: real photography + typography + whitespace + composition + subtle motion.
- Home should feel intentionally shorter and stronger:
  Hero → Trust → Services → Engagement Process → Real SSCSS people → Testimonials → CTA.
- Do NOT modify unrelated pages or routes.
- Do NOT change business claims.
- Do NOT add dependencies.
- Do NOT create another visual system.
- Stop after this cleanup — do not start another visual phase.

## Steps
- [x] Inspect current rendered Home composition (Home.tsx, Hero.tsx, hero content)
- [x] Inspect Services dropdown implementation (DesktopNav.tsx)
- [x] Replace Home hero visual with real SSCSS `sscss-guards-team-2.jpg` (editorial frame)
- [x] Remove `SecurityOperations` from `Home.tsx` (dashboard map/flow)
- [x] Remove `SecurityIntelligence` from `Home.tsx` (second dashboard panel)
- [x] Remove `HomeProofSection` from `Home.tsx` (six-card Why Choose SSCSS grid)
- [x] Fix Services mega-menu hover gap (invisible hover bridge + 220ms close delay)
- [x] Verify removed sections have no other references (only Home.tsx)
- [x] Update tracker.md
- [x] Update implementationplan.md
- [x] Verify with `npm run build` / lint (clean)
- [x] Stop after cleanup — no further visual phase