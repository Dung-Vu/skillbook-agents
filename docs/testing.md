# E2E Test Infra: Skillbook Agents

> **Updated:** 2026-06-04 — reflects reality after cleanup pass `66c2864` (CommandPalette removed) and bilingual expansion (109 skills × 2 langs).

## Test Philosophy
- Opaque-box, requirement-driven. No dependency on implementation design.
- Methodology: Category-Partition + BVA + Pairwise + Workload Testing.

## Test Inventory (current)

Total: **18 test cases** across **5 spec files** in `tests/e2e/`.

| Spec | Cases | What it covers |
|---|---:|---|
| `about.spec.ts` | 4 | `/about` route renders, timeline interactive, mobile breakpoints, no hydration warnings |
| `catalog.spec.ts` | 3 | `/skills` catalog grid renders, filter chips, `?search=` query deep-link |
| `page-transitions.spec.ts` | 6 | Route changes preserve scroll position, smooth fade transitions, no jank |
| `responsive-screenshots.spec.ts` | 1 | Visual snapshot at mobile/tablet/desktop breakpoints |
| `skill-detail.spec.ts` | 4 | `/skills/[slug]` detail page, TOC scroll-spy, related-skills links, prev/next nav |
| **Total** | **18** | |

Run command: `pnpm run test:e2e` (uses `playwright.config.ts` which auto-starts the dev server on port 3002 via `pnpm start -- -p 3002`).

## Feature Inventory

| # | Feature | Source (requirement) | Tier 1 (Coverage) | Tier 2 (Boundary) | Tier 3 (Combination) |
|---|---------|---------------------|:------:|:------:|:------:|
| 1 | R1: Smooth Scroll | `ORIGINAL_REQUEST.md` R1 | Verify smooth scroll works, verify html attribute, check console for no warnings | Verify fast scroll without jank | Direct navigation via TOC and hash |
| 2 | R2: Canvas Performance | `ORIGINAL_REQUEST.md` R2 | Verify Canvas dynamic backgrounds render | Verify responsiveness under rapid scrolling | Canvas rendering during scroll |
| 3 | R3: Sandbox Re-rendering | `ORIGINAL_REQUEST.md` R3 | Verify Sandbox terminal typing and rendering | Verify UI remains fast during fast typing | Canvas + Terminal simulated typing |
| 4 | R4: ~~Command Palette~~ Catalog Search & Provider Pages | `ORIGINAL_REQUEST.md` R4 | Verify `/skills?search=<query>` filters grid, `?search=` is read on load, 109 skills indexed via Fuse.js | Verify empty search shows all 109, long search query, non-matching search | Search → select skill → navigate → related-skills click |

> **Note on R4:** The original CommandPalette (Cmd+K / Ctrl+K global modal) was **removed** in commit `66c2864` ("feat: complete layout enhancements, i18n, command palette removal, and complexity cleanup"). Its functionality is now provided by:
> - `/skills?search=<query>` URL-driven search (works in any browser, shareable, SSR-friendly)
> - `/providers/[name]` per-provider landing pages
> - Header search input that mirrors the same Fuse.js index

> Tier-1 case "Verify Command Palette opens on Cmd+K/Ctrl+K" from the original spec is **no longer applicable** and has been replaced with the catalog search coverage row above.

## Test Architecture
- Test runner: Playwright 1.60+ (`@playwright/test`)
- Target Specs:
  - `tests/e2e/about.spec.ts`
  - `tests/e2e/catalog.spec.ts`
  - `tests/e2e/page-transitions.spec.ts`
  - `tests/e2e/responsive-screenshots.spec.ts`
  - `tests/e2e/skill-detail.spec.ts`
- Config: `playwright.config.ts` (uses `pnpm start -- -p 3002` for `webServer`)

## Coverage Thresholds
- **Tier 1**: Feature Coverage (>= 5 cases total across the 4 R-features above)
  - Verify `scroll-behavior: smooth` warning is absent.
  - Verify `<html data-scroll-behavior="smooth">` exists in DOM.
  - Verify `/skills?search=<query>` filters the catalog grid.
  - Verify Fuse.js fuzzy search indexes 109 skills.
  - Verify selecting a skill navigates to the detail page.
- **Tier 2**: Boundary & Corner cases (>= 5 cases total)
  - Empty `?search=` shows all 109 skills.
  - Long search query that matches no skill shows empty-state.
  - Rapid simulated keyboard typing in Sandbox terminal.
  - Mobile breakpoint re-layout on viewport change.
  - Page transitions while a Canvas is rendering.
- **Tier 3**: Cross-Feature combinations (pairwise coverage)
  - Open catalog with `?search=`, click a skill, verify detail page TOC scroll-spy works.
  - Switch locale (VI ↔ EN), verify search re-runs on the translated index.
- **Tier 4**: Real-world application workload testing
  - Simulating a full user journey: Home page load → scroll page rapidly → visit `/skills` → trigger search via `?search=Next.js` → click skill → TOC scroll → type in terminal sandbox → switch to EN locale → verify smooth 60 FPS transition.
