---
category: workflow-orchestration
command: /skill-refiner
complexity: advanced
description: >-
  Kỹ năng giúp sửa đổi, tối ưu hóa và làm gọn các hướng dẫn (prompt) hoặc mã nguồn trong các kỹ năng sẵn có một cách an toàn mà không làm hỏng tính năng cũ.
featured: false
lastVerified: '2026-06-03'
oneLiner: 'Tự động sửa lỗi, tối ưu hóa và dọn dẹp các kỹ năng AI hiện có một cách an toàn.'
platforms:
  - universal
  - cursor
  - windsurf
  - claude-code
  - mcp
provider: minimax
relatedSkills:
  - skill-creator
  - mavis
seoDescription: >-
  Tối ưu hóa và làm gọn tệp kỹ năng AI. Sử dụng cơ chế so khớp hash (CAS) và
  viết các bản vá surgical patch an toàn.
seoTitle: Skill Refiner - Minimax Skill for AI Agents
slug: skill-refiner
sourceAuthor: Minimax
sourceUrl: ''
tags:
  - skill
  - refine
  - optimization
  - audit
title: Skill Refiner
---

## 📖 Tại Sao Cần Skill Này?

Kỹ năng này giúp AI tự động cập nhật, sửa lỗi nhỏ hoặc cải tiến các kỹ năng khác mà không lo làm hỏng hay đè lên cấu trúc cũ. Nó giống như việc "vá áo" - chỉ sửa đúng chỗ cần sửa thay vì làm lại toàn bộ tệp tin từ đầu.

## ⚙️ Cách Hoạt Động

Quy trình tinh chỉnh một kỹ năng diễn ra như sau:
1. **Tìm lỗi**: Phát hiện ra điểm cần sửa thông qua báo cáo lỗi hoặc yêu cầu trực tiếp từ bạn.
2. **Đọc nội dung**: Xem nội dung hiện tại của kỹ năng và lấy một "mã bảo mật" (mã hash) để làm căn cứ.
3. **Tạo bản vá**: Chỉ viết lại chính xác phần thông tin bị lỗi hoặc cần nâng cấp.
4. **Cập nhật an toàn**: Áp dụng bản vá lên hệ thống bằng cách đối chiếu mã bảo mật để tránh ghi đè nhầm dữ liệu.

Sơ đồ quy trình:
```
[Phát hiện lỗi/Yêu cầu] ➔ 📖 [Đọc nội dung & Lấy mã bảo mật] ➔ 📐 [Tạo bản vá nhỏ]
                         ➔ 🔒 [Xác thực mã bảo mật] ➔ 💻 [Cập nhật file thành công]
```

## 🚀 Cách Sử Dụng

```markdown
# CÁC QUY TẮC KHI SỬ DỤNG
- Luôn sử dụng mã bảo mật khi cập nhật để tránh ghi đè nhầm khi có nhiều Agent chạy cùng lúc.
- AI không được tự ý sửa đổi chính file hướng dẫn của kỹ năng này (`skill-refiner`).
- Giữ nguyên phần thông tin cấu hình (frontmatter) ở đầu file kỹ năng.
- Không lưu mật khẩu, khóa API hoặc thông tin cá nhân nhạy cảm vào file kỹ năng.
```

## 💡 Kịch Bản Lập Trình Thực Tế

### Nhà phát triển:
> "Hãy giúp tôi cập nhật hướng dẫn cho kỹ năng viết báo cáo để nó tập trung nhiều hơn vào số liệu thay vì từ ngữ chung chung."

### AI Agent (Đã được trang bị Kỹ năng):
> "Tôi sẽ sử dụng kỹ năng Skill Refiner để tìm kỹ năng viết báo cáo, đọc nội dung hiện tại, thay thế phần hướng dẫn cũ bằng hướng dẫn mới tập trung vào số liệu, và cập nhật lại file đó một cách an toàn."

## ⚠️ Lưu Ý & Gotchas

* **Lỗi xung đột dữ liệu**: Nếu có ai đó đã sửa file này trước bạn, mã bảo mật cũ sẽ không còn khớp. Bạn cần đọc lại nội dung mới nhất của file và thực hiện lại các bước sửa đổi.
* **Kỹ năng mặc định của hệ thống**: Một số kỹ năng có sẵn của hệ thống được bảo vệ và không thể chỉnh sửa trực tiếp. Để thay đổi chúng, bạn cần dùng các công cụ lập trình chuyên dụng hoặc gửi yêu cầu lên hệ thống Git.

