---
slug: ncbi-sequence-fetch
title: NCBI Sequence Retrieval
command: /ncbi-sequence-fetch
category: bioinformatics-genomics
tags:
  - ncbi
  - sequence
  - genbank
  - refseq
  - efetch
complexity: intermediate
platforms:
  - cursor
  - claude-code
  - windsurf
  - gemini-cli
  - universal
featured: false
description: Giúp tải chuỗi gen (nucleotide) và chuỗi đạm (protein) từ ngân hàng gen quốc tế NCBI bằng mã định danh (Accession ID) hoặc tên gen để phục vụ nghiên cứu sinh học.
oneLiner: Tải chuỗi gen và protein từ cơ sở dữ liệu sinh học NCBI.
sourceUrl: 'https://www.ncbi.nlm.nih.gov/'
sourceAuthor: Google DeepMind
lastVerified: '2026-05-30'
relatedSkills:
  - uniprot-database
  - ensembl-database
  - pubmed-database
seoTitle: NCBI Sequence Retrieval — Skillbook Agents
seoDescription: >-
  Hướng dẫn Agent truy xuất protein và nucleotide sequences từ NCBI bằng
  E-utilities.
provider: antigravity
---

## 📖 Tại Sao Cần Skill Này?

Trong nghiên cứu sinh học và y tế, việc tìm kiếm cấu trúc chuỗi gen hoặc chuỗi protein của các loài sinh vật rất quan trọng. Kỹ năng này giúp trợ lý ảo nhanh chóng kết nối với ngân hàng gen quốc tế NCBI để tải chính xác chuỗi dữ liệu sinh học (định dạng FASTA) bằng mã số hoặc tên gen của loài, giúp bạn không cần phải tìm kiếm thủ công trên trang web.

## ⚙️ Cách Hoạt Động

Quy trình tìm kiếm:
1. Bạn cung cấp mã số gen (Accession ID) hoặc tên gen kèm tên loài sinh vật (ví dụ: gen insulin ở người).
2. Trợ lý kết nối với cơ sở dữ liệu NCBI để tải chuỗi dữ liệu.
3. Trợ lý hiển thị hoặc lưu chuỗi gen/protein dưới dạng định dạng FASTA tiêu chuẩn để bạn sử dụng.

## 🚀 Cách Sử Dụng

- Yêu cầu trợ lý tải chuỗi bằng cách cung cấp mã số gen cụ thể (ví dụ: `NM_000207`).
- Nếu không có mã số, hãy cung cấp tên gen và tên loài sinh vật (ví dụ: "gen INS ở người").
- Bạn có thể nhờ trợ lý dịch chuỗi gen thành chuỗi protein tương ứng hoặc tìm gen liên quan đến một bài báo khoa học.

## 💡 Kịch Bản Lập Trình Thực Tế

### Người dùng:
> "Hãy tải cho tôi chuỗi gen insulin của người từ cơ sở dữ liệu NCBI."

### Trợ lý:
> "Tôi đã tìm kiếm trên cơ sở dữ liệu NCBI:
> 1. Mã số gen insulin người được xác định là **NM_000207**.
> 2. Tôi đã tải chuỗi nucleotide của gen này ở định dạng FASTA.
> 3. Đây là đoạn đầu của chuỗi gen để bạn tham khảo:
> `>NM_000207.3 Homo sapiens insulin (INS), mRNA`
> `AGCCCTCCAGGACAGGCTGCATCAGAAGAGGCCATCAAGCAGGTCTG...`"

## ⚠️ Lưu Ý & Gotchas

- **Mã gen chuẩn**: Nên sử dụng mã gen bắt đầu bằng `NM_` hoặc `NP_` (RefSeq) vì đây là các chuỗi đã được các nhà khoa học kiểm chứng độ chính xác, tránh các chuỗi nháp.
- **Giới hạn tốc độ tải**: Hệ thống NCBI giới hạn số lần tải trong một giây. Trợ lý sẽ tự động điều chỉnh tốc độ tải để tránh bị chặn kết nối.
