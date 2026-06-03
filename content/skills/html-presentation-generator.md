---
slug: html-presentation-generator
title: HTML Presentation Generator
command: ''
category: content-communication
tags:
  - html-presentation
  - slides
  - pdf-export
  - slide-deck
complexity: intermediate
platforms:
  - universal
  - cursor
  - windsurf
  - claude-code
  - mcp
featured: false
description: >-
  Tạo bài thuyết trình HTML nhiều trang chuyên nghiệp có khả năng xuất sang định
  dạng PDF/PPTX. Tối ưu hóa bố cục, bảng màu, typography và biểu đồ trang trí.
oneLiner: Tạo bài thuyết trình dạng trang web HTML chuyên nghiệp và xuất PDF.
sourceUrl: ''
sourceAuthor: Minimax
lastVerified: '2026-06-03'
relatedSkills:
  - frontend-design
  - industry-research-report-writer
seoTitle: HTML Presentation Generator - Minimax Skill for AI Agents
seoDescription: >-
  Tự động thiết kế slide thuyết trình bằng HTML/CSS chuẩn SEO, hỗ trợ xuất định
  dạng PDF/PPTX chỉn chu, hiện đại.
provider: minimax
---

## 📖 Tại Sao AI Agent Của Bạn Cần Kỹ Năng Này?

Các slide PowerPoint thông thường thường tốn thời gian thiết kế thủ công và dễ bị lỗi định dạng khi chia sẻ. Bằng cách thiết kế slide dưới dạng các trang web HTML với kích thước chuẩn (960x540), Agent có thể tạo ra các bài trình chiếu tuyệt đẹp, dễ dàng tùy biến bằng code và xuất file PDF hoàn hảo.

## ⚙️ Cơ Chế Hoạt Động & Quy Trình Tư Duy

Quy trình thiết kế slide HTML:

```
[Topic & Content Research] -> [Color/Font Palette Selection] -> [Generate Slide HTML Files] -> [Add SVG Visuals] -> [Export PDF/PPTX]
```

1. **Research**: Tìm hiểu chủ đề và lên cấu trúc dàn ý các slide (Slide Outline).
2. **Design Tokens**: Chọn bảng màu chủ đạo và đặt font Times New Roman (bắt buộc theo chuẩn thiết kế).
3. **HTML Rendering**: Viết mã nguồn HTML/CSS cho từng slide đơn lẻ, chèn trang trí bằng các thẻ SVG trực quan.

## 🚀 Bộ Quy Tắc Chỉ Dẫn Cho Agent (Prompt Guidelines)

1. Mỗi slide phải là một file HTML độc lập có kích thước khung hình cố định là 960x540 pixels.
2. Bắt buộc sử dụng font **Times New Roman** cho toàn bộ văn bản trong slide.
3. Sử dụng các trang trí hình học dạng SVG tự vẽ thay vì chèn ảnh bitmap bên ngoài để slide sắc nét khi xuất PDF.

## ⚠️ Cảnh Báo Vận Hành & Mẹo Tối Ưu (Developer Gotchas)

- **Tràn nội dung**: Chữ quá nhiều sẽ bị tràn ra khỏi khung hình 960x540. Cần khống chế số lượng từ trên mỗi slide (dưới 60 từ) và sử dụng bullet points ngắn gọn.
- **Lỗi căn chỉnh khi export**: Khi chuyển đổi sang PDF, một số CSS nâng cao có thể không được hỗ trợ. Hãy sử dụng flexbox và grid cơ bản để định vị phần tử.
