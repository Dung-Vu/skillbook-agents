---
category: research-analysis
command: /x-link-reader
complexity: intermediate
description: >-
  Trích xuất và phân tích nội dung từ các liên kết mạng xã hội X (Twitter). Kỹ
  năng này hướng dẫn cách đọc thông tin chi tiết của một tweet đơn lẻ (bao gồm
  lượt tương tác, nội dung văn bản) hoặc thông tin hồ sơ người dùng.
featured: false
lastVerified: '2026-06-03'
oneLiner: >-
  Đọc và trích xuất dữ liệu bài viết hoặc hồ sơ người dùng từ mạng xã hội X
  (Twitter).
platforms:
  - universal
  - cursor
  - windsurf
  - claude-code
  - mcp
provider: minimax
relatedSkills:
  - mavis-browser
  - visual-summary
seoDescription: >-
  Trích xuất nội dung X/Twitter không cần API key. Sử dụng api.fxtwitter.com để
  lấy chi tiết tweet, thống kê và thông tin profile.
seoTitle: X Link Reader - Minimax Skill for AI Agents
slug: x-link-reader
sourceAuthor: Minimax
sourceUrl: ''
tags:
  - twitter
  - x
  - api
  - scraping
title: X Link Reader
---

## 📖 Tại Sao AI Agent Của Bạn Cần Kỹ Năng Này?

AI Agent thông thường không thể truy cập trực tiếp vào các liên kết x.com (Twitter) do cơ chế chống cào dữ liệu của nền tảng này, dẫn đến việc trả về các trang trống hoặc yêu cầu đăng nhập. Kỹ năng này hướng dẫn Agent định tuyến cuộc gọi qua proxy API của FxTwitter để trích xuất dữ liệu JSON của các bài viết hoặc thông tin người dùng công khai mà không cần tài khoản.

---

## ⚙️ Cơ Chế Hoạt Động & Quy Trình Tư Duy

Quy trình đọc tin từ mạng xã hội X:
1. **Phát hiện URL**: Nhận dạng các liên kết có chứa định dạng tên miền `x.com` hoặc `twitter.com`.
2. **Chuyển đổi URL Proxy**: Thay thế tên miền gốc sang tên miền proxy `api.fxtwitter.com`.
3. **Thao tác Fetch dữ liệu**:
   - Lấy tweet: Truy vấn `https://api.fxtwitter.com/{user}/status/{id}` ở định dạng text.
   - Lấy profile: Truy vấn `https://api.fxtwitter.com/{username}`.
4. **Phân tích cú pháp & Trình bày**: Đọc dữ liệu JSON trả về (author, text, likes, retweets, views, media) và viết tóm tắt ngắn gọn.

Sơ đồ quy trình:
```
[URL x.com / twitter.com] ➔ 🔄 [Đổi tên miền sang api.fxtwitter.com] ➔ 🌐 [Gọi webfetch dạng text (JSON)]
                                ➔ 🧩 [Parse JSON tìm Text & Lượt tương tác] ➔ 📝 [Hiển thị tóm tắt]
```

---

## 🚀 Bộ Quy Tắc Chỉ Dẫn Cho Agent (Prompt Guidelines)

```markdown
# QUY TẮC ĐỌC LIÊN KẾT X/TWITTER
- **Tuyệt đối không fetch trực tiếp**: Nghiêm cấm gửi request HTTP trực tiếp đến các máy chủ `x.com` hay `twitter.com`.
- **Dịch thuật bài viết**: Nếu người dùng yêu cầu dịch bài viết, có thể chèn hậu tố `/translate/{lang}` (ví dụ: `/translate/zh`) vào cuối URL truy vấn proxy.
- **Trình bày tóm tắt**: Chỉ hiển thị các thông tin cô đọng cho người dùng (Người đăng, Nội dung, Ngày đăng, Lượt tương tác), không được in thô toàn bộ JSON ra màn hình chat.
```

---

## ⚠️ Cảnh Báo Vận Hành & Mẹo Tối Ưu (Developer Gotchas)

* **Bài viết riêng tư / Đã xóa**: Các tài khoản được bảo vệ (khóa) hoặc các tweet đã bị chủ tài khoản xóa sẽ khiến proxy trả về lỗi 404 hoặc 401. Agent cần thông báo rõ ràng trường hợp này cho người dùng.
* **Không hỗ trợ viết bài**: Proxy này là công cụ đọc công cộng, chỉ hỗ trợ trích xuất dữ liệu một chiều. Tuyệt đối không dùng để đăng bài hoặc tương tác trực tiếp lên mạng xã hội X.
