---
slug: grill-me
title: Grill Me Planning Interview
command: /grill-me
category: reasoning-planning
tags:
  - grill-me
  - interview
  - alignment
  - feedback
  - planning
complexity: starter
platforms:
  - cursor
  - claude-code
  - windsurf
  - gemini-cli
  - universal
featured: true
description: >-
  Khởi động quy trình phỏng vấn phản biện đa chiều giúp AI Agent cùng người dùng
  làm rõ mục tiêu, kiến trúc và các quyết định thiết kế trước khi thực thi mã
  nguồn.
oneLiner: >-
  Tương tác phản biện sâu sắc giúp làm rõ các yêu cầu kiến trúc và quyết định
  thiết kế.
sourceUrl: ''
sourceAuthor: Google DeepMind
lastVerified: '2026-06-01'
relatedSkills:
  - workflow-skill-creator
seoTitle: /grill-me - Planning Interview & Alignment Skill for AI
seoDescription: >-
  Chỉ dẫn chi tiết cách AI Agent vận hành quy trình phỏng vấn phản biện
  /grill-me để làm rõ yêu cầu kỹ thuật và căn chỉnh kế hoạch.
provider: antigravity
---

## 📖 Tại Sao Cần Skill Này?

Khi nhận yêu cầu từ người dùng, thông tin ban đầu thường mơ hồ hoặc thiếu chi tiết. Kỹ năng `/grill-me` giúp AI Agent chủ động:
- **Phát hiện điểm mơ hồ**: Tìm các lỗ hổng thông tin trong bản đặc tả ban đầu (như luồng dữ liệu, bảo mật, xử lý lỗi).
- **Đặt câu hỏi sắc bén**: Thực hiện phỏng vấn ngắn gọn (2-3 câu hỏi mỗi lượt) để thu thập thông tin thay vì hỏi dồn dập.
- **Căn chỉnh kế hoạch**: Thống nhất giải pháp tối ưu và nhận phê duyệt của người dùng trước khi viết code.

## ⚙️ Cách Hoạt Động

```
[Nhận Yêu cầu ban đầu] ➔ 🔍 [Phân tích lỗ hổng thiết kế]
                             └── Đặt câu hỏi phản biện ➔ 🗣️ [Trao đổi tương tác với Người dùng]
                                                             └── Thống nhất ➔ 📐 [Tạo Bản Thiết Kế Chuẩn]
```

Quy trình suy nghĩ của Agent khi thực thi `/grill-me`:
1. **Phân tích đặc tả**: Quét yêu cầu đối chiếu với design patterns chuẩn để tìm thiếu sót.
2. **Lên câu hỏi**: Chọn 2-3 câu hỏi quan trọng nhất về phạm vi (Scope), công nghệ (Technology), và xử lý lỗi (Error Handling).
3. **Định hình**: Tạo lập tài liệu kế hoạch hành động (`implementation_plan.md`) sau khi đạt được sự đồng thuận.

## 🚀 Cách Sử Dụng

````markdown
# GRILL-ME INTERVIEW INSTRUCTIONS & RULES

## 1. Interactive Interview Rule
- Không đặt tất cả câu hỏi trong một lượt phản hồi duy nhất. Hãy chia nhỏ thành nhiều vòng trao đổi (mỗi vòng chỉ hỏi 2-3 câu hỏi cốt lõi).
- Lắng nghe câu trả lời, phản hồi một cách thông minh bằng cách điều chỉnh câu hỏi tiếp theo dựa trên dữ liệu người dùng cung cấp.

## 2. Subject Areas to Cover
- Đảm bảo làm rõ các khía cạnh:
  * **Scope**: Tính năng nào bắt buộc phải có ngay (MVP) vs. tính năng có thể làm sau.
  * **Technology**: Các công nghệ hoặc thư viện bắt buộc phải dùng (hoặc tránh dùng).
  * **Error Handling**: Các trường hợp ngoại lệ hoặc lỗi hệ thống nên xử lý như thế nào.

## 3. Output Generation
- Chỉ khi người dùng xác nhận đồng ý với mọi phương án giải quyết, mới chuyển sang tạo tệp tin kế hoạch triển khai chi tiết.
````

## 💡 Kịch Bản Lập Trình Thực Tế

### Nhà phát triển:
> "Hãy hướng dẫn tôi cách thiết lập và sử dụng kỹ năng Grill Me Planning Interview để Tương tác phản biện sâu sắc giúp làm rõ các yêu cầu kiến trúc và quyết định thiết kế."

### AI Agent (Đã được trang bị Kỹ năng):
> "Tôi đã sẵn sàng. Dưới đây là kịch bản vận hành thực tế cho kỹ năng Grill Me Planning Interview:
> 1. Thiết lập các thông số cấu hình và tham số đầu vào cần thiết cho hệ thống.
> 2. Thực thi tuần tự các bước xử lý logic và tích hợp theo đúng chỉ dẫn của Grill Me Planning Interview.
> 3. Kiểm thử đầu ra, tối ưu hóa hiệu năng và cung cấp kết quả hoàn chỉnh."

## ⚠️ Lưu Ý & Gotchas

- **Tránh câu hỏi nhỏ nhặt**: Chỉ đặt câu hỏi thực sự ảnh hưởng đến kiến trúc hệ thống hoặc logic viết code; tự quyết định các chi tiết nhỏ dựa trên best practices.
- **Phân tích khách quan**: Đưa ra ưu/nhược điểm rõ ràng cho từng phương án để hỗ trợ người dùng quyết định chính xác.
