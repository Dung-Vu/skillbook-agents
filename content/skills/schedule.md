---
slug: schedule
title: Schedule Recurring Task
command: /schedule
category: workflow-orchestration
tags:
  - schedule
  - cron
  - timer
  - automation
complexity: intermediate
platforms:
  - cursor
  - claude-code
  - windsurf
  - gemini-cli
  - universal
featured: false
description: >-
  Lập lịch thực hiện các hành động tự động theo chu kỳ thời gian hoặc hẹn giờ
  chạy một lần cho AI Agent.
oneLiner: Lên lịch chạy tác vụ tự động định kỳ hoặc hẹn giờ chạy một lần.
sourceUrl: ''
sourceAuthor: Google DeepMind
lastVerified: '2026-06-01'
relatedSkills:
  - science-skills-common
  - workflow-skill-creator
seoTitle: /schedule - Scheduled & Recurring Automation Skill for AI
seoDescription: >-
  Quy tắc cấu hình hẹn giờ và lập lịch chạy tác vụ định kỳ with lệnh /schedule
  cho AI Agent.
provider: antigravity
---

## 📖 Tại Sao Cần Skill Này?

- **Lập lịch định kỳ**: Chạy tác vụ tự động theo chu kỳ thời gian (cron) để cập nhật dữ liệu hoặc quét báo cáo mà không cần nhắc nhở thủ công.
- **Hẹn giờ chạy một lần**: Sử dụng khoảng thời gian chờ để tự động kích hoạt tác vụ kiểm tra sau khi các tiến trình nền kết thúc.
- **Chạy nền không đồng bộ**: Theo dõi hệ thống ngầm và chỉ chủ động gửi thông báo/báo cáo khi phát hiện sự cố hoặc thay đổi quan trọng.
## ⚙️ Cách Hoạt Động

```
[Thiết lập Lịch Hẹn Giờ] ➔ 🕒 [Bộ Đếm Chạy Ngầm]
                                 ├── Định kỳ (Cron) ➔ 🔄 [Kích hoạt Tác vụ] ➔ [Báo cáo kết quả]
                                 └── Hẹn giờ một lần ➔ ⏳ [Hết giờ] ➔ [Chạy chẩn đoán]
```

- **Đăng ký tác vụ**: Phân tích yêu cầu lập lịch (định kỳ qua `CronExpression` hoặc một lần qua `DurationSeconds`).
- **Quản lý ngầm**: Đưa tác vụ vào bộ lập lịch nền của hệ thống để đếm ngược hoặc lập chu kỳ.
- **Thực thi & Cảnh báo**: Khi kích hoạt, Agent chạy kịch bản/kỹ năng tương ứng và gửi thông báo kết quả cho người dùng.
## 🚀 Cách Sử Dụng


````markdown
# SCHEDULE COMMAND INSTRUCTIONS & RULES

## 1. Scheduling Types

- Phân biệt rõ hai chế độ lập lịch:
  * **One-shot timer**: Sử dụng `DurationSeconds` để đặt hẹn giờ một lần (tối đa 900 giây).
  * **Recurring cron**: Sử dụng `CronExpression` (5 trường chuẩn) để lên lịch lặp lại.

## 2. Notification & Logging

- Tránh in các log quá dài dòng khi chạy tác vụ ngầm định kỳ.
- Chỉ tạo các cảnh báo hoặc báo cáo ngắn gọn khi phát hiện có biến động dữ liệu hoặc lỗi phát sinh trong hệ thống.
- Sử dụng công cụ quản lý tác vụ ngầm để theo dõi và hủy lịch hẹn khi người dùng yêu cầu.
````

---

## 💡 Kịch Bản Lập Trình Thực Tế


### Nhà phát triển:
> "Hãy hướng dẫn tôi cách thiết lập và sử dụng kỹ năng Schedule Recurring Task để Lên lịch chạy tác vụ tự động định kỳ hoặc hẹn giờ chạy một lần."

### AI Agent (Đã được trang bị Kỹ năng):
> "Tôi đã sẵn sàng. Dưới đây là kịch bản vận hành thực tế cho kỹ năng Schedule Recurring Task:
> 1. Thiết lập các thông số cấu hình và tham số đầu vào cần thiết cho hệ thống.
> 2. Thực thi tuần tự các bước xử lý logic và tích hợp theo đúng chỉ dẫn của Schedule Recurring Task.
> 3. Kiểm thử đầu ra, tối ưu hóa hiệu năng và cung cấp kết quả hoàn chỉnh."

## ⚠️ Lưu Ý & Gotchas


* **Giới Hạn Lặp (Max Iterations)**: Đối với các tác vụ cron định kỳ, luôn cân nhắc thiết lập `MaxIterations` để tự động dừng tiến trình lập lịch sau một số lần chạy nhất định, tránh tiêu tốn tài nguyên vô ích khi người dùng không còn theo dõi.
* **Xử Lý Trùng Lặp**: Đảm bảo rằng phiên chạy mới không bị xung đột tài nguyên hoặc ghi đè lên file kết quả của phiên chạy trước nếu phiên chạy trước chưa kết thúc.
