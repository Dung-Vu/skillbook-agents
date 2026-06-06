---
slug: ensembl-database
title: Ensembl Genome Browser
command: /ensembl-database
category: bioinformatics-genomics
tags:
  - ensembl
  - genome
  - vep
  - transcript
  - gene-structure
complexity: intermediate
platforms:
  - cursor
  - claude-code
  - windsurf
  - gemini-cli
  - universal
featured: false
description: Tìm kiếm thông tin gen, cấu trúc gen và dự đoán ảnh hưởng của các đột biến gen trên cơ sở dữ liệu Ensembl.
oneLiner: Tìm kiếm thông tin gen, cấu trúc gen và dự đoán ảnh hưởng đột biến.
sourceUrl: 'https://www.ensembl.org/'
sourceAuthor: Google DeepMind
lastVerified: '2026-05-30'
relatedSkills: []
seoTitle: Ensembl Genome Browser — Skillbook Agents
seoDescription: >-
  Hướng dẫn Agent tra cứu gene, transcript, protein IDs và dự đoán variant
  consequences bằng Ensembl VEP.
provider: minimax
---

## 📖 Tại Sao Cần Skill Này?

Ensembl là thư viện lớn lưu trữ thông tin về bản đồ gen của nhiều loài sinh vật, đặc biệt là con người. Kỹ năng này giúp bạn dễ dàng tra cứu mã gen, tìm cấu trúc gen và biết được các thay đổi trong gen có thể gây ra ảnh hưởng gì.

- **Tìm kiếm thông tin**: Chuyển đổi qua lại giữa tên gen và các mã định danh sinh học tiêu chuẩn.
- **Lấy chuỗi dữ liệu**: Tải về chuỗi DNA hoặc chuỗi protein của gen cần nghiên cứu.
- **Dự đoán đột biến**: Phân tích sự thay đổi trong gen để xem nó có gây hại hay không.
- **Xem cấu trúc gen**: Biết được ranh giới và các phần cấu thành nên gen.

## ⚙️ Cách Hoạt Động

```
Tên/Mã gen → Hệ thống Ensembl → Trả về thông tin gen, chuỗi DNA và dự đoán đột biến
```

1. **Tìm kiếm mã**: Khớp tên gen thông thường với các mã nhận diện chuẩn quốc tế.
2. **Tải dữ liệu**: Lấy thông tin chi tiết về chuỗi DNA hoặc chuỗi protein tương ứng.
3. **Phân tích đột biến**: Gửi thông tin biến thể gen để nhận dự đoán về mức độ ảnh hưởng (như vô hại hay gây hại).

## 🚀 Cách Sử Dụng

### Universal

```markdown
# Quy tắc truy vấn Ensembl
- Dùng Ensembl để chuyển đổi mã gen: tên gen ↔ mã ENSG ↔ mã ENST ↔ mã ENSP.
- Dự đoán ảnh hưởng đột biến gen: báo cáo loại ảnh hưởng, sự thay đổi axit amin và điểm số mức độ gây hại (SIFT/PolyPhen).
- Lấy chuỗi DNA hoặc protein trực tiếp từ Ensembl khi cần thiết.
- Mặc định sử dụng hệ tọa độ GRCh38 (người).
```

### Cursor (.cursorrules)

```markdown
# Ensembl
- Sử dụng Ensembl làm nguồn thông tin chính cho cấu trúc gen và dự đoán đột biến.
- Báo cáo mức độ ảnh hưởng của đột biến theo thứ tự từ nghiêm trọng đến ít nghiêm trọng.
```

## 💡 Kịch Bản Lập Trình Thực Tế

### 🧑‍💻 Nhà phát triển:
> "Hãy lấy cấu trúc exon và intron của gene BRCA2 từ Ensembl để tôi thiết kế mồi giải trình tự Sanger."

### 🤖 AI Agent (Đã được trang bị Kỹ năng):
> "Tôi sẽ kết nối trực tiếp với REST API của Ensembl để trích xuất cấu trúc gene BRCA2 cho bạn:"
>
> 1. **Tra cứu Gene ID**: Tôi ánh xạ BRCA2 sang mã Ensembl Gene ID chuẩn **ENSG00000139618**.
> 2. **Trích xuất cấu trúc Transcript**: Tôi lấy danh sách các transcript và chọn transcript chính (canonical transcript) **ENST00000380152**.
> 3. **Lấy tọa độ Exon/Intron**: Tôi tải danh sách toàn bộ 27 exon của BRCA2, bao gồm tọa độ bắt đầu, kết thúc, chiều dài exon và trình tự nucleotide tương ứng của ranh giới exon-intron.
>
> *Toàn bộ cấu trúc exon/intron chi tiết đã sẵn sàng, hỗ trợ bạn thiết kế mồi PCR chính xác mà không gặp lỗi lệch khung dịch mã.*

## ⚠️ Lưu Ý & Gotchas

- **Chọn phiên bản chuẩn**: Mỗi gen có thể có nhiều phiên bản phiên mã khác nhau. Luôn sử dụng phiên bản tiêu chuẩn để đảm bảo kết quả chính xác nhất.
- **Phân biệt loại đột biến**: Loại đột biến và mức độ gây hại thực tế là hai khái niệm khác nhau. Đột biến có thể thay đổi axit amin nhưng chưa chắc đã gây hại cho cơ thể.
- **Giới hạn tốc độ**: Hệ thống Ensembl giới hạn số lượng yêu cầu trong một thời gian ngắn. Kỹ năng này sẽ tự động điều chỉnh tốc độ gửi yêu cầu để không bị chặn.
