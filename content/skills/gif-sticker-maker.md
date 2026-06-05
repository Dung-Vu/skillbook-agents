---
slug: gif-sticker-maker
title: GIF Sticker Maker
command: "/gif-sticker-maker"
category: creative-design
tags:
  - gif
  - cartoon-style
  - animation
  - sticker
complexity: intermediate
platforms:
  - universal
  - cursor
  - windsurf
  - claude-code
  - mcp
featured: false
description: >-
  Công cụ biến ảnh chụp chân dung, thú cưng, vật thể hoặc logo thành bộ 4 nhãn
  dán hoạt hình dạng ảnh động (GIF) vui nhộn có kèm phụ đề tùy biến.
oneLiner: Chuyển đổi ảnh chụp thành bộ 4 nhãn dán GIF hoạt hình sinh động.
sourceUrl: ''
sourceAuthor: Minimax
lastVerified: '2026-06-03'
relatedSkills: []
seoTitle: GIF Sticker Maker - Minimax Skill for AI Agents
seoDescription: >-
  Tạo nhãn dán GIF hoạt hình từ ảnh chụp: tự động hoạt hóa biểu cảm, chèn phụ đề
  độc đáo và xuất ảnh động.
provider: minimax
---

## 📖 Tại Sao Cần Skill Này?

Việc tạo nhãn dán (stickers) động từ ảnh chụp đòi hỏi các công cụ đồ họa phức tạp và tốn nhiều công sức cắt ghép. Kỹ năng này tự động hóa toàn bộ quy trình: từ chuyển đổi phong cách hoạt hình (cartoonify), tạo chuyển động biểu cảm cho đến ghép phụ đề tiếng Việt và xuất định dạng GIF sẵn sàng sử dụng.

## ⚙️ Cách Hoạt Động

Quy trình tạo nhãn dán GIF động:

```
[Photo Upload] -> [Cartoon Style Transfer] -> [Expression Animation] -> [Caption Overlay] -> [GIF Generation]
```

1. **Cartoonify**: Chuyển đổi ảnh chụp đầu vào sang nét vẽ hoạt hình chibi dễ thương.
2. **Animate**: Tạo ra 4 chuyển động biểu cảm kinh điển (vui vẻ, khóc lóc, ngạc nhiên, giận dữ).
3. **Deliver**: Ghép phụ đề ngắn tương ứng và hiển thị trực quan thông qua khối thẻ asset XML.

## 🚀 Cách Sử Dụng

1. Ngôn ngữ hiển thị của nhãn dán và phụ đề phải tự động khớp với ngôn ngữ trò chuyện của người dùng.
2. Đảm bảo phông nền của nhãn dán là trong suốt (transparent background) để người dùng dễ chia sẻ trên các ứng dụng nhắn tin.
3. Trả về định dạng xuất chuẩn XML `<deliver_assets>` để hiển thị ảnh động trực tiếp trong khung chat.

## 💡 Kịch Bản Lập Trình Thực Tế

### Nhà phát triển:
> "Hãy hướng dẫn tôi cách thiết lập và sử dụng kỹ năng GIF Sticker Maker để Chuyển đổi ảnh chụp thành bộ 4 nhãn dán GIF hoạt hình sinh động."

### AI Agent (Đã được trang bị Kỹ năng):
> "Tôi đã sẵn sàng. Dưới đây là kịch bản vận hành thực tế cho kỹ năng GIF Sticker Maker:
> 1. Thiết lập các thông số cấu hình và tham số đầu vào cần thiết cho hệ thống.
> 2. Thực thi tuần tự các bước xử lý logic và tích hợp theo đúng chỉ dẫn của GIF Sticker Maker.
> 3. Kiểm thử đầu ra, tối ưu hóa hiệu năng và cung cấp kết quả hoàn chỉnh."

## ⚠️ Lưu Ý & Gotchas

- **Biến dạng khuôn mặt**: Việc hoạt hóa ảnh có thể làm mất đi các nét đặc trưng của khuôn mặt gốc. Hãy chọn phong cách hoạt hình giữ được hồn của bức ảnh gốc.
- **Kích thước file lớn**: File GIF động có dung lượng rất lớn nếu không tối ưu. Hãy giới hạn thời gian hoạt ảnh dưới 2 giây và độ phân giải vừa phải.
