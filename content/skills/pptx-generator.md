---
slug: pptx-generator
title: PPTX Generator
command: ''
category: content-communication
tags:
  - powerpoint
  - pptx
  - presentation
  - slides
  - document-generation
complexity: intermediate
platforms:
  - universal
  - cursor
  - windsurf
  - claude-code
  - mcp
featured: false
description: >-
  Tạo, chỉnh sửa và đọc các tệp thuyết trình PowerPoint (.pptx). Tự động tạo
  slide từ đầu bằng PptxGenJS hoặc biên tập các mẫu slide có sẵn qua tệp XML.
oneLiner: 'Tự động hóa việc tạo, chỉnh sửa và chuyển đổi slide PowerPoint (.pptx).'
sourceUrl: ''
sourceAuthor: Minimax
lastVerified: '2026-06-03'
relatedSkills:
  - mckinsey-presentation-generator
  - prd-assistant
seoTitle: PPTX Generator - Minimax Skill for AI Agents
seoDescription: >-
  Tích hợp kỹ năng tự động tạo PowerPoint cho AI Agent sử dụng thư viện
  PptxGenJS và giải nén văn bản từ tệp PPTX bằng Python.
provider: minimax
---

## 📖 Tại Sao Cần Skill Này?

Các AI Agent thường không có khả năng tạo slide PowerPoint thực tế mà chỉ xuất ra định dạng văn bản thô. Kỹ năng này cung cấp các đoạn mã JS/Python giúp Agent tự thiết kế bố cục, màu sắc, sắp xếp văn bản, chèn ảnh và xuất ra tệp `.pptx` hoàn chỉnh để người dùng tải xuống mở trực tiếp bằng Microsoft Office.

## ⚙️ Cách Hoạt Động

Sơ đồ hoạt động của công cụ sinh PPTX:
```
Dữ liệu thô/Mục tiêu ──> Thiết lập Kịch bản PptxGenJS ──> Biên dịch ra file PPTX ──> Kiểm tra tính thẩm mỹ ──> Phân phối
```
1. **Thiết lập kiểu dáng**: Chọn bảng màu chủ đạo, phông chữ và thiết kế cấu trúc slide (bìa, mục lục, nội dung, tóm tắt).
2. **Lập trình sinh slide**: Viết mã nguồn Javascript sử dụng thư viện PptxGenJS để vẽ các khung văn bản, hình khối và bảng.
3. **Biên tập mẫu (nếu có)**: Hướng dẫn Agent cách giải nén tệp PPTX ra dạng XML, sửa đổi nội dung và nén lại thành tệp mới.
4. **Trích xuất nội dung**: Sử dụng công cụ `markitdown` để đọc nhanh văn bản từ một slide có sẵn.

## 🚀 Cách Sử Dụng

- Tuân thủ cấu trúc bài thuyết trình chuyên nghiệp: Slide bìa -> Mục lục -> Slide nội dung -> Slide phân tách phân đoạn -> Slide tóm tắt.
- Sử dụng các định dạng CSS và thiết lập thuộc tính hình khối phù hợp để các hộp chữ không bị tràn hay đè lên nhau.
- Đối với việc đọc nội dung slide cũ, luôn ưu tiên sử dụng công cụ Python CLI `markitdown` để đảm bảo chuyển đổi cấu trúc tài liệu chính xác.

## 💡 Kịch Bản Lập Trình Thực Tế

### Nhà phát triển:
> "Hãy hướng dẫn tôi cách thiết lập và sử dụng kỹ năng PPTX Generator để Tự động hóa việc tạo, chỉnh sửa và chuyển đổi slide PowerPoint (.pptx)."

### AI Agent (Đã được trang bị Kỹ năng):
> "Tôi đã sẵn sàng. Dưới đây là kịch bản vận hành thực tế cho kỹ năng PPTX Generator:
> 1. Thiết lập các thông số cấu hình và tham số đầu vào cần thiết cho hệ thống.
> 2. Thực thi tuần tự các bước xử lý logic và tích hợp theo đúng chỉ dẫn của PPTX Generator.
> 3. Kiểm thử đầu ra, tối ưu hóa hiệu năng và cung cấp kết quả hoàn chỉnh."

## ⚠️ Lưu Ý & Gotchas

- **Tràn văn bản**: Nếu văn bản quá dài, Agent phải tự động chia thành các slide phụ hoặc giảm kích thước phông chữ thay vì để chữ tràn khỏi lề slide.
- **Lỗi định dạng XML**: Khi chỉnh sửa tệp `.pptx` trực tiếp bằng cách sửa XML, cần đảm bảo tính đóng mở của các thẻ tag để tránh hỏng file.
