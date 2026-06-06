---
slug: pymol
title: PyMOL Molecular Visualization
command: /pymol
category: bioinformatics-genomics
tags:
  - pymol
  - visualization
  - protein-structure
  - molecular-graphics
  - rendering
complexity: advanced
platforms:
  - cursor
  - claude-code
  - windsurf
  - gemini-cli
  - universal
featured: true
description: >-
  Công cụ trực quan hóa cấu trúc protein dưới dạng 3D. Giúp tạo hình ảnh động, tô màu cấu trúc theo độ tin cậy để phân tích và chuẩn bị hình ảnh minh họa cho các bài báo cáo khoa học.
oneLiner: Tạo hình ảnh 3D và trực quan hóa cấu trúc protein phân tử bằng PyMOL.
sourceUrl: 'https://www.pymol.org/'
sourceAuthor: Google DeepMind
lastVerified: '2026-05-30'
relatedSkills: []
seoTitle: PyMOL Molecular Visualization — Skillbook Agents
seoDescription: >-
  Hướng dẫn Agent render cấu trúc protein, phân tích binding sites, và tạo hình
  ảnh molecular graphics bằng PyMOL.
provider: antigravity
---

## 📖 Tại Sao Cần Skill Này?

Các file dữ liệu cấu trúc protein (như mmCIF hay PDB) thực chất chỉ chứa các tọa độ chữ và số khô khan, rất khó hình dung bằng mắt thường. PyMOL giúp bạn:
- **Trực quan hóa sinh động**: Biến các tọa độ số thành hình ảnh cấu trúc 3D trực quan, dễ quan sát.
- **Phân tích chi tiết**: Đo đạc khoảng cách giữa các nguyên tử, tô màu theo độ tin cậy của cấu trúc (pLDDT) và xác định vị trí các túi liên kết.
- **Tự động hóa**: Viết kịch bản lệnh Python để tự động vẽ hàng loạt hình ảnh protein mà không cần làm thủ công từng cái.

## ⚙️ Cách Hoạt Động

Quy trình hoạt động của PyMOL diễn ra như sau:
1. **Đọc file cấu trúc**: Tải file cấu trúc protein (định dạng `.cif` hoặc `.pdb`) vào chương trình.
2. **Xử lý hình ảnh**: Chạy mã Python viết sẵn để thiết lập kiểu hiển thị (dạng hoạt hình ribbon, dạng bề mặt, v.v.), điều chỉnh góc camera và đổ bóng.
3. **Xuất kết quả**: Lưu lại file dự án PyMOL (`.pse`) và xuất ra ảnh định dạng `.png` chất lượng cao.

## 🚀 Cách Sử Dụng

Khi làm việc với trợ lý AI:
- Cung cấp file cấu trúc protein cần vẽ (hoặc yêu cầu AI tải trước bằng kỹ năng PDB).
- Xác định rõ bạn muốn hiển thị cấu trúc theo phong cách nào (ví dụ: dạng hoạt hình Ribbon sang trọng, dạng que biểu diễn axit amin, hay dạng bề mặt khối màu).
- Đảm bảo AI chèn mã khởi chạy phần mềm bắt buộc (`pymol.finish_launching()`) ở đầu script và lệnh thoát (`cmd.quit()`) ở cuối script để tránh treo máy.

## 💡 Kịch Bản Lập Trình Thực Tế

### 🧑‍💻 Nhà phát triển:
> "Tôi muốn tạo một bức ảnh 3D đẹp mắt của protein insulin để đưa vào bài báo cáo. Hãy giúp tôi viết kịch bản lệnh PyMOL để tô màu chuỗi axit amin và render ảnh."

### 🤖 AI Agent (Đã được trang bị Kỹ năng):
> "Tôi đã viết một kịch bản lệnh Python để tự động hóa quy trình vẽ ảnh insulin (mã PDB ID: 1MSO) cho bạn:
> 
> 1. **Cấu hình hiển thị**: Thiết lập hiển thị cấu trúc insulin dạng hoạt hình Ribbon nổi bật, tô màu chuỗi A và chuỗi B bằng hai tông màu khác nhau để dễ phân biệt.
> 2. **Làm nổi bật chi tiết**: Hiển thị các liên kết disulfide quan trọng dưới dạng que màu vàng nổi bật.
> 3. **Xuất ảnh**: Thiết lập góc chụp camera đẹp nhất, bật đổ bóng sâu và xuất ra file ảnh `insulin.png` độ phân giải cao cùng file dự án `insulin.pse` để bạn có thể tự điều chỉnh thêm."

## ⚠️ Lưu Ý & Gotchas

- **Cần có file dữ liệu trước**: PyMOL không tự dự đoán cấu trúc gen hay protein. Bạn phải cung cấp file cấu trúc sẵn có hoặc tải từ ngân hàng dữ liệu PDB trước khi sử dụng kỹ năng này.
- **Bắt buộc có lệnh đóng**: Trong các đoạn code tự động chạy, luôn phải gọi lệnh `cmd.quit()` khi kết thúc để đóng ứng dụng ngầm. Nếu thiếu lệnh này, tiến trình sẽ chạy vô hạn và làm treo máy chủ.
- **Giới hạn chức năng**: PyMOL chỉ dùng để dựng hình và đo đạc trực quan, không hỗ trợ mô phỏng động lực học phân tử (Molecular Dynamics) hay tính toán gắn kết thuốc (Docking).
