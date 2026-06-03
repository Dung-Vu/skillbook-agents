---
slug: ucsc-conservation-and-tfbs
title: UCSC Conservation & TFBS
command: /ucsc-conservation-and-tfbs
category: bioinformatics-genomics
tags:
  - ucsc
  - conservation
  - phylop
  - phastcons
  - tfbs
complexity: advanced
platforms:
  - cursor
  - claude-code
  - windsurf
  - gemini-cli
  - universal
featured: false
description: >-
  Tải điểm bảo tồn tiến hóa gen (phyloP, phastCons) và vùng liên kết yếu tố
  phiên mã thực nghiệm từ UCSC Genome Browser.
oneLiner: Tra cứu điểm bảo tồn tiến hóa và vùng liên kết yếu tố phiên mã.
sourceUrl: 'https://genome.ucsc.edu/'
sourceAuthor: Google DeepMind
lastVerified: '2026-05-30'
relatedSkills:
  - jaspar-database
  - alphagenome-single-variant-analysis
seoTitle: UCSC Conservation & TFBS — Skillbook Agents
seoDescription: Hướng dẫn Agent lấy conservation scores và TFBS data từ UCSC Genome Browser.
provider: antigravity
---

## 📖 Tại Sao Cần Skill Này?

Vùng genome được bảo tồn qua tiến hóa (evolutionary conservation) thường có chức năng sinh học quan trọng. UCSC Genome Browser cung cấp hai loại dữ liệu quan trọng:

- **Conservation scores**: phyloP (per-base conservation) và phastCons (continuous conserved elements) — đánh giá variant có nằm trong vùng bảo tồn không
- **TFBS (Transcription Factor Binding Sites)**: Dữ liệu từ ENCODE, JASPAR, ReMap — xác định transcription factor nào bind tại vị trí variant

Nếu variant nằm ở vùng highly conserved + disrupts TF binding → strong evidence for functional impact.

## ⚙️ Cách Hoạt Động

```
Genomic region (chr:start-end) → UCSC API → 
Return phyloP/phastCons scores + TFBS overlaps
```

1. **Conservation**: Fetch phyloP scores (positive = conserved, negative = fast-evolving) và phastCons (0-1 probability)
2. **TFBS**: Query ENCODE ChIP-seq, JASPAR motifs, ReMap peaks cho binding site overlaps
3. **Interpretation**: Combine conservation + TFBS data để đánh giá regulatory importance

## 🚀 Cách Sử Dụng

### Universal

```markdown
# UCSC Conservation & TFBS Rules
- phyloP > 2.0 = significantly conserved. phyloP > 4.0 = ultra-conserved.
- phastCons > 0.9 = part of conserved element.
- Kết hợp conservation + TFBS: conserved + TF binding = regulatory element.
- Report ENCODE/JASPAR/ReMap project source cho mỗi TFBS hit.
```

### Cursor (.cursorrules)

```markdown
# UCSC Data
- Dùng conservation scores khi đánh giá non-coding variants.
- phyloP negative = accelerated evolution (có thể là adaptation, không phải unimportant).
- TFBS data giúp xác định variant có disrupt regulatory element không.
```

## 💡 Kịch Bản Lập Trình Thực Tế

### 🧑‍💻 Nhà phát triển:
> "Tôi muốn đánh giá xem vị trí đột biến chr17:7577120 trên gene TP53 có nằm trong vùng tiến hóa bảo thủ và có trùng với vị trí gắn của yếu tố phiên mã nào không."

### 🤖 AI Agent (Đã được trang bị Kỹ năng):
> "Tôi sẽ thực hiện truy vấn dữ liệu tiến hóa và điều hòa di truyền từ UCSC Genome Browser cho bạn:"
>
> 1. **Lấy điểm số bảo thủ tiến hóa**: Tôi truy xuất điểm số `phyloP` và `phastCons` (quét qua 100 loài động vật có xương sống) tại tọa độ cụ thể. Tôi báo cáo điểm phyloP = 5.2 (độ bảo thủ tiến hóa cực kỳ cao, biến đổi vị trí này sẽ bị chọn lọc tự nhiên đào thải).
> 2. **Tìm vị trí gắn TF (TFBS)**: Tôi truy vấn các track điều hòa từ dự án ENCODE và ChIP-seq để kiểm tra xem có đỉnh liên kết (binding peaks) của yếu tố phiên mã nào đè lên tọa độ này không.
> 3. **Phát hiện sự chồng lấn điều hòa**: Tôi báo cáo tọa độ đột biến trùng khớp trực tiếp với motif liên kết của yếu tố phiên mã p300, đột biến tại đây có nguy cơ làm mất khả năng kích hoạt phiên mã của gene.
>
> *Báo cáo phân tích tiến hóa điều hòa UCSC toàn diện đã sẵn sàng, giúp bạn có những bằng chứng thuyết phục về tính nguy hại của biến thể.*

## ⚠️ Lưu Ý & Gotchas

- **phyloP interpretation**: Positive = conserved (purifying selection), negative = fast-evolving (positive selection). Zero = neutral.
- **Species alignment**: phyloP based on multi-species alignment. Score quality depends on alignment quality tại vùng đó.
- **TFBS ≠ active**: ChIP-seq peak = TF was bound in that cell type. Không có nghĩa TF đang active trong tissue of interest.
