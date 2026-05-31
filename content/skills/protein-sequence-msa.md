---
slug: "protein-sequence-msa"
title: "Protein Multiple Sequence Alignment"
command: "/protein-sequence-msa"
category: "bioinformatics-genomics"
tags:
  - "msa"
  - "clustal-omega"
  - "sequence-alignment"
  - "protein"
  - "conservation"
complexity: "intermediate"
platforms:
  - "cursor"
  - "claude-code"
  - "windsurf"
  - "gemini-cli"
  - "universal"
featured: false
description: "Căn chỉnh nhiều trình tự protein để đánh giá mức độ tương đồng di truyền, vùng domain bảo tồn và các axit amin quan trọng."
oneLiner: "Thực hiện đa căn chỉnh trình tự protein (MSA) bằng Clustal Omega."
sourceUrl: "https://www.ebi.ac.uk/jdispatcher/msa/clustalo"
sourceAuthor: "Google DeepMind"
lastVerified: "2026-05-30"
relatedSkills:
  - "protein-sequence-similarity-search"
  - "uniprot-database"
  - "interpro-database"
seoTitle: "Protein Multiple Sequence Alignment — Skillbook Agents"
seoDescription: "Hướng dẫn Agent thực hiện MSA protein với Clustal Omega để phân tích conservation và residue quan trọng."
---

## 📖 Tại Sao Cần Skill Này?

Multiple Sequence Alignment (MSA) là bước nền tảng trong sinh học phân tử — so sánh nhiều chuỗi protein cùng lúc để phát hiện vùng bảo tồn (conserved regions) và residue quan trọng cho chức năng.

- **Conservation analysis**: Residue nào được bảo tồn qua hàng triệu năm tiến hóa → likely quan trọng cho chức năng/cấu trúc
- **Domain detection**: Vùng nào align tốt → shared domain; vùng gap nhiều → insertion/deletion đặc thù loài
- **Mutation impact**: Nếu mutation xảy ra ở vị trí highly conserved → có khả năng gây hại cao

Agent mặc định không có khả năng chạy alignment tool nào — skill này kết nối với EBI Clustal Omega API.

## ⚙️ Cách Hoạt Động

```
Multiple sequences (FASTA) → Submit to Clustal Omega API → 
Wait for result → Return aligned sequences + conservation scores
```

1. **Input**: Từ 2 đến 4000 protein sequences (format FASTA), max 4 MB
2. **Alignment**: Clustal Omega sử dụng HMM profile-profile alignment
3. **Output**: Aligned sequences với gap characters, conservation indicators (`*` = identical, `:` = conserved, `.` = semi-conserved)

## 🚀 Cách Sử Dụng

### Universal

```markdown
# Protein MSA Rules
- Yêu cầu ít nhất 2 protein sequences ở format FASTA.
- KHÔNG dùng cho DNA/RNA alignment — chỉ protein.
- KHÔNG dùng nếu chỉ có 1 sequence — dùng protein-sequence-similarity-search để tìm homologs trước.
- Tóm tắt conservation patterns: residue nào identical, vùng nào variable.
```

### Cursor (.cursorrules)

```markdown
# MSA Analysis
- Chạy Clustal Omega qua EBI API, không cài local tools.
- Highlight residue 100% conserved — đây là candidate functional sites.
- Kết hợp với InterPro để verify domain boundaries.
```

## 💡 Kịch Bản Lập Trình Thực Tế

### 🧑‍💻 Nhà phát triển:
> "Tôi có chuỗi amino acid của 5 loại hemoglobin từ các loài động vật khác nhau. Hãy chạy căn chỉnh đa chuỗi (MSA) để tôi tìm vùng bảo thủ chức năng."

### 🤖 AI Agent (Đã được trang bị Kỹ năng):
> "Tôi sẽ thực hiện căn chỉnh đa chuỗi bằng công cụ Clustal Omega của viện EBI thông qua quy trình tự động hóa:"
>
> 1. **Chuẩn bị dữ liệu FASTA**: Tôi kiểm tra và định dạng chuỗi của 5 loài thành một tệp tin FASTA chung.
> 2. **Chạy căn chỉnh Clustal Omega**: Tôi gửi dữ liệu đến máy chủ EBI để khởi chạy thuật toán căn chỉnh đa chuỗi.
> 3. **Phân tích vùng bảo thủ**: Tôi đọc kết quả căn chỉnh, xác định chính xác các vị trí amino acid bảo thủ 100% (như các vị trí histidine liên kết với nhân heme) và đánh giá độ tương đồng chuỗi.
> 4. **Trình bày kết quả trực quan**: Tôi tạo biểu đồ căn chỉnh dạng chữ, sử dụng các ký tự đặc biệt (*, :, .) để biểu thị mức độ bảo thủ và đề xuất xây dựng cây phát sinh chủng loại sơ bộ.
>
> *Kết quả căn chỉnh đa chuỗi trực quan giúp bạn xác định ngay lập tức ranh giới các vùng chức năng quan trọng của protein.*

## ⚠️ Lưu Ý & Gotchas

- **Chỉ protein**: Không dùng cho DNA, RNA, hay nucleotide sequences.
- **Giới hạn**: Max 4000 sequences, max 4 MB file size.
- **Chỉ cần ≥2 sequences**: Nếu chỉ có 1 → dùng sequence similarity search trước để tìm homologs.
- **Async job**: Clustal Omega chạy trên server EBI, có thể mất vài giây đến vài phút tùy kích thước input.
