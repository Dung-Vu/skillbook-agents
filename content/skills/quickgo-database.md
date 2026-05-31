---
slug: "quickgo-database"
title: "QuickGO Gene Ontology"
command: "/quickgo-database"
category: "bioinformatics-genomics"
tags:
  - "quickgo"
  - "gene-ontology"
  - "go-terms"
  - "biological-process"
  - "molecular-function"
complexity: "intermediate"
platforms:
  - "cursor"
  - "claude-code"
  - "windsurf"
  - "gemini-cli"
  - "universal"
featured: false
description: "Bản đồ hóa gen với các quá trình sinh học, chức năng phân tử, thành phần tế bào và khám phá cây phân cấp thuật ngữ GO."
oneLiner: "Tra cứu chú giải chức năng sinh học gen Gene Ontology (GO)."
sourceUrl: "https://www.ebi.ac.uk/QuickGO/"
sourceAuthor: "Google DeepMind"
lastVerified: "2026-05-30"
relatedSkills:
  - "reactome-database"
  - "uniprot-database"
  - "string-database"
seoTitle: "QuickGO Gene Ontology — Skillbook Agents"
seoDescription: "Hướng dẫn Agent truy vấn Gene Ontology qua QuickGO để map genes với biological processes và functions."
---

## 📖 Tại Sao Cần Skill Này?

Gene Ontology (GO) là hệ thống phân loại chuẩn quốc tế cho chức năng sinh học — mọi protein/gene đều được gán GO terms mô tả: làm gì (Molecular Function), tham gia quá trình nào (Biological Process), nằm ở đâu (Cellular Component).

- **Gene → Functions**: Gene X tham gia những quá trình sinh học nào
- **Function → Genes**: Quá trình "apoptosis" liên quan đến genes nào
- **Hierarchy navigation**: GO terms có cấu trúc cây — parent/child/ancestor relationships

## ⚙️ Cách Hoạt Động

```
Gene / GO term → QuickGO REST API → 
Return GO annotations, hierarchy, evidence codes
```

1. **Annotation query**: Lấy GO terms cho gene/protein, filter theo evidence code
2. **Term lookup**: Chi tiết GO term (definition, hierarchy)
3. **Hierarchy navigation**: Parents, children, ancestors của GO term

## 🚀 Cách Sử Dụng

### Universal

```markdown
# QuickGO Rules
- GO có 3 aspects: BP (Biological Process), MF (Molecular Function), CC (Cellular Component).
- Evidence codes matter: EXP/IDA/IPI = experimental, IEA = electronic (lower quality).
- Dùng hierarchy để tìm terms general hơn hoặc specific hơn.
- KHÔNG dùng cho: drug targets (dùng OpenTargets), pathway diagrams (dùng Reactome).
```

## 💡 Kịch Bản Lập Trình Thực Tế

### 🧑‍💻 Nhà phát triển:
> "Hãy tra cứu các chú giải Gene Ontology (GO terms) của gene TP53 để tôi biết nó tham gia vào những chức năng phân tử và quá trình sinh học nào."

### 🤖 AI Agent (Đã được trang bị Kỹ năng):
> "Tôi sẽ truy vấn cơ sở dữ liệu QuickGO của viện EBI để lấy toàn bộ chú giải chức năng di truyền cho bạn:"
>
> 1. **Ánh xạ Gene sang UniProt ID**: Tôi ánh xạ TP53 sang mã UniProt chuẩn **P04637**.
> 2. **Truy vấn chú giải GO**: Tôi tải danh sách các chú giải được kiểm chứng thực nghiệm từ QuickGO API.
> 3. **Phân loại theo 3 nhánh GO**:
>    * **Molecular Function (Chức năng phân tử)**: `GO:0003700` (hoạt tính yếu tố phiên mã liên kết DNA đặc hiệu).
>    * **Biological Process (Quá trình sinh học)**: `GO:0006915` (quá trình apoptotic/tự hủy tế bào).
>    * **Cellular Component (Thành phần tế bào)**: `GO:0005634` (định vị trong nhân tế bào).
> 4. **Trích xuất mã chứng cứ**: Tôi lọc và chỉ báo cáo các chú giải có bằng chứng thực nghiệm mạnh để đảm bảo độ tin cậy khoa học cao nhất.
>
> *Báo cáo chú giải Gene Ontology toàn diện đã sẵn sàng, giúp bạn hiểu sâu sắc cơ chế sinh học phân tử của gene.*

## ⚠️ Lưu Ý & Gotchas

- **Evidence codes**: IEA (Inferred from Electronic Annotation) chiếm ~98% annotations nhưng chất lượng thấp hơn experimental (EXP, IDA).
- **GO ≠ pathway**: GO mô tả functions/processes, không phải signaling cascades. Dùng Reactome cho pathway diagrams.
- **Propagation**: GO annotations propagate up the hierarchy — annotated với child term tự động inherits parent terms.
