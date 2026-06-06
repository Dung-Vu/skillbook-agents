---
slug: clinical-trials-database
title: ClinicalTrials.gov Search
command: /clinical-trials-database
category: bioinformatics-genomics
tags:
  - clinical-trials
  - ctgov
  - drug-development
  - recruiting
  - phases
complexity: intermediate
platforms:
  - cursor
  - claude-code
  - windsurf
  - gemini-cli
  - universal
featured: false
description: Tra cứu dữ liệu các cuộc thử nghiệm lâm sàng trên người của các loại thuốc, vaccine hoặc phương pháp điều trị mới trên trang ClinicalTrials.gov. Hỗ trợ đắc lực cho các bác sĩ, nhà nghiên cứu và bệnh nhân cần tìm phương pháp điều trị thử nghiệm.
oneLiner: Tra cứu thông tin thử nghiệm lâm sàng thuốc và vắc-xin trên thế giới.
sourceUrl: 'https://clinicaltrials.gov/'
sourceAuthor: Google DeepMind
lastVerified: '2026-05-30'
relatedSkills: []
seoTitle: ClinicalTrials.gov Search — Skillbook Agents
seoDescription: >-
  Hướng dẫn Agent tìm kiếm và phân tích clinical trials từ ClinicalTrials.gov
  APIv2.
provider: antigravity
---

## 📖 Tại Sao Cần Skill Này?

ClinicalTrials.gov là kho lưu trữ thông tin lớn nhất thế giới về các cuộc thử nghiệm lâm sàng (thử nghiệm trên người) đối với các loại thuốc và phương pháp chữa bệnh mới, với hơn 480.000 cuộc thử nghiệm. 

Khi các nhà nghiên cứu cần theo dõi tiến độ phát triển thuốc mới, hoặc khi bác sĩ và bệnh nhân muốn tìm kiếm các cuộc thử nghiệm đang tuyển tình nguyện viên để tham gia điều trị thử nghiệm, việc tìm kiếm thủ công sẽ rất phức tạp. Skill này giúp trợ lý AI tự động lọc, thống kê và kết xuất thông tin chi tiết về các dự án thử nghiệm lâm sàng trên toàn cầu.

## ⚙️ Cách Hoạt Động

Quy trình hoạt động:
1. **Lên từ khóa tìm kiếm**: Tìm theo tên bệnh, tên thuốc, tên công ty tài trợ, địa điểm hoặc giai đoạn thử nghiệm.
2. **Truy cập dữ liệu**: Kết nối trực tiếp qua cổng API của ClinicalTrials.gov để lấy thông tin mới nhất.
3. **Phân tích thông tin**: Lọc ra các thông tin quan trọng như: tiêu chuẩn lựa chọn bệnh nhân, địa chỉ bệnh viện thực hiện và trạng thái hiện tại (đang tuyển người, đã hoàn thành, v.v.).

## 🚀 Cách Sử Dụng

1. Tìm kiếm bằng cách lọc: tên bệnh, loại thuốc/vắc-xin sử dụng, nơi thực hiện, giai đoạn thử nghiệm (Phase) và trạng thái tuyển chọn (Status).
2. Nếu có sẵn mã định danh cuộc thử nghiệm (NCT ID, ví dụ: `NCT12345678`), hãy nhập trực tiếp để xem ngay thông tin chi tiết của cuộc thử nghiệm đó.
3. Lưu ý các giai đoạn thử nghiệm: Giai đoạn 1 (kiểm tra độ an toàn trên nhóm nhỏ), Giai đoạn 2 (kiểm tra hiệu quả), Giai đoạn 3 (thử nghiệm diện rộng để xác nhận), Giai đoạn 4 (theo dõi sau khi thuốc ra thị trường).

## 💡 Kịch Bản Lập Trình Thực Tế

### Người dùng:
> "Hãy tìm cho tôi các cuộc thử nghiệm lâm sàng Giai đoạn III mới nhất đang tuyển bệnh nhân điều trị bệnh Alzheimer bằng thuốc kháng thể đơn dòng."

### Trợ lý AI:
> "Tôi sẽ thực hiện theo các bước sau:
> 1. Thiết lập tìm kiếm với từ khóa bệnh Alzheimer, Giai đoạn III (Phase 3), Trạng thái tuyển dụng (Recruiting) và phương pháp kháng thể đơn dòng.
> 2. Truy cập cơ sở dữ liệu để lấy danh sách các cuộc thử nghiệm trùng khớp.
> 3. Lọc ra các thông tin quan trọng: tên cuộc thử nghiệm, hãng dược tài trợ, tiêu chuẩn để bệnh nhân được tham gia và danh sách các bệnh viện đang tiếp nhận hồ sơ.
> 4. Gửi báo cáo tổng hợp chi tiết cho bạn."

## ⚠️ Lưu Ý & Gotchas

- **Đăng ký không đồng nghĩa với chất lượng**: Tất cả các thử nghiệm đều bắt buộc phải đăng ký thông tin lên đây, nhưng chất lượng nghiên cứu của từng bên có thể khác nhau rất nhiều.
- **Thông tin có độ trễ**: Trạng thái tuyển người hiển thị trực tuyến có thể bị chậm vài tuần so với thực tế tại các bệnh viện.
- **Kết quả thử nghiệm**: Nhiều cuộc thử nghiệm không công bố kết quả lên trang web này. Bạn nên tìm kiếm thêm các bài báo khoa học liên quan trên thư viện y khoa PubMed.
- **Sử dụng phiên bản API mới**: Đảm bảo sử dụng phiên bản kết nối APIv2 mới nhất để tránh lỗi truy xuất dữ liệu.
