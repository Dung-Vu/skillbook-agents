---
category: workflow-orchestration
command: /skill-refiner
complexity: advanced
description: >-
  Kỹ năng tinh chỉnh và tối ưu hóa các tệp kỹ năng hiện có. Tập trung vào việc
  tinh lọc các hướng dẫn prompt dư thừa, làm sạch các đoạn mã lệnh thừa thãi,
  cập nhật tham chiếu và đảm bảo tuân thủ tiêu chuẩn chất lượng cao nhất.
featured: false
lastVerified: '2026-06-03'
oneLiner: 'Tinh chỉnh, tối ưu hóa prompt và làm sạch mã nguồn của các kỹ năng hiện có.'
platforms:
  - universal
  - cursor
  - windsurf
  - claude-code
  - mcp
provider: minimax
relatedSkills:
  - skill-creator
  - mavis
seoDescription: >-
  Tối ưu hóa và làm gọn tệp kỹ năng AI. Sử dụng cơ chế so khớp hash (CAS) và
  viết các bản vá surgical patch an toàn.
seoTitle: Skill Refiner - Minimax Skill for AI Agents
slug: skill-refiner
sourceAuthor: Minimax
sourceUrl: ''
tags:
  - skill
  - refine
  - optimization
  - audit
title: Skill Refiner
---

## 📖 Tại Sao Cần Skill Này?

Kỹ năng này giúp AI Agent thực hiện các thay đổi, sửa chữa nhỏ một cách an toàn trên các Kỹ năng hiện có mà không làm hỏng các tính năng cũ. Nó giúp đảm bảo tính nhất quán của mã nguồn kỹ năng, kiểm tra trùng lặp thông tin và sử dụng các bản vá nhỏ dạng "surgical patch" thay vì viết lại toàn bộ tệp tin.

---

## ⚙️ Cách Hoạt Động

Quy trình tinh chỉnh kỹ năng:
1. **Thu thập bằng chứng**: Lấy thông tin lỗi từ danh sách Signal hoặc phản hồi trực tiếp của người dùng.
2. **Đọc tệp tin hiện tại**: Chạy `mavis skill show <name>` để lấy nội dung thô và lưu mã băm bảo mật (`hash`).
3. **Phân tích nguyên nhân**: Xác định lỗi thuộc về tài liệu sai, môi trường thay đổi hay thiếu trường hợp đặc biệt. Nếu do Agent chạy sai, dừng lại.
4. **Tạo bản vá surgical**: Viết cấu trúc thay đổi chỉ tập trung vào dòng lỗi dạng `old_string` / `new_string`.
5. **Thực thi bản vá**: Gửi request POST chứa mã băm xác thực `expectedOldHash` lên API hệ thống để cập nhật an toàn.

Sơ đồ quy trình:
```
[Bằng chứng lỗi / Signal] ➔ 📖 [Đọc skill hiện tại & lấy Hash] ➔ 📐 [Thiết kế bản vá nhỏ (surgical patch)]
                               ➔ 🔒 [Kiểm tra an toàn CAS (hash)] ➔ 💻 [Gọi API cập nhật apply]
```

---

## 🚀 Cách Sử Dụng

```markdown
# QUY TẮC TINH CHỈNH KỸ NĂNG
- **Bắt buộc có khóa băm CAS**: Lệnh gọi API cập nhật bắt buộc phải truyền kèm tham số `expectedOldHash` để tránh ghi đè chéo khi có nhiều Agent chạy song song.
- **Không tự tinh chỉnh bản thân**: Agent tuyệt đối không được phép chỉnh sửa tệp `SKILL.md` của chính kỹ năng `skill-refiner`.
- **Bảo toàn Frontmatter**: YAML frontmatter (phần name và description) của kỹ năng mục tiêu phải được giữ nguyên vẹn sau bản vá.
- **Không chèn khóa bảo mật**: Tuyệt đối không ghi thông tin đăng nhập hay khóa API của hệ thống vào tệp kỹ năng.
```

---

## 💡 Kịch Bản Lập Trình Thực Tế

### Nhà phát triển:
> "Hãy hướng dẫn tôi cách thiết lập và sử dụng kỹ năng Skill Refiner để Tinh chỉnh, tối ưu hóa prompt và làm sạch mã nguồn của các kỹ năng hiện có."

### AI Agent (Đã được trang bị Kỹ năng):
> "Tôi đã sẵn sàng. Dưới đây là kịch bản vận hành thực tế cho kỹ năng Skill Refiner:
> 1. Thiết lập các thông số cấu hình và tham số đầu vào cần thiết cho hệ thống.
> 2. Thực thi tuần tự các bước xử lý logic và tích hợp theo đúng chỉ dẫn của Skill Refiner.
> 3. Kiểm thử đầu ra, tối ưu hóa hiệu năng và cung cấp kết quả hoàn chỉnh."

## ⚠️ Lưu Ý & Gotchas

* **Lỗi xung đột Hash (Concurrent Modification)**: Nếu một Agent khác đã cập nhật kỹ năng trước đó, mã băm sẽ không khớp và API trả về lỗi. Agent cần đọc lại nội dung mới và tạo lại bản vá.
* **Sửa đổi kỹ năng Built-in**: Các kỹ năng built-in ở thư mục `packages/daemon/skills/` là bất biến lúc runtime. Agent không thể dùng API cập nhật mà phải hướng dẫn người dùng tạo nhánh Git sửa đổi và mở MR.
