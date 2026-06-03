---
slug: pubmed-database
title: PubMed Literature Search
command: /pubmed-database
category: research-analysis
tags:
  - pubmed
  - literature-search
  - scientific-papers
  - ncbi
  - biomedical
complexity: intermediate
platforms:
  - cursor
  - claude-code
  - windsurf
  - gemini-cli
  - universal
featured: true
description: >-
  Tra cứu kho dữ liệu tóm tắt y học MEDLINE, liên kết y văn với các thực thể
  sinh học như gen, protein và hợp chất hóa học.
oneLiner: Tìm kiếm tài liệu y sinh học học thuật từ PubMed.
sourceUrl: 'https://pubmed.ncbi.nlm.nih.gov/'
sourceAuthor: Google DeepMind
lastVerified: '2026-05-30'
relatedSkills: []
seoTitle: PubMed Literature Search — Skillbook Agents
seoDescription: >-
  Hướng dẫn Agent tìm kiếm và phân tích tài liệu y sinh từ PubMed qua NCBI
  E-utilities.
provider: antigravity
---

## 📖 Tại Sao Cần Skill Này?

PubMed chứa >37 triệu citations cho biomedical literature — nguồn tham khảo không thể thiếu cho nghiên cứu y học và sinh học. Agent không có skill này thường bịa references hoặc trích dẫn sai.

- **Grounded search**: Tìm papers thực tế với PMIDs thật — tránh hallucination
- **10 functions**: search, fetch abstracts, full text, cross-database linking, spelling check, citation matching, discovery, caching
- **Cross-database**: Link papers đến Gene, Protein, PubChem, ClinVar databases
- **Bulk workflows**: History Server cho batch processing >10 PMIDs

## ⚙️ Cách Hoạt Động

```
Search query → PubMed E-utilities → PMIDs → 
Fetch abstracts / Full text → Cross-database links
```

1. **search_pubmed**: Tìm PMIDs matching query (structured/free-text)
2. **fetch_article_abstracts**: Lấy title, authors, abstract cho batch PMIDs
3. **get_full_text_pmc**: Full text từ PubMed Central (open access)
4. **find_linked_biological_data**: Link papers đến biological databases

## 🚀 Cách Sử Dụng

### Universal

```markdown
# PubMed Rules
- Luôn dùng PubMed MCP tool khi cần tài liệu y sinh. KHÔNG bịa PMIDs.
- Filter với jq trước khi đọc vào context — tránh overflow.
- MeSH terms cho precise search: "Alzheimer Disease"[MeSH] thay vì free text.
- Bulk: >10 PMIDs → dùng History Server (cache_results_history).
- Luôn list URLs papers đã sử dụng trong output.
```

### Cursor (.cursorrules)

```markdown
# PubMed Search
- KHÔNG tự bịa PMID hoặc DOI. Tất cả trích dẫn phải từ PubMed thực tế.
- Format: [Title](https://pubmed.ncbi.nlm.nih.gov/PMID) (PMID: xxx)
- Giới hạn 3-5 search queries nếu không tìm thấy — không iterate vô tận.
```

## 💡 Kịch Bản Lập Trình Thực Tế

### 🧑‍💻 Nhà phát triển:
> "Tôi muốn tìm các thử nghiệm lâm sàng mới nhất về việc sử dụng thuốc Metformin để kéo dài tuổi thọ trên PubMed."

### 🤖 AI Agent (Đã được trang bị Kỹ năng):
> "Tôi sẽ thực hiện tìm kiếm và tổng hợp các nghiên cứu học thuật trên cơ sở dữ liệu PubMed của thư viện Y khoa Quốc gia Mỹ:"
>
> 1. **Xây dựng truy vấn MeSH**: Tôi thiết lập truy vấn nâng cao sử dụng từ khóa chuẩn y khoa: `Metformin[Mesh] AND Longevity[Mesh] OR Aging[Title/Abstract] AND Clinical Trial[Publication Type]`.
> 2. **Tải và Lọc thư mục**: Tôi trích xuất 5 bài báo khoa học chất lượng cao gần đây nhất, tự động lấy thông tin tiêu đề, nhóm tác giả, ngày công bố, tóm tắt abstract và mã số PMID/PMCID.
> 3. **Tổng hợp báo cáo y khoa**: Tôi tóm tắt ngắn gọn mục tiêu, phương pháp thử nghiệm lâm sàng (ví dụ dự án TAME trial) và các phát hiện cốt lõi của từng bài báo để bạn có cái nhìn tổng quan nhanh nhất.
>
> *Danh sách nghiên cứu y sinh chất lượng cao kèm tóm tắt chuyên sâu đã được chuẩn bị hoàn hảo, hỗ trợ bạn viết tổng quan tài liệu khoa học.*

## ⚠️ Lưu Ý & Gotchas

- **Rate limit**: 3 req/s (free), 10 req/s (with API key). Script wrapper tự động handle.
- **Full text ≠ always available**: Chỉ PMC open access articles có full text. Nhiều papers chỉ có abstract.
- **MeSH precision**: Dùng MeSH terms cho precise search — "Neoplasms"[MeSH] capture tất cả cancer types.
- **Bulk efficiency**: >10 papers → dùng History Server pipeline, không fetch one-by-one.
