---
slug: protein-sequence-similarity-search
title: Protein Sequence Similarity Search
command: /protein-sequence-similarity-search
category: bioinformatics-genomics
tags:
  - blast
  - mmseqs2
  - homology
  - sequence-search
  - protein
complexity: intermediate
platforms:
  - cursor
  - claude-code
  - windsurf
  - gemini-cli
  - universal
featured: false
description: >-
  Đối chiếu chuỗi protein chưa biết với cơ sở dữ liệu lớn để tìm các protein tương đồng, từ đó dự đoán chức năng sinh học bằng công cụ MMseqs2 hoặc BLAST.
oneLiner: 'Tìm kiếm và đối chiếu các chuỗi protein tương đồng bằng MMseqs2 hoặc BLAST.'
sourceUrl: 'https://www.ebi.ac.uk/Tools/sss/'
sourceAuthor: Google DeepMind
lastVerified: '2026-05-30'
relatedSkills:
  - protein-sequence-msa
  - uniprot-database
  - interpro-database
seoTitle: Protein Sequence Similarity Search — Skillbook Agents
seoDescription: >-
  Hướng dẫn Agent tìm kiếm protein homolog bằng MMseqs2 và BLAST để suy luận
  chức năng.
provider: antigravity
---

## 📖 Tại Sao Cần Skill Này?

Khi bạn có một chuỗi protein mới chưa rõ chức năng, cách tốt nhất là tìm xem có protein nào của các loài sinh vật khác giống với nó và đã được nghiên cứu kỹ trước đó hay chưa. Kỹ năng này giúp bạn:
- **Dự đoán chức năng**: Tìm ra vai trò sinh học của protein lạ dựa trên những protein tương đồng đã biết.
- **MMseqs2 (Quét nhanh)**: Tìm kiếm siêu tốc trên các cơ sở dữ liệu khổng lồ, nhanh gấp hàng trăm lần phương pháp truyền thống.
- **BLAST (Quét sâu)**: Tìm kiếm kỹ lưỡng và chi tiết hơn khi công cụ quét nhanh chưa trả về kết quả ưng ý.

## ⚙️ Cách Hoạt Động

Quy trình tìm kiếm:
```
Nhập chuỗi protein (FASTA) ──> Chạy quét MMseqs2 / BLAST ──> Trả về danh sách protein giống nhất
```
- **Quét dữ liệu**: So khớp chuỗi amino acid với hàng triệu chuỗi protein đã biết trong cơ sở dữ liệu.
- **Đánh giá kết quả**: Lọc và hiển thị các kết quả trùng khớp nhất dựa trên độ giống nhau về mặt di truyền.

## 🚀 Cách Sử Dụng

- Nhập chuỗi protein của bạn để bắt đầu tìm kiếm. Hệ thống sẽ ưu tiên chạy quét nhanh bằng MMseqs2, và tự động chuyển sang BLAST nếu cần kết quả sâu hơn.
- Đọc kết quả bằng cách chú ý đến chỉ số E-value (càng nhỏ và gần 0 thì độ tin cậy càng cao) và phần trăm trùng khớp (Identity trên 30% thường là có cùng chức năng).
- Không dùng công cụ này khi muốn tìm kiếm sự tương đồng về hình dạng cấu trúc 3D (khi đó hãy dùng công cụ Foldseek).

## 💡 Kịch Bản Lập Trình Thực Tế

### Người dùng yêu cầu:
> "Tôi vừa tìm thấy một chuỗi protein lạ từ mẫu đất. Hãy chạy quét BLAST để tìm xem nó tương đồng với những protein nào đã biết."

### Trợ lý AI thực hiện:
> "Tôi sẽ tìm kiếm trên cơ sở dữ liệu cho bạn:
> 1. Kiểm tra chuỗi amino acid bạn gửi để đảm bảo định dạng đúng chuẩn.
> 2. Gửi chuỗi lên hệ thống quét trực tuyến để tìm các protein tương đồng.
> 3. Trích xuất danh sách các protein giống nhất (ví dụ: giống 98% với một enzyme phân hủy xenluloza của vi khuẩn đất), giúp bạn dễ dàng đoán ra chức năng của mẫu protein lạ."

## ⚠️ Lưu Ý & Gotchas

- **Chỉ dùng chuỗi protein**: Không sử dụng trực tiếp chuỗi DNA/RNA. Nếu bạn chỉ có chuỗi gene, cần dịch mã sang chuỗi axit amin trước khi tìm kiếm.
- **Độ giống nhau quá thấp**: Nếu độ trùng khớp chuỗi axit amin dưới 20%, công cụ này có thể không tìm ra kết quả. Khi đó, hãy cân nhắc sử dụng phương pháp đối chiếu cấu trúc 3D (Foldseek).cellulase của vi khuẩn đất, giúp bạn suy luận chính xác chức năng sinh học của mẫu.
>
> *Bảng kết quả BLAST và báo cáo chú giải chức năng chi tiết sẽ giúp bạn định danh mẫu protein lạ chỉ trong tích tắc.*

## ⚠️ Lưu Ý & Gotchas


- **Chỉ protein sequence**: Không dùng cho DNA/RNA. Nếu có coding DNA → translate trước.
- **Không dùng cho structural search**: Nếu sequence identity <20%, thử Foldseek thay vì BLAST.
- **E-value context**: E-value phụ thuộc database size — cùng một alignment có thể significant trong database nhỏ nhưng không significant trong database lớn.
