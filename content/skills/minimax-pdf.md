---
category: content-communication
command: /pdf
complexity: intermediate
description: Hỗ trợ đọc tài liệu PDF, tự động trích xuất thông tin, bảng biểu, sơ đồ và tạo các tệp PDF mới có giao diện chuyên nghiệp, mục lục nhấp chuyển trang được.
featured: false
lastVerified: '2026-06-03'
oneLiner: Hỗ trợ đọc, trích xuất dữ liệu và tạo tệp tin PDF tự động.
platforms:
  - universal
  - cursor
  - windsurf
  - claude-code
  - mcp
provider: minimax
relatedSkills: []
seoDescription: >-
  Xử lý tài liệu PDF bilingually cho Agent. Quy tắc trích xuất văn bản qua
  pdfplumber hoặc Vision, và tạo file PDF có TOC nhấp chuột được.
seoTitle: Minimax PDF - Minimax Skill for AI Agents
slug: minimax-pdf
sourceAuthor: Minimax
sourceUrl: ''
tags:
  - pdf
  - document
  - parse
  - render
title: Minimax PDF
---

## 📖 Tại Sao Cần Skill Này?

Tệp PDF rất khó để copy thông tin một cách chính xác hoặc tự động tạo mới với định dạng đẹp mắt mà không bị lỗi dòng. Kỹ năng này giúp trợ lý ảo đọc hiểu chính xác các tệp PDF (kể cả biểu đồ hay bảng số liệu phức tạp) và tạo ra các tệp PDF mới chuyên nghiệp, có mục lục liên kết giúp người đọc dễ dàng chuyển trang bằng một cú click chuột.

## ⚙️ Cách Hoạt Động

Quy trình xử lý:
1. **Đọc PDF**: Nếu là văn bản thông thường, trợ lý sẽ trích xuất chữ. Nếu có hình vẽ hoặc bảng biểu tài chính phức tạp, trợ lý sẽ dùng tính năng quét ảnh (Vision) để đọc từng trang nhằm tránh lỗi mất định dạng dòng cột.
2. **Tạo PDF**: Trợ lý thiết kế nội dung dưới dạng trang web (HTML) hoặc mã văn bản (LaTeX) rồi chuyển đổi sang PDF để giữ nguyên căn lề đẹp mắt.
3. **Kiểm tra**: Trợ lý kiểm tra lại kích thước trang và các liên kết mục lục để đảm bảo hoạt động tốt.

## 🚀 Cách Sử Dụng

- Nhờ trợ lý đọc các tài liệu PDF báo cáo tài chính hoặc nghiên cứu khoa học để tóm tắt các điểm chính hoặc rút trích số liệu.
- Yêu cầu tạo tài liệu PDF từ một nội dung có sẵn và yêu cầu có mục lục bấm chuyển trang được.
- Đảm bảo môi trường làm việc của bạn đã cài đặt các font chữ tiếng Việt để tránh lỗi hiển thị thành ô vuông trống.

## 💡 Kịch Bản Lập Trình Thực Tế

### Người dùng:
> "Tôi có một báo cáo tài chính PDF dài 50 trang. Hãy trích xuất bảng doanh thu quý 4 ở trang 12 và tóm tắt lại cho tôi."

### Trợ lý:
> "Tôi đã xử lý yêu cầu của bạn:
> 1. Tôi sử dụng công cụ đọc hình ảnh trên trang 12 của tệp PDF để giữ nguyên định dạng các cột số liệu doanh thu.
> 2. Đây là bảng số liệu doanh thu quý 4 được trích xuất chính xác và bản tóm tắt ngắn gọn các điểm chính."

## ⚠️ Lưu Ý & Gotchas

- **Lỗi hiển thị chữ**: Khi tạo file PDF tiếng Việt, nếu hệ thống thiếu font chữ, các từ có dấu tiếng Việt có thể bị lỗi hiển thị. Trợ lý luôn kiểm tra và thiết lập font chữ phù hợp.
- **Biểu đồ động**: Nếu tài liệu của bạn chứa biểu đồ động, trợ lý sẽ đợi biểu đồ vẽ xong hoàn chỉnh rồi mới lưu thành file PDF để tránh hình ảnh bị mờ hoặc trống trơn.
