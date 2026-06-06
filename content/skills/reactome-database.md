---
slug: reactome-database
title: Reactome Pathway Analysis
command: /reactome-database
category: bioinformatics-genomics
tags:
  - reactome
  - pathway
  - enrichment
  - signaling
  - metabolism
complexity: intermediate
platforms:
  - cursor
  - claude-code
  - windsurf
  - gemini-cli
  - universal
featured: false
description: >-
  Công cụ phân tích các con đường sinh học trong cơ thể (phản ứng hóa sinh, trao đổi chất, truyền tín hiệu), giúp tìm ra các nhóm gen liên quan trực tiếp đến các loại bệnh lý.
oneLiner: Tra cứu và phân tích các con đường sinh học, phản ứng hóa sinh trong cơ thể.
sourceUrl: 'https://reactome.org/'
sourceAuthor: Google DeepMind
lastVerified: '2026-05-30'
relatedSkills:
  - quickgo-database
  - string-database
  - uniprot-database
seoTitle: Reactome Pathway Analysis — Skillbook Agents
seoDescription: >-
  Hướng dẫn Agent phân tích pathway enrichment và khám phá biological pathways
  từ Reactome.
provider: antigravity
---

## 📖 Tại Sao Cần Skill Này?

Trong cơ thể, các gen và protein không hoạt động riêng lẻ mà phối hợp với nhau tạo thành các "con đường sinh học" (giống như một dây chuyền sản xuất trong nhà máy). Skill này giúp bạn:
- **Phân tích nhóm gen**: Đưa vào một danh sách gen bị lỗi/đột biến để tìm xem chúng đang làm gián đoạn dây chuyền sản xuất (con đường sinh học) nào.
- **Xem chi tiết phản ứng**: Biết rõ chất đầu vào, chất đầu ra và chất xúc tác cho từng bước phản ứng hóa sinh cụ thể.
- **Sơ đồ hóa**: Xem hoặc tải sơ đồ mô tả trực quan các con đường sinh học này hoạt động thế nào trong tế bào.

## ⚙️ Cách Hoạt Động

Khi bạn gửi danh sách gen hoặc mã con đường sinh học, hệ thống sẽ:
1. **Đối chiếu cơ sở dữ liệu**: Kiểm tra danh sách gen trên hệ thống dữ liệu chuẩn hóa của Reactome.
2. **Tính toán thống kê**: Tìm kiếm xem các gen này tập trung nhiều nhất ở con đường sinh học nào và tính toán xem sự trùng hợp này có đáng tin cậy hay không (dựa trên chỉ số thống kê FDR).
3. **Hiển thị kết quả**: Trả về tên con đường sinh học, tỷ lệ gen trùng khớp và liên kết xem sơ đồ trực quan.

## 🚀 Cách Sử Dụng

Khi viết yêu cầu cho trợ lý AI:
- Cung cấp danh sách các gen cần phân tích (dùng tên gen chuẩn như `TP53`, `EGFR` hoặc mã UniProt, Ensembl).
- Yêu cầu sắp xếp kết quả theo chỉ số FDR (nhỏ hơn 0.05 là có ý nghĩa sinh học thực tế).
- Kiểm tra danh sách gen xem có gen nào hệ thống không nhận diện được (unmapped) để báo cáo lại.

## 💡 Kịch Bản Lập Trình Thực Tế

### 🧑‍💻 Nhà phát triển:
> "Tôi có danh sách 10 gen đột biến tìm thấy trong mẫu bệnh án ung thư. Hãy kiểm tra xem chúng nằm trong những con đường sinh học nào trên Reactome."

### 🤖 AI Agent (Đã được trang bị Kỹ năng):
> "Tôi đã gửi danh sách 10 gen của bạn lên Reactome để thực hiện phân tích:
> 
> 1. **Kết quả đối chiếu**: Cả 10 gen đều được nhận diện thành công trên hệ thống.
> 2. **Con đường sinh học bị ảnh hưởng nhiều nhất**:
>    * **Sự truyền tín hiệu của EGFR** (`R-HSA-177929`): Có 4 gen của bạn nằm trong con đường này. Chỉ số tin cậy FDR cực thấp (rất đáng chú ý).
>    * **Chu kỳ tế bào** (`R-HSA-1640170`): Có 3 gen trùng khớp.
> 3. **Xem sơ đồ**: Tôi đã chuẩn bị các liên kết trực tiếp dẫn đến sơ đồ chi tiết của từng con đường trên trang Reactome để bạn theo dõi trực quan."

## ⚠️ Lưu Ý & Gotchas

- **Chỉ số tin cậy FDR**: Luôn ưu tiên dùng chỉ số FDR (False Discovery Rate) thay vì p-value thông thường để đánh giá độ chính xác, mức chuẩn thường dùng là dưới 0.05.
- **Độ phủ đối tượng**: Reactome hoạt động tốt nhất và đầy đủ nhất đối với cơ thể người. Với các loài sinh vật khác, dữ liệu sẽ ít chi tiết hơn.
- **Sự khác biệt**: Khác với các hệ thống đóng phí khác, Reactome là cơ sở dữ liệu mã nguồn mở hoàn toàn miễn phí và cực kỳ chi tiết về từng bước phản ứng hóa học nhỏ nhất.
