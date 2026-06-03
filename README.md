# Skillbook Agents

**Bách khoa toàn thư về AI Agent Skills** — một bộ sưu tập gồm **109 bộ kỹ năng** (instruction packages) chuẩn hóa, song ngữ **Tiếng Việt + English** (218 file Markdown), được tuyển chọn và mô tả chi tiết để áp dụng ngay trên các AI Coding Assistant và AI Agent phổ biến hiện nay.

Mỗi skill có một file `.md` (tiếng Việt) và một file `.en.md` (English) với cùng frontmatter, giải thích **tại sao cần kỹ năng này, cách hoạt động, cách sử dụng cho từng platform** (Cursor, Claude Code, Windsurf, Gemini CLI, Copilot, OpenAI Codex, MCP, v.v.) kèm ví dụ thực tế và gotchas.

🌐 Xem trực tiếp: deploy trên Vercel.

---

## Tech Stack

- **Next.js 16** (App Router, SSG) + **React 19**
- **Tailwind CSS 4**
- **GSAP** + `@gsap/react` + **Lenis** (smooth scroll)
- **Framer Motion** (UI transitions, timeline reveals)
- **Fuse.js** (client-side fuzzy search)
- **Zod** (frontmatter schema validation)
- **Playwright** (E2E tests)

Chi tiết kiến trúc & milestones R1–R5: [docs/architecture.md](docs/architecture.md).

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

> Repo này dùng **pnpm** (`packageManager: "pnpm@11.5.1"`). Mọi script trong `package.json` đều chạy được qua `npm run` lẫn `pnpm run` — nhưng hãy dùng pnpm để tận dụng content-addressable store.

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
docs/                  Architecture, Contributing, Testing, History, Original Requests
scripts/               validate-skills, autofix-skills, new-skill
src/app/               App Router (skills, providers, about, changelog, 404)
src/components/        UI components (Header, Footer, layout, dynamic backgrounds)
src/lib/               schema (Zod), client helpers, tags whitelist
tests/e2e/             Playwright spec files
```

## Documentation

- [Architecture & Milestones](docs/architecture.md) — stack, R1–R5, code layout
- [Contributing](docs/contributing.md) — schema, 2-H2 providers, quy trình PR
- [Testing](docs/testing.md) — triết lý kiểm thử, 18 ca E2E, Tier 1–4 coverage
- [History](docs/history.md) — nhật ký triển khai 8 phase (R1–R5 + 3 follow-up)
- [Original Requests](docs/original-requests.md) — log raw yêu cầu gốc từ người dùng

## License

Private / All rights reserved. © 2026 Skillbook Agents.
