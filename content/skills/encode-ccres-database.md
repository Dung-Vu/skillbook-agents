---
slug: "encode-ccres-database"
title: "ENCODE Regulatory Elements"
command: "/encode-ccres-database"
category: "bioinformatics-genomics"
tags:
  - "encode"
  - "ccres"
  - "regulatory-elements"
  - "chip-seq"
  - "enhancer"
complexity: "advanced"
platforms:
  - "cursor"
  - "claude-code"
  - "windsurf"
  - "gemini-cli"
  - "universal"
featured: false
description: "Tìm kiếm chú giải vùng điều hòa gen và dữ liệu thực nghiệm di truyền học biểu hiện (Epigenomics) trên các dòng tế bào người."
oneLiner: "Truy vấn các yếu tố điều hòa cis (cCREs) từ ENCODE."
sourceUrl: "https://screen.encodeproject.org/"
sourceAuthor: "Google DeepMind"
lastVerified: "2026-05-30"
relatedSkills:
  - "ucsc-conservation-and-tfbs"
  - "jaspar-database"
  - "alphagenome-single-variant-analysis"
seoTitle: "ENCODE Regulatory Elements — Skillbook Agents"
seoDescription: "Hướng dẫn Agent truy vấn ENCODE cCREs và dữ liệu ChIP-seq cho regulatory element annotation."
---

## 📖 Tại Sao Cần Skill Này?

ENCODE (Encyclopedia of DNA Elements) đã phân loại hàng triệu vùng điều hòa trong genome người — cung cấp bản đồ chi tiết về promoter, enhancer, insulator, và silencer trên nhiều loại tế bào.

- **cCREs (candidate cis-Regulatory Elements)**: ~1.1 triệu regulatory elements được phân loại (PLS, pELS, dELS, CTCF-only, DNase-H3K4me3)
- **Cell type-specific**: Annotation theo từng cell type/tissue cụ thể
- **Experimental data**: ChIP-seq peaks, DNASE-seq, histone marks từ hàng ngàn thí nghiệm

## ⚙️ Cách Hoạt Động

```
Genomic region / Gene → SCREEN GraphQL API → 
Return cCRE annotations + experimental data
```

1. **cCRE query**: Tìm regulatory elements trong genomic region hoặc gần gene
2. **Classification**: PLS (promoter-like), pELS (proximal enhancer-like), dELS (distal enhancer-like), CTCF-only
3. **Experiment data**: Query ENCODE Portal REST API cho raw ChIP-seq peaks, files, metadata

## 🚀 Cách Sử Dụng

### Universal

```markdown
# ENCODE Query Rules
- Dùng SCREEN GraphQL API cho cCRE regulatory annotation queries.
- Dùng ENCODE Portal REST API cho raw experimental data (ChIP-seq peaks, files).
- Report cCRE classification type và cell type specificity.
- Kết hợp với UCSC conservation để strengthen regulatory evidence.
```

### Cursor (.cursorrules)

```markdown
# ENCODE
- cCRE types: PLS (promoter-like), pELS (proximal enhancer), dELS (distal enhancer), CTCF-only.
- High DNase + H3K4me3 = promoter-like. High DNase + H3K27ac = enhancer-like.
- Cell type matters: enhancer active trong liver có thể inactive trong brain.
```

## 💡 Kịch Bản Lập Trình Thực Tế

### 🧑‍💻 Nhà phát triển:
> "Tôi muốn tìm các yếu tố điều hòa cis (cCREs) hoạt động mạnh trong vùng lân cận của gene SOX2 trong tế bào gốc phôi (hESC)."

### 🤖 AI Agent (Đã được trang bị Kỹ năng):
> "Tôi sẽ truy vấn cơ sở dữ liệu ENCODE thông qua cổng SCREEN GraphQL API để tìm kiếm cho bạn:"
>
> 1. **Xác định vùng genomic**: Tôi tìm kiếm tọa độ genomic của gene SOX2 trên GRCh38 và mở rộng phạm vi tìm kiếm 50kb xung quanh.
> 2. **Truy vấn cCREs**: Tôi lọc danh sách các yếu tố cis-regulatory (Promoter-like, Enhancer-like, CTCF-only) đang hoạt động trong dòng tế bào gốc phôi người (H1-hESC).
> 3. **Phân tích tín hiệu biểu sinh**: Tôi trích xuất điểm số tín hiệu ChIP-seq của H3K4me3, H3K27ac và độ mở chromatin DNASE tại các vị trí này.
> 4. **Báo cáo danh sách cCREs**: Tôi cung cấp danh sách các vùng điều hòa hoạt động mạnh nhất kèm mã ENCODE Accession (EH38E...) phục vụ cho việc thiết kế mồi CRISPR.
>
> *Danh sách các vùng promoter và enhancer hoạt động kèm mức độ tự tin sinh học đã được tổng hợp đầy đủ.*

## ⚠️ Lưu Ý & Gotchas

- **cCRE = candidate**: Đây là predictions dựa trên epigenomic data, không phải validated regulatory elements.
- **Cell type specificity**: Một cCRE có thể active trong cell type A nhưng inactive trong cell type B.
- **Two APIs**: SCREEN (GraphQL) cho annotations, ENCODE Portal (REST) cho raw experimental data — khác nhau.
- **Data volume**: ENCODE Portal chứa petabytes data. Query cẩn thận để tránh quá tải.
