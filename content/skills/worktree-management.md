---
category: code-engineering
command: /worktree-management
complexity: advanced
description: Quản lý và sử dụng Git Worktrees để lập trình song song nhiều tính năng khác nhau trên cùng một dự án mà không cần chuyển đổi nhánh qua lại hoặc làm ảnh hưởng đến mã nguồn hiện tại.
featured: false
lastVerified: '2026-06-03'
oneLiner: Lập trình song song nhiều nhánh Git độc lập trên cùng một dự án bằng Git Worktrees.
platforms:
  - universal
  - cursor
  - windsurf
  - claude-code
  - mcp
provider: minimax
relatedSkills:
  - plan-mode
  - mavis
seoDescription: Hướng dẫn sử dụng Git Worktree để phát triển song song nhiều tính năng, tạo nhánh sửa lỗi độc lập và tự động dọn dẹp thư mục làm việc.
seoTitle: Worktree Management - Quản lý nhánh làm việc song song bằng Git Worktree
slug: worktree-management
sourceAuthor: Minimax
sourceUrl: ''
tags:
  - git
  - worktree
  - branch
  - vcs
title: Worktree Management
---

## 📖 Tại Sao Cần Skill Này?

Khi đang viết dở một tính năng quan trọng và bất ngờ nhận yêu cầu sửa một lỗi gấp ở nhánh khác, bạn thường phải lưu tạm code đang viết (git stash) hoặc chuyển đổi nhánh qua lại rất bất tiện và dễ gây nhầm lẫn. Git Worktree giúp bạn tạo ra một thư mục làm việc hoàn toàn độc lập cho nhánh mới ngay trên máy tính của mình. Bạn có thể mở cả hai nhánh song song, sửa lỗi và chạy thử nghiệm ở nhánh này mà không lo làm bẩn hoặc ảnh hưởng đến code đang viết dở ở nhánh kia.

- **Làm việc song song mượt mà**: Chạy và sửa lỗi trên nhiều nhánh cùng một lúc mà không cần chuyển đổi qua lại.
- **Môi trường cách ly**: Tránh xung đột mã nguồn và không làm gián đoạn máy chủ thử nghiệm đang chạy.
- **Dọn dẹp gọn gàng**: Dễ dàng xóa bỏ thư mục nhánh phụ sau khi công việc đã hoàn thành để tiết kiệm bộ nhớ máy tính.

## ⚙️ Cách Hoạt Động

1. **Tìm nhánh chính**: Kiểm tra và xác định tên nhánh mặc định hiện tại của dự án (ví dụ: `main` hoặc `master`).
2. **Khởi tạo thư mục làm việc phụ (Worktree)**: Tạo một thư mục con riêng liên kết trực tiếp với nhánh cần xử lý.
3. **Lập trình và kiểm thử**: Thực hiện toàn bộ công việc chỉnh sửa và chạy thử nghiệm bên trong thư mục phụ này.
4. **Đồng bộ và dọn dẹp**: Đẩy code lên GitHub, sau đó xóa thư mục phụ này để giải phóng không gian ổ đĩa.

## 🚀 Cách Sử Dụng

- Yêu cầu trợ lý tạo một thư mục làm việc phụ (worktree) để xử lý một tính năng mới hoặc sửa lỗi gấp ở một nhánh khác.
- Trợ lý sẽ tự động thực hiện các câu lệnh Git để thiết lập thư mục và dọn dẹp sạch sẽ sau khi bạn hoàn thành công việc.

## 💡 Kịch Bản Lập Trình Thực Tế

### Người dùng:
> "Tôi đang code dở tính năng ở nhánh chính nhưng cần sửa gấp lỗi giao diện ở nhánh fix-bug. Hãy tạo thư mục làm việc riêng để tôi sửa lỗi này mà không làm ảnh hưởng đến code hiện tại."

### Trợ lý:
> "Tôi đã xử lý yêu cầu của bạn:
> 1. Tôi tạo một thư mục làm việc phụ liên kết với nhánh `fix-bug` tại địa chỉ `.worktrees/fix-bug-layout`.
> 2. Bây giờ bạn có thể mở thư mục này để sửa lỗi giao diện độc lập, trong khi code đang viết dở ở thư mục gốc vẫn được giữ nguyên an toàn."

## ⚠️ Lưu Ý & Gotchas

- **Tránh xung đột cổng mạng (Port Conflict)**: Nếu bạn chạy máy chủ thử nghiệm (dev server) ở cả thư mục gốc và thư mục phụ cùng lúc, chương trình có thể bị lỗi do trùng cổng mạng. Hãy nhớ thay đổi cổng mạng trước khi khởi chạy thử nghiệm ở thư mục phụ.
- **Quản lý thư viện cài đặt**: Tránh sao chép trực tiếp thư mục thư viện (`node_modules`) giữa các thư mục làm việc để tránh lỗi phiên bản hoặc làm hỏng các liên kết hệ thống.
