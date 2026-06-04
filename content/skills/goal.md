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
description: >-
  Chế độ chạy tự trị dài hạn giúp AI thực hiện các tác vụ phức tạp liên tục, tự
  sửa lỗi cho đến khi hoàn thành mục tiêu hoàn toàn.
oneLiner: >-
  Chế độ tự trị dài hạn giúp AI giải quyết các tác vụ phức tạp mà không cần can
  thiệp.
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

Khi giải quyết các tác vụ phức tạp, quy trình làm việc thường dễ phát sinh lỗi và ngắt quãng. Kỹ năng `/goal` giúp AI hoạt động tự trị dài hạn thông qua:
* **Lập kế hoạch tự trị**: Tự động phân rã mục tiêu lớn thành các nhiệm vụ nhỏ trong `task.md`.
* **Vòng lặp tự sửa lỗi**: Tự phát hiện lỗi biên dịch hoặc runtime, phân tích nguyên nhân và sửa đổi mã nguồn.
* **Hoạt động liên tục**: Thực thi xuyên suốt cho đến khi đạt 100% mục tiêu.

## ⚙️ Cách Hoạt Động

```
[Nhận Mục Tiêu Lớn] ➔ 📝 [Lập Bản Kế Hoạch task.md]
                           ├── Thực thi từng tác vụ con
                           ├── Gặp lỗi ➔ 🔍 [Phân tích & Tự sửa đổi]
                           └── Đạt mục tiêu ➔ 🚀 [Báo cáo nghiệm thu]
```

Quy trình suy nghĩ của Agent khi thực thi `/goal`:
1. **Khởi tạo**: Phân tích yêu cầu và tạo kế hoạch trong `implementation_plan.md` và `task.md`.
2. **Thực thi & Đánh giá**: Viết mã và chạy kiểm thử chẩn đoán sau mỗi bước.
3. **Báo cáo & Tự sửa lỗi**: Cập nhật tiến độ vào `task.md`, tự động sửa lỗi và chỉ dừng lại khi hoàn thành.

## 🚀 Cách Sử Dụng

````markdown
# GOAL COMMAND INSTRUCTIONS & RULES

## 1. Autonomous Execution Rule
- Khi người dùng kích hoạt lệnh `/goal`, hãy chuyển sang chế độ tự trị tối đa.
- Không dừng lại để hỏi ý kiến người dùng cho các quyết định trung gian trừ khi gặp lỗi nghiêm trọng không thể khắc phục.

## 2. Planning & Tracking
- Luôn tạo hoặc cập nhật tệp `task.md` trong thư mục làm việc để quản lý danh sách việc cần làm.
- Cập nhật trạng thái của từng tác vụ (`[ ]`, `[/]`, `[x]`) sau mỗi bước thực thi để người dùng có thể theo dõi tiến độ bất kỳ lúc nào.

## 3. Self-Correction & Robustness
- Nếu một lệnh hoặc script thất bại, hãy đọc kỹ thông báo lỗi từ console, tìm nguyên nhân gốc rễ và tự động sửa mã nguồn.
- Không thử lại cùng một phương án lỗi quá 3 lần. Thay vào đó, hãy tìm cách tiếp cận thay thế.
````

## 💡 Kịch Bản Lập Trình Thực Tế

### Nhà phát triển:
> "Hãy hướng dẫn tôi cách thiết lập và sử dụng kỹ năng Goal Long-Running Task để Chế độ tự trị dài hạn giúp AI giải quyết các tác vụ phức tạp mà không cần can thiệp."

### AI Agent (Đã được trang bị Kỹ năng):
> "Tôi đã sẵn sàng. Dưới đây là kịch bản vận hành thực tế cho kỹ năng Goal Long-Running Task:
> 1. Thiết lập các thông số cấu hình và tham số đầu vào cần thiết cho hệ thống.
> 2. Thực thi tuần tự các bước xử lý logic và tích hợp theo đúng chỉ dẫn của Goal Long-Running Task.
> 3. Kiểm thử đầu ra, tối ưu hóa hiệu năng và cung cấp kết quả hoàn chỉnh."

## ⚠️ Lưu Ý & Gotchas

- **Hạn ngạch Tokens**: Các tác vụ dài hạn tiêu tốn lượng token lớn; ưu tiên lưu dữ liệu vào tệp tin thay vì in output terminal quá lớn.
- **Vòng lặp vô hạn**: Luôn cài đặt cơ chế ngắt tự động nếu một quy trình kiểm thử hoặc câu lệnh liên tục thất bại mà không có tiến triển.
