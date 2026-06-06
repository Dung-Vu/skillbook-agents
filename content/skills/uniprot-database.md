---
slug: uniprot-database
title: UniProt Protein Database
command: /uniprot-database
category: bioinformatics-genomics
tags:
  - uniprot
  - protein
  - function
  - annotation
  - taxonomy
complexity: intermediate
platforms:
  - cursor
  - claude-code
  - windsurf
  - gemini-cli
  - universal
featured: true
description: Truy cập bách khoa toàn thư protein toàn cầu UniProt để tra cứu thông tin chi tiết về chức năng sinh học, cấu trúc và tài liệu nghiên cứu liên quan đến mọi loại protein.
oneLiner: Tra cứu thông tin chi tiết và chức năng của các loại protein từ UniProt.
sourceUrl: 'https://www.uniprot.org/'
sourceAuthor: Google DeepMind
lastVerified: '2026-05-30'
relatedSkills: []
seoTitle: UniProt Protein Database — Tra cứu bách khoa toàn thư protein UniProt
seoDescription: Hướng dẫn Agent truy xuất thông tin chức năng, trình tự axit amin và dữ liệu liên kết của protein từ cơ sở dữ liệu UniProtKB.
provider: antigravity
---

## 📖 Tại Sao Cần Skill Này?

UniProt là **bách khoa toàn thư lớn nhất thế giới về protein**. Khi nghiên cứu sinh học, câu hỏi cơ bản luôn là: *"Protein này làm nhiệm vụ gì trong cơ thể, nó nằm ở đâu và cấu trúc ra sao?"* Kỹ năng này giúp trợ lý nhanh chóng tìm ra câu trả lời chính xác từ UniProt, giúp bạn hiểu rõ cơ chế hoạt động của mọi loại protein mà không cần đọc hàng tá tài liệu phức tạp.

- **Tra cứu toàn diện**: Xem chức năng sinh học, vị trí hoạt động trong tế bào và các bệnh lý liên quan đến protein.
- **Lấy trình tự nhanh chóng**: Tải về chuỗi axit amin chuẩn của protein để phục vụ phân tích.
- **Liên kết đa cơ sở dữ liệu**: Dễ dàng chuyển đổi mã định danh giữa các hệ thống dữ liệu sinh học khác nhau (như Ensembl, PDB, NCBI).

## ⚙️ Cách Hoạt Động

1. **Nhận thông tin**: Bạn nhập tên gen, tên protein hoặc mã định danh UniProt (ví dụ: P01308).
2. **Truy vấn hệ thống**: Trợ lý tự động kết nối và tìm kiếm trên cơ sở dữ liệu UniProtKB.
3. **Trả về báo cáo**: Cung cấp mô tả chức năng sinh học, vị trí hoạt động, các mối liên kết y khoa và chuỗi axit amin của protein.

## 🚀 Cách Sử Dụng

- Gửi tên protein hoặc mã số UniProt bạn muốn nghiên cứu cho trợ lý.
- Trợ lý sẽ tổng hợp hồ sơ sinh học chi tiết của protein đó một cách dễ hiểu.

## 💡 Kịch Bản Lập Trình Thực Tế

### Người dùng:
> "Tra cứu giúp tôi thông tin về protein Insulin của người trên UniProt."

### Trợ lý:
> "Tôi đã tìm thấy thông tin trên UniProt cho bạn:
> - **Mã định danh (ID)**: P01308.
> - **Chức năng chính**: Là hormone quan trọng giúp điều hòa lượng đường trong máu bằng cách kích thích các tế bào hấp thụ glucose.
> - **Cấu trúc**: Gồm hai chuỗi axit amin liên kết chặt chẽ với nhau. Đột biến trên cấu trúc này có thể dẫn đến bệnh tiểu đường."

## ⚠️ Lưu Ý & Gotchas

- **Ưu tiên dữ liệu đã kiểm duyệt (Swiss-Prot)**: Cơ sở dữ liệu UniProt có hai phần: Swiss-Prot (được các nhà khoa học kiểm tra thủ công, độ chính xác cao) và TrEMBL (chú giải tự động bằng máy tính). Trợ lý sẽ luôn ưu tiên dữ liệu từ Swiss-Prot.
- **Không dùng để so sánh trình tự**: UniProt dùng để tra cứu thông tin của từng protein đơn lẻ. Nếu bạn cần so sánh trình tự giữa nhiều protein với nhau, hãy dùng các kỹ năng so sánh trình tự chuyên biệt (như MSA hoặc Sequence Similarity Search).
