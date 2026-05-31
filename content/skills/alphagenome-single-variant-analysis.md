---
slug: "alphagenome-single-variant-analysis"
title: "AlphaGenome Variant Analysis"
command: "/alphagenome-single-variant-analysis"
category: "bioinformatics-genomics"
tags:
  - "alphagenome"
  - "variant-effect"
  - "gene-expression"
  - "chromatin"
  - "non-coding"
complexity: "expert"
platforms:
  - "cursor"
  - "claude-code"
  - "windsurf"
  - "gemini-cli"
  - "universal"
featured: true
description: "Phân tích ảnh hưởng của biến thể di truyền lên biểu hiện gen (RNA-seq), khả năng tiếp cận chromatin (DNASE) và các yếu tố điều hòa."
oneLiner: "Phân tích ảnh hưởng của biến thể di truyền biểu hiện gen bằng AlphaGenome."
sourceUrl: "https://alphagenome.deepmind.com/"
sourceAuthor: "Google DeepMind"
lastVerified: "2026-05-30"
relatedSkills:
  - "clinvar-database"
  - "dbsnp-database"
  - "gnomad-database"
  - "ensembl-database"
seoTitle: "AlphaGenome Variant Analysis — Skillbook Agents"
seoDescription: "Hướng dẫn Agent dự đoán ảnh hưởng biến thể di truyền lên gene expression và chromatin bằng AlphaGenome."
---

## 📖 Tại Sao Cần Skill Này?

~98% bộ gene người không mã hóa protein (non-coding regions), nhưng chứa các yếu tố điều hòa quan trọng như promoter, enhancer, silencer. Biến thể trong vùng non-coding rất khó đánh giá tác động bằng phương pháp truyền thống.

- **Variant effect prediction**: AlphaGenome dự đoán thay đổi RNA-seq, DNASE, ChIP-seq khi thay đổi nucleotide
- **Multi-track analysis**: Đánh giá đồng thời ảnh hưởng lên gene expression, chromatin accessibility, histone marks, và transcription factor binding
- **Tissue-specific**: Phân tích theo từng tissue/cell type cụ thể (UBERON/CL ontology)

## ⚙️ Cách Hoạt Động

```
Variant (chr:pos:ref>alt) → AlphaGenome API → 
Predict changes in RNA-seq, DNASE, ChIP, CTCF → Report impact scores
```

1. **Input**: Variant ở format `chr:pos:ref>alt` (vd: `chr17:7579472:G>A`)
2. **Prediction**: AlphaGenome model dự đoán signal changes cho nhiều assay tracks
3. **Output**: Effect sizes cho RNA-seq, DNASE accessibility, histone modifications, TF binding

## 🚀 Cách Sử Dụng

### Universal

```markdown
# AlphaGenome Analysis Rules
- Variant phải ở format chr:pos:ref>alt trên GRCh38.
- Resolve biological terms (tissue/cell type) sang UBERON/CL ontology trước khi query.
- Báo cáo: gene expression change, chromatin effect, TF binding disruption.
- Cảnh báo rõ ràng: đây là prediction, cần xác nhận bằng thí nghiệm.
```

### Cursor (.cursorrules)

```markdown
# AlphaGenome
- Dùng khi user hỏi về non-coding variant effects, pathogenicity, regulatory effects.
- Resolve tissue names sang ontology IDs (UBERON/CL) trước khi query.
- Kết hợp với ClinVar và gnomAD để cross-reference clinical significance.
```

## 💡 Kịch Bản Lập Trình Thực Tế

### 🧑‍💻 Nhà phát triển:
> "Tôi cần dự đoán ảnh hưởng của biến thể vùng không mã hóa chr17:7579472:G>A lên sự biểu hiện của gene TP53 trong mô vú."

### 🤖 AI Agent (Đã được trang bị Kỹ năng):
> "Tôi sẽ thực hiện phân tích này bằng công nghệ mô hình học sâu AlphaGenome thông qua các bước tự động:"
>
> 1. **Xác thực định dạng biến thể**: Tôi xác nhận tọa độ biến thể của bạn là chuẩn GRCh38 và đã resolve tên mô vú sang ID ontology chuẩn **UBERON:0001911**.
> 2. **Chạy dự đoán tín hiệu di truyền**: Tôi gửi truy vấn đến AlphaGenome API để chạy dự đoán đồng thời nhiều track tín hiệu sinh học.
> 3. **Tổng hợp kết quả RNA-seq & Epigenomics**:
>    * Biểu hiện gene TP53: Dự đoán giảm mạnh **2.3 lần** trong mô vú (Effect size: -0.85).
>    * Khả năng tiếp cận Chromatin (DNASE): Giảm mạnh tại vùng promoter (-0.62).
>    * Gắn yếu tố phiên mã: Vị trí liên kết của SP1 bị phá vỡ hoàn toàn (score: -0.91), làm ảnh hưởng trực tiếp đến chu trình tự điều hòa của p53.
> 4. **Cảnh báo khoa học**: Tôi gửi báo cáo kèm theo khuyến nghị rằng đây là kết quả dự đoán của mô hình học sâu, bạn nên tiến hành xác thực lại bằng thí nghiệm phóng thích phóng xạ (reporter assay) hoặc chỉnh sửa gene CRISPR.
>
> *Toàn bộ báo cáo tác động di truyền đa chiều đã được chuẩn bị đầy đủ giúp bạn hiểu sâu sắc cơ chế điều hòa của biến thể.*

## ⚠️ Lưu Ý & Gotchas

- **Chỉ GRCh38**: Tọa độ phải trên human genome assembly GRCh38. Nếu có hg19 → cần liftover trước.
- **Prediction, not diagnosis**: Không dùng để chẩn đoán lâm sàng. Luôn cảnh báo người dùng.
- **Tissue ontology**: Cần resolve tên tissue/cell type sang UBERON hoặc CL IDs — không dùng tên tự do.
- **Non-coding focus**: Hiệu quả nhất cho variants trong promoter, enhancer, UTR. Coding variants nên dùng VEP (Ensembl) thay thế.
