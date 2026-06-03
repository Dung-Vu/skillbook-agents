---
slug: uniprot-database
title: UniProt Protein Database
command: /uniprot-database
category: bioinformatics-genomics
tags:
  - uniprot
  - protein
  - function
  - annotation
  - taxonomy
complexity: intermediate
platforms:
  - cursor
  - claude-code
  - windsurf
  - gemini-cli
  - universal
featured: true
description: >-
  Truy cập cơ sở tri thức protein toàn cầu UniProtKB để tra cứu mô tả chức năng,
  đột biến điểm và tài liệu liên quan.
oneLiner: Tra cứu chú giải chức năng protein và trình tự từ UniProt.
sourceUrl: 'https://www.uniprot.org/'
sourceAuthor: Google DeepMind
lastVerified: '2026-05-30'
relatedSkills: []
seoTitle: UniProt Protein Database — Skillbook Agents
seoDescription: >-
  Hướng dẫn Agent truy xuất protein metadata, function annotations, và sequences
  từ UniProtKB.
provider: antigravity
---

## 📖 Tại Sao Cần Skill Này?

UniProt là **bách khoa toàn thư về protein** — chứa thông tin chức năng, cấu trúc, taxonomy, và cross-references cho hàng trăm triệu protein sequences. Đây là điểm khởi đầu cho hầu hết mọi phân tích protein.

- **Functional annotation**: Protein làm gì, catalyze phản ứng nào, nằm ở đâu trong tế bào
- **ID mapping**: Chuyển đổi giữa UniProt ↔ Ensembl ↔ PDB ↔ RefSeq ↔ Gene Name
- **Sequence retrieval**: Canonical và isoform sequences
- **Swiss-Prot vs TrEMBL**: Reviewed (curated) vs Unreviewed (automated)

## ⚙️ Cách Hoạt Động

```
Protein name / Gene / ID → UniProt REST API → 
Return functional annotations, sequences, cross-references, publications
```

1. **Search**: Free-text search hoặc ID lookup (P00520, KRAS_HUMAN)
2. **Annotations**: Function, catalytic activity, subcellular location, disease associations
3. **Cross-references**: Links to PDB, Ensembl, InterPro, STRING, Reactome

## 🚀 Cách Sử Dụng

### Universal

```markdown
# UniProt Query Rules
- UniProt là starting point cho protein information. Luôn check UniProt trước.
- Ưu tiên Swiss-Prot entries (reviewed, curated) over TrEMBL (automated).
- Dùng ID mapping service để convert giữa database identifiers.
- KHÔNG dùng cho: sequence alignment (dùng MSA skill), protein folding, similarity search.
```

### Cursor (.cursorrules)

```markdown
# UniProt
- Swiss-Prot = reviewed by human curators. TrEMBL = automated annotation.
- UniProt ID format: P00520 (accession) hoặc ABL1_HUMAN (entry name).
- Function, GO terms, disease associations, literature — tất cả trong UniProt entry.
```

## 💡 Kịch Bản Lập Trình Thực Tế

### 🧑‍💻 Nhà phát triển:
> "Tôi muốn lấy toàn bộ thông tin chức năng, các vị trí hoạt động (active sites) và các biến đổi sau dịch mã (PTMs) của protein Insulin người từ UniProt."

### 🤖 AI Agent (Đã được trang bị Kỹ năng):
> "Tôi sẽ kết nối trực tiếp với cơ sở dữ liệu UniProtKB để trích xuất hồ sơ protein Insulin toàn diện cho bạn:"
>
> 1. **Xác định Accession ID chuẩn**: Tôi tìm kiếm Insulin người và xác định mã ID chuẩn là **P01308**.
> 2. **Truy xuất thông tin chức năng**: Tôi trích xuất mô tả chi tiết về chức năng điều hòa đường huyết của Insulin.
> 3. **Lấy các tọa độ chức năng di truyền (Features)**:
>    * **Vị trí hoạt động (Active sites)**: Xác định các gốc amino acid liên kết với thụ thể Insulin.
>    * **Biến đổi sau dịch mã (PTMs)**: Tải thông tin về 3 liên kết disulfide cốt lõi quyết định cấu trúc gập nếp của protein.
>    * **Isoforms**: Liệt kê các biến thể phiên bản dịch mã khác nhau của Insulin.
>
> *Hồ sơ protein UniProt chi tiết đã sẵn sàng, hỗ trợ tối đa cho các phân tích sinh học cấu trúc và sinh hóa của bạn.*

## ⚠️ Lưu Ý & Gotchas

- **Swiss-Prot preferred**: Khi có nhiều entries cho cùng protein, ưu tiên reviewed Swiss-Prot entry.
- **Canonical vs isoforms**: UniProt chọn 1 canonical sequence — isoforms có thể khác đáng kể.
- **Not for alignment**: Dùng protein-sequence-msa hoặc protein-sequence-similarity-search cho alignment tasks.
- **ID mapping delays**: UniProt ID mapping service có thể chậm cho large batch requests.
