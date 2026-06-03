---
slug: clickhouse-best-practices
title: ClickHouse Best Practices
command: ''
category: data-knowledge
tags:
  - schema-design
  - clickhouse
  - database-optimization
  - query-tuning
complexity: advanced
platforms:
  - universal
  - cursor
  - windsurf
  - claude-code
  - mcp
featured: false
description: >-
  Chuyên gia tối ưu hóa cơ sở dữ liệu ClickHouse. Cung cấp các quy tắc kiểm tra
  cấu trúc schema, tối ưu hóa câu lệnh truy vấn SELECT/JOIN, chiến lược phân
  vùng partition và tối ưu hiệu suất ghi dữ liệu.
oneLiner: Hướng dẫn tối ưu hóa schema và hiệu suất truy vấn ClickHouse.
sourceUrl: ''
sourceAuthor: Minimax
lastVerified: '2026-06-03'
relatedSkills:
  - fullstack-dev
  - code-review
  - ai-agents-architect
seoTitle: ClickHouse Best Practices - Minimax Skill for AI Agents
seoDescription: >-
  Bộ quy tắc 28 điểm giúp kiểm tra thiết kế bảng (schema), truy vấn dữ liệu lớn
  và ghi dữ liệu tối ưu trong ClickHouse.
provider: minimax
---

## 📖 Tại Sao AI Agent Của Bạn Cần Kỹ Năng Này?

ClickHouse là cơ sở dữ liệu hướng cột cực nhanh, nhưng nó đòi hỏi tư duy thiết kế khác biệt hoàn toàn so với SQL truyền thống (như PostgreSQL, MySQL). Thiết kế sai khóa ORDER BY, lạm dụng cập nhật (mutations), hay phân vùng quá nhỏ có thể khiến hệ thống cạn kiệt tài nguyên.

## ⚙️ Cơ Chế Hoạt Động & Quy Trình Tư Duy

Quy trình đánh giá chất lượng schema và truy vấn ClickHouse:

```
[SQL Schema/Query] -> [28 Rules Check] -> [Identify Anti-patterns] -> [Propose Refactored SQL] -> [Ingestion Advice]
```

1. **Schema Check**: Kiểm tra kiểu dữ liệu, khóa ORDER BY (luôn xếp từ độ chọn lọc thấp đến cao), và chiến lược ReplacingMergeTree.
2. **Query Check**: Tối ưu hóa các truy vấn JOIN (ưu tiên chuyển thành mảng hoặc sử dụng dict), loại bỏ các phép toán không cần thiết trên cột lớn.
3. **Ingestion Check**: Đảm bảo kích thước batch ghi dữ liệu đủ lớn (từ 10,000 đến 100,000 dòng/batch).

## 🚀 Bộ Quy Tắc Chỉ Dẫn Cho Agent (Prompt Guidelines)

1. Khóa `ORDER BY` của bảng phải là tập con của khóa `PRIMARY KEY` nếu chúng khác nhau.
2. Tránh sử dụng kiểu dữ liệu `Nullable` nếu không thực sự cần thiết, thay thế bằng các giá trị mặc định (như rỗng hoặc 0) để tiết kiệm dung lượng.
3. Sử dụng các hàm tổng hợp đặc thù của ClickHouse (như `uniqCombined`, `groupArray`) để tăng tốc xử lý.

## ⚠️ Cảnh Báo Vận Hành & Mẹo Tối Ưu (Developer Gotchas)

- **Lạm dụng UPDATE/DELETE**: ClickHouse không được tối ưu cho các thao tác cập nhật từng dòng. Hãy sử dụng cơ chế `ReplacingMergeTree` hoặc phân vùng để quản lý vòng đời dữ liệu.
- **Quá nhiều phân vùng (Over-partitioning)**: Chia phân vùng theo ngày cho dữ liệu nhỏ sẽ tạo ra quá nhiều file trên ổ cứng. Hãy phân vùng theo tháng.
