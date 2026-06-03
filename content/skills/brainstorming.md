---
slug: brainstorming
title: Brainstorming
command: ''
category: reasoning-planning
tags:
  - brainstorming
  - system-design
  - product-spec
  - requirements
complexity: intermediate
platforms:
  - universal
  - cursor
  - windsurf
  - claude-code
  - mcp
featured: false
description: >-
  Kỹ năng bắt buộc trước khi bắt đầu bất kỳ công việc lập trình hoặc phát triển
  sản phẩm nào. Giúp khám phá ý định của người dùng, phân tích yêu cầu và đề
  xuất các phương án thiết kế hệ thống.
oneLiner: Khám phá yêu cầu và thiết kế hệ thống trước khi bắt đầu lập trình.
sourceUrl: ''
sourceAuthor: Minimax
lastVerified: '2026-06-03'
relatedSkills: []
seoTitle: Brainstorming - Minimax Skill for AI Agents
seoDescription: >-
  Kỹ năng tư duy thiết kế và làm rõ yêu cầu hệ thống trước khi triển khai lập
  trình, tránh lãng phí thời gian viết code sai hướng.
provider: minimax
---

## 📖 Tại Sao AI Agent Của Bạn Cần Kỹ Năng Này?

Viết mã nguồn khi chưa làm rõ yêu cầu là nguyên nhân hàng đầu dẫn đến việc phải làm lại từ đầu (rework). Kỹ năng này thiết lập một rào cản bắt buộc Agent phải trao đổi, làm rõ ý định, đề xuất 2-3 giải pháp và viết đặc tả thiết kế (spec) trước khi viết dòng code đầu tiên.

## ⚙️ Cơ Chế Hoạt Động & Quy Trình Tư Duy

Quy trình từ ý tưởng đến đặc tả kỹ thuật:

```
[Idea] -> [Clarifying Questions (One by One)] -> [Propose 2-3 Approaches] -> [Design Doc Generation] -> [Spec Review Loop]
```

1. **Clarify**: Hỏi từng câu hỏi một để làm rõ mục tiêu, ràng buộc.
2. **Propose**: Trình bày các hướng tiếp cận kèm theo ưu/nhược điểm.
3. **Spec Review**: Viết tài liệu đặc tả và chạy qua vòng lặp kiểm duyệt chất lượng nghiêm ngặt.

## 🚀 Bộ Quy Tắc Chỉ Dẫn Cho Agent (Prompt Guidelines)

1. Tuyệt đối KHÔNG viết code hay tạo dự án khi đặc tả thiết kế chưa được người dùng phê duyệt.
2. Chỉ hỏi một câu hỏi làm rõ tại một thời điểm để tránh làm người dùng bị ngợp.
3. Luôn viết tài liệu thiết kế lưu vào thư mục `docs/superpowers/specs/` để làm căn cứ triển khai.

## ⚠️ Cảnh Báo Vận Hành & Mẹo Tối Ưu (Developer Gotchas)

- **Hội chứng 'Dự án này quá đơn giản'**: Ngay cả một ứng dụng nhỏ hay một thay đổi cấu hình cũng cần được brainstorm nhanh để thống nhất các giả định ngầm.
- **Tràn lan câu hỏi**: Tránh hỏi quá nhiều câu hỏi lý thuyết không cần thiết. Đưa ra các gợi ý trắc nghiệm để người dùng dễ chọn lựa.
