---
slug: "openfda-database"
title: "openFDA Safety Regulatory Search"
command: "/openfda-database"
category: "tool-integration"
tags:
  - "openfda"
  - "fda"
  - "adverse-events"
  - "drug-safety"
  - "recalls"
complexity: "advanced"
platforms:
  - "cursor"
  - "claude-code"
  - "windsurf"
  - "universal"
featured: false
description: "Khai thác kho dữ liệu mở openFDA của Cục quản lý Thực phẩm và Dược phẩm Hoa Kỳ để tra cứu tác dụng phụ của thuốc, các vụ thu hồi sản phẩm và thông tin dán nhãn."
oneLiner: "Query drug safety, adverse events, and recalls via openFDA."
sourceUrl: "https://open.fda.gov/"
sourceAuthor: "Antigravity"
lastVerified: "2026-05-29"
relatedSkills:
  - "clinical-trials-database"
  - "pubmed-database"
  - "web-research"
seoTitle: "openFDA Safety Regulatory Search - Skillbook Agents"
seoDescription: "Cách hướng dẫn AI Agent truy vấn dữ liệu tác dụng phụ của thuốc và thu hồi sản phẩm từ openFDA API."
---

## 📖 Tại Sao Cần Skill Này?

Trong lĩnh vực Dược cảnh giác (Pharmacovigilance) và giám sát thị trường, việc theo dõi các phản ứng có hại của thuốc (Adverse Drug Events) và các quyết định thu hồi sản phẩm của FDA là tối quan trọng để đảm bảo an toàn cho bệnh nhân. AI Agent thông thường gặp rất nhiều khó khăn:
- **Thiếu khả năng phân tích dữ liệu lớn**: Không thể tự tổng hợp hàng triệu báo cáo phản ứng phụ của một dược chất để tìm ra xu hướng.
- **Nhầm lẫn giữa các tên biệt dược**: Nhầm tên thương mại (Brand name, ví dụ: Lipitor) với tên hoạt chất (Generic name, ví dụ: Atorvastatin).
- **Mơ hồ về pháp lý**: Không nắm được các cảnh báo hộp đen (Black box warnings) mới nhất được ghi trên nhãn thuốc chính thức.

Skill này cung cấp các chỉ dẫn giúp Agent khai thác hệ thống dữ liệu mở openFDA qua các cổng API tương ứng để thực hiện phân tích thống kê phản ứng có hại, kiểm tra nhãn thuốc và theo dõi các đợt thu hồi sản phẩm thực tế.

## ⚙️ Cách Hoạt Động

openFDA Safety Regulatory Search hoạt động bằng cách hướng dẫn Agent gọi các REST API chính thức của dự án openFDA. Hệ thống gồm các phân hệ chính:
1. **Drug Adverse Events (/drug/event.json)**: Chứa hàng triệu báo cáo về các phản ứng phụ từ các bác sĩ, nhà sản xuất và người tiêu dùng. Cho phép Agent thực hiện các truy vấn thống kê gom nhóm (Aggregation query) để tìm các triệu chứng phụ phổ biến nhất.
2. **Drug Labeling (/drug/label.json)**: Tài liệu nhãn thuốc chính thức được FDA phê duyệt, bao gồm chỉ định, liều lượng, cảnh báo nguy hiểm và tương tác thuốc.
3. **Product Recalls (/drug/enforcement.json)**: Thông tin chi tiết về các đợt thu hồi thuốc lỗi, nhiễm bẩn hay sai nhãn mác trên thị trường Hoa Kỳ.

## 🚀 Cách Sử Dụng

### Universal

Yêu cầu Agent thực hiện thống kê các tác dụng phụ phổ biến nhất của một hoạt chất cụ thể sử dụng openFDA API:

```markdown
Hãy sử dụng openFDA MCP tool để phân tích dữ liệu an toàn của dược chất sau:
1. Hoạt chất: "Atorvastatin"
2. Truy vấn phân hệ `Drug Adverse Events` để thống kê 5 phản ứng có hại (adverse reactions) được báo cáo nhiều nhất.
3. Sử dụng tính năng gom nhóm (aggregation) theo trường `patient.reaction.reactionmeddrapt.exact`.
4. Truy xuất nhãn thuốc chính thức của Atorvastatin trong phân hệ `Drug Labeling` để tìm phần cảnh báo "Warnings and Precautions" chính quy.
5. Tổng hợp báo cáo phân tích rủi ro chi tiết.
```

