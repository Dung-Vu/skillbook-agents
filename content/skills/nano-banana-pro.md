---
slug: nano-banana-pro
title: Nano Banana Pro
command: ''
category: creative-design
tags:
  - image-generation
  - image-editing
  - gemini-pro-image
  - ai-art
complexity: intermediate
platforms:
  - universal
  - cursor
  - windsurf
  - claude-code
  - mcp
featured: false
description: >-
  Kỹ năng tạo và chỉnh sửa hình ảnh nâng cao thông qua API Nano Banana Pro
  (Gemini 3 Pro Image). Hỗ trợ chuyển văn bản thành ảnh, chỉnh sửa ảnh nguồn và
  nâng cao độ phân giải.
oneLiner: Tạo và biên tập ảnh nghệ thuật bằng API Gemini 3 Pro Image.
sourceUrl: ''
sourceAuthor: Minimax
lastVerified: '2026-06-03'
relatedSkills:
  - video-story-generator
  - landing-page-builder
seoTitle: Nano Banana Pro - Minimax Skill for AI Agents
seoDescription: >-
  Tìm hiểu cách sử dụng kỹ năng Nano Banana Pro để tạo ảnh AI chất lượng cao,
  sửa đổi vùng ảnh và upscale lên độ phân giải 4K.
provider: minimax
---

## 📖 Tại Sao AI Agent Của Bạn Cần Kỹ Năng Này?

AI Agent cần có khả năng xử lý hình ảnh trực quan để thiết kế tài nguyên hoặc cập nhật ảnh hiện có một cách linh hoạt. Kỹ năng này cung cấp giao diện lập trình trực tiếp để tạo mới hoặc thay đổi các vùng cụ thể trên ảnh gốc, phóng to ảnh lên kích thước 4K, hỗ trợ tạo tài nguyên đồ họa nhất quán.

## ⚙️ Cơ Chế Hoạt Động & Quy Trình Tư Duy

Sơ đồ quy trình hoạt động:
```
Prompt mô tả / Ảnh nguồn ──> Thiết lập Script generate_image.py ──> Phân tích tác vụ ──> Thực thi qua API ──> Lưu kết quả local
```
1. **Thiết lập tham số**: Nhận đầu vào là prompt văn bản hoặc đường dẫn ảnh cần chỉnh sửa (`--input-image`).
2. **Chọn chế độ**: Lựa chọn Tạo mới (Text-to-Image) hoặc Chỉnh sửa (Image-to-Image / Inpainting).
3. **Gọi API**: Thực thi script `generate_image.py` hoặc `edit_image.py` không thay đổi thư mục làm việc hiện tại.
4. **Lưu trữ**: Lưu tệp đầu ra tại thư mục đích định sẵn và trả về kết quả.

## 🚀 Bộ Quy Tắc Chỉ Dẫn Cho Agent (Prompt Guidelines)

- Khi thực thi các lệnh terminal, luôn sử dụng đường dẫn tuyệt đối đến tệp python trong thư mục skill, không chạy lệnh `cd` trước đó.
- Cung cấp tùy chọn cấu hình độ phân giải phù hợp cho các thiết kế (`1K`, `2K`, hoặc `4K` tùy thuộc vào mục đích sử dụng).
- Nếu chỉnh sửa ảnh nguồn, bắt buộc phải truyền đúng tham số ảnh đầu vào thông qua cờ `--input-image` kèm theo mô tả chi tiết vùng muốn sửa.

## ⚠️ Cảnh Báo Vận Hành & Mẹo Tối Ưu (Developer Gotchas)

- **Đường dẫn tệp**: Lỗi phổ biến nhất là sử dụng đường dẫn tương đối khi gọi script, gây ra lỗi không tìm thấy tài nguyên trên các môi trường CI/CD hoặc máy khách.
- **Xác thực API Key**: Luôn kiểm tra xem biến môi trường hoặc cờ truyền API key có hợp lệ trước khi thực hiện các yêu cầu sinh ảnh tốn tài nguyên.
