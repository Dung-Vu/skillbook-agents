---
category: code-engineering
command: /worktree-management
complexity: advanced
description: >-
  Quản lý và thao tác với Git Worktrees để phát triển song song nhiều tính năng
  trên cùng một repository mà không làm bẩn thư mục làm việc hiện tại. Hỗ trợ
  phát hiện nhánh mặc định, tạo nhánh mới và dọn dẹp worktree sau khi hoàn
  thành.
featured: false
lastVerified: '2026-06-03'
oneLiner: >-
  Phát triển song song nhiều nhánh Git độc lập trên cùng một repository bằng Git
  Worktrees.
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
seoDescription: >-
  Quy trình sử dụng Git Worktree để phát triển song song. Hướng dẫn tạo nhánh
  feature/fix, rebase và tự động dọn dẹp.
seoTitle: Worktree Management - Minimax Skill for AI Agents
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

Trong môi trường làm việc nhóm, việc chỉnh sửa mã nguồn trực tiếp trên nhánh chính thường gây ra xung đột Git và làm gián đoạn các server phát triển đang chạy chế độ theo dõi file (watch mode). Git Worktrees giúp Agent cô lập hoàn toàn môi trường code của từng tính năng trên các thư mục riêng biệt, giúp phát triển song song nhiều tính năng và chạy kiểm thử invasive độc lập an toàn.

---

## ⚙️ Cách Hoạt Động

Quy trình quản lý Git Worktree:
1. **Phát hiện Nhánh mặc định**: Tìm nhánh chính qua lệnh remote (ví dụ: `main` hoặc `dev`), tránh viết cứng tên nhánh.
2. **Khởi tạo Worktree**: Sử dụng đường dẫn tuyệt đối tạo thư mục mới dưới dạng `$PROJECT_ROOT/.worktrees/feature-xxx` liên kết với nhánh Git tương ứng.
3. **Cài đặt & Lập trình**: Di chuyển vào thư mục worktree mới, chạy cài đặt dependencies (nếu có) và thực hiện code/kiểm thử tại đây.
4. **Đồng bộ & Rebase**: Chạy `git rebase` với nhánh chính để giải quyết xung đột trước khi tạo pull request.
5. **Dọn dẹp**: Xóa thư mục worktree sau khi PR được merge bằng lệnh `git worktree remove`.

Sơ đồ quy trình:
```
[Yêu cầu code / Nhánh chính] ➔ 🔍 [Tìm tên nhánh chính từ Git remote] ➔ 📁 [Tạo worktree dưới .worktrees/]
                                    ➔ 💻 [Chạy code & Kiểm thử cô lập] ➔ 🧹 [Rebase & PR ➔ Xóa dọn dẹp worktree]
```

---

## 🚀 Cách Sử Dụng

```markdown
# QUY TẮC QUẢN LÝ GIT WORKTREE
- **Môi trường code cô lập**: Không được chỉnh sửa bất kỳ tệp tin nào của nhánh chính ở thư mục gốc. Tất cả các chỉnh sửa mã nguồn bắt buộc phải thực hiện trong thư mục con worktree.
- **Đường dẫn tuyệt đối**: Luôn dùng lệnh `git rev-parse --show-toplevel` để phân giải thư mục gốc trước khi tạo worktree, tránh làm lệch thư mục đích do di chuyển cwd.
- **Tên nhánh chuẩn hóa**: Nhánh tự tạo phải bắt đầu bằng tiền tố `feature/<kebab-case>` hoặc `fix/<kebab-case>`.
- **Dọn dẹp sau khi hoàn thành**: Luôn chạy lệnh `git worktree prune` và xóa nhánh local sau khi code đã được merge thành công lên repo từ xa.
```

---

## 💡 Kịch Bản Lập Trình Thực Tế

### Nhà phát triển:
> "Hãy hướng dẫn tôi cách thiết lập và sử dụng kỹ năng Worktree Management để Phát triển song song nhiều nhánh Git độc lập trên cùng một repository bằng Git Worktrees."

### AI Agent (Đã được trang bị Kỹ năng):
> "Tôi đã sẵn sàng. Dưới đây là kịch bản vận hành thực tế cho kỹ năng Worktree Management:
> 1. Thiết lập các thông số cấu hình và tham số đầu vào cần thiết cho hệ thống.
> 2. Thực thi tuần tự các bước xử lý logic và tích hợp theo đúng chỉ dẫn của Worktree Management.
> 3. Kiểm thử đầu ra, tối ưu hóa hiệu năng và cung cấp kết quả hoàn chỉnh."

## ⚠️ Lưu Ý & Gotchas

* **Lỗi trùng cổng phát triển (Port Conflict)**: Khi khởi chạy các dev server trong nhiều thư mục worktree song song, các tiến trình sẽ bị lỗi do tranh chấp cùng một cổng mạng. Cần cấu hình đổi cổng chạy qua biến môi trường.
* **Xử lý file node_modules**: Không sao chép node_modules giữa các thư mục worktree để tránh lỗi symlink hoặc sai lệch phiên bản package.
