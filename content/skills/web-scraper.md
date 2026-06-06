---
slug: web-scraper
title: Web Scraper
command: "/web-scraper"
category: tool-integration
tags:
  - web-scraping
  - crawling
  - data-extraction
  - content-harvesting
complexity: intermediate
platforms:
  - universal
  - cursor
  - windsurf
  - claude-code
  - mcp
featured: false
description: Công cụ thu thập dữ liệu tự động từ các trang web. Hỗ trợ bóc tách thông tin, lọc bỏ mã rác và xuất ra các định dạng dữ liệu có cấu trúc dễ sử dụng như JSON, CSV, Excel.
oneLiner: Tự động thu thập và xuất dữ liệu từ các trang web trực tuyến.
sourceUrl: ''
sourceAuthor: Minimax
lastVerified: '2026-06-03'
relatedSkills:
  - tidy-folder
  - seo-geo-optimization-expert
seoTitle: Web Scraper - Tự động cào dữ liệu và bóc tách thông tin trang web
seoDescription: Cấu hình AI Agent tự động viết mã thu thập dữ liệu web, bóc tách thông tin có cấu trúc và xuất ra file JSON/CSV/Excel.
provider: minimax
---

## 📖 Tại Sao Cần Skill Này?

Khi bạn cần tổng hợp lượng lớn thông tin từ một hoặc nhiều trang web (ví dụ: so sánh giá sản phẩm của đối thủ, lấy danh sách tin tức mới nhất, thu thập thông tin liên hệ), việc sao chép thủ công rất tốn thời gian và công sức. Kỹ năng này giúp trợ lý tự động viết các chương trình thông minh để ghé thăm trang web, trích xuất chính xác các thông tin cần thiết và gom lại thành một tệp dữ liệu sạch sẽ, ngăn nắp cho bạn sử dụng ngay.

- **Thu thập quy mô lớn**: Lấy hàng trăm, hàng ngàn thông tin tự động chỉ trong vài phút.
- **Dữ liệu sạch sẽ**: Loại bỏ hoàn toàn các quảng cáo, menu và mã nguồn rác của trang web, chỉ giữ lại phần nội dung bạn quan tâm.
- **Đa dạng định dạng**: Xuất dữ liệu ra các định dạng phổ biến để dễ dàng nhập vào Excel hoặc các công cụ phân tích khác.

## ⚙️ Cách Hoạt Động

1. **Xác định mục tiêu**: Nhận đường link trang web và danh sách thông tin bạn muốn lấy từ bạn (ví dụ: tên sản phẩm, giá bán, mô tả).
2. **Phân tích cấu trúc**: Rà soát mã nguồn trang web để tìm ra vị trí chính xác của dữ liệu đó.
3. **Thực thi thu thập**: Chạy mã lập trình để tải trang web và bóc tách thông tin (hỗ trợ cả các trang web sử dụng nhiều công nghệ tương tác hiện đại).
4. **Lọc và lưu trữ**: Gom thông tin lại, loại bỏ các kết quả trống và xuất ra file CSV, JSON hoặc Excel.

## 🚀 Cách Sử Dụng

- Gửi đường dẫn trang web cùng các thông tin bạn muốn lấy cho trợ lý.
- Trợ lý sẽ tự động thiết lập tiến trình cào dữ liệu và gửi lại file kết quả cho bạn tải về.

## 💡 Kịch Bản Lập Trình Thực Tế

### Người dùng:
> "Lấy giúp tôi danh sách 20 cuốn sách bán chạy nhất trên trang web sách này kèm giá bán của từng cuốn."

### Trợ lý:
> "Tôi đã thực hiện thu thập dữ liệu cho bạn:
> - **Tiến trình**: Truy cập trang web, bóc tách thông tin tiêu đề sách, tên tác giả và giá bán hiện tại của 20 cuốn sách hàng đầu.
> - **Thành phẩm**: Đã sắp xếp ngăn nắp và xuất ra file `danh_sach_sach_hot.csv` sẵn sàng để bạn mở bằng Excel."

## ⚠️ Lưu Ý & Gotchas

- **Chống cào dữ liệu (Anti-bot)**: Một số trang web có tường lửa chống thu thập dữ liệu tự động hoặc yêu cầu xác minh mã CAPTCHA (hình ảnh xác thực). Trợ lý sẽ báo cho bạn biết nếu gặp các trang web này để tìm giải pháp thay thế.
- **Trang web thay đổi giao diện**: Mã thu thập dữ liệu hoạt động dựa trên cấu trúc hiện tại của trang web. Nếu trang web đó thay đổi thiết kế hoặc nâng cấp giao diện, chương trình có thể bị lỗi và cần được điều chỉnh lại.
