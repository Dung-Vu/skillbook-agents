# Project: Skillbook Agents

## Overview
Skillbook Agents là website bách khoa toàn thư về các **AI Agent Skills** — tập hợp **109 bộ kỹ năng** (instruction packages) chuẩn hóa, được tuyển chọn và mô tả chi tiết để có thể áp dụng ngay trên các AI Coding Assistant và AI Agent phổ biến hiện nay. Toàn bộ skill đều có song ngữ **Tiếng Việt + English** (mỗi skill có 1 file `.md` gốc tiếng Việt và 1 file `.en.md` tương ứng, tổng cộng **218 file Markdown** trong `content/skills/`).

## Architecture
- **Stack**: React 19 / Next.js 16, Tailwind CSS 4.
- **Animation / scroll**: GSAP + `@gsap/react` + Lenis.
- **Smooth UI**: Framer Motion.
- **Search**: Fuse.js (fuzzy search client-side qua API `/api/skills`).
- **Content**: Markdown files in `content/skills/` với YAML frontmatter; schema validate bằng Zod (`src/lib/schema.ts`).
- **Validation**: Custom Node script `scripts/validate-skills.ts` chạy trong `pnpm run validate:skills` (chạy trước khi build).
- **Testing**: Playwright (5 spec files, 18 test cases) — xem `TEST_INFRA.md`.

## Milestones

| # | Name | Scope | Dependencies | Status |
|---|------|-------|-------------|--------|
| 1 | R1: Smooth Scroll Fix | Resolve smooth-scroll conflict giữa Lenis và CSS, thêm html attribute, tối ưu GSAP ticker. | None | DONE |
| 2 | R2: Canvas Optimization | Loại bỏ bottleneck của Evolution & Cyberpunk dynamic backgrounds (shadowBlur → Radial Gradients, particle count / distance formula tối ưu). | None | DONE |
| 3 | R3: Sandbox Re-render Isolation | Memoize Canvas backgrounds và sub-components trong Sandbox để tránh React 19 re-render overhead. | None | DONE |
| 4 | R4: ~~Command Palette~~ Searchable Catalog & Provider Pages | Hủy bỏ global Command Palette (Cmd+K) trong cleanup pass `66c2864`; chuyển sang `/skills?search=...` URL query + trang `/providers/[name]`. | M1, M2, M3 | DONE |
| 5 | R5: /about Page Visual & Performance Optimization | Sửa contrast, responsive layout shift, header overlay trên mobile, tối ưu MeshGridBackground canvas lên 60 FPS, verify build + Playwright. | None | DONE |

> **Note:** 5 phase trên tương ứng với commit `a3c1c98`. Sau đó có thêm **7 follow-up optimize** (responsive mobile, slim mobile, detail page polish, v.v.) được document đầy đủ trong `ORIGINAL_REQUEST.md` (các mốc `2026-05-31T08:00:18Z` đến `18:39:20Z`) và phase 6/7/8 trong `implementation_plan.md`.

## Code Layout
- `src/app/globals.css`: Smooth scroll + global cyberpunk theme.
- `src/app/layout.tsx`: Root layout, đăng ký smooth-scroll attribute, providers.
- `src/app/skills/`: Catalog grid, filter, pagination, search via `?search=...`.
- `src/app/skills/[slug]/`: Skill detail page (TOC, related, prev/next nav).
- `src/app/about/`: About page với timeline tương tác (Framer Motion).
- `src/app/changelog/`: Changelog timeline (stagger reveal).
- `src/app/providers/[name]/`: Provider landing pages (antigravity, minimax).
- `src/components/ui/SmoothScroll.tsx`: Lenis + GSAP integration wrapper.
- `src/components/ui/EvolutionDynamicBackground.tsx`: Evolution canvas background.
- `src/components/ui/CyberpunkDynamicBackground.tsx`: Cyberpunk canvas background.
- `src/components/ui/SandboxDynamicBackground.tsx`: Sandbox canvas background.
- `src/components/ui/SandboxSection.tsx`: Sandbox container component.
- `src/lib/schema.ts`: Zod schema cho skill frontmatter (`ALLOWED_CATEGORIES`, `ALLOWED_PLATFORMS`, `SkillFrontmatterSchema`).
- `scripts/validate-skills.ts`: Validate 109 VI + 109 EN files, H2 structure, relatedSkills graph.
- `scripts/autofix-skills.ts`: Auto-fix common frontmatter issues.
- `scripts/new-skill.ts`: Scaffold một skill mới.
- `content/skills/*.md` & `*.en.md`: Source-of-truth skill content.
