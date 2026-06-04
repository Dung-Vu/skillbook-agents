---
slug: browser
title: Browser Automation
command: /browser
category: research-analysis
tags:
  - browser
  - puppeteer
  - playwright
  - web-scraping
  - ui-testing
complexity: intermediate
platforms:
  - cursor
  - claude-code
  - windsurf
  - gemini-cli
  - universal
featured: true
description: >-
  Kích hoạt AI Agent tương tác trực tiếp với các ứng dụng web thông qua trình
  duyệt tự động để thực hiện thu thập dữ liệu và kiểm thử giao diện.
oneLiner: >-
  Tương tác trực tiếp và thu thập dữ liệu từ các ứng dụng web thông qua trình
  duyệt tự động.
sourceUrl: ''
sourceAuthor: Google DeepMind
lastVerified: '2026-06-01'
relatedSkills:
  - literature-search-openalex
  - clinical-trials-database
seoTitle: /browser - Web Browser Automation Skill for AI Agents
seoDescription: >-
  Chỉ dẫn chi tiết cách AI Agent vận hành trình duyệt tự động /browser để thu
  thập dữ liệu web và kiểm thử UI/UX.
provider: antigravity
---

## 📖 Tại Sao Cần Skill Này?

Khi thu thập dữ liệu học thuật hoặc kiểm tra các ứng dụng web, các thư viện gửi request HTTP tĩnh (như `requests` hoặc `urllib`) có nhiều hạn chế:
* **Không hỗ trợ SPA**: Không thể chạy Javascript để hiển thị nội dung trên các trang web hiện đại (React, Vue, Next.js).
* **Không tương tác vật lý**: Không thể tự động click nút, điền form, cuộn trang, hoặc giải CAPTCHA.

Với kỹ năng `/browser`, Agent có thể render động nội dung Javascript, thực hiện tương tác UI (click, fill, screenshot), và trích xuất dữ liệu thông minh dưới dạng JSON hoặc Markdown.

## ⚙️ Cách Hoạt Động

```
[Nhận URL & Yêu cầu] ➔ 🌐 [Khởi tạo Headless Browser]
                            ├── Truy cập trang ➔ ⏳ [Đợi tải hoàn tất Javascript]
                            ├── Thực hiện tương tác (Click, Fill, Scroll)
                            └── Trích xuất DOM/Text/Screenshot ➔ 📋 [Ghi ra file kết quả]
```

1. **Chẩn đoán**: Xác định các hành động cần thực hiện trên trang.
2. **Khởi tạo**: Mở trình duyệt ẩn danh (headless browser) bằng Playwright hoặc Puppeteer.
3. **Thao tác & Trích xuất**: Thực hiện tương tác vật lý bằng CSS selectors và ghi dữ liệu ra tệp tin.

## 🚀 Cách Sử Dụng

```markdown
# BROWSER AUTOMATION INSTRUCTIONS & RULES

## 1. Environment & Setup
- Luôn sử dụng headless browser để tối ưu hiệu năng và tài nguyên hệ thống.
- Đảm bảo cài đặt các thư viện Playwright/Puppeteer đầy đủ trước khi thực thi.

## 2. Interactive Flow
- Khi cần click vào một nút bấm hoặc điền form, hãy đảm bảo đợi phần tử đó xuất hiện trên DOM (`waitForSelector`).
- Thực hiện chụp ảnh màn hình (`screenshot`) khi gặp lỗi giao diện hoặc khi cần xác nhận kết quả tương tác trực quan cho người dùng.

## 3. Data Extraction
- Tránh tải toàn bộ mã HTML thô của trang về ngữ cảnh chat. Hãy viết script trích xuất để chỉ lấy các thẻ văn bản sạch (`innerText`) hoặc các bảng biểu cần thiết nhằm tiết kiệm token.
- Lưu dữ liệu cào được dưới dạng tệp tin JSON hoặc Markdown.
```

## 💡 Kịch Bản Lập Trình Thực Tế

### Nhà phát triển:
> "Hãy hướng dẫn tôi cách thiết lập và sử dụng kỹ năng Browser Automation để Tương tác trực tiếp và thu thập dữ liệu từ các ứng dụng web thông qua trình duyệt tự động."

### AI Agent (Đã được trang bị Kỹ năng):
> "Tôi đã sẵn sàng. Dưới đây là kịch bản vận hành thực tế cho kỹ năng Browser Automation:
> 1. Thiết lập các thông số cấu hình và tham số đầu vào cần thiết cho hệ thống.
> 2. Thực thi tuần tự các bước xử lý logic và tích hợp theo đúng chỉ dẫn của Browser Automation.
> 3. Kiểm thử đầu ra, tối ưu hóa hiệu năng và cung cấp kết quả hoàn chỉnh."

## ⚠️ Lưu Ý & Gotchas

* **Xử Lý Timeout**: Thiết lập giới hạn thời gian chờ (`timeout` 15-30 giây) cho mọi thao tác tải trang hoặc tìm kiếm phần tử để tránh treo tiến trình.
* **Phát Hiện Bot**: Thiết lập User-Agent giả lập trình duyệt thông thường và sử dụng các mẹo giảm tốc độ tương tác để tránh bị anti-bot chặn.
