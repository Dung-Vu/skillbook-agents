# Visual Improvement Strategy — Skillbook Agents

> Status: **proposed** (2026-06-06)
> Audience: design + frontend leads
> Goal: move the site from "showroom aesthetic" to **"premium technical documentation"** after the recent de-WebGL cleanup.

---

## 0. TL;DR

The site just lost its hero interaction — the WebGL paper-crumple page transition was ripped out of `layout.tsx` and `useTransitionNavigator` is now a one-line wrapper around `router.push`. The visual system (cyber-violet tokens, glow effects, `font-mono` everywhere, dark/light theme split) was designed to support that interaction, and now it has no anchor.

This document proposes a **three-phase roadmap** that:

1. Cleans up the dead transition code,
2. Picks **one** visual identity (recommendation: light / "Luminous"),
3. Makes content discovery dramatically better (featured strip, card grid, Cmd+K),
4. Redesigns the home and detail pages around clarity, not spectacle.

Effort estimate: **8–11 weeks** across three phases.

---

## 1. Current state (post de-WebGL)

### 1.1 Inventory

- **5 routes:** `/`, `/skills` (catalog), `/skills/[slug]` (detail × 109), `/about`, `/404`
- **218 content files** (109 skills × VI/EN)
- **12 categories** + 9 platforms + 4 complexity levels
- **Bilingual:** VI default, EN toggle, persisted in `localStorage`
- **Stack:** Next.js 16 (App Router) + React 19 + GSAP + Framer Motion + Lenis + Fuse.js + Zod

### 1.2 Visual system (existing tokens)

| Token | Value | Currently used in |
|---|---|---|
| `--color-bg-primary` | `hsl(224 25% 6%)` | Landing, detail |
| `--color-bg-secondary` | `hsl(224 24% 10%)` | Landing, detail panels |
| `--color-cyber-violet` | `hsl(285 100% 64%)` | Accent, glow |
| `--color-neon-indigo` | `hsl(230 100% 67%)` | Accent secondary |
| `--color-emerald-tech` | `hsl(158 100% 52%)` | Status dots, success |
| `--gradient-hero` | violet → indigo 135deg | Buttons, hero text |

### 1.3 The theme split (the biggest visual inconsistency today)

```ts
// src/components/layout/Header.tsx
const isLightThemePage = pathname === "/skills" || pathname === "/about";
```

- `/` (home) → **dark cyberpunk**
- `/skills` → **light glassmorphism**
- `/skills/[slug]` → **dark cyberpunk**
- `/about` → **light glassmorphism**

Clicking the logo from `/skills` keeps you in the light theme; from `/skills/[slug]` it snaps to dark. The two themes are not differentiated by purpose — they're differentiated by accident of which page was built first.

### 1.4 Dead code worth removing

| File / pattern | LOC | Why it's dead |
|---|---|---|
| `src/components/ui/PaperCrumpleOverlay.tsx` | 553 | Not mounted in `layout.tsx` since the recent refactor |
| `__transition` reads in `SkillDetailClient.tsx` (L218–227) | 10 | Defensive checks for an overlay that no longer exists |
| `canvas-pause` / `canvas-resume` listeners in `MeshGridBackground.tsx` | ~30 | Same — overlay not mounted, listeners never fire |
| `paperCrumpleOverlayRegistered` checks in `global.d.ts` + consumers | ~5 | Same |
| `useTransitionNavigator` `useState(false)` for `isExiting` | 3 | `isExiting` is now permanently `false`; can become a plain `const` |

Removing these unblocks Phase 1 and shrinks the JS bundle by ~50KB.

---

## 2. Visual audit by route

### 2.1 `/` — `src/app/page.tsx` → `LandingPage` + `Footer`

| # | Issue | Severity |
|---|---|---|
| 1 | **Visual cacophony:** floating neon orbs + radial glow + grid lines + sun scanline + glow-core nebula all compete with the headline. | 🔴 |
| 2 | **Hero is information-poor:** one title, one paragraph, one CTA. No value props, no "what's in the box", no stats (109 skills, 12 categories, 9 platforms). | 🔴 |
| 3 | **Evolution timeline hides 3 of 4 stages** behind a horizontal scroll-pinning interaction that first-time desktop visitors don't see. | 🟠 |
| 4 | **SandboxSection is 50vh of mock IDE** with 4 themes × 4 stages = 16 combinations of noise for a first-time visitor. | 🟠 |
| 5 | **No skill preview on home** — user must click "Thư viện Kỹ năng" to see what they're getting. | 🟡 |

### 2.2 `/skills` — `src/components/catalog/SkillCatalogClient.tsx`

