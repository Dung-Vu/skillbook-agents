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

## 📖 Tại Sao AI Agent Của Bạn Cần Kỹ Năng Này?

Khi khởi chạy một dự án lập trình mới, AI Agent cần kỹ năng này để tự động thiết lập môi trường cộng tác đa Agent (Harness). Việc này giúp cấu trúc hóa quá trình code, phân chia nhiệm vụ lập trình, kiểm thử và review mã nguồn cho các Agent chuyên biệt ngay từ đầu, thay vì dựa vào một Agent duy nhất xử lý toàn bộ cơ sở mã nguồn khổng lồ.

---

## ⚙️ Cơ Chế Hoạt Động & Quy Trình Tư Duy

Quy trình gồm 6 bước thực thi trong một worker session:
1. **Nhận diện không gian làm việc**: Xác định repo đơn, monorepo hay thư mục chứa nhiều repo.
2. **Quét cơ sở mã nguồn**: Đọc các tệp cấu hình dự án (`package.json`, `Cargo.toml`, v.v.) để hiểu kiến trúc và ngôn ngữ chủ đạo.
3. **Thiết kế đội ngũ**: Dựa trên quy tắc thiết kế của `mavis-team` để chọn số lượng Agent thích hợp (thông thường gồm Orchestrator, Developer, Tester, Reviewer và 1-2 chuyên gia tên miền).
4. **Scaffold tệp cấu hình**: Tạo thư mục `.harness/reins/` và viết tệp `agent.md` cho từng Agent.
5. **Viết tệp Orchestrator**: Thiết lập tệp `.harness/agent.md` cấp dự án để làm bộ não điều phối chung.
6. **Báo cáo kết quả**: Tóm tắt sơ đồ đội ngũ và các đường dẫn đã tạo cho người dùng, nhắc nhở commit lên Git.

Sơ đồ hoạt động:
```
[Quét mã nguồn & Xác định loại repo] ➔ 📊 [Phân tích công nghệ chủ đạo]
   ➔ 👥 [Thiết kế nhóm Agent (3-7 thành viên)] ➔ 📁 [Scaffold thư mục .harness/] ➔ 📋 [Bàn giao & Commit]
```

---

## 🚀 Bộ Quy Tắc Chỉ Dẫn Cho Agent (Prompt Guidelines)

```markdown
# QUY TẮC KHỞI TẠO .HARNESS DỰ ÁN
- **Không tự ý chạy khi chưa xác thực**: Chỉ chạy khi tệp system prompt chứa thẻ `<bootstrap_check>` hoặc khi người dùng yêu cầu rõ ràng.
- **Giới hạn số lượng Agent**: Đội ngũ thiết kế phải từ 3 đến tối đa 7 Agent. Tránh phình to số lượng Agent không cần thiết.
- **Không viết cứng danh sách Reins**: Tuyệt đối không liệt kê danh sách Agent trong tệp `agent.md` của Orchestrator, vì daemon tự động nạp danh sách động lúc chạy.
- **Chỉ xử lý dự án code thực tế**: Nếu thư mục trống hoặc không phải là git repository hợp lệ, dừng lại và thông báo lý do cho người dùng.
```

---

## ⚠️ Cảnh Báo Vận Hành & Mẹo Tối Ưu (Developer Gotchas)

* **Lạm dụng commit tự động**: Đừng tự động thực hiện commit Git sau khi tạo tệp, hãy để người dùng review các tệp cấu hình và commit thủ công khi họ sẵn sàng.
* **Cố định đường dẫn tuyệt đối**: Mọi tệp chỉ dẫn của Agent nên sử dụng đường dẫn tương đối hoặc link đến `.harness/docs/` thay vì viết cứng đường dẫn tuyệt đối của máy chủ phát triển hiện tại.
* **Khởi chạy trên thư mục monorepo**: Nếu gặp monorepo chứa nhiều sub-repo độc lập, hãy tạo một `.harness/` tổng ở gốc và khởi tạo `.harness/` cục bộ riêng cho từng sub-repo.
