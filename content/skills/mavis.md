---
category: workflow-orchestration
command: /mavis
complexity: advanced
description: >-
  Điểm nhập runtime chính của hệ thống Mavis. Kỹ năng này quản lý vòng đời
  Session, giao tiếp giữa các Agent, thiết lập Reminders/Crons, cấu hình Git
  hooks và điều phối tài nguyên hệ thống.
featured: false
lastVerified: '2026-06-03'
oneLiner: 'Quản lý vòng đời session, giao tiếp liên Agent và vận hành hệ thống Mavis.'
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

## 📖 Tại Sao AI Agent Của Bạn Cần Kỹ Năng Này?

Mavis là kỹ năng vận hành cốt lõi giúp Agent điều khiển chính hệ thống của nó. Agent cần kỹ năng này để kiểm tra danh sách Agent khác, trao đổi thông điệp liên-session, lên lịch thực hiện công việc tự động (crons), thiết lập các chốt chặn kiểm thử mã nguồn (hooks), và quản lý bộ nhớ dài hạn.

---

## ⚙️ Cơ Chế Hoạt Động & Quy Trình Tư Duy

Hệ thống được vận hành thông qua CLI của Mavis và các file cấu hình tương ứng:
1. **Ánh xạ khả năng**: Phân loại yêu cầu của người dùng vào các mục như `agent`, `session`, `memory`, `cron`, `hook`, `skill-management` hoặc `skill-evolution`.
2. **Đọc tài liệu phụ trợ**: Đọc tệp hướng dẫn tương ứng trong thư mục `references/` (ví dụ: `references/cron.md` nếu muốn tạo lịch nhắc nhở).
3. **Chọn lệnh CLI**: Áp dụng các lệnh Mavis chuẩn hóa như `mavis agent info`, `mavis communication send`, `mavis cron self`, hoặc `mavis hook create`.

Sơ đồ quy trình:
```
[Yêu cầu vận hành Mavis] ➔ 📂 [Phân loại & Đọc references/] ➔ 💻 [Chạy Mavis CLI Command]
                             ➔ 🔄 [Cập nhật Session/Cron/Memory] ➔ 📋 [Báo cáo kết quả]
```

---

## 🚀 Bộ Quy Tắc Chỉ Dẫn Cho Agent (Prompt Guidelines)

```markdown
# QUY TẮC VẬN HÀNH MAVIS
- **Tuyệt đối tuân thủ shell router**: Không được chạy lệnh Unix (như cat, 2>/dev/null) trên Windows và ngược lại. Bắt buộc dùng tệp tham chiếu lệnh của Windows/PowerShell hoặc macOS/Linux.
- **Không tự xử lý dữ liệu nhạy cảm**: Không ghi khóa bảo mật hoặc thông tin đăng nhập vào bộ nhớ Agent hay tệp cấu hình Mavis.
- **Phân tách bộ nhớ**: Bộ nhớ session đã bị loại bỏ; chỉ sử dụng bộ nhớ người dùng (user), agent (agent) hoặc dự án (project).
```

---

## ⚠️ Cảnh Báo Vận Hành & Mẹo Tối Ưu (Developer Gotchas)

* **Cổng daemon thay đổi**: Không viết cứng địa chỉ IP hoặc cổng của daemon. Luôn đọc từ tệp `daemon.port`.
* **Lỗi định dạng YAML cấu hình cron/hook**: Nếu file cấu hình YAML thụt lề sai, daemon sẽ từ chối nạp, khiến cron hoặc hook không hoạt động mà không có thông báo lỗi chi tiết ở CLI. Rerun `mavis status` để kiểm tra.
