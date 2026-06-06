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
description: Kỹ năng điều khiển trình duyệt tự động để truy cập trang web, bấm nút, điền thông tin và lấy dữ liệu. Rất hữu ích khi cần lấy thông tin từ các trang web phức tạp hoặc tự động chạy thử giao diện.
oneLiner: Tự động truy cập và tương tác với các trang web bằng trình duyệt ảo.
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

Khi cần lấy thông tin từ trang web, các công cụ tải trang thông thường sẽ gặp thất bại nếu trang web đó sử dụng công nghệ hiện đại, yêu cầu phải tải mã JavaScript hoặc cần người dùng bấm nút, cuộn trang mới hiện nội dung. 

Skill này cho phép trợ lý AI mở một trình duyệt ảo, tự động nhấn các nút, điền vào các ô nhập liệu, cuộn chuột và chụp ảnh màn hình để lấy chính xác thông tin bạn cần.

## ⚙️ Cách Hoạt Động

Quy trình hoạt động của trình duyệt tự động:
1. **Mở trình duyệt ẩn**: Khởi động một trình duyệt chạy ngầm (không hiện cửa sổ để tiết kiệm tài nguyên máy tính).
2. **Tương tác**: Điền thông tin vào biểu mẫu, nhấp chuột vào nút bấm, hoặc cuộn trang để hiển thị hết nội dung.
3. **Trích xuất**: Đọc thông tin trên màn hình, lưu lại dưới dạng chữ hoặc tệp tin và chụp ảnh màn hình nếu cần.

## 🚀 Cách Sử Dụng

1. Luôn dùng chế độ chạy ẩn (headless) để máy tính chạy nhanh và không tốn nhiều tài nguyên hệ thống.
2. Thiết lập thời gian chờ để chắc chắn trang web đã tải xong nội dung trước khi thực hiện bấm nút hoặc đọc dữ liệu.
3. Thay vì tải toàn bộ mã nguồn trang web (rất nặng), hãy lọc lấy đúng nội dung cần thiết và lưu vào máy tính dưới dạng văn bản sạch hoặc tệp JSON.

## 💡 Kịch Bản Lập Trình Thực Tế

### Người dùng:
> "Hãy truy cập trang tuyển dụng, tìm kiếm từ khóa 'Lập trình viên Python' và lưu lại danh sách 5 công việc mới nhất."

### Trợ lý AI:
> "Tôi sẽ thực hiện theo các bước sau:
> 1. Mở trình duyệt ảo chạy ngầm và truy cập vào trang tuyển dụng.
> 2. Chờ ô tìm kiếm xuất hiện, tự động gõ 'Lập trình viên Python' và bấm nút Tìm kiếm.
> 3. Đợi kết quả hiển thị, lấy thông tin về tên công ty, mức lương và mô tả của 5 công việc đầu tiên.
> 4. Lưu danh sách này vào máy tính của bạn dưới dạng tệp tin văn bản."

## ⚠️ Lưu Ý & Gotchas

* **Lỗi chờ quá lâu (Timeout)**: Luôn giới hạn thời gian chờ tối đa (khoảng 15-30 giây) để chương trình tự dừng nếu mạng bị nghẽn, tránh bị treo máy.
* **Hệ thống chặn bot**: Nhiều trang web có hệ thống ngăn chặn robot tự động. Hãy cài đặt cấu hình giả lập như người dùng thật và chỉnh tốc độ bấm nút chậm lại để không bị phát hiện và chặn truy cập.
