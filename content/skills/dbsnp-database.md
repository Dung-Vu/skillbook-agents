---
slug: dbsnp-database
title: dbSNP Variant Lookup
command: /dbsnp-database
category: bioinformatics-genomics
tags:
  - dbsnp
  - snp
  - rsid
  - variant-lookup
  - allele-frequency
complexity: intermediate
platforms:
  - cursor
  - claude-code
  - windsurf
  - gemini-cli
  - universal
featured: false
description: Tra cứu dữ liệu sinh học dbSNP để kiểm tra thông tin chi tiết của các biến thể di truyền ngắn (như SNP, indel) dựa trên mã rsID hoặc tọa độ gen.
oneLiner: Tra cứu thông tin chi tiết và vị trí của các biến thể di truyền ngắn.
sourceUrl: 'https://www.ncbi.nlm.nih.gov/snp/'
sourceAuthor: Google DeepMind
lastVerified: '2026-05-30'
relatedSkills: []
seoTitle: dbSNP Variant Lookup — Tra cứu biến thể gen dbSNP
seoDescription: Hướng dẫn Agent tra cứu vị trí, loại biến thể di truyền ngắn và tần suất xuất hiện trong dân số từ cơ sở dữ liệu dbSNP.
provider: antigravity
---

## 📖 Tại Sao Cần Skill Này?

Trong nghiên cứu di truyền học, mỗi biến thể gen nhỏ (đột biến điểm) thường có một mã định danh duy nhất gọi là **rsID** (ví dụ: rs1234567) – giống như số CMND của biến thể đó. Kỹ năng này giúp bạn tra cứu nhanh thông tin từ dbSNP (cơ sở dữ liệu toàn cầu của NCBI) để biết đột biến này nằm ở đâu, trên gen nào và mức độ phổ biến của nó trong dân số.

- **Tìm kiếm nhanh chóng**: Chuyển đổi linh hoạt giữa mã rsID, vị trí tọa độ gen và tên gen liên quan.
- **Biết độ phổ biến**: Xem biến thể này là phổ biến hay cực kỳ hiếm gặp trong cộng đồng.
- **Chuẩn bị dữ liệu**: Cung cấp thông tin nền tảng để phân tích sâu hơn về mặt lâm sàng hoặc y khoa.

## ⚙️ Cách Hoạt Động

1. **Nhận đầu vào**: Bạn cung cấp mã rsID hoặc tọa độ vị trí của gen.
2. **Truy vấn dbSNP**: Hệ thống tự động kết nối và tìm kiếm trên cơ sở dữ liệu dbSNP của NCBI.
3. **Trả về kết quả**: Cung cấp loại biến thể, tên gen bị ảnh hưởng, tọa độ chính xác trên nhiễm sắc thể và tần suất xuất hiện trong dân số.

## 🚀 Cách Sử Dụng

- Đưa mã rsID hoặc tọa độ gen cần kiểm tra cho trợ lý.
- Trợ lý sẽ nhanh chóng trả về báo cáo tóm tắt thông tin của biến thể đó.

## 💡 Kịch Bản Lập Trình Thực Tế

### Người dùng:
> "Tìm giúp tôi thông tin về mã biến thể rs121912651 trên dbSNP với."

### Trợ lý:
> "Tôi đã tra cứu cơ sở dữ liệu dbSNP cho bạn:
> - **Vị trí**: Nằm trên nhiễm sắc thể 17.
> - **Gen liên quan**: Gen **TP53** (gen kiểm soát sự phát triển của tế bào).
> - **Tác động**: Làm thay đổi axit amin trong cấu trúc protein, có thể ảnh hưởng đến chức năng chống ung thư của gen.
> - **Tần suất**: Rất hiếm gặp trong dân số chung."

## ⚠️ Lưu Ý & Gotchas

- **Gộp mã rsID**: Đôi khi các mã rsID cũ đã được gộp chung vào một mã mới hơn, hệ thống sẽ tự động chuyển hướng đến mã mới nhất.
- **Chuẩn bản đồ gen**: Tọa độ trả về mặc định sử dụng bản đồ gen mới nhất (GRCh38). Nếu bạn đang dùng hệ tọa độ cũ hơn (như hg19), hãy báo cho trợ lý biết để chuyển đổi tọa độ tương ứng.
