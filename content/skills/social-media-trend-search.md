---
slug: social-media-trend-search
title: Social Media Trend Search
command: "/social-media-trend-search"
category: research-analysis
tags:
  - social-media
  - trending
  - tiktok
  - instagram
  - feishu-webhook
  - trend-analysis
complexity: advanced
platforms:
  - universal
  - cursor
  - windsurf
  - claude-code
  - mcp
featured: false
description: >-
  Công cụ phân tích và tìm kiếm xu hướng trên các mạng xã hội (TikTok,
  Instagram, Pinterest, X). Hỗ trợ tìm kiếm từ khóa xu hướng, phân tích thẻ
  hashtag và gửi báo cáo qua webhook Feishu/Lark.
oneLiner: 'Quét và phân tích xu hướng mạng xã hội hot nhất, xuất báo cáo Lark/Feishu.'
sourceUrl: ''
sourceAuthor: Minimax
lastVerified: '2026-06-03'
relatedSkills: []
seoTitle: Social Media Trend Search - Minimax Skill for AI Agents
seoDescription: >-
  Tích hợp kỹ năng Social Media Trend Search để AI Agent tự động cập nhật xu
  hướng TikTok/Instagram và gửi tin nhắn webhook.
provider: minimax
---

## 📖 Tại Sao Cần Skill Này?

Xu hướng trên mạng xã hội thay đổi theo từng giờ, việc nắm bắt chậm sẽ khiến các chiến dịch marketing mất đi cơ hội tiếp cận khách hàng. Kỹ năng này cung cấp cho Agent khả năng quét các từ khóa, phân tích sự thay đổi lượng thảo luận của thẻ hashtag, phân loại nội dung đang thu hút tương tác lớn và gửi cảnh báo tự động về nhóm chat công việc thông qua Webhook.

## ⚙️ Cách Hoạt Động

Quy trình phân tích và báo cáo xu hướng:
```
Nhap Hashtag/Tu khoa --> Quet Du lieu Mang xa hoi --> Phan loai Xu huong --> Gui bao cao Lark/Feishu Webhook
```
1. **Nhận cấu hình**: Nhận từ khóa, hashtag mục tiêu và URL Webhook của Feishu/Lark.
2. **Quét dữ liệu**: Thu thập lượt thảo luận, số view, số tương tác của hashtag trong 24 giờ qua.
3. **Phân tích**: Lọc ra các nội dung có tốc độ tăng trưởng tương tác đột biến (Breakout trends).
4. **Đóng gói & Gửi**: Định dạng báo cáo dạng thẻ đẹp mắt và gửi qua webhook của ứng dụng quản trị công việc Lark/Feishu.

## 🚀 Cách Sử Dụng

- Báo cáo gửi qua Webhook Feishu/Lark phải sử dụng định dạng thẻ tin nhắn (Interactive Message Card JSON) để hiển thị chuyên nghiệp.
- Nhóm các xu hướng theo ngành hàng cụ thể (Thời trang, Công nghệ, Đồ ăn, v.v.) để dễ dàng theo dõi.
- Cung cấp dẫn chứng trực tiếp bằng link các video/bài viết tiêu biểu đang dẫn đầu xu hướng đó.

## 💡 Kịch Bản Lập Trình Thực Tế

### Nhà phát triển:
> "Hãy hướng dẫn tôi cách thiết lập và sử dụng kỹ năng Social Media Trend Search để Quét và phân tích xu hướng mạng xã hội hot nhất, xuất báo cáo Lark/Feishu."

### AI Agent (Đã được trang bị Kỹ năng):
> "Tôi đã sẵn sàng. Dưới đây là kịch bản vận hành thực tế cho kỹ năng Social Media Trend Search:
> 1. Thiết lập các thông số cấu hình và tham số đầu vào cần thiết cho hệ thống.
> 2. Thực thi tuần tự các bước xử lý logic và tích hợp theo đúng chỉ dẫn của Social Media Trend Search.
> 3. Kiểm thử đầu ra, tối ưu hóa hiệu năng và cung cấp kết quả hoàn chỉnh."

## ⚠️ Lưu Ý & Gotchas

- **Lỗi định dạng JSON Webhook**: Đảm bảo cấu trúc JSON gửi lên webhook Feishu đúng chuẩn, không bị thiếu dấu ngoặc gây lỗi 400.
- **Giới hạn tần suất (Rate limit)**: Tránh gửi tin nhắn liên tục gây spam nhóm chat; khuyên dùng tần suất tối đa 1 lần/giờ.
