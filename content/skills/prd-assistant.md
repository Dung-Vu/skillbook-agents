---
slug: prd-assistant
title: PRD Assistant
command: "/prd-assistant"
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
  Hỗ trợ phân tích yêu cầu sản phẩm và viết tài liệu yêu cầu sản phẩm (PRD). Giúp chuyển đổi ý tưởng thành mô tả tính năng chi tiết, vẽ sơ đồ luồng người dùng và tạo mẫu giao diện thử nghiệm (HTML/CSS).
oneLiner: 'Viết tài liệu yêu cầu sản phẩm (PRD) chi tiết và tạo mẫu giao diện thử nghiệm.'
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

## 📖 Tại Sao Cần Skill Này?

Khi phát triển một ứng dụng hay tính năng mới, nếu không xác định rõ yêu cầu từ đầu, lập trình viên rất dễ lập trình sai hướng hoặc thiếu các trường hợp xử lý lỗi. Kỹ năng này giúp bạn thiết kế sản phẩm bài bản hơn bằng cách: mô tả rõ ràng các chức năng cần làm (PRD), vẽ sơ đồ hướng dẫn luồng đi của người dùng (User Flow) và tạo nhanh trang giao diện mẫu (prototype) để xem trước trước khi viết code thật.

## ⚙️ Cách Hoạt Động

Quy trình thiết kế sản phẩm diễn ra như sau:
```
Nhận ý tưởng ──> Khảo sát tính khả thi ──> Vẽ sơ đồ luồng đi ──> Biên soạn PRD ──> Tạo giao diện mẫu (HTML)
```
- **Khảo sát ban đầu**: Đánh giá xem ý tưởng có khả thi không và tìm hiểu cách các đối thủ trên thị trường đang thực hiện.
- **Vẽ sơ đồ luồng đi**: Sử dụng sơ đồ Mermaid để thể hiện các bước người dùng thao tác trên màn hình.
- **Biên soạn PRD**: Viết tài liệu chi tiết gồm các câu chuyện người dùng (User Stories), danh sách tính năng và cách xử lý lỗi.
- **Tạo giao diện mẫu**: Tạo một trang web HTML đơn giản có các nút bấm tương tác để người dùng dễ hình dung trải nghiệm thực tế.

## 🚀 Cách Sử Dụng

- Viết tài liệu PRD ngắn gọn, dễ hiểu nhưng đầy đủ chi tiết, đặc biệt là các tình huống biên (như mất mạng, nhập sai thông tin).
- Sử dụng sơ đồ trực quan để giải thích luồng đi của ứng dụng giúp lập trình viên dễ hình dung.
- Tạo giao diện mẫu bằng HTML/CSS đơn giản, tập trung vào trải nghiệm bấm thử để kiểm chứng các tính năng chính.

## 💡 Kịch Bản Lập Trình Thực Tế

### Người dùng yêu cầu:
> "Tôi muốn xây dựng tính năng giỏ hàng cho trang web bán quần áo. Hãy viết PRD và tạo giao diện mẫu."

### Trợ lý AI thực hiện:
> "Tôi sẽ hỗ trợ bạn thiết kế tính năng này:
> 1. Phân tích các bước từ khi người dùng bấm 'Thêm vào giỏ' cho đến khi hoàn tất thanh toán.
> 2. Viết tài liệu PRD mô tả chi tiết cách xử lý khi sản phẩm hết hàng hoặc khi thay đổi số lượng trong giỏ.
> 3. Vẽ sơ đồ luồng đi của người dùng và tạo một file HTML giao diện giỏ hàng để bạn bấm thử tương tác."

## ⚠️ Lưu Ý & Gotchas

- **Đừng vội vàng**: Hãy làm rõ luồng hoạt động của tính năng trước khi bắt đầu viết code hay thiết kế chi tiết.
- **Giữ giao diện mẫu đơn giản**: Giao diện mẫu chỉ dùng để bấm thử trải nghiệm, không cần kết nối với cơ sở dữ liệu thật phức tạp.
