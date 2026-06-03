---
slug: pubchem-database
title: PubChem Chemical Database
command: /pubchem-database
category: bioinformatics-genomics
tags:
  - pubchem
  - chemical
  - smiles
  - drug
  - cheminformatics
complexity: intermediate
platforms:
  - cursor
  - claude-code
  - windsurf
  - gemini-cli
  - universal
featured: false
description: >-
  Tìm kiếm phân tử hóa học, công thức cấu tạo, danh pháp IUPAC, tính chất vật lý
  và hoạt tính sinh học của hợp chất.
oneLiner: Tra cứu thông tin hóa chất và hoạt tính sinh học từ PubChem.
sourceUrl: 'https://pubchem.ncbi.nlm.nih.gov/'
sourceAuthor: Google DeepMind
lastVerified: '2026-05-30'
relatedSkills:
  - openfda-database
  - pubmed-database
seoTitle: PubChem Chemical Database — Skillbook Agents
seoDescription: >-
  Hướng dẫn Agent truy vấn PubChem cho chemical properties, drug info, và
  bioactivity data.
provider: antigravity
---

## 📖 Tại Sao Cần Skill Này?

PubChem là database hóa chất lớn nhất thế giới — chứa >110 triệu compounds với chemical properties, bioactivity assays, safety data, và patent information.

- **Compound lookup**: Tìm theo tên, CID, SMILES, InChI
- **Properties**: Molecular weight, formula, logP, polar surface area, etc.
- **Similarity/substructure search**: Tìm compounds tương tự hoặc chứa scaffold cụ thể
- **Bioactivity**: BioAssay screening results, target info

## ⚙️ Cách Hoạt Động

```
Name / CID / SMILES → PubChem PUG REST API → 
Return chemical properties, bioactivity, similar compounds
```

## 🚀 Cách Sử Dụng

### Universal

```markdown
# PubChem Rules
- Dùng PubChem cho chemical properties và compound identification.
- Similarity search: Tanimoto ≥ 0.8 = structurally similar.
- Kết hợp ChEMBL cho curated bioactivity (IC50/Ki).
```

## 💡 Kịch Bản Lập Trình Thực Tế

### 🧑‍💻 Nhà phát triển:
> "Hãy tra cứu thông tin hóa học của hoạt chất Curcumin trên PubChem bao gồm công thức, chỉ số SMILES và độc tính."

### 🤖 AI Agent (Đã được trang bị Kỹ năng):
> "Tôi sẽ kết nối trực tiếp với API của PubChem để trích xuất toàn bộ hồ sơ hóa chất Curcumin cho bạn:"
>
> 1. **Tra cứu mã số CID**: Tôi tìm kiếm Curcumin và xác định mã CID chuẩn là **969516**.
> 2. **Tải thuộc tính hóa lý**: Tôi trích xuất các thông số cốt lõi:
>    * Công thức hóa học: `C21H20O6`.
>    * Khối lượng phân tử: `368.4 g/mol`.
>    * Cấu trúc SMILES: `COC1=C(C=CC(=C1)/C=C/C(=O)CC(=O)/C=C/C2=CC(=C(C=C2)O)OC)O`.
> 3. **Thu thập dữ liệu độc tính và an toàn**: Tôi lấy thông tin an toàn hóa chất (MSDS), bao gồm cảnh báo gây kích ứng và liều độc thực nghiệm LD50 trên chuột.
>
> *Hồ sơ hóa chất Curcumin đầy đủ và chính xác đã sẵn sàng, hỗ trợ tối đa cho các nghiên cứu hóa dược của bạn.*

## ⚠️ Lưu Ý & Gotchas

- **CID vs SID**: CID = unique compound, SID = substance record (may include mixtures, salts).
- **PubChem vs ChEMBL**: PubChem = broader (properties + screening), ChEMBL = curated (IC50/Ki values).
- **Lipinski's Rule of 5**: MW ≤500, LogP ≤5, HBD ≤5, HBA ≤10 — rough drug-likeness filter.
