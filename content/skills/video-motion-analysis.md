---
slug: video-motion-analysis
title: Video Motion Analysis
command: ''
category: research-analysis
tags:
  - motion-analysis
  - keyframe-extraction
  - pose-estimation
  - stickman-diagram
  - video-coach
complexity: advanced
platforms:
  - universal
  - cursor
  - windsurf
  - claude-code
  - mcp
featured: false
description: >-
  Phân tích chuyển động và tư thế trong video chuyên nghiệp. Trích xuất khung
  ảnh khóa (Keyframes), ước lượng tư thế cơ thể, vẽ sơ đồ khung xương (Stickman)
  và đưa ra nhận xét cải thiện kỹ thuật.
oneLiner: 'Phân tích tư thế và chuyển động qua video, vẽ sơ đồ xương stickman.'
sourceUrl: ''
sourceAuthor: Minimax
lastVerified: '2026-06-03'
relatedSkills:
  - video-story-generator
  - visual-content-generator
  - nano-banana-pro
seoTitle: Video Motion Analysis - Minimax Skill for AI Agents
seoDescription: >-
  Cách tích hợp kỹ năng Video Motion Analysis để AI Agent tự động phân tích
  video thể thao, trích xuất khung ảnh và vẽ sơ đồ stickman.
provider: minimax
---

## 📖 Tại Sao Cần Skill Này?

Trong huấn luyện thể thao, vật lý trị liệu hay phân tích cử chỉ, việc tự động nhận diện góc độ khớp xương và lỗi chuyển động qua video là rất hữu ích. Kỹ năng này cho phép Agent trích xuất các khung ảnh khóa quan trọng từ video nguồn, vẽ sơ đồ stickman biểu diễn hệ khung xương, đo đạc góc độ khớp cơ thể và đưa ra nhận xét cải tiến chuyên môn.

## ⚙️ Cách Hoạt Động

Quy trình phân tích chuyển động video:
```
Nhan Video goc --> Trich xuat Khung anh khoa (Keyframes) --> Uoc luong tu the & Ve Stickman --> Nhan xet
```
1. **Nhận video**: Đọc video nguồn từ đường dẫn được cung cấp, xác định chuyển động mục tiêu (ví dụ: cú vung gậy golf, chạy bộ).
2. **Trích xuất ảnh**: Lọc ra các thời điểm mấu chốt của chuyển động (bắt đầu, đỉnh điểm, kết thúc) thành các file ảnh tĩnh.
3. **Mô hình hóa tư thế**: Vẽ sơ đồ xương stickman đè lên hình ảnh để hiển thị rõ tư thế của người thực hiện.
4. **Nhận xét chuyên môn**: Tính toán các góc độ khớp (khớp gối, khớp vai) và so sánh với tư thế chuẩn để đưa ra khuyến nghị cải thiện.

## 🚀 Cách Sử Dụng

- Khi thực hiện vẽ sơ đồ stickman, sử dụng các đường nét màu tương tương phản (ví dụ: đỏ hoặc vàng) trên nền tối để dễ dàng quan sát.
- Mô tả chính xác các thông số góc độ bằng số đo độ (degree) cụ thể, không nhận xét chung chung như 'chân hơi cong'.
- Luôn lưu giữ các khung ảnh trích xuất và sơ đồ vẽ được thành các tệp tin lưu trữ và trả về đường dẫn qua định dạng bàn giao tài sản.

## 💡 Kịch Bản Lập Trình Thực Tế

### Nhà phát triển:
> "Hãy hướng dẫn tôi cách thiết lập và sử dụng kỹ năng Video Motion Analysis để Phân tích tư thế và chuyển động qua video, vẽ sơ đồ xương stickman."

### AI Agent (Đã được trang bị Kỹ năng):
> "Tôi đã sẵn sàng. Dưới đây là kịch bản vận hành thực tế cho kỹ năng Video Motion Analysis:
> 1. Thiết lập các thông số cấu hình và tham số đầu vào cần thiết cho hệ thống.
> 2. Thực thi tuần tự các bước xử lý logic và tích hợp theo đúng chỉ dẫn của Video Motion Analysis.
> 3. Kiểm thử đầu ra, tối ưu hóa hiệu năng và cung cấp kết quả hoàn chỉnh."

## ⚠️ Lưu Ý & Gotchas

- **Chất lượng video thấp**: Cảnh báo người dùng nếu video nguồn quá mờ, góc quay bị khuất hoặc ánh sáng quá kém khiến việc nhận diện khớp xương không chính xác.
- **Tránh xử lý quá tải**: Giới hạn việc phân tích trong các phân đoạn video ngắn (tối đa 15-30 giây) để đảm bảo hiệu năng hệ thống.
