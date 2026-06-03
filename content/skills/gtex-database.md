---
slug: gtex-database
title: GTEx Gene Expression
command: /gtex-database
category: bioinformatics-genomics
tags:
  - gtex
  - gene-expression
  - rna-seq
  - eqtl
  - tissue-specific
complexity: intermediate
platforms:
  - cursor
  - claude-code
  - windsurf
  - gemini-cli
  - universal
featured: false
description: >-
  Phân tích biểu hiện gen định lượng và các biến thể di truyền liên quan đến
  biểu hiện gen (eQTL) trên 54 mô cơ thể khỏe mạnh.
oneLiner: Truy xuất dữ liệu biểu hiện RNA và eQTL từ dự án GTEx.
sourceUrl: 'https://gtexportal.org/'
sourceAuthor: Google DeepMind
lastVerified: '2026-05-30'
relatedSkills:
  - human-protein-atlas-database
  - ensembl-database
  - gnomad-database
seoTitle: GTEx Gene Expression — Skillbook Agents
seoDescription: >-
  Hướng dẫn Agent truy xuất dữ liệu biểu hiện gene RNA-seq và eQTL từ GTEx trên
  54 mô.
provider: antigravity
---

## 📖 Tại Sao Cần Skill Này?

GTEx (Genotype-Tissue Expression) Project cung cấp dữ liệu biểu hiện gene định lượng từ ~17,000 mẫu trên **54 loại mô** không bệnh — nguồn tham chiếu quan trọng nhất để hiểu gene nào biểu hiện ở đâu và variant nào ảnh hưởng đến expression.

- **Tissue-specific expression**: Gene X biểu hiện mạnh trong não nhưng yếu trong gan → functional relevance
- **eQTL data**: Variant nào ảnh hưởng trực tiếp đến mức biểu hiện gene (expression quantitative trait loci)
- **Normal reference**: Dữ liệu từ mô khỏe mạnh, dùng làm baseline so sánh

## ⚙️ Cách Hoạt Động

```
Gene / Variant → GTEx API → 
Return expression levels (TPM) across tissues + eQTL associations
```

1. **Gene expression**: Median TPM per tissue cho gene query
2. **eQTL**: Variant-gene associations với effect size và p-value
3. **Tissue comparison**: Heatmap expression across 54 tissues

## 🚀 Cách Sử Dụng

### Universal

```markdown
# GTEx Query Rules
- Báo cáo expression bằng TPM (Transcripts Per Million) — đơn vị chuẩn.
- Top 5 tissues biểu hiện cao nhất + tissues không biểu hiện.
- eQTL: report effect size (NES), p-value, và tissue specificity.
- GTEx là normal tissue only — không có cancer hay disease data.
```

### Cursor (.cursorrules)

```markdown
# GTEx
- GTEx = gold standard cho tissue-specific expression profiles.
- TPM > 10 = expressed, TPM > 100 = highly expressed, TPM < 1 = low/not expressed.
- eQTL significant: p-value < 5e-8 (genome-wide), effect size (NES) cho direction.
```

## 💡 Kịch Bản Lập Trình Thực Tế

### 🧑‍💻 Nhà phát triển:
> "Tôi muốn biết mức độ biểu hiện (RNA expression) của gene ERBB2 (HER2) khác biệt như thế nào giữa các mô cơ thể, đặc biệt là trong mô vú."

### 🤖 AI Agent (Đã được trang bị Kỹ năng):
> "Tôi sẽ truy xuất cơ sở dữ liệu GTEx (Genotype-Tissue Expression) để lấy dữ liệu biểu hiện gene định lượng cho bạn:"
>
> 1. **Tra cứu Gene ID chuẩn**: Tôi ánh xạ ERBB2 sang mã ENSG Gene ID chuẩn.
> 2. **Tải biểu đồ biểu hiện dạng hộp (Boxplot Data)**: Tôi gửi yêu cầu tải dữ liệu RNA-seq định lượng biểu thị bằng đơn vị TPM (Transcripts Per Million) trên 54 mô cơ thể khỏe mạnh từ GTEx API.
> 3. **So sánh mức độ biểu hiện**: Tôi phân tích số liệu và chỉ ra rằng ERBB2 biểu hiện ở mức trung bình-cao trong mô vú khỏe mạnh (TPM ~ 15.4), nhưng cực kỳ thấp trong mô não và mô cơ xương.
> 4. **Tìm kiếm eQTL**: Tôi kiểm tra xem có biến thể di truyền (eQTL) nào kiểm soát mức độ biểu hiện của ERBB2 trong mô vú hay không và báo cáo các mã rsID tương ứng.
>
> *Báo cáo biểu hiện mô GTEx chi tiết giúp bạn có cái nhìn tổng quan về sự phân bố sinh học khỏe mạnh của gene trước khi nghiên cứu bệnh học.*

## ⚠️ Lưu Ý & Gotchas

- **Normal tissue only**: GTEx không có dữ liệu bệnh. Dùng TCGA cho cancer expression.
- **Bulk RNA-seq**: Đây là bulk data — không phân biệt được cell type trong tissue. Dùng single-cell databases cho cell-type resolution.
- **Post-mortem samples**: Mẫu GTEx từ cadavers — expression có thể khác so với in vivo.
- **eQTL context**: eQTL effect có thể tissue-specific — variant ảnh hưởng expression ở liver nhưng không ở brain.
