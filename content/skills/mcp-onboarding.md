---
category: tool-integration
command: /mcp-onboarding
complexity: intermediate
description: >-
  Kỹ năng hướng dẫn tích hợp máy chủ MCP mới thông qua giao diện hội thoại tương
  tác duy nhất. Đảm bảo thu thập đầy đủ thông tin còn thiếu (như API key, đường
  dẫn thư mục) và xác thực kết nối trước khi lưu cấu hình.
featured: false
lastVerified: '2026-06-03'
oneLiner: Quy trình tương tác hướng dẫn người dùng kết nối và cấu hình máy chủ MCP mới.
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

Kỹ năng này cung cấp một quy trình hướng dẫn thân thiện để tích hợp các dịch vụ bên ngoài vào hệ thống Agent mà người dùng không cần biết hoặc tự chạy các câu lệnh CLI phức tạp. AI Agent sẽ tự động hóa việc thu thập thông tin và đồng bộ hóa công cụ qua chat.

## ⚙️ Cách Hoạt Động

Quy trình onboarding:

1. **Thu thập**: Xác định loại dịch vụ (ví dụ: Figma), nạp preset cấu hình, và chỉ yêu cầu người dùng nhập các API key hoặc URL còn thiếu.
2. **Xác thực**: Chạy `mavis mcp auth login` (cho OAuth2) hoặc hiển thị thẻ `<genui-mcp-auth>` (cho Token/Bearer) để người dùng nhập mã thông báo an toàn.
3. **Đồng bộ**: Kiểm tra trạng thái kết nối và chạy `mavis mcp sync` để đồng bộ hóa các kỹ năng.

```
[Dịch vụ cần kết nối] ➔ 🛠️ [Nạp preset / Hỏi thông tin thiếu] ➔ 🔑 [Hiển thị OAuth Link / genUI card]
                           ➔ 🔄 [Tự động poll status & chạy sync] ➔ 📋 [Bàn giao skill mcp-<server>]
```

## 🚀 Cách Sử Dụng

```markdown
# QUY TẮC ONBOARDING MCP
- **Không yêu cầu gõ lệnh thủ công**: Tuyệt đối không yêu cầu người dùng tự gõ các lệnh `mavis mcp ...` trong cửa sổ chat. Agent phải tự chạy các lệnh đó.
- **Sử dụng genui-mcp-auth**: Khi thu thập mã bí mật (PAT, API key), bắt buộc hiển thị thẻ `<genui-mcp-auth>`, tuyệt đối không yêu cầu người dùng dán text trực tiếp vào chat.
- **Không lặp lại token**: Không bao giờ ghi nhớ hoặc in lại token bảo mật của người dùng ra log hoặc màn hình chat.
```

## 💡 Kịch Bản Lập Trình Thực Tế

### Nhà phát triển:
> "Hãy hướng dẫn tôi cách thiết lập và sử dụng kỹ năng MCP Onboarding để Quy trình tương tác hướng dẫn người dùng kết nối và cấu hình máy chủ MCP mới."

### AI Agent (Đã được trang bị Kỹ năng):
> "Tôi đã sẵn sàng. Dưới đây là kịch bản vận hành thực tế cho kỹ năng MCP Onboarding:
> 1. Thiết lập các thông số cấu hình và tham số đầu vào cần thiết cho hệ thống.
> 2. Thực thi tuần tự các bước xử lý logic và tích hợp theo đúng chỉ dẫn của MCP Onboarding.
> 3. Kiểm thử đầu ra, tối ưu hóa hiệu năng và cung cấp kết quả hoàn chỉnh."

## ⚠️ Lưu Ý & Gotchas

* **Lỗi chặn popup trình duyệt**: Khi gửi link OAuth, người dùng cần đồng ý cấp quyền. Nếu trình duyệt chặn redirect, tiến trình poll status sẽ bị timeout (30s).
* **Tham số bổ sung**: Giao diện `<genui-mcp-auth>` chỉ hỗ trợ lưu Host + Token. Agent phải thu thập trước các tham số không nhạy cảm khác qua chat rồi mới hiển thị thẻ.
