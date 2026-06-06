---
slug: pdb-database
title: PDB 3D Structure Database
command: /pdb-database
category: bioinformatics-genomics
tags:
  - pdb
  - crystal-structure
  - cryo-em
  - x-ray
  - protein-structure
complexity: intermediate
platforms:
  - cursor
  - claude-code
  - windsurf
  - gemini-cli
  - universal
featured: false
description: >-
  Tìm kiếm và tải cấu trúc 3D thực nghiệm (protein, axit nucleic) từ Protein Data Bank (PDB). Hỗ trợ lấy thông tin cấu trúc nguyên tử để mô phỏng và thiết kế thuốc.
oneLiner: 'Tra cứu và tải các cấu trúc 3D thực tế của protein từ PDB.'
sourceUrl: 'https://www.rcsb.org/'
sourceAuthor: Google DeepMind
lastVerified: '2026-05-30'
relatedSkills:
  - pymol
  - uniprot-database
seoTitle: PDB 3D Structure Database — Skillbook Agents
seoDescription: >-
  Hướng dẫn Agent tìm kiếm và tải cấu trúc 3D thực nghiệm từ RCSB Protein Data
  Bank.
provider: antigravity
---

## 📖 Tại Sao Cần Skill Này?

RCSB PDB (Protein Data Bank) là thư viện chứa hơn 220.000 cấu trúc 3D thực tế của các phân tử sinh học được xác định bằng thực nghiệm (thí nghiệm thực tế như tia X hoặc kính hiển vi điện tử). Khác với AlphaFold (dự đoán bằng máy tính), PDB cung cấp các dữ liệu thực tế giúp bạn:
- **Xác thực thí nghiệm**: Biết chính xác hình dạng 3D thực tế và độ phân giải của cấu trúc nguyên tử.
- **Thiết kế thuốc**: Xem cấu trúc protein khi đang liên kết với các hoạt chất/thuốc để hiểu cơ chế hoạt động.
- **Tìm kiếm thông minh**: Tìm kiếm theo chuỗi protein, tên hoạt chất hoặc các thuộc tính hóa học.

## ⚙️ Cách Hoạt Động

Quy trình tìm kiếm cấu trúc:
```
Nhập từ khóa / chuỗi protein ──> Tìm kiếm trên RCSB PDB ──> Tải file cấu trúc 3D (.pdb, .cif) để hiển thị/mô phỏng
```
- **Tìm kiếm**: Tìm kiếm cấu trúc theo tên protein, sinh vật hoặc phương pháp chụp hình.
- **Tải xuống**: Tải các file tọa độ 3D về máy để trực quan hóa (ví dụ sử dụng phần mềm PyMOL).

## 🚀 Cách Sử Dụng

- Nhập tên protein hoặc mã PDB ID để bắt đầu tra cứu.
- Ưu tiên chọn các cấu trúc có độ phân giải cao (chỉ số độ phân giải nhỏ: tia X < 2.0Å, kính hiển vi điện tử cryo-EM < 3.0Å) để có kết quả chính xác nhất.
- Sử dụng file tải về kết hợp với phần mềm mô phỏng hoặc hiển thị 3D để phân tích.

## 💡 Kịch Bản Lập Trình Thực Tế

### Người dùng yêu cầu:
> "Hãy tải cấu trúc 3D thực tế của protein chính (Mpro) của virus SARS-CoV-2 từ PDB để tôi nghiên cứu thiết kế thuốc."

### Trợ lý AI thực hiện:
> "Tôi sẽ tìm kiếm và tải cấu trúc 3D từ PDB cho bạn:
> 1. Xác định cấu trúc Mpro có chất lượng cao nhất hiện có (mã PDB là **6LU7**).
> 2. Tải file cấu trúc định dạng `.pdb` trực tiếp từ hệ thống PDB.
> 3. Trích xuất thông số chất lượng (độ phân giải 2.16 Å, phương pháp tia X) và hiển thị các hoạt chất liên kết có sẵn trong cấu trúc đó."

## ⚠️ Lưu Ý & Gotchas

- **Độ phân giải (Resolution)**: Chỉ số này càng nhỏ thì cấu trúc càng sắc nét và chính xác (dưới 2.0Å là rất tốt, trên 3.5Å là kém).
- **Khác biệt với AlphaFold**: PDB là hình chụp thực nghiệm (có thể chứa đột biến hoặc hoạt chất liên kết), trong khi AlphaFold là mô hình dự đoán lý thuyết.
- **Kiểm tra phiên bản**: Một số cấu trúc cũ có thể đã bị thay thế bởi phiên bản mới tốt hơn, hãy kiểm tra trạng thái trước khi sử dụng.
