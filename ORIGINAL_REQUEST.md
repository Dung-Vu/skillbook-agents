# Original User Request

## Initial Request — 2026-06-04T08:04:20Z

Rà soát và tinh chỉnh nội dung của toàn bộ 109 kỹ năng (skills) trong thư mục `content/skills/` nhằm giúp tài liệu súc tích, dễ đọc và dễ hiểu hơn cho người dùng, đồng thời giảm thiểu tối đa các đoạn văn dài dòng không cần thiết.

Working directory: c:\Users\Admin\Desktop\skillbook-agents
Integrity mode: development

## Requirements

### R1. Tinh Chỉnh Nội Dung Ngắn Gọn & Súc Tích (Conciseness & Readability)
- Quét qua toàn bộ 109 file kỹ năng (`.md` tiếng Việt và `.en.md` tiếng Anh) trong thư mục `content/skills/`.
- Thực hiện rút gọn các câu văn dài dòng:
  - Chuyển đổi các đoạn giải thích lý thuyết dông dài thành các gạch đầu dòng (bullet points) ngắn gọn, đi thẳng vào trọng tâm.
  - Loại bỏ các từ ngữ thừa, các câu giới thiệu sáo rỗng hoặc lặp đi lặp lại.
  - Đảm bảo mỗi phần H2 (Tại sao cần, Cách hoạt động, Cách sử dụng, Kịch bản, Lưu ý) không vượt quá 3-4 gạch đầu dòng/đoạn ngắn.

### R2. Bảo Toàn Tri Thức Kỹ Thuật (Preserve Core Technical Prompt Rules)
- Không được làm thay đổi cấu trúc frontmatter của các kỹ năng.
- Bắt buộc phải giữ nguyên các chỉ dẫn kỹ thuật cốt lõi (Prompt ruleset trong phần "Cách Sử Dụng" / "Agent Guidelines") để tránh làm giảm hiệu quả hoạt động thực tế của AI Agent.
- Giữ nguyên các ví dụ/kịch bản lập trình thực tế có chứa mã lệnh cụ thể.

### R3. Đồng Bộ Hóa Cấu Trúc File
- Đảm bảo sau khi tinh chỉnh, các file vẫn giữ đúng cấu trúc 5 H2 Canonical Emoji đã được định nghĩa trong `CONTRIBUTING.md`.
- Đảm bảo các tệp tiếng Anh song hành (`.en.md`) cũng được đồng bộ hóa nội dung rút gọn tương ứng.

## Acceptance Criteria

### Content Quality & Conciseness
- [ ] Tất cả 109 kỹ năng và tệp dịch tiếng Anh tương ứng được tinh chỉnh ngắn gọn, dễ đọc, cấu trúc rõ ràng.
- [ ] Không có tệp kỹ năng nào bị mất các chỉ dẫn prompt kỹ thuật cốt lõi hoặc mã lệnh thực tế.

### System Verification & Integrity
- [ ] Chạy lệnh `npm run validate:skills` thành công 100% không có lỗi frontmatter hay lỗi cấu trúc.
- [ ] Chạy `npm run build` thành công 100%, không bị lỗi TypeScript hoặc render tĩnh.
- [ ] Bộ kiểm thử Playwright E2E (`npx playwright test`) vượt qua 100% (17/17 tests passed).
