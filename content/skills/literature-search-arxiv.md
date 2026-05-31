---
slug: "literature-search-arxiv"
title: "arXiv Paper Search"
command: "/literature-search-arxiv"
category: "research-analysis"
tags:
  - "arxiv"
  - "preprints"
  - "papers"
  - "research"
  - "physics"
complexity: "starter"
platforms:
  - "cursor"
  - "claude-code"
  - "windsurf"
  - "gemini-cli"
  - "universal"
featured: false
description: "Tra cứu kho lưu trữ arXiv về các nghiên cứu toán học, vật lý, khoa học máy tính và AI, trích xuất tóm tắt và tải tệp PDF."
oneLiner: "Tìm kiếm và tải tài liệu, bài báo khoa học tiền xuất bản trên arXiv."
sourceUrl: "https://arxiv.org/"
sourceAuthor: "Google DeepMind"
lastVerified: "2026-05-30"
relatedSkills:
  - "literature-search-openalex"
  - "literature-search-europepmc"
  - "pubmed-database"
seoTitle: "arXiv Paper Search — Skillbook Agents"
seoDescription: "Hướng dẫn Agent tìm kiếm papers khoa học và preprints trên arXiv."
---

## 📖 Tại Sao Cần Skill Này?

arXiv là nền tảng preprint lớn nhất cho Physics, Math, CS, Biology, và nhiều lĩnh vực STEM — nơi researchers chia sẻ kết quả trước khi peer-review. Rất quan trọng cho AI/ML papers.

- **Preprint access**: Papers mới nhất, trước khi xuất bản chính thức (weeks-months ahead)
- **Full text**: Download PDF hoặc HTML full-text miễn phí
- **arXiv IDs**: Resolve specific paper IDs (2301.12345)
- **Category search**: cs.AI, cs.LG, q-bio, stat, etc.

## ⚙️ Cách Hoạt Động

```
Query / arXiv ID → arXiv API → 
Return metadata, abstracts, download PDF/HTML
```

## 🚀 Cách Sử Dụng

### Universal

```markdown
# arXiv Search Rules
- Dùng cho: CS/AI/ML papers, physics, math, quantitative biology.
- arXiv = preprints (chưa peer-reviewed). Luôn note this limitation.
- Có thể download full-text PDF/HTML cho detailed analysis.
```

## 💡 Kịch Bản Lập Trình Thực Tế

### 🧑‍💻 Nhà phát triển:
> "Tôi muốn tìm các nghiên cứu mới nhất về kỹ thuật tối ưu hóa LLM suy luận (Reasoning LLMs) trên arXiv."

### 🤖 AI Agent (Đã được trang bị Kỹ năng):
> "Tôi sẽ tự động kết nối và tìm kiếm các ấn phẩm khoa học trên thư viện arXiv cho bạn:"
>
> 1. **Xây dựng cú pháp tìm kiếm nâng cao**: Tôi thiết lập truy vấn sử dụng toán tử logic: `ti:"Reasoning LLM" OR abs:"Reasoning models" AND "optimization"`.
> 2. **Tải và Lọc tài liệu**: Tôi trích xuất danh sách 5 bài báo mới nhất, tự động lấy thông tin tiêu đề, nhóm tác giả, ngày công bố, tóm tắt (Abstract) và liên kết tải PDF chính thức.
> 3. **Tóm tắt chuyên sâu**: Tôi đọc nhanh abstract của từng bài và phân loại các kỹ thuật nổi bật (như Test-Time Compute, Reinforcement Learning) để bạn nắm bắt nhanh xu hướng công nghệ.
>
> *Bạn sẽ nhận được danh sách tài liệu học thuật tinh lọc và liên kết tải trực tiếp, giúp tiết kiệm thời gian cập nhật tri thức.*

## ⚠️ Lưu Ý & Gotchas

- **Not peer-reviewed**: arXiv preprints chưa qua peer review — chất lượng vary widely.
- **arXiv ≠ PubMed**: arXiv cho STEM preprints, PubMed cho biomedical published papers.
- **Version history**: Papers có thể update (v1, v2...) — check latest version.
