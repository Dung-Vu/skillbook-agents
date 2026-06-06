---
slug: goal
title: Goal Long-Running Task
command: /goal
category: workflow-orchestration
tags:
  - goal
  - autonomous
  - long-running
  - workflow
complexity: advanced
platforms:
  - cursor
  - claude-code
  - windsurf
  - gemini-cli
  - universal
featured: true
description: Chế độ giúp AI tự động thực hiện các chuỗi công việc phức tạp trong thời gian dài, tự xử lý lỗi phát sinh mà không cần người dùng phải can thiệp liên tục.
oneLiner: Chế độ giúp AI tự động hoàn thành các công việc dài hạn và tự sửa lỗi.
sourceUrl: ''
sourceAuthor: Google DeepMind
lastVerified: '2026-06-01'
relatedSkills:
  - workflow-skill-creator
  - science-skills-common
seoTitle: /goal - Autonomous Long-Running Task Skill for AI Agents
seoDescription: >-
  Bộ quy tắc giúp AI Agent chạy chế độ tự trị /goal để giải quyết các tác vụ
  phức tạp liên tục, tự động hóa toàn diện quy trình sửa lỗi.
provider: antigravity
---

## 📖 Tại Sao Cần Skill Này?

Khi thực hiện các dự án lập trình lớn hoặc công việc phức tạp, AI thường phải dừng lại để hỏi ý kiến bạn nhiều lần, hoặc dễ bị treo khi gặp lỗi. Kỹ năng `/goal` biến AI thành một "trợ lý tự hành", có thể tự chia nhỏ công việc, tự chạy thử nghiệm, phát hiện lỗi và sửa chữa cho đến khi hoàn tất mục tiêu cuối cùng.

- **Tự động hóa hoàn toàn**: AI tự đưa ra các quyết định trung gian để hoàn thành nhiệm vụ mà không cần bạn can thiệp liên tục.
- **Tự động sửa lỗi**: Khi chương trình bị lỗi, AI tự động đọc thông báo lỗi và sửa lại mã nguồn cho đúng.
- **Hoạt động bền bỉ**: Thực hiện liên tục cho đến khi toàn bộ mục tiêu đề ra được giải quyết 100%.

## ⚙️ Cách Hoạt Động

```
Nhận mục tiêu lớn ➔ Lập danh sách công việc ➔ Tự động thực thi ➔ Gặp lỗi ➔ Tự sửa lỗi ➔ Đạt mục tiêu & Báo cáo
```

1. **Lập kế hoạch**: Tự động chia nhỏ yêu cầu lớn của bạn thành một danh sách các việc cần làm cụ thể trong tệp `task.md`.
2. **Thực hiện và kiểm tra**: Viết mã nguồn, chạy thử và tự đánh giá xem có lỗi nào phát sinh không sau mỗi bước.
3. **Cập nhật tiến độ**: Ghi nhận những phần việc đã hoàn thành và tiếp tục thực hiện các bước tiếp theo cho đến khi xong hoàn toàn.

## 🚀 Cách Sử Dụng

### Quy tắc chạy chế độ tự hành Goal

- **Tự trị tối đa**: Khi kích hoạt lệnh `/goal`, AI sẽ hạn chế hỏi ý kiến người dùng cho các bước nhỏ, trừ khi gặp lỗi cực kỳ nghiêm trọng không thể tự giải quyết.
- **Theo dõi tiến độ**: Luôn tạo hoặc cập nhật tệp `task.md` trong thư mục làm việc để người dùng có thể mở ra xem tiến độ công việc bất cứ lúc nào.
- **Cơ chế tự sửa lỗi**: Nếu một câu lệnh hoặc chương trình chạy thử bị lỗi, hãy đọc kỹ thông báo lỗi, tìm nguyên nhân gốc rễ và tự động sửa lại mã nguồn. Không thử lại một cách làm lỗi quá 3 lần mà phải tìm phương án thay thế.

## 💡 Kịch Bản Lập Trình Thực Tế

### Nhà phát triển:
> "Hãy giúp tôi viết toàn bộ code và kiểm thử cho một ứng dụng chat đơn giản."

### AI Agent (Đã được trang bị Kỹ năng):
> "Tôi sẽ sử dụng lệnh `/goal` để tự động làm việc này cho bạn:
> 1. Tôi lập danh sách việc cần làm trong file `task.md`.
> 2. Tôi tự động lập trình cả phần giao diện và phần xử lý dữ liệu.
> 3. Tôi chạy thử ứng dụng. Nếu gặp lỗi, tôi đọc thông báo lỗi và tự chỉnh sửa code cho đến khi ứng dụng chạy mượt mà mà không làm phiền bạn."

## ⚠️ Lưu Ý & Gotchas

- **Tiêu tốn tài nguyên**: Chế độ tự động chạy dài hạn có thể tiêu tốn nhiều tài nguyên hệ thống, nên lưu thông tin vào file thay vì in quá nhiều chữ ra màn hình.
- **Tránh vòng lặp vô hạn**: Cần thiết lập cơ chế tự ngắt nếu AI lặp đi lặp lại một hành động lỗi quá nhiều lần mà không tìm ra hướng giải quyết khác.
