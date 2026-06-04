---
category: tool-integration
command: /mavis-browser
complexity: advanced
description: >-
  Điều khiển trình duyệt Chrome thực tế của người dùng qua CLI `mavis browser
  tool`. Hỗ trợ truy cập các trang web yêu cầu đăng nhập, sử dụng cookies/SSO
  hiện tại và thực hiện các tác vụ tự động hóa như chụp ảnh màn hình hoặc điền
  form.
featured: false
lastVerified: '2026-06-03'
oneLiner: >-
  Tự động hóa trình duyệt Chrome thực tế của người dùng sử dụng session đăng
  nhập có sẵn.
platforms:
  - universal
  - cursor
  - windsurf
  - claude-code
  - mcp
provider: minimax
relatedSkills:
  - mavis
seoDescription: >-
  Điều khiển Chrome thực tế qua mavis browser CLI. Tái sử dụng cookies, đăng
  nhập SSO, chụp ảnh màn hình và tương tác DOM.
seoTitle: Mavis Browser - Minimax Skill for AI Agents
slug: mavis-browser
sourceAuthor: Minimax
sourceUrl: ''
tags:
  - browser
  - chrome
  - scraping
  - automation
title: Mavis Browser
---

## 📖 Tại Sao Cần Skill Này?

Agent cần kỹ năng này khi cần truy cập vào các trang web nội bộ, các bảng điều khiển SaaS hoặc các dịch vụ yêu cầu thông tin đăng nhập và cookie có sẵn của người dùng. Kỹ năng này cho phép Agent thao tác an toàn trên chính trình duyệt Chrome của nhà phát triển.

## ⚙️ Cách Hoạt Động

Quy trình hoạt động:

1. **Kiểm tra status**: Chạy `mavis browser status` để xác nhận daemon hoạt động và extension Chrome được kết nối.
2. **Mở & Thao tác**: Mở tab mới ở chế độ background và gửi lệnh JSON để thao tác DOM (click, type, screenshot).
3. **Giải phóng**: Tự động giải phóng tab khi session kết thúc để Agent khác sử dụng.

```
[Yêu cầu Trình duyệt] ➔ 🔍 [Kiểm tra status & extension] ➔ 📂 [Mở tab & Tự động claim]
                           ➔ 💻 [Gửi lệnh click/type/screenshot] ➔ 🔓 [Giải phóng tab khi xong]
```

## 🚀 Cách Sử Dụng

```markdown
# QUY TẮC ĐIỀU KHIỂN TRÌNH DUYỆT CHROME
- **Không tự thêm tiền tố**: Lệnh công cụ phải viết ở dạng trần (ví dụ: `click`, `screenshot`), không thêm tiền tố `browser_`.
- **Mở tab ẩn danh mặc định**: Luôn mở tab mới với tham số `{"active": false}` trừ khi người dùng yêu cầu rõ ràng để tránh làm phiền màn hình làm việc.
- **Xử lý ảnh chụp màn hình**: Lệnh `screenshot` trả về chuỗi base64 kèm tiền tố dữ liệu. Phải cắt bỏ `"data:image/png;base64,"` trước khi giải mã.
- **Luôn parse JSON**: Tất cả đầu ra từ công cụ đều dạng JSON, không được giả định cấu trúc văn bản thô.
```

## 💡 Kịch Bản Lập Trình Thực Tế

### Nhà phát triển:
> "Hãy hướng dẫn tôi cách thiết lập và sử dụng kỹ năng Mavis Browser để Tự động hóa trình duyệt Chrome thực tế của người dùng sử dụng session đăng nhập có sẵn."

### AI Agent (Đã được trang bị Kỹ năng):
> "Tôi đã sẵn sàng. Dưới đây là kịch bản vận hành thực tế cho kỹ năng Mavis Browser:
> 1. Thiết lập các thông số cấu hình và tham số đầu vào cần thiết cho hệ thống.
> 2. Thực thi tuần tự các bước xử lý logic và tích hợp theo đúng chỉ dẫn của Mavis Browser.
> 3. Kiểm thử đầu ra, tối ưu hóa hiệu năng và cung cấp kết quả hoàn chỉnh."

## ⚠️ Lưu Ý & Gotchas

* **Lỗi Tab bị chiếm dụng**: Mỗi tab chỉ được điều khiển bởi một session tại một thời điểm. Cần dùng `force: true` nếu muốn ghi đè.
* **Chụp ảnh màn hình nền**: Lệnh `screenshot` thực tế chụp toàn bộ cửa sổ nhìn thấy hiện tại của Chrome. Nếu tab đích đang chạy ở chế độ background, ảnh chụp sẽ hiển thị nội dung của tab đang active.
