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
  Dựng ảnh cấu trúc protein 3D chất lượng cao, căn chỉnh cấu trúc tương đồng, đo
  khoảng cách liên kết và tô màu theo pLDDT.
oneLiner: Trực quan hóa và dựng hình ảnh cấu trúc phân tử bằng PyMOL.
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

Cấu trúc protein dạng file text (mmCIF, PDB) gần như không thể hiểu được bằng mắt thường. PyMOL biến dữ liệu tọa độ 3D thành hình ảnh trực quan — giúp phân tích binding sites, so sánh cấu trúc, và tạo figure cho publication.

- **Render headless**: Chạy trên server không cần GPU hay màn hình (OSMesa software rendering)
- **Automation**: Viết Python script để tự động hóa rendering pipeline
- **Rich analysis**: Đo khoảng cách, tô màu theo B-factor/pLDDT, superposition, mutagenesis

## ⚙️ Cách Hoạt Động

```
Structure file (.cif/.pdb) → PyMOL Python script → 
Render PNG + Save .pse session → Report metrics
```

1. **Viết script**: Python script với PEP 0723 header, dùng `pymol-open-source-whl`
2. **Chạy headless**: `uv run render.py` với `PYOPENGL_PLATFORM=osmesa`
3. **Output**: PNG images + `.pse` session file (mở được trong PyMOL desktop)

Mọi script PHẢI có init boilerplate bắt buộc và kết thúc bằng `cmd.quit()`.

## 🚀 Cách Sử Dụng

### Universal

```markdown
# PyMOL Visualization Rules
- Luôn kiểm tra file cấu trúc tồn tại trước khi viết script.
- Mọi script PHẢI có init boilerplate: pymol.finish_launching() trước from pymol import cmd.
- Luôn save .pse session file bên cạnh PNG output.
- Luôn gọi cmd.quit() ở cuối script — bỏ sót sẽ khiến process treo.
- Sử dụng cmd.png() cho output, KHÔNG dùng cmd.ray() hay cmd.draw() (không tương thích OSMesa).
- Verify structure load: kiểm tra cmd.count_atoms("all") > 0 sau khi load.
```

### Cursor (.cursorrules)

```markdown
# PyMOL Rules
- Software rendering only (OSMesa). Không dùng hardware acceleration.
- Output paths phải absolute hoặc relative to project root.
- Kết hợp với AlphaFold hoặc PDB skill để tải structure trước khi visualize.
- Có sẵn 16+ recipes: cartoon coloring, B-factor, surface, pocket, superposition, mutagenesis.
```

## 💡 Kịch Bản Lập Trình Thực Tế

### 🧑‍💻 Nhà phát triển:
> "Tôi muốn tạo một bức ảnh 3D đẹp mắt của protein insulin để đưa vào bài báo cáo. Hãy giúp tôi viết kịch bản lệnh PyMOL để tô màu theo độ tin cậy và render ảnh."

### 🤖 AI Agent (Đã được trang bị Kỹ năng):
> "Tôi sẽ thiết kế một kịch bản lệnh PyMOL tự động hóa toàn bộ quy trình kết xuất đồ họa chất lượng cao cho bạn:"
>
> 1. **Thiết lập kịch bản lệnh (Scripting)**: Tôi tự động viết một tệp lệnh `.pml` bao gồm:
>    * Tải cấu trúc insulin từ PDB (mã ID: **1MSO**).
>    * Hiển thị cấu trúc dưới dạng hoạt hình Ribbon sang trọng (`show cartoon`).
>    * Tô màu chuỗi A và chuỗi B bằng hai tông màu gradient hài hòa.
>    * Hiển thị các liên kết disulfide cốt lõi dưới dạng que phát sáng màu vàng (`show sticks` tại các gốc Cysteine).
>    * Đặt góc chụp camera tối ưu, bật đổ bóng sâu (`ray` rendering) và xuất ảnh PNG nền trong suốt (`ray 1200, 900`).
> 2. **Hướng dẫn thực thi**: Tôi cung cấp file lệnh `.pml` hoàn chỉnh cùng chỉ dẫn cách bạn mở phần mềm PyMOL và chạy lệnh `run script.pml` chỉ trong 1 giây để có bức ảnh bài báo tuyệt đẹp.
>
> *Kịch bản đồ họa PyMOL chuyên nghiệp đã sẵn sàng, giúp bạn có những bức ảnh cấu trúc protein chất lượng xuất bản tạp chí.*

## ⚠️ Lưu Ý & Gotchas

- **Cần file cấu trúc**: Phải tải .cif hoặc .pdb trước bằng AlphaFold hoặc PDB skill.
- **Init boilerplate bắt buộc**: `from pymol import cmd` PHẢI đặt SAU `pymol.finish_launching()`, không phải trước.
- **Không dùng cho docking/MD**: PyMOL chỉ để visualize, không chạy molecular dynamics hay docking.
- **Session file lớn**: Surface rendering có thể tạo `.pse` >500 MB — tăng `--max_output_mb` nếu cần.
