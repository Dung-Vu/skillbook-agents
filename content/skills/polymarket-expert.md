---
slug: polymarket-expert
title: Polymarket Expert
command: "/polymarket-expert"
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
  Hỗ trợ phân tích dữ liệu, tính toán tỷ lệ cược và đề xuất chiến lược tham gia thị trường dự đoán Polymarket bằng toán học xác suất. Giúp đánh giá cơ hội và quản lý rủi ro vốn khoa học.
oneLiner: 'Phân tích toán học và chiến lược tham gia thị trường dự đoán Polymarket.'
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

## 📖 Tại Sao Cần Skill Này?

Thị trường dự đoán (như Polymarket) phản ánh khả năng xảy ra của các sự kiện thực tế (như bầu cử, thể thao, sự kiện thế giới) dựa trên dòng tiền của người tham gia. Tuy nhiên, giá cả trên sàn thường bị dao động do cảm xúc của đám đông. Kỹ năng này giúp bạn nhận diện các cơ hội đầu tư có lợi thông qua phân tích toán học, tính toán số tiền đầu tư hợp lý (sử dụng công thức Kelly) để tránh rủi ro và hướng dẫn lập trình tự động giao dịch an toàn.

## ⚙️ Cách Hoạt Động

Quy trình phân tích cơ hội giao dịch:
```
Theo dõi tỷ lệ cược ──> Tính xác suất thực tế ──> Tính lợi nhuận kỳ vọng & Quản lý vốn ──> Đưa ra quyết định
```
- **Thu thập dữ liệu**: Quét thông tin các sự kiện đang mở trên Polymarket và tỷ lệ cược hiện tại của chúng.
- **Tính toán cơ hội**: Đổi giá cổ phiếu (shares) thành tỷ lệ phần trăm cơ hội thắng, so sánh với dữ liệu thực tế để tìm ra cơ hội có lợi nhất.
- **Tối ưu hóa nguồn vốn**: Áp dụng công thức Kelly để xác định phần trăm vốn an toàn cần bỏ ra cho mỗi giao dịch.
- **Tự động hóa**: Hướng dẫn sử dụng thư viện lập trình (như `py-clob-client`) để đặt lệnh tự động trên mạng Polygon.

## 🚀 Cách Sử Dụng

- Đưa ra phân tích dựa trên các số liệu và logic toán học, loại bỏ yếu tố cảm tính cá nhân.
- Sử dụng công thức Kelly để quản lý vốn: `f* = (p*(b+1) - 1) / b` (trong đó `p` là xác suất thắng thực tế, `b` là tỷ lệ cược nhận được).
- Hướng dẫn cấu hình mã khóa ví điện tử (Private Key) và mã API an toàn, không được lưu trên các file chia sẻ công khai.

## 💡 Kịch Bản Lập Trình Thực Tế

### Người dùng yêu cầu:
> "Tôi muốn tính toán xem có nên đặt cược vào kết quả trận chung kết bóng đá sắp tới trên Polymarket không và nên dùng bao nhiêu vốn."

### Trợ lý AI thực hiện:
> "Tôi sẽ hỗ trợ bạn phân tích theo phương pháp khoa học:
> 1. Quét tỷ lệ cược hiện tại của trận đấu trên Polymarket.
> 2. Đánh giá xác suất thắng thực tế dựa trên phong độ và dữ liệu đối đầu của hai đội.
> 3. Áp dụng công thức Kelly để tính ra tỷ lệ phần trăm vốn an toàn bạn nên đặt nếu cơ hội thắng thực tế cao hơn tỷ lệ cược của thị trường."

## ⚠️ Lưu Ý & Gotchas

- **Thanh khoản thấp**: Ở các thị trường nhỏ hoặc ít người chơi, việc mua bán số lượng lớn có thể bị chênh lệch giá nhiều hoặc khó khớp lệnh ngay lập tức.
- **Tranh chấp kết quả**: Một số sự kiện có luật lệ không rõ ràng có thể dẫn đến việc tranh chấp kết quả từ bên thứ ba (UMA Oracle). Hãy đọc kỹ điều khoản của thị trường trước khi tham gia.
