---
category: tool-integration
command: /lark-tools
complexity: advanced
description: Giúp bạn tự động hóa các công việc trên Lark và Feishu như lên lịch họp, gửi tin nhắn tự động vào nhóm chat, cập nhật bảng dữ liệu Bitable và quản lý tài liệu.
featured: false
lastVerified: '2026-06-03'
oneLiner: Liên kết và tự động hóa các công việc trên Feishu/Lark.
platforms:
  - universal
  - cursor
  - windsurf
  - claude-code
  - mcp
provider: minimax
relatedSkills:
  - llm-call
  - mavis
  - x-link-reader
seoDescription: >-
  Tích hợp công cụ Feishu/Lark cho AI Agent qua lark-cli. Hướng dẫn xác thực
  OAuth, cấu hình bot và gọi các API Calendar, IM, Base.
seoTitle: Lark Tools - Minimax Skill for AI Agents
slug: lark-tools
sourceAuthor: Minimax
sourceUrl: ''
tags:
  - lark
  - feishu
  - collaboration
  - api
title: Lark Tools
---

## 📖 Tại Sao Cần Skill Này?

Feishu và Lark là các ứng dụng làm việc nhóm phổ biến. Kỹ năng này giúp trợ lý kết nối trực tiếp với tài khoản Lark/Feishu của bạn để tự động làm các việc như nhắc lịch họp, gửi thông báo báo cáo tiến độ vào nhóm chat hoặc tự động cập nhật bảng dữ liệu mà không cần bạn phải làm thủ công.

## ⚙️ Cách Hoạt Động

Quy trình hoạt động:
1. Trợ lý kết nối với hệ thống Lark/Feishu thông qua tài khoản của bạn hoặc tài khoản robot (Bot).
2. Khi bạn yêu cầu (ví dụ "Đặt lịch họp lúc 3h chiều"), trợ lý sẽ kiểm tra thời gian trống của bạn.
3. Trợ lý thực hiện thao tác (tạo lịch hẹn, gửi tin nhắn, điền bảng dữ liệu) và gửi lại thông báo xác nhận.

## 🚀 Cách Sử Dụng

- Kết nối tài khoản Lark/Feishu của bạn bằng cách đăng nhập theo hướng dẫn của trợ lý.
- Bạn có thể ra lệnh bằng ngôn ngữ tự nhiên, ví dụ "Gửi tin nhắn chào mừng thành viên mới vào nhóm Dự án" hoặc "Thêm công việc này vào danh sách việc cần làm trên Lark".
- Luôn kiểm tra quyền truy cập của bot nếu bạn muốn nó làm việc trong một nhóm chat cụ thể.

## 💡 Kịch Bản Lập Trình Thực Tế

### Người dùng:
> "Hãy kiểm tra xem chiều nay tôi có lịch trống nào từ 2h đến 5h không, và tạo một cuộc họp tên 'Đánh giá dự án' vào giờ đó giúp tôi."

### Trợ lý:
> "Tôi đã kiểm tra lịch làm việc trên Lark của bạn:
> 1. Bạn đang trống lịch từ 3h đến 4h chiều.
> 2. Tôi đã tạo thành công cuộc họp 'Đánh giá dự án' vào khung giờ 15:00 - 16:00 hôm nay và gửi lời mời đến các thành viên."

## ⚠️ Lưu Ý & Gotchas

- **Lỗi hết hạn đăng nhập**: Thỉnh thoảng tài khoản của bạn sẽ hết hạn kết nối, bạn chỉ cần đăng nhập lại theo liên kết trợ lý cung cấp.
- **Quyền hạn của robot (Bot)**: Robot cần được thêm vào nhóm chat trước thì mới có thể gửi tin nhắn hoặc đọc thông tin trong nhóm đó.
- **Định dạng tin nhắn**: Feishu/Lark có cách hiển thị tin nhắn riêng, trợ lý sẽ tự động điều chỉnh để tin nhắn hiển thị đẹp mắt nhất.
