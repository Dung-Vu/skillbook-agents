---
slug: "literature-search-openalex"
title: "OpenAlex Scholarly Database"
command: "/literature-search-openalex"
category: "research-analysis"
tags:
  - "openalex"
  - "scholarly"
  - "bibliometrics"
  - "citations"
  - "h-index"
complexity: "starter"
platforms:
  - "cursor"
  - "claude-code"
  - "windsurf"
  - "gemini-cli"
  - "universal"
featured: false
description: "Tìm kiếm và tổng hợp dữ liệu thư mục về bài báo, tác giả, tổ chức nghiên cứu và các chỉ số trích dẫn khoa học."
oneLiner: "Truy vấn cơ sở tri thức học thuật mở toàn cầu OpenAlex."
sourceUrl: "https://openalex.org/"
sourceAuthor: "Google DeepMind"
lastVerified: "2026-05-30"
relatedSkills:
  - "pubmed-database"
  - "literature-search-europepmc"
  - "literature-search-arxiv"
seoTitle: "OpenAlex Scholarly Database — Skillbook Agents"
seoDescription: "Hướng dẫn Agent truy vấn OpenAlex cho papers, authors, bibliometrics, và open-access downloads."
---

## 📖 Tại Sao Cần Skill Này?

OpenAlex là database scholarly mở chứa >250 triệu works — thay thế cho Microsoft Academic Graph. Đặc biệt mạnh cho bibliometric analysis và author/institution research.

- **Comprehensive**: Papers, authors, institutions, topics, sources, publishers, funders
- **Bibliometrics**: Citation counts, h-index, impact factor, trending topics
- **DOI resolution**: Resolve DOIs thành full metadata
- **Open-access PDFs**: Download PDFs miễn phí khi available
- **Taxonomy**: Explore research taxonomies và topic classifications

## ⚙️ Cách Hoạt Động

```
Query / DOI / Author → OpenAlex API → 
Return works, author profiles, citation data, topic classifications
```

## 🚀 Cách Sử Dụng

### Universal

```markdown
# OpenAlex Rules
- Dùng cho bibliometric analysis: citation counts, h-index, author profiles.
- DOI lookup cho quick paper metadata.
- Open-access PDF download khi available.
- Tìm author publications, institution research output.
```

## 💡 Kịch Bản Lập Trình Thực Tế

### 🧑‍💻 Nhà phát triển:
> "Tôi muốn phân tích tầm ảnh hưởng học thuật của giáo sư Shinya Yamanaka (người phát minh ra tế bào iPSC) bao gồm h-index và các bài báo được trích dẫn nhiều nhất của ông."

### 🤖 AI Agent (Đã được trang bị Kỹ năng):
> "Tôi sẽ truy vấn cơ sở dữ liệu tri thức học thuật mở OpenAlex để lập báo cáo thư mục cho bạn:"
>
> 1. **Xác định mã Author ID**: Tôi tìm kiếm tên Shinya Yamanaka trên OpenAlex và định vị mã ID tác giả chính xác của ông.
> 2. **Trích xuất chỉ số thư mục (Bibliometrics)**: Tôi tải dữ liệu tổng quan bao gồm tổng số bài viết, tổng số lượt trích dẫn, chỉ số **h-index** và **i10-index**.
> 3. **Lọc bài báo kinh điển**: Tôi lấy danh sách các ấn phẩm được trích dẫn nhiều nhất của ông (ví dụ bài báo năm 2006 trên Cell về việc tạo tế bào iPS từ chuột) kèm số lượng trích dẫn hàng năm.
>
> *Báo cáo tầm ảnh hưởng học thuật chi tiết và chuyên nghiệp đã sẵn sàng, giúp bạn có cái nhìn sâu sắc về lịch sử nghiên cứu.*

## ⚠️ Lưu Ý & Gotchas

- **OpenAlex vs PubMed**: OpenAlex broader (all disciplines), PubMed = biomedical focused.
- **Author disambiguation**: OpenAlex uses ML for author matching — occasional errors with common names.
- **Data freshness**: OpenAlex updates weekly — very recent papers may be missing.
- **API polite pool**: Use `mailto:` parameter for polite API access (faster rate limit).
