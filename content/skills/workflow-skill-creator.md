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

Trong quá trình phát triển dự án, lập trình viên và AI thường phối hợp thực hiện nhiều quy trình làm việc (workflow) rất phức tạp — bao gồm gọi liên chuỗi API, chuyển đổi cấu trúc dữ liệu, build và chạy kiểm thử tự động. Nếu không có kỹ năng này:
* **Mất mát tri thức**: Khi phiên hội thoại chat kết thúc, toàn bộ phương pháp xử lý thông minh và chuỗi câu lệnh đúc rút được sẽ biến mất. Bạn sẽ phải dạy lại AI từ đầu ở phiên chat mới.
* **Lặp lại thủ công**: AI không biết cách tự hệ thống hóa, đóng gói và biến chuỗi hành động đó thành một công cụ tự động hóa lâu dài.

**Khi được trang bị Siêu Kỹ năng này, AI Agent của bạn sẽ:**
1. **Tự động đóng gói tri thức (Meta-Programming)**: Tự động phân tích lịch sử hội thoại, đúc rút các bước xử lý tinh túy và đóng gói chúng thành một gói Kỹ năng Antigravity tiêu chuẩn.
2. **Quy trình 4 pha nghiêm ngặt (4-Phase Curation)**: Tự động thực thi đầy đủ quy trình: Lên ý tưởng (Brainstorm) ➔ Thiết kế (Design) ➔ Triển khai viết code (Implement) ➔ Chạy kiểm thử xác thực (Validate).
3. **Sản phẩm sẵn sàng tái sử dụng**: Tạo ra đầy đủ tệp chỉ dẫn `SKILL.md` và các scripts hỗ trợ chạy siêu tốc bằng `uv` để nhúng trực tiếp vào dự án tiếp theo.

---

## ⚙️ Cách Hoạt Động

```
[Interaction History] ➔ 🧠 [Pha 1: Phân Tích & Brainstorm] ➔ 📐 [Pha 2: Thiết Kế Input/Output]
                             └── 💻 [Pha 3: Tạo SKILL.md & Scripts] ➔ 🧪 [Pha 4: Chạy Thử E2E]
```

Quy trình suy nghĩ của Agent khi thực thi kỹ năng này:
1. **Pha 1: Brainstorming**: Quét ngược lịch sử hội thoại, tìm các bước thành công và loại bỏ các bước lỗi/thử nghiệm sai. Xác định chính xác Input và Output của kỹ năng.
2. **Pha 2: Thiết kế**: Lên cấu trúc cho thư mục Kỹ năng mới, thiết kế các API của scripts phụ trợ.
3. **Pha 3: Triển khai**: Viết file chỉ dẫn `SKILL.md` theo chuẩn Luminous và viết các script Python hỗ trợ tương thích với `uv run` (PEP 0723).
4. **Pha 4: Xác thực**: Tự động chạy thử kỹ năng mới tạo ít nhất một lần bằng dữ liệu test mẫu để đảm bảo hoạt động hoàn hảo trước khi bàn giao cho lập trình viên.

---

## 🚀 Hướng Dẫn Kích Hoạt IDE

### Với Cursor
Hãy thêm các quy tắc prompt dưới đây vào tệp `.cursorrules` để Cursor tự động kích hoạt siêu năng lực đóng gói quy trình khi bạn đưa ra yêu cầu.

### Với Windsurf (Cascade)
Nhúng các quy tắc này vào `.windsurfrules` để Cascade Agent tự động thực hiện quy trình 4 pha đóng gói khi bạn ra lệnh tạo skill.

---

## 🚀 Cách Sử Dụng

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

---

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

---

## ⚠️ Lưu Ý & Gotchas

* **Bắt Buộc Phải Có Lịch Sử**: Kỹ năng này không hoạt động nếu bạn yêu cầu tạo một kỹ năng hoàn toàn mới mà hai bên chưa từng chạy thử thành công trong phiên chat. AI cần dữ liệu thực nghiệm để đúc rút quy tắc.
* **Xác Thực Là Chìa Khóa**: Đừng bao giờ bàn giao một Kỹ năng mới mà không chạy qua Pha 4 (Validation). Một Kỹ năng không được chạy thử là một Kỹ năng có thể bị lỗi cú pháp hoặc thiếu dependency ngầm.
* **Tối Ưu Dependencies**: Khi Agent sinh code Python cho kỹ năng mới, hãy luôn yêu cầu Agent khai báo chi tiết các thư viện dùng thêm ở header để người dùng sau này không phải cài đặt môi trường ảo bằng tay.
