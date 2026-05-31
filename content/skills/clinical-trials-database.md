---
slug: "clinical-trials-database"
title: "ClinicalTrials.gov Search"
command: "/clinical-trials-database"
category: "bioinformatics-genomics"
tags:
  - "clinical-trials"
  - "ctgov"
  - "drug-development"
  - "recruiting"
  - "phases"
complexity: "intermediate"
platforms:
  - "cursor"
  - "claude-code"
  - "windsurf"
  - "gemini-cli"
  - "universal"
featured: false
description: "Tìm kiếm các thử nghiệm lâm sàng theo bệnh lý, loại thuốc, nhà tài trợ, trạng thái tuyển chọn và địa điểm nghiên cứu."
oneLiner: "Tra cứu cơ sở dữ liệu thử nghiệm lâm sàng ClinicalTrials.gov."
sourceUrl: "https://clinicaltrials.gov/"
sourceAuthor: "Google DeepMind"
lastVerified: "2026-05-30"
relatedSkills:
  - "pubmed-database"
  - "openfda-database"
  - "chembl-database"
seoTitle: "ClinicalTrials.gov Search — Skillbook Agents"
seoDescription: "Hướng dẫn Agent tìm kiếm và phân tích clinical trials từ ClinicalTrials.gov APIv2."
---

## 📖 Tại Sao Cần Skill Này?

ClinicalTrials.gov là registry lớn nhất cho thử nghiệm lâm sàng — chứa >480,000 trials trên toàn thế giới. Quan trọng cho drug development tracking, patient matching, và competitive intelligence.

- **Search trials**: Theo condition, drug/intervention, location, phase, status
- **Trial details**: Protocol, eligibility criteria, outcomes, sponsor
- **Recruiting trials**: Tìm trials đang tuyển bệnh nhân cho patient matching
- **Portfolio analysis**: Tất cả trials của một sponsor/company
- **Count/aggregate**: Thống kê số trials theo conditions, phases, thời gian

## ⚙️ Cách Hoạt Động

```
Search query → ClinicalTrials.gov APIv2 → 
Return trial list, details, eligibility, statistics
```

## 🚀 Cách Sử Dụng

### Universal

```markdown
# ClinicalTrials.gov Rules
- Search by: condition, intervention, location, phase, status, sponsor.
- NCT ID (NCTxxxxxxxx) cho direct trial lookup.
- Trial phases: Phase 1 (safety) → Phase 2 (efficacy) → Phase 3 (confirmation) → Phase 4 (post-market).
- Status: Recruiting, Active, Completed, Terminated, Withdrawn.
```

## 💡 Kịch Bản Lập Trình Thực Tế

### 🧑‍💻 Nhà phát triển:
> "Hãy tìm cho tôi các thử nghiệm lâm sàng Giai đoạn III mới nhất đang tuyển bệnh nhân điều trị Alzheimer bằng kháng thể đơn dòng."

### 🤖 AI Agent (Đã được trang bị Kỹ năng):
> "Tôi sẽ thực hiện truy vấn cơ sở dữ liệu ClinicalTrials.gov của Mỹ thông qua quy trình tự động hóa:"
>
> 1. **Xây dựng cấu trúc truy vấn**: Tôi thiết lập bộ lọc nâng cao bao gồm: Tình trạng bệnh (Alzheimer's Disease), Giai đoạn (Phase 3), Trạng thái tuyển dụng (Recruiting), và từ khóa can thiệp (Monoclonal Antibody).
> 2. **Tải và Trích xuất thông tin**: Tôi truy xuất danh sách các thử nghiệm trùng khớp, tự động phân tích mã NCT ID, tiêu đề nghiên cứu, đơn vị tài trợ (Sponsor) và tiêu chí lựa chọn/loại trừ (Eligibility Criteria).
> 3. **Tổng hợp báo cáo lâm sàng**: Tôi trình bày danh sách các thử nghiệm nổi bật (như các nghiên cứu về Donanemab, Lecanemab) kèm theo địa điểm trung tâm y tế đang tuyển chọn và thông tin liên hệ của điều phối viên.
>
> *Bạn sẽ nhận được danh sách thử nghiệm lâm sàng được cập nhật thời gian thực, giúp hỗ trợ đắc lực cho việc ghép nối bệnh nhân và nghiên cứu lâm sàng.*

## ⚠️ Lưu Ý & Gotchas

- **Registration ≠ quality**: Tất cả trials phải register nhưng chất lượng và kết quả vary widely.
- **Status lag**: Trial status trên ClinicalTrials.gov có thể chậm vài tuần so với actual status.
- **Results**: Không phải tất cả trials đều post kết quả — check PubMed cho published results.
- **APIv2**: Sử dụng APIv2 (mới), không phải classic API (deprecated).
