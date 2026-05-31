---
slug: "literature-search-biorxiv"
title: "bioRxiv/medRxiv Preprints"
command: "/literature-search-biorxiv"
category: "research-analysis"
tags:
  - "biorxiv"
  - "medrxiv"
  - "preprints"
  - "biology"
  - "life-sciences"
complexity: "starter"
platforms:
  - "cursor"
  - "claude-code"
  - "windsurf"
  - "gemini-cli"
  - "universal"
featured: false
description: "Duyệt tìm và lọc các bản thảo nghiên cứu y sinh học chưa qua phản biện theo chuyên mục khoa học và khoảng thời gian."
oneLiner: "Tìm kiếm các bài báo tiền xuất bản về khoa học sự sống trên bioRxiv/medRxiv."
sourceUrl: "https://www.biorxiv.org/"
sourceAuthor: "Google DeepMind"
lastVerified: "2026-05-30"
relatedSkills:
  - "literature-search-arxiv"
  - "pubmed-database"
  - "literature-search-europepmc"
seoTitle: "bioRxiv/medRxiv Preprints — Skillbook Agents"
seoDescription: "Hướng dẫn Agent browse và download preprints sinh học từ bioRxiv và medRxiv."
---

## 📖 Tại Sao Cần Skill Này?

bioRxiv (biology) và medRxiv (medicine) là nền tảng preprint cho life sciences — nơi researchers chia sẻ kết quả trước peer-review, đặc biệt quan trọng cho genomics, neuroscience, và epidemiology.

- **Life sciences focus**: Biology, genomics, neuroscience, biochemistry, immunology
- **Medical preprints**: Clinical research, public health, epidemiology (medRxiv)
- **DOI-based**: Fetch paper metadata bằng DOI
- **Browse by date**: Browse mới nhất theo category + date range

## ⚙️ Cách Hoạt Động

```
DOI / Date range + Category → bioRxiv/medRxiv API → 
Return paper metadata, abstracts, download links
```

## 🚀 Cách Sử Dụng

### Universal

```markdown
# bioRxiv/medRxiv Rules
- Date ranges phải NARROW (1-4 weeks) khi browse — API timeout nếu quá rộng.
- Specify category khi browse: genomics, neuroscience, immunology, etc.
- Keyword filtering là local (client-side) — narrow date range trước.
- Dùng DOI cho direct paper lookup.
```

## 💡 Kịch Bản Lập Trình Thực Tế

### 🧑‍💻 Nhà phát triển:
> "Hãy quét các bản thảo preprint mới nhất về ứng dụng mô hình ngôn ngữ lớn trong y sinh (LLMs in biomedicine) trên bioRxiv tuần này."

### 🤖 AI Agent (Đã được trang bị Kỹ năng):
> "Tôi sẽ tự động hóa việc kết nối và duyệt bản thảo preprint trên máy chủ bioRxiv/medRxiv cho bạn:"
>
> 1. **Xác định khoảng thời gian**: Tôi thiết lập khoảng thời gian truy vấn trong vòng 7 ngày gần nhất và lọc theo phân nhóm chuyên ngành (Bioinformatics hoặc Genomics).
> 2. **Quét từ khóa nâng cao**: Tôi lọc các bản thảo chứa cụm từ khóa `LLM`, `language model` hoặc `GPT` trong tiêu đề hoặc tóm tắt.
> 3. **Tổng hợp danh sách preprint**: Tôi trình bày danh sách các nghiên cứu mới nhất kèm mã DOI, nhóm tác giả, tóm tắt ngắn gọn mục tiêu nghiên cứu và liên kết đọc trực tiếp bản thảo.
>
> *Bạn sẽ luôn đi đầu trong việc nắm bắt các khám phá khoa học mới nhất ngay cả trước khi chúng được bình duyệt và xuất bản.*

## ⚠️ Lưu Ý & Gotchas

- **Not peer-reviewed**: Preprints chưa qua peer review. Cẩn thận với claims.
- **Narrow date ranges**: Browse API timeout nếu date range quá rộng (>4 weeks). Luôn specify category.
- **medRxiv disclaimer**: Medical preprints đặc biệt cần cảnh báo — không dùng cho clinical decisions.
