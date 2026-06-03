---
slug: sales-power-map
title: Sales Power Map
command: ''
category: workflow-orchestration
tags:
  - b2b-sales
  - power-map
  - decision-makers
  - org-chart
  - customer-discovery
complexity: advanced
platforms:
  - universal
  - cursor
  - windsurf
  - claude-code
  - mcp
featured: false
description: >-
  Hệ thống lập bản đồ quyền lực doanh nghiệp B2B (Power Map). Hỗ trợ xác định
  người ra quyết định, phân tích mối quan hệ nội bộ, đánh giá mức độ ảnh hưởng
  và xây dựng chiến lược tiếp cận khách hàng lớn.
oneLiner: Lập bản đồ quyền lực và chiến lược tiếp cận khách hàng doanh nghiệp B2B.
sourceUrl: ''
sourceAuthor: Minimax
lastVerified: '2026-06-03'
relatedSkills:
  - prd-assistant
  - topic-tracker
seoTitle: Sales Power Map - Minimax Skill for AI Agents
seoDescription: >-
  Cách tích hợp kỹ năng Sales Power Map để AI Agent tự động vẽ sơ đồ tổ chức
  khách hàng, phân loại vai trò ra quyết định và lập kế hoạch tiếp cận.
provider: minimax
---

## 📖 Tại Sao AI Agent Của Bạn Cần Kỹ Năng Này?

Trong bán hàng doanh nghiệp lớn (B2B Enterprise), việc không tiếp cận đúng người ra quyết định (Decision Maker) hoặc không hiểu sơ đồ quyền lực ngầm sẽ làm hỏng thương vụ. Kỹ năng này hướng dẫn Agent phân tích sơ đồ tổ chức, gán vai trò quyền lực (Người quyết định, Người ảnh hưởng, Người chặn đường), vẽ sơ đồ quan hệ Mermaid và đề xuất lộ trình tiếp cận tối ưu.

## ⚙️ Cơ Chế Hoạt Động & Quy Trình Tư Duy

Quy trình lập bản đồ quyền lực:
```
Thong tin khach hang --> Phan tich so do to chuc --> Ve so do quan he Mermaid --> Xay dung kich ban tiep can
```
1. **Thu thập dữ liệu**: Nhận thông tin về công ty mục tiêu, danh sách nhân sự chủ chốt và phòng ban liên quan.
2. **Phân tích vai trò**: Phân loại đối tượng thành các nhóm: Decision Maker (DM), Influencer, Blocker, Champion.
3. **Mô hình hóa trực quan**: Vẽ sơ đồ tổ chức và các mối liên kết ngầm bằng cú pháp sơ đồ Mermaid.
4. **Xây dựng kịch bản**: Thiết kế nội dung tiếp cận (Outreach pitch) được cá nhân hóa cho từng vai trò cụ thể.

## 🚀 Bộ Quy Tắc Chỉ Dẫn Cho Agent (Prompt Guidelines)

- Luôn yêu cầu thông tin về ngành nghề, quy mô doanh nghiệp và sản phẩm B2B đang chào bán để cá nhân hóa sơ đồ.
- Sơ đồ quan hệ Mermaid phải thể hiện rõ mức độ ảnh hưởng (Mạnh, Trung bình, Yếu) và thái độ đối với giải pháp (Ủng hộ, Trung lập, Phản đối).
- Đề xuất kịch bản tiếp cận riêng biệt cho từng đối tượng DM, tránh dùng chung một email chào hàng mẫu cho tất cả các cấp bậc.

## ⚠️ Cảnh Báo Vận Hành & Mẹo Tối Ưu (Developer Gotchas)

- **Giả định thiếu căn cứ**: Tránh tự vẽ ra sơ đồ quan hệ gia đình hoặc quan hệ cá nhân của các nhân sự khi chưa có dữ liệu thực tế kiểm chứng.
- **Quá tải thông tin**: Chỉ tập trung lập bản đồ cho những người có liên quan trực tiếp đến quy trình mua hàng, không vẽ toàn bộ nhân viên công ty.
