---
slug: literature-search-europepmc
title: Europe PMC Literature
command: /literature-search-europepmc
category: research-analysis
tags:
  - europepmc
  - literature
  - full-text
  - citations
  - open-access
complexity: starter
platforms:
  - cursor
  - claude-code
  - windsurf
  - gemini-cli
  - universal
featured: false
description: Tìm kiếm tài liệu y sinh học, tải toàn bộ nội dung các bài báo khoa học miễn phí và trích xuất danh sách các nguồn tham khảo liên quan trên Europe PMC.
oneLiner: Tra cứu y văn thế giới và tải toàn bộ nội dung bài viết miễn phí từ Europe PMC.
sourceUrl: 'https://europepmc.org/'
sourceAuthor: Google DeepMind
lastVerified: '2026-05-30'
relatedSkills: []
seoTitle: Europe PMC Literature — Skillbook Agents
seoDescription: Hướng dẫn Agent tìm kiếm tài liệu và download full-text từ Europe PMC.
provider: antigravity
---

## 📖 Tại Sao Cần Skill Này?

Europe PMC là một kho dữ liệu khổng lồ chứa hàng triệu tài liệu y khoa, bằng sáng chế và nghiên cứu nông nghiệp/thực phẩm. Điểm vượt trội của kỹ năng này là giúp bạn không chỉ tìm thấy tên bài báo mà còn tải được toàn bộ nội dung (full-text) của các nghiên cứu mở (miễn phí) và xem danh sách các bài viết đã trích dẫn nó.

## ⚙️ Cách Hoạt Động

Quy trình tìm kiếm:
1. Bạn nhập từ khóa, mã số bài báo (PMCID hoặc DOI).
2. Trợ lý tìm kiếm trên kho dữ liệu Europe PMC.
3. Trợ lý trả về thông tin bài viết, toàn văn nội dung và danh sách các bài báo liên quan khác.

## 🚀 Cách Sử Dụng

- Yêu cầu trợ lý tìm kiếm y văn bằng từ khóa (ví dụ "Tìm nghiên cứu về vắc xin Covid-19").
- Nếu bạn có mã số PMCID (ví dụ `PMC1234567`), trợ lý có thể tải trực tiếp toàn văn bài viết đó cho bạn đọc.
- Sử dụng kỹ năng này để tìm kiếm các bài nghiên cứu y sinh học miễn phí có thể đọc được toàn bộ nội dung mà không bị tường phí (paywall).

## 💡 Kịch Bản Lập Trình Thực Tế

### Người dùng:
> "Tôi đang tìm kiếm các bài viết nguồn mở nói về cơ chế đột biến của biến thể Omicron. Hãy tìm trên Europe PMC và tải toàn văn cho tôi."

### Trợ lý:
> "Tôi đã tìm kiếm trên Europe PMC và đây là kết quả:
> 1. Bài báo 'Đặc điểm đột biến của biến thể Omicron' (Mã số PMCID: PMC8888888).
> 2. Tôi đã tải toàn bộ nội dung bài báo và tóm tắt các điểm chính: Biến thể này có nhiều đột biến ở protein gai giúp tăng khả năng lây lan...
> 3. Bạn có thể xem toàn bộ file nội dung tôi vừa tải về."

## ⚠️ Lưu Ý & Gotchas

- **Phân biệt mã số**: Để tải được toàn văn nội dung, bạn cần cung cấp mã số PMCID (bắt đầu bằng chữ PMC), chứ không phải mã PMID thông thường.
- **Giới hạn bản quyền**: Trợ lý chỉ tải được toàn văn đối với những bài báo được tác giả mở quyền truy cập miễn phí (Open Access). Những bài viết có bản quyền trả phí sẽ chỉ xem được phần tóm tắt.
