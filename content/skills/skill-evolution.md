---
category: workflow-orchestration
command: /skill-evolution
complexity: advanced
description: >-
  Định hình quy trình tiến hóa kỹ năng bằng cách cập nhật các chỉ dẫn trong tệp
  `SKILL.md` có sẵn từ tín hiệu runtime hoặc đề xuất thực tế. Đảm bảo vá lỗi an
  toàn, bảo toàn các logic cũ và tránh phình to prompt.
featured: false
lastVerified: '2026-06-03'
oneLiner: Cập nhật và tiến hóa nội dung kỹ năng có sẵn từ phản hồi và thực nghiệm.
platforms:
  - universal
  - cursor
  - windsurf
  - claude-code
  - mcp
provider: minimax
relatedSkills:
  - skill-creator
  - skill-refiner
  - mavis
seoDescription: >-
  Tiến hóa kỹ năng AI Agent qua evolution channel. Tự động báo cáo lỗi/thiếu sót
  qua Signal và đề xuất tính năng qua Proposal.
seoTitle: Skill Evolution - Minimax Skill for AI Agents
slug: skill-evolution
sourceAuthor: Minimax
sourceUrl: ''
tags:
  - skill
  - evolution
  - patching
  - maintenance
title: Skill Evolution
---

## 📖 Tại Sao Cần Skill Này?

Khi môi trường thay đổi (API nâng cấp, hệ thống đổi câu lệnh) hoặc khi phát hiện một chỉ dẫn prompt trong kỹ năng đang bị sai lệch, hệ thống cần một quy trình tiến hóa kỹ năng an toàn. Kỹ năng này hướng dẫn Agent phân loại phản hồi, ghi nhận lỗi qua kênh Signal hoặc đề xuất kỹ năng mới qua kênh Proposal để đảm bảo các thay đổi được kiểm duyệt an toàn.

---

## ⚙️ Cách Hoạt Động

Quy trình hoạt động:
1. **Phát hiện tín hiệu**:
   - Nếu kỹ năng hiện tại bị lỗi/thiếu sót: Chuẩn bị gửi một **Signal**.
   - Nếu phát hiện quy trình làm việc mới có thể tái sử dụng: Chuẩn bị gửi một **Proposal**.
2. **Thu thập bằng chứng**: Trích xuất đoạn hội thoại thực tế hoặc dấu vết lỗi (dưới 200 ký tự cho Signal, dưới 300 ký tự cho Proposal).
3. **Gửi lên hệ thống**: Sử dụng các câu lệnh CLI Mavis tương ứng (như `mavis skill signal report`).
4. **Triage ban đêm**: Kênh tiến hóa chạy ngầm hàng đêm sẽ tự động phân loại và giao việc cập nhật lại cho `skill-refiner` hoặc `skill-creator`.

Sơ đồ quy trình:
```
[Tín hiệu lỗi / Quy trình mới] ➔ 📋 [Phân loại: Signal hay Proposal] ➔ 🔍 [Trích xuất bằng chứng hội thoại]
                                     ➔ 💻 [Chạy Mavis CLI report] ➔ 🔄 [Đợi quy trình Triage ban đêm]
```

---

## 🚀 Cách Sử Dụng

```markdown
# QUY TẮC TIẾN HÓA KỸ NĂNG
- **Bằng chứng xác thực**: Mọi Signal và Proposal gửi lên bắt buộc phải đính kèm bằng chứng thực tế được trích dẫn trực tiếp từ lịch sử hội thoại, không tự tóm tắt.
- **Không tự ý sửa built-in skill**: Tuyệt đối không chỉnh sửa trực tiếp các kỹ năng tích hợp sẵn của hệ thống. Phải gửi Signal và đề xuất tạo pull request (MR) sửa đổi.
- **Chỉ gửi Proposal khi lặp lại**: Một tác vụ phức tạp chỉ chạy một lần duy nhất không đủ điều kiện để tạo Proposal.
```

---

## 💡 Kịch Bản Lập Trình Thực Tế

### Nhà phát triển:
> "Hãy hướng dẫn tôi cách thiết lập và sử dụng kỹ năng Skill Evolution để Cập nhật và tiến hóa nội dung kỹ năng có sẵn từ phản hồi và thực nghiệm."

### AI Agent (Đã được trang bị Kỹ năng):
> "Tôi đã sẵn sàng. Dưới đây là kịch bản vận hành thực tế cho kỹ năng Skill Evolution:
> 1. Thiết lập các thông số cấu hình và tham số đầu vào cần thiết cho hệ thống.
> 2. Thực thi tuần tự các bước xử lý logic và tích hợp theo đúng chỉ dẫn của Skill Evolution.
> 3. Kiểm thử đầu ra, tối ưu hóa hiệu năng và cung cấp kết quả hoàn chỉnh."

## ⚠️ Lưu Ý & Gotchas

* **Gửi đề xuất sửa lỗi trong Signal**: Lỗi phổ biến là viết hướng dẫn vá lỗi trực tiếp vào nội dung Signal. Kênh Signal chỉ ghi nhận lỗi và bằng chứng, việc thiết kế bản vá sẽ do Agent phụ trách tinh chỉnh (refiner) thực hiện sau.
* **Lỗi phân loại nhầm**: Nhầm lẫn giữa lỗi logic của Agent (Agent không làm theo chỉ dẫn đúng) với lỗi của Skill. Nếu lỗi do Agent không đọc kỹ file chỉ dẫn, tuyệt đối không gửi Signal.
