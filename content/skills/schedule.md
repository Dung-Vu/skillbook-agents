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
  Công cụ hẹn giờ và lên lịch tự động cho AI. Giúp đặt giờ chạy một nhiệm vụ sau một khoảng thời gian nhất định hoặc thiết lập lịch chạy lặp đi lặp lại tự động (như gửi báo cáo hàng ngày).
oneLiner: Đặt hẹn giờ chạy một lần hoặc lên lịch chạy tự động định kỳ cho AI.
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

Khi quản lý hệ thống hoặc dự án, có những công việc bạn không muốn phải tự tay bấm nút chạy mỗi ngày. Skill này giúp bạn:
- **Tự động hóa định kỳ**: Lên lịch cho AI tự động gửi báo cáo, kiểm tra dữ liệu mỗi giờ, mỗi ngày, hoặc mỗi tuần mà không cần nhắc nhở.
- **Hẹn giờ thực hiện**: Đặt hẹn giờ để AI kiểm tra lại công việc sau 5 hoặc 10 phút (ví dụ: đợi bản build code chạy xong rồi báo cáo kết quả).
- **Tiết kiệm thời gian**: Hệ thống sẽ tự chạy ngầm và chỉ gửi thông báo cho bạn khi hoàn thành hoặc có lỗi phát sinh.

## ⚙️ Cách Hoạt Động

Hệ thống lập lịch hoạt động đơn giản như sau:
1. **Tiếp nhận yêu cầu**: Bạn đưa ra yêu cầu hẹn giờ chạy một lần (đếm ngược theo giây) hoặc chạy định kỳ (theo giờ/ngày).
2. **Kích hoạt ngầm**: Hệ thống đưa nhiệm vụ vào bộ đếm thời gian chạy ngầm.
3. **Thực thi và báo cáo**: Khi đến giờ hẹn, AI sẽ tự động thực hiện hành động được giao và gửi thông báo kết quả cho bạn.

## 🚀 Cách Sử Dụng

Khi viết yêu cầu cho trợ lý AI:
- **Hẹn giờ một lần**: Nói rõ thời gian chờ bằng giây hoặc phút (ví dụ: "Hãy kiểm tra lại máy chủ sau 5 phút nữa").
- **Lập lịch định kỳ**: Sử dụng định dạng lịch chuẩn (cron) hoặc nói rõ tần suất (ví dụ: "Cứ 9 giờ sáng mỗi ngày hãy gửi báo cáo").
- **Hủy lịch**: Bạn có thể yêu cầu dừng hoặc xóa lịch hẹn bất cứ lúc nào nếu không còn nhu cầu.

## 💡 Kịch Bản Lập Trình Thực Tế

### 🧑‍💻 Nhà phát triển:
> "Tôi muốn lên lịch cho AI tự động kiểm tra trạng thái hoạt động của website cứ 30 phút một lần và báo cáo nếu website bị sập."

### 🤖 AI Agent (Đã được trang bị Kỹ năng):
> "Tôi đã thiết lập lịch hẹn chạy ngầm cho bạn:
> 
> 1. **Cấu hình**: Chạy kiểm tra mỗi 30 phút.
> 2. **Hành động**: Tôi sẽ ping thử địa chỉ website của bạn để xem có hoạt động không.
> 3. **Báo cáo**: Nếu website hoạt động bình thường, tôi sẽ ghi nhận ngầm và không làm phiền bạn. Nếu website không phản hồi, tôi sẽ gửi tin nhắn cảnh báo khẩn cấp ngay lập tức."

## ⚠️ Lưu Ý & Gotchas

- **Giới hạn số lần chạy**: Để tránh lãng phí tài nguyên, bạn nên thiết lập số lần chạy tối đa (ví dụ: chỉ chạy lặp lại 10 lần rồi tự động dừng).
- **Tránh trùng lặp dữ liệu**: Nếu một nhiệm vụ chạy mất nhiều thời gian hơn chu kỳ lặp lại (ví dụ: tác vụ chạy mất 40 phút nhưng lịch hẹn là 30 phút/lần), các phiên chạy có thể bị đè lên nhau gây lỗi. Hãy thiết lập thời gian giãn cách hợp lý.