| # | Issue | Severity |
|---|---|---|
| 1 | **SkillRow looks like CLI output**, not a content card. Whole row uses `font-mono`, 11px, slate-500. Intimidating for new visitors. | 🔴 |
| 2 | **No "Featured Skills" section** even though `featured: true` exists in the frontmatter schema. | 🟠 |
| 3 | **No visual differentiation by category** — every skill looks identical; no icon, no category color tag. | 🟠 |
| 4 | **Filter label "SOURCES"** is ambiguous; "PROVIDER" or "PLATFORM" would be clearer. | 🟠 |
| 5 | **No tag filtering visible** — skills have 3–5 tags but the user can't filter on them. | 🟡 |
| 6 | **No "Recently updated" or "Trending"** curated strip. | 🟡 |

### 2.3 `/skills/[slug]` — `src/components/detail/SkillDetailClient.tsx`

| # | Issue | Severity |
|---|---|---|
| 1 | **Hero is too busy:** gradient bg + glow orbs + breadcrumb + huge H1 + 2 buttons. Every element has its own backdrop-blur, shadow, gradient, border. | 🔴 |
| 2 | **No visual identity for the H1** — the title is just a large gradient text. The category color is used to tint the gradient bg but there is no category icon. | 🔴 |
| 3 | **Related skills cards are generic** — no category icon, no complexity badge, no platform chips. | 🟠 |
| 4 | **TOC contrast is too subtle** — `text-muted` vs `accent-primary` differ by only a few units. | 🟠 |
| 5 | **Code blocks have no language label, no line numbers**, and the copy button is hover-only (low discoverability). | 🟡 |
| 6 | **Reading progress bar at top is 1px** — practically invisible. | 🟡 |

### 2.4 `/about` — `src/components/about/AboutClient.tsx`

| # | Issue | Severity |
|---|---|---|
| 1 | **"MISSION BRIEFING / WHITEPAPER"** badge is overblown for an about page. | 🟠 |
| 2 | **"PARADIGM 2.6"** in the card footer is an internal version that leaks to the user. | 🟠 |
| 3 | **"VERIFIED ARCHITECTURE" / "100% PASSED"** is self-promotional copy without real numbers (109 skills, N contributors, etc.). | 🟠 |
| 4 | **Interactive Agent Paradigm block** is purely static cards — would benefit from a 1-line animation or screenshot. | 🟡 |

### 2.5 Cross-cutting issues

1. **`font-mono` is used everywhere** — breadcrumb, buttons, category labels, sidebar, status text, footer. Site reads more like a terminal than documentation.
2. **Color tokens exist but aren't enforced** — components bypass them with `text-slate-500`, `bg-emerald-50`, etc. Design drift.
3. **No theme toggle.** Users can't pick. This is a basic expectation for any modern technical site.
4. **Loading skeletons are generic** — `loading.tsx` files are just `animate-pulse` boxes with no visual identity.
5. **Footer is sparse** — no newsletter signup, no social icons, no GitHub stars, no community links.
6. **Every skill page shares the same OG image** — `og-skills-generic.jpg` referenced in `sitemap.ts` / `generateMetadata`, not yet generated.

---

## 3. Competitive research

### 3.1 Direct / adjacent references

| Site | What to borrow | What **not** to copy |
|---|---|---|
| Anthropic Skills (`docs.claude.com/en/docs/agents-and-tools/agent-skills/overview`) | Editorial hero, no animations, type hierarchy | Plainness can feel cold for a non-Anthropic product |
| LobeHub Skills (`lobehub.com`) | Card grid 3–4 columns, category icon + count | Card-heavy can feel like a marketplace |
| Vercel Design | Whitespace, subtle animations, monospace only for code | N/A |
| Linear | Premium SaaS feel, dark/light toggle, custom icons | App-oriented — too dense for documentation |
| Stripe Docs | Hierarchical TOC, strong typography, code block polish | Stripe-blue brand is strong; copying the color clashes with our violet |
| promptslab / awesome-chatgpt-prompts | Table layout, SEO-friendly | Pure markdown — too raw for a polished site |

### 3.2 Patterns to adopt

- **Hierarchical TOC with dot indicators** → skill detail sidebar
- **Sticky scroll progress** → detail page top
- **Hover-driven card lift** → skill cards
- **Featured strip on top of catalog** → home → catalog transition
- **Cmd+K search modal** → site-wide power-user affordance
- **Light/dark theme toggle** → user choice
- **Animated number counters** → home hero stats

### 3.3 Patterns to avoid

