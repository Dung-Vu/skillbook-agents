---
slug: workflow-skill-creator
title: Workflow Skill Creator
command: /workflow-skill-creator
category: workflow-orchestration
tags:
  - skill-creation
  - workflow
  - automation
  - meta-skill
  - reusable
complexity: advanced
platforms:
  - cursor
  - claude-code
  - windsurf
  - gemini-cli
  - universal
featured: false
description: >-
  Siêu kỹ năng (Meta-skill) giúp Agent tự động đúc rút, đóng gói và chuẩn hóa
  các quy trình tương tác phức tạp vừa hoàn thành thành một gói Kỹ năng
  Antigravity hoàn chỉnh có thể tái sử dụng lâu dài.
oneLiner: Đóng gói tự động các quy trình làm việc phức tạp thành kỹ năng tái sử dụng.
sourceUrl: 'https://github.com/google-deepmind'
sourceAuthor: Google DeepMind
lastVerified: '2026-05-31'
relatedSkills:
  - science-skills-common
  - uv
seoTitle: Workflow Skill Creator for AI Agents — Skillbook Agents
seoDescription: >-
  Bộ chỉ dẫn siêu kỹ năng giúp AI Agent đúc rút conversations thành reusable
  skills với cấu trúc chuẩn hóa.
provider: antigravity
---

## 📖 Tại Sao Cần Skill Này?

Trong quá trình phát triển dự án, lập trình viên và AI thường phối hợp thực hiện nhiều quy trình phức tạp. Kỹ năng này đóng vai trò là một siêu kỹ năng (meta-skill) giúp AI Agent tự động hóa việc lưu trữ tri thức bằng cách:
- **Tự động đóng gói tri thức**: Phân tích lịch sử hội thoại, đúc rút các bước xử lý và đóng gói thành Kỹ năng Antigravity tiêu chuẩn có thể tái sử dụng.
- **Quy trình 4 pha nghiêm ngặt**: Thực thi đầy đủ 4 pha: Lên ý tưởng (Brainstorm) ➔ Thiết kế (Design) ➔ Triển khai viết code (Implement) ➔ Chạy kiểm thử xác thực (Validate).
- **Sản phẩm sẵn sàng sử dụng**: Tạo đầy đủ tệp `SKILL.md` và các scripts hỗ trợ chạy siêu tốc bằng `uv run`.

## ⚙️ Cách Hoạt Động

```
[Interaction History] ➔ 🧠 [Pha 1: Phân Tích & Brainstorm] ➔ 📐 [Pha 2: Thiết Kế Input/Output]
                             └── 💻 [Pha 3: Tạo SKILL.md & Scripts] ➔ 🧪 [Pha 4: Chạy Thử E2E]
```

Quy trình thực hiện:
1. **Brainstorm & Thiết kế**: Quét lịch sử hội thoại thành công để xác định Input/Output. Thiết kế cấu trúc thư mục và API cho các script phụ trợ.
2. **Triển khai & Xác thực**: Tạo file `SKILL.md` theo chuẩn và viết script Python (PEP 0723). Chạy thử toàn bộ quy trình với dữ liệu mẫu để đảm bảo hoạt động hoàn hảo.

## 🚀 Cách Sử Dụng

### Hướng Dẫn Kích Hoạt IDE

- **Với Cursor**: Hãy thêm các quy tắc prompt dưới đây vào tệp `.cursorrules` để Cursor tự động kích hoạt siêu năng lực đóng gói quy trình khi bạn đưa ra yêu cầu.
- **Với Windsurf (Cascade)**: Nhúng các quy tắc này vào `.windsurfrules` để Cascade Agent tự động thực hiện quy trình 4 pha đóng gói khi bạn ra lệnh tạo skill.

### Chỉ dẫn & Quy tắc

