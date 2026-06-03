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

## 📖 Tại Sao AI Agent Của Bạn Cần Kỹ Năng Này?

Kỹ năng này cung cấp một quy trình hướng dẫn thân thiện để tích hợp các dịch vụ bên ngoài vào hệ thống Agent mà người dùng không cần biết hoặc tự chạy các câu lệnh CLI phức tạp. AI Agent sẽ tự động hóa việc thu thập thông tin, kiểm tra tính hợp lệ của token và đồng bộ hóa công cụ thông qua giao diện hội thoại.

---

## ⚙️ Cơ Chế Hoạt Động & Quy Trình Tư Duy

Quy trình onboarding 1-chọn-1:
1. **Thu thập thông tin tối thiểu**: Xác định loại dịch vụ (ví dụ: Figma) và lấy cấu hình mặc định (preset). Chỉ hỏi người dùng các trường còn thiếu (API key hoặc URL).
2. **Cấu hình server**: Gọi lệnh `mavis mcp add` từ nền sau để lưu cấu hình.
3. **Thực hiện xác thực**:
   - Nếu là OAuth2: Chạy `mavis mcp auth login`, lấy URL và trả về link markdown dạng thẻ bấm cho người dùng.
   - Nếu là Token/Bearer: Trả về thẻ giao diện `<genui-mcp-auth>` để thu thập mã thông báo an toàn.
4. **Kiểm tra và Đồng bộ**: Đợi người dùng cấp quyền, kiểm tra trạng thái qua `auth status`, rồi chạy `mavis mcp sync`.

Sơ đồ quy trình:
```
[Dịch vụ cần kết nối] ➔ 🛠️ [Nạp preset / Hỏi thông tin thiếu] ➔ 🔑 [Hiển thị OAuth Link / genUI card]
                           ➔ 🔄 [Tự động poll status & chạy sync] ➔ 📋 [Bàn giao skill mcp-<server>]
```

---

## 🚀 Bộ Quy Tắc Chỉ Dẫn Cho Agent (Prompt Guidelines)

```markdown
# QUY TẮC ONBOARDING MCP
- **Không yêu cầu gõ lệnh thủ công**: Tuyệt đối không yêu cầu người dùng tự gõ các lệnh `mavis mcp ...` trong cửa sổ chat. Agent phải tự chạy các lệnh đó.
- **Sử dụng genui-mcp-auth**: Khi thu thập mã bí mật (PAT, API key), bắt buộc hiển thị thẻ `<genui-mcp-auth>`, tuyệt đối không yêu cầu người dùng dán text trực tiếp vào chat.
- **Không lặp lại token**: Không bao giờ ghi nhớ hoặc in lại token bảo mật của người dùng ra log hoặc màn hình chat.
```

---

## ⚠️ Cảnh Báo Vận Hành & Mẹo Tối Ưu (Developer Gotchas)

* **Lỗi chặn popup trình duyệt**: Khi gửi link OAuth, người dùng cần mở trình duyệt và đồng ý cấp quyền. Nếu trình duyệt chặn redirect, lệnh poll status sẽ bị timeout (30s). Cần hướng dẫn người dùng thử lại.
* **Tham số bổ sung**: Giao diện `<genui-mcp-auth>` chỉ hỗ trợ lưu Host + Token. Nếu dịch vụ cần nhiều tham số tùy chỉnh khác, Agent phải thu thập trước các tham số không nhạy cảm này qua chat rồi mới hiển thị thẻ nhập token.