- ❌ Heavy WebGL backgrounds (Luma, Runway) — site becomes heavy, drop frames on mobile
- ❌ Sticker emoji + rainbow gradients everywhere (Hacker News "AI slop" backlash)
- ❌ Auto-play hero video / animation — first impression should be static and loadable

---

## 4. Strategic principles

Every visual decision must satisfy **≥ 3 of 5**:

1. **Documentation-first** — skills are documents, not SaaS. Each skill must be readable, copyable, and applicable.
2. **Calm over spectacular** — a 200KB static site beats a 2MB "wow" site that drops frames.
3. **Bilingual symmetry** — VI and EN must layout identically. No language is visually privileged.
4. **Performance budget** — FCP < 1.5s, LCP < 2.5s, TTI < 3s on 4G mobile. JS bundle < 200KB gzipped.
5. **Accessible by default** — contrast AA (4.5:1), full keyboard nav, respect `prefers-reduced-motion`.

---

## 5. Phased roadmap

### Phase 1 — Foundation · 2–3 weeks · low risk, high leverage

**Goal:** clean up dead code, establish a single theme, fix the most jarring inconsistencies.

#### 1.1 Remove dead transition code

- `DELETE` `src/components/ui/PaperCrumpleOverlay.tsx` (553 LOC, unused)
- `DELETE` `__transition` reads in `SkillDetailClient.tsx` (L218–227)
- `DELETE` `canvas-pause` / `canvas-resume` listeners in `MeshGridBackground.tsx` (~30 LOC)
- `DELETE` `paperCrumpleOverlayRegistered` references in `global.d.ts`
- `useTransitionNavigator`: collapse `useState(false)` for `isExiting` to a plain `const` (the hook is effectively a stable `navigateTo` wrapper)
- **Impact:** ~700 LOC removed, ~50KB JS bundle shrink, faster build

#### 1.2 Pick one visual identity

**Recommendation:** **"Luminous Light"** — the current `/skills` aesthetic. Reasons:

- More accessible (contrast, readability) for long-form content
- More professional / less gimmicky for a documentation site
- Already 60% of the site (catalog, about) — fewer files to change
- Light theme photographs better for OG images and screenshots

Tasks:

- Refactor `Header` to drop the `isLightThemePage` branch — render one style everywhere
- Drop the `isLight` prop on `Footer`
- Restructure `globals.css` to make light tokens the primary system; keep dark tokens for the detail page and home sections that need contrast
- `MeshGridBackground`: accept an optional `theme: "light" | "dark"` prop and adjust particle colors accordingly

#### 1.3 Restrict `font-mono` to where it belongs

- **Use mono for:** code, command, filename, version, env var
- **Do not use mono for:** breadcrumb, button label, category label, status text, card metadata
- Audit every `font-mono` class, swap to `font-sans` for UI labels
- Keep Inter as primary; JetBrains Mono only in code contexts

#### 1.4 Add a theme toggle (light / dark / system)

- Toggle in `Header` (sun/moon icon)
- Persist in `localStorage`
- Default to `prefers-color-scheme`
- Coordinate with `LanguageContext` or extract a new `ThemeContext`
- **Impact:** power users can use the whole site in dark; new users get the Luminous default

### Phase 2 — Content discovery · 3–4 weeks · medium risk, high value

**Goal:** make the catalog and detail pages information-rich and easy to navigate.

#### 2.1 Featured + Recent strips

- Two horizontal-scroll strips at the top of `/skills`:
  - **"Featured"** — 5–7 skills with `featured: true`
  - **"Recently updated"** — 5 skills with newest `lastVerified`
- Each strip has prev/next arrow buttons, max 30vh
- "See all" link filters to just that strip
- **Impact:** first impression of catalog is no longer a flat 109-row list

#### 2.2 SkillCard grid

Replace the row-based list with a **2-column card grid** on desktop, 1 column on mobile. Each card:

- **Top stripe:** 1–2px in `CATEGORIES[id].color`
- **Top-left:** category icon (from `CATEGORIES[id].icon`)
- **Title:** command, mono, 14–16px
- **One-liner:** 2 lines max, slate-600, 13–14px
- **Bottom row:** platform chips (max 3 + overflow count), complexity dot (🟢🔵🟠🔴), language tag
- **Hover:** card lift 2px, cursor-tracking gradient border (the existing `HologramCard` is close — adapt it)

#### 2.3 Search & filter overhaul

- **Larger, more prominent search bar** below page title, 60–80% width
- **Cmd+K** modal revival — global search powered by Fuse.js index, one row per skill with command + one-liner
- **Filter chips (multi-select):**
  - Categories (12)
  - Platforms (9)
  - Complexities (4)
  - Top 20 tags
  - Providers (Antigravity / Minimax)
