---
category: workflow-orchestration
command: /mavis
complexity: advanced
description: Trung tâm quản lý chính của hệ thống Mavis, giúp kiểm soát các hoạt động của trợ lý ảo, lưu trữ bộ nhớ, hẹn giờ tự động hóa và điều phối tài nguyên.
featured: false
lastVerified: '2026-06-03'
oneLiner: Trung tâm quản lý các trợ lý ảo và các tác vụ tự động hóa trong hệ thống Mavis.
platforms:
  - universal
  - cursor
  - windsurf
  - claude-code
  - mcp
provider: minimax
relatedSkills: []
seoDescription: >-
  Hướng dẫn vận hành runtime Mavis. Quản lý session, inter-agent communication,
  memory, hooks và scheduled crons.
seoTitle: Mavis - Minimax Skill for AI Agents
slug: mavis
sourceAuthor: Minimax
sourceUrl: ''
tags:
  - mavis
  - runtime
  - agent
  - orchestration
title: Mavis
---

## 📖 Tại Sao Cần Skill Này?

Mavis giống như hệ điều hành của trợ lý ảo. Kỹ năng này giúp trợ lý tự quản lý bản thân: kết nối và trò chuyện với các trợ lý khác, ghi nhớ thông tin lâu dài của bạn, hẹn giờ chạy tác vụ tự động (như gửi báo cáo mỗi sáng) và kiểm tra trạng thái hoạt động của hệ thống.

## ⚙️ Cách Hoạt Động

Quy trình vận hành:
1. Bạn yêu cầu một tác vụ hệ thống (ví dụ: "Đặt lịch gửi thông báo vào 8h sáng").
2. Trợ lý sử dụng công cụ hệ thống Mavis để đăng ký tác vụ đó.
3. Hệ thống lưu lại cài đặt, hẹn giờ tự động và báo cáo kết quả thiết lập cho bạn.

## 🚀 Cách Sử Dụng

- Sử dụng ngôn ngữ tự nhiên để yêu cầu thiết lập hệ thống, ví dụ "Hẹn giờ chạy lệnh báo cáo mỗi thứ Hai hàng tuần" hoặc "Kiểm tra xem hệ thống có lỗi gì không".
- Để trợ lý tự quản lý bộ nhớ của bạn một cách khoa học (ví dụ "Hãy ghi nhớ sở thích thiết kế của tôi để áp dụng cho các dự án sau").

## 💡 Kịch Bản Lập Trình Thực Tế

### Người dùng:
> "Hãy lên lịch để hệ thống tự động kiểm tra lỗi code vào 10 giờ tối mỗi ngày và lưu sở thích dùng giao diện tối (Dark Mode) của tôi."

### Trợ lý:
> "Tôi đã thực hiện các yêu cầu trên hệ thống Mavis:
> 1. Đặt lịch hẹn giờ (Cron Job) kiểm tra code chạy tự động vào 22:00 hàng ngày.
> 2. Đã lưu sở thích 'Giao diện tối' vào bộ nhớ cá nhân của bạn để áp dụng cho các lần sau."

## ⚠️ Lưu Ý & Gotchas

- **Tránh lưu mật khẩu**: Không bao giờ yêu cầu trợ lý lưu trực tiếp mật khẩu hoặc thông tin cực kỳ nhạy cảm vào bộ nhớ thông thường của hệ thống.
- **Lỗi file cấu hình**: Nếu file cấu hình tự động bị sai định dạng, hệ thống có thể không chạy đúng lịch hẹn. Trợ lý sẽ tự động kiểm tra trạng thái sau khi cài đặt để đảm bảo mọi thứ hoạt động bình thường.
