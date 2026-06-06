---
slug: openfda-database
title: OpenFDA Drug & Safety Data
command: /openfda-database
category: bioinformatics-genomics
tags:
  - fda
  - adverse-events
  - drug-safety
  - recalls
  - labeling
complexity: intermediate
platforms:
  - cursor
  - claude-code
  - windsurf
  - gemini-cli
  - universal
featured: false
description: >-
  Truy cập cơ sở dữ liệu chính thức của FDA (Hoa Kỳ) để kiểm tra thông tin an toàn thuốc, tác dụng phụ, các trường hợp thu hồi sản phẩm, nhãn hướng dẫn sử dụng và thiết bị y tế.
oneLiner: 'Tra cứu tác dụng phụ, nhãn hướng dẫn thuốc và cảnh báo an toàn từ FDA.'
sourceUrl: 'https://open.fda.gov/'
sourceAuthor: Google DeepMind
lastVerified: '2026-05-30'
relatedSkills:
  - clinical-trials-database
seoTitle: OpenFDA Drug & Safety Data — Skillbook Agents
seoDescription: >-
  Hướng dẫn Agent truy vấn openFDA cho drug adverse events, recalls, và
  regulatory data.
provider: antigravity
---

## 📖 Tại Sao Cần Skill Này?

Khi nghiên cứu hoặc sử dụng các loại thuốc và sản phẩm y tế, việc nắm rõ thông tin chính thức từ cơ quan quản lý là rất quan trọng. Kỹ năng này giúp bạn nhanh chóng tra cứu:
- **Tác dụng phụ**: Các báo cáo thực tế về phản ứng không mong muốn của người dùng.
- **Nhãn hướng dẫn & Liều lượng**: Cách dùng, cảnh báo và đối tượng không nên sử dụng.
- **Thu hồi sản phẩm**: Danh sách các lô thuốc, thực phẩm hoặc mỹ phẩm bị thu hồi do lỗi chất lượng.

## ⚙️ Cách Hoạt Động

Quy trình tìm kiếm thông tin:
```
Nhập tên thuốc / mã NDC ──> Truy vấn cơ sở dữ liệu openFDA ──> Hiển thị tác dụng phụ, nhãn thuốc, lịch sử thu hồi
```

## 🚀 Cách Sử Dụng

- Nhập tên thuốc (ví dụ: Ibuprofen) hoặc mã số thuốc để bắt đầu tìm kiếm.
- Yêu cầu xem chi tiết nhãn thuốc bao gồm: chỉ định sử dụng, cảnh báo và các chống chỉ định y khoa.
- Phân tích số lượng báo cáo tác dụng phụ để đánh giá mức độ an toàn chung của sản phẩm.

## 💡 Kịch Bản Lập Trình Thực Tế

### Người dùng yêu cầu:
> "Hãy kiểm tra các báo cáo về tác dụng phụ nguy hiểm của thuốc Ibuprofen trên hệ thống openFDA gần đây."

### Trợ lý AI thực hiện:
> "Tôi sẽ truy vấn cơ sở dữ liệu openFDA để lập báo cáo an toàn cho bạn:
> 1. Tìm kiếm các báo cáo liên quan đến hoạt chất `ibuprofen` trong thời gian gần đây.
> 2. Thống kê và hiển thị các phản ứng phụ xuất hiện nhiều nhất (như đau dạ dày, dị ứng da).
> 3. Phân tích tỷ lệ gặp tác dụng phụ theo độ tuổi và giới tính để bạn dễ dàng theo dõi."

## ⚠️ Lưu Ý & Gotchas

- **Báo cáo tự nguyện**: Các báo cáo tác dụng phụ là do người dùng và bác sĩ tự nguyện gửi về, nên có thể không đầy đủ.
- **Không khẳng định nguyên nhân**: Một báo cáo tác dụng phụ không đồng nghĩa với việc chắc chắn do thuốc đó gây ra.
- **Dữ liệu tại Mỹ**: Dữ liệu này thuộc FDA Hoa Kỳ. Quy định và thông tin y tế ở các quốc gia khác có thể khác nhau.
