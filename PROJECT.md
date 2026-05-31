# Project: Skillbook Agents Performance & Command Palette

## Architecture
- React 19 / Next.js 16 application.
- Uses GSAP and Lenis for smooth scroll on the Landing page.
- Evolution and Cyberpunk backgrounds use dynamic HTML5 Canvas rendering.
- Sandbox uses dynamic matrix & PCB simulator backgrounds with mock text terminal inputs.
- Command Palette uses Framer Motion and Fuse.js for rapid fuzzy searching across 38 skills, persisting search history.

## Milestones
| # | Name | Scope | Dependencies | Status |
|---|------|-------|-------------|--------|
| 1 | R1: Smooth Scroll Fix | Resolve smooth-scroll conflict between Lenis and CSS, add html attribute, optimize GSAP ticker. | None | DONE |
| 2 | R2: Canvas Optimization | Eliminate performance bottlenecks in Evolution and Cyberpunk dynamic backgrounds (shadowBlur to Radial Gradients, Mesh-grid particle count / distance formula optimization). | None | DONE |
| 3 | R3: Sandbox Re-render Isolation | Memoize Canvas backgrounds and sub-components in Sandbox section to avoid massive React 19 re-render overhead. | None | DONE |
| 4 | R4: Command Palette Integration & Verification | Integrate global Command Palette UI, verify E2E tests, ensure full compliance with performance metrics. | M1, M2, M3 | DONE |
| 5 | R5: /about Page Visual & Performance Optimization | Fix contrast issues, responsive layout shift, header overlays on mobile, optimize MeshGridBackground canvas to 60 FPS, verify build and Playwright tests. | None | DONE |

## Code Layout
- `src/app/globals.css`: Styles for smooth scroll.
- `src/app/layout.tsx`: Main HTML template where scroll behavior and Command Palette are registered.
- `src/components/ui/SmoothScroll.tsx`: Lenis and GSAP integration wrapper.
- `src/components/ui/EvolutionDynamicBackground.tsx`: Evolution canvas background with network simulation.
- `src/components/ui/CyberpunkDynamicBackground.tsx`: Cyberpunk canvas background.
- `src/components/ui/SandboxDynamicBackground.tsx`: Sandbox canvas background.
- `src/components/ui/SandboxSection.tsx`: Parent sandbox container component.
- `src/components/ui/CommandPalette.tsx`: Fuzzy searching interface.
