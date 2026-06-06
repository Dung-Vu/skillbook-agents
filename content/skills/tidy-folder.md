---
slug: tidy-folder
title: Tidy Folder
command: "/tidy-folder"
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
  Kỹ năng tự động sắp xếp các tệp tin lộn xộn trong thư mục của bạn vào các nhóm rõ ràng (như tài liệu, hình ảnh, mã nguồn) và dọn dẹp các thư mục trống một cách an toàn.
oneLiner: Tự động phân loại tệp tin và dọn dẹp thư mục làm việc gọn gàng, an toàn.
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

Thư mục làm việc hoặc thư mục tải về (Downloads) của bạn thường rất dễ bị lộn xộn sau một thời gian sử dụng. Kỹ năng này giúp bạn tự động sắp xếp lại các tệp tin này một cách khoa học mà không sợ bị mất dữ liệu hay xóa nhầm các tệp tin hệ thống quan trọng.

## ⚙️ Cách Hoạt Động

Quy trình sắp xếp thư mục diễn ra như sau:
```
[Kiểm tra thư mục] ➔ [Tạo bản sao lưu tạm] ➔ [Phân loại theo loại tệp] ➔ [Di chuyển vào thư mục tương ứng]
```
1. **Kiểm tra**: Quét toàn bộ tệp tin trong thư mục và nhận diện định dạng của chúng (như `.pdf`, `.docx`, `.png`).
2. **Sao lưu**: Tạo một bản sao lưu dự phòng tạm thời để đảm bảo an toàn trước khi thay đổi.
3. **Phân loại**: Gom các tệp tin có cùng mục đích sử dụng vào một nhóm: Văn bản (Documents), Hình ảnh (Images), Mã nguồn (Code), File nén (Archives).
4. **Di chuyển**: Chuyển các tệp tin vào đúng vị trí mới, giữ nguyên các tệp cấu hình ẩn (như `.gitignore`, `.env`) và xóa các thư mục rỗng.

## 🚀 Cách Sử Dụng

- **An toàn dữ liệu là trên hết**: Không bao giờ xóa vĩnh viễn tệp tin của người dùng. Mọi thao tác dọn dẹp phải thực hiện thông qua việc di chuyển tệp vào thư mục lưu trữ tạm thời hoặc Thùng rác.
- Giữ nguyên các tệp ẩn bắt đầu bằng dấu chấm (`.`) và các thư mục cấu hình quan trọng của hệ thống.
- Sau khi dọn dẹp xong, gửi báo cáo liệt kê những tệp tin đã di chuyển kèm cấu trúc thư mục mới để người dùng dễ theo dõi.

## 💡 Kịch Bản Lập Trình Thực Tế

### Nhà phát triển:
> "Hãy dọn dẹp và sắp xếp lại các tệp tin trong thư mục Downloads của tôi cho gọn gàng."

### AI Agent (Đã được trang bị Kỹ năng):
> "Tôi sẽ quét thư mục Downloads của bạn, tạo một bản sao lưu tạm thời để đảm bảo an toàn. Sau đó, tôi sẽ gom toàn bộ ảnh vào thư mục Images, tài liệu vào thư mục Documents và xóa các thư mục trống không sử dụng, cuối cùng gửi lại báo cáo cho bạn."

## ⚠️ Lưu Ý & Gotchas

- **Trùng tên tệp**: Nếu có hai tệp trùng tên khi di chuyển sang thư mục mới, AI sẽ tự động đổi tên (ví dụ: thêm ngày tháng vào cuối tên tệp) để tránh ghi đè làm mất file cũ.
- **Lỗi quyền truy cập**: Nếu một tệp đang được mở bởi chương trình khác hoặc bị hệ thống khóa, AI sẽ bỏ qua tệp đó và thông báo lại cho bạn biết.
