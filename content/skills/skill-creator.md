---
category: workflow-orchestration
command: /skill-creator
complexity: advanced
description: >-
  Khởi tạo các kỹ năng Antigravity mới tuân thủ tiêu chuẩn Luminous. Hướng dẫn
  Agent xác định nền tảng (shell command router) và cấu trúc thư mục chứa
  `SKILL.md` kèm theo các script Python chạy độc lập bằng `uv`.
featured: false
lastVerified: '2026-06-03'
oneLiner: Tạo mới kỹ năng Antigravity theo chuẩn Luminous với CLI và scripts hỗ trợ.
platforms:
  - universal
  - cursor
  - windsurf
  - claude-code
  - mcp
provider: minimax
relatedSkills: []
seoDescription: >-
  Cách tạo một Kỹ năng Antigravity mới chuẩn Luminous. Cấu trúc thư mục, viết
  script tương thích uv, chạy lint và đánh giá hiệu năng.
seoTitle: Skill Creator - Minimax Skill for AI Agents
slug: skill-creator
sourceAuthor: Minimax
sourceUrl: ''
tags:
  - skill
  - scaffold
  - mavis
  - luminous
title: Skill Creator
---

## 📖 Tại Sao AI Agent Của Bạn Cần Kỹ Năng Này?

Để AI Agent hoạt động hiệu quả lâu dài trong một dự án, nó cần khả năng tự động hóa và đóng gói các quy trình làm việc lặp đi lặp lại thành các Kỹ năng (Skills) tiêu chuẩn. Kỹ năng này cung cấp cấu trúc Luminous Standard để Agent tạo ra các chỉ dẫn prompt chuyên nghiệp kèm theo script Python độc lập để mở rộng thư viện năng lực của Mavis.

---

## ⚙️ Cơ Chế Hoạt Động & Quy Trình Tư Duy

Quy trình tạo kỹ năng mới:
1. **Kiểm tra trùng lặp**: Liệt kê các kỹ năng hiện có qua `list-skills` để tránh tạo trùng lặp.
2. **Xác định phạm vi**: Quyết định lưu kỹ năng ở cấp Người dùng (`~/.mavis/skills`), Agent (`~/.mavis/agents/...`), hay Dự án (`.harness/skills/`).
3. **Thiết kế & Tạo file**: Tạo tệp `SKILL.md` theo khung chuẩn, viết các script bổ trợ trong thư mục `scripts/` sử dụng định dạng PEP 0723.
4. **Chạy linter**: Thực thi công cụ kiểm tra `lint-skill.js` để đảm bảo định dạng markdown và frontmatter hoàn hảo.
5. **Đánh giá (Eval)**: Chạy so sánh hiệu năng chạy thử giữa Agent có kỹ năng mới và Agent sử dụng prompt thô (baseline).

Sơ đồ quy trình:
```
[Quy trình cần đóng gói] ➔ 🔍 [Kiểm tra trùng lặp] ➔ 📁 [Thiết lập cấu mục & viết SKILL.md]
                              ➔ 🧹 [Chạy lint-skill.js] ➔ 🧪 [Chạy thử nghiệm so sánh (Eval)]
```

---

## 🚀 Bộ Quy Tắc Chỉ Dẫn Cho Agent (Prompt Guidelines)

```markdown
# QUY TẮC TẠO KỸ NĂNG MỚI
- **Quy chuẩn Luminous**: File `SKILL.md` phải tuân thủ đúng cấu trúc phân mục quy định, mô tả kích hoạt ngắn gọn trong frontmatter.
- **Script PEP 0723**: Mọi script Python đi kèm phải khai báo dependencies ở đầu tệp để tương thích với `uv run`.
- **Bắt buộc vượt qua linter**: Không được phép bàn giao kỹ năng nếu chưa chạy linter cục bộ và đạt kết quả xanh.
- **Không nhúng shell cụ thể**: Mọi câu lệnh shell hệ thống phải được tách biệt hoàn toàn khỏi thân tệp `SKILL.md`, chuyển vào tệp tham chiếu nền tảng.
```

---

## ⚠️ Cảnh Báo Vận Hành & Mẹo Tối Ưu (Developer Gotchas)

* **Phình to Prompt (Prompt Bloat)**: Không đưa các phần giải thích lý thuyết dài dòng hoặc mã nguồn ví dụ khổng lồ vào tệp `SKILL.md`. Hãy chuyển các tài liệu này vào thư mục `references/`.
* **Bỏ qua bước Eval**: Tạo kỹ năng mà không chạy thử nghiệm so sánh với baseline sẽ dễ dẫn đến việc sinh ra các chỉ dẫn prompt không thực tế hoặc làm suy giảm khả năng suy luận của mô hình.
