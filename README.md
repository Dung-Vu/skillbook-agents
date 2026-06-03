# Skillbook Agents

**Bách khoa toàn thư về AI Agent Skills** — một bộ sưu tập gồm **109 bộ kỹ năng** (instruction packages) chuẩn hóa, song ngữ **Tiếng Việt + English** (218 file Markdown), được tuyển chọn và mô tả chi tiết để áp dụng ngay trên các AI Coding Assistant và AI Agent phổ biến hiện nay.

Mỗi skill có một file `.md` (tiếng Việt) và một file `.en.md` (English) với cùng frontmatter, giải thích **tại sao cần kỹ năng này, cách hoạt động, cách sử dụng cho từng platform** (Cursor, Claude Code, Windsurf, Gemini CLI, Copilot, OpenAI Codex, MCP, v.v.) kèm ví dụ thực tế và gotchas.

🌐 Trải nghiệm trực tiếp: deploy trên Vercel (xem `implementation_plan.md`).

---

## Tech Stack

- **Next.js 16** (App Router, SSG) + **React 19**
- **Tailwind CSS 4**
- **GSAP** + `@gsap/react` + **Lenis** (smooth scroll)
- **Framer Motion** (UI transitions, timeline reveals)
- **Fuse.js** (client-side fuzzy search)
- **Zod** (frontmatter schema validation)
- **Playwright** (E2E tests)

## Quick Start

```bash
# 1. Clone
git clone https://github.com/Dung-Vu/skillbook-agents.git
cd skillbook-agents

# 2. Install (pnpm 11+ required)
pnpm install

# 3. Dev server
pnpm run dev
# Mở http://localhost:3000
```

> Repo này dùng **pnpm** (xem `package.json` → `packageManager: "pnpm@11.5.1"`). Nếu bạn quen npm, mọi script trong `package.json` đều chạy được qua cả `npm run` lẫn `pnpm run` — nhưng hãy dùng pnpm để tận dụng content-addressable store.

## Scripts

| Lệnh | Mô tả |
|---|---|
| `pnpm run dev` | Dev server (host `0.0.0.0`, port 3000). |
| `pnpm run build` | Validate skills rồi `next build` (production). |
| `pnpm run start` | Chạy production server sau khi build. |
| `pnpm run lint` | ESLint toàn repo. |
| `pnpm run test:e2e` | Playwright E2E (18 test cases, 5 spec files). |
| `pnpm run validate:skills` | Validate frontmatter + H2 structure cho 109 VI + 109 EN. |
| `pnpm run fix:skills` | Auto-fix các lỗi frontmatter thường gặp. |
| `pnpm run new:skill` | Scaffold một skill mới (tạo `.md` + `.en.md` + frontmatter mẫu). |

## Repository Layout

```
content/skills/        109 skill .md (VI) + 109 .en.md (EN)
scripts/               validate-skills, autofix-skills, new-skill
src/app/               App Router (skills, providers, about, changelog, 404)
src/components/        UI components (Header, Footer, layout, dynamic backgrounds)
src/lib/               schema (Zod), client helpers, tags whitelist
tests/e2e/             Playwright spec files
docs/                  (sẽ di chuyển các file .md từ root vào đây trong task sau)
```

## Contributing

Xem **[CONTRIBUTING.md](./CONTRIBUTING.md)** để biết:
- Schema frontmatter bắt buộc (12 categories, 9 platforms, provider `antigravity`/`minimax`)
- Quy trình thêm skill mới (gồm 2 H2-styles: Antigravity 5-H2 và Minimax 4-H2)
- Quy trình chạy validate + lint + test trước khi PR

## Architecture

Xem **[PROJECT.md](./PROJECT.md)** để biết kiến trúc hệ thống, milestones R1–R5, code layout.

## Testing

Xem **[TEST_INFRA.md](./TEST_INFRA.md)** để biết triết lý kiểm thử, 18 ca E2E phân bổ trên 5 spec files, và Tier 1–4 coverage.

## History

Xem **[implementation_plan.md](./implementation_plan.md)** cho nhật ký triển khai 8 phase (R1–R5 core + 3 phase mobile/responsive follow-up).
