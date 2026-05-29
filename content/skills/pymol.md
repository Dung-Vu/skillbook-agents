---
slug: "pymol"
title: "PyMOL Molecular Visualization"
command: "/pymol"
category: "creative-design"
tags:
  - "pymol"
  - "molecular-visualization"
  - "protein-structure"
  - "3d-rendering"
complexity: "advanced"
platforms:
  - "cursor"
  - "claude-code"
  - "windsurf"
  - "universal"
featured: true
description: "Trực quan hóa, phân tích cấu trúc 3D của protein và phức hợp sinh học, render hình ảnh chất lượng cao sử dụng PyMOL command script."
oneLiner: "Visualize and render 3D protein structures with PyMOL."
sourceUrl: "https://pymol.org/"
sourceAuthor: "Antigravity"
lastVerified: "2026-05-29"
relatedSkills:
  - "uniprot-database"
  - "protein-sequence-msa"
  - "web-research"
seoTitle: "PyMOL Molecular Visualization - Skillbook Agents"
seoDescription: "Cách tạo tập lệnh PyMOL tự động để dựng hình 3D protein sinh học qua AI Agent."
---

## 📖 Tại Sao Cần Skill Này?

Trong nghiên cứu sinh học cấu trúc và thiết kế thuốc (drug design), việc quan sát trực quan cấu trúc 3D của protein, DNA và các liên kết hóa học là vô cùng quan trọng. Tuy nhiên, AI Agent thông thường gặp khó khăn lớn khi làm việc với dữ liệu 3D:
- **Thiếu khả năng dựng hình**: Không thể tự tạo hoặc thực thi các mã script Python/PyMOL để xuất ra file ảnh PNG/render chất lượng cao.
- **Không hiểu không gian 3D**: Khó xác định chính xác khoảng cách giữa các nguyên tử, các liên kết hydro, hay vùng hoạt động (active site).
- **Mã lệnh lỗi thời**: Viết các lệnh PyMOL CLI sai cú pháp dẫn tới lỗi thực thi.

Skill này cung cấp các chỉ dẫn cụ thể giúp Agent làm chủ công cụ PyMOL MCP để tải cấu trúc từ PDB, căn chỉnh (align) cấu trúc, đo đạc tương tác và kết xuất hình ảnh 3D đẹp mắt, sẵn sàng cho các báo cáo khoa học.

## ⚙️ Cách Hoạt Động

PyMOL Molecular Visualization hoạt động dựa trên khả năng của Agent tương tác với API hoặc command line của PyMOL thông qua các lệnh script Python hoặc PyMOL Command Language (PML). Quy trình gồm:
1. **Fetch cấu trúc**: Tải file tọa độ 3D (.pdb hoặc .cif) từ Protein Data Bank (PDB) bằng mã định danh (ví dụ: `1A8M`).
2. **Chọn vùng đại diện (Selection)**: Định vị các chuỗi acid amin cụ thể, phối tử (ligand) hoặc các ion kim loại quan trọng.
3. **Hiển thị & Tô màu (Style & Color)**: Thiết lập cách biểu diễn (cartoon, sticks, spheres, surface) và tô màu theo độ tin cậy (pLDDT) hoặc theo chuỗi.
4. **Đo đạc & Căn chỉnh (Measure & Align)**: Tính toán khoảng cách liên kết, căn chỉnh cấu trúc hai protein để so sánh độ tương đồng (RMSD).
5. **Render & Ray-trace**: Tạo ảnh render chất lượng xuất sắc với độ bóng và phản chiếu ánh sáng chân thực.

## 🚀 Cách Sử Dụng

### Universal

Hãy yêu cầu Agent tạo một kịch bản PML (PyMOL Command Language) hoặc script Python để dựng hình ảnh vùng hoạt động của protein:

```markdown
Hãy viết một file script PyMOL (.pml) thực hiện các bước sau để trực quan hóa vùng liên kết của protein 1HSG (HIV-1 Protease với thuốc kháng virus Indinavir):
1. Fetch cấu trúc 1HSG trực tiếp từ PDB.
2. Hiển thị protein dưới dạng cartoon màu xám nhạt (gray90).
3. Định vị phối tử Indinavir (mã hóa là 'MK1'), hiển thị dạng sticks với màu carbon là xanh lá (green sticks).
4. Tìm và hiển thị dạng sticks các acid amin của protein nằm trong bán kính 4 Ångström xung quanh Indinavir.
5. Hiển thị liên kết hydro giữa protein và phối tử dưới dạng dash màu vàng.
6. Thiết lập nền màu trắng và thực hiện lệnh `ray` để render ảnh với độ phân giải 1200x900.
```

