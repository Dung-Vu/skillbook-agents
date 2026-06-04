---
slug: feishu-webhook
title: Feishu Webhook
command: ''
category: tool-integration
tags:
  - webhook
  - notifications
  - lark
  - feishu
complexity: starter
platforms:
  - universal
  - cursor
  - windsurf
  - claude-code
  - mcp
featured: false
description: >-
  Tích hợp gửi thông báo tự động vào nhóm Feishu/Lark qua Webhook. Hỗ trợ tin
  nhắn văn bản, văn bản giàu định dạng (Post) và thẻ tương tác (interactive
  cards) phức tạp.
oneLiner: Gửi tin nhắn và thẻ tương tác tự động vào Feishu/Lark nhóm qua Webhook.
sourceUrl: ''
sourceAuthor: Minimax
lastVerified: '2026-06-03'
relatedSkills:
  - ceo-assistant
  - fullstack-dev
  - b2b-lead-generation
seoTitle: Feishu Webhook - Minimax Skill for AI Agents
seoDescription: >-
  Tích hợp Webhook Feishu/Lark để tự động hóa gửi thông báo, báo cáo định kỳ,
  thẻ tin nhắn tương tác kèm nút bấm và dữ liệu trực quan.
provider: minimax
---

## 📖 Tại Sao Cần Skill Này?

Gửi thông báo thủ công hoặc sử dụng tin nhắn văn bản thô sơ làm giảm hiệu suất trao đổi công việc trong đội ngũ. Kỹ năng này cho phép Agent tự động xây dựng các thẻ tin nhắn tương tác (interactive cards) trực quan, đẹp mắt và gửi tự động vào các nhóm chat Feishu/Lark để tối ưu hóa luồng công việc.

## ⚙️ Cách Hoạt Động

Quy trình gửi tin nhắn qua Feishu Webhook:

```
[Trigger Event] -> [Check Environment & URL] -> [Format Message JSON] -> [Image Upload (if any)] -> [POST to Webhook]
```

1. **Validate**: Kiểm tra tính hợp lệ của Webhook URL và token môi trường.
2. **Build**: Thiết lập cấu trúc JSON tin nhắn (text, post, hoặc interactive card) theo đặc tả của Feishu.
3. **Send**: Thực hiện gửi yêu cầu HTTP POST đến webhook và nhận phản hồi xác nhận thành công.

## 🚀 Cách Sử Dụng

1. Luôn sử dụng biến môi trường để lưu trữ Webhook URL và token bảo mật, tuyệt đối không hardcode trong mã nguồn.
2. Định cấu hình xử lý lỗi (error handling) khi gửi yêu cầu HTTP để xử lý trường hợp mạng lỗi hoặc rate limit từ phía Feishu.
3. Khi gửi thẻ tin nhắn (interactive cards), hãy sử dụng công cụ kéo thả thiết kế thẻ của Feishu để tạo cấu trúc JSON chuẩn trước khi lập trình.

## 💡 Kịch Bản Lập Trình Thực Tế

### Nhà phát triển:
> "Hãy hướng dẫn tôi cách thiết lập và sử dụng kỹ năng Feishu Webhook để Gửi tin nhắn và thẻ tương tác tự động vào Feishu/Lark nhóm qua Webhook."

### AI Agent (Đã được trang bị Kỹ năng):
> "Tôi đã sẵn sàng. Dưới đây là kịch bản vận hành thực tế cho kỹ năng Feishu Webhook:
> 1. Thiết lập các thông số cấu hình và tham số đầu vào cần thiết cho hệ thống.
> 2. Thực thi tuần tự các bước xử lý logic và tích hợp theo đúng chỉ dẫn của Feishu Webhook.
> 3. Kiểm thử đầu ra, tối ưu hóa hiệu năng và cung cấp kết quả hoàn chỉnh."

## ⚠️ Lưu Ý & Gotchas

- **Giới hạn tốc độ (Rate Limit)**: Feishu giới hạn số lượng tin nhắn gửi qua Webhook (thường là 100 tin nhắn/phút). Cần cài đặt hàng đợi hoặc cơ chế delay nếu gửi hàng loạt.
- **Lỗi hiển thị thẻ**: Định dạng JSON của thẻ tương tác rất nghiêm ngặt. Chỉ cần sai một thẻ đóng hoặc sai kiểu dữ liệu của một trường, tin nhắn sẽ không thể hiển thị.