### Cursor (.cursorrules)

```markdown
# openFDA API Rules
- Luôn sử dụng cú pháp tìm kiếm chính xác của openFDA với các trường dữ liệu chuẩn, ví dụ: `search=patient.drug.openfda.generic_name:"atorvastatin"`.
- Khi tính toán thống kê phản ứng phụ, luôn sử dụng tham số `count=patient.reaction.reactionmeddrapt.exact` để trả về số liệu tổng hợp thay vì các bản ghi đơn lẻ.
- Trình bày kết quả thống kê bằng biểu đồ thanh dạng văn bản (text-based bar charts) hoặc bảng số liệu rõ ràng xếp theo thứ tự giảm dần của tần suất xuất hiện.
```

### Claude Code

```markdown
# Claude Code openFDA Instructions
- Write robust JavaScript/Python queries targeting openFDA API endpoints.
- Always implement query encoding properly (e.g. replacing spaces with "+" or "%20").
```

### Windsurf

```markdown
# Windsurf openFDA Integration
- Access food, drug, and device recall logs using openFDA enforcement endpoints.
- Auto-extract NDC (National Drug Code) details from labeling results.
```

## 💡 Ví Dụ Thực Tế

### ❌ Không có skill (Agent phỏng đoán tác dụng phụ không có số liệu):

```markdown
Atorvastatin có tác dụng phụ chính là gây đau cơ và mệt mỏi. Nhiều người dùng báo cáo bị ảnh hưởng gan. Tuy nhiên tôi không có số liệu thống kê cụ thể của FDA.
*(Lưu ý: Thiếu tính khoa học và không cung cấp được dẫn chứng thuyết phục từ nguồn uy tín)*
```

### ✅ Có skill (Báo cáo phân tích dữ liệu thực tế từ openFDA):

```markdown
Dữ liệu thống kê phản ứng có hại từ **openFDA API (Drug Adverse Events)** cho hoạt chất **Atorvastatin**:

| Hạng | Triệu chứng (Phản ứng MedDRA) | Số lượng báo cáo | Tỷ lệ (%) |
|------|------------------------------|-------------------|-----------|
| 1    | Myalgia (Đau cơ)             | 45,210            | 12.4%     |
| 2    | Fatigue (Mệt mỏi)            | 28,140            | 7.7%      |
| 3    | Headache (Đau đầu)           | 22,950            | 6.3%      |
| 4    | Diarrhoea (Tiêu chảy)        | 19,410            | 5.3%      |
| 5    | Nausea (Buồn nôn)            | 17,200            | 4.7%      |

**Thông tin nhãn cảnh báo chính thức (FDA Label Warnings)**:
- **Cảnh báo về cơ (Myopathy/Rhabdomyolysis)**: Atorvastatin có nguy cơ gây bệnh về cơ (đau cơ, yếu cơ kèm theo tăng men creatine kinase - CK). Nguy cơ này tăng lên khi dùng kết hợp với một số thuốc ức chế CYP3A4 mạnh.
- **Tác động gan (Hepatic dysfunction)**: Khuyến cáo kiểm tra men gan trước khi bắt đầu điều trị và khi có dấu hiệu lâm sàng nghi ngờ tổn thương gan.
```

## ⚠️ Lưu Ý & Gotchas

- **Mối quan hệ nhân quả (Causality)**: Báo cáo phản ứng phụ trong openFDA (hệ thống FAERS) chỉ mang tính chất ghi nhận hiện tượng xảy ra *sau khi* dùng thuốc. Nó không đồng nghĩa với việc dược chất đó chắc chắn là nguyên nhân trực tiếp gây ra triệu chứng đó. Hãy nhắc Agent luôn đưa ra khuyến cáo khoa học này cho người dùng.
- **Giới hạn kết quả (Limit & Offsets)**: Mặc định mỗi truy vấn chỉ trả về tối đa 10 kết quả. Muốn lấy nhiều hơn, Agent cần sử dụng tham số `limit` (tối đa 99 cho truy vấn thông thường, 1000 cho truy vấn gom nhóm) hoặc thực hiện phân trang.