### Cursor (.cursorrules)

```markdown
# PyMOL Script Rules
- Luôn viết script PyMOL tuân thủ phiên bản Python 3.x khi tích hợp trong các ứng dụng tự động hóa.
- Định vị chính xác phối tử bằng cách sử dụng các cú pháp chọn lọc của PyMOL (e.g., `select ligand, organic` hoặc `select active_site, byres (ligand around 4.0)`).
- Sử dụng các tùy chọn render chất lượng cao: `ray 1600, 1200` và bật tính năng phản chiếu `set ray_opaque_background, on`.
```

### Claude Code

```markdown
# Claude Code PyMOL Instructions
- Write clean PML or Python-PyMOL scripts to render structures.
- Focus on protein-ligand interactions, showing hydrogen bonds and polar contacts explicitly.
```

### Windsurf

```markdown
# Windsurf PyMOL Automation
- Generate and execute Python scripts that leverage the `pymol` package.
- Auto-extract root-mean-square deviation (RMSD) values after alignment.
```

## 💡 Ví Dụ Thực Tế

### ❌ Không có skill (Script chung chung, lỗi cú pháp):

```python
# ❌ Lệnh không chuẩn xác, thiếu chọn lọc cấu trúc cụ thể
import pymol
pymol.cmd.load("1hsg.pdb")
pymol.cmd.show("sticks")
pymol.cmd.color("blue")
pymol.cmd.png("output.png")
```

### ✅ Có skill (Script chuyên nghiệp, định vị chi tiết và tối ưu hóa render):

```python
# ✅ Script Python tự động hóa PyMOL hiển thị tương tác tinh tế
import pymol
from pymol import cmd

# Khởi chạy PyMOL ở chế độ không giao diện (headless mode)
pymol.finish_launching(['pymol', '-cq'])

# Tải cấu trúc từ PDB
cmd.fetch('1hsg')

# Thiết lập phong cách hiển thị tổng quan
cmd.bg_color('white')
cmd.hide('everything')
cmd.show('cartoon', 'polymer')
cmd.color('grey80', 'polymer')

# Chọn phối tử Indinavir và hiển thị dạng Sticks nổi bật
cmd.select('indinavir', 'resn MK1')
cmd.show('sticks', 'indinavir')
cmd.color('magenta', 'indinavir and name C*')

# Chọn các acid amin xung quanh phối tử trong vòng 4.0 Angstrom
cmd.select('pocket', 'byres (indinavir around 4.0)')
cmd.show('sticks', 'pocket')
cmd.color('cyan', 'pocket and name C*')

# Tìm và vẽ các liên kết hydro dạng đứt nét màu vàng
cmd.dist('h_bonds', 'indinavir', 'pocket', mode=2, cutoff=3.2)
cmd.hide('labels', 'h_bonds')
cmd.color('yellow', 'h_bonds')

# Render ảnh chất lượng cao
cmd.zoom('pocket', buffer=2.0)
cmd.ray(1200, 900)
cmd.png('hiv1_protease_active_site.png')
```

## ⚠️ Lưu Ý & Gotchas

- **Headless Execution**: Khi thực thi tự động trên server, PyMOL cần được chạy với tham số `-c` (chỉ dòng lệnh) hoặc `-cq` (chế độ yên lặng) để tránh yêu cầu giao diện đồ họa (GUI) gây treo hệ thống.
- **Đơn vị Đo Lường**: Khoảng cách trong PyMOL được tính bằng Ångström ($1\text{ Å} = 10^{-10}\text{ m}$). Các liên kết hydro thường có khoảng cách từ $2.5\text{ Å}$ đến $3.2\text{ Å}$.
- **Chỉ số B-factor/pLDDT**: Khi vẽ các mô hình từ AlphaFold, hãy sử dụng script tô màu theo B-factor (`spectrum b, red_yellow_green_blue_magenta, minimum=50, maximum=90`) để thể hiện trực quan độ tin cậy của cấu trúc dự đoán.
