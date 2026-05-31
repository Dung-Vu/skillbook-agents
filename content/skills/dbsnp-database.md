---
slug: "dbsnp-database"
title: "dbSNP Variant Lookup"
command: "/dbsnp-database"
category: "bioinformatics-genomics"
tags:
  - "dbsnp"
  - "snp"
  - "rsid"
  - "variant-lookup"
  - "allele-frequency"
complexity: "intermediate"
platforms:
  - "cursor"
  - "claude-code"
  - "windsurf"
  - "gemini-cli"
  - "universal"
featured: false
description: "Tìm kiếm thông tin SNP, indel bằng mã rsID hoặc tọa độ genome, truy xuất tần số alen và mối liên quan bệnh lý lâm sàng."
oneLiner: "Tra cứu và bản đồ hóa các biến thể di truyền ngắn trong dbSNP."
sourceUrl: "https://www.ncbi.nlm.nih.gov/snp/"
sourceAuthor: "Google DeepMind"
lastVerified: "2026-05-30"
relatedSkills:
  - "clinvar-database"
  - "gnomad-database"
  - "ensembl-database"
  - "alphagenome-single-variant-analysis"
seoTitle: "dbSNP Variant Lookup — Skillbook Agents"
seoDescription: "Hướng dẫn Agent tra cứu SNPs và indels từ dbSNP, mapping giữa rsID, tọa độ genomic, và HGVS."
---

## 📖 Tại Sao Cần Skill Này?

dbSNP là registry toàn cầu cho biến thể di truyền ngắn — mỗi variant được gán một **rsID** duy nhất (vd: rs1234567). Đây là "số CMND" của variant, được sử dụng rộng rãi trong GWAS, clinical reports, và publications.

- **ID resolution**: Chuyển đổi giữa rsID ↔ genomic coordinates ↔ HGVS notation
- **Allele frequency**: Tần suất allele trong các quần thể (global, population-specific)
- **Clinical significance**: Liên kết với ClinVar, gene associations, variant type

## ⚙️ Cách Hoạt Động

```
rsID / Coordinates / HGVS → dbSNP API → 
Return variant details (type, genes, frequencies, clinical significance)
```

1. **Input**: rsID (rs123), VCF format (chr:pos:ref:alt), hoặc HGVS string
2. **Query**: NCBI dbSNP REST API
3. **Output**: Variant type (SNV/indel), gene associations, allele frequencies (GRCh38), clinical links

## 🚀 Cách Sử Dụng

### Universal

```markdown
# dbSNP Lookup Rules
- Khi user cung cấp rsID → tra dbSNP để lấy coordinates, gene, allele frequency.
- Khi user cung cấp genomic coordinates → tra dbSNP để tìm rsID tương ứng.
- Báo cáo: variant type, gene, allele frequency, clinical significance nếu có.
- Tọa độ output luôn trên GRCh38.
```

### Cursor (.cursorrules)

```markdown
# dbSNP
- dbSNP là bước đầu tiên khi user cung cấp rsID — resolve thành coordinates trước khi dùng tools khác.
- Allele frequency giúp phân biệt common variant vs rare variant (MAF < 1% = rare).
- Cross-reference với ClinVar cho clinical interpretation.
```

## 💡 Kịch Bản Lập Trình Thực Tế

### 🧑‍💻 Nhà phát triển:
> "Hãy tra cứu thông tin của mã SNP rs121912651 trên dbSNP để tôi biết vị trí genomic và hậu quả sinh học của nó."

### 🤖 AI Agent (Đã được trang bị Kỹ năng):
> "Tôi sẽ thực hiện truy vấn và phân tích mã SNP này trên dbSNP thông qua các bước tự động:"
>
> 1. **Khởi chạy API dbSNP**: Tôi gửi truy vấn đến cổng API NCBI Entrez để lấy thông tin chi tiết của mã rsID rs121912651.
> 2. **Ánh xạ tọa độ Genomic**: Tôi xác định vị trí của biến thể nằm trên chromosome 17, tọa độ GRCh38 và HGVS nucleotide change tương ứng.
> 3. **Đánh giá hậu quả sinh học**: Tôi phân tích chức năng của SNP này nằm trong gene **TP53** và gây ra đột biến sai nghĩa (Missense Variant) p.Arg273Cys, thay đổi acid amin tại domain liên kết DNA.
> 4. **Trích xuất tần số alen**: Tôi lấy dữ liệu tần số từ dự án 1000 Genomes và gnomAD để báo cáo mức độ phổ biến di truyền của SNP này trong các quần thể người khác nhau.
>
> *Thông tin SNP chi tiết và chính xác đã được tổng hợp hoàn chỉnh, hỗ trợ đắc lực cho công tác chú giải dữ liệu NGS.*

## ⚠️ Lưu Ý & Gotchas

- **rsID merge**: Một số rsID cũ đã được merged vào rsID mới — dbSNP tự động redirect.
- **GRCh38 only**: Tọa độ output trên GRCh38. Nếu user có hg19 coordinates → cần liftover.
- **Common ≠ benign**: Variant common (MAF >1%) vẫn có thể liên quan đến disease risk (vd: APOE ε4).
- **Clinical vs frequency**: dbSNP cung cấp frequency, ClinVar cung cấp pathogenicity — dùng cả hai.
