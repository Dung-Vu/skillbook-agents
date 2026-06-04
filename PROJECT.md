# Project: Skills Refactoring and Standardization

## Architecture
- **Target Files**: 109 skills in `content/skills/` (218 markdown files in total: 109 Vietnamese `.md` files and 109 English `.en.md` files).
- **Modification Scope**: Clean and refine descriptions and explanations to make them concise (maximum 3-4 bullet points or short paragraphs per H2 section).
- **Preservation Scope**:
  - Keep frontmatter intact.
  - Keep core technical instructions and prompt guidelines intact.
  - Keep code blocks, examples, and config files intact.
- **Verification Semantics**:
  - `npm run validate:skills` must pass 100%.
  - `npm run build` must pass 100%.
  - `npx playwright test` must pass 100% (17/17 tests).

## Milestones
| # | Name | Scope | Dependencies | Status |
|---|---|---|---|---|
| 1 | Setup & PROJECT.md | Place PROJECT.md at root | None | DONE |
| 2 | Milestone A (Batch 1) | Refactor skills 1 - 20 (`ai-agents-architect` to `dbsnp-database`) | M1 | DONE |
| 3 | Milestone B (Batch 2) | Refactor skills 21 - 42 (`deep-research-agent` to `image-craft`) | M1 | DONE |
| 4 | Milestone C (Batch 3) | Refactor skills 43 - 64 (`industry-research-report-writer` to `nano-banana-pro`) | M1 | DONE |
| 5 | Milestone D (Batch 4) | Refactor skills 65 - 85 (`ncbi-sequence-fetch` to `science-skills-common`) | M1 | DONE |
| 6 | Milestone E (Batch 5) | Refactor skills 86 - 109 (`seo-geo-optimization-expert` to `x-link-reader`) | M1 | DONE |
| 7 | Milestone F (Final Validation) | Global verification (validate, build, playwright) | M2, M3, M4, M5, M6 | DONE |

## Interface Contracts
### Vietnamese Skill File Structure (`*.md`)
- `## 📖 Tại Sao Cần Skill Này?`
- `## ⚙️ Cách Hoạt Động`
- `## 🚀 Cách Sử Dụng`
- `## 💡 Kịch Bản Lập Trình Thực Tế`
- `## ⚠️ Lưu Ý & Gotchas`

### English Skill File Structure (`*.en.md`)
- `## 📖 Why Do We Need This Skill?`
- `## ⚙️ How It Works`
- `## 🚀 How to use`
- `## 💡 Real-World Examples / Scenarios`
- `## ⚠️ Gotchas and notes`