```markdown
# WORKFLOW SKILL CREATOR INSTRUCTIONS & RULES

## 1. Activation Context
- Chỉ kích hoạt kỹ năng này khi lập trình viên yêu cầu rõ ràng các cụm từ: `"đóng gói quy trình này"`, `"make this a skill"`, `"create a skill from this workflow"`.
- Tuyệt đối không tự ý khởi tạo kỹ năng từ con số 0 nếu chưa có lịch sử hội thoại thực thi thành công trước đó.

## 2. Execution Phases (Mandatory)
Bắt buộc phải báo cáo và chạy qua đầy đủ 4 pha, không được bỏ qua bất kỳ pha nào:
- **Pha 1: Brainstorming**: Tóm tắt lại quy trình đã chạy thành công, liệt kê các file đã tạo, input/output mong đợi.
- **Pha 2: Design**: Thiết kế cấu trúc thư mục kỹ năng mới (ví dụ: `skills/my-new-skill/` gồm `SKILL.md` và thư mục `scripts/`).
- **Pha 3: Implementation**: Viết mã nguồn tệp chỉ dẫn `SKILL.md` chất lượng cao và viết các tệp script Python đi kèm (nếu có).
- **Pha 4: Validation**: Chạy thử nghiệm thực tế gói kỹ năng vừa tạo với dữ liệu giả lập để xác nhận tính khả dụng.

## 3. Standardization
- Mọi script Python đi kèm bắt buộc phải khai báo inline dependencies dạng **PEP 0723** để tương thích tối đa với `uv run`.
- File `SKILL.md` mới tạo phải tuân thủ nghiêm ngặt tiêu chuẩn cấu trúc Luminous Standard.
```

## 💡 Kịch Bản Lập Trình Thực Tế

### 🧑‍💻 Nhà phát triển:
> "Quy trình tải cấu trúc protein từ NCBI, phân tích bằng AlphaFold và kết xuất ảnh 3D bằng PyMOL mà chúng ta vừa làm rất tuyệt vời. Làm sao để đóng gói toàn bộ quy trình này thành một công cụ tự động để tôi dùng lại dễ dàng trong tương lai?"

### 🤖 AI Agent (Đã được trang bị Kỹ năng):
> "Tôi sẽ tự động đóng gói toàn bộ chuỗi hành động thông minh đó thành một Kỹ năng Antigravity hoàn chỉnh có thể tái sử dụng lâu dài. Tôi sẽ thực hiện quy trình 4 pha chuyên nghiệp như sau:"
>
> 1. **Pha 1: Lên ý tưởng & Brainstorm**: Tôi tự động quét lịch sử hội thoại vừa qua để trích xuất các bước chạy thành công, xác định rõ dữ liệu đầu vào (UniProt ID) và kết quả đầu ra mong đợi (ảnh PNG 3D chất lượng cao).
> 2. **Pha 2: Thiết kế cấu trúc**: Tôi lập sơ đồ tổ chức thư mục cho kỹ năng mới, đặt tên là `protein-renderer` và thiết kế giao diện dòng lệnh CLI cho nó.
> 3. **Pha 3: Viết mã nguồn & Chỉ dẫn**: Tôi tự tạo tệp chỉ dẫn `SKILL.md` hướng dẫn AI sau này cách sử dụng, đồng thời viết các script Python hỗ trợ tương thích với `uv run` để tự động hóa hoàn toàn quy trình.
> 4. **Pha 4: Kiểm thử nghiệm thu**: Tôi tự khởi chạy chạy thử kỹ năng mới với một mẫu protein insulin giả lập để chắc chắn mọi thứ hoạt động hoàn hảo trước khi bàn giao cho bạn.
>
> *Quy trình kết thúc, bạn sẽ nhận được một thư mục Kỹ năng chuẩn hóa được lưu trữ an toàn trong kho mã nguồn. Lần sau, bạn chỉ cần yêu cầu AI chạy lệnh `/protein-renderer` là toàn bộ pipeline sẽ tự vận hành hoàn hảo.*

## ⚠️ Lưu Ý & Gotchas

* **Yêu Cầu Lịch Sử Thực Tế**: Kỹ năng này chỉ hoạt động để đóng gói các quy trình đã chạy thành công trong phiên chat, không tạo kỹ năng từ con số 0.
* **Xác Thực (Validation)**: Pha 4 (Chạy thử thực tế) là bắt buộc để phát hiện lỗi cú pháp hoặc thiếu dependencies ngầm trước khi bàn giao.
* **Dependencies PEP 0723**: Đảm bảo các script Python sinh ra khai báo rõ dependencies ở đầu file để tương thích với `uv run`.
