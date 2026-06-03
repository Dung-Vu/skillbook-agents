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

## 📖 Tại Sao AI Agent Của Bạn Cần Kỹ Năng Này?

Model Context Protocol (MCP) là giao thức chuẩn hóa để kết nối mô hình ngôn ngữ lớn với các công cụ ngoài. Agent cần kỹ năng này để cấu hình, kiểm tra trạng thái hoạt động của các server MCP và đồng bộ các công cụ (tools) của server đó thành các kỹ năng (skills) cục bộ mà Agent có thể trực tiếp gọi qua dòng lệnh CLI.

---

## ⚙️ Cơ Chế Hoạt Động & Quy Trình Tư Duy

Quy trình quản lý server MCP:
1. **Liệt kê server**: Chạy `mavis mcp list` để xem danh sách các server đã đăng ký và trạng thái xác thực.
2. **Cấu hình**: Sử dụng `mavis mcp add <name> '<config>'` để ghi cấu hình server mới (đường dẫn HTTP hoặc lệnh STDIO).
3. **Xác thực**: Chạy luồng đăng nhập OAuth nếu cần qua `mavis mcp auth login <server>`.
4. **Đồng bộ hóa**: Chạy `mavis mcp sync` để kết nối server, đọc danh sách tool và biên dịch chúng thành các file kỹ năng trong Mavis.

Sơ đồ quy trình:
```
[Yêu cầu cấu hình MCP] ➔ 📝 [Đọc/Thêm cấu hình mavis mcp add] ➔ 🔑 [Xác thực auth login]
                            ➔ 🔄 [Đồng bộ mavis mcp sync] ➔ 🛠️ [Kích hoạt kỹ năng mcp-<server>]
```

---

## 🚀 Bộ Quy Tắc Chỉ Dẫn Cho Agent (Prompt Guidelines)

```markdown
# QUY TẮC QUẢN LÝ MCP CLI
- **Sử dụng Skill được biên dịch**: Agent không được gọi trực tiếp danh mục công cụ thô của MCP. Phải đồng bộ hóa thành file skill và sử dụng ở session tiếp theo.
- **Bảo mật API Key**: Tuyệt đối không chỉnh sửa thủ công tệp `mcp.json`. Phải dùng lệnh `mavis mcp add` để lưu trữ token an toàn.
- **Luôn kiểm tra lỗi 401 của Matrix**: Nếu gặp lỗi 401 trên server matrix tích hợp, chạy `mavis mcp sync` để khởi động lại tiến trình matrix-mcp-cli với token mới từ bộ nhớ daemon.
```

---

## ⚠️ Cảnh Báo Vận Hành & Mẹo Tối Ưu (Developer Gotchas)

* **Lỗi tiến trình MCP chạy ngầm**: Các máy chủ MCP stdio chạy như các tiến trình con kéo dài. Nếu token của daemon thay đổi, các tiến trình này không tự động nhận token mới. Cần chạy `mavis mcp sync` để ép buộc khởi động lại tiến trình.
* **Thời gian nạp skill**: Các skill mới được tạo sau khi chạy lệnh sync sẽ không khả dụng ngay lập tức trong session hiện tại. Chúng chỉ có hiệu lực ở session tiếp theo.
