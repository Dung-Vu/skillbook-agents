---
slug: teamwork-preview
title: Teamwork Multi-Agent Preview
command: /teamwork-preview
category: workflow-orchestration
tags:
  - teamwork
  - multi-agent
  - coordination
  - collaboration
complexity: expert
platforms:
  - cursor
  - claude-code
  - windsurf
  - gemini-cli
  - universal
featured: true
description: >-
  Khởi tạo mạng lưới làm việc cộng tác giữa nhiều AI Agent chuyên biệt (Dev, QA,
  PM, Architect) để giải quyết các dự án lớn một cách chuyên nghiệp và toàn
  diện.
oneLiner: >-
  Tổ chức mạng lưới cộng tác giữa nhiều AI Agent chuyên biệt để giải quyết dự án
  lớn.
sourceUrl: ''
sourceAuthor: Google DeepMind
lastVerified: '2026-06-01'
relatedSkills:
  - workflow-skill-creator
  - goal
seoTitle: /teamwork-preview - Multi-Agent Collaboration Skill for Complex Projects
seoDescription: >-
  Chỉ dẫn chi tiết cách AI Agent vận hành mô hình cộng tác nhóm
  /teamwork-preview phối hợp giữa Dev, QA, PM và Architect.
provider: antigravity
---

## 📖 Tại Sao Cần Skill Này?

Khi đối mặt với các dự án phần mềm quy mô lớn, một AI Agent đơn lẻ thường bị quá tải do giới hạn ngữ cảnh và thiếu góc nhìn phản biện chéo. Kỹ năng này giải quyết vấn đề bằng cách:
- **Phân rã vai trò chuyên biệt**: Triệu hồi các Agent phụ đóng vai trò cụ thể như PM, Architect, Developer, QA.
- **Cộng tác không đồng bộ**: Cho phép các Agent thảo luận, chia sẻ tài liệu và tự phân chia công việc hiệu quả.
- **Đảm bảo chất lượng**: Tách biệt luồng phát triển và kiểm thử, ngăn chặn code lỗi được bàn giao cho người dùng.

## ⚙️ Cách Hoạt Động

```
[Nhận Dự Án Lớn] ➔ 👥 [Khởi tạo Đội ngũ Agent]
                           ├── PM Agent: Quản lý kế hoạch & Timeline
                           ├── Architect Agent: Thiết kế cấu trúc hệ thống
                           ├── Developer Agent: Thực thi viết mã nguồn
                           └── QA Agent: Viết test & Kiểm thử chất lượng ➔ [Bàn giao sản phẩm hoàn chỉnh]
```

Quy trình thực thi cộng tác:
1. **Khởi tạo & Phân rã**: Dùng `invoke_subagent` để triệu hồi các Agent phụ chuyên biệt kèm system prompt riêng biệt.
2. **Điều phối & Đồng bộ**: PM Agent điều phối tiến độ và tổng hợp cập nhật thông qua tệp `task.md` chung.
3. **Kiểm tra chéo & Bàn giao**: QA Agent chạy kiểm thử code của Developer và PM hợp nhất báo cáo trước khi bàn giao.

## 🚀 Cách Sử Dụng

````markdown
# TEAMWORK MULTI-AGENT INSTRUCTIONS & RULES

## 1. Sub-agent Spawning & Context Separation
- Chỉ khởi tạo sub-agents cho các phần việc độc lập và đòi hỏi vai trò khác biệt rõ rệt (ví dụ: QA viết test cases tách biệt hoàn toàn với Developer viết code).
- Tránh triệu hồi quá nhiều agents phụ không cần thiết gây loãng ngữ cảnh và lãng phí token hệ thống.

## 2. Multi-Agent Communication
- Sử dụng công cụ `send_message` để trao đổi thông tin kỹ thuật giữa các agents một cách có cấu trúc.
- Mỗi agent phụ phải ghi chép tiến trình công việc của mình vào một tệp tin nhật ký riêng để PM Agent dễ dàng hợp nhất.

## 3. Strict Quality Gates
- Code được viết bởi Developer Agent **bắt buộc** phải được review và chạy thử nghiệm bởi QA Agent trước khi bàn giao kết quả cuối cùng cho người dùng.
- If QA phát hiện lỗi, Developer phải quay lại bước sửa đổi và chạy lại kiểm thử.
````

## 💡 Kịch Bản Lập Trình Thực Tế

### Nhà phát triển:
> "Hãy hướng dẫn tôi cách thiết lập và sử dụng kỹ năng Teamwork Multi-Agent Preview để Tổ chức mạng lưới cộng tác giữa nhiều AI Agent chuyên biệt để giải quyết dự án lớn."

### AI Agent (Đã được trang bị Kỹ năng):
> "Tôi đã sẵn sàng. Dưới đây là kịch bản vận hành thực tế cho kỹ năng Teamwork Multi-Agent Preview:
> 1. Thiết lập các thông số cấu hình và tham số đầu vào cần thiết cho hệ thống.
> 2. Thực thi tuần tự các bước xử lý logic và tích hợp theo đúng chỉ dẫn của Teamwork Multi-Agent Preview.
> 3. Kiểm thử đầu ra, tối ưu hóa hiệu năng và cung cấp kết quả hoàn chỉnh."

## ⚠️ Lưu Ý & Gotchas

* **Xung Đột Tài Nguyên (Race Conditions)**: Tránh cho nhiều Agent cùng chỉnh sửa một file nguồn hoặc ghi đè thư mục test cùng lúc.
* **Tối Ưu Giao Tiếp**: Hạn chế thảo luận dông dài; PM Agent cần quyết định nhanh để kết thúc tranh luận kéo dài.
