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
  Tìm kiếm các cấu trúc tinh thể nguyên tử của protein, axit nucleic và phối tử
  thực nghiệm từ Protein Data Bank.
oneLiner: Tra cứu và tải cấu trúc 3D thực nghiệm sinh học từ PDB.
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

RCSB PDB (Protein Data Bank) chứa >220,000 cấu trúc 3D thực nghiệm — X-ray crystallography, cryo-EM, NMR. Khác với AlphaFold (predicted), PDB cung cấp cấu trúc **xác nhận bằng thí nghiệm**.

- **Experimental structures**: Resolution, R-factor, method (X-ray, cryo-EM, NMR)
- **Ligand-bound structures**: Protein + drug/ligand co-crystal structures cho drug design
- **Multi-search**: Sequence similarity, structure similarity, chemical attributes

## ⚙️ Cách Hoạt Động

```
Query (text/sequence/structure) → RCSB PDB API → 
Return PDB entries with metadata, download structure files
```

1. **Text search**: Tìm PDB entries theo protein name, organism, method
2. **Sequence search**: Tìm structures có sequence tương đồng
3. **Download**: Tải `.cif`, `.pdb` files cho visualization (PyMOL)

## 🚀 Cách Sử Dụng

### Universal

```markdown
# PDB Query Rules
- PDB = experimental structures. AlphaFold = predicted structures. Luôn nói rõ nguồn.
- Report: PDB ID, resolution, method, organism, ligands.
- Ưu tiên structures có resolution tốt (X-ray < 2.0Å, cryo-EM < 3.0Å).
- Kết hợp với PyMOL để visualize downloaded structures.
```

## 💡 Kịch Bản Lập Trình Thực Tế

### 🧑‍💻 Nhà phát triển:
> "Hãy tải cấu trúc tinh thể 3D của protein main protease (Mpro) của virus SARS-CoV-2 từ Protein Data Bank để tôi làm docking."

### 🤖 AI Agent (Đã được trang bị Kỹ năng):
> "Tôi sẽ kết nối trực tiếp với Protein Data Bank (PDB) để tải cấu trúc 3D chuẩn xác cho bạn:"
>
> 1. **Xác định mã PDB ID**: Tôi chẩn đoán và xác định cấu trúc tinh thể Mpro có độ phân giải cao nhất là **6LU7**.
> 2. **Tải tệp tọa độ 3D**: Tôi thực hiện tải xuống tệp tin cấu trúc ở định dạng `.pdb` hoặc `.cif` trực tiếp từ máy chủ RCSB PDB.
> 3. **Phân tích chất lượng tinh thể**: Tôi trích xuất thông số độ phân giải (Resolution: 2.16 Å), phương pháp giải cấu trúc (X-ray diffraction) và lập danh sách các phối tử (ligands) liên kết sẵn trong túi hoạt động.
>
> *Tệp tọa độ 3D và báo cáo chẩn đoán cấu trúc tinh thể đã sẵn sàng, sẵn sàng để bạn đưa vào phần mềm mô phỏng.*

## ⚠️ Lưu Ý & Gotchas

- **Resolution matters**: Thấp hơn = tốt hơn. X-ray <2.0Å excellent, >3.5Å poor. Cryo-EM thường >2.5Å.
- **PDB vs AlphaFold**: PDB = experimental (ligand-bound, mutations), AlphaFold = predicted (canonical sequence only).
- **Biological assembly vs asymmetric unit**: PDB file có thể chứa chỉ 1 subunit — cần generate biological assembly cho holoenzyme.
- **Obsolete entries**: Một số PDB entries đã bị thay thế (superseded) — check status trước khi dùng.
