---
slug: human-protein-atlas-database
title: Human Protein Atlas
command: /human-protein-atlas-database
category: bioinformatics-genomics
tags:
  - protein-atlas
  - protein-expression
  - immunohistochemistry
  - subcellular-localization
complexity: intermediate
platforms:
  - cursor
  - claude-code
  - windsurf
  - gemini-cli
  - universal
featured: false
description: >-
  Tra cứu dữ liệu từ Bản đồ Protein Người (Human Protein Atlas - HPA) để biết một loại protein cụ thể nằm ở mô nào trong cơ thể và vị trí của nó bên trong tế bào.
oneLiner: Tra cứu vị trí và mức độ hoạt động của protein trong cơ thể và tế bào.
sourceUrl: 'https://www.proteinatlas.org/'
sourceAuthor: Google DeepMind
lastVerified: '2026-05-30'
relatedSkills:
  - uniprot-database
  - string-database
seoTitle: Human Protein Atlas — Skillbook Agents
seoDescription: >-
  Hướng dẫn Agent truy xuất protein expression và subcellular localization từ
  Human Protein Atlas.
provider: antigravity
---

## 📖 Tại Sao Cần Skill Này?

Dữ liệu RNA (như từ GTEx) chỉ cho biết gen có hoạt động hay không, nhưng protein mới là thành phần trực tiếp thực hiện các chức năng trong cơ thể. Bản đồ Protein Người (Human Protein Atlas - HPA) cung cấp các thông tin quan trọng:

- **Hoạt động của protein ở các mô**: Biết được protein có mặt ở những cơ quan nào trong cơ thể thông qua các phương pháp nhuộm màu sinh học.
- **Vị trí trong tế bào**: Xác định cụ thể protein nằm ở đâu bên trong tế bào (như nhân tế bào, màng tế bào, ti thể...).
- **Mức độ phân bố**: Đánh giá theo các mức độ trực quan: Không phát hiện / Thấp / Trung bình / Cao.

## ⚙️ Cách Hoạt Động

```
Tên Gen / Protein → API HPA → Trả về mức độ hoạt động trong mô, vị trí trong tế bào và hình ảnh nhuộm màu thực tế
```

1. **Kiểm tra hoạt động trong mô**: Xem xét protein xuất hiện ở các mức độ nào trên khoảng 44 loại mô khỏe mạnh khác nhau.
2. **Xác định vị trí tế bào**: Tìm kiếm xem protein tập trung ở bộ phận nào trong các tế bào.
3. **Phân tích bệnh lý**: Tra cứu mức độ xuất hiện của protein trong khoảng 20 loại ung thư khác nhau.

## 🚀 Cách Sử Dụng

### Universal

```markdown
# Quy tắc tra cứu HPA
- Sử dụng HPA khi bạn muốn biết thông tin thực tế về protein (chứ không chỉ là RNA của gen).
- Báo cáo rõ: protein nằm ở mô nào, nằm ở bộ phận nào của tế bào và độ tin cậy của dữ liệu.
- Sử dụng thang đánh giá: Không phát hiện / Thấp / Trung bình / Cao.
- Nên đối chiếu giữa lượng RNA (từ GTEx) và lượng protein (từ HPA) để xem chúng có khớp nhau không.
```

### Cursor (.cursorrules)

```markdown
# Human Protein Atlas
- HPA là nguồn tài liệu chuẩn để tra cứu mức độ hiện diện của protein trong mô.
- Các mức độ tin cậy của dữ liệu: Enhanced (Rất cao), Supported (Được hỗ trợ), Approved (Đã phê duyệt), Uncertain (Chưa chắc chắn).
- Vị trí của protein trong tế bào là thông tin cực kỳ hữu ích để nghiên cứu tác dụng của thuốc.
```

## 💡 Kịch Bản Lập Trình Thực Tế

### 🧑‍💻 Nhà phát triển:
> "Hãy tra cứu thông tin của protein TP53 trên Human Protein Atlas để tôi biết nó nằm ở bộ phận nào trong tế bào."

### 🤖 AI Agent (Đã được trang bị Kỹ năng):
> "Tôi sẽ kết nối với cơ sở dữ liệu Human Protein Atlas (HPA) để tìm thông tin vị trí của protein TP53 cho bạn:"
>
> 1. **Tra cứu dữ liệu**: Tìm kiếm thông tin về protein TP53 trong cơ sở dữ liệu dựa trên các kháng thể đã được kiểm định của HPA.
> 2. **Tìm vị trí tế bào**: Phân tích dữ liệu nhuộm màu huỳnh quang và xác định protein TP53 nằm chủ yếu ở **Nhân tế bào**.
> 3. **Độ tin cậy của dữ liệu**: Báo cáo mức độ tin cậy của phát hiện này đạt mức "Approved" (Đã phê duyệt) với hình ảnh kiểm chứng rõ ràng trên nhiều loại tế bào.
> 4. **Xem mức độ biểu hiện ở các mô**: Trích xuất thêm dữ liệu nhuộm mô để báo cáo lượng protein TP53 có trong các mô khỏe mạnh và mô ung thư.
>
> *Dữ liệu này giúp bạn biết chính xác nơi protein hoạt động để phục vụ cho các nghiên cứu tiếp theo.*

## ⚠️ Lưu Ý & Gotchas

- **Đánh giá mang tính tương đối**: Các mức độ Thấp/Trung bình/Cao chỉ mang tính ước lượng qua nhuộm màu, không phải là số liệu đo lường chính xác tuyệt đối.
- **Phụ thuộc vào chất lượng chất thử**: Kết quả phụ thuộc nhiều vào chất lượng của kháng thể dùng để nhuộm màu. Hãy luôn kiểm tra mức độ tin cậy (reliability score) của dữ liệu.
- **Sự khác biệt giữa RNA và Protein**: Lượng RNA được tạo ra và lượng protein thực tế được sinh ra có thể rất khác nhau.
- **Phân biệt mô khỏe mạnh và mô bệnh**: Dữ liệu mô thông thường là của mô khỏe mạnh. Nếu muốn tìm hiểu về ung thư, bạn cần xem ở mục bệnh học (pathology).
