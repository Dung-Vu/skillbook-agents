---
slug: opentargets-database
title: Open Targets Drug Discovery
command: /opentargets-database
category: bioinformatics-genomics
tags:
  - opentargets
  - drug-target
  - disease-association
  - tractability
  - drug-discovery
complexity: intermediate
platforms:
  - cursor
  - claude-code
  - windsurf
  - gemini-cli
  - universal
featured: false
description: >-
  Hỗ trợ khám phá đích sinh học tiềm năng bằng cách tích hợp bằng chứng di
  truyền, y văn và thuốc thực nghiệm từ Open Targets.
oneLiner: Tìm kiếm mối liên hệ đích tác dụng của thuốc và bệnh lý.
sourceUrl: 'https://platform.opentargets.org/'
sourceAuthor: Google DeepMind
lastVerified: '2026-05-30'
relatedSkills:
  - reactome-database
  - uniprot-database
  - clinical-trials-database
seoTitle: Open Targets Drug Discovery — Skillbook Agents
seoDescription: >-
  Hướng dẫn Agent truy vấn target-disease associations và drug discovery data từ
  Open Targets Platform.
provider: antigravity
---

## 📖 Tại Sao Cần Skill Này?

Open Targets tích hợp dữ liệu từ genetics, genomics, transcriptomics, drugs, và literature để đánh giá mối liên hệ giữa **targets** (genes/proteins) và **diseases** — hỗ trợ drug discovery pipeline.

- **Target-disease associations**: Evidence score cho gene-disease relationship
- **Tractability**: Gene có druggable bằng small molecule, antibody, hay gene therapy không
- **Known drugs**: Drugs đã approved hoặc đang clinical trials cho target
- **Safety data**: Known toxicity effects khi modulate target

## ⚙️ Cách Hoạt Động

```
Gene / Disease → Open Targets GraphQL API → 
Return associations, evidence, drugs, tractability, safety
```

1. **Association**: Overall score (0-1) cho gene-disease pair, breakdown by data type
2. **Evidence**: Genetics (GWAS), somatic mutations, expression, literature, drugs
3. **Tractability**: Small molecule, antibody, PROTAC, gene therapy assessments

## 🚀 Cách Sử Dụng

### Universal

```markdown
# Open Targets Rules
- Association score > 0.5 = strong evidence. Score 0.1-0.5 = moderate.
- Report evidence breakdown: genetic_association, somatic_mutation, known_drug, etc.
- Tractability assessment cho drug development feasibility.
- Known drugs: report mechanism, phase, approval status.
```

## 💡 Kịch Bản Lập Trình Thực Tế

### 🧑‍💻 Nhà phát triển:
> "Tôi đang nghiên cứu đích tác dụng gene EGFR cho bệnh ung thư phổi tế bào không nhỏ (NSCLC). Hãy tìm thông tin liên kết bệnh lý và các thuốc liên quan trên Open Targets."

### 🤖 AI Agent (Đã được trang bị Kỹ năng):
> "Tôi sẽ truy vấn cơ sở dữ liệu Open Targets Platform để lập báo cáo phát triển thuốc cho bạn:"
>
> 1. **Ánh xạ Gene và Disease ID**: Tôi ánh xạ EGFR sang Ensembl ID và NSCLC sang mã Ontology bệnh chuẩn.
> 2. **Tính toán điểm số liên kết (Association Score)**: Tôi tải điểm số liên kết giữa EGFR và NSCLC để chứng minh mức độ tin cậy sinh học của đích tác dụng này (điểm số gần mức tối đa 1.0 EGFR đột biến).
> 3. **Trích xuất thông tin thuốc đang thử nghiệm**: Tôi lập danh sách các thuốc ức chế EGFR (như Osimertinib, Gefitinib) đi kèm trạng thái thử nghiệm lâm sàng cao nhất (Phase IV) và cơ chế tác dụng dược lý.
>
> *Báo cáo EGFR-NSCLC toàn diện bao gồm cả bằng chứng di truyền học và bản đồ thuốc lâm sàng đã sẵn sàng để hỗ trợ nghiên cứu của bạn.*

## ⚠️ Lưu Ý & Gotchas

- **Association ≠ causation**: High score = strong evidence linking target-disease, không đảm bảo drugging target sẽ cure disease.
- **Tractability tiers**: Bucket 1 (clinical precedence) > Bucket 2 (predicted druggable) > Bucket 3 (not yet druggable).
- **Human-focused**: Open Targets chủ yếu cho human targets/diseases.
