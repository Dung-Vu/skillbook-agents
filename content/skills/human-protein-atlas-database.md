---
slug: "human-protein-atlas-database"
title: "Human Protein Atlas"
command: "/human-protein-atlas-database"
category: "bioinformatics-genomics"
tags:
  - "protein-atlas"
  - "protein-expression"
  - "immunohistochemistry"
  - "subcellular-localization"
complexity: "intermediate"
platforms:
  - "cursor"
  - "claude-code"
  - "windsurf"
  - "gemini-cli"
  - "universal"
featured: false
description: "Truy xuất bản đồ protein người (HPA) bao gồm biểu hiện protein trong mô và định vị dưới tế bào bằng kỹ thuật kháng thể."
oneLiner: "Tra cứu dữ liệu biểu hiện protein và định vị không gian tế bào."
sourceUrl: "https://www.proteinatlas.org/"
sourceAuthor: "Google DeepMind"
lastVerified: "2026-05-30"
relatedSkills:
  - "gtex-database"
  - "uniprot-database"
  - "string-database"
seoTitle: "Human Protein Atlas — Skillbook Agents"
seoDescription: "Hướng dẫn Agent truy xuất protein expression và subcellular localization từ Human Protein Atlas."
---

## 📖 Tại Sao Cần Skill Này?

RNA expression (GTEx) cho biết gene có được phiên mã không — nhưng protein expression mới thực sự phản ánh chức năng. Human Protein Atlas (HPA) cung cấp:

- **Protein expression**: Immunohistochemistry (IHC) staining trên nhiều loại mô và tế bào người
- **Subcellular localization**: Protein nằm ở đâu trong tế bào (nucleus, cytoplasm, membrane, mitochondria...)
- **Semi-quantitative levels**: Not detected / Low / Medium / High cho mỗi tissue

## ⚙️ Cách Hoạt Động

```
Gene/Protein name → HPA API → 
Return tissue expression levels + subcellular localization + IHC images
```

1. **Tissue expression**: Expression level (Not detected → High) cho ~44 normal tissues
2. **Subcellular**: Immunofluorescence localization trong cell lines
3. **Pathology**: Expression trong ~20 cancer types

## 🚀 Cách Sử Dụng

### Universal

```markdown
# HPA Query Rules
- Khi cần protein-level expression (không chỉ RNA) → dùng HPA.
- Report: tissue expression levels, subcellular localization, reliability score.
- HPA dùng semi-quantitative scale: Not detected / Low / Medium / High.
- So sánh với GTEx RNA data để kiểm tra RNA-protein correlation.
```

### Cursor (.cursorrules)

```markdown
# Human Protein Atlas
- HPA = protein expression reference (bổ sung cho GTEx RNA data).
- Reliability: Enhanced (validated), Supported, Approved, Uncertain.
- Subcellular location cực kỳ useful cho drug target assessment.
```

## 💡 Kịch Bản Lập Trình Thực Tế

### 🧑‍💻 Nhà phát triển:
> "Hãy tra cứu thông tin của protein TP53 trên Human Protein Atlas để tôi biết nó phân bố ở bào quan nào trong tế bào."

### 🤖 AI Agent (Đã được trang bị Kỹ năng):
> "Tôi sẽ kết nối với cơ sở dữ liệu Human Protein Atlas (HPA) để trích xuất dữ liệu phân bố không gian tế bào cho bạn:"
>
> 1. **Truy cập cơ sở dữ liệu kháng thể HPA**: Tôi tìm kiếm protein TP53 dựa trên mã kháng thể đã được kiểm định của HPA.
> 2. **Trích xuất vị trí dưới tế bào (Subcellular Localization)**: Tôi phân tích dữ liệu nhuộm miễn dịch huỳnh quang (immunofluorescence) và xác định protein TP53 định vị chính xác trong **Nhân tế bào (Nucleus)**.
> 3. **Độ tin cậy sinh học**: Tôi báo cáo mức độ tin cậy của phát hiện này đạt mức "Approved" với bằng chứng nhuộm rõ ràng trong nhiều dòng tế bào ung thư.
> 4. **Biểu hiện ở mức độ mô (Tissue Expression)**: Tôi lấy thêm dữ liệu hóa mô miễn dịch (IHC) để báo cáo mức độ biểu hiện của protein p53 trong các mô ung thư và mô lành.
>
> *Thông tin phân bố không gian và kháng thể kiểm định của TP53 đã sẵn sàng, hỗ trợ đắc lực cho các thí nghiệm sinh học tế bào.*

## ⚠️ Lưu Ý & Gotchas

- **Semi-quantitative**: IHC staining là semi-quantitative, không chính xác như mass spectrometry.
- **Antibody-dependent**: Kết quả phụ thuộc vào chất lượng antibody — check reliability score.
- **RNA ≠ Protein**: Expression level có thể khác đáng kể giữa RNA (GTEx) và protein (HPA).
- **Normal tissue focus**: Phần tissue section là normal tissue. Cancer data nằm ở pathology section.
