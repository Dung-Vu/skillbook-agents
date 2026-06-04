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
  Tra cứu dữ liệu chính thức của FDA về tác dụng phụ của thuốc, thu hồi sản
  phẩm, nhãn hướng dẫn và đăng ký thiết bị y tế.
oneLiner: 'Truy vấn dữ liệu Labeling, phản ứng phụ và phê duyệt của FDA.'
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

- **Phản ứng phụ & An toàn**: Tra cứu báo cáo tác dụng phụ tự nguyện (FAERS) của bệnh nhân và nhân viên y tế.
- **Nhãn hướng dẫn & Thu hồi**: Tra cứu chỉ định, chống chỉ định, cảnh báo liều lượng và thông tin thu hồi thuốc.
- **Phê duyệt & Đa danh mục**: Tiếp cận 28 cổng dữ liệu FDA gồm phê duyệt thiết bị y tế (510k), thực phẩm, mỹ phẩm.
## ⚙️ Cách Hoạt Động


```
Drug name / NDC / Query → openFDA REST API → 
Return adverse events, labeling, recalls, approval data
```

## 🚀 Cách Sử Dụng


### Universal

```markdown
# openFDA Rules
- Adverse events: count by reaction, seriousness, outcome.
- Drug labeling: indications_and_usage, warnings, contraindications.
- Report source: FAERS reports are voluntary — not complete surveillance.
- 28 endpoints available — specify which type of data needed.
```

## 💡 Kịch Bản Lập Trình Thực Tế


### 🧑‍💻 Nhà phát triển:
> "Hãy kiểm tra các báo cáo phản ứng phụ nghiêm trọng liên quan đến thuốc giảm đau Ibuprofen trên hệ thống openFDA gần đây."

### 🤖 AI Agent (Đã được trang bị Kỹ năng):
> "Tôi sẽ truy vấn trực tiếp cổng API openFDA của Cục quản lý Thực phẩm và Dược phẩm Hoa Kỳ để lập báo cáo an toàn dược phẩm:"
>
> 1. **Thiết lập bộ lọc phản ứng có hại (Adverse Events)**: Tôi xây dựng truy vấn lọc theo tên hoạt chất `ibuprofen` và giới hạn các báo cáo trong 6 tháng gần nhất.
> 2. **Trích xuất số liệu thống kê**: Tôi phân tích hàng nghìn báo cáo tự nguyện gửi về, tự động phân loại các phản ứng phụ xuất hiện nhiều nhất (như suy thận cấp, xuất huyết tiêu hóa, dị ứng da).
> 3. **Phân tích nhân khẩu học**: Tôi tổng hợp tỷ lệ phân bố phản ứng phụ theo độ tuổi và giới tính của bệnh nhân.
> 4. **Báo cáo Dược cảnh giác (Pharmacovigilance)**: Tôi trình bày báo cáo dạng bảng trực quan, cung cấp các thông số cảnh báo lâm sàng hữu ích cho bác sĩ và nhà nghiên cứu dược.
>
> *Báo cáo an toàn thuốc toàn diện từ dữ liệu FDA chính thống đã được chuẩn bị đầy đủ, giúp bạn đánh giá rủi ro lâm sàng tối ưu.*

## ⚠️ Lưu Ý & Gotchas


- **Voluntary reporting**: FAERS không capture tất cả adverse events — under-reporting phổ biến.
- **Report ≠ causation**: Adverse event report không chứng minh drug gây ra reaction.
- **No denominator**: Không biết bao nhiêu người dùng drug → không tính được incidence rate.
- **US-focused**: openFDA là US FDA data. Regulatory data các nước khác cần sources khác.
