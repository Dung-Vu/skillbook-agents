---
slug: grill-me
title: Grill Me Planning Interview
command: /grill-me
category: reasoning-planning
tags:
  - grill-me
  - interview
  - alignment
  - feedback
  - planning
complexity: starter
platforms:
  - cursor
  - claude-code
  - windsurf
  - gemini-cli
  - universal
featured: true
description: Chế độ phỏng vấn và phản biện đa chiều giúp AI cùng bạn làm rõ mục tiêu, yêu cầu kỹ thuật và kế hoạch trước khi bắt tay vào viết code.
oneLiner: Tương tác phản biện giúp làm rõ yêu cầu và kế hoạch triển khai.
sourceUrl: ''
sourceAuthor: Google DeepMind
lastVerified: '2026-06-01'
relatedSkills:
  - workflow-skill-creator
seoTitle: /grill-me - Planning Interview & Alignment Skill for AI
seoDescription: >-
  Chỉ dẫn chi tiết cách AI Agent vận hành quy trình phỏng vấn phản biện
  /grill-me để làm rõ yêu cầu kỹ thuật và căn chỉnh kế hoạch.
provider: antigravity
---

## 📖 Tại Sao Cần Skill Này?

Khi bạn đưa ra yêu cầu phát triển phần mềm, thông tin ban đầu thường bị thiếu chi tiết hoặc chưa rõ ràng. Kỹ năng `/grill-me` giúp AI chủ động tìm ra các điểm chưa rõ, đặt các câu hỏi ngắn gọn nhưng tập trung, và thống nhất kế hoạch làm việc với bạn trước khi tiến hành viết code để tránh việc phải sửa đi sửa lại nhiều lần.

- **Phát hiện thiếu sót**: Tìm kiếm các lỗ hổng thông tin trong yêu cầu ban đầu (như bảo mật, cách xử lý khi gặp lỗi, luồng đi của dữ liệu).
- **Hỏi đáp thông minh**: Đặt câu hỏi ngắn gọn (chỉ 2-3 câu hỏi mỗi lượt) để cùng bạn tháo gỡ vấn đề thay vì hỏi dồn dập.
- **Thống nhất kế hoạch**: Giúp hai bên hiểu rõ mong muốn của nhau và có kế hoạch triển khai cụ thể trước khi thực thi.

## ⚙️ Cách Hoạt Động

```
Nhận yêu cầu ban đầu ➔ Tìm điểm thiếu sót ➔ Đặt câu hỏi phản biện ➔ Trò chuyện làm rõ ➔ Thống nhất kế hoạch triển khai
```

1. **Quét thông tin**: Đánh giá yêu cầu của bạn đối chiếu với các mô hình phần mềm chuẩn để xem còn thiếu khía cạnh nào.
2. **Đặt câu hỏi**: Chọn ra 2-3 câu hỏi quan trọng nhất để hỏi bạn trong mỗi lượt trò chuyện.
3. **Thống nhất**: Ghi nhận câu trả lời của bạn, đưa ra gợi ý tối ưu và tạo một bản kế hoạch thực hiện hoàn chỉnh sau khi bạn đồng ý.

## 🚀 Cách Sử Dụng

### Quy tắc phỏng vấn phản biện Grill-Me

- **Hỏi đáp từng bước**: Không đặt tất cả câu hỏi trong một lượt phản hồi duy nhất. Hãy chia nhỏ cuộc phỏng vấn thành nhiều vòng trò chuyện, mỗi lượt chỉ hỏi tối đa 2-3 câu hỏi cốt lõi. Lắng nghe phản hồi của người dùng để tùy chỉnh câu hỏi tiếp theo cho phù hợp.
- **Các khía cạnh cần làm rõ**:
  - **Phạm vi (Scope)**: Tính năng nào bắt buộc phải có ngay ở phiên bản đầu tiên, tính năng nào có thể phát triển sau.
  - **Công nghệ (Technology)**: Các công nghệ, ngôn ngữ hoặc thư viện bắt buộc phải dùng (hoặc cần tránh dùng).
  - **Xử lý lỗi (Error Handling)**: Cách hệ thống phản hồi khi xảy ra các trường hợp lỗi ngoài ý muốn.
- **Tạo kế hoạch triển khai**: Chỉ tiến hành viết file kế hoạch hành động chi tiết (`implementation_plan.md`) sau khi người dùng đã xác nhận đồng ý với các phương án giải quyết.

## 💡 Kịch Bản Lập Trình Thực Tế

### Nhà phát triển:
> "Hãy giúp tôi viết code cho một hệ thống quản lý kho hàng."

### AI Agent (Đã được trang bị Kỹ năng):
> "Trước khi viết code, tôi muốn làm rõ một vài điểm thông qua quy trình phản biện `/grill-me` để đảm bảo kết quả đúng ý bạn nhất:
> 1. Bạn muốn quản lý kho hàng dạng đơn giản hay cần theo dõi mã vạch và vị trí chính xác của từng món đồ?
> 2. Hệ thống này có cần kết nối với bên vận chuyển nào có sẵn hay không?
> 3. Khi hàng hóa trong kho sắp hết, hệ thống nên gửi cảnh báo qua email hay chỉ hiển thị trên màn hình?"

## ⚠️ Lưu Ý & Gotchas

- **Tránh câu hỏi nhỏ nhặt**: Chỉ đặt câu hỏi thực sự ảnh hưởng đến kiến trúc hệ thống hoặc logic viết code; tự quyết định các chi tiết nhỏ dựa trên best practices.
- **Phân tích khách quan**: Đưa ra ưu/nhược điểm rõ ràng cho từng phương án để hỗ trợ người dùng quyết định chính xác.
