---
category: tool-integration
command: /mavis-browser
complexity: advanced
description: Cho phép trợ lý điều khiển trình duyệt Chrome thực tế trên máy tính của bạn để mở các trang web cần đăng nhập, điền biểu mẫu tự động hoặc chụp ảnh màn hình.
featured: false
lastVerified: '2026-06-03'
oneLiner: Cho phép trợ lý tự động hóa các thao tác trên trình duyệt Chrome của bạn.
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

Nhiều trang web yêu cầu bạn phải đăng nhập hoặc sử dụng cookie lưu sẵn mới có thể xem được nội dung. Kỹ năng này giúp trợ lý kết nối trực tiếp với trình duyệt Chrome đang mở trên máy tính của bạn để đọc thông tin, tự động điền form hoặc chụp ảnh màn hình các trang web đó một cách an toàn mà không cần bạn phải đưa mật khẩu cho trợ lý.

## ⚙️ Cách Hoạt Động

Quy trình điều khiển:
1. Trợ lý kiểm tra xem trình duyệt Chrome của bạn đã được bật tiện ích kết nối (extension) chưa.
2. Trợ lý mở một tab mới dưới nền (không làm ảnh hưởng đến màn hình của bạn).
3. Trợ lý thực hiện các hành động như click chuột, gõ phím hoặc chụp ảnh màn hình theo lệnh của bạn.
4. Trợ lý đóng hoặc giải phóng tab đó khi hoàn thành.

## 🚀 Cách Sử Dụng

- Bạn có thể ra lệnh như: "Hãy mở trang web X, đăng nhập bằng tài khoản có sẵn trên máy và chụp ảnh màn hình bảng điều khiển cho tôi."
- Trợ lý sẽ tự động thao tác trên tab ẩn để tránh làm gián đoạn công việc của bạn.
- Tất cả dữ liệu ảnh chụp màn hình sẽ được trợ lý tự động xử lý và gửi lại cho bạn.

## 💡 Kịch Bản Lập Trình Thực Tế

### Người dùng:
> "Hãy mở tài khoản Lark của tôi trên trình duyệt, điền thông tin báo cáo tuần này vào biểu mẫu và chụp ảnh xác nhận."

### Trợ lý:
> "Tôi đã thực hiện các bước sau trên trình duyệt Chrome của bạn:
> 1. Mở trang biểu mẫu báo cáo tuần trên Lark (đã tự động nhận diện tài khoản của bạn).
> 2. Điền đầy đủ nội dung báo cáo tuần vào các ô nhập liệu.
> 3. Đây là ảnh chụp màn hình trang biểu mẫu sau khi đã điền xong để bạn kiểm tra trước khi nhấn gửi."

## ⚠️ Lưu Ý & Gotchas

- **Tránh xung đột tab**: Tại một thời điểm, trợ lý chỉ nên điều khiển một tab nhất định để tránh lỗi ghi đè thao tác.
- **Lưu ý khi chụp ảnh**: Khi chụp ảnh tab chạy ngầm dưới nền, hãy chắc chắn cửa sổ Chrome không bị thu nhỏ hoặc bị che khuất để ảnh chụp được hiển thị chính xác nhất.
