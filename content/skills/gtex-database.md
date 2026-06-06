---
slug: gtex-database
title: GTEx Gene Expression
command: /gtex-database
category: bioinformatics-genomics
tags:
  - gtex
  - gene-expression
  - rna-seq
  - eqtl
  - tissue-specific
complexity: intermediate
platforms:
  - cursor
  - claude-code
  - windsurf
  - gemini-cli
  - universal
featured: false
description: >-
  Tìm kiếm mức độ hoạt động của gen trong 54 mô cơ thể khỏe mạnh khác nhau, giúp hiểu rõ gen nào hoạt động ở cơ quan nào và các thay đổi di truyền ảnh hưởng thế nào đến sự hoạt động đó.
oneLiner: Tra cứu hoạt động của gen và ảnh hưởng di truyền trên các mô cơ thể khỏe mạnh từ dự án GTEx.
sourceUrl: 'https://gtexportal.org/'
sourceAuthor: Google DeepMind
lastVerified: '2026-05-30'
relatedSkills:
  - human-protein-atlas-database
  - ensembl-database
  - gnomad-database
seoTitle: GTEx Gene Expression — Skillbook Agents
seoDescription: >-
  Hướng dẫn Agent truy xuất dữ liệu biểu hiện gene RNA-seq và eQTL từ GTEx trên
  54 mô.
provider: antigravity
---

## 📖 Tại Sao Cần Skill Này?

Dự án GTEx (Genotype-Tissue Expression) cung cấp dữ liệu về mức độ hoạt động (biểu hiện) của các gen trên **54 loại mô** (như não, gan, phổi, da...) của cơ thể người khỏe mạnh. Điều này giúp chúng ta biết được:

- **Mức độ hoạt động theo từng mô**: Gen X có hoạt động mạnh ở não nhưng yếu ở gan hay không.
- **Mối liên hệ di truyền (eQTL)**: Các thay đổi nhỏ trong DNA (biến thể) ảnh hưởng thế nào đến lượng sản sinh của gen ở từng mô.
- **Hệ tham chiếu chuẩn**: Làm cơ sở dữ liệu mẫu khỏe mạnh để so sánh với các mẫu bệnh lý (như ung thư).

## ⚙️ Cách Hoạt Động

```
Thông tin Gen / Biến thể → API GTEx → Trả về mức độ hoạt động của gen trên các mô và ảnh hưởng di truyền liên quan
```

1. **Kiểm tra mức độ hoạt động**: Xác định gen hoạt động nhiều hay ít ở từng cơ quan cụ thể.
2. **Tìm liên kết di truyền**: Phát hiện những biến thể di truyền làm thay đổi độ mạnh yếu của gen.
3. **So sánh trực quan**: Biểu diễn mức độ hoạt động trên 54 mô dưới dạng biểu đồ hoặc bảng so sánh.

## 🚀 Cách Sử Dụng

### Universal

```markdown
# Quy tắc tra cứu GTEx
- Báo cáo mức độ hoạt động bằng đơn vị TPM (Transcripts Per Million).
- Liệt kê top 5 mô hoạt động mạnh nhất và các mô hầu như không hoạt động.
- Ghi nhận thông tin biến thể ảnh hưởng (eQTL) với mức độ tác động và tính đặc thù theo mô.
- Lưu ý: GTEx chỉ chứa dữ liệu mô khỏe mạnh, không chứa dữ liệu bệnh lý hay ung thư.
```

### Cursor (.cursorrules)

```markdown
# GTEx
- GTEx là nguồn chuẩn để kiểm tra hồ sơ hoạt động của gen theo từng mô.
- TPM > 10 là có hoạt động, TPM > 100 là hoạt động rất mạnh, TPM < 1 là hoạt động yếu hoặc không hoạt động.
- Mối liên hệ eQTL có ý nghĩa thống kê cao khi chỉ số p-value < 5e-8.
```

## 💡 Kịch Bản Lập Trình Thực Tế

### 🧑‍💻 Nhà phát triển:
> "Tôi muốn biết gen ERBB2 hoạt động như thế nào ở các cơ quan khác nhau trong cơ thể khỏe mạnh, đặc biệt là ở mô vú."

### 🤖 AI Agent (Đã được trang bị Kỹ năng):
> "Tôi sẽ tìm kiếm trên cơ sở dữ liệu GTEx để lấy thông tin hoạt động của gen này cho bạn:"
>
> 1. **Tìm mã gen chuẩn**: Đổi tên gen ERBB2 sang mã ENSG (mã định danh sinh học chuẩn).
> 2. **Lấy dữ liệu hoạt động**: Gửi yêu cầu đến API GTEx để lấy dữ liệu hoạt động của gen trên 54 mô cơ thể khỏe mạnh.
> 3. **Phân tích kết quả**: ERBB2 hoạt động ở mức trung bình-cao trong mô vú khỏe mạnh (chỉ số hoạt động TPM khoảng 15.4), nhưng hoạt động rất yếu ở não và cơ.
> 4. **Tìm ảnh hưởng di truyền**: Kiểm tra xem có biến thể di truyền nào ảnh hưởng đến mức độ hoạt động của gen này trong mô vú không và liệt kê các biến thể đó.
>
> *Dữ liệu này giúp bạn biết được trạng thái hoạt động bình thường của gen trước khi đi sâu vào nghiên cứu các tình trạng bệnh lý.*

## ⚠️ Lưu Ý & Gotchas

- **Chỉ có mô khỏe mạnh**: GTEx không chứa dữ liệu mô bệnh hay ung thư. Nếu cần nghiên cứu ung thư, hãy dùng cơ sở dữ liệu chuyên biệt khác (như TCGA).
- **Dữ liệu tổng hợp (Bulk RNA-seq)**: Dữ liệu này đo lường trên toàn bộ mẫu mô, không phân biệt chi tiết từng loại tế bào nhỏ bên trong mô đó.
- **Mẫu sau tử vong**: Mẫu mô được thu thập sau khi hiến tạng hoặc tử vong, do đó một số gen có thể hoạt động hơi khác so với cơ thể sống thực tế.
- **Tác động theo mô**: Một biến thể di truyền có thể chỉ làm thay đổi mức hoạt động của gen ở mô này (như gan) mà không ảnh hưởng ở mô khác (như não).
