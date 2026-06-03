---
slug: chembl-database
title: ChEMBL Bioactive Molecules
command: /chembl-database
category: bioinformatics-genomics
tags:
  - chembl
  - drug
  - bioactivity
  - ic50
  - compound
complexity: intermediate
platforms:
  - cursor
  - claude-code
  - windsurf
  - gemini-cli
  - universal
featured: false
description: >-
  Tìm kiếm các hợp chất hóa học hoạt tính sinh học, đích tác dụng của thuốc, dữ
  liệu hoạt tính (IC50/Ki) và cơ chế tác dụng.
oneLiner: Truy vấn cơ sở dữ liệu hóa tin ChEMBL cho các phân tử sinh học.
sourceUrl: 'https://www.ebi.ac.uk/chembl/'
sourceAuthor: Google DeepMind
lastVerified: '2026-05-30'
relatedSkills:
  - pubchem-database
  - opentargets-database
  - openfda-database
seoTitle: ChEMBL Bioactive Molecules — Skillbook Agents
seoDescription: >-
  Hướng dẫn Agent truy vấn bioactive compounds, IC50/Ki values, và drug targets
  từ ChEMBL.
provider: antigravity
---

## 📖 Tại Sao Cần Skill Này?

ChEMBL là database lớn nhất cho dữ liệu bioactivity của các phân tử nhỏ (small molecules) — chứa ~2.4 triệu compounds với >20 triệu bioactivity measurements từ medicinal chemistry literature.

- **Compound search**: Tìm compounds theo tên, SMILES, hoặc cấu trúc (similarity/substructure)
- **Bioactivity data**: IC50, Ki, Kd, EC50 values cho compound-target pairs
- **Drug targets**: Target protein nào bị ảnh hưởng bởi compound
- **Approved drugs**: Drug mechanisms, indications, clinical data

## ⚙️ Cách Hoạt Động

```
Compound / Target → ChEMBL API → 
Return bioactivity data, mechanisms, approved drug info
```

## 🚀 Cách Sử Dụng

### Universal

```markdown
# ChEMBL Rules
- Dùng ChEMBL khi cần IC50/Ki/Kd values cho compound-target pairs.
- SMILES structure search cho similarity/substructure queries.
- Report: ChEMBL ID, activity type, value, unit, target.
- Kết hợp PubChem cho chemical properties, ChEMBL cho bioactivity.
```

## 💡 Kịch Bản Lập Trình Thực Tế

### 🧑‍💻 Nhà phát triển:
> "Tôi muốn tìm các hoạt chất ức chế COX-2 có hoạt tính mạnh nhất trên cơ sở dữ liệu ChEMBL để làm nghiên cứu."

### 🤖 AI Agent (Đã được trang bị Kỹ năng):
> "Tôi sẽ tự động kết nối và tra cứu dữ liệu ChEMBL cho bạn thông qua quy trình sau:"
>
> 1. **Xác định Đích tác dụng**: Tôi tự động tìm kiếm và ánh xạ đích protein COX-2 (PTGS2) sang mã ChEMBL Target ID chuẩn là **CHEMBL230**.
> 2. **Truy vấn hoạt tính sinh học**: Tôi gửi truy vấn API để lọc toàn bộ các hợp chất đã được thử nghiệm hoạt tính ức chế trên protein này, tập trung vào chỉ số IC50 và Ki.
> 3. **Lọc và Sắp xếp**: Tôi trích xuất các hợp chất có hoạt tính ở thang nồng độ nano-molar (nM) cực mạnh.
> 4. **Kết xuất báo cáo hoạt chất**: Tôi lập danh sách 5 hợp chất hàng đầu (bao gồm Celecoxib - CHEMBL118, Valdecoxib - CHEMBL444, v.v.) đi kèm công thức cấu trúc SMILES, giá trị IC50 thực nghiệm và liên kết tài liệu nghiên cứu liên quan.
>
> *Toàn bộ dữ liệu hoạt chất tinh tuyển và thông số cấu trúc hóa học đã sẵn sàng để bạn tải về phục vụ mô phỏng docking.*

## ⚠️ Lưu Ý & Gotchas

- **Assay conditions vary**: IC50 values phụ thuộc assay conditions — compare cẩn thận giữa different studies.
- **ChEMBL vs PubChem**: ChEMBL = curated bioactivity, PubChem = broader chemical data + screening results.
- **pChEMBL**: Standardized -log(IC50/Ki/Kd) — values ≥5 = active (≤10 µM), ≥6 = potent (≤1 µM).
