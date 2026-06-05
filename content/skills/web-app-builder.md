---
slug: web-app-builder
title: Web App Builder
command: "/web-app-builder"
category: code-engineering
tags:
  - react
  - typescript
  - tailwind
  - vite
  - frontend-deployment
complexity: advanced
platforms:
  - universal
  - cursor
  - windsurf
  - claude-code
  - mcp
featured: false
description: >-
  Trình dựng ứng dụng Web tương tác hiện đại. Thiết lập dự án React + TypeScript
  + Tailwind sử dụng Vite, tự động viết mã nguồn các trang và triển khai trực
  tiếp lên môi trường production.
oneLiner: >-
  Thiết lập, lập trình và triển khai ứng dụng React/TypeScript tương tác trực
  tiếp lên mạng.
sourceUrl: ''
sourceAuthor: Minimax
lastVerified: '2026-06-03'
relatedSkills:
  - landing-page-builder
  - ui-ux-designer
seoTitle: Web App Builder - Minimax Skill for AI Agents
seoDescription: >-
  Hướng dẫn AI Agent tự động tạo ứng dụng web React + Vite + Tailwind CSS và
  triển khai trực tiếp thông qua API.
provider: minimax
---

## 📖 Tại Sao Cần Skill Này?

Người dùng không chỉ muốn xem các trang web tĩnh mà cần các ứng dụng web có tính tương tác thực tế (như trang quản trị dashboard, công cụ tính toán, ứng dụng quản lý công việc). Kỹ năng này cung cấp cho Agent một quy trình hoàn chỉnh để khởi tạo dự án React hiện đại bằng Vite, thiết gia diện với Tailwind CSS, quản lý trạng thái (state) và triển khai dự án lên internet.

## ⚙️ Cách Hoạt Động

Luồng phát triển ứng dụng Web:
```
Y tuong ung dung --> Thiet lap Du an Vite --> Lap trinh Component React --> Build & Test --> Trien khai Production
```
1. **Khởi tạo**: Tạo cấu trúc thư mục dự án Vite chuẩn (src/components, src/hooks, v.v.) và cấu hình file Tailwind.
2. **Lập trình**: Viết các Component React sử dụng TypeScript chặt chẽ, tối ưu hóa việc phân chia file để dễ bảo trì.
3. **Quản lý tương tác**: Xây dựng các chức năng xử lý sự kiện, lưu trữ dữ liệu tạm thời bằng React hooks (`useState`, `useEffect`).
4. **Kiểm tra & Build**: Chạy lệnh build để nén mã nguồn và kiểm tra lỗi cú pháp TypeScript.
5. **Triển khai**: Đẩy thư mục bản build (`dist`) lên nền tảng lưu trữ trực tuyến và cung cấp URL hoạt động.

## 🚀 Cách Sử Dụng

- Tuân thủ quy định viết mã nghiêm ngặt: không sử dụng kiểu dữ liệu `any` trong TypeScript, ưu tiên dùng `const` thay vì `let`.
- Các component React phải được tách nhỏ dưới 150 dòng mã để đảm bảo tính dễ đọc và bảo trì.
- Luôn kiểm tra xem bản build có thành công không trước khi chạy lệnh deploy để tránh lỗi ứng dụng trắng màn hình.

## 💡 Kịch Bản Lập Trình Thực Tế

### Nhà phát triển:
> "Hãy hướng dẫn tôi cách thiết lập và sử dụng kỹ năng Web App Builder để Thiết lập, lập trình và triển khai ứng dụng React/TypeScript tương tác trực tiếp lên mạng."

### AI Agent (Đã được trang bị Kỹ năng):
> "Tôi đã sẵn sàng. Dưới đây là kịch bản vận hành thực tế cho kỹ năng Web App Builder:
> 1. Thiết lập các thông số cấu hình và tham số đầu vào cần thiết cho hệ thống.
> 2. Thực thi tuần tự các bước xử lý logic và tích hợp theo đúng chỉ dẫn của Web App Builder.
> 3. Kiểm thử đầu ra, tối ưu hóa hiệu năng và cung cấp kết quả hoàn chỉnh."

## ⚠️ Lưu Ý & Gotchas

- **Lỗi đường dẫn tài nguyên**: Đảm bảo các tệp tin hình ảnh, biểu tượng (icons) được import đúng cách, tránh bị lỗi 404 sau khi build dự án.
- **Quản lý State phức tạp quá mức**: Ưu tiên sử dụng React state mặc định hoặc Context API thay vì cài đặt các thư viện quản lý state nặng nề như Redux trừ khi thực sự cần thiết.
