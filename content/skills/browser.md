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

## 📖 Tại Sao AI Agent Của Bạn Cần Kỹ Năng Này?

Khi thu thập dữ liệu học thuật hoặc kiểm tra các ứng dụng web, việc chỉ sử dụng các thư viện gửi request HTTP tĩnh (như `requests` hoặc `urllib`) gặp nhiều hạn chế:
* **Không hỗ trợ Single Page Application (SPA)**: Các trang web hiện đại dựng bằng React, Vue, Next.js yêu cầu chạy Javascript để hiển thị nội dung.
* **Không thể tương tác vật lý**: Không thể tự động click nút, điền form, cuộn trang hoặc giải quyết các thử thách CAPTCHA/đăng nhập phức tạp.

**Khi sử dụng Kỹ năng `/browser`, AI Agent của bạn sẽ:**
1. **Duyệt web động (Dynamic Rendering)**: Đọc hiểu và render đầy đủ các ứng dụng web sử dụng nhiều Javascript.
2. **Tương tác trực tiếp (UI Interaction)**: Điền form, click các phần tử, chụp ảnh màn hình (screenshot) và tải file tự động.
3. **Thu thập dữ liệu thông minh (Smart Scraping)**: Trích xuất nội dung văn bản sạch, bảng biểu hoặc dữ liệu JSON từ cấu trúc DOM của trang web.

---

## ⚙️ Cơ Chế Hoạt Động & Quy Trình Tư Duy

```
[Nhận URL & Yêu cầu] ➔ 🌐 [Khởi tạo Headless Browser]
                            ├── Truy cập trang ➔ ⏳ [Đợi tải hoàn tất Javascript]
                            ├── Thực hiện tương tác (Click, Fill, Scroll)
                            └── Trích xuất DOM/Text/Screenshot ➔ 📋 [Ghi ra file kết quả]
```

Quy trình suy nghĩ của Agent khi thực thi `/browser`:
1. **Chẩn đoán mục tiêu**: Xác định các hành động cần thực hiện trên trang (đăng nhập, tìm kiếm, cuộn trang, click nút).
2. **Khởi tạo kết nối**: Mở trình duyệt ẩn danh (headless browser) thông qua Playwright hoặc Puppeteer.
3. **Thao tác vật lý**: Thực hiện tuần tự các bước tương tác, sử dụng các bộ chọn CSS (selectors) chuẩn xác để định vị phần tử.
4. **Trích xuất & Đóng gói**: Đọc nội dung văn bản sạch của trang hoặc chụp ảnh màn hình, lưu kết quả ra tệp tin chuyên biệt và đóng trình duyệt an toàn.

---

## 🚀 Bộ Quy Tắc Chỉ Dẫn Cho Agent (Prompt Guidelines)

````markdown
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
````

---

## ⚠️ Cảnh Báo Vận Hành & Mẹo Tối Ưu (Developer Gotchas)

* **Xử Lý Timeout**: Các trang web tải chậm có thể gây treo trình duyệt. Luôn thiết lập giới hạn thời gian chờ (`timeout` khoảng 15-30 giây) cho mọi thao tác tải trang hoặc tìm kiếm phần tử để tránh treo tiến trình.
* **Phát Hiện Bot (Anti-Bot Detection)**: Một số trang web chặn các kết nối từ headless browser. Hãy thiết lập User-Agent giả lập trình duyệt thông thường và sử dụng các mẹo giảm tốc độ tương tác để tránh bị chặn.
```
