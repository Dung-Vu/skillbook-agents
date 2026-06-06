---
category: workflow-orchestration
command: /init-harness
complexity: advanced
description: >-
  Tự động quét mã nguồn của dự án để phân tích ngôn ngữ, công nghệ đang sử dụng, từ đó tự động khởi tạo cấu trúc thư mục làm việc và phân chia vai trò cho nhóm các trợ lý AI phối hợp hiệu quả.
featured: false
lastVerified: '2026-06-03'
oneLiner: Tự động phân tích mã nguồn và thiết lập nhóm trợ lý AI phối hợp cho dự án của bạn.
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

Khi bạn bắt đầu một dự án lập trình mới, việc tự mình thiết lập cấu trúc công việc cho các trợ lý AI (Agent) có thể tốn thời gian. Kỹ năng này giúp tự động hóa việc phân tích dự án và thiết lập môi trường phối hợp (Harness). Nhờ đó, bạn sẽ có ngay một nhóm các trợ lý AI chuyên biệt để cùng lập trình, kiểm thử và kiểm tra chất lượng mã nguồn từ đầu.

## ⚙️ Cách Hoạt Động

Quy trình gồm các bước thực thi:

```
[Quét mã nguồn & Xác định loại dự án] ➔ 📊 [Phân tích công nghệ & Ngôn ngữ sử dụng]
   ➔ 👥 [Thiết kế nhóm Agent (3-7 thành viên)] ➔ 📁 [Tạo thư mục cấu hình .harness/] ➔ 📋 [Bàn giao công việc]
```

1. **Quét mã nguồn**: Nhận diện cấu trúc thư mục của dự án và các ngôn ngữ lập trình, công nghệ cốt lõi đang dùng.
2. **Thiết kế nhóm hỗ trợ**: Lập kế hoạch phân bổ một nhóm gồm từ 3 đến 7 trợ lý AI chuyên biệt (ví dụ: Trợ lý điều phối, Lập trình viên, Người kiểm thử, Người duyệt code).
3. **Khởi tạo thư mục cấu hình**: Tạo thư mục `.harness/` chứa các tệp chỉ dẫn công việc cụ thể cho từng thành viên AI.

## 🚀 Cách Sử Dụng

```markdown
# QUY TẮC KHỞI TẠO .HARNESS DỰ ÁN
- Chỉ tự động chạy khi có yêu cầu rõ ràng từ người dùng hoặc hệ thống cho phép.
- Giới hạn số lượng trợ lý AI từ 3 đến tối đa 7 thành viên để tránh quản lý quá phức tạp.
- Để hệ thống tự động nhận diện danh sách trợ lý lúc chạy, không cần liệt kê thủ công trong file cấu hình chính.
- Chỉ thực hiện trên các thư mục dự án lập trình thực tế, không chạy trên thư mục trống hoặc không hợp lệ.
```

## 💡 Kịch Bản Lập Trình Thực Tế

### 🧑‍💻 Nhà phát triển:
> "Tôi vừa bắt đầu một dự án Node.js mới. Hãy giúp tôi phân tích mã nguồn và thiết lập nhóm trợ lý AI hỗ trợ."

### 🤖 AI Agent (Đã được trang bị Kỹ năng):
> "Tôi đã sẵn sàng. Dưới đây là các bước tôi sẽ thực hiện:
> 1. **Quét dự án**: Tôi quét thư mục và phát hiện đây là dự án Node.js viết bằng TypeScript.
> 2. **Thiết lập nhóm**: Tôi đề xuất nhóm gồm 3 trợ lý: Lập trình viên Node.js, Chuyên gia viết Unit Test, và Người duyệt code (Code Reviewer).
> 3. **Tạo cấu hình**: Tôi tạo thư mục cấu hình `.harness/` chứa đầy đủ mô tả công việc của từng trợ lý để họ sẵn sàng làm việc cùng bạn."

## ⚠️ Lưu Ý & Gotchas

- **Không tự động commit Git**: Sau khi tạo các file cấu hình, hãy để người dùng tự kiểm tra lại và commit thủ công thay vì tự động commit.
- **Tránh viết cứng đường dẫn**: Hãy sử dụng đường dẫn tương đối để đảm bảo cấu hình hoạt động được trên máy tính của bất kỳ ai trong nhóm.
- **Dự án lớn chứa nhiều dự án con (Monorepo)**: Nếu dự án của bạn chứa nhiều thư mục con độc lập, hãy tạo một thư mục `.harness/` chung ở ngoài cùng và các cấu hình riêng cho từng dự án con.
