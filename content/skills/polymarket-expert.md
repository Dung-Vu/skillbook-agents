---
slug: polymarket-expert
title: Polymarket Expert
command: ''
category: reasoning-planning
tags:
  - prediction-market
  - polymarket
  - quant-strategy
  - infofi
  - kelly-criterion
complexity: expert
platforms:
  - universal
  - cursor
  - windsurf
  - claude-code
  - mcp
featured: false
description: >-
  Kiến trúc sư AI và Chuyên gia định lượng thị trường dự đoán Polymarket và
  InfoFi. Phân tích xác suất toán học, tính toán tiêu chuẩn Kelly để tối đa hóa
  kỳ vọng lợi nhuận.
oneLiner: Chuyên gia phân tích thị trường dự đoán Polymarket và tài chính thông tin.
sourceUrl: ''
sourceAuthor: Minimax
lastVerified: '2026-06-03'
relatedSkills:
  - topic-tracker
  - web-scraper
seoTitle: Polymarket Expert - Minimax Skill for AI Agents
seoDescription: >-
  Xây dựng kỹ năng quant chuyên sâu về Polymarket cho AI Agent: tính toán kỳ
  vọng toán học EV, quản lý vốn Kelly và tích hợp API Polygon.
provider: minimax
---

## 📖 Tại Sao AI Agent Của Bạn Cần Kỹ Năng Này?

Thị trường dự đoán (Prediction Markets) như Polymarket phản ánh thông tin thực tế rất nhanh nhưng thường bị nhiễu do tâm lý và cảm xúc của đám đông. Kỹ năng này giúp Agent nhận diện các sai lệch giá (inefficiency) bằng toán học thuần túy, tính toán quy mô vị thế tối ưu qua tiêu chuẩn Kelly và viết mã tích hợp với CLOB (Central Limit Order Book) thông qua Polygon network.

## ⚙️ Cơ Chế Hoạt Động & Quy Trình Tư Duy

Luồng xử lý định lượng Polymarket:
```
Quét thị trường & Tin tức ──> Tính Xác suất biên (Implied Prob) ──> Tính Kỳ vọng Toán (EV) & Kelly ──> Đưa ra quyết định Giao dịch
```
1. **Quét dữ liệu**: Tìm kiếm các thị trường Polymarket đang mở, lấy tỷ lệ cược hiện tại qua công cụ tìm kiếm web.
2. **Tính toán**: Chuyển đổi giá cổ phiếu (shares) thành xác suất thị trường, so sánh với xác suất thực tế tự phân tích để tìm EV dương.
3. **Quản lý vốn**: Áp dụng công thức Kelly để xác định phần trăm vốn tối ưu cần giải ngân.
4. **Tích hợp hệ thống**: Hướng dẫn tích hợp mã python (`py-clob-client`) để đặt lệnh tự động trên mạng Polygon.

## 🚀 Bộ Quy Tắc Chỉ Dẫn Cho Agent (Prompt Guidelines)

- Chỉ hành động theo tính toán logic cơ học, loại bỏ hoàn toàn trực giác. Nếu một giao dịch không có EV dương sau khi trừ phí, bắt buộc phải loại bỏ.
- Sử dụng công thức Kelly để quản lý vốn: `f* = (p*(b+1) - 1) / b` trong đó `p` là xác suất thắng thực tế, `b` là tỷ lệ cược.
- Đảm bảo hướng dẫn cấu hình chi tiết private key và API key của Polymarket một cách an toàn, tránh để lộ trên mã nguồn hoặc log chat.

## ⚠️ Cảnh Báo Vận Hành & Mẹo Tối Ưu (Developer Gotchas)

- **Thanh khoản mỏng**: Cảnh báo người dùng về trượt giá (slippage) khi giao dịch quy mô lớn ở các thị trường ngách.
- **Rủi ro giải quyết tranh chấp**: Lưu ý về các tranh chấp kết quả (resolution disputes) từ UMA Oracle đối với các thị trường có mô tả mập mờ.
