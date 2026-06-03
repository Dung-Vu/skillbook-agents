---
category: tool-integration
command: /lark-tools
complexity: advanced
description: >-
  Truy cập toàn diện các dịch vụ Feishu/Lark (Lịch biểu, Chat, Công việc,
  Bitable, Tài liệu) thông qua `lark-cli` và API của daemon. Hỗ trợ xác thực
  người dùng OAuth và kết nối bot tự động để gửi tin nhắn hoặc quản lý dữ liệu.
featured: false
lastVerified: '2026-06-03'
oneLiner: Kết nối và thao tác với các dịch vụ Feishu/Lark thông qua dòng lệnh lark-cli.
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

## 📖 Tại Sao AI Agent Của Bạn Cần Kỹ Năng Này?

Kỹ năng này giúp AI Agent tương tác trực tiếp với không gian làm việc doanh nghiệp trên Feishu/Lark. Agent có thể tự động đọc lịch làm việc để tìm giờ trống, kiểm tra danh bạ, gửi thông báo báo cáo tiến độ vào nhóm chat hoặc cập nhật bảng dữ liệu Bitable mà không cần người dùng thao tác thủ công trên ứng dụng.

---

## ⚙️ Cơ Chế Hoạt Động & Quy Trình Tư Duy

Cách thức vận hành:
1. **Kiểm tra công cụ**: Đảm bảo `@larksuite/cli` (lệnh `lark-cli`) đã được cài đặt trên hệ thống.
2. **Phân giải URL Daemon**: Tìm cổng hoạt động động từ tệp `daemon.port` để lấy địa chỉ endpoint.
3. **Kiểm tra liên kết Bot & Auth**: Kiểm tra trạng thái xác thực bằng `lark-cli auth status`. Nếu chưa xác thực, tiến hành khởi động luồng Onboard hoặc OAuth bằng API Daemon.
4. **Gọi lệnh lark-cli**: Chạy các subcommand tương ứng (ví dụ: `calendar +agenda`, `im +messages-send`, v.v.) kèm theo cờ `--as user` hoặc `--as bot` để đọc/ghi dữ liệu.

Sơ đồ luồng:
```
[Yêu cầu Lark] ➔ ⚙️ [Kiểm tra lark-cli & daemon.port] ➔ 🔑 [Xác thực OAuth / Token]
                     ➔ 💻 [Chạy lark-cli subcommand] ➔ 📦 [Nhận JSON & Trả kết quả]
```

---

## 🚀 Bộ Quy Tắc Chỉ Dẫn Cho Agent (Prompt Guidelines)

```markdown
# QUY TẮC SỬ DỤNG LARK-TOOLS
- **Định tuyến nền tảng**: Bắt buộc chọn đúng recipe PowerShell cho Windows hoặc Bash cho macOS/Linux khi thao tác với file và biến môi trường.
- **Xác định rõ định danh**: Dùng `--as user` cho các tài nguyên cá nhân (Lịch, Drive, Task) và `--as bot` cho tin nhắn và sự kiện của ứng dụng.
- **Không viết cứng cổng daemon**: Cổng daemon là động, luôn luôn đọc cổng từ tệp tin `daemon.port` hoặc parse từ `mavis status`.
- **Tránh spam tin nhắn**: Khi gửi tin nhắn qua IM, định cấu hình tần suất hợp lý để tránh bị Feishu chặn vì giới hạn tần suất (rate limiting).
```

---

## ⚠️ Cảnh Báo Vận Hành & Mẹo Tối Ưu (Developer Gotchas)

* **Lỗi 401 / LARK_USER_AUTH_REQUIRED**: Thường xảy ra khi mã OAuth của người dùng hết hạn. Cần chạy `lark-cli auth login --recommend` hoặc yêu cầu cấp quyền scope cụ thể.
* **Đường link Bitable bị sai**: Khi truy cập Bitable, hãy chắc chắn trích xuất đúng `appToken` từ URL trình duyệt và `tableId` thông qua lệnh liệt kê bảng.
* **Định dạng tin nhắn Markdown**: Feishu sử dụng chuẩn Markdown riêng cho chatbot, nếu gửi chuỗi markdown chuẩn thông thường có thể gây lỗi hiển thị tin nhắn trống.
