---
slug: science-skills-common
title: Science Skills Common Library
command: /science-skills-common
category: tool-integration
tags:
  - shared-library
  - http-client
  - rate-limiting
  - retry
  - infrastructure
complexity: starter
platforms:
  - universal
featured: false
description: >-
  Thư viện dùng chung giúp kết nối mạng an toàn cho các tác vụ nghiên cứu khoa học. Công cụ này tự động điều chỉnh tốc độ gửi yêu cầu (tránh bị khóa IP) và tự động tải lại nếu máy chủ bị lỗi tạm thời.
oneLiner: Thư viện hỗ trợ kết nối mạng an toàn, chống chặn IP khi gọi dữ liệu khoa học.
sourceUrl: 'https://github.com/google-deepmind'
sourceAuthor: Google DeepMind
lastVerified: '2026-05-31'
relatedSkills: []
seoTitle: Science Skills Common Library for AI Agents — Skillbook Agents
seoDescription: >-
  Bộ chỉ dẫn kỹ năng hạ tầng HTTP client rate-limiting, retries, exponential
  backoff dùng chung cho AI Science Agents.
provider: antigravity
---

## 📖 Tại Sao Cần Skill Này?

Khi viết mã để lấy dữ liệu từ các máy chủ khoa học lớn trên thế giới (như NCBI, UniProt, Ensembl), nếu gửi yêu cầu quá nhanh và liên tục, địa chỉ IP của bạn sẽ bị chặn ngay lập tức. Skill này giúp bạn giải quyết vấn đề đó bằng cách:
- **Tự động khống chế tốc độ**: Đảm bảo số lượng yêu cầu gửi đi nằm trong giới hạn cho phép của máy chủ (chống lỗi bị chặn IP - HTTP 429).
- **Tự động thử lại thông minh**: Nếu mạng bị chập chờn hoặc máy chủ bị quá tải tạm thời, công cụ sẽ tự động đợi một lát rồi thử lại với thời gian giãn cách tăng dần.
- **Phối hợp nhiều luồng**: Khi bạn chạy nhiều chương trình cùng lúc, công cụ sẽ tự động điều phối để tổng tốc độ của chúng không vượt quá giới hạn an toàn.

## ⚙️ Cách Hoạt Động

Quy trình hoạt động ngầm của thư viện diễn ra như sau:
1. **Kiểm tra giới hạn**: Mỗi khi chương trình của bạn chuẩn bị gửi yêu cầu lấy dữ liệu từ Internet, công cụ sẽ kiểm tra tốc độ hiện tại.
2. **Trì hoãn nếu cần**: Nếu tốc độ sắp vượt ngưỡng an toàn, nó sẽ tự động tạm dừng chương trình trong vài mili giây.
3. **Gửi yêu cầu & Xử lý lỗi**: Gửi dữ liệu đi. Nếu gặp lỗi kết nối hoặc máy chủ bận, nó sẽ tự động thử lại tối đa vài lần trước khi báo lỗi thực sự.

## 🚀 Cách Sử Dụng

Khi làm việc với trợ lý AI hoặc viết code:
- Nhận biết rằng đây là một thư viện hỗ trợ nằm bên dưới (shared library), không phải là công cụ chạy độc lập để ra kết quả ngay.
- Yêu cầu AI luôn sử dụng bộ công cụ kết nối mạng này (`RateLimitedClient`) thay vì thư viện kết nối mạng mặc định (`requests` hoặc `urllib`) khi viết các đoạn mã Python để lấy dữ liệu y học, sinh học.
- Đặt giới hạn tốc độ phù hợp với từng máy chủ mục tiêu (thường mặc định dưới 10 yêu cầu/giây).

## 💡 Kịch Bản Lập Trình Thực Tế

### 🧑‍💻 Nhà phát triển:
> "Tôi muốn viết một chương trình Python để tải thông tin của hàng ngàn gen từ cơ sở dữ liệu quốc tế NCBI. Làm sao để chạy chương trình an toàn không bị khóa IP giữa chừng?"

### 🤖 AI Agent (Đã được trang bị Kỹ năng):
> "Tôi sẽ viết mã nguồn cho bạn bằng cách tích hợp thư viện an toàn `science-skills-common`. Chương trình của bạn sẽ hoạt động như sau:
> 
> 1. **Sử dụng kết nối an toàn**: Tôi sẽ import `RateLimitedClient` để gửi yêu cầu đi.
> 2. **Giới hạn tốc độ**: Tôi sẽ đặt cấu hình tối đa là 3 yêu cầu/giây theo đúng quy định của NCBI.
> 3. **Tự động phục hồi**: Nếu máy chủ NCBI bị quá tải và trả về lỗi, chương trình sẽ tự động tạm dừng 1 giây, sau đó thử lại. Nếu vẫn lỗi, nó sẽ đợi tiếp 2 giây, rồi 4 giây, giúp chương trình chạy xuyên suốt mà không bị ngắt quãng giữa chừng."

## ⚠️ Lưu Ý & Gotchas


* **Không Chạy Standalone**: Nhắc nhở Agent và chính bạn rằng đây không phải là một công cụ độc lập. Mọi cố gắng chạy nó đơn lẻ trên terminal đều sẽ báo lỗi.
* **Cơ Chế Khóa File (File Locking)**: Thư viện sử dụng cơ chế ghi tệp tạm để đồng bộ rate-limiting giữa nhiều tiến trình. Tránh chạy scripts trên các ổ đĩa mạng chia sẻ (Network Drives/NAS) vì cơ chế khóa file có thể bị trễ hoặc lỗi ghi quyền.
* **Tự Động Nạp Qua UV**: Luôn khai báo thư viện này trong phần header dependency của các scripts Python để `uv run` tự động tải và cài đặt phiên bản mới nhất từ local repository.
