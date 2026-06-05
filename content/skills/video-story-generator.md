---
slug: video-story-generator
title: Video Story Generator
command: "/video-story-generator"
category: creative-design
tags:
  - story-generation
  - video-creation
  - ffmpeg
  - subject-reference
  - multimedia
complexity: expert
platforms:
  - universal
  - cursor
  - windsurf
  - claude-code
  - mcp
featured: false
description: >-
  Trình tạo video câu chuyện tự động. Thiết lập cốt truyện, tạo kịch bản phân
  cảnh (Storyboard), sản xuất tài nguyên âm thanh/hình ảnh nhất quán và lắp ráp
  video hoàn chỉnh qua FFmpeg.
oneLiner: >-
  Tự động tạo video câu chuyện hoàn chỉnh với kịch bản, âm thanh và chuyển động
  bằng FFmpeg.
sourceUrl: ''
sourceAuthor: Minimax
lastVerified: '2026-06-03'
relatedSkills: []
seoTitle: Video Story Generator - Minimax Skill for AI Agents
seoDescription: >-
  Tìm hiểu cách tích hợp kỹ năng Video Story Generator cho AI Agent để tự động
  hóa việc viết kịch bản, tạo ảnh và biên tập video bằng FFmpeg.
provider: minimax
---

## 📖 Tại Sao Cần Skill Này?

Việc tự sản xuất các video marketing hay video truyện ngắn đòi hỏi kỹ năng sử dụng nhiều phần mềm phức tạp (viết kịch bản, tạo ảnh, lồng tiếng, cắt dựng). Kỹ năng này tự động hóa toàn bộ quy trình trên, giúp Agent tạo ra một câu chuyện nhất quán về mặt hình ảnh nhân vật (subject-reference), tạo giọng đọc nhân tạo và lắp ráp các mảnh tài nguyên thành tệp video `.mp4` hoàn chỉnh.

## ⚙️ Cách Hoạt Động

Quy trình sản xuất video tự động:
```
Y tuong kich ban --> Phan canh Storyboard --> Sinh Anh & Am thanh --> Ghep video bang FFmpeg --> Ban giao
```
1. **Phác thảo kịch bản**: Xây dựng câu chuyện theo cấu trúc chương hồi, phân chia thành các cảnh (scenes) rõ ràng.
2. **Thiết kế Storyboard**: Mô tả chi tiết hình ảnh cần tạo cho mỗi cảnh và lời thoại tương ứng.
3. **Sản xuất tài nguyên**: Gọi các công cụ tạo ảnh nhất quán nhân vật và công cụ Text-to-Speech để sinh tệp âm thanh lời thoại.
4. **Lắp ráp FFmpeg**: Viết và thực thi lệnh FFmpeg để ghép ảnh, khớp nhạc nền, khớp lời thoại và chèn phụ đề.
5. **Bàn giao**: Trả về tệp video đầu ra cuối cùng.

## 🚀 Cách Sử Dụng

- Tuyệt đối giữ tính nhất quán của nhân vật chính qua các cảnh bằng cách sử dụng các mô tả ngoại hình chi tiết và lặp lại thuộc tính.
- Đảm bảo thời gian hiển thị của mỗi cảnh khớp chính xác với độ dài của tệp âm thanh lời thoại tương ứng để tránh lệch pha.
- Viết lệnh FFmpeg cẩn thiện, xử lý các lỗi kích thước hình ảnh không đồng đều bằng các bộ lọc `scale` và `pad` của FFmpeg.

## 💡 Kịch Bản Lập Trình Thực Tế

### Nhà phát triển:
> "Hãy hướng dẫn tôi cách thiết lập và sử dụng kỹ năng Video Story Generator để Tự động tạo video câu chuyện hoàn chỉnh với kịch bản, âm thanh và chuyển động bằng FFmpeg."

### AI Agent (Đã được trang bị Kỹ năng):
> "Tôi đã sẵn sàng. Dưới đây là kịch bản vận hành thực tế cho kỹ năng Video Story Generator:
> 1. Thiết lập các thông số cấu hình và tham số đầu vào cần thiết cho hệ thống.
> 2. Thực thi tuần tự các bước xử lý logic và tích hợp theo đúng chỉ dẫn của Video Story Generator.
> 3. Kiểm thử đầu ra, tối ưu hóa hiệu năng và cung cấp kết quả hoàn chỉnh."

## ⚠️ Lưu Ý & Gotchas

- **Lệch tiếng và hình**: Cần tính toán chính xác số mili-giây của tệp âm thanh trước khi viết câu lệnh ghép của FFmpeg.
- **FFmpeg bị lỗi cấu trúc**: Tránh tạo câu lệnh FFmpeg quá dài và phức tạp trong một dòng duy nhất; khuyên dùng file cấu hình đầu vào `concat` nếu ghép nhiều đoạn tương tự.
