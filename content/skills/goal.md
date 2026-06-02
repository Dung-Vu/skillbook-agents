---
slug: "goal"
title: "Goal Long-Running Task"
command: "/goal"
category: "workflow-orchestration"
tags:
  - "goal"
  - "autonomous"
  - "long-running"
  - "workflow"
complexity: "advanced"
platforms:
  - "cursor"
  - "claude-code"
  - "windsurf"
  - "gemini-cli"
  - "universal"
featured: true
description: "Chế độ chạy tự trị dài hạn giúp AI thực hiện các tác vụ phức tạp liên tục, tự sửa lỗi cho đến khi hoàn thành mục tiêu hoàn toàn."
oneLiner: "Chế độ tự trị dài hạn giúp AI giải quyết các tác vụ phức tạp mà không cần can thiệp."
sourceUrl: ""
sourceAuthor: "Google DeepMind"
lastVerified: "2026-06-01"
relatedSkills:
  - "workflow-skill-creator"
  - "science-skills-common"
seoTitle: "/goal - Autonomous Long-Running Task Skill for AI Agents"
seoDescription: "Bộ quy tắc giúp AI Agent chạy chế độ tự trị /goal để giải quyết các tác vụ phức tạp liên tục, tự động hóa toàn diện quy trình sửa lỗi."
---

## 🧠 Tại Sao AI Agent Của Bạn Cần Kỹ Năng Này?

Khi giải quyết các tác vụ phức tạp như xây dựng hệ thống từ đầu, kiểm thử toàn diện hoặc phân tích dữ liệu lớn, quy trình làm việc thường kéo dài và dễ phát sinh lỗi trung gian. Nếu không có kỹ năng tự trị:
* **Ngắt quãng liên tục**: AI phải dừng lại hỏi ý kiến người dùng sau mỗi bước nhỏ, làm giảm hiệu suất.
* **Không thể tự sửa lỗi**: Khi gặp lỗi hệ thống hoặc compiler, AI dễ bị lặp vòng lặp (loop) hoặc bỏ cuộc.

**Khi sử dụng Kỹ năng `/goal`, AI Agent của bạn sẽ:**
1. **Lập kế hoạch tự trị (Autonomous Planning)**: Tự động phân rã mục tiêu lớn thành một chuỗi nhiệm vụ nhỏ trong tệp `task.md`.
2. **Lặp và tự sửa lỗi (Self-Correction Loop)**: Tự động phát hiện lỗi biên dịch hoặc lỗi runtime, phân tích nguyên nhân và sửa đổi mã nguồn cho đến khi đạt được kết quả mong muốn.
3. **Hoạt động liên tục (Long-Running)**: Khả năng làm việc xuyên suốt nhiều giờ liền (ví dụ: chạy qua đêm) cho đến khi đạt 100% mục tiêu.

---

## ⚙️ Cơ Chế Hoạt Động & Quy Trình Tư Duy

```
[Nhận Mục Tiêu Lớn] ➔ 📝 [Lập Bản Kế Hoạch task.md]
                           ├── Thực thi từng tác vụ con
                           ├── Gặp lỗi ➔ 🔍 [Phân tích & Tự sửa đổi]
                           └── Đạt mục tiêu ➔ 🚀 [Báo cáo nghiệm thu]
```

Quy trình suy nghĩ của Agent khi thực thi `/goal`:
1. **Khởi tạo**: Đọc kỹ yêu cầu của người dùng, phân tích phạm vi công việc và tạo tệp `implementation_plan.md` cùng `task.md`.
2. **Thực thi**: Chạy các lệnh và viết mã nguồn theo kế hoạch.
3. **Đánh giá**: Chạy các bài kiểm thử hoặc kịch bản chẩn đoán sau mỗi bước để đảm bảo tính đúng đắn.
4. **Báo cáo**: Cập nhật tiến độ liên tục vào `task.md` và chỉ dừng lại khi tất cả mục tiêu đã hoàn tất.

---

## 📜 Bộ Quy Tắc Chỉ Dẫn Cho Agent (Prompt Guidelines)

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

---

## ⚠️ Cảnh Báo Vận Hành & Mẹo Tối Ưu (Developer Gotchas)

* **Hạn Ngạch Tokens (Token Budget)**: Các tác vụ chạy dài hạn tiêu tốn lượng token rất lớn. Agent cần liên tục tối ưu ngữ cảnh bằng cách tránh in các output quá lớn ra terminal và chỉ lưu dữ liệu vào các tệp tin kết quả.
* **Xử Lý Vòng Lặp Vô Hạn (Infinite Loops)**: Luôn cài đặt cơ chế phát hiện vòng lặp nếu một bài kiểm thử hoặc câu lệnh chạy thử liên tục thất bại mà không có tiến triển.