- **Empty state** illustrated with "Try different keywords" + suggested searches
- **Result count + sort** — "12 of 109 skills", sortable by name / recent / featured

#### 2.4 Tag pages

- Each tag in `tags-whitelist.json` → `/tags/[tag]`
- Lists all skills with that tag
- SEO: per-tag title/description
- `noindex` for tag pages with < 5 skills (thin-content protection)
- **Impact:** SEO surface area goes from 109 → ~500+ indexed pages

### Phase 3 — Polish & delight · 3–4 weeks · medium-high risk, branding

**Goal:** premium feel, strong brand identity, real social proof.

#### 3.1 Home redesign

5 lean sections:

1. **Hero (50vh)** — static CSS gradient (no canvas), large headline with 1–2 gradient highlight words, subheadline, 2 CTAs ("Khám phá Skills" + "Tìm hiểu thêm"), animated stat counters ("109 Skills · 12 Categories · 9 Platforms · 2 Languages")
2. **Featured Skills carousel** — auto-scrolling strip of 6–8 cards, show don't tell
3. **How it works** — 3 columns: 01 Browse → 02 Copy → 03 Apply
4. **Live preview** — embed 1 skill (`/typescript-strict`) as a 2-pane editor (code + agent output), simpler than current Sandbox
5. **Footer extended** — newsletter signup, community links, GitHub stars

#### 3.2 Detail page polish

- **Hero simplified:** full-width 4px category color band (replaces the gradient bg), breadcrumb + H1 + 1 paragraph + 2 buttons, no glow orbs
- **Reading progress bar** at top — 2px, color follows category, shows %
- **Metadata sidebar** (right or inline): category chip + icon, complexity dot, platform chips, tag chips (clickable → `/tags/[tag]`), last-verified date
- **Code block upgrade:** language label top-right, line numbers in left gutter, persistent copy button top-right, theme switcher (light/dark, follows site theme)
- **TOC:** indentation dots, current section bolder

#### 3.3 Social proof & trust signals

- **GitHub stars badge** in `Header`, fetched server-side, cache 1h
- **"Last updated X days ago"** per skill (relative time, derived from `lastVerified`)
- **Contributor count** on About
- **Per-skill Open Graph images** via `next/og` `ImageResponse` at `/og/[slug]/route.tsx`
- **Expand JSON-LD:** add `BreadcrumbList`, optional `FAQPage` if a skill has a FAQ section

#### 3.4 Motion library

Create `src/components/motion/` with reusable wrappers around Framer Motion:

- `FadeIn`, `StaggerList`, `HoverLift`, `MagneticCursor`, `TextReveal`
- Consistent easing curves (extend `globals.css` `--ease-*` tokens)
- Respect `prefers-reduced-motion` globally

#### 3.5 Home illustration

Replace the canvas particle + glow orb backgrounds with a bespoke SVG:

- **Option A:** "Library shelves with neon-tinted books" — 109 spines, each = 1 skill
- **Option B:** "Bento grid" of skill cards floating in space
- **Option C:** CSS-only 3D isometric stack of cards
- **Fallback:** CSS-only if artist commission isn't possible

---

## 6. File-by-file change list

