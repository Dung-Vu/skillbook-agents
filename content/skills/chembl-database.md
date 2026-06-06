---
slug: chembl-database
title: ChEMBL Bioactive Molecules
command: /chembl-database
category: bioinformatics-genomics
tags:
  - chembl
  - drug
  - bioactivity
  - ic50
  - compound
complexity: intermediate
platforms:
  - cursor
  - claude-code
  - windsurf
  - gemini-cli
  - universal
featured: false
description: Tìm kiếm các hợp chất hóa học, thuốc và dữ liệu hoạt tính sinh học (chỉ số IC50/Ki) của chúng trên cơ thể từ cơ sở dữ liệu hóa tin dược phẩm ChEMBL. Giúp ích cho nghiên cứu hóa dược và bào chế thuốc.
oneLiner: Tìm kiếm phân tử sinh học và dữ liệu hoạt tính hóa dược từ cơ sở dữ liệu ChEMBL.
sourceUrl: 'https://www.ebi.ac.uk/chembl/'
sourceAuthor: Google DeepMind
lastVerified: '2026-05-30'
relatedSkills:
  - pubchem-database
  - opentargets-database
  - openfda-database
seoTitle: ChEMBL Bioactive Molecules — Skillbook Agents
seoDescription: >-
  Hướng dẫn Agent truy vấn bioactive compounds, IC50/Ki values, và drug targets
  từ ChEMBL.
provider: antigravity
---

## 📖 Tại Sao Cần Skill Này?

ChEMBL là cơ sở dữ liệu lớn nhất thế giới về tác động sinh học của các phân tử hóa học nhỏ, chứa thông tin của hơn 2.4 triệu hợp chất và các phép đo thực nghiệm từ tài liệu y sinh học. 

Thông thường, việc tra cứu thủ công xem một chất hóa học tác động thế nào đến tế bào hoặc các loại protein trong cơ thể (protein đích) rất mất thời gian. Skill này giúp trợ lý AI tự động truy cập vào ChEMBL để lấy ra dữ liệu về hiệu quả ức chế tế bào của thuốc, cấu trúc hóa học và cơ chế tác dụng của các loại thuốc đã được phê duyệt.

## ⚙️ Cách Hoạt Động

Quy trình hoạt động:
1. **Tìm kiếm hợp chất/đích tác dụng**: AI tra cứu dựa trên tên chất hóa học, cấu trúc phân tử (SMILES) hoặc tên loại protein đích cần tác động.
2. **Truy vấn hoạt tính sinh học**: Lấy ra các chỉ số thực nghiệm đo lường hiệu quả của chất (như nồng độ gây ức chế IC50, hằng số liên kết Ki).
3. **Tổng hợp thông tin dược phẩm**: Báo cáo về cơ chế hoạt động, chỉ định sử dụng và thông tin lâm sàng của thuốc.

## 🚀 Cách Sử Dụng

1. Sử dụng ChEMBL khi cần tìm chỉ số thử nghiệm thực nghiệm sinh học (IC50, Ki, Kd) của một cặp chất - protein đích.
2. Có thể tìm kiếm các hợp chất có cấu trúc tương tự nhau bằng cách nhập chuỗi mã cấu trúc hóa học SMILES.
3. Xuất báo cáo rõ ràng gồm: Mã định danh chất (ChEMBL ID), loại hoạt tính sinh học, giá trị đo được, đơn vị đo và protein đích bị tác động.

## 💡 Kịch Bản Lập Trình Thực Tế

### Người dùng:
> "Tôi muốn tìm các hoạt chất ức chế protein gây viêm COX-2 có hoạt tính mạnh nhất từ cơ sở dữ liệu ChEMBL."

### Trợ lý AI:
> "Tôi sẽ thực hiện theo các bước sau:
> 1. Ánh xạ protein COX-2 sang mã mục tiêu chuẩn của ChEMBL (mã **CHEMBL230**).
> 2. Truy cập API để lọc các chất hóa học đã được thử nghiệm trên protein này, tập trung vào chỉ số IC50 (nồng độ gây ức chế 50% hoạt động của protein).
> 3. Lọc ra các chất có tác dụng mạnh ở nồng độ cực nhỏ.
> 4. Gửi cho bạn danh sách các hoạt chất hàng đầu (như Celecoxib, Valdecoxib) kèm cấu trúc hóa học và các số liệu nghiên cứu liên quan."

## ⚠️ Lưu Ý & Gotchas

- **Điều kiện thử nghiệm khác nhau**: Các chỉ số như IC50 phụ thuộc nhiều vào điều kiện thí nghiệm thực tế của từng phòng nghiên cứu, vì vậy hãy đối chiếu cẩn thận giữa các bài báo khác nhau.
- **Khác biệt giữa ChEMBL và PubChem**: ChEMBL tập trung sâu vào tác động dược lý sinh học (bioactivity) đã được kiểm chứng, trong khi PubChem chứa nhiều dữ liệu hóa học chung và sàng lọc thô hơn.
- **Cách đọc chỉ số pChEMBL**: Đây là giá trị chuyển đổi của nồng độ hoạt tính. Chỉ số này càng lớn thì hoạt chất tác dụng càng mạnh (ví dụ: điểm từ 6 trở lên là chất có hoạt lực mạnh).
