---
category: workflow-orchestration
command: /skill-creator
complexity: advanced
description: >-
  Công cụ hỗ trợ tạo mới các kỹ năng (Skills) cho AI theo chuẩn Luminous. Hỗ trợ tạo cấu trúc thư mục chuẩn, file hướng dẫn SKILL.md và các đoạn mã tự động hóa đi kèm.
featured: false
lastVerified: '2026-06-03'
oneLiner: Tạo mới kỹ năng cho AI theo cấu trúc chuẩn hóa và tự động.
platforms:
  - universal
  - cursor
  - windsurf
  - claude-code
  - mcp
provider: minimax
relatedSkills: []
seoDescription: >-
  Cách tạo một Kỹ năng Antigravity mới chuẩn Luminous. Cấu trúc thư mục, viết
  script tương thích uv, chạy lint và đánh giá hiệu năng.
seoTitle: Skill Creator - Minimax Skill for AI Agents
slug: skill-creator
sourceAuthor: Minimax
sourceUrl: ''
tags:
  - skill
  - scaffold
  - mavis
  - luminous
title: Skill Creator
---

## 📖 Tại Sao Cần Skill Này?

Khi làm việc với các hệ thống AI, việc lặp đi lặp lại một quy trình hướng dẫn thủ công sẽ tốn rất nhiều thời gian. Cách giải quyết triệt để là đóng gói quy trình đó thành một Kỹ năng (Skill) chuẩn hóa. Skill này giúp bạn:
- **Tự động đóng gói**: Dễ dàng biến các thao tác phức tạp (như viết code, gọi API, phân tích dữ liệu) thành một kỹ năng AI có thể tái sử dụng ngay lập tức.
- **Chuẩn hóa cấu trúc**: Tạo ra các thư mục và file hướng dẫn chuyên nghiệp để bất kỳ trợ lý AI nào cũng đọc hiểu được.
- **Tích hợp mã chạy tự động**: Cho phép chèn các đoạn mã Python để thực thi các tác vụ thực tế khi AI kích hoạt kỹ năng.

## ⚙️ Cách Hoạt Động

Quy trình tạo một kỹ năng mới diễn ra như sau:
1. **Kiểm tra trùng lặp**: Hệ thống xem kỹ năng bạn muốn tạo đã có sẵn trên hệ thống chưa để tránh trùng lặp.
2. **Tạo khung dự án**: Thiết lập thư mục chứa file hướng dẫn `SKILL.md` và các file mã nguồn bổ trợ (nằm trong thư mục `scripts/`).
3. **Kiểm tra chất lượng**: Chạy một công cụ kiểm lỗi (linter) để đảm bảo file viết đúng cú pháp.
4. **Đánh giá hiệu năng**: Thử nghiệm so sánh xem trợ lý AI khi sử dụng kỹ năng mới này hoạt động tốt hơn thế nào so với việc dùng câu lệnh thông thường.

## 🚀 Cách Sử Dụng

Khi làm việc với trợ lý AI để tạo kỹ năng mới:
- Cho biết rõ tên kỹ năng, mục đích sử dụng và các bước thực hiện cụ thể.
- Yêu cầu AI khai báo rõ các thư viện phần mềm cần dùng trong file script để hệ thống tự động cài đặt.
- Luôn chạy linter để kiểm tra lỗi định dạng trước khi hoàn thành.

## 💡 Kịch Bản Lập Trình Thực Tế

### 🧑‍💻 Nhà phát triển:
> "Tôi vừa xây dựng xong một quy trình tự động sao lưu dữ liệu lên đám mây. Hãy giúp tôi tạo một Kỹ năng mới để trợ lý AI sau này có thể tự động chạy quy trình này."

### 🤖 AI Agent (Đã được trang bị Kỹ năng):
> "Tôi sẽ khởi tạo Kỹ năng sao lưu dữ liệu mới cho bạn theo các bước sau:
> 
> 1. **Tạo thư mục**: Khởi tạo thư mục kỹ năng mới với file hướng dẫn `SKILL.md`.
> 2. **Viết kịch bản**: Tạo file script Python trong thư mục `scripts/` chứa mã kết nối đám mây và thực hiện sao lưu.
> 3. **Kiểm tra lỗi**: Chạy chương trình kiểm tra cú pháp để đảm bảo không có lỗi định dạng markdown.
> 4. **Bàn giao**: Kỹ năng đã sẵn sàng hoạt động. Bây giờ bạn chỉ cần gọi lệnh `/backup-data` để yêu cầu AI thực hiện."

## ⚠️ Lưu Ý & Gotchas

- **Tránh viết quá dài dòng**: Không đưa các đoạn mã nguồn ví dụ quá dài hoặc tài liệu giải thích lý thuyết lê thê vào file hướng dẫn chính `SKILL.md`. Hãy chuyển chúng vào các file tham chiếu phụ để file hướng dẫn chính luôn ngắn gọn, súc tích.
- **Bắt buộc kiểm tra lỗi**: Việc bỏ qua bước chạy linter có thể dẫn đến việc tạo ra các kỹ năng bị lỗi cú pháp, khiến AI sau này không thể nhận diện hoặc hiểu sai cách thức hoạt động.
