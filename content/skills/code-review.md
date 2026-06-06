---
slug: code-review
title: Code Review
command: "/code-review"
category: safety-guardrails
tags:
  - code-review
  - code-quality
  - best-practices
  - pull-request
complexity: intermediate
platforms:
  - universal
  - cursor
  - windsurf
  - claude-code
  - mcp
featured: false
description: Tự động đánh giá chất lượng mã nguồn (code review) để phát hiện sớm các lỗi bảo mật, tối ưu hiệu năng và đảm bảo code viết sạch, dễ bảo trì.
oneLiner: Đánh giá và đề xuất sửa lỗi code tự động để đảm bảo chất lượng phần mềm.
sourceUrl: ''
sourceAuthor: Minimax
lastVerified: '2026-06-03'
relatedSkills: []
seoTitle: Code Review - Đánh giá chất lượng code tự động
seoDescription: Cấu hình AI Agent tự động rà soát lỗi logic, lỗ hổng bảo mật và tối ưu hóa mã nguồn theo chuẩn công nghiệp.
provider: minimax
---

## 📖 Tại Sao Cần Skill Này?

Khi viết code, lập trình viên rất dễ bỏ sót các lỗi nhỏ hoặc viết mã chưa tối ưu. Kỹ năng này đóng vai trò như một chuyên gia giàu kinh nghiệm ngồi cạnh bạn, kiểm tra và hướng dẫn bạn cách cải tiến code để chương trình chạy nhanh hơn, an toàn hơn và dễ bảo trì hơn.

- **Phát hiện lỗi sớm**: Tìm ra các lỗi logic hoặc lỗ hổng bảo mật trước khi đưa sản phẩm chạy thực tế.
- **Học hỏi cách viết code tốt hơn**: Đưa ra các đề xuất cải tiến kèm ví dụ cụ thể để bạn nâng cao tay nghề.
- **Nhất quán phong cách**: Đảm bảo toàn bộ đội ngũ viết code theo cùng một tiêu chuẩn chung.

## ⚙️ Cách Hoạt Động

1. **Đọc mã nguồn**: Nhận đoạn code hoặc sự thay đổi của các file code từ bạn.
2. **Kiểm tra đa khía cạnh**: Phân tích lỗi cú pháp, kiểm tra logic chạy thực tế, đánh giá hiệu năng và các nguy cơ bảo mật.
3. **Đưa ra báo cáo**: Phân loại các điểm cần sửa từ quan trọng đến gợi ý nhỏ, kèm theo code mẫu đã sửa đổi sạch sẽ.

## 🚀 Cách Sử Dụng

- Gửi đoạn code hoặc file code mà bạn vừa viết xong cho trợ lý.
- Trợ lý sẽ rà soát và đưa ra các gợi ý chỉnh sửa cụ thể, phân nhóm rõ ràng để bạn nâng cấp mã nguồn của mình.

## 💡 Kịch Bản Lập Trình Thực Tế

### Người dùng:
> "Nhờ bạn review đoạn code đăng nhập này xem có lỗi bảo mật nào không."

### Trợ lý:
> "Tôi phát hiện đoạn code của bạn đang lưu mật khẩu dưới dạng văn bản thường (plain text) trong database.
> - **Lỗi nghiêm trọng (Error)**: Nguy cơ rò rỉ thông tin người dùng rất cao.
> - **Giải pháp**: Bạn cần mã hóa mật khẩu bằng thư viện bảo mật (ví dụ bcrypt) trước khi lưu. Dưới đây là code mẫu đã sửa đổi: ..."

## ⚠️ Lưu Ý & Gotchas

- **Nên chia nhỏ code**: Đừng gửi toàn bộ dự án khổng lồ cùng lúc. Hãy chia nhỏ thành từng tính năng để trợ lý đánh giá chi tiết và chuẩn xác nhất.
- **Tập trung vào logic**: Trợ lý ưu tiên tính đúng đắn và an toàn của phần mềm, tránh tranh cãi về sở thích viết code cá nhân.
