---
category: tool-integration
command: /llm-call
complexity: intermediate
description: >-
  Thực hiện cuộc gọi trực tiếp đến mô hình LLM cấu hình sẵn thông qua script
  Python cục bộ bằng cách sử dụng các cài đặt từ tệp config.yaml. Thích hợp cho
  việc kiểm thử prompt hoặc so sánh kết quả giữa các nhà cung cấp như OpenAI,
  Anthropic, Gemini.
featured: false
lastVerified: '2026-06-03'
oneLiner: Gọi trực tiếp các mô hình LLM cấu hình sẵn để kiểm thử prompt và so sánh.
platforms:
  - universal
  - cursor
  - windsurf
  - claude-code
  - mcp
provider: minimax
relatedSkills:
  - create-agent
  - mavis
  - skill-creator
seoDescription: >-
  Thực hiện gọi API LLM trực tiếp thông qua script Python cục bộ. So sánh mô
  hình và kiểm thử prompt với tệp config.yaml.
seoTitle: LLM Call - Minimax Skill for AI Agents
slug: llm-call
sourceAuthor: Minimax
sourceUrl: ''
tags:
  - llm
  - api
  - model
  - prompt
title: LLM Call
---

## 📖 Tại Sao Cần Skill Này?

AI Agent cần kỹ năng này khi lập trình viên yêu cầu thử nghiệm trực tiếp một prompt thô, so sánh câu trả lời giữa các phiên bản mô hình khác nhau (ví dụ: Claude 3.5 Sonnet vs Gemini 1.5 Pro) hoặc thực hiện các cuộc gọi API riêng lẻ không phụ thuộc vào luồng suy nghĩ mặc định của Agent hiện tại.

---

## ⚙️ Cách Hoạt Động

Quy trình hoạt động:
1. **Đọc đầu vào**: Xác định mô hình đích (ví dụ: `anthropic/claude-sonnet-4-6`) và nội dung prompt.
2. **Chọn trình khởi chạy**: Dựa vào hệ điều hành để chạy script bằng `py -3` (Windows) hoặc `python3` (macOS/Linux).
3. **Thực thi script**: Chạy script `llm_call.py` với các tham số tương ứng như `--model`, `--prompt`, `--system` hoặc `--config`.
4. **Trả kết quả**: Xuất trực tiếp kết quả của mô hình hoặc tóm tắt lỗi cấu hình từ nhà cung cấp nếu có.

Sơ đồ quy trình:
```
[Prompt & Mô hình] ➔ ⚙️ [Chọn python launcher] ➔ 🔑 [Đọc config.yaml cấu hình]
                        ➔ 💻 [Chạy llm_call.py] ➔ 📝 [Xuất kết quả thô]
```

---

## 🚀 Cách Sử Dụng

```markdown
# QUY TẮC GỌI TRỰC TIẾP LLM
- **Luôn truyền mô hình**: Bắt buộc chỉ định tham số `--model <provider>/<model>` rõ ràng, hoặc liệt kê trước bằng `--list` để tìm mô hình khả dụng.
- **Không tự ý chuyển đổi mô hình**: Nếu mô hình được yêu cầu gặp lỗi cấu hình hoặc mạng, báo cáo lỗi đó trực tiếp, không tự động chuyển qua mô hình dự phòng.
- **Ưu tiên config cục bộ**: Script tự động quét tệp `config.yaml` từ thư mục dữ liệu cục bộ hoặc mặc định `~/.mavis/config.yaml`.
```

---

## 💡 Kịch Bản Lập Trình Thực Tế

### Nhà phát triển:
> "Hãy hướng dẫn tôi cách thiết lập và sử dụng kỹ năng LLM Call để Gọi trực tiếp các mô hình LLM cấu hình sẵn để kiểm thử prompt và so sánh."

### AI Agent (Đã được trang bị Kỹ năng):
> "Tôi đã sẵn sàng. Dưới đây là kịch bản vận hành thực tế cho kỹ năng LLM Call:
> 1. Thiết lập các thông số cấu hình và tham số đầu vào cần thiết cho hệ thống.
> 2. Thực thi tuần tự các bước xử lý logic và tích hợp theo đúng chỉ dẫn của LLM Call.
> 3. Kiểm thử đầu ra, tối ưu hóa hiệu năng và cung cấp kết quả hoàn chỉnh."

## ⚠️ Lưu Ý & Gotchas

* **Lỗi môi trường Python trên Windows**: Không được giả định lệnh `python3` hoạt động trên Windows. Hãy sử dụng trình khởi chạy `py -3` hoặc `python` đã được xác định trước.
* **Thiếu API Key**: Nếu tệp `config.yaml` bị thiếu credentials của provider tương ứng, CLI sẽ báo lỗi 400. Agent cần chỉ rõ key nào đang bị thiếu.
