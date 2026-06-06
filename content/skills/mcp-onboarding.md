---
category: tool-integration
command: /mcp-onboarding
complexity: intermediate
description: Trợ lý tương tác từng bước giúp bạn dễ dàng kết nối và cài đặt các công cụ mới (như Figma, Notion, Slack...) vào trợ lý ảo mà không cần gõ lệnh phức tạp.
featured: false
lastVerified: '2026-06-03'
oneLiner: Hướng dẫn từng bước kết nối và cài đặt công cụ ngoài vào trợ lý ảo qua chat.
platforms:
  - universal
  - cursor
  - windsurf
  - claude-code
  - mcp
provider: minimax
relatedSkills:
  - mavis
  - skill-creator
seoDescription: >-
  Quy trình tích hợp MCP server tự động cho AI Agent. Thu thập key, cấu hình và
  đồng bộ hóa skill qua giao diện genUI.
seoTitle: MCP Onboarding - Minimax Skill for AI Agents
slug: mcp-onboarding
sourceAuthor: Minimax
sourceUrl: ''
tags:
  - mcp
  - onboard
  - setup
  - interactive
title: MCP Onboarding
---

## 📖 Tại Sao Cần Skill Này?

Việc kết nối các công cụ làm việc bên ngoài với trợ lý ảo thường yêu cầu cấu hình phức tạp. Kỹ năng này đóng vai trò như một người hướng dẫn, hỏi bạn các thông tin cần thiết (như đường dẫn, mã bảo mật) thông qua các biểu mẫu nhập liệu an toàn và tự động thiết lập mọi thứ cho bạn.

## ⚙️ Cách Hoạt Động

Quy trình thực hiện:
1. Bạn chọn công cụ muốn kết nối (ví dụ: Notion).
2. Trợ lý hiển thị một ô điền thông tin an toàn để bạn nhập mã bảo mật (API Key) hoặc đường dẫn.
3. Trợ lý tự động lưu cấu hình, kiểm tra kết nối xem có hoạt động tốt không.
4. Trợ lý hoàn tất kết nối và báo cho bạn biết công cụ đã sẵn sàng sử dụng.

## 🚀 Cách Sử Dụng

- Chỉ cần nói tên công cụ bạn muốn tích hợp (ví dụ "Tôi muốn kết nối tài khoản Slack của mình").
- Sử dụng các ô nhập liệu do trợ lý cung cấp để điền mã bảo mật, tránh dán trực tiếp mã bảo mật vào khung chat thông thường để bảo vệ tài khoản của bạn.
- Trợ lý sẽ tự thực hiện mọi thao tác kỹ thuật chạy ngầm.

## 💡 Kịch Bản Lập Trình Thực Tế

### Người dùng:
> "Tôi muốn kết nối trợ lý ảo với tài khoản Figma để hỗ trợ tôi xem các file thiết kế."

### Trợ lý:
> "Tôi sẽ giúp bạn kết nối Figma:
> 1. Tôi đã chuẩn bị biểu mẫu kết nối Figma.
> 2. Hãy điền mã truy cập cá nhân (Token) của bạn vào ô nhập liệu an toàn bên dưới.
> 3. Sau khi bạn điền xong, tôi sẽ tự động kiểm tra kết nối và thông báo kết quả."

## ⚠️ Lưu Ý & Gotchas

- **Bảo mật**: Tuyệt đối không dán trực tiếp mã bảo mật (API Key) vào khung chat; luôn sử dụng các ô nhập liệu do trợ lý hiển thị để đảm bảo an toàn.
- **Lỗi hết hạn thời gian (Timeout)**: Khi hệ thống hiển thị đường link liên kết tài khoản, bạn nên hoàn thành xác thực trong vòng 30 giây để tránh bị quá hạn và phải làm lại từ đầu.
