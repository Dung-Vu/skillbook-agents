---
slug: ncbi-sequence-fetch
title: NCBI Sequence Retrieval
command: /ncbi-sequence-fetch
category: bioinformatics-genomics
tags:
  - ncbi
  - sequence
  - genbank
  - refseq
  - efetch
complexity: intermediate
platforms:
  - cursor
  - claude-code
  - windsurf
  - gemini-cli
  - universal
featured: false
description: >-
  Tải các trình tự gen, protein bằng mã Accession ID hoặc tìm kiếm theo danh mục
  loài sinh vật từ các cơ sở dữ liệu NCBI.
oneLiner: Truy xuất trình tự nucleotide và protein từ NCBI.
sourceUrl: 'https://www.ncbi.nlm.nih.gov/'
sourceAuthor: Google DeepMind
lastVerified: '2026-05-30'
relatedSkills:
  - uniprot-database
  - ensembl-database
  - pubmed-database
seoTitle: NCBI Sequence Retrieval — Skillbook Agents
seoDescription: >-
  Hướng dẫn Agent truy xuất protein và nucleotide sequences từ NCBI bằng
  E-utilities.
provider: antigravity
---

## 📖 Tại Sao Cần Skill Này?

NCBI GenBank/RefSeq chứa hàng tỷ sequences — nguồn reference lớn nhất cho nucleotide và protein sequences. Skill này cung cấp nhiều cách truy xuất khác nhau:

- **Accession lookup**: NM_000546, NP_000537, NC_000017...
- **Gene + organism search**: "TP53 homo sapiens" → lấy canonical sequence
- **CDS translation**: Từ nucleotide accession → translate CDS thành protein
- **Patent proteins**: Lấy protein sequences từ patent numbers
- **PubMed-linked**: Tìm sequences liên kết với PubMed article

## ⚙️ Cách Hoạt Động

```
Accession / Gene name / PubMed ID → NCBI E-utilities → 
Return sequences in FASTA format
```

1. **Direct lookup**: Accession ID → sequence
2. **Search**: Gene name + organism → tìm best matching sequence
3. **CDS translation**: Nucleotide accession → extract CDS → translate protein
4. **Cross-reference**: PubMed ID hoặc patent number → linked sequences

## 🚀 Cách Sử Dụng

### Universal

```markdown
# NCBI Sequence Fetch Rules
- Hỗ trợ multiple lookup modes: accession, gene+organism, locus tag, PubMed link, patent.
- Output luôn ở FASTA format.
- Dùng RefSeq accessions (NM_, NP_) khi có thể — chất lượng cao hơn GenBank.
- Kết hợp với UniProt hoặc Ensembl cho cross-validation.
```

## 💡 Kịch Bản Lập Trình Thực Tế

### 🧑‍💻 Nhà phát triển:
> "Hãy tải cho tôi chuỗi nucleotide FASTA của gene insulin người từ cơ sở dữ liệu GenBank của NCBI."

### 🤖 AI Agent (Đã được trang bị Kỹ năng):
> "Tôi sẽ kết nối trực tiếp với cổng E-utilities của NCBI để tải chuỗi gen chính xác cho bạn:"
>
> 1. **Xác định mã Accession ID**: Tôi chẩn đoán và ánh xạ gene insulin người (INS) sang mã số GenBank chuẩn là **NM_000207**.
> 2. **Tải chuỗi Nucleotide**: Tôi thực thi lệnh efetch của NCBI để tải chuỗi ở định dạng FASTA chuẩn.
> 3. **Chẩn đoán chuỗi**: Tôi kiểm tra chiều dài chuỗi, phân tích vùng mã hóa CDS (Coding Sequence) để chỉ ra chính xác vị trí bắt đầu (start codon) và kết thúc (stop codon) của gen phục vụ cho việc thiết kế vector biểu hiện.
>
> *Chuỗi nucleotide chuẩn FASTA và báo cáo phân tích CDS đã được chuẩn bị đầy đủ và sẵn sàng để bạn sao chép.*

## ⚠️ Lưu Ý & Gotchas

- **RefSeq vs GenBank**: RefSeq (NM_, NP_) là curated, GenBank có thể chứa drafts/partial sequences.
- **Isoforms**: Gene có thể có nhiều transcript variants — specify isoform nếu cần.
- **Rate limit**: NCBI E-utilities giới hạn 3 req/s (10 với API key). Script wrapper handle tự động.
- **Precursor vs mature**: Nhiều proteins có signal peptide, propeptide cần cắt — sequence fetched là precursor form.
