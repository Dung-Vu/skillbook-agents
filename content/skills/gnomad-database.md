---
slug: gnomad-database
title: gnomAD Population Genetics
command: /gnomad-database
category: bioinformatics-genomics
tags:
  - gnomad
  - allele-frequency
  - population-genetics
  - constraint
  - loeuf
complexity: intermediate
platforms:
  - cursor
  - claude-code
  - windsurf
  - gemini-cli
  - universal
featured: false
description: >-
  Đánh giá tần suất biến thể di truyền trong quần thể lớn và tra cứu các chỉ số
  ràng buộc mất chức năng của gen (pLI, LOEUF).
oneLiner: Truy vấn tần số alen di truyền và ràng buộc gen từ gnomAD.
sourceUrl: 'https://gnomad.broadinstitute.org/'
sourceAuthor: Google DeepMind
lastVerified: '2026-05-30'
relatedSkills: []
seoTitle: gnomAD Population Genetics — Skillbook Agents
seoDescription: >-
  Hướng dẫn Agent tra cứu allele frequency và gene constraint metrics từ gnomAD
  database.
provider: antigravity
---

## 📖 Tại Sao Cần Skill Này?

gnomAD (Genome Aggregation Database) chứa dữ liệu variant từ >800,000 người — nguồn reference lớn nhất để đánh giá **độ hiếm** (rarity) của variant và **tolerance** của gene đối với loss-of-function mutations.

- **Allele frequency**: Variant xuất hiện ở 0.001% dân số vs 30% dân số → ý nghĩa lâm sàng hoàn toàn khác nhau
- **Gene constraint (pLI, LOEUF)**: Gene nào "không chịu nổi" mutation loss-of-function → likely essential gene
- **Population-specific**: Phân tích tần suất theo từng quần thể (European, African, East Asian, etc.)

## ⚙️ Cách Hoạt Động

```
Variant/Gene → gnomAD GraphQL API → 
Return allele frequencies, gene constraint, structural variants
```

1. **Variant query**: Tần suất allele theo population, homozygote count, quality metrics
2. **Gene query**: pLI score (probability of being LoF intolerant), LOEUF (constraint metric)
3. **Region query**: Tìm tất cả variants trong một vùng genomic

## 🚀 Cách Sử Dụng

### Universal

```markdown
# gnomAD Query Rules
- Dùng gnomAD để xác định variant là rare hay common (cutoff: MAF < 0.01 = rare).
- Gene constraint: pLI > 0.9 hoặc LOEUF < 0.35 = highly constrained (LoF intolerant).
- Báo cáo allele frequency cho BOTH global và population-specific.
- KHÔNG dùng cho: individual patient genomes, somatic cancer mutations (dùng COSMIC), raw sequencing reads.
```

### Cursor (.cursorrules)

```markdown
# gnomAD
- gnomAD = population reference, không phải clinical interpretation tool.
- Absent from gnomAD ≠ pathogenic. Chỉ là chưa thấy trong ~800K genomes.
- Kết hợp gnomAD frequency + ClinVar classification cho comprehensive variant assessment.
```

## 💡 Kịch Bản Lập Trình Thực Tế

### 🧑‍💻 Nhà phát triển:
> "Tôi tìm thấy biến thể chr17:7577120:C>T trong một mẫu giải trình tự lâm sàng. Hãy kiểm tra xem biến thể này có phổ biến trong quần thể tự nhiên không bằng cách tra cứu gnomAD."

### 🤖 AI Agent (Đã được trang bị Kỹ năng):
> "Tôi sẽ truy vấn cơ sở dữ liệu gnomAD (Genome Aggregation Database) thông qua GraphQL API để kiểm tra tần số alen cho bạn:"
>
> 1. **Xác thực biến thể**: Tôi định dạng lại tọa độ biến thể và gửi truy vấn tìm kiếm trên gnomAD v4.
> 2. **Trích xuất tần số Alen toàn cầu (Global Allele Frequency)**: Tôi lấy chỉ số AF của biến thể (ví dụ: AF = 0.000015 - cực kỳ hiếm trong quần thể tự nhiên).
> 3. **Phân tích tần số theo phân nhóm chủng tộc**: Tôi kiểm tra xem biến thể này có xuất hiện nhiều hơn ở một nhóm dân cư cụ thể nào không (ví dụ: Đông Á, Châu Âu).
> 4. **Lấy chỉ số ràng buộc gene (Gene Constraint)**: Tôi trích xuất điểm số pLI (0.99) và LOEUF (0.21) của gene liên quan để báo cáo xem gene này có cực kỳ nhạy cảm với các đột biến mất chức năng (loss-of-function) hay không.
>
> *Báo cáo tần số gnomAD chi tiết giúp bạn đánh giá mức độ hiếm và khả năng gây bệnh của biến thể một cách khách quan.*

## ⚠️ Lưu Ý & Gotchas

- **Population reference only**: gnomAD không chẩn đoán bệnh — chỉ cung cấp frequency data.
- **Absent ≠ pathogenic**: Variant không có trong gnomAD không tự động = gây bệnh.
- **Filtering allele frequency**: gnomAD cung cấp cả "popmax" (highest frequency across populations) — dùng popmax cho conservative filtering.
- **Structural variants**: gnomAD-SV là dataset riêng cho CNVs, deletions, duplications.
