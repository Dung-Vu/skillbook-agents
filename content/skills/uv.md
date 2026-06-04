---
slug: uv
title: UV Python Package Manager
command: /uv
category: tool-integration
tags:
  - uv
  - python
  - package-manager
  - dependency
  - virtual-environment
complexity: starter
platforms:
  - cursor
  - claude-code
  - windsurf
  - gemini-cli
  - universal
featured: false
description: >-
  Hướng dẫn Agent kiểm tra, cài đặt và khai thác tối đa UV — trình quản lý môi
  trường và gói Python siêu tốc viết bằng Rust giúp gia tốc 10-100x quy trình
  phân giải dependencies.
oneLiner: >-
  Tự động hóa quản lý môi trường và phân giải gói cài đặt Python siêu tốc bằng
  UV.
sourceUrl: 'https://docs.astral.sh/uv/'
sourceAuthor: Google DeepMind
lastVerified: '2026-05-31'
relatedSkills: []
seoTitle: UV Python Package Manager Setup & Rules for AI — Skillbook Agents
seoDescription: >-
  Bộ chỉ dẫn kỹ năng tối ưu giúp AI Agent thiết lập và chạy scripts Python siêu
  tốc with UV Python package manager.
provider: antigravity
---

## 📖 Tại Sao Cần Skill Này?

Việc quản lý môi trường ảo và cài đặt thư viện bằng `pip` truyền thống thường rất chậm, dễ gây timeout và xảy ra xung đột dependencies. Kỹ năng này giúp AI Agent tự động hóa hoàn toàn luồng quản lý gói Python bằng cách:
- **Gia tốc cài đặt 10-100x**: Sử dụng UV viết bằng Rust để phân giải và tải gói siêu tốc thông qua cơ chế caching.
- **Khai thác PEP 0723**: Tự động nhận diện và nạp các inline dependencies khai báo trực tiếp ở đầu script Python mà không cần file `requirements.txt`.
- **Môi trường cách ly**: Tự động tạo và quản lý môi trường ảo độc lập, tránh xung đột hệ thống.

## ⚙️ Cách Hoạt Động

```
[Chạy Script Python] ➔ 📋 [Kiểm Tra UV Version]
                          ├── CHƯA CÀI ➔ ⬇️ [Tải & Cài Đặt UV] ➔ [Cập Nhật PATH Env]
                          └── ĐÃ CÀI   ➔ 🚀 [Thực Thi `uv run` + Tự Động Nạp Inline Deps]
```

Quy trình thực hiện:
1. **Kiểm tra & Cài đặt**: Kiểm tra `uv --version`. Nếu chưa có, tự động cài đặt qua PowerShell/Shell script và cập nhật biến PATH.
2. **Thực thi script**: Chạy lệnh `uv run <script.py>` để tự động tạo môi trường ảo độc lập, phân giải inline dependencies và thực thi script.

## 🚀 Cách Sử Dụng

### Hướng Dẫn Kích Hoạt IDE

- **Với Cursor**: Nhúng bộ quy tắc prompt ở phần bên dưới vào tệp `.cursorrules` trong dự án có sử dụng Python để Cursor tự động chuyển hướng các lệnh chạy pip sang UV.
- **Với Windsurf (Cascade)**: Cài đặt quy tắc này vào `.windsurfrules` ở thư mục gốc của dự án để Cascade Agent tự động sử dụng UV cho mọi thao tác quản lý gói Python.

### Chỉ dẫn & Quy tắc

````markdown
# UV PACKAGE MANAGER INSTRUCTIONS & RULES

## 1. Prerequisites Check
- Luôn kiểm tra xem `uv` đã được cài đặt trên hệ thống chưa trước khi thực thi bất kỳ đoạn mã Python nào.
- Nếu chưa cài đặt, hãy tự động chạy lệnh cài đặt chính thức:
  * Windows (PowerShell): `irm https://astral.sh/uv/install.ps1 | iex`
  * macOS / Linux: `curl -LsSf https://astral.sh/uv/install.sh | sh`
  * Sau khi cài đặt, hãy chạy `uv --version` để verify (yêu cầu version ≥ 0.4.x).

## 2. Execution & Dependency Management
- Không sử dụng `pip install` hoặc `python -m venv`. Luôn thay thế bằng các lệnh của `uv`.
- Đối với các file script độc lập, hãy sử dụng định dạng **PEP 0723** để khai báo dependencies ở đầu file. Ví dụ:
  ```python
  # /// script
  # dependencies = [
  #   "requests",
  #   "biopython",
  # ]
  # ///
  ```
- Kích hoạt và chạy các tệp tin script bằng lệnh: `uv run script.py`.

## 3. Project Management
- Để tạo dự án Python mới, hãy dùng: `uv init project_name`.
- Để cài đặt gói vào môi trường ảo cục bộ của dự án, hãy dùng: `uv add package_name`.
````

## 💡 Kịch Bản Lập Trình Thực Tế

### 🧑‍💻 Nhà phát triển:
> "Tôi muốn chạy thử một script Python phân tích dữ liệu `process_data.py` cần sử dụng thư viện `pandas` và `matplotlib`. Làm thế nào để chạy nhanh nhất mà không phải mất thời gian cài đặt môi trường ảo?"

### 🤖 AI Agent (Đã được trang bị Kỹ năng):
> "Tôi sẽ giải quyết yêu cầu này ngay lập tức bằng công nghệ quản lý gói UV siêu tốc. Quy trình thực hiện như sau:"
>
> 1. **Nhúng Dependencies trực tiếp**: Tôi sẽ tự động tạo tệp `process_data.py` và nhúng trực tiếp khai báo thư viện (`pandas`, `matplotlib`) vào phần đầu của script theo chuẩn PEP 0723. Điều này giúp loại bỏ hoàn toàn việc phải tạo tệp `requirements.txt` thủ công.
> 2. **Kiểm tra và Gia tốc**: Tôi chẩn đoán thấy công cụ UV đã được cài đặt trên máy của bạn. Tôi sẽ dùng lệnh `uv run` để khởi chạy.
> 3. **Phân giải siêu tốc**: Trình UV sẽ tự động tạo một môi trường ảo tạm thời bị cách ly, tải xuống và liên kết các gói thư viện từ bộ nhớ cache toàn cục trong **chưa đầy 0.5 giây**.
> 4. **Khởi chạy thành công**: Script Python tự động được thực thi, xử lý số liệu và kết xuất đồ thị trực quan cho bạn ngay lập tức.
>
> *Nhờ có UV, bạn không cần phải tự gõ lệnh tạo môi trường ảo `venv`, kích hoạt nó, hay chạy lệnh `pip install` chờ đợi mệt mỏi.*

## ⚠️ Lưu Ý & Gotchas

* **Xử Lý Lỗi PATH Biến Môi Trường**: Sau khi cài đặt UV lần đầu, cần khởi động lại terminal hoặc reload biến PATH để hệ thống nhận diện lệnh `uv`.
* **Tận Dụng Global Cache**: UV dùng liên kết cứng (hard links) chia sẻ cache toàn cục để tiết kiệm ổ đĩa và gia tốc tối đa.
* **Cảnh Báo Pip**: Không sử dụng xen kẽ `pip install` và `uv` trong cùng một môi trường ảo để tránh xung đột cấu trúc package.
