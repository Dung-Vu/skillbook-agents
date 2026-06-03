---
slug: prd-assistant
title: PRD Assistant
command: ''
category: reasoning-planning
tags:
  - prd
  - product-management
  - specifications
  - workflow
  - prototype
complexity: advanced
platforms:
  - universal
  - cursor
  - windsurf
  - claude-code
  - mcp
featured: false
description: >-
  Trợ lý phân tích yêu cầu sản phẩm và tạo tài liệu PRD chuyên sâu. Chuyển đổi ý
  tưởng sơ khai thành giải pháp sản phẩm hoàn chỉnh bao gồm nghiên cứu đối thủ,
  sơ đồ luồng Mermaid và mẫu thử HTML.
oneLiner: Phân tích yêu cầu sản phẩm và viết tài liệu PRD chi tiết kèm prototype.
sourceUrl: ''
sourceAuthor: Minimax
lastVerified: '2026-06-03'
relatedSkills: []
seoTitle: PRD Assistant - Minimax Skill for AI Agents
seoDescription: >-
  Tích hợp kỹ năng PRD Assistant để AI Agent tự động viết tài liệu yêu cầu sản
  phẩm, vẽ luồng tương tác và xây dựng mẫu thử HTML.
provider: minimax
---

## 📖 Tại Sao AI Agent Của Bạn Cần Kỹ Năng Này?

Khi xây dựng sản phẩm công nghệ, việc bỏ qua các bước phân tích tính khả thi và luồng người dùng thường dẫn đến việc làm sai tính năng. Kỹ năng này cung cấp một quy trình thiết kế sản phẩm bài bản, giúp Agent kiểm tra tính khả thi, phân tích sản phẩm cạnh tranh, thiết lập yêu cầu chức năng (functional requirements), vẽ sơ đồ Mermaid và tạo mẫu thử HTML tương tác thực tế.

## ⚙️ Cơ Chế Hoạt Động & Quy Trình Tư Duy

Luồng phát triển sản phẩm:
```
Ý tưởng người dùng ──> Báo cáo Nghiên cứu & Khả thi ──> Sơ đồ luồng tương tác ──> Biên soạn PRD ──> Tạo mẫu thử HTML (nếu chọn)
```
1. **Phân tích ban đầu**: Nhận ý tưởng, đánh giá mức độ khả thi và phân tích các đối thủ cạnh tranh trên thị trường.
2. **Vẽ sơ đồ**: Sử dụng sơ đồ Mermaid để mô tả luồng di chuyển của người dùng (User Flow) và các bước xử lý hệ thống.
3. **Biên soạn PRD**: Viết tài liệu PRD chuẩn (Markdown/PDF) bao gồm User Stories, Danh sách tính năng, Mô tả giao diện, Yêu cầu phi chức năng.
4. **Tạo mẫu thử**: Sinh một trang HTML đơn lập chứa giao diện thử nghiệm tương tác với CSS hiện đại.

## 🚀 Bộ Quy Tắc Chỉ Dẫn Cho Agent (Prompt Guidelines)

- Sử dụng ngôn ngữ giao tiếp nhất quán với ngôn ngữ của người dùng (không sử dụng song ngữ khi hiển thị các lựa chọn).
- Tài liệu PRD phải chi tiết, súc tích, tránh lan man; tập trung mô tả rõ ràng các điều kiện biên (edge cases) và xử lý lỗi.
- Khi người dùng yêu cầu tạo mẫu thử prototype, phải viết mã HTML tự chứa (self-contained) bao gồm CSS và JavaScript tương tác thực tế.

## ⚠️ Cảnh Báo Vận Hành & Mẹo Tối Ưu (Developer Gotchas)

- **Không bỏ qua phân tích khả thi**: Không nhảy thẳng vào viết PRD hay viết code mẫu thử khi chưa thực hiện phân tích luồng và đối thủ.
- **Tránh thiết kế quá phức tạp**: Mẫu thử HTML chỉ nên tập trung kiểm chứng luồng tương tác chính, không nên cố gắng tạo ra toàn bộ hệ thống backend.
