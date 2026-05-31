---
slug: "reactome-database"
title: "Reactome Pathway Analysis"
command: "/reactome-database"
category: "bioinformatics-genomics"
tags:
  - "reactome"
  - "pathway"
  - "enrichment"
  - "signaling"
  - "metabolism"
complexity: "intermediate"
platforms:
  - "cursor"
  - "claude-code"
  - "windsurf"
  - "gemini-cli"
  - "universal"
featured: false
description: "Phân tích làm giàu con đường sinh học (Pathway enrichment), tra cứu phản ứng chuyển hóa tế bào và tải sơ đồ mạng sinh học."
oneLiner: "Truy vấn con đường chuyển hóa sinh học từ cơ sở dữ liệu Reactome."
sourceUrl: "https://reactome.org/"
sourceAuthor: "Google DeepMind"
lastVerified: "2026-05-30"
relatedSkills:
  - "quickgo-database"
  - "string-database"
  - "uniprot-database"
  - "opentargets-database"
seoTitle: "Reactome Pathway Analysis — Skillbook Agents"
seoDescription: "Hướng dẫn Agent phân tích pathway enrichment và khám phá biological pathways từ Reactome."
---

## 📖 Tại Sao Cần Skill Này?

Reactome là curated pathway database — mô tả chi tiết các phản ứng sinh học, từ metabolic pathways đến signaling cascades, với từng bước reaction và participants cụ thể.

- **Pathway enrichment**: Submit gene list → tìm pathways over-represented
- **Reaction details**: Inputs, outputs, catalysts, regulators cho mỗi reaction step
- **Pathway hierarchy**: Top-level → sub-pathway → reaction navigation
- **Diagram export**: Pathway diagrams cho visualization

## ⚙️ Cách Hoạt Động

```
Gene list / Pathway ID → Reactome API → 
Return enrichment results, pathway hierarchy, reaction details
```

1. **Enrichment analysis**: Submit gene/protein list → get enriched pathways (p-value, FDR)
2. **Pathway content**: Reaction participants (inputs/outputs/catalysts)
3. **Hierarchy**: Browse pathway tree từ top-level categories

## 🚀 Cách Sử Dụng

### Universal

```markdown
# Reactome Rules
- Enrichment: submit gene list → sort by FDR (< 0.05 = significant).
- Report: pathway name, entities found/total, p-value, FDR.
- Unmapped identifiers: check và report IDs not found in Reactome.
- Diagram export available cho pathway visualization.
```

## 💡 Kịch Bản Lập Trình Thực Tế

### 🧑‍💻 Nhà phát triển:
> "Tôi có danh sách 10 gene đột biến tìm thấy trong mẫu ung thư. Hãy chạy phân tích làm giàu con đường sinh học (pathway enrichment) trên Reactome."

### 🤖 AI Agent (Đã được trang bị Kỹ năng):
> "Tôi sẽ thực hiện phân tích làm giàu con đường sinh hóa bằng công cụ Reactome Analysis Service thông qua quy trình tự động:"
>
> 1. **Xác thực danh sách gene**: Tôi kiểm tra danh sách gene của bạn, chuẩn hóa sang mã HGNC chuẩn.
> 2. **Chạy phân tích Enrichment**: Tôi gửi danh sách gene lên máy chủ Reactome để chạy phân tích thống kê siêu hình học.
> 3. **Phân tích con đường bị ảnh hưởng**: Tôi trích xuất các con đường sinh học có ý nghĩa thống kê nhất.
> 4. **Báo cáo kết quả**: Tôi trình bày bảng kết quả chỉ ra các con đường bị ảnh hưởng nặng nề nhất kèm theo tỷ lệ gene trùng khớp và liên kết trực tiếp đến sơ đồ con đường sinh hóa tương tác trên Reactome.
>
> *Báo cáo con đường sinh học Reactome chi tiết sẽ giúp bạn khám phá ngay lập tức cơ chế sinh lý bệnh đứng sau các đột biến.*

## ⚠️ Lưu Ý & Gotchas

- **FDR, not p-value**: Luôn dùng FDR (False Discovery Rate) để assess significance, không dùng raw p-value.
- **Identifier mapping**: Reactome accept UniProt, Ensembl, Gene Symbol — check unmapped IDs.
- **Human-centric**: Reactome phong phú nhất cho human pathways. Species khác có ít data hơn.
- **Reactome vs KEGG**: Reactome = open-access, curated, detailed reactions. KEGG = proprietary, broader coverage.
