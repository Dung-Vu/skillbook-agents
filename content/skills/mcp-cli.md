---
category: tool-integration
command: /mcp-cli
complexity: intermediate
description: Quản lý, kiểm tra trạng thái và thiết lập kết nối với các máy chủ công cụ ngoài (MCP Servers) để mở rộng tính năng của trợ lý ảo.
featured: false
lastVerified: '2026-06-03'
oneLiner: Quản lý kết nối và cấu hình các máy chủ công cụ ngoài (MCP) của trợ lý ảo.
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

Model Context Protocol (MCP) là một chuẩn kết nối giúp trợ lý ảo sử dụng được các công cụ bên ngoài (ví dụ: truy cập cơ sở dữ liệu, đọc email, kết nối API). Kỹ năng này giúp trợ lý quản lý danh sách các máy chủ công cụ này, thêm bớt kết nối và cập nhật tính năng mới một cách dễ dàng.

## ⚙️ Cách Hoạt Động

Quy trình đơn giản:
1. Bạn yêu cầu thêm hoặc kiểm tra các máy chủ công cụ ngoài.
2. Trợ lý dùng lệnh quản lý để xem danh sách các máy chủ đang chạy hoặc thêm máy chủ mới.
3. Trợ lý đồng bộ hóa các công cụ từ máy chủ ngoài về hệ thống Mavis để biến chúng thành các kỹ năng sử dụng được.

## 🚀 Cách Sử Dụng

- Yêu cầu trợ lý hiển thị danh sách các công cụ ngoài đang kết nối: "Liệt kê các máy chủ MCP đang chạy".
- Khi bạn muốn thêm một công cụ mới, hãy cung cấp thông tin cấu hình cho trợ lý để tự động cài đặt.
- Luôn chạy lệnh đồng bộ khi cấu hình thay đổi để trợ lý cập nhật các tính năng mới nhất.

## 💡 Kịch Bản Lập Trình Thực Tế

### Người dùng:
> "Tôi vừa cài đặt một công cụ đọc file PDF mới qua cổng MCP. Hãy kiểm tra danh sách và cập nhật nó vào hệ thống."

### Trợ lý:
> "Tôi đã thực hiện các bước sau:
> 1. Kiểm tra danh sách và phát hiện máy chủ MCP mới kết nối.
> 2. Đã đồng bộ hóa công cụ đọc file PDF này vào hệ thống của bạn để sẵn sàng sử dụng cho các tác vụ tiếp theo."

## ⚠️ Lưu Ý & Gotchas

- **Cập nhật sau phiên làm việc**: Khi bạn vừa thêm một công cụ mới, bạn cần khởi động lại hoặc mở phiên chat mới để các công cụ này có hiệu lực hoàn toàn.
- **Không chỉnh sửa file cấu hình bằng tay**: Hãy để trợ lý sử dụng lệnh hệ thống để thay đổi cấu hình nhằm tránh các lỗi định dạng file khiến hệ thống bị treo.
