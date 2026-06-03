---
slug: clinvar-database
title: ClinVar Clinical Variants
command: /clinvar-database
category: bioinformatics-genomics
tags:
  - clinvar
  - pathogenicity
  - clinical-variants
  - genetic-testing
complexity: intermediate
platforms:
  - cursor
  - claude-code
  - windsurf
  - gemini-cli
  - universal
featured: false
description: >-
  Truy vấn cơ sở dữ liệu ClinVar về tính gây bệnh (Pathogenic, Benign, VUS) và
  bằng chứng lâm sàng của biến thể gen người.
oneLiner: >-
  Tra cứu phân loại lâm sàng và tính gây bệnh của các biến thể di truyền di
  truyền.
sourceUrl: 'https://www.ncbi.nlm.nih.gov/clinvar/'
sourceAuthor: Google DeepMind
lastVerified: '2026-05-30'
relatedSkills: []
seoTitle: ClinVar Clinical Variants — Skillbook Agents
seoDescription: >-
  Hướng dẫn Agent tra cứu pathogenicity và clinical significance của biến thể di
  truyền từ ClinVar.
provider: antigravity
---

## 📖 Tại Sao Cần Skill Này?

ClinVar là database chuẩn vàng của NCBI chứa phân loại lâm sàng cho hàng triệu biến thể di truyền người. Khi gặp một variant, câu hỏi đầu tiên luôn là: **"Variant này có gây bệnh không?"**

- **5-tier classification**: Pathogenic → Likely Pathogenic → VUS → Likely Benign → Benign
- **Evidence-based**: Mỗi classification kèm bằng chứng từ clinical labs, review panels (ClinGen)
- **Benchmark controls**: Tìm "hard positive" variants đã được xác nhận pathogenic cho validation

## ⚙️ Cách Hoạt Động

```
Variant ID (rsID/HGVS/coordinates) → ClinVar API → 
Return classification, evidence, conditions, review status
```

1. **Input**: rsID (rs123456), HGVS notation (NM_000546.6:c.215C>G), hoặc genomic coordinates
2. **Lookup**: Query ClinVar database qua NCBI E-utilities
3. **Output**: Clinical significance, review status (★ rating), associated conditions, submitter evidence

## 🚀 Cách Sử Dụng

### Universal

```markdown
# ClinVar Lookup Rules
- Khi user hỏi "variant X có gây bệnh không?" → tra ClinVar trước.
- Báo cáo: classification, review stars, associated conditions.
- VUS (Variant of Uncertain Significance) = chưa đủ evidence → KHÔNG kết luận pathogenic hay benign.
- Luôn báo review status (★): 4★ = expert panel reviewed, 1★ = single submitter.
```

### Cursor (.cursorrules)

```markdown
# ClinVar Rules
- ClinVar classification không phải chẩn đoán — luôn khuyên tham khảo genetic counselor.
- Cross-reference với gnomAD allele frequency: rare + pathogenic = high concern.
- Đối với VUS, suggest thêm evidence từ AlphaGenome hoặc functional studies.
```

## 💡 Kịch Bản Lập Trình Thực Tế

### 🧑‍💻 Nhà phát triển:
> "Tôi phát hiện biến thể BRCA1 c.5096G>A (p.Arg1699Gln) trong dữ liệu giải trình tự. Hãy kiểm tra xem biến thể này đã được phân loại lâm sàng như thế nào trên ClinVar."

### 🤖 AI Agent (Đã được trang bị Kỹ năng):
> "Tôi sẽ kết nối trực tiếp với cơ sở dữ liệu ClinVar của NCBI để kiểm tra và lập báo cáo lâm sàng cho bạn:"
>
> 1. **Truy xuất thông tin biến thể**: Tôi truy vấn ClinVar dựa trên chuỗi HGVS chuẩn `BRCA1:c.5096G>A`.
> 2. **Phân tích mức độ gây bệnh (Pathogenicity)**: Tôi trích xuất trạng thái đồng thuận lâm sàng hiện tại của biến thể này là **Pathogenic (Đợt gây bệnh)**.
> 3. **Thu thập bằng chứng lâm sàng**: Tôi tổng hợp các báo cáo từ các trung tâm uy tín (như ENIGMA, Ambry Genetics) đi kèm mã chứng cứ ClinVar SCV, các kiểu hình liên quan (Hereditary Breast and Ovarian Cancer Syndrome) và số lượng sao đánh giá mức độ tin cậy (Review Status: 3 stars - reviewed by expert panel).
>
> *Báo cáo kiểm định biến thể ClinVar chi tiết đã sẵn sàng, giúp bạn đưa ra kết luận chẩn đoán di truyền chính xác và an toàn.*

## ⚠️ Lưu Ý & Gotchas

- **Không phải chẩn đoán**: ClinVar classification là reference, không thay thế genetic counseling.
- **VUS trap**: ~50% variants trong ClinVar là VUS — đừng tự kết luận chúng benign hay pathogenic.
- **Review stars matter**: 1★ single submitter ≠ 4★ expert panel reviewed. Luôn report review status.
- **Updates**: Classifications có thể thay đổi theo thời gian khi có thêm evidence.
