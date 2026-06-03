---
slug: web-scraper
title: Web Scraper
command: ''
category: tool-integration
tags:
  - web-scraping
  - crawling
  - data-extraction
  - content-harvesting
complexity: intermediate
platforms:
  - universal
  - cursor
  - windsurf
  - claude-code
  - mcp
featured: false
description: >-
  Công cụ thu thập dữ liệu web đa năng. Hỗ trợ quét nội dung văn bản từ các
  trang web, tự động bóc tách thông tin có cấu trúc và lưu trữ kết quả dưới các
  định dạng phổ biến (JSON, CSV, Markdown).
oneLiner: 'Thu nhập, phân tích và xuất dữ liệu có cấu trúc từ các trang web trực tuyến.'
sourceUrl: ''
sourceAuthor: Minimax
lastVerified: '2026-06-03'
relatedSkills:
  - tidy-folder
  - seo-geo-optimization-expert
seoTitle: Web Scraper - Minimax Skill for AI Agents
seoDescription: >-
  Tích hợp kỹ năng cào dữ liệu Web Scraper cho AI Agent: sử dụng Python, xử lý
  chặn IP, bóc tách cấu trúc và lưu file JSON/CSV.
provider: minimax
---

## 📖 Tại Sao AI Agent Của Bạn Cần Kỹ Năng Này?

Để đưa ra các phân tích chính xác, AI Agent cần có dữ liệu thực tế từ internet. Tuy nhiên, việc cào dữ liệu thủ công rất tốn thời gian và các trang web thường có cấu trúc HTML khác nhau. Kỹ năng này cung cấp các kịch bản lập trình Python (sử dụng BeautifulSoup hoặc Playwright) để Agent tự động bóc tách các thẻ HTML, trích xuất văn bản sạch và lưu trữ dữ liệu khoa học.

## ⚙️ Cơ Chế Hoạt Động & Quy Trình Tư Duy

Quy trình cào dữ liệu web tự động:
```
Nhap URL dich --> Phan tich cau truc HTML --> Viet Code Scraper --> Thuc thi cao du lieu --> Luu (JSON/CSV)
```
1. **Xác định mục tiêu**: Nhận đường dẫn trang web cần cào dữ liệu và định nghĩa các trường thông tin mong muốn (Tiêu đề, Giá cả, Ngày đăng).
2. **Kiểm tra cấu trúc**: Phân tích mã nguồn HTML của trang để tìm các thẻ CSS Selectors hoặc XPath tương ứng.
3. **Lập trình thu thập**: Viết script Python sử dụng thư viện `httpx` (hoặc `playwright` nếu trang web tải bằng JavaScript).
4. **Lọc dữ liệu**: Loại bỏ mã HTML rác, trích xuất văn bản thô sạch và chuyển đổi sang cấu trúc đối tượng dữ liệu.
5. **Lưu trữ**: Xuất kết quả ra file JSON hoặc CSV và trả về đường dẫn tệp.

## 🚀 Bộ Quy Tắc Chỉ Dẫn Cho Agent (Prompt Guidelines)

- Tuân thủ quy tắc ứng xử cào dữ liệu thân thiện: cấu hình tham số `User-Agent` thực tế và thêm khoảng trễ (delay) giữa các lượt yêu cầu để tránh làm quá tải máy chủ đích.
- Kiểm tra tính hợp lệ của dữ liệu thu được trước khi lưu tệp, loại bỏ các kết quả trống (null/empty) không mong muốn.
- Hỗ trợ xử lý ngoại lệ chu đáo như lỗi hết thời gian chờ (timeout) hoặc lỗi không kết nối được máy chủ.

## ⚠️ Cảnh Báo Vận Hành & Mẹo Tối Ưu (Developer Gotchas)

- **Chặn truy cập (Anti-bot)**: Cảnh báo người dùng nếu trang web mục tiêu sử dụng các giải pháp chống cào dữ liệu mạnh mẽ như Cloudflare hay CAPTCHA.
- **HTML thay đổi**: Cấu trúc HTML của trang web có thể thay đổi bất cứ lúc nào, khiến các CSS Selectors cũ không hoạt động.
