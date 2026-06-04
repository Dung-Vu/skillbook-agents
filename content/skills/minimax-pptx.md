---
category: content-communication
command: /pptx
complexity: intermediate
description: >-
  Đọc, phân tích cấu trúc slide và trích xuất dữ liệu từ các tài liệu trình
  chiếu PowerPoint (`.pptx`). Hỗ trợ tìm kiếm văn bản, lấy ghi chú slide
  (speaker notes) và xử lý hình ảnh nhúng.
featured: false
lastVerified: '2026-06-03'
oneLiner: >-
  Phân tích cấu trúc, trích xuất nội dung và ghi chú từ slide PowerPoint
  (.pptx).
platforms:
  - universal
  - cursor
  - windsurf
  - claude-code
  - mcp
provider: minimax
relatedSkills:
  - minimax-pdf
seoDescription: >-
  Phân tích và tạo slide PowerPoint (.pptx). Hướng dẫn thiết kế PptxGenJS chuẩn
  16x9, căn lề và kiểm thử tự động.
seoTitle: Minimax PPTX - Minimax Skill for AI Agents
slug: minimax-pptx
sourceAuthor: Minimax
sourceUrl: ''
tags:
  - pptx
  - powerpoint
  - slides
  - presentation
title: Minimax PPTX
---

## 📖 Tại Sao Cần Skill Này?

Tạo slide PowerPoint (`.pptx`) bằng code thường dễ gặp lỗi tràn khung văn bản, sai tỷ lệ màn hình hoặc mất định dạng phong cách của công ty. Kỹ năng này cung cấp các giới hạn kích thước canvas chuẩn 16x9, hướng dẫn thiết kế slide module hóa bằng JavaScript (PptxGenJS) và các bước trích xuất ghi chú, hình ảnh từ slide cũ để tạo mới hoặc chỉnh sửa an toàn.

---

## ⚙️ Cách Hoạt Động

Quy trình tạo và sửa slide:
1. **Phân tích yêu cầu & Bố cục**: Chọn tỷ lệ 16x9. Nếu có slide mẫu, dùng lệnh `audit_pptx.py` để phân tích mã màu (theme) và font chữ gốc.
2. **Thiết kế module slide**: Viết riêng từng tệp JS cho mỗi slide (`slide-01.js`, `slide-02.js`, v.v.) xuất hàm đồng bộ `createSlide(pres, theme)`.
3. **Ràng buộc kích thước**: Đảm bảo mọi tọa độ phần tử nằm trong giới hạn rộng 10.0" và cao 5.625".
4. **Biên dịch và Chạy thử QA**: Chạy file `compile.js` để xuất slide, thực hiện kiểm tra kiểm thử chất lượng trước khi bàn giao.

Sơ đồ quy trình:
```
[Yêu cầu slide / Slide mẫu] ➔ 🔍 [Chạy audit_pptx.py tìm màu/font] ➔ 📐 [Thiết kế slide JS độc lập (tối đa 10" x 5.625")]
                                 ➔ 💻 [Chạy compile.js tạo tệp .pptx] ➔ 🧪 [Kiểm tra QA căn lề & số trang]
```

---

## 🚀 Cách Sử Dụng

```markdown
# QUY TẮC THIẾT KẾ SLIDE POWERPOINT
- **Tỷ lệ 16x9 bắt buộc**: Luôn thiết lập tỷ lệ slide chuẩn `LAYOUT_16x9` (kích thước vật lý 10 inch x 5.625 inch). Không viết tràn phần tử ra ngoài khung này.
- **Không dùng hàm bất đồng bộ trong slide**: Hàm `createSlide` cấu trúc slide bắt buộc phải chạy đồng bộ, tuyệt đối không dùng `async/await`.
- **Đánh số trang**: Tất cả các slide (ngoại trừ slide tiêu đề) bắt buộc phải có số trang đặt tại góc dưới bên phải (tọa độ x xấp xỉ 9.3, y xấp xỉ 5.1).
- **Mã màu Hex chuẩn**: Màu sắc truyền cho PptxGenJS phải viết ở dạng chuỗi hex 6 ký tự không chứa ký tự `#` (ví dụ: dùng `FF0000`, không dùng `#FF0000`).
```

---

## 💡 Kịch Bản Lập Trình Thực Tế

### Nhà phát triển:
> "Hãy hướng dẫn tôi cách thiết lập và sử dụng kỹ năng Minimax PPTX để Phân tích cấu trúc, trích xuất nội dung và ghi chú từ slide PowerPoint (.pptx)."

### AI Agent (Đã được trang bị Kỹ năng):
> "Tôi đã sẵn sàng. Dưới đây là kịch bản vận hành thực tế cho kỹ năng Minimax PPTX:
> 1. Thiết lập các thông số cấu hình và tham số đầu vào cần thiết cho hệ thống.
> 2. Thực thi tuần tự các bước xử lý logic và tích hợp theo đúng chỉ dẫn của Minimax PPTX.
> 3. Kiểm thử đầu ra, tối ưu hóa hiệu năng và cung cấp kết quả hoàn chỉnh."

## ⚠️ Lưu Ý & Gotchas

* **Lỗi ghi đè màu sắc của Template**: Khi sao chép phong cách (imitate) từ slide mẫu, hãy cẩn thận gán đúng vai trò của màu nền (`bg`) và màu chữ chính (`primary`). Trong slide tối màu (dark-mode), màu nền sẽ là màu tối và màu chữ là màu sáng.
* **Hạn chế chụp ảnh màn hình**: Việc chụp ảnh màn hình slide để xem thử trực quan chỉ hỗ trợ trên hệ điều hành macOS và yêu cầu môi trường có cài đặt `soffice` và `swiftc`.
