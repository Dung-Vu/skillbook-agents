---
slug: "foldseek-structural-search"
title: "Foldseek 3D Structural Search"
command: "/foldseek-structural-search"
category: "bioinformatics-genomics"
tags:
  - "foldseek"
  - "structural-search"
  - "protein-structure"
  - "3d-alignment"
complexity: "advanced"
platforms:
  - "cursor"
  - "claude-code"
  - "windsurf"
  - "gemini-cli"
  - "universal"
featured: false
description: "Thực hiện đối sánh cấu trúc protein 3D tốc độ cao từ file tọa độ (.pdb, .cif) đối chiếu với các cơ sở dữ liệu cấu trúc lớn."
oneLiner: "Tìm kiếm cấu trúc protein 3D tương đồng bằng Foldseek."
sourceUrl: "https://search.foldseek.com/"
sourceAuthor: "Google DeepMind"
lastVerified: "2026-05-30"
relatedSkills:
  - "alphafold-database"
  - "pdb-database"
  - "pymol"
  - "protein-sequence-similarity-search"
seoTitle: "Foldseek 3D Structural Search — Skillbook Agents"
seoDescription: "Hướng dẫn Agent tìm kiếm protein tương đồng cấu trúc 3D với Foldseek API."
---

## 📖 Tại Sao Cần Skill Này?

Hai protein có thể có chuỗi amino acid hoàn toàn khác nhau nhưng gập cuộn thành cấu trúc 3D giống nhau — hiện tượng gọi là **structural homology**. Sequence search (BLAST, MMseqs2) sẽ bỏ sót những trường hợp này.

- **Sequence search thất bại**: Khi sequence identity <20%, BLAST không tìm được homolog — nhưng cấu trúc có thể vẫn tương đồng
- **Foldseek giải quyết**: So sánh trực tiếp tọa độ 3D để tìm protein có fold giống nhau, bất kể sequence
- **Đa database**: Tìm kiếm đồng thời trên PDB, AlphaFold UniProt, CATH, MGnify ESM Atlas

Skill này chỉ hoạt động khi người dùng cung cấp **file tọa độ 3D** (`.cif`, `.mmcif`, hoặc `.pdb`).

## ⚙️ Cách Hoạt Động

```
File 3D (.cif/.pdb) → Upload to Foldseek API → Search databases → 
Return structurally similar proteins (with TM-score, RMSD)
```

1. **Input**: File cấu trúc 3D — phải tồn tại trên máy host
2. **Search**: Foldseek API dùng thuật toán 3Di encoding để mã hóa cấu trúc và so sánh cực nhanh
3. **Output**: Danh sách protein tương đồng kèm TM-score (>0.5 = significant), RMSD, sequence identity

## 🚀 Cách Sử Dụng

### Universal

```markdown
# Foldseek Structural Search Rules
- CHỈ sử dụng khi người dùng cung cấp file 3D (.cif, .mmcif, .pdb).
- KHÔNG sử dụng nếu chỉ có sequence, gene name, hoặc UniProt ID — dùng protein-sequence-similarity-search hoặc alphafold-database thay thế.
- Kiểm tra file tồn tại trước khi gọi API.
- Báo cáo kết quả với TM-score, RMSD, và database source.
```

### Cursor (.cursorrules)

```markdown
# Foldseek Search
- Yêu cầu file .cif hoặc .pdb trước khi chạy Foldseek.
- TM-score > 0.5 = structural similarity có ý nghĩa sinh học.
- Kết hợp với PyMOL để visualize kết quả superposition.
```

## 💡 Kịch Bản Lập Trình Thực Tế

### 🧑‍💻 Nhà phát triển:
> "Tôi vừa giải thành công cấu trúc 3D của một protein lạ và lưu ở tệp `my_protein.pdb`. Hãy giúp tôi tìm kiếm các protein có cấu trúc 3D tương đồng trên cơ sở dữ liệu PDB."

### 🤖 AI Agent (Đã được trang bị Kỹ năng):
> "Tôi sẽ thực hiện tìm kiếm tương đồng cấu trúc 3D siêu tốc bằng công cụ Foldseek API:"
>
> 1. **Tải lên và Chẩn đoán tệp PDB**: Tôi đọc tệp `my_protein.pdb` của bạn, xác nhận định dạng chuẩn và trích xuất tọa độ 3D của các nguyên tử carbon alpha.
> 2. **Chạy căn chỉnh cấu trúc 3D**: Tôi gửi cấu trúc của bạn đến máy chủ Foldseek để đối chiếu với hàng chục triệu cấu trúc protein trong PDB và AlphaFold DB thông qua bảng chữ cái cấu trúc Foldseek (structural alphabet).
> 3. **Phân tích kết quả trùng khớp**: Tôi lọc danh sách các protein tương đồng nhất, hiển thị điểm số TM-score, RMSD (độ lệch vị trí nguyên tử) và tỷ lệ phủ chuỗi (alignment coverage).
> 4. **Trình bày báo cáo cấu trúc**: Tôi chỉ ra protein tương đồng nhất là một kinase họ tyrosine, xác nhận protein lạ của bạn có cấu trúc gập nếp tương tự và đưa ra dự đoán về chức năng sinh học của nó.
>
> *Kết quả tìm kiếm cấu trúc Foldseek trực quan sẽ giúp bạn khám phá ra chức năng của protein mới chỉ trong vài giây.*

## ⚠️ Lưu Ý & Gotchas

- **Bắt buộc file 3D**: Không hoạt động với sequence, gene name, hay UniProt ID. Nếu người dùng chỉ có sequence → dùng `protein-sequence-similarity-search`. Nếu chỉ có UniProt ID → dùng `alphafold-database` để tải file trước.
- **TM-score interpretation**: >0.5 có ý nghĩa, >0.7 strong similarity, >0.9 near-identical fold.
- **File size limit**: Foldseek API có giới hạn kích thước file. Protein rất lớn có thể cần chia thành domains.
