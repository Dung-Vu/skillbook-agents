---
slug: embl-ebi-ols
title: EMBL-EBI Ontology Lookup
command: /embl-ebi-ols
category: bioinformatics-genomics
tags:
  - ontology
  - ols
  - go
  - disease-ontology
  - hpo
complexity: intermediate
platforms:
  - cursor
  - claude-code
  - windsurf
  - gemini-cli
  - universal
featured: false
description: Tra cứu và chuẩn hóa các thuật ngữ y học và sinh học bằng hệ thống OLS của EMBL-EBI để đảm bảo tính đồng nhất trong ngôn ngữ khoa học toàn cầu.
oneLiner: Tra cứu và chuẩn hóa thuật ngữ y sinh bằng dịch vụ OLS.
sourceUrl: 'https://www.ebi.ac.uk/ols4/'
sourceAuthor: Google DeepMind
lastVerified: '2026-05-30'
relatedSkills:
  - quickgo-database
  - clinvar-database
  - alphagenome-single-variant-analysis
seoTitle: EMBL-EBI Ontology Lookup — Tra cứu thuật ngữ y sinh EMBL-EBI
seoDescription: Hướng dẫn Agent tìm kiếm và chuẩn hóa thuật ngữ y sinh học từ hơn 250 kho từ điển y sinh toàn cầu.
provider: antigravity
---

## 📖 Tại Sao Cần Skill Này?

Trong ngành y học và sinh học, một khái niệm thường có nhiều cách gọi khác nhau (ví dụ: "bệnh tim", "suy tim", "bệnh lý tim mạch"). Kỹ năng này giúp trợ lý tra cứu hệ thống từ điển y sinh OLS của EMBL-EBI để tìm ra mã định danh chuẩn quốc tế của thuật ngữ đó. Điều này giúp mọi nghiên cứu, báo cáo hoặc cơ sở dữ liệu y tế trên thế giới đều hiểu chính xác cùng một khái niệm.

- **Đồng nhất ngôn ngữ**: Chuyển đổi tên gọi thông thường thành mã định danh khoa học chuẩn hóa.
- **Liên kết dữ liệu**: Kết nối hơn 250 kho từ điển y sinh hàng đầu vào một nơi duy nhất.
- **Hiểu rõ cấu trúc**: Giúp bạn xem mối quan hệ giữa các thuật ngữ (ví dụ: bộ phận nào thuộc cơ quan nào, bệnh nào là thể con của bệnh nào).

## ⚙️ Cách Hoạt Động

1. **Nhận từ khóa**: Bạn nhập thuật ngữ y sinh cần tra cứu.
2. **Tìm kiếm tự động**: Hệ thống quét qua hơn 250 cơ sở dữ liệu từ điển y sinh toàn cầu (như từ điển bệnh, tế bào, bộ phận cơ thể).
3. **Trả về kết quả**: Cung cấp mã định danh chuẩn, định nghĩa y khoa, các từ đồng nghĩa và sơ đồ mối quan hệ của thuật ngữ đó.

## 🚀 Cách Sử Dụng

- Gửi thuật ngữ hoặc tên bệnh lý cần chuẩn hóa cho trợ lý.
- Trợ lý sẽ tìm kiếm và trả về mã số chuẩn hóa cùng thông tin định nghĩa chính thức của thuật ngữ đó.

## 💡 Kịch Bản Lập Trình Thực Tế

### Người dùng:
> "Chuẩn hóa giúp tôi thuật ngữ y học 'breast carcinoma' (ung thư vú) sang mã chuẩn quốc tế."

### Trợ lý:
> "Tôi đã tra cứu trên OLS và tìm thấy các mã chuẩn hóa quốc tế phù hợp nhất:
> - **Mã DOID (Disease Ontology)**: `DOID:1612` (Ung thư vú).
> - **Định nghĩa**: Khối u ác tính hình thành từ các tế bào mô tuyến vú.
> - **Từ đồng nghĩa**: Ung thư vú, ung thư tuyến vú ác tính."

## ⚠️ Lưu Ý & Gotchas

- **Nhiều mã định danh**: Một thuật ngữ có thể có nhiều mã khác nhau tùy thuộc vào loại từ điển y khoa bạn dùng (ví dụ: từ điển bệnh lý, từ điển thí nghiệm). Trợ lý sẽ gợi ý các mã phổ biến nhất.
- **Tự động gợi ý**: Nếu bạn viết sai chính tả hoặc viết không đúng chuẩn, trợ lý vẫn có thể tự động tìm kiếm các thuật ngữ gần giống để gợi ý cho bạn.
