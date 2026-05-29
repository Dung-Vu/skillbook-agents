# Hướng Dẫn Đóng Góp cho Skillbook Agents

Chào mừng bạn đến với **Skillbook Agents**! Đây là dự án nguồn mở nhằm tuyển chọn và chuẩn hóa các bộ kỹ năng (instruction packages) tốt nhất dành cho các AI Coding Assistants và AI Agents. Sự đóng góp của bạn giúp cộng đồng AI xây dựng các Agent thông minh hơn, hiệu quả hơn.

---

## 🎯 Mục Tiêu Dự Án
Dự án tập trung vào việc **tuyển chọn, tối ưu hóa và giải thích chi tiết** các chỉ dẫn (instructions/rules) để AI Agent hiểu rõ **TẠI SAO (WHY)** cần kỹ năng, **CÁCH HOẠT ĐỘNG (HOW)** và **CÁCH DÙNG (USAGE)** trên các nền tảng phổ biến hiện nay.

---

## 🚀 Cách Thêm Mới Một Kỹ Năng

Để thêm một kỹ năng mới vào hệ thống, bạn cần thực hiện theo các bước sau:

### Bước 1: Tạo tệp Markdown
Tạo một tệp tin mới có đuôi mở rộng `.md` trong thư mục `content/skills/`. Tên tệp tin phải sử dụng chữ viết thường, không dấu, phân tách bằng dấu gạch ngang (ví dụ: `self-reflection.md`).

### Bước 2: Khai báo Frontmatter
Đầu mỗi tệp tin Markdown bắt buộc phải khai báo phần Metadata (Frontmatter) nằm giữa cặp ký tự `---`. Interface `SkillFrontmatter` được định nghĩa như sau:

| Trường | Kiểu dữ liệu | Ý nghĩa & Quy định |
| :--- | :--- | :--- |
| `slug` | `string` | ID duy nhất của kỹ năng, bắt buộc phải trùng với tên tệp tin `.md` (không bao gồm đuôi file). |
| `title` | `string` | Tiêu đề hiển thị đầy đủ của kỹ năng (ví dụ: `"Self-Reflection & Self-Correction"`). |
| `command` | `string` | Cú pháp lệnh kích hoạt kỹ năng, **bắt buộc phải bắt đầu bằng dấu `/`** (ví dụ: `"/self-reflection"`). |
| `category` | `string` | Phân loại kỹ năng. Phải thuộc một trong 10 danh mục được hỗ trợ (xem chi tiết bên dưới). |
| `tags` | `string[]` | Mảng các từ khóa liên quan hỗ trợ tìm kiếm mờ (Fuse.js). |
| `complexity` | `string` | Mức độ phức tạp. Giá trị hợp lệ: `"starter"`, `"intermediate"`, `"advanced"`, `"expert"`. |
| `platforms` | `string[]` | Mảng các nền tảng hỗ trợ. Giá trị hợp lệ: `"cursor"`, `"claude-code"`, `"windsurf"`, `"gemini-cli"`, `"copilot"`, `"openai-codex"`, `"universal"`, `"mcp"`. |
| `featured` | `boolean` | Đánh dấu kỹ năng nổi bật hiển thị ở trang chủ (`true` hoặc `false`). |
| `description` | `string` | Mô tả ngắn gọn về tác dụng và chức năng của kỹ năng (tiếng Việt). |
| `oneLiner` | `string` | Mô tả ngắn gọn 1 dòng bằng tiếng Anh phục vụ hiển thị nhanh. |
| `sourceUrl` | `string` | URL liên kết đến mã nguồn gốc hoặc tài liệu tham khảo (nếu có). |
| `sourceAuthor` | `string` | Tên tác giả hoặc tổ chức cung cấp kỹ năng ban đầu. |
| `lastVerified` | `string` | Ngày kiểm chứng kỹ năng hoạt động tốt nhất gần đây (định dạng `YYYY-MM-DD`). |
| `relatedSkills` | `string[]` | Mảng chứa các `slug` của các kỹ năng liên quan có sẵn trong hệ thống để liên kết SEO. |
| `seoTitle` | `string` | Tiêu đề tối ưu hóa tìm kiếm SEO trên Google. |
| `seoDescription` | `string` | Mô tả tóm tắt tối ưu SEO hiển thị trên kết quả tìm kiếm. |

#### Danh sách các `category` hợp lệ:
*   `reasoning-planning` (Reasoning & Planning)
*   `code-engineering` (Code Generation & Engineering)
*   `tool-integration` (Tool Use & Integration)
*   `content-communication` (Content & Communication)
*   `research-analysis` (Research & Analysis)
*   `safety-guardrails` (Safety & Guardrails)
*   `persona-behavior` (Persona & Behavior)
*   `workflow-orchestration` (Workflow & Orchestration)
*   `creative-design` (Creative & Design)
*   `data-knowledge` (Data & Knowledge)

