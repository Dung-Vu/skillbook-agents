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

## 📖 Tại Sao AI Agent Của Bạn Cần Kỹ Năng Này?

Khi đối mặt với các dự án phần mềm hoặc hệ thống thông tin quy mô lớn, một AI Agent đơn lẻ thường gặp khó khăn do giới hạn về dung lượng ngữ cảnh (context limit) và khả năng đảm nhiệm nhiều vai trò cùng lúc:
* **Quá tải thông tin**: Một Agent phải tự viết code, tự kiểm thử, tự sửa lỗi và tự viết tài liệu dễ dẫn đến mất tập trung hoặc chất lượng sản phẩm giảm sút.
* **Thiếu góc nhìn chuyên sâu**: Thiếu đi sự phản biện từ bộ phận kiểm thử (QA) hoặc định hướng tổng quan từ kỹ sư kiến trúc (Architect).

**Khi sử dụng Kỹ năng `/teamwork-preview`, AI Agent của bạn sẽ:**
1. **Phân rã vai trò chuyên biệt (Role Specialization)**: Khởi tạo các Agent phụ đóng vai trò cụ thể: PM (Quản lý dự án), Architect (Kiến trúc sư), Developer (Lập trình viên), QA (Kiểm thử viên).
2. **Cộng tác không đồng bộ (Asynchronous Collaboration)**: Cho phép các Agent thảo luận, phản biện giải pháp của nhau và tự phân chia công việc theo sơ đồ Gantt ảo.
3. **Đảm bảo chất lượng toàn diện (Quality Assurance)**: QA Agent sẽ thực hiện kiểm tra chéo code do Developer Agent viết, đảm bảo không có lỗi biên dịch hoặc logic trước khi bàn giao cho người dùng.

---

## ⚙️ Cơ Chế Hoạt Động & Quy Trình Tư Duy

```
[Nhận Dự Án Lớn] ➔ 👥 [Khởi tạo Đội ngũ Agent]
                           ├── PM Agent: Quản lý kế hoạch & Timeline
                           ├── Architect Agent: Thiết kế cấu trúc hệ thống
                           ├── Developer Agent: Thực thi viết mã nguồn
                           └── QA Agent: Viết test & Kiểm thử chất lượng ➔ [Bàn giao sản phẩm hoàn chỉnh]
```

Quy trình suy nghĩ của Agent khi thực thi `/teamwork-preview`:
1. **Phân tích dự án**: Xác định quy mô và các kỹ năng chuyên môn cần thiết để giải quyết dự án.
2. **Kích hoạt các Sub-agents**: Sử dụng công cụ `invoke_subagent` để triệu hồi các Agent phụ chuyên biệt và cung cấp cho chúng các system prompt riêng phù hợp với vai trò.
3. **Điều phối trao đổi**: PM Agent sẽ làm điều phối viên trung tâm, thu thập tiến độ từ các Agent khác thông qua tệp `task.md` chung.
4. **Hợp nhất kết quả**: Kết hợp mã nguồn từ Developer và báo cáo kiểm thử từ QA để bàn giao một giải pháp hoàn chỉnh đạt tiêu chuẩn cao nhất.

---

## 🚀 Bộ Quy Tắc Chỉ Dẫn Cho Agent (Prompt Guidelines)

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
- Nếu QA phát hiện lỗi, Developer phải quay lại bước sửa đổi và chạy lại kiểm thử.
````

---

## ⚠️ Cảnh Báo Vận Hành & Mẹo Tối Ưu (Developer Gotchas)

* **Xung Đột Tài Nguyên (Race Conditions)**: Khi nhiều Agent cùng chỉnh sửa một file nguồn hoặc ghi đè lên thư mục test, dễ xảy ra lỗi race condition. Đảm bảo các Agent làm việc trên các phân vùng thư mục hoặc tệp tin độc lập.
* **Tối Ưu Hóa Giao Tiếp**: Hạn chế việc các Agent thảo luận quá dông dài hoặc lặp đi lặp lại một vấn đề. PM Agent phải có quyền quyết định và chấm dứt các cuộc tranh luận kỹ thuật kéo dài.
```
