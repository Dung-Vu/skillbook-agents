---
slug: code-review
title: Code Review
command: ''
category: safety-guardrails
tags:
  - code-review
  - code-quality
  - best-practices
  - pull-request
complexity: intermediate
platforms:
  - universal
  - cursor
  - windsurf
  - claude-code
  - mcp
featured: false
description: >-
  Trình đánh giá mã nguồn chuyên sâu giúp nâng cao chất lượng code, khả năng bảo
  trì và tính bảo mật. Phân tích pull request và đưa ra phản hồi cải tiến chi
  tiết theo chuẩn công nghiệp.
oneLiner: Đánh giá chất lượng mã nguồn và đề xuất cải tiến theo chuẩn công nghiệp.
sourceUrl: ''
sourceAuthor: Minimax
lastVerified: '2026-06-03'
relatedSkills: []
seoTitle: Code Review - Minimax Skill for AI Agents
seoDescription: >-
  Quy trình đánh giá mã nguồn toàn diện: kiểm tra tính bảo mật, lỗi logic, tính
  nhất quán về phong cách và đề xuất giải pháp tối ưu.
provider: minimax
---

## 📖 Tại Sao AI Agent Của Bạn Cần Kỹ Năng Này?

Đánh giá mã nguồn thủ công thường dễ bỏ sót các lỗi tiềm ẩn như rò rỉ bộ nhớ, lỗ hổng bảo mật hoặc không tuân thủ phong cách lập trình của dự án. Kỹ năng này cung cấp một checklist đánh giá mã nguồn có cấu trúc để phát hiện lỗi sớm trước khi tích hợp vào nhánh chính.

## ⚙️ Cơ Chế Hoạt Động & Quy Trình Tư Duy

Quy trình phân tích mã nguồn:

```
[Code Diff Input] -> [Syntax & Logic Check] -> [Security & Performance Audit] -> [Style Conformity] -> [Detailed Review Feedback]
```

1. **Static Analysis**: Kiểm tra cấu trúc cú pháp, phát hiện biến chưa dùng, import thừa.
2. **Quality Audit**: Đánh giá độ phức tạp thuật toán, khả năng xảy ra race condition, lỗi rò rỉ bộ nhớ.
3. **Feedback**: Xuất báo cáo đánh giá phân nhóm lỗi rõ ràng kèm mã nguồn mẫu sau khi sửa.

## 🚀 Bộ Quy Tắc Chỉ Dẫn Cho Agent (Prompt Guidelines)

1. Phân loại phản hồi review theo các mức độ nghiêm trọng: `Error` (lỗi cần sửa bắt buộc), `Warning` (cảnh báo rủi ro), và `Suggestion` (đề xuất cải tiến hiệu năng/phong cách).
2. Cung cấp lý do cụ thể tại sao dòng code đó cần cải tiến và kèm theo ví dụ code sửa mẫu sạch hơn.
3. Kiểm tra tính bao phủ của kiểm thử (Test Coverage) cho các đoạn code mới thêm vào.

## ⚠️ Cảnh Báo Vận Hành & Mẹo Tối Ưu (Developer Gotchas)

- **Thiên kiến cá nhân**: Hãy tập trung vào tính đúng đắn, hiệu năng và tính nhất quán của dự án thay vì tranh cãi về sở thích phong cách cá nhân không ảnh hưởng đến logic.
- **Review quá lớn**: Tránh review các pull request khổng lồ chứa hàng ngàn dòng code. Khuyên người dùng chia nhỏ PR để chất lượng review tốt hơn.
