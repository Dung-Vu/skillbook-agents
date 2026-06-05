---
slug: openclaw-assistant
title: Openclaw Assistant
command: "/openclaw-assistant"
category: tool-integration
tags:
  - openclaw
  - messenger-bot
  - vps-deployment
  - chat-gateway
complexity: intermediate
platforms:
  - universal
  - cursor
  - windsurf
  - claude-code
  - mcp
featured: false
description: >-
  Chuyên gia cấu hình và vận hành openclaw (clawd.bot). Hỗ trợ cài đặt trên máy
  chủ ảo VPS, kết nối các kênh chat phổ biến (WhatsApp, Telegram, Discord) và xử
  lý sự cố kết nối API.
oneLiner: 'Hướng dẫn cài đặt, cấu hình và vận hành cổng kết nối bot openclaw.'
sourceUrl: ''
sourceAuthor: Minimax
lastVerified: '2026-06-03'
relatedSkills:
  - mini-coder-max
  - web-app-builder
  - tidy-folder
seoTitle: Openclaw Assistant - Minimax Skill for AI Agents
seoDescription: >-
  Cách tích hợp kỹ năng Openclaw Assistant để triển khai bot AI đa kênh trên
  VPS, cấu hình gateway bảo mật và gỡ lỗi kết nối.
provider: minimax
---

## 📖 Tại Sao Cần Skill Này?


Openclaw là một giải pháp mã nguồn mở mạnh mẽ để đưa AI Agent lên các nền tảng chat thực tế, nhưng việc thiết lập VPS, cấu hình biến môi trường, webhook và tích hợp API rất phức tạp với nhiều bước thủ công. Kỹ năng này cung cấp một kho tri thức chuyên sâu để kiểm tra hệ thống, triển khai từng bước và tự động sửa các lỗi phân quyền hoặc kết nối.

## ⚙️ Cách Hoạt Động

Quy trình gỡ lỗi và triển khai:
```
Kiểm tra hiện trạng (health/status) ──> Thiết lập môi trường VPS ──> Kết nối Kênh chat ──> Kiểm tra Bảo mật ──> Vận hành
```
- **Chẩn đoán & Cấu hình**: Quét trạng thái bằng `openclaw doctor` hoặc `clawdbot status --all` và nạp API keys vào `.env`.
- **Kết nối kênh**: Thiết lập cổng kết nối (WhatsApp Web, Telegram Token, Discord Bot Secrets).
- **Bảo mật & Vận hành**: Kiểm tra bảo mật bằng `clawdbot security audit --deep` và khởi chạy qua systemd/Docker.
## 🚀 Cách Sử Dụng


- Luôn yêu cầu kiểm tra hiện trạng hệ thống bằng lệnh `openclaw status` hoặc `openclaw health` trước khi đề xuất bất kỳ thay đổi nào.
- Hướng dẫn người dùng các bước phân quyền tệp tin an toàn, tránh để lộ khóa bảo mật API trong file cấu hình công khai.
- Sử dụng các lệnh kiểm tra cấu hình chính xác và hướng dẫn chi tiết các tham số CLI của `clawdbot`.

## 💡 Kịch Bản Lập Trình Thực Tế


### Nhà phát triển:
> "Hãy hướng dẫn tôi cách thiết lập và sử dụng kỹ năng Openclaw Assistant để Hướng dẫn cài đặt, cấu hình và vận hành cổng kết nối bot openclaw."

### AI Agent (Đã được trang bị Kỹ năng):
> "Tôi đã sẵn sàng. Dưới đây là kịch bản vận hành thực tế cho kỹ năng Openclaw Assistant:
> 1. Thiết lập các thông số cấu hình và tham số đầu vào cần thiết cho hệ thống.
> 2. Thực thi tuần tự các bước xử lý logic và tích hợp theo đúng chỉ dẫn của Openclaw Assistant.
> 3. Kiểm thử đầu ra, tối ưu hóa hiệu năng và cung cấp kết quả hoàn chỉnh."

## ⚠️ Lưu Ý & Gotchas


- **Lộ khóa bảo mật**: Không hiển thị các file cấu hình chứa API key gốc trong log phản hồi cho người dùng.
- **Lỗi cổng mạng (Port collision)**: Chú ý kiểm tra xem cổng mạng mặc định của openclaw có bị chiếm dụng bởi các dịch vụ khác trên VPS trước khi khởi chạy.
