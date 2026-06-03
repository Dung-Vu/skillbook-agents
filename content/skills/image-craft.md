---
slug: image-craft
title: Image Craft
command: ''
category: creative-design
tags:
  - image-generation
  - chibi-style
  - 3d-style
  - low-poly
complexity: intermediate
platforms:
  - universal
  - cursor
  - windsurf
  - claude-code
  - mcp
featured: false
description: >-
  Trợ lý tạo ảnh 3D và đồ họa chất lượng cao theo 17 phong cách đa dạng (chibi,
  low-poly, mockups quảng cáo). Tối ưu hóa prompt để tạo sản phẩm trực quan sắc
  nét.
oneLiner: Tạo hình ảnh 3D và đồ họa quảng cáo chất lượng cao bằng AI.
sourceUrl: ''
sourceAuthor: Minimax
lastVerified: '2026-06-03'
relatedSkills:
  - icon-maker
  - gif-sticker-maker
seoTitle: Image Craft - Minimax Skill for AI Agents
seoDescription: >-
  Trợ lý tạo ảnh AI chuyên nghiệp: tối ưu hóa prompt vẽ tranh 3D, thiết kế bao
  bì sản phẩm, phong cách chibi và mô hình đất sét.
provider: minimax
---

## 📖 Tại Sao AI Agent Của Bạn Cần Kỹ Năng Này?

Việc tự viết các câu lệnh (prompt) tạo ảnh 3D thường cho ra kết quả không như ý do thiếu các từ khóa kỹ thuật về ánh sáng, góc máy và chất liệu. Kỹ năng này đóng vai trò như một kỹ sư prompt chuyên sâu, tinh chỉnh các câu lệnh của người dùng theo 17 phong cách nghệ thuật được tuyển chọn kỹ lưỡng.

## ⚙️ Cơ Chế Hoạt Động & Quy Trình Tư Duy

Quy trình thiết kế ảnh nghệ thuật:

```
[Idea Input] -> [Select from 17 Styles] -> [Apply Prompt Template] -> [Call Image API] -> [Deliver Asset]
```

1. **Style Mapping**: Ánh xạ ý tưởng của người dùng vào 1 phát họa phong cách (như Claymation, Toy 3D, Knolling, Low-Poly).
2. **Prompt Construction**: Điền thông tin vào các template câu lệnh có sẵn cấu trúc camera và ánh sáng studio.
3. **Delivery**: Xuất ảnh trực tiếp và hiển thị thông qua định dạng XML `<deliver_assets>`.

## 🚀 Bộ Quy Tắc Chỉ Dẫn Cho Agent (Prompt Guidelines)

1. Nhận diện ngôn ngữ của người dùng để tùy biến phụ đề và văn bản đè trên ảnh theo đúng ngôn ngữ đó.
2. Trả về kết quả trực tiếp và ngắn gọn tối đa; không giải thích dài dòng về quá trình tạo ảnh.
3. Sử dụng đúng template tương ứng cho từng nhóm phong cách (Nhân vật, Phong cảnh, Sản phẩm, Biến đổi phong cách).

## ⚠️ Cảnh Báo Vận Hành & Mẹo Tối Ưu (Developer Gotchas)

- **Lỗi chính tả chữ đè (text overlay)**: Khi tạo ảnh quảng cáo sản phẩm có chữ, hãy cảnh báo người dùng rằng chữ có thể bị lỗi chính tả nhẹ do giới hạn của mô hình tạo ảnh.
- **Xung đột phong cách**: Việc phối hợp quá nhiều phong cách đối lập trong một câu lệnh sẽ làm mô hình bị rối. Hãy giữ prompt nhất quán theo một chủ đề duy nhất.
