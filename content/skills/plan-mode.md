---
category: reasoning-planning
command: /plan-mode
complexity: intermediate
description: >-
  Kích hoạt chế độ lập kế hoạch chi tiết trước khi bắt đầu lập trình. Giúp thiết kế cấu trúc hệ thống, đánh giá rủi ro, chuẩn bị kịch bản kiểm thử và xác định tiêu chí hoàn thành rõ ràng.
featured: false
lastVerified: '2026-06-03'
oneLiner: 'Lập kế hoạch chi tiết và chuẩn bị kịch bản kiểm thử trước khi viết code.'
platforms:
  - universal
  - cursor
  - windsurf
  - claude-code
  - mcp
provider: minimax
relatedSkills: []
seoDescription: >-
  Lập kế hoạch phát triển phần mềm chi tiết. Giảm thiểu rủi ro, phân tích kiến
  trúc và xác lập tiêu chí nghiệm thu rõ ràng.
seoTitle: Plan Mode - Minimax Skill for AI Agents
slug: plan-mode
sourceAuthor: Minimax
sourceUrl: ''
tags:
  - planning
  - workflow
  - architecture
  - analysis
title: Plan Mode
---

## 📖 Tại Sao Cần Skill Này?

Khi gặp các yêu cầu lập trình phức tạp, nếu bắt tay vào viết code ngay lập tức, bạn rất dễ đi sai hướng, làm rối cấu trúc phần mềm và mất nhiều công sức để sửa lại sau đó. Kỹ năng này giúp bạn dừng lại một chút để tư duy thiết kế, thảo luận phương án tốt nhất và thống nhất một kế hoạch hành động rõ ràng trước khi viết những dòng code đầu tiên.

---

## ⚙️ Cách Hoạt Động

Quy trình lập kế hoạch diễn ra qua các bước:
```
Nhận yêu cầu ──> Khảo sát mã nguồn hiện có ──> Đề xuất giải pháp tối ưu ──> Tạo file kế hoạch hành động
```

- **Khảo sát**: Xem xét cấu trúc code thực tế trong dự án để hiểu cách hoạt động hiện tại.
- **Đề xuất**: Đưa ra một giải pháp tối ưu duy nhất kèm phân tích ngắn gọn về ưu nhược điểm, thay vì liệt kê quá nhiều phương án mơ hồ để người dùng tự chọn.
- **Tạo kế hoạch**: Ghi lại chi tiết các bước cần làm, cách chạy thử để kiểm tra lỗi và bước tiếp theo để nghiệm thu.

## 🚀 Cách Sử Dụng

- Đề xuất một hướng đi rõ ràng cùng lý do kỹ thuật cụ thể.
- Trao đổi tự nhiên, ngắn gọn và đi thẳng vào vấn đề kỹ thuật thực tế.
- Đảm bảo kế hoạch luôn có phần kịch bản chạy thử để xác minh code hoạt động đúng sau khi sửa đổi.

---

## 💡 Kịch Bản Lập Trình Thực Tế


### Người dùng yêu cầu:
> "Tôi muốn thêm tính năng đăng nhập bằng Google vào trang web hiện tại."

### Trợ lý AI thực hiện:
> "Tôi sẽ hỗ trợ bạn lên kế hoạch thực hiện:
> 1. Khảo sát các file xử lý tài khoản hiện có trong dự án.
> 2. Đề xuất phương án sử dụng thư viện NextAuth vì nó bảo mật và tương thích tốt nhất với code hiện tại của bạn.
> 3. Lập danh sách các file cần sửa đổi và viết kịch bản chạy thử để kiểm tra tính năng đăng nhập sau khi hoàn tất."

## ⚠️ Lưu Ý & Gotchas


* **Vẽ vời quá mức (Over-engineering)**: Tránh thiết kế các mô hình quá phức tạp cho các tác vụ đơn giản. Hãy ưu tiên giải pháp tinh gọn và phù hợp với quy mô dự án.
* **Đoán mò không khảo sát code**: Đề xuất giải pháp lý thuyết mà không mở xem các file code cũ sẽ dễ gây ra tình trạng viết trùng lặp tính năng hoặc xung đột thư viện. Hãy luôn đọc kỹ code cũ trước.
