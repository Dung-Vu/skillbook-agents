---
category: workflow-orchestration
command: /init-harness
complexity: advanced
description: >-
  Khởi tạo cấu trúc `.harness/` cho một dự án lập trình mới. Kỹ năng này tự động
  quét mã nguồn để phân tích công nghệ, ngôn ngữ và cấu trúc thư mục, từ đó
  thiết kế và scaffold một nhóm đa Agent phối hợp hiệu quả.
featured: false
lastVerified: '2026-06-03'
oneLiner: Tự động phân tích mã nguồn và thiết lập nhóm đa Agent phối hợp cho dự án.
platforms:
  - universal
  - cursor
  - windsurf
  - claude-code
  - mcp
provider: minimax
relatedSkills: []
seoDescription: >-
  Khởi tạo khung làm việc đa Agent (harness) cho dự án lập trình. Tự động phân
  tích mã nguồn và scaffold cấu hình .harness/.
seoTitle: Init Harness - Minimax Skill for AI Agents
slug: init-harness
sourceAuthor: Minimax
sourceUrl: ''
tags:
  - bootstrap
  - harness
  - scaffold
  - multi-agent
title: Init Harness
---

## 📖 Tại Sao Cần Skill Này?

Khi khởi chạy một dự án lập trình mới, AI Agent cần kỹ năng này để tự động thiết lập môi trường cộng tác đa Agent (Harness). Việc này giúp cấu trúc hóa quá trình code, phân chia nhiệm vụ lập trình, kiểm thử và review mã nguồn cho các Agent chuyên biệt ngay từ đầu.

## ⚙️ Cách Hoạt Động

Quy trình gồm các bước thực thi:

1. **Nhận diện & Quét mã nguồn**: Xác định loại repo (single, monorepo, v.v.) và phân tích công nghệ, ngôn ngữ chủ đạo.
2. **Thiết kế & Scaffold**: Thiết kế đội ngũ gồm 3-7 Agent (Orchestrator, Developer, Tester, Reviewer, v.v.) và scaffold cấu hình tại `.harness/reins/`.
3. **Thiết lập Orchestrator & Bàn giao**: Viết tệp điều phối chung và tóm tắt kết quả bàn giao.

```
[Quét mã nguồn & Xác định loại repo] ➔ 📊 [Phân tích công nghệ chủ đạo]
   ➔ 👥 [Thiết kế nhóm Agent (3-7 thành viên)] ➔ 📁 [Scaffold thư mục .harness/] ➔ 📋 [Bàn giao & Commit]
```

## 🚀 Cách Sử Dụng

```markdown
# QUY TẢC KHỞI TẠO .HARNESS DỰ ÁN
- **Không tự ý chạy khi chưa xác thực**: Chỉ chạy khi tệp system prompt chứa thẻ `<bootstrap_check>` hoặc khi người dùng yêu cầu rõ ràng.
- **Giới hạn số lượng Agent**: Đội ngũ thiết kế phải từ 3 đến tối đa 7 Agent. Tránh phình to số lượng Agent không cần thiết.
- **Không viết cứng danh sách Reins**: Tuyệt đối không liệt kê danh sách Agent trong tệp `agent.md` của Orchestrator, vì daemon tự động nạp danh sách động lúc chạy.
- **Chỉ xử lý dự án code thực tế**: Nếu thư mục trống hoặc không phải là git repository hợp lệ, dừng lại và thông báo lý do cho người dùng.
```

## 💡 Kịch Bản Lập Trình Thực Tế

### Nhà phát triển:
> "Hãy hướng dẫn tôi cách thiết lập và sử dụng kỹ năng Init Harness để Tự động phân tích mã nguồn và thiết lập nhóm đa Agent phối hợp cho dự án."

### AI Agent (Đã được trang bị Kỹ năng):
> "Tôi đã sẵn sàng. Dưới đây là kịch bản vận hành thực tế cho kỹ năng Init Harness:
> 1. Thiết lập các thông số cấu hình và tham số đầu vào cần thiết cho hệ thống.
> 2. Thực thi tuần tự các bước xử lý logic và tích hợp theo đúng chỉ dẫn của Init Harness.
> 3. Kiểm thử đầu ra, tối ưu hóa hiệu năng và cung cấp kết quả hoàn chỉnh."

## ⚠️ Lưu Ý & Gotchas

* **Lạm dụng commit tự động**: Đừng tự động thực hiện commit Git sau khi tạo tệp, hãy để người dùng review các tệp cấu hình và commit thủ công.
* **Cố định đường dẫn tuyệt đối**: Mọi tệp chỉ dẫn của Agent nên sử dụng đường dẫn tương đối hoặc link đến `.harness/docs/` thay vì viết cứng đường dẫn tuyệt đối.
* **Khởi chạy trên thư mục monorepo**: Nếu gặp monorepo chứa nhiều sub-repo độc lập, hãy tạo một `.harness/` tổng ở gốc và khởi tạo `.harness/` cục bộ riêng cho từng sub-repo.
