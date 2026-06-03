---
slug: mckinsey-presentation-generator
title: McKinsey Presentation Generator
command: ''
category: content-communication
tags:
  - presentation
  - mckinsey
  - consulting
  - slides
  - business
  - data-visualization
complexity: expert
platforms:
  - universal
  - cursor
  - windsurf
  - claude-code
  - mcp
featured: false
description: >-
  Trình tạo bài thuyết trình HTML nhiều trang theo phong cách tư vấn chuyên
  nghiệp của McKinsey. Tạo ra các slide giàu dữ liệu, được bảo chứng bằng nghiên
  cứu khoa học với biểu đồ SVG và phân tích thị trường.
oneLiner: Tạo slide thuyết trình HTML giàu dữ liệu chuẩn McKinsey.
sourceUrl: ''
sourceAuthor: Minimax
lastVerified: '2026-06-03'
relatedSkills: []
seoTitle: McKinsey Presentation Generator - Minimax Skill for AI Agents
seoDescription: >-
  Hướng dẫn xây dựng kỹ năng thuyết trình McKinsey chuyên nghiệp cho AI Agent
  với phong cách tối giản, bố cục 4 vùng nghiêm ngặt và biểu đồ SVG.
provider: minimax
---

## 📖 Tại Sao AI Agent Của Bạn Cần Kỹ Năng Này?

Trong môi trường doanh nghiệp và tư vấn chiến lược, các slide trang trí sặc sỡ và thiếu dữ liệu sẽ bị từ chối ngay lập tức. Kỹ năng này cung cấp các slide có thiết kế phẳng, vuông vức, mật độ thông tin cao, bảo chứng bằng dữ liệu xác thực cùng nguồn trích dẫn rõ ràng theo đúng tiêu chuẩn khắt khe của các hãng tư vấn hàng đầu như McKinsey.

## ⚙️ Cơ Chế Hoạt Động & Quy Trình Tư Duy

Luồng công việc bao gồm:
```
Nghiên cứu thị trường (Step 1) ──> Thiết kế bố cục (Step 2) ──> Viết Code HTML & Vẽ Biểu đồ SVG ──> Triển khai Bài thuyết trình
```
1. **Nghiên cứu thị trường**: Lên kế hoạch tìm kiếm từ 8-12 truy vấn dữ liệu từ nguồn tin cậy (Statista, McKinsey, IMF).
2. **Thiết kế bố cục**: Phác thảo cấu trúc bài thuyết trình (mặc định 10 slide gồm bìa, mục lục, nội dung, kết luận).
3. **Tạo Slide**: Tạo các trang HTML độc lập với phong cách phẳng, góc vuông, chia tối thiểu 4 vùng thông tin trên mỗi slide.
4. **Vẽ Biểu đồ**: Sử dụng thẻ SVG để vẽ biểu đồ trực tiếp (cột, đường) không dùng góc tròn.
5. **Triển khai**: Đưa các trang HTML lên trực tuyến qua công cụ deploy.

## 🚀 Bộ Quy Tắc Chỉ Dẫn Cho Agent (Prompt Guidelines)

- **Thiết kế phẳng và vuông vức**: Tuyệt đối không dùng bo góc (`border-radius: 0`), không tạo hiệu ứng đổ bóng, không dùng dải màu (gradient) trên các phần tử nội dung.
- **Giới hạn màu sắc**: Tối đa 2 màu nhấn (accent color) trên mỗi trang (mặc định là Xanh Cobalt `#1B5AB5` và một màu phụ tự chọn).
- Mỗi slide nội dung phải có cấu trúc: Header Bar (Nền Navy đậm `#0B1F3A`, cao 32px), Insight Zone (Chữ đậm xanh Cobalt thể hiện phát hiện mấu chốt), Content Area (4 vùng thông tin) và Footer Zone (Trích dẫn nguồn).
- Cung cấp tính năng co giãn thích ứng (Responsive Scaling) để bài thuyết trình hiển thị tốt trên mọi độ phân giải màn hình.

## ⚠️ Cảnh Báo Vận Hành & Mẹo Tối Ưu (Developer Gotchas)

- **Cấm ảnh do AI tạo ra**: Không sử dụng hình ảnh trang trí do AI vẽ (gen_images) để đưa vào slide tư vấn chính thức.
- **Lỗi thiếu thông tin**: Đảm bảo mật độ phủ thông tin tối thiểu 70% bề mặt slide, không để khoảng trống lớn hơn 52px.
- **Trích dẫn nguồn bắt buộc**: Mọi con số thống kê hoặc dữ liệu thị trường đều phải đi kèm trích dẫn nguồn ở footer.
