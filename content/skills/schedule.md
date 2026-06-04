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

Trong các tác vụ quản lý dự án, kiểm tra chất lượng phần mềm, hoặc theo dõi thông tin học thuật, việc thực thi công việc một cách thụ động (chờ người dùng nhắn tin mới chạy) có nhiều hạn chế:
* **Thiếu tính cập nhật**: Không thể tự động phát hiện thay đổi của dữ liệu theo thời gian thực.
* **Tốn thời gian thủ công**: Người dùng phải lặp đi lặp lại việc nhắc nhở AI kiểm tra hệ thống hoặc thu thập báo cáo.

**Khi sử dụng Kỹ năng `/schedule`, AI Agent của bạn sẽ:**
1. **Chạy kịch bản định kỳ (Recurring Tasks)**: Sử dụng cú pháp tiêu chuẩn cron để lập lịch chạy lặp lại (ví dụ: quét bài báo mới mỗi sáng, kiểm tra lỗi code mỗi đêm).
2. **Hẹn giờ một lần (One-shot Timer)**: Thiết lập một khoảng thời gian chờ (Duration) để kích hoạt tác vụ kiểm tra tự động sau khi một tiến trình nền dài hạn kết thúc.
3. **Theo dõi trạng thái không đồng bộ (Background Monitoring)**: Tự động chạy ngầm và chỉ gửi thông báo/báo cáo khi có cập nhật quan trọng hoặc khi phát hiện lỗi.

---

## ⚙️ Cách Hoạt Động

```
[Thiết lập Lịch Hẹn Giờ] ➔ 🕒 [Bộ Đếm Chạy Ngầm]
                                 ├── Định kỳ (Cron) ➔ 🔄 [Kích hoạt Tác vụ] ➔ [Báo cáo kết quả]
                                 └── Hẹn giờ một lần ➔ ⏳ [Hết giờ] ➔ [Chạy chẩn đoán]
```

Quy trình suy nghĩ của Agent khi thực thi `/schedule`:
1. **Xác định loại lịch**: Phân tích xem yêu cầu là hẹn giờ một lần (`DurationSeconds`) hay lập lịch định kỳ (`CronExpression`).
2. **Khởi tạo tiến trình nền**: Sử dụng công cụ lập lịch của hệ thống để đăng ký tác vụ chạy ngầm.
3. **Thực thi và Kiểm định**: Khi đến thời gian hẹn, tự động kích hoạt ngữ cảnh làm việc, thực thi câu lệnh hoặc kỹ năng tương ứng.
4. **Thông báo kết quả**: Gửi báo cáo hoàn thành hoặc cảnh báo lỗi cho người dùng.

---

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
