---
category: content-communication
command: /visual-summary
complexity: intermediate
description: >-
  Tạo tóm tắt trực quan từ tài liệu hoặc dữ liệu phức tạp dưới dạng sơ đồ
  Mermaid, cây thư mục hoặc bảng so sánh. Giúp nhà phát triển dễ dàng nắm bắt
  cấu trúc hệ thống và luồng logic chỉ trong nháy mắt.
featured: false
lastVerified: '2026-06-03'
oneLiner: >-
  Tạo sơ đồ Mermaid, cây cấu trúc và bảng so sánh trực quan từ thông tin phức
  tạp.
platforms:
  - universal
  - cursor
  - windsurf
  - claude-code
  - mcp
provider: minimax
relatedSkills:
  - plan-mode
  - minimax-pdf
seoDescription: >-
  Tạo tóm tắt trực quan dạng HTML tự động. Nhúng biểu đồ Chart.js, sơ đồ Mermaid
  và SVG tối ưu hóa trải nghiệm đọc.
seoTitle: Visual Summary - Minimax Skill for AI Agents
slug: visual-summary
sourceAuthor: Minimax
sourceUrl: ''
tags:
  - visualization
  - chart
  - mermaid
  - summary
title: Visual Summary
---

## 📖 Tại Sao AI Agent Của Bạn Cần Kỹ Năng Này?

Khi đối mặt với các cấu trúc hệ thống phức tạp, luồng API lằng nhằng hoặc các bảng so sánh dữ liệu đồ sộ, việc trình bày bằng văn bản Markdown thông thường sẽ gây mệt mỏi cho người đọc. Kỹ năng này cho phép Agent chủ động thiết kế một trang web HTML cục bộ tuyệt đẹp, nhúng sơ đồ trực quan và gửi trực tiếp qua khung chat để nhà phát triển nắm bắt toàn bộ kiến trúc dự án chỉ trong vài giây.

---

## ⚙️ Cơ Chế Hoạt Động & Quy Trình Tư Duy

Quy trình tạo trang tóm tắt trực quan:
1. **Chọn chế độ trang**: Chọn Data UI (cho biểu đồ, bảng số liệu), Report (cho báo cáo chữ dài, dùng font Serif) hoặc Terminal (cho log, mã nguồn).
2. **Thiết kế màu sắc & Chữ**: Áp dụng các bảng màu nhã nhặn, cấm sử dụng các dải màu gradient AI màu tím/xanh bão hòa hoặc màu đen tuyền `#000`. Sử dụng font chữ chuyên nghiệp (Outfit, JetBrains Mono).
3. **Nhúng Sơ đồ / SVG**: Viết tệp HTML tự chứa (self-contained) nhúng inline SVG, CSS Bench bar, hoặc Mermaid nếu sơ đồ nhiều hơn 4 nút.
4. **Gửi File & Thẻ Media**: Lưu tệp vào workspace và gửi mã thẻ `<media>` chứa đường dẫn tuyệt đối của tệp HTML để kích hoạt trình xem thử trên giao diện chat.

Sơ đồ quy trình:
```
[Dữ liệu phức tạp / Yêu cầu] ➔ 📐 [Chọn Page Mode & Bảng màu phù hợp] ➔ 💻 [Tạo tệp HTML tự chứa (self-contained)]
                                  ➔ 🧪 [Kiểm tra Responsive & Inline SVG] ➔ 🖼️ [Gửi tin nhắn kèm thẻ <media>]
```

---

## 🚀 Bộ Quy Tắc Chỉ Dẫn Cho Agent (Prompt Guidelines)

```markdown
# QUY TẮC THIẾT KẾ TRANG TRỰC QUAN
- **Không dùng ảnh ASCII**: Tuyệt đối không vẽ sơ đồ bằng ký tự ASCII dạng hộp vẽ (`┌─┐ │ ├─`). Bắt buộc dùng Mermaid hoặc vẽ SVG inline.
- **Không dùng emoji làm Icon**: Sử dụng các icon SVG dạng inline của thư viện Lucide với màu sắc kế thừa (`currentColor`).
- **Thẻ Media bắt buộc**: Định dạng bàn giao bắt buộc phải chứa thẻ `<media type="file" src="..." caption="..." />` ở dòng riêng biệt.
- **Hỗ trợ Responsive**: Giao diện trang HTML phải tự động co giãn đẹp mắt trên các thiết bị di động, không xuất hiện thanh cuộn ngang ở màn hình nhỏ.
```

---

## ⚠️ Cảnh Báo Vận Hành & Mẹo Tối Ưu (Developer Gotchas)

* **Lỗi CORS khi tải tài nguyên bên ngoài**: Tránh tải các file JS/CSS/Fonts từ CDN không hỗ trợ CORS hoặc các domain lạ. Ưu tiên các CDN chính thống như `cdn.tailwindcss.com` hoặc nhúng trực tiếp code vào file HTML.
* **Tải chậm sơ đồ Mermaid phức tạp**: Đối với các sơ đồ Mermaid có số lượng nút quá lớn (> 20 nút), trình duyệt cần nhiều thời gian để render layout. Khi đó, nên cân nhắc chia nhỏ sơ đồ hoặc xuất ảnh tĩnh SVG để tăng tốc độ tải trang.