| File | Phase | Action |
|---|---|---|
| `src/components/ui/PaperCrumpleOverlay.tsx` | 1.1 | **DELETE** |
| `src/components/ui/CyberpunkDynamicBackground.tsx` | 3.1 | **DELETE** (after Hero moves to CSS) |
| `src/components/ui/SandboxDynamicBackground.tsx` | 3.1 | **DELETE** (after SandboxSection simplifies) |
| `src/components/ui/MeshGridBackground.tsx` | 1.1, 1.2, 1.4 | Remove `canvas-pause/resume` listeners; add `theme` prop |
| `src/components/layout/Header.tsx` | 1.2, 1.4, 3.3 | Single theme; add dark/light toggle; add GitHub stars badge |
| `src/components/layout/Footer.tsx` | 1.2, 3.1 | Remove `isLight` prop; add newsletter, social, stars |
| `src/context/LanguageContext.tsx` | 1.4 | Co-host theme or extract `ThemeContext` |
| `src/hooks/useTransitionNavigator.ts` | 1.1 | Simplify (drop `useState`, keep `navigateTo`) |
| `src/types/global.d.ts` | 1.1 | Remove `TransitionState` interface |
| `src/app/globals.css` | 1.2, 1.3 | Light tokens primary; restrict `font-mono` usage; expand motion tokens |
| `src/components/landing/HeroSection.tsx` | 3.1 | Static CSS bg; remove `CyberpunkDynamicBackground` import |
| `src/components/landing/EvolutionSection.tsx` | 3.1 | Keep (or simplify) — works well |
| `src/components/landing/SandboxSection.tsx` | 3.1 | Simplify to 1 demo |
| `src/components/landing/StageGraphics.tsx` | 3.1 | Keep; possibly simplify |
| `src/components/catalog/SkillCatalogClient.tsx` | 2.1, 2.2, 2.3 | Featured strip, card grid, search overhaul |
| `src/components/detail/SkillDetailClient.tsx` | 1.1, 3.2 | Remove dead `__transition` useEffect; hero simplify; metadata sidebar; code block upgrade |
| `src/components/about/AboutClient.tsx` | 2.x | Tone down self-promotion; add real numbers |
| **NEW** `src/components/motion/` | 3.4 | Motion library |
| **NEW** `src/components/ui/SkillCard.tsx` | 2.2 | Card component |
| **NEW** `src/components/ui/Tag.tsx`, `Platform.tsx`, `Complexity.tsx` | 2.2 | Chip components |
| **NEW** `src/components/ui/SearchModal.tsx` | 2.3 | Cmd+K modal |
| **NEW** `src/components/ui/ThemeToggle.tsx` | 1.4 | Theme switcher |
| **NEW** `src/app/tags/[tag]/page.tsx` | 2.4 | Tag landing pages |
| **NEW** `src/app/og/[slug]/route.tsx` | 3.3 | Dynamic OG image generator |

---

## 7. Effort & impact summary

| Phase | Effort | Risk | Expected impact |
|---|---|---|---|
| Phase 1 — Foundation | 2–3 weeks | Low | Medium (clean foundation, fix inconsistencies) |
| Phase 2 — Content discovery | 3–4 weeks | Medium | High (much better content discovery) |
| Phase 3 — Polish & delight | 3–4 weeks | Medium-High | High (premium feel, brand) |
| **Total** | **8–11 weeks** | — | — |

---

## 8. Success metrics

| Metric | Current (estimated) | Target after Phase 3 |
|---|---|---|
| Lighthouse Performance | 65–75 | 90+ |
| LCP (mobile 4G) | 3–4s | < 2s |
| JS bundle (gzipped) | ~600KB | < 200KB |
| Bounce rate (home → /skills) | unknown | 60%+ |
| Search usage rate | unknown | 30%+ |
| Avg skills viewed per session | unknown | 5+ |
| Mobile usability score | 80 | 95+ |
| Accessibility (axe) | unknown | 0 critical issues |

---

## 9. Risk register

| Risk | Likelihood | Mitigation |
|---|---|---|
| Team comfortable with dark theme pushes back on light default | Medium | A/B test; keep dark mode toggle for power users |
| Removing PaperCrumple loses the "wow" feature marketing referenced | Medium | Document rationale in this file, update `README.md`, communicate in release notes |
| Featured strip needs admin curation to stay fresh | Low | Auto-derive from `lastVerified`; manual override only for `featured: true` |
| Tag pages risk thin-content Google penalty | Low | `noindex` for tag pages with < 5 skills; consolidate similar tags |
| 3D-ish home illustration needs artist commission | Medium | Fallback to CSS-only bento grid |

---

## 10. Quick wins (1 week) — start here

Five concrete deletions / refactors that need no design decision and pay off immediately:

1. **Delete `src/components/ui/PaperCrumpleOverlay.tsx`** — 553 LOC, not mounted
2. **Delete `__transition` reads** in `SkillDetailClient.tsx` (L218–227) and `MeshGridBackground.tsx` (~30 LOC)
3. **Drop `isLightThemePage` branching in `Header`** — render one style, simpler code
4. **Replace 4-stage `SandboxSection` with 1 short demo** — saves ~400 LOC of state machine + terminal themes
5. **Delete `CyberpunkDynamicBackground.tsx`** (after Hero moves to CSS gradient)

**Combined:** ~1,200 LOC of dead or low-value code removed, smaller bundle, faster build, no design decision required.

---

## 11. Closing position

The project is mid-pivot: the WebGL identity is gone, but the visual system was designed to support it. We have a one-phase window to **pick a new identity** before more code is written on top of the old assumptions.

Recommended order:

1. **Phase 1 → quick wins** (this week)
2. **Phase 1 → theme unification** (week 2)
3. **Phase 2 → Featured + Search** (weeks 3–5)
4. **Phase 3 → Home redesign** last (weeks 6–8), because home is the most visible surface and benefits from everything else being stable

Every visual decision from here on should answer one question first: **"Does it help the user understand and apply a skill faster?"** — if not, cut.
