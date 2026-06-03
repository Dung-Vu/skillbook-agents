---
slug: ensembl-database
title: Ensembl Genome Browser
command: /ensembl-database
category: bioinformatics-genomics
tags:
  - ensembl
  - genome
  - vep
  - transcript
  - gene-structure
complexity: intermediate
platforms:
  - cursor
  - claude-code
  - windsurf
  - gemini-cli
  - universal
featured: false
description: >-
  Tra cứu cơ sở dữ liệu Ensembl để dịch mã ID gen/transcript, tải trình tự FASTA
  và dự đoán ảnh hưởng biến thể (VEP).
oneLiner: 'Truy xuất trình tự genomic, cấu trúc gen và dự đoán hậu quả biến thể.'
sourceUrl: 'https://www.ensembl.org/'
sourceAuthor: Google DeepMind
lastVerified: '2026-05-30'
relatedSkills: []
seoTitle: Ensembl Genome Browser — Skillbook Agents
seoDescription: >-
  Hướng dẫn Agent tra cứu gene, transcript, protein IDs và dự đoán variant
  consequences bằng Ensembl VEP.
provider: antigravity
---

## 📖 Tại Sao Cần Skill Này?

Ensembl là genome browser và database chính cho annotation genome — cung cấp gene structures, transcript variants, protein translations, và variant effect predictions. Là **công cụ dịch ID** trung tâm trong bioinformatics.

- **ID translation**: ENSG → ENST → ENSP (gene → transcript → protein ID mapping)
- **Sequence retrieval**: Lấy DNA, cDNA, CDS, protein sequences theo ID
- **VEP (Variant Effect Predictor)**: Dự đoán consequences của variant (missense, nonsense, splice, etc.)
- **Gene structure**: Exon boundaries, transcript isoforms, UTRs

## ⚙️ Cách Hoạt Động

```
Gene/Transcript ID → Ensembl REST API → 
Return gene info, sequences, exon structures, variant consequences
```

1. **ID lookup**: Resolve ENSG/ENST/ENSP IDs thành gene info, coordinates, cross-references
2. **Sequence fetch**: Lấy genomic, cDNA, CDS, hoặc protein sequence
3. **VEP**: Submit variant → nhận consequence type (missense, frameshift, splice_donor, etc.)

## 🚀 Cách Sử Dụng

### Universal

```markdown
# Ensembl Query Rules
- Dùng Ensembl làm primary ID translator: gene name ↔ ENSG ↔ ENST ↔ ENSP ↔ UniProt.
- VEP cho coding variants: report consequence type, amino acid change, SIFT/PolyPhen scores.
- Khi cần genomic hoặc protein sequence → fetch từ Ensembl API.
- Tọa độ trên GRCh38 (human) mặc định.
```

### Cursor (.cursorrules)

```markdown
# Ensembl
- Ensembl = primary genome annotation source. Dùng cho ID resolution, sequence retrieval, VEP.
- VEP consequence hierarchy: transcript_ablation > frameshift > stop_gained > missense > synonymous.
- SIFT < 0.05 = damaging. PolyPhen > 0.85 = probably damaging.
```

## 💡 Kịch Bản Lập Trình Thực Tế

### 🧑‍💻 Nhà phát triển:
> "Hãy lấy cấu trúc exon và intron của gene BRCA2 từ Ensembl để tôi thiết kế mồi giải trình tự Sanger."

### 🤖 AI Agent (Đã được trang bị Kỹ năng):
> "Tôi sẽ kết nối trực tiếp với REST API của Ensembl để trích xuất cấu trúc gene BRCA2 cho bạn:"
>
> 1. **Tra cứu Gene ID**: Tôi ánh xạ BRCA2 sang mã Ensembl Gene ID chuẩn **ENSG00000139618**.
> 2. **Trích xuất cấu trúc Transcript**: Tôi lấy danh sách các transcript và chọn transcript chính (canonical transcript) **ENST00000380152**.
> 3. **Lấy tọa độ Exon/Intron**: Tôi tải danh sách toàn bộ 27 exon của BRCA2, bao gồm tọa độ bắt đầu, kết thúc, chiều dài exon và trình tự nucleotide tương ứng của ranh giới exon-intron.
>
> *Toàn bộ cấu trúc exon/intron chi tiết đã sẵn sàng, hỗ trợ bạn thiết kế mồi PCR chính xác mà không gặp lỗi lệch khung dịch mã.*

## ⚠️ Lưu Ý & Gotchas

- **Transcript matters**: Cùng variant có thể là missense trên transcript A nhưng intronic trên transcript B. Luôn report canonical transcript.
- **VEP vs prediction**: VEP cho consequence type, SIFT/PolyPhen cho impact prediction — hai khái niệm khác nhau.
- **Species-specific**: Ensembl hỗ trợ nhiều species. Specify species khi query (default: human).
- **API rate limit**: Ensembl REST API có rate limit — script wrapper tự động handle.
