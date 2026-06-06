---
slug: pubchem-database
title: PubChem Chemical Database
command: /pubchem-database
category: bioinformatics-genomics
tags:
  - pubchem
  - chemical
  - smiles
  - drug
  - cheminformatics
complexity: intermediate
platforms:
  - cursor
  - claude-code
  - windsurf
  - gemini-cli
  - universal
featured: false
description: >-
  Truy cập PubChem - cơ sở dữ liệu hóa chất lớn nhất thế giới để tra cứu công thức, cấu trúc hóa học, tính chất vật lý, thông tin an toàn và hoạt tính sinh học của các hợp chất.
oneLiner: 'Tra cứu thông tin hóa chất và hoạt tính sinh học từ PubChem.'
sourceUrl: 'https://pubchem.ncbi.nlm.nih.gov/'
sourceAuthor: Google DeepMind
lastVerified: '2026-05-30'
relatedSkills:
  - openfda-database
  - pubmed-database
seoTitle: PubChem Chemical Database — Skillbook Agents
seoDescription: >-
  Hướng dẫn Agent truy vấn PubChem cho chemical properties, drug info, và
  bioactivity data.
provider: antigravity
---

## 📖 Tại Sao Cần Skill Này?

PubChem là thư viện hóa chất lớn nhất thế giới chứa hơn 110 triệu hợp chất. Nó cung cấp đầy đủ thông tin về các thuộc tính hóa học, thử nghiệm hoạt tính sinh học, cảnh báo an toàn và thông tin bằng sáng chế. Kỹ năng này giúp bạn:
- **Tra cứu hợp chất**: Tìm kiếm nhanh chóng theo tên chất, mã số định danh (CID) hoặc mã cấu trúc (SMILES).
- **Xem thuộc tính hóa lý**: Tra cứu khối lượng phân tử, công thức cấu tạo và độ phân cực.
- **Xem cảnh báo an toàn**: Tìm hiểu về độc tính của chất và các biện pháp bảo hộ lao động đi kèm.

## ⚙️ Cách Hoạt Động

Quy trình tìm kiếm thông tin:
```
Nhập tên chất / CID / cấu trúc ──> Truy vấn API PubChem ──> Hiển thị tính chất hóa lý, độc tính và hoạt tính sinh học
```

## 🚀 Cách Sử Dụng

- Nhập tên hoạt chất cần tra cứu (ví dụ: Curcumin, Caffeine) để tìm mã CID và thông tin chi tiết.
- Sử dụng mã cấu trúc SMILES để tái dựng lại hình ảnh 3D của phân tử khi cần thiết.
- Đánh giá sơ bộ xem hợp chất có khả năng làm thuốc hay không dựa trên các chỉ số hóa lý tiêu chuẩn (quy tắc Lipinski).

## 💡 Kịch Bản Lập Trình Thực Tế

### Người dùng yêu cầu:
> "Hãy tra cứu thông tin hóa học của hoạt chất Curcumin trên PubChem bao gồm công thức, chỉ số cấu trúc SMILES và độc tính."

### Trợ lý AI thực hiện:
> "Tôi sẽ truy cập cơ sở dữ liệu PubChem để lấy hồ sơ chất Curcumin cho bạn:
> 1. Xác định mã CID chuẩn của Curcumin là **969516**.
> 2. Trích xuất các thuộc tính hóa lý: Công thức hóa học `C21H20O6`, khối lượng phân tử `368.4 g/mol` và chuỗi mã hóa cấu trúc SMILES.
> 3. Cung cấp dữ liệu an toàn hóa chất bao gồm các cảnh báo kích ứng và liều lượng gây độc thực nghiệm LD50."

## ⚠️ Lưu Ý & Gotchas

- **Phân biệt CID và SID**: CID đại diện cho một hợp chất hóa học tinh khiết duy nhất, trong khi SID là bản ghi của một mẫu chất có thể bao gồm hỗn hợp hoặc muối.
- **Quy tắc Lipinski**: Đây chỉ là quy tắc lọc sơ bộ để đánh giá khả năng hấp thụ của thuốc trong cơ thể người (khối lượng phân tử < 500, độ hòa tan phù hợp), không đảm bảo chất đó chắc chắn sẽ thành thuốc thành công.
