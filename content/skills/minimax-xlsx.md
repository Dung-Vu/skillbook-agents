---
category: content-communication
command: /xlsx
complexity: intermediate
description: Hỗ trợ tự động hóa việc đọc dữ liệu, tạo mới và ghi chép các bảng tính Excel (`.xlsx`) kèm theo các công thức tính toán tự động và định dạng chuyên nghiệp.
featured: false
lastVerified: '2026-06-03'
oneLiner: Hỗ trợ đọc, viết và xử lý bảng tính Excel (.xlsx) tự động.
platforms:
  - universal
  - cursor
  - windsurf
  - claude-code
  - mcp
provider: minimax
relatedSkills:
  - minimax-pdf
  - minimax-pptx
seoDescription: >-
  Xử lý bảng tính Excel (.xlsx) chất lượng cao. Quy tắc Formula-first viết công
  thức động và chạy tính toán lại tự động.
seoTitle: Minimax XLSX - Minimax Skill for AI Agents
slug: minimax-xlsx
sourceAuthor: Minimax
sourceUrl: ''
tags:
  - xlsx
  - excel
  - spreadsheet
  - data
title: Minimax XLSX
---

## 📖 Tại Sao Cần Skill Này?

Làm việc với bảng tính Excel lớn tốn nhiều thời gian để viết công thức tính toán và căn chỉnh định dạng. Kỹ năng này giúp trợ lý ảo tự động đọc hiểu dữ liệu trong Excel, tạo báo cáo mới, viết các công thức tự động (như tính tổng, tính trung bình) thay vì điền số tĩnh, giúp file Excel của bạn luôn tự cập nhật khi thay đổi số liệu.

## ⚙️ Cách Hoạt Động

Quy trình thực hiện:
1. **Lọc dữ liệu**: Trợ lý sử dụng công cụ phù hợp tùy theo dung lượng file (file cực lớn sẽ dùng bộ xử lý nhanh để không bị treo).
2. **Viết công thức**: Trợ lý viết các công thức Excel (ví dụ `=SUM(...)`) để tính toán số liệu động.
3. **Tính toán lại**: Trợ lý chạy thử nghiệm tính toán để đảm bảo các công thức không bị lỗi và hiển thị đúng kết quả trước khi gửi cho bạn.

## 🚀 Cách Sử Dụng

- Nhờ trợ lý đọc dữ liệu từ file Excel có sẵn và thực hiện tính toán hoặc vẽ biểu đồ.
- Yêu cầu trợ lý tạo file Excel mới, lập bảng báo cáo doanh thu kèm các công thức tự động tính tổng hoặc tỷ lệ phần trăm.
- Trợ lý sẽ tự động giữ nguyên định dạng (font chữ, màu sắc) của file gốc khi chỉnh sửa để không làm xáo trộn thiết kế của bạn.

## 💡 Kịch Bản Lập Trình Thực Tế

### Người dùng:
> "Tôi có danh sách bán hàng thô này. Hãy tạo một file Excel báo cáo doanh thu, tự động tính tổng tiền ở cột cuối và làm nổi bật các dòng có doanh thu lớn."

### Trợ lý:
> "Tôi đã tạo file Excel báo cáo doanh thu cho bạn:
> 1. Toàn bộ cột 'Tổng tiền' đã được thiết lập công thức nhân tự động giữa số lượng và đơn giá.
> 2. Đã thêm công thức tính tổng doanh thu toàn bộ ở cuối bảng.
> 3. Các dòng có doanh thu lớn đã được tự động tô màu xanh nổi bật để bạn dễ theo dõi."

## ⚠️ Lưu Ý & Gotchas

- **Lưu ý công thức**: Trợ lý sẽ tự động kích hoạt tính năng tính toán trước khi gửi file, tránh trường hợp bạn mở file lên nhưng các cột công thức chỉ hiển thị số 0 hoặc bị trống.
- **Vùng gộp ô (Merged Cells)**: Khi Excel gộp nhiều ô làm một, dữ liệu thực tế chỉ nằm ở ô đầu tiên. Trợ lý sẽ xử lý cẩn thận để tránh đọc thiếu thông tin của các ô được gộp.
