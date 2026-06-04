---
slug: landing-page-builder
title: Landing Page Builder
command: ''
category: creative-design
tags:
  - web
  - landing-page
  - frontend
  - html
  - css
  - awwwards
complexity: advanced
platforms:
  - universal
  - cursor
  - windsurf
  - claude-code
  - mcp
featured: false
description: >-
  Công cụ tạo trang Landing Page cao cấp chuẩn Awwwards. Tạo ra các trang web
  trực quan ấn tượng với phần hero động dạng điện ảnh, triển khai trực tuyến và
  trả về URL hoạt động.
oneLiner: >-
  Thiết kế và triển khai trang Landing Page chất lượng cao chuẩn Awwwards trực
  tuyến.
sourceUrl: ''
sourceAuthor: Minimax
lastVerified: '2026-06-03'
relatedSkills: []
seoTitle: Landing Page Builder - Minimax Skill for AI Agents
seoDescription: >-
  Cách tích hợp kỹ năng Landing Page Builder cho AI Agent để tạo giao diện đẹp
  mắt, không dùng màu xanh SaaS truyền thống và triển khai trực tiếp.
provider: minimax
---

## 📖 Tại Sao Cần Skill Này?

Các trang Landing Page thông thường dễ tạo ra cảm giác rập khuôn và thiếu chuyên nghiệp. Kỹ năng này biến AI Agent thành một nhà thiết kế web chuyên nghiệp, có khả năng thiết kế giao diện theo phong cách 'Awwwards' với hình ảnh sắc nét, các phần hero cuốn hút, cấu trúc mã tối ưu và tự động triển khai trực tuyến.

## ⚙️ Cách Hoạt Động

Luồng công việc gồm các bước:
```
Yêu cầu người dùng ──> Spec thiết kế ──> Tạo Tài sản (Video/Ảnh) ──> Viết Code HTML/CSS ──> Kiểm tra Playwright ──> Triển khai
```
1. **Thu thập yêu cầu**: Lấy thông tin về thương hiệu, mục đích trang, đối tượng mục tiêu và định hướng phong cách.
2. **Tạo Spec (`spec.md`)**: Lên kế hoạch chi tiết về bảng màu, cấu trúc typography, bố cục lưới và chuyển động.
3. **Tạo tài nguyên trực quan**: Tạo video nền cho Hero section (tối thiểu 1080p) và ảnh chất lượng cao.
4. **Viết Code**: Triển khai HTML5/CSS3 tương thích thiết bị di động, đảm bảo xử lý lỗi đường dẫn an toàn.
5. **Kiểm tra**: Chạy Playwright để kiểm tra lỗi console hoặc lỗi 404 về tài nguyên.
6. **Triển khai**: Sử dụng công cụ deploy để đưa trang web lên URL hoạt động thực tế.

## 🚀 Cách Sử Dụng

- **Tuyệt đối cấm màu xanh dương/tím công nghệ**: Sử dụng các bảng màu được phê duyệt (tông màu đất, đơn sắc, tông màu ấm hoặc xanh tự nhiên) để tránh thiết kế 'generic SaaS blue'.
- Phần Hero phải cực kỳ ấn tượng, sử dụng video lặp nền mờ chạy tự động làm chủ đạo và không chèn ảnh tĩnh che phủ video.
- Sử dụng các đường dẫn tương đối (ví dụ: `./videos/hero_loop.mp4`) và bắt buộc thêm thuộc tính xử lý lỗi hình ảnh: `onerror="this.style.display='none'"`.
- Luôn kiểm tra tính toàn vẹn của mã nguồn bằng Playwright trước khi thực hiện bước deploy.

## 💡 Kịch Bản Lập Trình Thực Tế

### Nhà phát triển:
> "Hãy hướng dẫn tôi cách thiết lập và sử dụng kỹ năng Landing Page Builder để Thiết kế và triển khai trang Landing Page chất lượng cao chuẩn Awwwards trực tuyến."

### AI Agent (Đã được trang bị Kỹ năng):
> "Tôi đã sẵn sàng. Dưới đây là kịch bản vận hành thực tế cho kỹ năng Landing Page Builder:
> 1. Thiết lập các thông số cấu hình và tham số đầu vào cần thiết cho hệ thống.
> 2. Thực thi tuần tự các bước xử lý logic và tích hợp theo đúng chỉ dẫn của Landing Page Builder.
> 3. Kiểm thử đầu ra, tối ưu hóa hiệu năng và cung cấp kết quả hoàn chỉnh."

## ⚠️ Lưu Ý & Gotchas

- **Tránh lỗi 404 tài nguyên**: Đảm bảo tên file video và ảnh trong code HTML khớp chính xác tuyệt đối với các file đã tạo.
- **Không chạy server local**: Không sử dụng `python -m http.server` để bàn giao kết quả; phải dùng công cụ `deploy` được tích hợp sẵn.
- **Tương thích di động**: Thiết kế theo tư duy mobile-first, tối ưu hóa kích thước tài nguyên để tải nhanh.
