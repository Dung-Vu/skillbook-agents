---
slug: feishu-webhook
title: Feishu Webhook
command: "/feishu-webhook"
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
description: Tự động gửi tin nhắn, thông báo và các thẻ thông tin tương tác vào nhóm chat Feishu hoặc Lark thông qua cơ chế Webhook.
oneLiner: Tự động gửi thông báo và tin nhắn tương tác vào nhóm chat Feishu/Lark.
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

Khi làm việc nhóm, việc nhắn tin thông báo thủ công rất mất thời gian. Kỹ năng này giúp tự động hóa việc gửi tin nhắn, báo cáo, hoặc các thẻ thông tin đẹp mắt có nút bấm trực tiếp vào nhóm chat Feishu/Lark, giúp mọi người cập nhật công việc nhanh chóng.

- **Tiết kiệm thời gian**: Tự động thông báo khi có lỗi, có đơn hàng mới hoặc khi hoàn thành công việc.
- **Trực quan hơn**: Tạo các thẻ thông báo sinh động có kèm ảnh, nút bấm để người nhận tương tác ngay lập tức.
- **Dễ dàng tích hợp**: Kết nối nhanh chóng với hầu hết các hệ thống quản lý công việc hiện nay.

## ⚙️ Cách Hoạt Động

```
Sự kiện kích hoạt → Kiểm tra Webhook URL → Tạo nội dung tin nhắn → Gửi tin nhắn đến nhóm chat
```

1. **Kiểm tra thông tin**: Xác thực xem địa chỉ Webhook của nhóm chat có hoạt động tốt hay không.
2. **Soạn tin nhắn**: Chuẩn bị nội dung tin nhắn dưới dạng văn bản thường hoặc thẻ thông tin có hình ảnh và nút bấm.
3. **Gửi tin nhắn**: Thực hiện gửi tin nhắn tự động đến Feishu/Lark thông qua kết nối mạng.

## 🚀 Cách Sử Dụng

1. Luôn lưu địa chỉ Webhook trong file cấu hình bảo mật, không viết trực tiếp vào mã nguồn để tránh bị lộ thông tin.
2. Thêm chức năng thử lại tự động nếu mạng bị chập chờn hoặc hệ thống Feishu bị quá tải.
3. Sử dụng công cụ thiết kế thẻ trực quan của Feishu để tạo mẫu tin nhắn đẹp trước khi lập trình.

## 💡 Kịch Bản Lập Trình Thực Tế

### Nhà phát triển:
> "Hãy hướng dẫn tôi cách thiết lập và sử dụng kỹ năng Feishu Webhook để gửi tin nhắn tự động vào nhóm."

### AI Agent (Đã được trang bị Kỹ năng):
> "Tôi sẽ giúp bạn tự động gửi tin nhắn qua Feishu Webhook:
> 1. Lấy địa chỉ Webhook từ cấu hình bảo mật của bạn.
> 2. Chuẩn bị nội dung tin nhắn (ví dụ: thông báo hoàn thành nhiệm vụ).
> 3. Gửi tin nhắn đến nhóm chat Feishu và xác nhận kết quả gửi thành công."

## ⚠️ Lưu Ý & Gotchas

- **Giới hạn số lượng**: Feishu giới hạn tối đa khoảng 100 tin nhắn mỗi phút. Nếu gửi quá nhiều tin nhắn cùng lúc, hệ thống sẽ tạm thời chặn.
- **Lỗi định dạng**: Tin nhắn dạng thẻ thông tin đòi hỏi định dạng cấu trúc chuẩn xác. Một lỗi nhỏ về dấu ngoặc cũng khiến tin nhắn không thể hiển thị được.
