---
category: tool-integration
command: /llm-call
complexity: intermediate
description: Cho phép bạn gửi câu hỏi (prompt) trực tiếp tới các mô hình AI khác nhau (như ChatGPT, Claude, Gemini) để so sánh câu trả lời hoặc thử nghiệm các câu lệnh mới.
featured: false
lastVerified: '2026-06-03'
oneLiner: Gửi câu hỏi trực tiếp tới các mô hình AI khác nhau để so sánh kết quả.
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

Mỗi mô hình AI có cách trả lời và thế mạnh khác nhau. Kỹ năng này giúp bạn nhanh chóng gửi một câu hỏi (prompt) tới nhiều mô hình AI để xem mô hình nào trả lời tốt nhất hoặc thử nghiệm các câu lệnh mới mà không cần cài đặt phức tạp.

## ⚙️ Cách Hoạt Động

Quy trình gửi câu hỏi:
1. Bạn chọn mô hình AI muốn dùng (ví dụ: ChatGPT hoặc Gemini) và nhập câu hỏi của mình.
2. Trợ lý sử dụng công cụ có sẵn để gửi câu hỏi đó đi.
3. Trợ lý nhận câu trả lời thô trực tiếp từ mô hình đó và hiển thị cho bạn.

## 🚀 Cách Sử Dụng

- Chỉ định rõ tên mô hình AI bạn muốn sử dụng (ví dụ `openai/gpt-4` hoặc `anthropic/claude-3`).
- Nhờ trợ lý gửi cùng một câu hỏi cho 2-3 mô hình khác nhau để so sánh chất lượng câu trả lời.
- Cung cấp các cài đặt (như API Key) cho trợ lý nếu được yêu cầu để kết nối với các mô hình AI.

## 💡 Kịch Bản Lập Trình Thực Tế

### Người dùng:
> "Hãy gửi câu hỏi 'Làm thế nào để viết email xin nghỉ phép thuyết phục?' tới mô hình Claude 3 và cho tôi xem kết quả thô."

### Trợ lý:
> "Tôi đã gửi câu hỏi của bạn tới mô hình Claude 3. Dưới đây là câu trả lời nhận được:
> [Nội dung email xin nghỉ phép do Claude 3 soạn thảo]"

## ⚠️ Lưu Ý & Gotchas

- **Thiếu khóa kết nối (API Key)**: Bạn cần điền đầy đủ các mã kết nối của nhà cung cấp mô hình (OpenAI, Anthropic...) trong file cấu hình thì trợ lý mới có thể gọi mô hình đó được.
- **Lỗi hệ thống**: Nếu một mô hình bị lỗi mạng hoặc hết lượt sử dụng, trợ lý sẽ báo lỗi ngay lập tức chứ không tự động đổi sang mô hình khác để tránh làm sai lệch ý định thử nghiệm của bạn.
