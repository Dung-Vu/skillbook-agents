---
slug: opentargets-database
title: Open Targets Drug Discovery
command: /opentargets-database
category: bioinformatics-genomics
tags:
  - opentargets
  - drug-target
  - disease-association
  - tractability
  - drug-discovery
complexity: intermediate
platforms:
  - cursor
  - claude-code
  - windsurf
  - gemini-cli
  - universal
featured: false
description: >-
  Khám phá mối liên kết giữa gene/protein và bệnh tật, hỗ trợ nghiên cứu phát
  triển thuốc bằng cách phân tích dữ liệu di truyền và thuốc thực nghiệm từ Open
  Targets.
oneLiner: 'Tìm kiếm mối liên hệ giữa gene, đích tác dụng của thuốc và bệnh lý.'
sourceUrl: 'https://platform.opentargets.org/'
sourceAuthor: Google DeepMind
lastVerified: '2026-05-30'
relatedSkills:
  - reactome-database
  - uniprot-database
  - clinical-trials-database
seoTitle: Open Targets Drug Discovery — Skillbook Agents
seoDescription: >-
  Hướng dẫn Agent truy vấn target-disease associations và drug discovery data từ
  Open Targets Platform.
provider: antigravity
---

## 📖 Tại Sao Cần Skill Này?

Open Targets là kho dữ liệu lớn kết hợp thông tin di truyền học, y học lâm sàng và các nghiên cứu khoa học để đánh giá mối liên hệ giữa **đích tác dụng** (gene/protein) và **bệnh lý**. Kỹ năng này giúp bạn dễ dàng:
- **Đánh giá liên kết**: Xem mức độ liên quan mật thiết giữa một gene cụ thể với một loại bệnh.
- **Khả năng chế tạo thuốc**: Biết được gene đó có thể tác động bằng thuốc hóa dược nhỏ, kháng thể hay liệu pháp gene không.
- **Tra cứu thuốc hiện có**: Tìm các thuốc đang thử nghiệm lâm sàng hoặc đã được duyệt bán liên quan đến gene mục tiêu.

## ⚙️ Cách Hoạt Động

Quy trình hoạt động:
```
Nhập Gene / Tên bệnh ──> Truy vấn cơ sở dữ liệu Open Targets ──> Hiển thị mức độ liên quan, loại thuốc và độ an toàn
```
- **Điểm số liên kết**: Hệ thống tính toán điểm số (từ 0 đến 1) để thể hiện độ tin cậy của mối liên hệ giữa gene và bệnh.
- **Bằng chứng nghiên cứu**: Thu thập dữ liệu từ các thử nghiệm lâm sàng, tài liệu y khoa và các biến dị di truyền.

## 🚀 Cách Sử Dụng

- Nhập tên gene (ví dụ: EGFR) hoặc tên bệnh để tra cứu mức độ liên kết.
- Yêu cầu xem đánh giá khả năng bào chế thuốc từ gene mục tiêu đó.
- Xem danh sách thuốc hiện có, bao gồm cơ chế hoạt động, giai đoạn thử nghiệm lâm sàng (Phase) và trạng thái phê duyệt.

## 💡 Kịch Bản Lập Trình Thực Tế

### Người dùng yêu cầu:
> "Tôi đang nghiên cứu gene EGFR cho bệnh ung thư phổi tế bào không nhỏ. Hãy tìm các thông tin liên kết bệnh lý và thuốc liên quan."

### Trợ lý AI thực hiện:
> "Tôi sẽ tìm kiếm trên Open Targets Platform để lập báo cáo cho bạn:
> 1. Đối chiếu gene EGFR với mã định danh sinh học chuẩn.
> 2. Tính toán điểm liên kết sinh học để kiểm tra độ tin cậy của gene này đối với bệnh ung thư phổi.
> 3. Liệt kê các thuốc ức chế EGFR nổi tiếng (như Osimertinib) cùng với giai đoạn thử nghiệm lâm sàng hiện tại của chúng."

## ⚠️ Lưu Ý & Gotchas

- **Liên quan không đồng nghĩa với điều trị**: Điểm số liên kết cao cho thấy gene có vai trò lớn trong bệnh, nhưng không chắc chắn rằng việc tác động thuốc vào gene đó sẽ chữa khỏi hoàn toàn bệnh.
- **Tập trung vào cơ thể người**: Dữ liệu của Open Targets chủ yếu phục vụ nghiên cứu trên người, không áp dụng cho động vật khác.
