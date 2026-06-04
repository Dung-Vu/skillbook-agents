---
category: tool-integration
command: /mcp-cli
complexity: intermediate
description: >-
  Quản lý danh sách, cấu hình và trạng thái của các máy chủ Model Context
  Protocol (MCP) trên hệ thống. Kỹ năng này cho phép Agent xem danh sách server
  hoạt động, thêm/sửa cấu hình server, và lấy cấu hình thô một cách an toàn.
featured: false
lastVerified: '2026-06-03'
oneLiner: Quản lý danh sách và cấu hình các máy chủ Model Context Protocol (MCP).
platforms:
  - universal
  - cursor
  - windsurf
  - claude-code
  - mcp
provider: minimax
relatedSkills:
  - mcp-onboarding
  - mavis
  - skill-creator
seoDescription: >-
  Công cụ quản lý Model Context Protocol (MCP) server qua Mavis CLI. Thêm, sửa,
  đồng bộ hóa skills và gọi trực tiếp tools.
seoTitle: MCP CLI - Minimax Skill for AI Agents
slug: mcp-cli
sourceAuthor: Minimax
sourceUrl: ''
tags:
  - mcp
  - cli
  - configuration
  - tools
title: MCP CLI
---

## 📖 Tại Sao Cần Skill Này?

Model Context Protocol (MCP) là giao thức chuẩn hóa để kết nối mô hình ngôn ngữ lớn với các công cụ ngoài. Agent cần kỹ năng này để cấu hình, kiểm tra trạng thái hoạt động của các server MCP và đồng bộ các công cụ (tools) của server đó thành các kỹ năng (skills) cục bộ.

## ⚙️ Cách Hoạt Động

Quy trình quản lý server MCP:

1. **Tra cứu & Cấu hình**: Chạy `mavis mcp list` xem danh sách server và `mavis mcp add` để ghi cấu hình server mới.
2. **Đồng bộ hóa**: Chạy `mavis mcp sync` để kết nối server, đọc danh sách tool và tự động biên dịch thành file kỹ năng trong Mavis.

```
[Yêu cầu cấu hình MCP] ➔ 📝 [Đọc/Thêm cấu hình mavis mcp add] ➔ 🔑 [Xác thực auth login]
                            ➔ 🔄 [Đồng bộ mavis mcp sync] ➔ 🛠️ [Kích hoạt kỹ năng mcp-<server>]
```

## 🚀 Cách Sử Dụng

```markdown
# QUY TẮC QUẢN LÝ MCP CLI
- **Sử dụng Skill được biên dịch**: Agent không được gọi trực tiếp danh mục công cụ thô của MCP. Phải đồng bộ hóa thành file skill và sử dụng ở session tiếp theo.
- **Bảo mật API Key**: Tuyệt đối không chỉnh sửa thủ công tệp `mcp.json`. Phải dùng lệnh `mavis mcp add` để lưu trữ token an toàn.
- **Luôn kiểm tra lỗi 401 của Matrix**: Nếu gặp lỗi 401 trên server matrix tích hợp, chạy `mavis mcp sync` để khởi động lại tiến trình matrix-mcp-cli với token mới từ bộ nhớ daemon.
```

## 💡 Kịch Bản Lập Trình Thực Tế

### Nhà phát triển:
> "Hãy hướng dẫn tôi cách thiết lập và sử dụng kỹ năng MCP CLI để Quản lý danh sách và cấu hình các máy chủ Model Context Protocol (MCP)."

### AI Agent (Đã được trang bị Kỹ năng):
> "Tôi đã sẵn sàng. Dưới đây là kịch bản vận hành thực tế cho kỹ năng MCP CLI:
> 1. Thiết lập các thông số cấu hình và tham số đầu vào cần thiết cho hệ thống.
> 2. Thực thi tuần tự các bước xử lý logic và tích hợp theo đúng chỉ dẫn của MCP CLI.
> 3. Kiểm thử đầu ra, tối ưu hóa hiệu năng và cung cấp kết quả hoàn chỉnh."

## ⚠️ Lưu Ý & Gotchas

* **Lỗi tiến trình MCP chạy ngầm**: Các máy chủ MCP stdio chạy như các tiến trình con kéo dài. Cần chạy `mavis mcp sync` để ép buộc khởi động lại tiến trình khi token daemon thay đổi.
* **Thời gian nạp skill**: Các skill mới được tạo sau khi chạy lệnh sync sẽ không khả dụng ngay lập tức trong session hiện tại. Chúng chỉ có hiệu lực ở session tiếp theo.
