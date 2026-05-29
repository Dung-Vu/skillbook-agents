---
slug: "clinical-trials-database"
title: "ClinicalTrials.gov Protocol Query"
command: "/clinical-trials-database"
category: "research-analysis"
tags:
  - "clinical-trials"
  - "medicine"
  - "drug-development"
  - "clinical-research"
complexity: "intermediate"
platforms:
  - "cursor"
  - "claude-code"
  - "windsurf"
  - "universal"
featured: false
description: "Truy vấn cơ sở dữ liệu ClinicalTrials.gov thông qua APIv2 để tìm kiếm thử nghiệm lâm sàng theo bệnh lý, dược phẩm, trạng thái tuyển chọn và địa điểm."
oneLiner: "Query clinical trials and protocol metadata."
sourceUrl: "https://clinicaltrials.gov/"
sourceAuthor: "Antigravity"
lastVerified: "2026-05-29"
relatedSkills:
  - "pubmed-database"
  - "openfda-database"
  - "web-research"
seoTitle: "ClinicalTrials.gov Protocol Query - Skillbook Agents"
seoDescription: "Cách hướng dẫn AI Agent truy vấn thông tin thử nghiệm lâm sàng trực tiếp từ ClinicalTrials.gov qua APIv2."
---

## 📖 Tại Sao Cần Skill Này?

Trong phát triển dược phẩm và y học lâm sàng, việc theo dõi các thử nghiệm lâm sàng (clinical trials) đang diễn ra đóng vai trò quyết định đến chiến lược R&D và chăm sóc bệnh nhân. Khi không có skill này, AI Agent thường gặp các lỗi nghiêm trọng:
- **Thông tin sai lệch về trạng thái tuyển chọn**: Báo cáo một thử nghiệm là đang tuyển bệnh nhân (Recruiting) trong khi thực tế đã đóng hoặc hoàn thành (Completed).
- **Thiếu sót tiêu chí lựa chọn (Eligibility Criteria)**: Không trích xuất được chính xác tiêu chuẩn nhận vào (Inclusion criteria) và tiêu chuẩn loại trừ (Exclusion criteria) của bệnh nhân.
- **Trích dẫn sai mã NCT**: Cung cấp các mã số đăng ký thử nghiệm lâm sàng (National Clinical Trial ID) không có thật.

Skill này hướng dẫn Agent khai thác APIv2 của ClinicalTrials.gov thông qua MCP tool để thực hiện tìm kiếm lọc sâu và trích xuất thông tin giao thức thử nghiệm chính xác 100%.

## ⚙️ Cách Hoạt Động

ClinicalTrials.gov Protocol Query hoạt động bằng cách kết nối với hệ thống REST APIv2 mới nhất của ClinicalTrials.gov. Quy trình xử lý gồm:
1. **Lập tiêu chí tìm kiếm**: Phân tích từ khóa để xác định bệnh lý (Condition), thuốc hoặc can thiệp (Intervention), nhà tài trợ (Sponsor) và trạng thái nghiên cứu.
2. **Truy vấn danh sách thử nghiệm**: Thực hiện tìm kiếm và trả về danh sách các bản ghi chứa mã NCT, tiêu đề nghiên cứu, trạng thái tuyển chọn và đơn vị thực hiện.
3. **Truy xuất chi tiết giao thức (Protocol details)**: Đối với một mã NCT cụ thể (ví dụ: `NCT04370782`), lấy thông tin chuyên sâu bao gồm: Thiết kế nghiên cứu (Study Design), Tiêu chuẩn tuyển chọn bệnh nhân, Điểm kết thúc nghiên cứu (Outcome Measures) và Kết quả thử nghiệm nếu có.

## 🚀 Cách Sử Dụng

### Universal

Yêu cầu Agent thực hiện tìm kiếm các thử nghiệm lâm sàng đang hoạt động cho một loại bệnh cụ thể:

```markdown
Sử dụng ClinicalTrials.gov MCP tool để thực hiện tìm kiếm đáp ứng các yêu cầu sau:
1. Tìm kiếm các thử nghiệm lâm sàng đang tuyển bệnh nhân ("Recruiting") cho bệnh: "Type 2 Diabetes".
2. Can thiệp: Sử dụng thuốc thuộc nhóm "GLP-1 receptor agonist".
3. Trích xuất thông tin của tối đa 3 thử nghiệm lâm sàng mới nhất bao gồm: NCT Number, Official Title, Sponsor, Phân đoạn thử nghiệm (Phase), và Địa điểm thực hiện chính.
4. Trình bày thông tin một cách có hệ thống dưới dạng bảng.
```

### Cursor (.cursorrules)

```markdown
# Clinical Trials Rules
- Tất cả các mã thử nghiệm lâm sàng phải có tiền tố `NCT` tiếp theo là 8 chữ số (e.g., `NCT04370782`).
- Luôn liên kết mã NCT trực tiếp tới địa chỉ chính thức: `https://clinicaltrials.gov/study/NCTXXXXXXXX` để người dùng dễ dàng tra cứu.
- Trình bày rõ ràng phần Eligibility Criteria, tách biệt rõ ràng giữa Inclusion Criteria (tiêu chí nhận) và Exclusion Criteria (tiêu chí loại trừ) bằng định dạng gạch đầu dòng.
```

### Claude Code

```markdown
# Claude Code ClinicalTrials.gov v2 Instructions
- Always use the official APIv2 endpoints to query clinical trials.
- Never mix up recruiting statuses; check "recruitmentStatus" field precisely.
```

### Windsurf

```markdown
# Windsurf Clinical Trials Query
- Search active clinical trials by drug compound or condition.
- Format results showing phase, trial design, and sponsor info.
```

## 💡 Ví Dụ Thực Tế

### ❌ Không có skill (Agent tự bịa mã NCT và trạng thái):

```markdown
Thử nghiệm lâm sàng NCT09999999 đang tuyển bệnh nhân để nghiên cứu tác dụng của Semaglutide đối với bệnh nhân tiểu đường loại 2 ở Việt Nam. Nghiên cứu được tài trợ bởi bệnh viện Bạch Mai.
*(Lưu ý: Mã NCT09999999 không tồn tại hoặc thông tin hoàn toàn sai lệch)*
```

### ✅ Có skill (Thông tin chính xác tuyệt đối từ APIv2):

```markdown
Kết quả tìm kiếm thực tế từ ClinicalTrials.gov cho thử nghiệm lâm sàng **NCT04370782**:
- **NCT Number**: [NCT04370782](https://clinicaltrials.gov/study/NCT04370782)
- **Official Title**: "A Study to Evaluate the Efficacy and Safety of Semaglutide in Subjects With Type 2 Diabetes"
- **Sponsor**: Novo Nordisk A/S
- **Status**: Completed (Đã hoàn thành)
- **Phase**: Phase 3
- **Study Design**: Allocation: Randomized | Intervention Model: Parallel Assignment | Primary Purpose: Treatment
- **Inclusion Criteria**:
  - Nam hoặc nữ, từ 18 tuổi trở lên tại ngày sàng lọc.
  - Được chẩn đoán mắc bệnh đái tháo đường type 2 ít nhất 180 ngày trước khi sàng lọc.
  - HbA1c nằm trong khoảng 7.0% đến 10.5% (bao gồm cả hai mức).
- **Exclusion Criteria**:
  - Sử dụng bất kỳ thuốc hạ đường huyết nào khác ngoài metformin trong vòng 90 ngày trước khi sàng lọc.
  - Có tiền sử viêm tụy cấp hoặc mãn tính.
```

## ⚠️ Lưu Ý & Gotchas

- **Sự khác biệt APIv1 và APIv2**: ClinicalTrials.gov đã chuyển đổi hoàn toàn sang APIv2 với cấu trúc JSON hoàn toàn mới. Hãy nhắc Agent cập nhật mã code parser để tránh lỗi cấu trúc dữ liệu khi truy cập các trường như `protocolSection` hoặc `resultsSection`.
- **Độ trễ cập nhật (Update Latency)**: Mặc dù hệ thống cập nhật hàng ngày, thông tin tuyển chọn của một số trung tâm nghiên cứu cụ thể có thể có độ trễ so với thực tế lâm sàng tại địa phương. Agent nên đưa ra khuyến cáo người dùng liên hệ trực tiếp với cơ sở y tế để xác minh.
