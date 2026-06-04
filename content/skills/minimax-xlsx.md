---
category: content-communication
command: /xlsx
complexity: intermediate
description: >-
  Xử lý, phân tích và ghi các tệp bảng tính Excel (`.xlsx`). Cung cấp cây quyết
  định để lựa chọn thư viện phù hợp (như pandas, openpyxl) tùy thuộc vào mục
  đích đọc/ghi và kích thước dữ liệu.
featured: false
lastVerified: '2026-06-03'
oneLiner: 'Đọc, ghi và xử lý bảng tính Excel (.xlsx) dựa trên cây quyết định tối ưu.'
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

Tệp bảng tính Excel (`.xlsx`) thường được sử dụng cho các mô hình tài chính, tính toán doanh nghiệp và quản lý dữ liệu lớn. Kỹ năng này cung cấp nguyên tắc "Formula-first" (Ưu tiên công thức) bắt buộc để tệp Excel giữ được tính năng tính toán động thay vì xuất ra các số tĩnh chết, kết hợp quy trình recalculate bằng LibreOffice để cập nhật kết quả tính toán trước khi giao cho khách hàng.

---

## ⚙️ Cách Hoạt Động

Quy trình thao tác với file Excel:
1. **Lựa chọn thư viện**: Đối chiếu yêu cầu với decision tree (dùng `pandas` để xử lý dữ liệu thô lớn >500k dòng, dùng `openpyxl` để viết công thức, định dạng màu sắc và vẽ biểu đồ).
2. **Triển khai Formula-first**: Khai báo các cột dữ liệu tính toán bằng công thức Excel tiêu chuẩn (ví dụ: `=SUM(A1:A10)`).
3. **Định dạng màu sắc**: Áp dụng mã màu chuẩn (Màu xanh dương cho ô nhập liệu thủ công, màu đen cho ô chứa công thức, màu xanh lá cho liên kết chéo trang).
4. **Recalculate và Xác thực**: Chạy script `recalc.py` để LibreOffice thực thi công thức, kiểm tra file kết quả không còn lỗi công thức (`total_errors == 0`).

Sơ đồ quy trình:
```
[Dữ liệu thô / Chỉ thị] ➔ 📊 [Đọc bằng pandas / polars nếu dữ liệu lớn] ➔ ✍️ [openpyxl ghi công thức dynamic (=...)]
                              ➔ 🎨 [Áp dụng định dạng font & màu sắc chuẩn] ➔ 🔄 [Chạy recalc.py & Check error == 0]
```

---

## 🚀 Cách Sử Dụng

```markdown
# QUY TẮC XỬ LÝ BẢNG TÍNH EXCEL
- **Formula-first là bắt buộc**: Tuyệt đối không tính toán tổng hoặc tỷ lệ trong Python rồi ghi đè số tĩnh vào Excel. Mọi giá trị có thể tính toán phải được biểu diễn bằng công thức bắt đầu bằng dấu `=`.
- **Luôn tính toán lại (Recalculate)**: Trước khi bàn giao bất kỳ tệp Excel có chứa công thức nào, bắt buộc phải chạy `python scripts/recalc.py <file>` để LibreOffice sinh giá trị đệm.
- **Giữ nguyên mẫu gốc**: Khi chỉnh sửa tệp Excel có sẵn, các định dạng hiện tại (font, độ rộng cột, viền ô) có mức ưu tiên cao hơn quy tắc mặc định của kỹ năng này.
- **Không rút gọn tập dữ liệu lớn**: Không sử dụng `head()` hoặc `sample()` để giảm dung lượng file khi ghi đè nếu không có yêu cầu, tránh làm sai lệch các phép tính tổng.
```

---

## 💡 Kịch Bản Lập Trình Thực Tế

### Nhà phát triển:
> "Hãy hướng dẫn tôi cách thiết lập và sử dụng kỹ năng Minimax XLSX để Đọc, ghi và xử lý bảng tính Excel (.xlsx) dựa trên cây quyết định tối ưu."

### AI Agent (Đã được trang bị Kỹ năng):
> "Tôi đã sẵn sàng. Dưới đây là kịch bản vận hành thực tế cho kỹ năng Minimax XLSX:
> 1. Thiết lập các thông số cấu hình và tham số đầu vào cần thiết cho hệ thống.
> 2. Thực thi tuần tự các bước xử lý logic và tích hợp theo đúng chỉ dẫn của Minimax XLSX.
> 3. Kiểm thử đầu ra, tối ưu hóa hiệu năng và cung cấp kết quả hoàn chỉnh."

## ⚠️ Lưu Ý & Gotchas

* **Lỗi Công thức trống (String-only)**: openpyxl chỉ ghi chuỗi công thức dạng text chứ không thực tế chạy tính toán. Nếu bỏ qua bước recalculate, tệp Excel mở ra trên một số ứng dụng đọc sẽ hiển thị trống hoặc bằng 0 cho đến khi người dùng nhấn F9.
* **Lỗi đọc file chứa vùng gộp (Merged Cells)**: Khi dùng `iter_rows()` đọc dữ liệu, chỉ có ô góc trên bên trái của vùng gộp chứa dữ liệu thực tế, các ô còn lại sẽ trả về `None`. Cần unmerge trước khi đọc nếu muốn duyệt toàn bộ hàng.