#### Ví dụ Frontmatter chuẩn:
```yaml
---
slug: "self-reflection"
title: "Self-Reflection & Self-Correction"
command: "/self-reflection"
category: "reasoning-planning"
tags:
  - "reasoning"
  - "debugging"
  - "self-correction"
complexity: "advanced"
platforms:
  - "cursor"
  - "claude-code"
  - "windsurf"
  - "universal"
featured: true
description: "Hướng dẫn AI Agent tự kiểm tra kết quả trung gian, phát hiện lỗi sai logic và tự động sửa đổi trước khi trả kết quả cuối cùng cho người dùng."
oneLiner: "Enable AI agents to self-reflect and auto-correct their execution paths."
sourceUrl: "https://github.com/example/self-reflection"
sourceAuthor: "Skillbook Team"
lastVerified: "2026-05-29"
relatedSkills:
  - "error-recovery"
  - "task-decomposition"
seoTitle: "Self-Reflection & Correction Skill for AI Agents"
seoDescription: "Cách cấu hình prompt để AI Agent có khả năng tự kiểm lỗi logic và sửa chữa code."
---
```

---

### Bước 3: Cấu trúc Nội dung Markdown Bắt buộc
Nội dung Markdown bên dưới Frontmatter phải tuân thủ nghiêm ngặt cấu trúc H2 và H3 sau:

1.  **`## 📖 Tại Sao Cần Skill Này?`**
    *   Giải thích lý do kỹ năng này quan trọng.
    *   Chỉ ra các điểm yếu, giới hạn nghiêm trọng nếu AI Agent thiếu kỹ năng này.
2.  **`## ⚙️ Cách Hoạt Động`**
    *   Mô tả chi tiết luồng xử lý hoặc các bước thực hiện bên dưới của kỹ năng dưới dạng danh sách hoặc văn bản phân tích logic.
3.  **`## 🚀 Cách Sử Dụng`**
    *   Bắt buộc chứa các tiêu đề con cấp 3 (`###`) cho mỗi nền tảng tương ứng được liệt kê trong mảng `platforms` của Frontmatter.
    *   Mỗi mục nền tảng phải cung cấp khối mã hướng dẫn cụ thể (ví dụ: file cấu hình `.cursorrules` cho Cursor, hướng dẫn instructions cho Claude Code, v.v.).
    *   Ví dụ:
        *   `### Universal` (Luôn có để áp dụng chung)
        *   `### Cursor (.cursorrules)`
        *   `### Claude Code`
        *   `### Windsurf`
4.  **`## 💡 Ví Dụ Thực Tế`**
    *   Chứa hai phần so sánh trực quan và rõ ràng:
        *   `### ❌ Không có skill` (Minh họa kết quả AI làm sai, sơ sài hoặc ngây thơ).
        *   `### ✅ Có skill` (Minh họa kết quả AI xử lý thông minh, chuyên nghiệp, chính xác).
5.  **`## ⚠️ Lưu Ý & Gotchas`**
    *   Các lưu ý quan trọng khi triển khai thực tế.
    *   Những cạm bẫy (gotchas), giới hạn hoặc hành vi ngoài ý muốn cần phòng tránh.

---

## 🛠️ Quy Trình Chạy Dự Án Cục Bộ

Để chạy thử nghiệm, xây dựng và kiểm tra chất lượng mã nguồn trước khi tạo Pull Request, bạn hãy thực hiện các lệnh sau tại thư mục gốc của dự án:

1.  **Cài đặt các thư viện phụ thuộc (Dependencies):**
    ```bash
    npm install
    ```

2.  **Khởi chạy máy chủ phát triển (Dev Server):**
    ```bash
    npm run dev
    ```
    *Mở [http://localhost:3000](http://localhost:3000) trên trình duyệt để kiểm tra giao diện trực quan.*

3.  **Kiểm tra và sửa lỗi định dạng, kiểu dữ liệu (ESLint & TypeScript Lint):**
    ```bash
    npm run lint
    ```
    *Đảm bảo không có bất kỳ cảnh báo hay lỗi đỏ nào từ hệ thống linter.*

4.  **Biên dịch thử nghiệm (Production Build):**
    ```bash
    npm run build
    ```
    *Next.js sẽ kết xuất tĩnh toàn bộ các trang bao gồm `/changelog`, `/sitemap.xml` và `/robots.txt`. Đảm bảo quá trình compile tĩnh diễn ra thành công không gặp lỗi Hydration.*

5.  **Chạy Playwright End-to-End Tests:**
    ```bash
    npm run test:e2e
    ```
    *Đảm bảo toàn bộ các ca kiểm thử E2E của hệ thống đều vượt qua (PASS) hoàn toàn.*

---

Cảm ơn bạn đã đồng hành đóng góp xây dựng **Skillbook Agents** trở thành một thư viện kỹ năng AI Agent hàng đầu!
