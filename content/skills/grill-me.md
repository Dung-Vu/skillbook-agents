---
slug: "grill-me"
title: "Grill Me Planning Interview"
command: "/grill-me"
category: "reasoning-planning"
tags:
  - "grill-me"
  - "interview"
  - "alignment"
  - "feedback"
  - "planning"
complexity: "starter"
platforms:
  - "cursor"
  - "claude-code"
  - "windsurf"
  - "gemini-cli"
  - "universal"
featured: true
description: "Khởi động quy trình phỏng vấn phản biện đa chiều giúp AI Agent cùng người dùng làm rõ mục tiêu, kiến trúc và các quyết định thiết kế trước khi thực thi mã nguồn."
oneLiner: "Tương tác phản biện sâu sắc giúp làm rõ các yêu cầu kiến trúc và quyết định thiết kế."
sourceUrl: ""
sourceAuthor: "Google DeepMind"
lastVerified: "2026-06-01"
relatedSkills:
  - "workflow-skill-creator"
seoTitle: "/grill-me - Planning Interview & Alignment Skill for AI"
seoDescription: "Chỉ dẫn chi tiết cách AI Agent vận hành quy trình phỏng vấn phản biện /grill-me để làm rõ yêu cầu kỹ thuật và căn chỉnh kế hoạch."
---

## 🧠 Tại Sao AI Agent Của Bạn Cần Kỹ Năng Này?

Khi nhận các yêu cầu phát triển phần mềm hoặc thiết kế hệ thống từ người dùng, các thông tin ban đầu thường mang tính khái quát, thiếu chi tiết hoặc tồn tại những mâu thuẫn ngầm định. Nếu không có kỹ năng phản biện:
* **Mơ hồ dẫn đến sai lệch**: AI dễ tự suy đoán theo ý chủ quan, dẫn đến việc viết code sai kiến trúc mong muốn của người dùng.
* **Over-engineering (Quá tải thiết kế)**: Tự động đưa thêm các thư viện hoặc cấu trúc quá phức tạp không cần thiết cho dự án.

**Khi sử dụng Kỹ năng `/grill-me`, AI Agent của bạn sẽ:**
1. **Phát hiện điểm mơ hồ (Ambiguity Detection)**: Chủ động tìm ra các lỗ hổng thông tin trong bản đặc tả ban đầu (ví dụ: thiếu thiết kế cơ sở dữ liệu, chưa rõ luồng xử lý lỗi).
2. **Đặt câu hỏi sắc bén (Sharp Questioning)**: Tổ chức cuộc phỏng vấn tương tác ngắn gọn (2-3 câu hỏi mỗi lượt) để thu thập thông tin thay vì hỏi một bảng câu hỏi khổng lồ gây mệt mỏi.
3. **Căn chỉnh kế hoạch (Architecture Alignment)**: Thống nhất một giải pháp kỹ thuật tối ưu và ghi nhận sự phê duyệt của người dùng trước khi tiến hành viết code.

---

## ⚙️ Cơ Chế Hoạt Động & Quy Trình Tư Duy

```
[Nhận Yêu cầu ban đầu] ➔ 🔍 [Phân tích lỗ hổng thiết kế]
                             └── Đặt câu hỏi phản biện ➔ 🗣️ [Trao đổi tương tác với Người dùng]
                                                            └── Thống nhất ➔ 📐 [Tạo Bản Thiết Kế Chuẩn]
```

Quy trình suy nghĩ của Agent khi thực thi `/grill-me`:
1. **Phân tích đặc tả**: Quét toàn bộ yêu cầu, đối chiếu với các mẫu thiết kế (design patterns) chuẩn để tìm điểm thiếu sót.
2. **Lên câu hỏi**: Lựa chọn 2-3 câu hỏi quan trọng nhất liên quan đến: Mục tiêu cốt lõi, Giới hạn kỹ thuật, Luồng xử lý lỗi hoặc Trải nghiệm người dùng.
3. **Tương tác**: Gửi câu hỏi và lắng nghe câu trả lời từ người dùng, tiếp tục tinh chỉnh câu hỏi tiếp theo nếu cần thiết.
4. **Định hình**: Tạo lập tài liệu kế hoạch hành động chuẩn hóa (`implementation_plan.md`) sau khi đã đạt được sự đồng thuận 100%.

---

## 📜 Bộ Quy Tắc Chỉ Dẫn Cho Agent (Prompt Guidelines)

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

---

## ⚠️ Cảnh Báo Vận Hành & Mẹo Tối Ưu (Developer Gotchas)

* **Tránh Đặt Câu Hỏi Tầm Thường (Trivial Questions)**: Chỉ đặt những câu hỏi thực sự ảnh hưởng đến kiến trúc hệ thống hoặc logic viết code. Tránh hỏi các chi tiết quá nhỏ nhặt mà AI có thể tự quyết định tốt dựa trên các best practices.
* **Duy Trì Giọng Điệu Khách Quan**: Đưa ra các phân tích ưu/nhược điểm rõ ràng cho từng phương án lựa chọn công nghệ để giúp người dùng đưa ra quyết định chính xác hơn.
```
