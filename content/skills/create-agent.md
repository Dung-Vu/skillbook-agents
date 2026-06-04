---
category: workflow-orchestration
command: /create-agent
complexity: intermediate
description: >-
  Kỹ năng khởi tạo và thiết lập cấu hình cho một Agent mới trên đĩa. Hỗ trợ tự
  động tạo cấu trúc thư mục, tệp agent.md đóng vai trò là system prompt và các
  tệp cấu hình cần thiết để Agent hoạt động độc lập hoặc tích hợp vào dự án.
featured: false
lastVerified: '2026-06-03'
oneLiner: Khởi tạo và cấu hình nhanh một Agent mới độc lập hoặc tích hợp trong dự án.
platforms:
  - universal
  - cursor
  - windsurf
  - claude-code
  - mcp
provider: minimax
relatedSkills:
  - init-harness
  - skill-creator
  - mavis
seoDescription: >-
  Kỹ năng khởi tạo Agent mới trên đĩa cho AI Agent. Hướng dẫn thiết lập tệp
  agent.md, cấu trúc thư mục và cấu hình hệ thống.
seoTitle: Create Agent - Minimax Skill for AI Agents
slug: create-agent
sourceAuthor: Minimax
sourceUrl: ''
tags:
  - agent
  - scaffold
  - mavis
  - configuration
title: Create Agent
---

## 📖 Tại Sao Cần Skill Này?

AI Agent cần kỹ năng này để tự động thiết lập và mở rộng đội ngũ Agent của chính nó. Khi một nhiệm vụ đòi hỏi kỹ năng chuyên biệt mới vượt quá khả năng của các Agent hiện tại, thay vì làm quá tải Agent hiện có, hệ thống có thể tạo ra một Agent mới có trách nhiệm cụ thể để chia sẻ công việc, giúp duy trì cấu trúc module và tối ưu hóa chi phí vận hành prompt.

---

## ⚙️ Cách Hoạt Động

Quy trình hoạt động tuân theo 5 bước rõ ràng:
1. **Chọn tên**: Đặt tên dạng `kebab-case` mô tả chính xác trách nhiệm (ví dụ: `payments-expert`), kiểm tra tên đã tồn tại chưa qua `mavis agent info`.
2. **Khởi dựng (Scaffold)**: Chạy lệnh `mavis agent new <name>` để sinh cấu trúc thư mục mặc định hoặc tự tạo thủ công trong `.harness/reins/<name>/`.
3. **Viết agent.md**: Tạo file system prompt trả lời cụ thể 4 câu hỏi: Vai trò là gì, Phạm vi quản lý (Scope), Cách làm việc, và Tiêu chuẩn dừng lại (Stop when).
4. **Bổ sung thành phần phụ trợ**: Thêm `config.yaml` (nếu cần thay đổi model/thinking), `PERSONA.md` (giọng điệu) hoặc hooks/crons (nếu có).
5. **Xác thực**: Chạy `mavis agent info <name>` để đảm bảo file YAML/markdown phân tích cú pháp thành công.

Sơ đồ quy trình:
```
[Yêu cầu tạo Agent] ➔ 🏷️ [Chọn tên & Kiểm tra trùng] ➔ 📂 [Tạo Scaffold thư mục]
                             ➔ 📝 [Viết agent.md (system prompt)] ➔ 🧪 [Xác thực mavis agent info]
```

---

## 🚀 Cách Sử Dụng

```markdown
# QUY TẮC KHỞI TẠO AGENT CHUYÊN BIỆT
- **K kebab-case**: Tên agent phải viết thường, cách nhau bằng dấu gạch ngang và phản ánh đúng trách nhiệm (không dùng Senior/Junior).
- **Cấu trúc agent.md bắt buộc**: File system prompt phải chứa YAML frontmatter đóng và đủ các mục: Scope, How you work, và Stop when.
- **Tiêu chí dừng rõ ràng**: Phần `Stop when` phải chứa các tiêu chí đo lường được (ví dụ: "chạy build thành công, kiểm thử pass và đã commit").
- **Không tự dịch lệnh**: Bắt buộc đọc tệp tham chiếu lệnh dòng lệnh tương ứng với nền tảng (`win32` vs `darwin/linux`) trước khi thực hiện.
```

---

## 💡 Kịch Bản Lập Trình Thực Tế

### Nhà phát triển:
> "Hãy hướng dẫn tôi cách thiết lập và sử dụng kỹ năng Create Agent để Khởi tạo và cấu hình nhanh một Agent mới độc lập hoặc tích hợp trong dự án."

### AI Agent (Đã được trang bị Kỹ năng):
> "Tôi đã sẵn sàng. Dưới đây là kịch bản vận hành thực tế cho kỹ năng Create Agent:
> 1. Thiết lập các thông số cấu hình và tham số đầu vào cần thiết cho hệ thống.
> 2. Thực thi tuần tự các bước xử lý logic và tích hợp theo đúng chỉ dẫn của Create Agent.
> 3. Kiểm thử đầu ra, tối ưu hóa hiệu năng và cung cấp kết quả hoàn chỉnh."

## ⚠️ Lưu Ý & Gotchas

* **Trùng lặp phạm vi**: Tránh tạo hai Agent có phạm vi công việc chồng chéo lên nhau, điều này làm bộ điều phối (orchestrator) phân vai ngẫu nhiên và mất kiểm soát.
* **YAML lỗi cú pháp**: Lỗi phổ biến là thụt lề bằng phím tab hoặc thiếu ký tự đóng `---` ở frontmatter, khiến Agent không xuất hiện trong danh sách.
* **Stop condition quá mơ hồ**: Viết "khi hoàn thành công việc" sẽ khiến Agent báo cáo xong mà không thực tế chạy kiểm thử hay build thử.
