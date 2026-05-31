---
slug: "unibind-database"
title: "UniBind TF Binding Sites"
command: "/unibind-database"
category: "bioinformatics-genomics"
tags:
  - "unibind"
  - "transcription-factor"
  - "chip-seq"
  - "binding-sites"
  - "experimental"
complexity: "advanced"
platforms:
  - "cursor"
  - "claude-code"
  - "windsurf"
  - "gemini-cli"
  - "universal"
featured: false
description: "Tải tọa độ vùng tương tác trực tiếp TF-DNA đã được xác thực thực nghiệm từ cơ sở dữ liệu UniBind."
oneLiner: "Truy xuất tập dữ liệu vùng liên kết yếu tố phiên mã thực nghiệm."
sourceUrl: "https://unibind.uio.no/"
sourceAuthor: "Google DeepMind"
lastVerified: "2026-05-30"
relatedSkills:
  - "jaspar-database"
  - "encode-ccres-database"
  - "ucsc-conservation-and-tfbs"
seoTitle: "UniBind TF Binding Sites — Skillbook Agents"
seoDescription: "Hướng dẫn Agent truy vấn experimentally validated TF binding sites từ UniBind database."
---

## 📖 Tại Sao Cần Skill Này?

Trong khi JASPAR cung cấp TF binding **motifs** (theoretical patterns), UniBind cung cấp **actual binding sites** đã xác nhận bằng thí nghiệm ChIP-seq — vị trí chính xác trên genome nơi TF thực sự gắn vào.

- **Experimental validation**: Binding sites từ ChIP-seq peaks, không phải prediction
- **Dataset listing**: Liệt kê datasets available theo species, cell line, hoặc TF name
- **BED/FASTA download**: Tải binding site coordinates cho local analysis
- **Complementary**: JASPAR motifs + UniBind binding sites = comprehensive TF analysis

## ⚙️ Cách Hoạt Động

```
TF name / Cell line / Species → UniBind API → 
Return available datasets → Download BED/FASTA binding coordinates
```

1. **List datasets**: Tìm ChIP-seq datasets available cho TF/cell line/species
2. **Download**: Tải BED files (genomic coordinates) hoặc FASTA (sequences) cho binding sites
3. **Analysis**: Overlap with variants, regulatory elements, etc.

## 🚀 Cách Sử Dụng

### Universal

```markdown
# UniBind Rules
- UniBind = experimentally validated binding sites (ChIP-seq based).
- Dùng để list datasets, NOT query specific genomic intervals.
- Download BED/FASTA cho local analysis.
- KHÔNG dùng cho: querying specific intervals/locations, motif models, expression data.
```

## 💡 Kịch Bản Lập Trình Thực Tế

### 🧑‍💻 Nhà phát triển:
> "Hãy tải danh sách các tọa độ genomic của vị trí gắn yếu tố phiên mã CTCF đã được xác thực thực nghiệm trong tế bào ung thư vú MCF-7 từ UniBind."

### 🤖 AI Agent (Đã được trang bị Kỹ năng):
> "Tôi sẽ kết nối trực tiếp với cơ sở dữ liệu UniBind để tải các vị trí liên kết TF đã được xác thực thực nghiệm cho bạn:"
>
> 1. **Xây dựng truy vấn bộ lọc**: Tôi thiết lập bộ lọc bao gồm Yếu tố phiên mã (CTCF), Dòng tế bào (MCF-7), và chọn bộ dữ liệu chất lượng cao nhất đạt chuẩn thực nghiệm ChIP-seq.
> 2. **Tải tệp tọa độ BED**: Tôi thực hiện tải xuống tệp tin BED chứa tọa độ genomic chính xác (Chromosome, Start, End) của các vị trí liên kết của CTCF.
> 3. **Tóm tắt thống kê bộ dữ liệu**: Tôi báo cáo tổng số lượng đỉnh liên kết được tìm thấy (ví dụ: 45,210 đỉnh liên kết), cung cấp điểm số tự tin trung bình của các đỉnh thực nghiệm này.
>
> *Tệp tọa độ BED sạch sẽ và báo cáo thống kê UniBind đã sẵn sàng, bạn có thể nạp trực tiếp vào các công cụ phân tích genomic.*

## ⚠️ Lưu Ý & Gotchas

- **Dataset-level, not interval-level**: UniBind API liệt kê datasets và download files — không query specific genomic intervals.
- **Cell type specific**: TF binding khác nhau giữa cell lines — chọn cell type relevant cho research question.
- **No motif models**: UniBind cung cấp binding coordinates, không phải motif matrices — dùng JASPAR cho motifs.
- **ChIP-seq quality**: Datasets đã qua UniBind QC pipeline, nhưng vẫn nên check original paper.
