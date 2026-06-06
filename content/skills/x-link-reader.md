---
category: research-analysis
command: /x-link-reader
complexity: intermediate
description: Đọc và trích xuất nội dung từ các liên kết mạng xã hội X, giúp người dùng xem thông tin bài viết, lượt tương tác và thông tin hồ sơ mà không cần đăng nhập.
featured: false
lastVerified: '2026-06-03'
oneLiner: Đọc và trích xuất thông tin bài viết hoặc hồ sơ người dùng từ mạng xã hội X.
platforms:
  - universal
  - cursor
  - windsurf
  - claude-code
  - mcp
provider: minimax
relatedSkills:
  - mavis-browser
  - visual-summary
seoDescription: Hướng dẫn AI Agent tự động chuyển đổi URL mạng xã hội X thông qua API trung gian để trích xuất nội dung bài đăng và hồ sơ người dùng không cần đăng nhập.
seoTitle: X Link Reader - Đọc liên kết mạng xã hội X/Twitter tự động
slug: x-link-reader
sourceAuthor: Minimax
sourceUrl: ''
tags:
  - twitter
  - x
  - api
  - scraping
title: X Link Reader
---

## 📖 Tại Sao Cần Skill Này?

Mạng xã hội X (Twitter) áp dụng cơ chế bảo mật rất nghiêm ngặt, thường yêu cầu đăng nhập tài khoản thì mới cho xem nội dung. Điều này khiến các trợ lý AI thông thường bị chặn và không thể đọc được nội dung từ đường link bạn gửi. Kỹ năng này giúp trợ lý vượt qua rào cản đó thông qua các cổng kết nối trung gian an toàn để đọc nội dung bài viết, thống kê số lượt thích, chia sẻ hoặc xem thông tin hồ sơ một cách nhanh chóng.

- **Vượt rào cản đăng nhập**: Xem nội dung bài đăng trực tiếp mà không cần có tài khoản X.
- **Tóm tắt nhanh chóng**: Hiển thị nội dung bài đăng và số liệu tương tác một cách gọn gàng, trực quan.
- **Tiết kiệm thời gian**: Không cần tự mình mở trình duyệt và đăng nhập tài khoản để đọc tin.

## ⚙️ Cách Hoạt Động

1. **Nhận dạng đường link**: Phát hiện các liên kết từ mạng xã hội X (`x.com` hoặc `twitter.com`).
2. **Chuyển đổi liên kết**: Tự động chuyển hướng liên kết qua cổng API trung gian miễn phí (FxTwitter).
3. **Trích xuất thông tin**: Tải và đọc dữ liệu bài đăng (nội dung chữ, hình ảnh đi kèm, số lượt tương tác).
4. **Tóm tắt**: Biên soạn thông tin thu được thành một đoạn văn ngắn gọn, dễ hiểu cho bạn.

## 🚀 Cách Sử Dụng

- Gửi đường dẫn bài đăng hoặc link hồ sơ người dùng trên X cho trợ lý.
- Trợ lý sẽ đọc và gửi lại bản tóm tắt nội dung bài viết cùng số liệu tương tác.

## 💡 Kịch Bản Lập Trình Thực Tế

### Người dùng:
> "Đọc và tóm tắt giúp tôi bài viết này trên X: `https://x.com/elonmusk/status/123456789`"

### Trợ lý:
> "Tôi đã đọc nội dung bài viết của Elon Musk cho bạn:
> - **Người đăng**: Elon Musk (@elonmusk)
> - **Nội dung**: 'Hệ thống tên lửa thế hệ mới của chúng tôi đã hoàn thành bài kiểm thử động cơ thành công vào sáng nay.'
> - **Tương tác**: 45.000 Lượt thích, 8.500 Lượt chia sẻ."

## ⚠️ Lưu Ý & Gotchas

- **Bài viết riêng tư hoặc đã xóa**: Trợ lý sẽ không thể đọc được nội dung của các tài khoản cài đặt chế độ riêng tư (tài khoản khóa) hoặc các bài viết đã bị chủ tài khoản xóa.
- **Chỉ hỗ trợ đọc thông tin**: Kỹ năng này hoạt động như một công cụ đọc công cộng, chỉ hỗ trợ trích xuất thông tin một chiều, không thể dùng để đăng bài viết mới hoặc tương tác (like, bình luận) thay cho bạn.
