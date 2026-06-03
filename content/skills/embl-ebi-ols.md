---
slug: embl-ebi-ols
title: EMBL-EBI Ontology Lookup
command: /embl-ebi-ols
category: bioinformatics-genomics
tags:
  - ontology
  - ols
  - go
  - disease-ontology
  - hpo
complexity: intermediate
platforms:
  - cursor
  - claude-code
  - windsurf
  - gemini-cli
  - universal
featured: false
description: >-
  Tìm kiếm thuật ngữ, định nghĩa và phân cấp trong hơn 250 cơ sở dữ liệu
  ontology y sinh học (GO, DOID, HP).
oneLiner: Truy vấn dịch vụ tra cứu thuật ngữ Ontology của EMBL-EBI.
sourceUrl: 'https://www.ebi.ac.uk/ols4/'
sourceAuthor: Google DeepMind
lastVerified: '2026-05-30'
relatedSkills:
  - quickgo-database
  - clinvar-database
  - alphagenome-single-variant-analysis
seoTitle: EMBL-EBI Ontology Lookup — Skillbook Agents
seoDescription: >-
  Hướng dẫn Agent tìm kiếm và khám phá 250+ biomedical ontologies qua EMBL-EBI
  OLS.
provider: antigravity
---

## 📖 Tại Sao Cần Skill Này?

Biomedical ontologies chuẩn hóa ngôn ngữ khoa học — đảm bảo "heart disease", "cardiac disorder", và "cardiovascular disease" đều map đến cùng concept. OLS tập hợp 250+ ontologies vào một API thống nhất.

- **Term search**: Tìm ontology term cho bất kỳ concept sinh học nào
- **Hierarchy navigation**: Parents, children, ancestors của term
- **Cross-ontology**: GO, DOID (Disease), HP (Human Phenotype), UBERON (Anatomy), CL (Cell)
- **Autocomplete**: Suggest terms khi người dùng nhập tên không chính xác

## ⚙️ Cách Hoạt Động

```
Search term / Ontology ID → OLS API → 
Return term definitions, synonyms, hierarchy, cross-references
```

## 🚀 Cách Sử Dụng

### Universal

```markdown
# OLS Rules
- Dùng OLS để resolve tên tự do thành ontology IDs chuẩn (DOID:xxx, HP:xxx, UBERON:xxx).
- Hữu ích khi AlphaGenome cần UBERON/CL IDs cho tissue/cell type.
- Report: ontology, term ID, definition, synonyms.
```

## 💡 Kịch Bản Lập Trình Thực Tế

### 🧑‍💻 Nhà phát triển:
> "Tôi muốn chuẩn hóa thuật ngữ lâm sàng 'breast carcinoma' sang mã định danh ontology chuẩn để tích hợp vào database."

### 🤖 AI Agent (Đã được trang bị Kỹ năng):
> "Tôi sẽ sử dụng Ontology Lookup Service (OLS) của EMBL-EBI để tra cứu và chuẩn hóa thuật ngữ này:"
>
> 1. **Truy vấn đa ontology**: Tôi gửi yêu cầu tìm kiếm thuật ngữ trên OLS để quét qua hơn 250 cơ sở dữ liệu từ vựng y sinh học.
> 2. **Lọc và Ánh xạ thuật ngữ**: Tôi trích xuất mã định danh trùng khớp tốt nhất từ các ontology hàng đầu:
>    * **DOID (Disease Ontology)**: `DOID:1612` (breast cancer).
>    * **MONDO (Mondo Disease Ontology)**: `MONDO:0008903`.
>    * **EFO (Experimental Factor Ontology)**: `EFO:0000305`.
> 3. **Phân tích phân cấp từ vựng**: Tôi vẽ sơ đồ phả hệ (Parent/Children) để chỉ ra các lớp cha (cancer) và các lớp con chuyên sâu hơn (ductal breast carcinoma) của thuật ngữ này.
>
> *Bạn sẽ nhận được bộ mã chuẩn hóa thuật ngữ y sinh hoàn hảo, sẵn sàng cho việc chuẩn hóa dữ liệu lâm sàng.*

## ⚠️ Lưu Ý & Gotchas

- **Multiple ontologies**: Cùng concept có thể có IDs khác nhau trong DOID vs MONDO vs EFO — chọn ontology phù hợp với use case.
- **Not for GO annotations**: Dùng QuickGO cho GO annotations trên genes, OLS chỉ cho term lookup/hierarchy.
- **Autocomplete useful**: Khi người dùng không biết exact term, dùng autocomplete endpoint.
