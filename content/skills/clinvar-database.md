---
slug: clinvar-database
title: ClinVar Clinical Variants
command: /clinvar-database
category: bioinformatics-genomics
tags:
  - clinvar
  - pathogenicity
  - clinical-variants
  - genetic-testing
complexity: intermediate
platforms:
  - cursor
  - claude-code
  - windsurf
  - gemini-cli
  - universal
featured: false
description: Tra cứu dữ liệu y khoa ClinVar để kiểm tra xem một đột biến gen cụ thể có khả năng gây bệnh hay không và xem các bằng chứng khoa học đi kèm.
oneLiner: Tra cứu đột biến gen xem có gây hại hay không từ cơ sở dữ liệu y khoa ClinVar.
sourceUrl: 'https://www.ncbi.nlm.nih.gov/clinvar/'
sourceAuthor: Google DeepMind
lastVerified: '2026-05-30'
relatedSkills: []
seoTitle: ClinVar Clinical Variants — Skillbook Agents
seoDescription: Hướng dẫn Agent tra cứu tính gây bệnh lâm sàng của biến thể di truyền từ cơ sở dữ liệu ClinVar.
provider: antigravity
---

## 📖 Tại Sao Cần Skill Này?

Khi nghiên cứu về di truyền học, câu hỏi quan trọng nhất luôn là: **"Một đột biến gen cụ thể có gây ra bệnh hay không?"** Kỹ năng này giúp bạn tự động tìm câu trả lời từ ClinVar – thư viện y khoa hàng đầu thế giới về biến thể gen người.

- **Biết ngay mức độ nguy hiểm**: Xác định đột biến là gây bệnh, lành tính hay chưa rõ ràng.
- **Tiết kiệm thời gian**: Không cần phải tự mình lục tìm hàng ngàn tài liệu y sinh phức tạp.
- **Độ tin cậy cao**: Cung cấp mức độ đồng thuận của cộng đồng y khoa đối với kết quả tra cứu.

## ⚙️ Cách Hoạt Động

1. **Nhận thông tin**: Bạn cung cấp mã đột biến gen (ví dụ: mã rsID hoặc định dạng chuẩn HGVS).
2. **Truy vấn ClinVar**: Hệ thống tự động tìm kiếm trên cơ sở dữ liệu ClinVar của NCBI.
3. **Trả về kết quả**: Cung cấp báo cáo về khả năng gây bệnh, loại bệnh liên quan và mức độ tin cậy của dữ liệu đó.

## 🚀 Cách Sử Dụng

- Đưa mã đột biến gen cần kiểm tra cho trợ lý.
- Trợ lý sẽ trả về kết luận y khoa ngắn gọn và dễ hiểu về mức độ gây hại của biến thể đó.

## 💡 Kịch Bản Lập Trình Thực Tế

### Người dùng:
> "Biến thể BRCA1 c.5096G>A có gây nguy hiểm gì không bạn?"

### Trợ lý:
> "Tôi đã tra cứu cơ sở dữ liệu ClinVar cho bạn:
> - **Kết luận**: Biến thể BRCA1 này được xếp loại là **Gây bệnh (Pathogenic)**.
> - **Bệnh liên quan**: Hội chứng ung thư vú và buồng trứng di truyền.
> - **Độ tin cậy**: Rất cao (được xác nhận bởi hội đồng chuyên gia)."

## ⚠️ Lưu Ý & Gotchas

- **Chỉ mang tính chất tham khảo**: Kết quả không thay thế cho các chẩn đoán y khoa chuyên nghiệp từ bác sĩ di truyền.
- **Biến thể chưa rõ ràng (VUS)**: Khoảng một nửa đột biến chưa có đủ bằng chứng khoa học để kết luận là tốt hay xấu, vì vậy không nên tự ý suy đoán.
- **Kiểm tra độ tin cậy**: Luôn chú ý đến số sao đánh giá (từ 1 đến 4 sao) để biết mức độ đồng thuận y khoa của kết quả đó.
