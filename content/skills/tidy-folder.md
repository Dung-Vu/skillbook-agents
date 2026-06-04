---
slug: tidy-folder
title: Tidy Folder
command: ''
category: tool-integration
tags:
  - folder-cleanup
  - data-safety
  - file-organization
  - automation
complexity: starter
platforms:
  - universal
  - cursor
  - windsurf
  - claude-code
  - mcp
featured: false
description: >-
  Công cụ tự động hóa việc dọn dẹp và sắp xếp thư mục thông minh. Phân loại tệp
  tin theo định dạng, di chuyển các tệp rác vào thư mục lưu trữ tạm thời và đảm
  bảo an toàn dữ liệu tuyệt đối.
oneLiner: Dọn dẹp và sắp xếp tệp tin trong thư mục một cách khoa học và an toàn.
sourceUrl: ''
sourceAuthor: Minimax
lastVerified: '2026-06-03'
relatedSkills: []
seoTitle: Tidy Folder - Minimax Skill for AI Agents
seoDescription: >-
  Hướng dẫn AI Agent dọn dẹp thư mục thông minh: sao lưu dữ liệu, phân loại tệp
  tin và dọn dẹp thư mục rác an toàn.
provider: minimax
---

## 📖 Tại Sao Cần Skill Này?

Thư mục làm việc hoặc thư mục Tải xuống (Downloads) của người dùng thường tích tụ hàng trăm tệp tin lộn xộn, gây khó khăn cho việc tìm kiếm. Kỹ năng này cho phép Agent thực hiện dọn dẹp thư mục theo quy trình cực kỳ an toàn: tạo bản sao lưu (Backup) tạm thời trước khi di chuyển, phân loại tệp tin vào các thư mục con tương ứng (Documents, Images, Archives, v.v.), tránh xóa nhầm các tệp tin quan trọng hoặc tệp tin hệ thống.

## ⚙️ Cách Hoạt Động

Quy trình dọn dẹp thư mục an toàn:
```
Quet thu muc nguon --> Tao ban sao luu du phong --> Phan loai tep tin --> Di chuyen & Don dep thu muc trong
```
1. **Kiểm tra đầu vào**: Đọc danh sách các tệp tin trong thư mục chỉ định và phân tích đuôi mở rộng (`.pdf`, `.docx`, `.png`).
2. **Sao lưu**: Tạo thư mục backup tạm thời để lưu trữ trạng thái trước khi thực hiện dọn dẹp.
3. **Phân loại**: Sắp xếp tệp tin vào nhóm: Văn bản (Documents), Hình ảnh (Images), Lập trình (Code), Nén (Archives).
4. **Di chuyển an toàn**: Di chuyển tệp tin vào thư mục phân loại, giữ lại các tệp tin hệ thống ẩn (`.gitignore`, `.env`) và xóa các thư mục rỗng.

## 🚀 Cách Sử Dụng

- **An toàn dữ liệu là số một**: Tuyệt đối không xóa trực tiếp bất kỳ tệp tin nào của người dùng. Mọi hành động dọn dẹp phải thông qua việc di chuyển vào thư mục Archive hoặc Trash tạm thời.
- Giữ nguyên các tệp ẩn khởi đầu bằng dấu chấm (`.`) và các thư mục cấu hình hệ thống quan trọng.
- Sau khi hoàn thành, xuất báo cáo danh sách các tệp tin đã di chuyển kèm sơ đồ cây thư mục mới trực quan.

## 💡 Kịch Bản Lập Trình Thực Tế

### Nhà phát triển:
> "Hãy hướng dẫn tôi cách thiết lập và sử dụng kỹ năng Tidy Folder để Dọn dẹp và sắp xếp tệp tin trong thư mục một cách khoa học và an toàn."

### AI Agent (Đã được trang bị Kỹ năng):
> "Tôi đã sẵn sàng. Dưới đây là kịch bản vận hành thực tế cho kỹ năng Tidy Folder:
> 1. Thiết lập các thông số cấu hình và tham số đầu vào cần thiết cho hệ thống.
> 2. Thực thi tuần tự các bước xử lý logic và tích hợp theo đúng chỉ dẫn của Tidy Folder.
> 3. Kiểm thử đầu ra, tối ưu hóa hiệu năng và cung cấp kết quả hoàn chỉnh."

## ⚠️ Lưu Ý & Gotchas

- **Xung đột tên tệp**: Đề xuất giải pháp ghi đè hoặc tự động đổi tên (thêm hậu tố ngày tháng) nếu xảy ra hiện tượng trùng tên tệp tin ở thư mục đích.
- **Giới hạn quyền đọc ghi**: Cảnh báo người dùng nếu gặp lỗi phân quyền (Permission Denied) đối với các tệp tin hệ thống đang mở.
