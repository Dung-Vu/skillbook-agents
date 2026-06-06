---
category: content-communication
command: /pptx
complexity: intermediate
description: Giúp bạn tự động hóa việc đọc nội dung, trích xuất dữ liệu, ghi chú và tạo mới các slide trình chiếu PowerPoint (`.pptx`) một cách chuyên nghiệp.
featured: false
lastVerified: '2026-06-03'
oneLiner: Hỗ trợ đọc, chỉnh sửa và tạo slide PowerPoint (.pptx) tự động.
platforms:
  - universal
  - cursor
  - windsurf
  - claude-code
  - mcp
provider: minimax
relatedSkills:
  - minimax-pdf
seoDescription: >-
  Phân tích và tạo slide PowerPoint (.pptx). Hướng dẫn thiết kế PptxGenJS chuẩn
  16x9, căn lề và kiểm thử tự động.
seoTitle: Minimax PPTX - Minimax Skill for AI Agents
slug: minimax-pptx
sourceAuthor: Minimax
sourceUrl: ''
tags:
  - pptx
  - powerpoint
  - slides
  - presentation
title: Minimax PPTX
---

## 📖 Tại Sao Cần Skill Này?

Thiết kế slide PowerPoint thủ công tốn nhiều thời gian căn chỉnh bố cục, font chữ và căn lề. Kỹ năng này giúp trợ lý ảo tự động phân tích cấu trúc slide cũ, trích xuất nội dung và ghi chú của người thuyết trình, hoặc tạo ra bộ slide mới chuẩn tỉ lệ 16:9 với màu sắc và bố cục đồng đều mà không lo bị tràn khung chữ.

## ⚙️ Cách Hoạt Động

Quy trình thực hiện:
1. **Phân tích mẫu**: Trợ lý quét qua slide cũ (nếu có) để tìm hiểu tông màu và font chữ bạn hay dùng.
2. **Lập trình thiết kế**: Trợ lý thiết kế từng trang slide với kích thước chuẩn 16:9, đảm bảo các phần tử nội dung nằm gọn trong khung hình.
3. **Xuất file**: Trợ lý xuất trực tiếp file dạng `.pptx` và tự động đánh số trang ở góc dưới.

## 🚀 Cách Sử Dụng

- Nhờ trợ lý trích xuất văn bản hoặc các hình ảnh, ghi chú từ một file PowerPoint có sẵn.
- Yêu cầu tạo mới một bộ slide dựa trên nội dung báo cáo bạn cung cấp.
- Khi cung cấp mã màu cho thiết kế, hãy dùng định dạng mã màu chuẩn không có dấu `#` (ví dụ: dùng `1B5AB5` thay vì `#1B5AB5`).

## 💡 Kịch Bản Lập Trình Thực Tế

### Người dùng:
> "Tôi có một file PowerPoint giới thiệu sản phẩm. Hãy trích xuất toàn bộ phần ghi chú của người nói (speaker notes) ở dưới mỗi slide ra thành một file văn bản."

### Trợ lý:
> "Tôi đã xử lý yêu cầu của bạn:
> 1. Đọc file PowerPoint `intro.pptx` của bạn.
> 2. Quét qua từng slide và lấy ra phần ghi chú thuyết trình.
> 3. Đây là file văn bản chứa đầy đủ ghi chú của từng slide từ 1 đến 10."

## ⚠️ Lưu Ý & Gotchas

- **Lưu ý mã màu**: Các thư viện xuất slide yêu cầu mã màu viết liền (ví dụ `FF0000`). Nếu viết sai định dạng, màu sắc slide sẽ bị hiển thị sai lệch.
- **Tránh tràn chữ**: Trợ lý sẽ tự động giới hạn lượng chữ trên mỗi slide để tránh việc chữ bị tràn ra ngoài viền màn hình hoặc đè lên số trang.
