---
slug: knowledge-digest
title: Knowledge Digest
command: "/knowledge-digest"
category: data-knowledge
tags:
  - learning
  - multimodal
  - pdf
  - quiz
  - mindmap
  - audio-course
complexity: advanced
platforms:
  - universal
  - cursor
  - windsurf
  - claude-code
  - mcp
featured: false
description: >-
  Chuyển đổi sách giáo trình hoặc tài liệu PDF thành tài liệu học tập đa phương
  thức được cá nhân hóa bao gồm ghi chú viết tay, trang web trắc nghiệm, slide,
  khóa học âm thanh và sơ đồ tư duy.
oneLiner: >-
  Chuyển đổi giáo trình và tài liệu học tập thành nội dung học tập đa phương
  thức cá nhân hóa.
sourceUrl: ''
sourceAuthor: Minimax
lastVerified: '2026-06-03'
relatedSkills:
  - research-paper-generator
  - topic-tracker
  - visual-content-generator
seoTitle: Knowledge Digest - Minimax Skill for AI Agents
seoDescription: >-
  Hướng dẫn tích hợp kỹ năng chuyển đổi tài liệu học tập đa phương thức, tạo
  quiz, slide và mindmap cá nhân hóa cho AI Agent.
provider: minimax
---

## 📖 Tại Sao Cần Skill Này?

Mặc dù AI Agent có thể đọc hiểu văn bản tốt, chúng thường gặp khó khăn trong việc thiết kế lộ trình học tập trực quan và đa phương thức cho người dùng. Kỹ năng này cho phép Agent phân tích các tài liệu học tập phức tạp và tự động chuyển đổi chúng sang các định dạng dễ tiếp thu như ghi chú viết tay (PDF), slide bài giảng (PDF/PPTX), sơ đồ tư duy trực quan (Mermaid/PNG), câu hỏi trắc nghiệm tương tác (HTML) và các khóa học âm thanh (MP3).

## ⚙️ Cách Hoạt Động

Quy trình hoạt động gồm 4 giai đoạn chính:
```
Tài liệu đầu vào (PDF/Text) ──> Phân tích cấu trúc & Khái niệm ──> Tạo nội dung cá nhân hóa ──> Bàn giao tài sản học tập
```
1. **Thu thập đầu vào**: Xác định tài liệu nguồn, cấp độ người học (tiểu học, trung học, đại học, chuyên gia) và định dạng mong muốn.
2. **Phân tích nội dung**: Phân tích cấu trúc tài liệu để trích xuất mục lục, khái niệm cốt lõi, công thức và độ khó.
3. **Tạo định dạng học tập**: Sản xuất đồng thời các định dạng như Ghi chú (Notes), Trắc nghiệm (Quiz), Slide, Mindmap, và Khóa học âm thanh (Audio).
4. **Bàn giao tài nguyên**: Cung cấp đường dẫn tệp trực tiếp thông qua định dạng `<deliver_assets>` mà không hiển thị trực tiếp hình ảnh/âm thanh trong cuộc trò chuyện.

## 🚀 Cách Sử Dụng

- Luôn yêu cầu cấp độ học tập (Grade Level) để điều chỉnh ngôn ngữ, mật độ thông tin và phong cách trực quan cho phù hợp.
- Tuân thủ quy tắc tối đa 2 màu sắc (mặc định xanh dương và hồng) cho Ghi chú viết tay để tạo cảm giác tự nhiên.
- Đối với Slide, thiết kế hình ảnh biểu đồ SVG trong mã HTML/CSS và tránh sử dụng màu xanh dương hoặc tím làm chủ đạo trừ khi được yêu cầu.
- Bộ câu hỏi trắc nghiệm tương tác HTML phải tuân thủ triết lý tối giản, không phụ thuộc vào thư viện UI bên ngoài và hiển thị phản hồi ngay lập tức khi gửi.

## 💡 Kịch Bản Lập Trình Thực Tế

### Nhà phát triển:
> "Hãy hướng dẫn tôi cách thiết lập và sử dụng kỹ năng Knowledge Digest để Chuyển đổi giáo trình và tài liệu học tập thành nội dung học tập đa phương thức cá nhân hóa."

### AI Agent (Đã được trang bị Kỹ năng):
> "Tôi đã sẵn sàng. Dưới đây là kịch bản vận hành thực tế cho kỹ năng Knowledge Digest:
> 1. Thiết lập các thông số cấu hình và tham số đầu vào cần thiết cho hệ thống.
> 2. Thực thi tuần tự các bước xử lý logic và tích hợp theo đúng chỉ dẫn của Knowledge Digest.
> 3. Kiểm thử đầu ra, tối ưu hóa hiệu năng và cung cấp kết quả hoàn chỉnh."

## ⚠️ Lưu Ý & Gotchas

- **Không tự ý thêm thông tin**: Tất cả nội dung tạo ra phải trung thành với tài liệu nguồn để tránh ảo tưởng (hallucination).
- **Không hiển thị nội dung trực quan trực tiếp**: Chỉ trả về đường dẫn tệp bằng định dạng `<deliver_assets>`, không tự động phát âm thanh hoặc chèn thẻ ảnh trực tiếp trong cuộc hội thoại.
- **Giới hạn số lượng nhãn ghi chú**: Chỉ giữ từ 3-8 ghi chú/chú thích trên mỗi trang tài liệu gốc để tránh quá tải thông tin.
