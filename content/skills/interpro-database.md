---
slug: interpro-database
title: InterPro Domain Analysis
command: /interpro-database
category: bioinformatics-genomics
tags:
  - interpro
  - protein-domains
  - pfam
  - families
  - functional-sites
complexity: intermediate
platforms:
  - cursor
  - claude-code
  - windsurf
  - gemini-cli
  - universal
featured: false
description: >-
  Tìm kiếm các vùng chức năng (domain) và xác định họ của protein bằng cơ sở dữ liệu InterPro, giúp dự đoán chức năng sinh học của protein.
oneLiner: Phân tích vùng chức năng (domain) và xác định họ của protein.
sourceUrl: 'https://www.ebi.ac.uk/interpro/'
sourceAuthor: Google DeepMind
lastVerified: '2026-05-30'
relatedSkills: []
seoTitle: InterPro Domain Analysis — Skillbook Agents
seoDescription: >-
  Hướng dẫn Agent xác định protein domains và families bằng InterPro và 14
  member databases.
provider: antigravity
---

## 📖 Tại Sao Cần Skill Này?

Protein hoạt động thông qua các phần cấu trúc độc lập gọi là **domain** (phân vùng chức năng). InterPro là một hệ thống lớn tích hợp dữ liệu từ 14 nguồn uy tín khác nhau (như Pfam, CDD, PROSITE...) giúp bạn:

- **Nhận diện domain**: Biết protein có những phân vùng chức năng nào và nằm ở vị trí nào trên chuỗi.
- **Phân loại họ protein**: Xác định protein đó thuộc nhóm hay họ protein nào để biết các đặc điểm chung.
- **Xác định các vị trí hoạt động**: Tìm ra nơi xảy ra phản ứng hóa học hoặc nơi liên kết với các chất khác trên protein.

## ⚙️ Cách Hoạt Động

```
Mã hoặc chuỗi Protein → API InterPro → Trả về thông tin domain, họ protein và các chú giải chức năng liên quan
```

1. **Tra cứu protein**: Tìm kiếm cấu trúc domain của một protein cụ thể dựa trên mã định danh.
2. **Tìm kiếm chéo**: Tìm tất cả các protein có cùng một loại domain chức năng.
3. **So sánh cấu trúc domain**: So sánh cách sắp xếp các domain giữa các protein khác nhau để tìm sự tương đồng.

## 🚀 Cách Sử Dụng

### Universal

```markdown
# Quy tắc sử dụng InterPro
- Sử dụng InterPro khi cần phân tích cấu trúc chức năng (domain) và phân loại họ của protein.
- Báo cáo cụ thể: Mã định danh InterPro, nguồn cơ sở dữ liệu gốc (Pfam, CDD) và vị trí bắt đầu/kết thúc của domain.
- Sử dụng chức năng so sánh cấu trúc domain để tìm các protein có cách sắp xếp phân vùng tương tự.
```

## 💡 Kịch Bản Lập Trình Thực Tế

### 🧑‍💻 Nhà phát triển:
> "Tôi có một chuỗi protein mới. Hãy phân tích xem protein này chứa những domain chức năng nào và thuộc họ protein nào bằng InterPro."

### 🤖 AI Agent (Đã được trang bị Kỹ năng):
> "Tôi sẽ thực hiện phân tích cấu trúc domain của protein này thông qua API InterPro cho bạn:"
>
> 1. **Kiểm tra dữ liệu**: Xác thực chuỗi amino acid đầu vào của protein để đảm bảo định dạng chính xác.
> 2. **Gửi yêu cầu phân tích**: Gửi chuỗi protein đến hệ thống InterPro để quét chéo qua 14 cơ sở dữ liệu thành viên.
> 3. **Đọc kết quả**: Xác định các domain có mặt (ví dụ: domain Kinase, domain Globulin) kèm theo vị trí cụ thể của chúng trên chuỗi protein.
> 4. **Tổng hợp chức năng**: Gán các nhãn chức năng sinh học tương ứng với các domain phát hiện được để bạn dễ hình dung vai trò của protein này.
>
> *Dữ liệu này sẽ giúp bạn dễ dàng đoán được protein mới này hoạt động như thế nào trong cơ thể.*

## ⚠️ Lưu Ý & Gotchas

- **Nhiều nguồn dữ liệu**: Một domain có thể được định nghĩa hơi khác nhau về vị trí bắt đầu và kết thúc tùy theo nguồn dữ liệu (như Pfam hay CDD). InterPro sẽ giúp gom nhóm và thống nhất chúng lại.
- **Có domain chưa chắc đã hoạt động**: Sự hiện diện của một domain chỉ là cơ sở dự đoán, bạn vẫn cần các nghiên cứu sinh học thực tế để xác nhận xem domain đó có thực sự hoạt động trong tế bào hay không.
