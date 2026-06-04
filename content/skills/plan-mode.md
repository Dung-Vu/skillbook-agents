---
category: reasoning-planning
command: /plan-mode
complexity: intermediate
description: >-
  Kích hoạt chế độ lập kế hoạch chi tiết trước khi thực hiện viết mã nguồn.
  Hướng dẫn Agent tạo sơ đồ kiến trúc, phân tích rủi ro, thiết kế các bước kiểm
  thử và xác lập tiêu chuẩn nghiệm thu rõ ràng.
featured: false
lastVerified: '2026-06-03'
oneLiner: Xây dựng kế hoạch triển khai chi tiết và kiểm thử trước khi thay đổi mã nguồn.
platforms:
  - universal
  - cursor
  - windsurf
  - claude-code
  - mcp
provider: minimax
relatedSkills: []
seoDescription: >-
  Lập kế hoạch phát triển phần mềm chi tiết. Giảm thiểu rủi ro, phân tích kiến
  trúc và xác lập tiêu chí nghiệm thu rõ ràng.
seoTitle: Plan Mode - Minimax Skill for AI Agents
slug: plan-mode
sourceAuthor: Minimax
sourceUrl: ''
tags:
  - planning
  - workflow
  - architecture
  - analysis
title: Plan Mode
---

## 📖 Tại Sao Cần Skill Này?


Trước khi bắt tay vào viết mã nguồn cho các tính năng phức tạp, AI Agent dễ gặp rủi ro viết sai hướng, gây ra việc phải sửa đổi lớn về sau. Kỹ năng này kích hoạt chế độ tư duy thiết kế hệ thống, giúp Agent thảo luận giải pháp với người dùng dưới vai trò một đồng nghiệp tin cậy, làm rõ các ràng buộc kỹ thuật và chốt kế hoạch thực thi rõ ràng trước khi viết dòng code đầu tiên.

---

## ⚙️ Cách Hoạt Động

Sơ đồ hoạt động:
```
[Yêu cầu phức tạp] ➔ 🕵️ [Khảo sát mã nguồn] ➔ 🧠 [Đề xuất & Thống nhất] ➔ 📝 [Tạo file kế hoạch]
```

- **Khảo sát hiện trạng**: Tự động kích hoạt cho các tác vụ phức tạp và quét cấu trúc code thực tế để định hình phương án.
- **Đề xuất giải pháp**: Đưa ra một giải pháp tối ưu duy nhất kèm phân tích rủi ro ngắn thay vì các tùy chọn mơ hồ.
- **Tạo tệp kế hoạch**: Ghi lại kế hoạch bằng Markdown nêu rõ phạm vi, các bước sửa đổi, kịch bản test và bước tiếp theo.
## 🚀 Cách Sử Dụng


```markdown
# QUY TẮC LẬP KẾ HOẠCH DỰ ÁN
- **Đưa ra khuyến nghị rõ ràng**: Phải đề xuất một hướng đi cụ thể và giải thích lý do, không được đưa ra danh sách lựa chọn chung chung để người dùng tự chọn.
- **Giọng điệu đồng nghiệp**: Giao tiếp thân thiện, tự nhiên, tập trung thẳng vào bản chất kỹ thuật thay vì viết báo cáo đánh giá trịnh trọng, sáo rỗng.
- **Thiết lập tiêu chuẩn nghiệm thu**: Mọi kế hoạch lập ra phải kết thúc bằng một "Next Step" (Bước tiếp theo) cụ thể và một phương pháp chạy kiểm thử để nghiệm thu.
```

---

## 💡 Kịch Bản Lập Trình Thực Tế


### Nhà phát triển:
> "Hãy hướng dẫn tôi cách thiết lập và sử dụng kỹ năng Plan Mode để Xây dựng kế hoạch triển khai chi tiết và kiểm thử trước khi thay đổi mã nguồn."

### AI Agent (Đã được trang bị Kỹ năng):
> "Tôi đã sẵn sàng. Dưới đây là kịch bản vận hành thực tế cho kỹ năng Plan Mode:
> 1. Thiết lập các thông số cấu hình và tham số đầu vào cần thiết cho hệ thống.
> 2. Thực thi tuần tự các bước xử lý logic và tích hợp theo đúng chỉ dẫn của Plan Mode.
> 3. Kiểm thử đầu ra, tối ưu hóa hiệu năng và cung cấp kết quả hoàn chỉnh."

## ⚠️ Lưu Ý & Gotchas


* **Kế hoạch quá phức tạp (Over-engineering)**: Tránh thiết kế các kiến trúc quá đồ sộ cho các nhiệm vụ đơn giản. Kế hoạch phải phù hợp với quy mô hiện tại của cơ sở mã nguồn.
* **Bỏ qua bước khảo sát thực tế**: Đề xuất giải pháp lý thuyết mà không mở file thực tế xem cấu trúc code hiện tại thường dẫn đến việc đề xuất các hàm hoặc thư viện bị trùng lặp.
