---
slug: string-database
title: STRING Protein Interactions
command: /string-database
category: bioinformatics-genomics
tags:
  - string
  - protein-interactions
  - ppi
  - network
  - functional-enrichment
complexity: intermediate
platforms:
  - cursor
  - claude-code
  - windsurf
  - gemini-cli
  - universal
featured: false
description: >-
  Khám phá tương tác protein-protein vật lý và chức năng, tính điểm tin cậy và
  phân tích làm giàu chức năng cụm protein.
oneLiner: Truy vấn mạng lưới tương tác giữa các protein từ STRING.
sourceUrl: 'https://string-db.org/'
sourceAuthor: Google DeepMind
lastVerified: '2026-05-30'
relatedSkills: []
seoTitle: STRING Protein Interactions — Skillbook Agents
seoDescription: >-
  Hướng dẫn Agent truy vấn protein-protein interactions và functional enrichment
  từ STRING.
provider: antigravity
---

## 📖 Tại Sao Cần Skill Này?

Protein không hoạt động đơn lẻ — chúng tương tác với nhau tạo thành networks phức tạp. STRING tích hợp evidence từ nhiều nguồn (experimental, database, text-mining, co-expression) để xây dựng bản đồ protein-protein interactions.

- **Interaction partners**: Protein X tương tác với protein nào, confidence score bao nhiêu
- **Evidence types**: Experimental (lab-verified), database (curated), text-mining, co-expression
- **Functional enrichment**: Danh sách proteins có enriched cho pathway/GO term nào

## ⚙️ Cách Hoạt Động

```
Protein(s) → STRING API → 
Return interaction network, confidence scores, enrichment analysis
```

1. **Network query**: Lấy interaction partners cho 1 hoặc nhiều proteins
2. **Evidence breakdown**: Score theo từng evidence channel (0-1)
3. **Enrichment**: KEGG pathways, GO terms, Reactome enriched trong protein set

## 🚀 Cách Sử Dụng

### Universal

```markdown
# STRING Query Rules
- Confidence score > 0.7 = high confidence interaction. > 0.9 = highest.
- Report evidence breakdown: experimental, database, text-mining.
- Functional enrichment cho protein list → identify common pathways.
- Specify species (9606 = human) khi query.
```

## 💡 Kịch Bản Lập Trình Thực Tế

### 🧑‍💻 Nhà phát triển:
> "Tôi muốn xây dựng mạng lưới tương tác protein-protein (PPI) xung quanh gene AKT1 để tìm các đối tác liên kết chính của nó."

### 🤖 AI Agent (Đã được trang bị Kỹ năng):
> "Tôi sẽ truy vấn cơ sở dữ liệu STRING để xây dựng và phân tích mạng lưới tương tác protein cho bạn:"
>
> 1. **Tra cứu mã đối tác**: Tôi ánh xạ AKT1 sang mã protein STRING tương ứng.
> 2. **Tải mạng lưới tương tác**: Tôi gửi yêu cầu tải danh sách các protein tương tác trực tiếp (vòng 1) từ STRING API, thiết lập ngưỡng tin cậy cao (confidence score > 0.7).
> 3. **Phân tích nguồn bằng chứng**: Tôi trích xuất các bằng chứng tương tác di truyền.
> 4. **Trình bày báo cáo mạng lưới**: Tôi lập danh sách 5 đối tác tương tác mạnh nhất (như MTOR, PIK3CA, PTEN) đi kèm điểm số tin cậy cụ thể và giải thích cơ chế truyền tín hiệu trong tế bào ung thư.
>
> *Bản đồ mạng lưới tương tác di truyền STRING chi tiết đã sẵn sàng, hỗ trợ tối đa cho việc phát hiện đích tác dụng phối hợp.*

## ⚠️ Lưu Ý & Gotchas

- **Combined score ≠ sum**: STRING combines evidence channels bằng Bayesian integration, không phải simple sum.
- **Text-mining bias**: High text-mining score có thể chỉ vì hai proteins thường được mention cùng nhau trong papers, không nhất thiết interact trực tiếp.
- **Species important**: Cùng protein nhưng interaction network khác nhau giữa human vs mouse.
- **Functional vs physical**: STRING includes cả functional associations, không chỉ physical binding.
