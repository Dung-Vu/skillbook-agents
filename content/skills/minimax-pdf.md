---
category: content-communication
command: /pdf
complexity: intermediate
description: >-
  Thao tác đọc và ghi các tệp tin PDF. Kỹ năng này cung cấp các hướng dẫn cụ thể
  về việc trích xuất văn bản từ PDF, tìm kiếm nội dung, và sinh tệp PDF mới
  thông qua các thư viện lập trình tương thích.
featured: false
lastVerified: '2026-06-03'
oneLiner: 'Đọc, trích xuất thông tin và tạo tệp tin PDF ổn định trên các nền tảng.'
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

## 📖 Tại Sao AI Agent Của Bạn Cần Kỹ Năng Này?

PDF là định dạng tài liệu phổ biến nhưng rất khó trích xuất thông tin chính xác hoặc sinh ra với định dạng bố cục đẹp mắt. Kỹ năng này cung cấp cho Agent các giải pháp trích xuất văn bản (pdfplumber), gọi mô hình thị giác (vision) khi gặp sơ đồ hoặc bảng tài chính phức tạp, compile tệp báo cáo học thuật bằng LaTeX và sinh tệp PDF tiêu chuẩn có mục lục (TOC) tương tác.

---

## ⚙️ Cơ Chế Hoạt Động & Quy Trình Tư Duy

Quy trình xử lý tài liệu PDF:
1. **Tra cứu Pitfalls**: Đối chiếu yêu cầu với danh sách 10 mẫu truy vấn mẫu tiêu chuẩn (P1-P10) trong `pitfalls-index.md` để sao chép prompt đã được tối ưu hóa.
2. **Chọn lộ trình Ghi/Đọc**:
   - Ghi: Chọn `CREATE` (HTML->PDF), `REFORMAT` (Markdown->PDF), `FILL` (Điền form PDF) hoặc `LATEX_THESIS`.
   - Đọc: Dùng `pdfplumber` cho văn bản thường. Nếu có biểu đồ hoặc bảng số liệu phức tạp, bắt buộc gọi script thị giác `read_pdf_vision.py` từng trang một.
3. **Kiểm tra đầu ra**: Mọi tệp PDF sinh ra phải được chạy `pdfinfo` kiểm tra kích thước trang, kiểm tra ảnh nhúng và xác thực tính hoạt động của liên kết mục lục.

Sơ đồ quy trình:
```
[Yêu cầu tệp PDF] ➔ 🔍 [Tra cứu Pitfalls-index] ➔ 📖 [Đọc: pdfplumber / Vision từng trang]
                      ➔ 📝 [Ghi: HTML-to-PDF / LaTeX] ➔ 🧪 [Xác thực kích thước & Clickable TOC]
```

---

## 🚀 Bộ Quy Tắc Chỉ Dẫn Cho Agent (Prompt Guidelines)

```markdown
# QUY TẮC XỬ LÝ TỆP PDF
- **Không nuốt lỗi stderr**: Tuyệt đối không dùng `2>/dev/null` khi gọi các lệnh shell liên quan đến PDF. Hãy chuyển hướng ghi ra file log để dễ dàng gỡ lỗi.
- **Bắt buộc có Clickable TOC**: Tất cả tài liệu PDF nhiều trang được sinh ra từ kỹ năng này bắt buộc phải có mục lục (TOC) có thể nhấp chuột để điều hướng.
- **Quy tắc đọc bảng tài chính**: Khi gặp bảng số liệu báo cáo tài chính phức tạp, không được dùng parser văn bản thô. Bắt buộc dùng `read_pdf_vision.py` trên từng trang đơn lẻ để tránh xáo trộn dòng.
```

---

## ⚠️ Cảnh Báo Vận Hành & Mẹo Tối Ưu (Developer Gotchas)

* **Lỗi mất font chữ CJK**: Khi render HTML sang PDF bằng Playwright/Chromium, nếu thiếu cài đặt font chữ tiếng Trung/Việt trong môi trường hệ thống, văn bản sẽ bị hiển thị thành các ô vuông trống.
* **Thời gian chờ hiển thị biểu đồ**: Khi sử dụng các thư viện như Chart.js để vẽ biểu đồ trên HTML trước khi xuất PDF, hãy chắc chắn đặt sự kiện đợi biểu đồ render xong hoàn toàn, tránh xuất tệp PDF khi biểu đồ còn đang tải hoạt họa (animation).
