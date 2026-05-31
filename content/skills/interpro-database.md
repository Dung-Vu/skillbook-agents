---
slug: "interpro-database"
title: "InterPro Domain Analysis"
command: "/interpro-database"
category: "bioinformatics-genomics"
tags:
  - "interpro"
  - "protein-domains"
  - "pfam"
  - "families"
  - "functional-sites"
complexity: "intermediate"
platforms:
  - "cursor"
  - "claude-code"
  - "windsurf"
  - "gemini-cli"
  - "universal"
featured: false
description: "Nhận diện domain chức năng, phân loại họ protein bằng InterPro và đối chiếu cây phân loại loài sinh học."
oneLiner: "Phân tích và nhận diện các vùng domain, họ protein di truyền học."
sourceUrl: "https://www.ebi.ac.uk/interpro/"
sourceAuthor: "Google DeepMind"
lastVerified: "2026-05-30"
relatedSkills:
  - "uniprot-database"
  - "protein-sequence-similarity-search"
  - "pdb-database"
seoTitle: "InterPro Domain Analysis — Skillbook Agents"
seoDescription: "Hướng dẫn Agent xác định protein domains và families bằng InterPro và 14 member databases."
---

## 📖 Tại Sao Cần Skill Này?

Protein hoạt động thông qua các **domain** — đơn vị cấu trúc và chức năng độc lập. InterPro tích hợp 14 databases (Pfam, CDD, PROSITE, SMART, etc.) thành một resource thống nhất để phân tích domain architecture.

- **Domain identification**: Protein có những domain nào, ở vị trí nào
- **Family classification**: Protein thuộc family nào, superfamily nào
- **Functional sites**: Active sites, binding sites, PTM sites
- **InterPro-N**: Deep learning mở rộng coverage đáng kể

## ⚙️ Cách Hoạt Động

```
Protein ID / Sequence → InterPro API → 
Return domains, families, sites with member database annotations
```

1. **Protein lookup**: Lấy domain architecture cho UniProt ID
2. **Entry search**: Tìm all proteins sharing a domain
3. **Domain Architecture (IDA)**: So sánh domain arrangements giữa proteins

## 🚀 Cách Sử Dụng

### Universal

```markdown
# InterPro Rules
- Dùng InterPro để biết protein có domains gì và thuộc family nào.
- Report: InterPro entry ID, member database (Pfam, CDD), domain boundaries.
- IDA (Integrated Domain Architecture) để so sánh proteins cùng domain arrangement.
- GO terms từ InterPro entries cho functional annotation.
```

## 💡 Kịch Bản Lập Trình Thực Tế

### 🧑‍💻 Nhà phát triển:
> "Tôi có một chuỗi protein mới. Hãy chạy dự đoán xem protein này chứa những domain và gia đình protein (protein family) nào bằng InterPro."

### 🤖 AI Agent (Đã được trang bị Kỹ năng):
> "Tôi sẽ thực hiện phân tích kiến trúc domain tích hợp của protein bằng InterPro API thông qua quy trình tự động:"
>
> 1. **Xác thực chuỗi FASTA**: Tôi kiểm tra định dạng chuỗi amino acid của bạn để đảm bảo không chứa ký tự lỗi.
> 2. **Chạy quét InterProScan**: Tôi gửi chuỗi protein của bạn đến máy chủ InterPro để chạy quét đồng thời qua 14 cơ sở dữ liệu thành viên (như Pfam, PROSITE, SMART, PANTHER).
> 3. **Phân tích kiến trúc Domain**: Tôi trích xuất các vị trí khớp hạt (Residue coordinates), xác định sự tồn tại của domain Kinase, domain immunoglobulin và các tín hiệu định vị nhân (NLS).
> 4. **Vẽ sơ đồ kiến trúc**: Tôi mô tả kiến trúc domain chi tiết và gán các nhãn Gene Ontology (GO terms) liên quan đến chức năng sinh học của protein mới.
>
> *Báo cáo kiến trúc domain tích hợp hoàn chỉnh sẽ giúp bạn nhanh chóng suy luận ra chức năng sinh học của chuỗi protein mới.*

## ⚠️ Lưu Ý & Gotchas

- **Multiple databases**: Cùng domain có thể match từ Pfam, CDD, SMART với boundaries hơi khác — InterPro unifies chúng.
- **InterPro-N**: Neural network predictions mở rộng coverage cho protein sequences không có close homologs.
- **Domain ≠ function**: Có domain không có nghĩa domain đó active — cần context biological.
