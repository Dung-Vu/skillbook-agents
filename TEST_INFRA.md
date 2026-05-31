# E2E Test Infra: Skillbook Agents Performance & Command Palette

## Test Philosophy
- Opaque-box, requirement-driven. No dependency on implementation design.
- Methodology: Category-Partition + BVA + Pairwise + Workload Testing.

## Feature Inventory
| # | Feature | Source (requirement) | Tier 1 (Coverage) | Tier 2 (Boundary) | Tier 3 (Combination) |
|---|---------|---------------------|:------:|:------:|:------:|
| 1 | R1: Smooth Scroll | ORIGINAL_REQUEST R1 | Verify smooth scroll works, verify html attribute, check console for no warnings | Verify fast scroll without jank | Direct navigation via TOC and hash |
| 2 | R2: Canvas Performance | ORIGINAL_REQUEST R2 | Verify Canvas dynamic backgrounds render | Verify responsiveness under rapid scrolling | Canvas rendering during scroll |
| 3 | R3: Sandbox Re-rendering | ORIGINAL_REQUEST R3 | Verify Sandbox terminal typing and rendering | Verify UI remains fast during fast typing | Canvas + Terminal simulated typing |
| 4 | R4: Command Palette | ORIGINAL_REQUEST R4 | Verify Ctrl+K / Cmd+K opens search palette, Fuse.js fuzzy search of 38 skills | Verify empty search, long search query, non-matching search | Search click -> select skill -> navigate -> history saved |

## Test Architecture
- Test runner: Playwright (`npx playwright test`)
- Target Specs:
  - `tests/e2e/performance-palette.spec.ts`: Covers R1, R2, R3, R4 functional behavior and performance indicators.
  - `tests/e2e/catalog.spec.ts`: Existing tests for catalog navigation.
  - `tests/e2e/skill-detail.spec.ts`: Existing tests for TOC sidebar, platform switching.

## Coverage Thresholds
- **Tier 1**: Feature Coverage (>= 5 cases total)
  - Verify `scroll-behavior: smooth` warning is absent.
  - Verify `<html data-scroll-behavior="smooth">` exists in DOM.
  - Verify Command Palette opens on Cmd+K/Ctrl+K.
  - Verify searching displays skills list using Fuse.js.
  - Verify selecting a skill redirects correctly.
- **Tier 2**: Boundary & Corner cases (>= 5 cases total)
  - Empty search input shows default message or all skills.
  - Command Palette closed on overlay click or Escape key.
  - History tracking saves last searched queries in localStorage.
  - Rapid simulated keyboard typing in Sandbox terminal.
- **Tier 3**: Cross-Feature combinations (pairwise coverage)
  - Open Command Palette, search skill, click skill, check if detail page TOC scroll-spy works.
  - Search multiple items, check localStorage history list and reuse history buttons to search.
- **Tier 4**: Real-world application workload testing
  - Simulating a full user journey: Home page load -> scroll page rapidly -> trigger Command Palette via Cmd+K -> search "Next.js" -> click skill -> TOC scroll -> type in terminal sandbox -> verify smooth 60 FPS transition.
