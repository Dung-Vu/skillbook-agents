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

## 📖 Tại Sao Cần Skill Này?

Đánh giá mã nguồn thủ công thường dễ bỏ sót các lỗi tiềm ẩn như rò rỉ bộ nhớ, lỗ hổng bảo mật hoặc không tuân thủ phong cách lập trình của dự án. Kỹ năng này cung cấp một checklist đánh giá mã nguồn có cấu trúc để phát hiện lỗi sớm trước khi tích hợp vào nhánh chính.

## ⚙️ Cách Hoạt Động

Quy trình phân tích mã nguồn:

```
[Code Diff Input] -> [Syntax & Logic Check] -> [Security & Performance Audit] -> [Style Conformity] -> [Detailed Review Feedback]
```

1. **Static Analysis**: Kiểm tra cấu trúc cú pháp, phát hiện biến chưa dùng, import thừa.
2. **Quality Audit**: Đánh giá độ phức tạp thuật toán, khả năng xảy ra race condition, lỗi rò rỉ bộ nhớ.
3. **Feedback**: Xuất báo cáo đánh giá phân nhóm lỗi rõ ràng kèm mã nguồn mẫu sau khi sửa.

## 🚀 Cách Sử Dụng

1. Phân loại phản hồi review theo các mức độ nghiêm trọng: `Error` (lỗi cần sửa bắt buộc), `Warning` (cảnh báo rủi ro), và `Suggestion` (đề xuất cải tiến hiệu năng/phong cách).
2. Cung cấp lý do cụ thể tại sao dòng code đó cần cải tiến và kèm theo ví dụ code sửa mẫu sạch hơn.
3. Kiểm tra tính bao phủ của kiểm thử (Test Coverage) cho các đoạn code mới thêm vào.

## 💡 Kịch Bản Lập Trình Thực Tế

### Nhà phát triển:
> "Hãy hướng dẫn tôi cách thiết lập và sử dụng kỹ năng Code Review để Đánh giá chất lượng mã nguồn và đề xuất cải tiến theo chuẩn công nghiệp."

### AI Agent (Đã được trang bị Kỹ năng):
> "Tôi đã sẵn sàng. Dưới đây là kịch bản vận hành thực tế cho kỹ năng Code Review:
> 1. Thiết lập các thông số cấu hình và tham số đầu vào cần thiết cho hệ thống.
> 2. Thực thi tuần tự các bước xử lý logic và tích hợp theo đúng chỉ dẫn của Code Review.
> 3. Kiểm thử đầu ra, tối ưu hóa hiệu năng và cung cấp kết quả hoàn chỉnh."

## ⚠️ Lưu Ý & Gotchas

- **Thiên kiến cá nhân**: Hãy tập trung vào tính đúng đắn, hiệu năng và tính nhất quán của dự án thay vì tranh cãi về sở thích phong cách cá nhân không ảnh hưởng đến logic.
- **Review quá lớn**: Tránh review các pull request khổng lồ chứa hàng ngàn dòng code. Khuyên người dùng chia nhỏ PR để chất lượng review tốt hơn.
