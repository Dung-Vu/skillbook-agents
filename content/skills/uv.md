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
description: Hướng dẫn cài đặt và sử dụng UV – trình quản lý gói và môi trường ảo Python siêu tốc viết bằng Rust, giúp tăng tốc độ cài đặt thư viện lên gấp 10-100 lần so với pip truyền thống.
oneLiner: Tăng tốc quản lý thư viện và môi trường ảo Python bằng công cụ UV.
sourceUrl: 'https://docs.astral.sh/uv/'
sourceAuthor: Google DeepMind
lastVerified: '2026-05-31'
relatedSkills: []
seoTitle: UV Python Package Manager - Trình quản lý gói Python siêu tốc
seoDescription: Hướng dẫn AI Agent cài đặt UV, tự động hóa quản lý môi trường ảo và tải thư viện Python nhanh gấp 100 lần.
provider: antigravity
---

## 📖 Tại Sao Cần Skill Này?

Khi lập trình Python, việc cài đặt thư viện và tạo môi trường ảo bằng công cụ `pip` truyền thống thường rất chậm, dễ gặp lỗi xung đột phiên bản và làm tốn tài nguyên máy tính. Kỹ năng này giúp trợ lý sử dụng UV (công cụ viết bằng Rust) để cài đặt thư viện nhanh như chớp, tự động thiết lập môi trường ảo cách ly an toàn và chạy mã Python mượt mà.

- **Tốc độ vượt trội**: Cài đặt thư viện nhanh gấp 10-100 lần nhờ cơ chế lưu bộ nhớ đệm (cache) thông minh.
- **Tiện lợi tối đa**: Tự động nhận diện và cài đặt các thư viện cần thiết trực tiếp từ bên trong file script Python mà không cần tạo file `requirements.txt` thủ công.
- **Môi trường ảo tự động**: Tạo và kích hoạt môi trường ảo cách ly tự động, tránh làm ảnh hưởng đến hệ thống máy tính chung của bạn.

## ⚙️ Cách Hoạt Động

1. **Kiểm tra công cụ**: Trợ lý kiểm tra xem máy tính của bạn đã cài đặt UV chưa.
2. **Cài đặt nhanh**: Nếu chưa có, trợ lý sẽ chạy lệnh tự động tải và cài đặt UV phù hợp với hệ điều hành (Windows/macOS/Linux).
3. **Thực thi mã**: Khi bạn cần chạy một file Python, trợ lý sử dụng lệnh `uv run` để tự động tạo môi trường ảo tạm thời, tải thư viện và chạy mã ngay lập tức.

## 🚀 Cách Sử Dụng

- Yêu cầu trợ lý cài đặt thư viện Python hoặc chạy các đoạn mã Python thông qua UV.
- Trợ lý sẽ thay thế hoàn toàn các lệnh cũ (`pip install`, `python -m venv`) bằng các lệnh UV nhanh hơn như `uv run`, `uv add`.

## 💡 Kịch Bản Lập Trình Thực Tế

### Người dùng:
> "Tôi muốn chạy thử một file Python xử lý số liệu cần dùng thư viện pandas mà không muốn mất công tạo môi trường ảo thủ công."

### Trợ lý:
> "Tôi sẽ thực hiện chạy file này bằng UV cho bạn:
> 1. Tôi khai báo thư viện `pandas` trực tiếp ở đầu file Python theo chuẩn tiện ích của UV.
> 2. Tôi chạy lệnh `uv run file_cua_ban.py`. 
> 3. UV tự động tạo môi trường ảo, tải và cài đặt thư viện pandas chỉ trong 1 giây và thực thi chương trình ngay lập tức cho bạn."

## ⚠️ Lưu Ý & Gotchas

- **Khởi động lại Terminal**: Khi mới cài đặt UV lần đầu, bạn có thể cần tắt và mở lại terminal hoặc IDE để máy tính nhận diện được lệnh `uv`.
- **Không dùng lẫn lộn**: Nên sử dụng hoàn toàn UV cho dự án. Tránh dùng xen kẽ cả `pip` và `uv` trong cùng một thư mục để tránh gây xung đột thư viện.
