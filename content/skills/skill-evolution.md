---
category: workflow-orchestration
command: /skill-evolution
complexity: advanced
description: >-
  Công cụ hướng dẫn nâng cấp và cập nhật các kỹ năng có sẵn cho AI. Giúp phát hiện các lỗi sai trong hướng dẫn cũ, tiếp nhận đề xuất cải tiến từ thực tế và tiến hành vá lỗi an toàn mà không làm hỏng các tính năng cũ.
featured: false
lastVerified: '2026-06-03'
oneLiner: Báo cáo lỗi và đề xuất cải tiến cho các kỹ năng AI hiện có.
platforms:
  - universal
  - cursor
  - windsurf
  - claude-code
  - mcp
provider: minimax
relatedSkills:
  - skill-creator
  - skill-refiner
  - mavis
seoDescription: >-
  Tiến hóa kỹ năng AI Agent qua evolution channel. Tự động báo cáo lỗi/thiếu sót
  qua Signal và đề xuất tính năng qua Proposal.
seoTitle: Skill Evolution - Minimax Skill for AI Agents
slug: skill-evolution
sourceAuthor: Minimax
sourceUrl: ''
tags:
  - skill
  - evolution
  - patching
  - maintenance
title: Skill Evolution
---

## 📖 Tại Sao Cần Skill Này?

Sau một thời gian sử dụng, các kỹ năng (Skills) của AI có thể bị cũ (ví dụ: liên kết API bị đổi, câu lệnh hệ thống thay đổi) hoặc phát hiện ra các lỗi sai cần sửa đổi. Skill này giúp bạn:
- **Nâng cấp kỹ năng an toàn**: Cập nhật thông tin mới vào các file hướng dẫn có sẵn mà không làm ảnh hưởng đến các tính năng đang hoạt động tốt.
- **Tiếp nhận phản hồi tự động**: Ghi nhận lỗi từ thực tế quá trình chạy thử (Signal) hoặc các ý tưởng cải tiến mới (Proposal).
- **Quy trình duyệt rõ ràng**: Đảm bảo các thay đổi đều được kiểm tra kỹ lưỡng trước khi áp dụng chính thức.

## ⚙️ Cách Hoạt Động

Quy trình cập nhật kỹ năng được thực hiện như sau:
1. **Phát hiện sự cố hoặc cơ hội cải tiến**:
   - Nếu phát hiện kỹ năng có lỗi hoặc thông tin đã cũ: Chuẩn bị gửi một **Báo cáo lỗi (Signal)**.
   - Nếu phát hiện một quy trình mới tiện lợi có thể dùng nhiều lần: Chuẩn bị gửi một **Đề xuất mới (Proposal)**.
2. **Trích xuất bằng chứng**: Chụp lại đoạn hội thoại bị lỗi hoặc ghi nhận thông báo lỗi từ hệ thống làm minh chứng thực tế.
3. **Gửi lên hệ thống**: Sử dụng các câu lệnh của Mavis CLI để đẩy báo cáo lên hàng đợi.
4. **Xử lý tự động**: Hệ thống chạy ngầm sẽ tự động phân loại các báo cáo này và giao nhiệm vụ cho AI cập nhật lại kỹ năng phù hợp.

## 🚀 Cách Sử Dụng

Khi làm việc với trợ lý AI:
- Khi phát hiện kỹ năng hoạt động không đúng, hãy cung cấp chính xác lỗi và đoạn chat bị lỗi cho AI, thay vì chỉ nói chung chung là "bị lỗi".
- Đối với các kỹ năng mặc định của hệ thống, không tự ý sửa đổi code trực tiếp. Hãy tạo một báo cáo lỗi để hệ thống ghi nhận và xử lý sau.
- Chỉ tạo đề xuất xây dựng kỹ năng mới khi quy trình đó lặp đi lặp lại nhiều lần.

## 💡 Kịch Bản Lập Trình Thực Tế

### 🧑‍💻 Nhà phát triển:
> "Khi tôi chạy lệnh sao lưu dữ liệu, AI báo lỗi không tìm thấy thư mục lưu trữ mới do máy chủ vừa thay đổi đường dẫn. Tôi phải làm gì?"

### 🤖 AI Agent (Đã được trang bị Kỹ năng):
> "Tôi sẽ thực hiện quy trình báo cáo lỗi để cập nhật kỹ năng này:
> 
> 1. **Thu thập bằng chứng**: Tôi sẽ copy đoạn thông báo lỗi 'Folder not found' kèm theo đường dẫn cũ bị lỗi.
> 2. **Gửi báo cáo lỗi (Signal)**: Tôi sử dụng lệnh của Mavis CLI để gửi báo cáo lỗi này lên hệ thống kiểm duyệt.
> 3. **Cập nhật**: Hệ thống kiểm duyệt sẽ ghi nhận lỗi này, phân tích đường dẫn mới của máy chủ và cập nhật lại file hướng dẫn của kỹ năng sao lưu để AI không bao giờ lặp lại lỗi này nữa."

## ⚠️ Lưu Ý & Gotchas

- **Gửi kèm bằng chứng thực tế**: Báo cáo lỗi hoặc đề xuất cải tiến bắt buộc phải đi kèm đoạn chat hoặc thông báo lỗi thực tế từ hệ thống. Tránh tự viết mô tả lỗi chung chung không có dẫn chứng.
- **Phân biệt lỗi của AI và lỗi của Kỹ năng**: Nếu AI không làm theo hướng dẫn trong khi file hướng dẫn viết hoàn toàn đúng, đó là lỗi do AI chưa đọc kỹ (không cần báo cáo sửa kỹ năng). Chỉ báo cáo khi thông tin hướng dẫn trong kỹ năng thực sự bị sai hoặc thiếu sót.
