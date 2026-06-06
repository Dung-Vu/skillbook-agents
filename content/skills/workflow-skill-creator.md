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
description: Siêu kỹ năng giúp trợ lý tự động đúc rút, đóng gói và lưu trữ một quy trình làm việc phức tạp vừa hoàn thành trong phiên chat thành một gói kỹ năng mới để tái sử dụng lâu dài.
oneLiner: Tự động đóng gói các quy trình làm việc thành các kỹ năng mới để tái sử dụng.
sourceUrl: 'https://github.com/google-deepmind'
sourceAuthor: Google DeepMind
lastVerified: '2026-05-31'
relatedSkills:
  - science-skills-common
  - uv
seoTitle: Workflow Skill Creator — Tự động đóng gói quy trình thành kỹ năng mới
seoDescription: Hướng dẫn AI Agent tự động đúc kết các bước hội thoại thành công thành kỹ năng có cấu trúc chuẩn hóa để tái sử dụng dễ dàng.
provider: antigravity
---

## 📖 Tại Sao Cần Skill Này?

Khi bạn và trợ lý vừa phối hợp thực hiện xong một quy trình làm việc phức tạp (ví dụ: tải dữ liệu y khoa, vẽ biểu đồ phân tích và xuất báo cáo) và bạn muốn sau này có thể lặp lại quy trình đó chỉ bằng một câu lệnh đơn giản mà không cần làm lại từng bước. Kỹ năng này đóng vai trò là một "siêu kỹ năng" (meta-skill) giúp trợ lý tự động ghi nhớ, soạn thảo hướng dẫn và đóng gói toàn bộ quy trình đó thành một kỹ năng mới độc lập để bạn tái sử dụng bất cứ lúc nào.

- **Lưu giữ tri thức**: Không lo bị quên các bước thực hiện của một quy trình phức tạp.
- **Tiết kiệm thời gian**: Chạy lại toàn bộ quy trình chỉ bằng một yêu cầu duy nhất thay vì thực hiện thủ công từng bước.
- **Tự động hóa nâng cao**: Tự tạo ra các đoạn mã hỗ trợ chạy tự động đi kèm với tài liệu hướng dẫn chi tiết.

## ⚙️ Cách Hoạt Động

1. **Phân tích lịch sử**: Trợ lý quét lịch sử trò chuyện để xác định các bước đã thực hiện thành công, dữ liệu đầu vào và đầu ra mong muốn.
2. **Thiết kế cấu trúc**: Tạo thư mục làm việc riêng cho kỹ năng mới và chuẩn bị các file cần thiết.
3. **Soạn thảo tài liệu & mã nguồn**: Viết tệp hướng dẫn sử dụng và chuẩn bị các đoạn mã tự động chạy quy trình.
4. **Chạy thử nghiệm (Validation)**: Chạy giả lập toàn bộ quy trình để đảm bảo kỹ năng mới hoạt động trơn tru trước khi bàn giao.

## 🚀 Cách Sử Dụng

- Khi bạn thấy một quy trình làm việc vừa thực hiện xong rất hữu ích, hãy bảo trợ lý: "Hãy đóng gói quy trình này lại thành một kỹ năng mới."
- Trợ lý sẽ tự động triển khai và báo cáo lại khi hoàn tất.

## 💡 Kịch Bản Lập Trình Thực Tế

### Người dùng:
> "Quy trình tải số liệu thời tiết, vẽ biểu đồ nhiệt độ và xuất báo cáo mà chúng ta vừa thực hiện rất tốt. Hãy đóng gói nó lại để tôi dùng cho các lần sau nhé."

### Trợ lý:
> "Tôi đang thực hiện đóng gói quy trình thành kỹ năng mới `weather-reporter` cho bạn:
> 1. Trích xuất các bước kết nối API thời tiết và vẽ biểu đồ.
> 2. Tạo tệp hướng dẫn sử dụng và viết đoạn mã Python tự động chạy.
> 3. Chạy thử nghiệm thành công. Từ nay, bạn chỉ cần yêu cầu chạy `/weather-reporter` là toàn bộ quy trình trên sẽ tự động vận hành."

## ⚠️ Lưu Ý & Gotchas

- **Chỉ đóng gói quy trình đã thành công**: Kỹ năng này được thiết kế để lưu trữ lại các quy trình bạn đã thực hiện thành công trong cuộc trò chuyện hiện tại, không dùng để sáng tạo ra một tính năng mới từ con số không.
- **Bắt buộc chạy thử**: Phải luôn chạy thử nghiệm kỹ năng mới tạo ra với dữ liệu mẫu để chắc chắn không bị thiếu thư viện hoặc phát sinh lỗi cú pháp ngầm.
