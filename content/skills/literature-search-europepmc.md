---
slug: "literature-search-europepmc"
title: "Europe PMC Literature"
command: "/literature-search-europepmc"
category: "research-analysis"
tags:
  - "europepmc"
  - "literature"
  - "full-text"
  - "citations"
  - "open-access"
complexity: "starter"
platforms:
  - "cursor"
  - "claude-code"
  - "windsurf"
  - "gemini-cli"
  - "universal"
featured: false
description: "Tìm kiếm tài liệu học thuật y sinh, tải toàn văn bài báo open-access (PMCID) và trích xuất danh mục trích dẫn."
oneLiner: "Tra cứu y văn khoa học thế giới trên hệ thống Europe PMC."
sourceUrl: "https://europepmc.org/"
sourceAuthor: "Google DeepMind"
lastVerified: "2026-05-30"
relatedSkills:
  - "pubmed-database"
  - "literature-search-openalex"
  - "literature-search-arxiv"
seoTitle: "Europe PMC Literature — Skillbook Agents"
seoDescription: "Hướng dẫn Agent tìm kiếm tài liệu và download full-text từ Europe PMC."
---

## 📖 Tại Sao Cần Skill Này?

Europe PMC mở rộng PubMed với thêm full-text access, preprints, patents, và NHS guidelines. Đặc biệt mạnh ở open-access full-text retrieval và citation analysis.

- **Broader coverage**: PubMed + preprints + patents + agricultural/food sciences
- **Full-text XML**: Download full-text bằng PMCID (open access)
- **Citation network**: Get citation list và bibliography cho paper
- **Text-mining ready**: Structured full-text cho automated extraction

## ⚙️ Cách Hoạt Động

```
Query / PMCID / DOI → Europe PMC API → 
Return papers, full-text XML, citations, bibliography
```

## 🚀 Cách Sử Dụng

### Universal

```markdown
# Europe PMC Rules
- Dùng khi cần full-text XML (Europe PMC có nhiều open-access hơn PubMed alone).
- Citation analysis: get papers cited by hoặc citing a specific paper.
- PMCID required cho full-text retrieval (không phải PMID).
```

## 💡 Kịch Bản Lập Trình Thực Tế

### 🧑‍💻 Nhà phát triển:
> "Tôi đang tìm kiếm các bài viết nguồn mở nói về cơ chế đột biến của Omicron. Hãy tìm trên Europe PMC và tải toàn văn cho tôi."

### 🤖 AI Agent (Đã được trang bị Kỹ năng):
> "Tôi sẽ kết nối với cơ sở dữ liệu Europe PMC để tìm kiếm và trích xuất tài liệu toàn văn cho bạn:"
>
> 1. **Tìm kiếm bài báo khoa học**: Tôi gửi truy vấn tìm kiếm nâng cao `Omicron mutation mechanism` và kích hoạt bộ lọc chỉ lấy các bài báo có toàn văn nguồn mở (Open Access / PMCID).
> 2. **Tải dữ liệu toàn văn**: Tôi sử dụng API Europe PMC để tải xuống tệp tin XML hoặc plain text toàn văn dựa trên mã số PMCID được tìm thấy.
> 3. **Trích xuất thông tin cốt lõi**: Tôi phân tích các phần chính của bài báo (Kết quả, Thảo luận) và tóm tắt lại các đột biến đột phá ở protein gai (spike protein) của biến thể Omicron giúp bạn.
>
> *Tài liệu toàn văn và bản tóm tắt cơ chế đột biến đã được chuẩn bị hoàn hảo, hỗ trợ tối đa cho việc viết báo cáo của bạn.*

## ⚠️ Lưu Ý & Gotchas

- **PMCID ≠ PMID**: Full-text cần PMCID (PMCxxxxxxx), không phải PMID. Không phải tất cả PMID đều có PMCID.
- **Open access only**: Full-text chỉ available cho open-access articles trong PMC.
- **Complementary to PubMed**: Dùng PubMed cho search, Europe PMC cho full-text + citations.
