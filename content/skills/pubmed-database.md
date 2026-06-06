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
  Tra cứu PubMed - thư viện y học lớn nhất thế giới của Mỹ để tìm kiếm tài liệu nghiên cứu y sinh học, các bài báo khoa học và thử nghiệm lâm sàng thực tế một cách chính xác.
oneLiner: 'Tìm kiếm tài liệu y sinh học học thuật từ PubMed.'
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

PubMed chứa hơn 37 triệu trích dẫn tài liệu y sinh học, là nguồn thông tin chính thống cực kỳ quan trọng cho các nghiên cứu y học và sinh học. Kỹ năng này giúp bạn:
- **Trích dẫn xác thực**: Tìm kiếm các bài báo khoa học thực tế với mã số PMID chính xác, tránh hoàn toàn lỗi đưa thông tin giả mạo.
- **Tính năng toàn diện**: Hỗ trợ tìm kiếm, đọc tóm tắt (Abstract), tải toàn văn bài viết (Full Text) miễn phí và liên kết tài liệu với thông tin gene/protein hoặc hóa chất tương ứng.
- **Xử lý nhanh chóng**: Hỗ trợ xử lý thông tin hàng loạt khi cần đọc nhiều bài báo cùng lúc.

## ⚙️ Cách Hoạt Động

Quy trình tìm kiếm tài liệu:
```
Nhập từ khóa nghiên cứu ──> Truy vấn API PubMed ──> Trả về mã bài báo (PMID) ──> Đọc tóm tắt / Toàn văn
```
- **Tìm kiếm**: Tìm mã bài báo (PMID) phù hợp với chủ đề nghiên cứu.
- **Đọc chi tiết**: Lấy tiêu đề, tác giả, tóm tắt nội dung và tải toàn văn từ kho lưu trữ miễn phí PubMed Central nếu có.

## 🚀 Cách Sử Dụng

- Luôn sử dụng công cụ PubMed khi cần tìm kiếm bằng chứng y học hoặc nghiên cứu y sinh học. Tuyệt đối không tự tạo ra các mã số bài báo hoặc link liên kết không có thật.
- Sử dụng thuật ngữ y khoa chuẩn (MeSH) để tìm kiếm chính xác hơn (ví dụ: dùng `"Alzheimer Disease"[MeSH]` thay vì từ khóa tiếng Anh thông thường).
- Luôn hiển thị đường link bài viết chính thức trong kết quả phản hồi cho người dùng.

## 💡 Kịch Bản Lập Trình Thực Tế

### Người dùng yêu cầu:
> "Tôi muốn tìm các nghiên cứu lâm sàng mới nhất về việc sử dụng thuốc Metformin để chống lão hóa trên PubMed."

### Trợ lý AI thực hiện:
> "Tôi sẽ tìm kiếm trên PubMed để tổng hợp thông tin cho bạn:
> 1. Xây dựng câu lệnh tìm kiếm chuẩn y khoa kết hợp từ khóa `Metformin` và `Aging` hoặc `Longevity`.
> 2. Lấy danh sách 5 bài báo khoa học chất lượng cao gần đây nhất kèm mã số PMID và link chính thức.
> 3. Tóm tắt nhanh mục tiêu, phương pháp thử nghiệm và kết quả chính của từng nghiên cứu để bạn dễ dàng nắm bắt thông tin."

## ⚠️ Lưu Ý & Gotchas

- **Giới hạn tốc độ**: Hệ thống sẽ tự động điều tiết tần suất gửi yêu cầu để không bị máy chủ PubMed chặn.
- **Không phải bài viết nào cũng miễn phí**: Một số bài báo yêu cầu trả phí để đọc toàn văn. Với những bài này, bạn chỉ có thể đọc miễn phí phần tóm tắt (Abstract).
- **Lọc thông tin thông minh**: Khi xử lý danh sách lớn hơn 10 bài viết, hãy sử dụng tính năng lưu trữ tạm thời thay vì tải từng bài một để tránh quá tải mạng.
