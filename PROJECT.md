# Project: Paper Crumple & Unfold Transition

## Architecture
- **Target Files**:
  - `package.json` (Add `three`, `@types/three`, `html2canvas`)
  - `src/components/ui/PaperCrumpleOverlay.tsx` (New component for WebGL transition overlay)
  - `src/hooks/useTransitionNavigator.ts` (Update navigator hook to orchestrate transitions)
  - `src/app/skills/template.tsx` (Wrap pages in the transition overlay component)
- **Data/Event Flow**:
  - Click Event on Card -> `navigateTo` -> prevent default -> dispatch "canvas-pause" -> trigger exit (crumple) animation on `PaperCrumpleOverlay` -> await crumple finish -> `router.push(href)`
  - Page Mount -> new page loads -> mount `PaperCrumpleOverlay` -> capture new page state -> trigger enter (unfold) animation on `PaperCrumpleOverlay` -> dispatch "canvas-resume" -> hide overlay & restore interactivity

## Milestones
| # | Name | Scope | Dependencies | Status |
|---|---|---|---|---|
| 1 | Full Implementation | Add dependencies, implement useTransitionNavigator, implement PaperCrumpleOverlay, and integrate into template.tsx | None | DONE |
| 2 | Verification & Audit | Verify build, lints, E2E tests, and forensic integrity audit | M1 | DONE |

## Interface Contracts
### `PaperCrumpleOverlay` Component
- API / Props: `{ children: React.ReactNode }`
- Global events / state hook:
  - Listens to `"transition-exit-start"` and `"canvas-pause"`.
  - Performs `html2canvas` capture of the page content.
  - Manages Three.js Canvas, high-density PlaneGeometry, custom vertex/fragment shaders for crumpling.
  - Dispatches `"transition-exit-complete"` upon exit animation completion.
  - Manages unmount/disposal of all WebGL assets.
