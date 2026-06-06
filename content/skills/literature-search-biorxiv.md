---
slug: literature-search-biorxiv
title: bioRxiv/medRxiv Preprints
command: /literature-search-biorxiv
category: research-analysis
tags:
  - biorxiv
  - medrxiv
  - preprints
  - biology
  - life-sciences
complexity: starter
platforms:
  - cursor
  - claude-code
  - windsurf
  - gemini-cli
  - universal
featured: false
description: Tìm kiếm và xem các nghiên cứu y sinh học mới nhất chưa qua phản biện khoa học trên bioRxiv và medRxiv theo các chuyên mục và thời gian gần nhất.
oneLiner: Tìm kiếm bài báo nghiên cứu y học và sinh học mới nhất trên bioRxiv/medRxiv.
sourceUrl: 'https://www.biorxiv.org/'
sourceAuthor: Google DeepMind
lastVerified: '2026-05-30'
relatedSkills:
  - literature-search-arxiv
  - pubmed-database
  - literature-search-europepmc
seoTitle: bioRxiv/medRxiv Preprints — Skillbook Agents
seoDescription: Hướng dẫn Agent browse và download preprints sinh học từ bioRxiv và medRxiv.
provider: antigravity
---

## 📖 Tại Sao Cần Skill Này?

bioRxiv (về sinh học) và medRxiv (về y học) là hai trang web lớn nơi các nhà nghiên cứu chia sẻ các khám phá y sinh học mới nhất trước khi được phê duyệt đăng báo. Kỹ năng này giúp bạn theo dõi các nghiên cứu y học, dịch bệnh hay gen di truyền mới nhất một cách nhanh chóng.

## ⚙️ Cách Hoạt Động

Quy trình tìm kiếm:
1. Bạn cung cấp mã số bài viết (mã DOI) hoặc chọn một khoảng thời gian gần đây (ví dụ: 1-2 tuần gần nhất) kèm theo chuyên ngành muốn tìm.
2. Trợ lý kết nối với hệ thống bioRxiv/medRxiv để lấy dữ liệu.
3. Trợ lý trả về danh sách bài báo cùng nội dung tóm tắt để bạn nắm bắt nhanh.

## 🚀 Cách Sử Dụng

- Chọn khoảng thời gian ngắn (tốt nhất là trong vòng 1 đến 4 tuần gần đây) khi tìm kiếm để hệ thống không bị quá tải.
- Chỉ định rõ chuyên ngành (như di truyền học, thần kinh học, miễn dịch học) để tìm kiếm chính xác hơn.
- Cung cấp mã DOI nếu bạn muốn xem chi tiết một bài viết cụ thể.

## 💡 Kịch Bản Lập Trình Thực Tế

### Người dùng:
> "Tìm giúp tôi các nghiên cứu mới nhất trong 2 tuần qua về ứng dụng AI trong việc phân tích tế bào trên bioRxiv."

### Trợ lý:
> "Tôi đã tìm kiếm trên bioRxiv trong 2 tuần qua với từ khóa 'AI' trong mục sinh tin học (Bioinformatics):
> 1. Nghiên cứu 'Dự đoán cấu trúc tế bào bằng mô hình học máy nâng cao' - Tác giả B.
> 2. Tóm tắt: Nhóm nghiên cứu đề xuất một công cụ AI mới giúp tăng tốc độ phân tích tế bào...
> 3. Đây là mã DOI của bài viết để bạn tham khảo: [Mã DOI]."

## ⚠️ Lưu Ý & Gotchas

- **Chưa qua kiểm duyệt**: Đây là các bản thảo chưa qua hội đồng khoa học phê duyệt chính thức. Đặc biệt, không được dùng các thông tin y học trên medRxiv để tự đưa ra quyết định chữa bệnh lâm sàng.
- **Giới hạn thời gian**: Tránh tìm kiếm một khoảng thời gian quá dài (ví dụ vài năm) vì hệ thống sẽ bị lỗi do lượng dữ liệu quá lớn.
