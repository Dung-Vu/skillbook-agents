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
  Cung cấp hạ tầng HTTP client dùng chung, kiểm soát tần suất truy cập
  (rate-limiting) và cơ chế tự động thử lại với exponential backoff khi gọi
  external APIs khoa học (NCBI, EBI, RCSB).
oneLiner: >-
  Gói hạ tầng HTTP client rate-limiting và retry dùng chung cho các AI Science
  Agents.
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

Khi AI Agents thực hiện các tác vụ nghiên cứu khoa học chuyên sâu, chúng phải liên tục gọi các API cơ sở dữ liệu lớn trên thế giới (như NCBI, Ensembl, UniProt, ClinVar). Tuy nhiên, các máy chủ khoa học này cực kỳ nghiêm ngặt về tần suất truy cập:
* **Chặn IP (Rate Limit block)**: Nếu AI gửi quá nhiều request cùng lúc, IP của bạn sẽ lập tức bị chặn (Lỗi HTTP 429). AI mặc định không biết cách tự kiềm chế hoặc trì hoãn giữa các lệnh.
* **Lỗi kết nối tạm thời**: Hệ thống cơ sở dữ liệu công cộng thường xuyên bị quá tải hoặc phản hồi chậm (Lỗi HTTP 500, 503). Nếu AI không biết cách tự động thử lại, quy trình nghiên cứu sẽ bị crash giữa chừng.

**Khi được tích hợp Kỹ năng này, AI Agent của bạn sẽ:**
1. **Truy cập bền bỉ**: Tự động tuân thủ tần suất request tối đa của từng máy chủ (ví dụ 10 request/giây cho NCBI, 15 request/giây cho Ensembl) mà không cần người dùng can thiệp.
2. **Exponential Backoff**: Tự động trì hoãn thông minh và thử lại khi gặp lỗi mạng tạm thời, đảm bảo phiên làm việc của Agent kéo dài bền bỉ cho đến khi có kết quả.
3. **Đồng bộ đa tiến trình (Process-safe)**: Sử dụng cơ chế khóa file (file-locking) để kiểm soát rate-limiting chéo giữa nhiều luồng chạy cùng lúc trên máy tính của bạn.

---

## ⚙️ Cách Hoạt Động

```
[Science Script] ➔ 📞 [Gọi API qua RateLimitedClient]
                         ├── Dưới ngưỡng ➔ 🌐 [Gọi API] ➔ [Trả Về Kết Quả]
                         └── Vượt ngưỡng ➔ ⏳ [File Lock / Tự Động Trì Hoãn] ➔ [Thử Lại]
```

Quy trình suy nghĩ của Agent khi tích hợp kỹ năng này:
1. **Nhận diện**: Nhận biết đây là thư viện hạ tầng dùng chung (`shared library`), không phải là một kỹ năng độc lập để chạy CLI trực tiếp.
2. **Tích hợp**: Khi viết các scripts Python gọi API khoa học, tự động import `RateLimitedClient` từ gói `science_skills_common`.
3. **Cấu hình**: Khai báo tần số tối đa (RPS) và số lần thử lại tối đa (`max_retries`) phù hợp với chính sách của từng domain đích.

---

## 🚀 Hướng Dẫn Kích Hoạt IDE

### Với Cursor
Hãy thêm quy tắc prompt dưới đây vào tệp `.cursorrules` của các dự án nghiên cứu khoa học y sinh để Cursor luôn import thư viện dùng chung này khi viết code Python gọi API.

### Với Windsurf (Cascade)
Nhúng các quy tắc này vào `.windsurfrules` để Cascade Agent tự động sử dụng `RateLimitedClient` thay vì thư viện `requests` thô sơ cho mọi tác vụ kết nối mạng.

---

## 🚀 Cách Sử Dụng

````markdown
# SCIENCE COMMON LIBRARY RULES & GUIDELINES

## 1. Role Recognition
- Nhận diện `science-skills-common` là một thư viện chia sẻ (shared library). Không cố gắng chạy trực tiếp `/science-skills-common` trên Terminal.
- Thư viện này là điều kiện cần (dependency) cho các kỹ năng khoa học khác (PubMed, UniProt, ClinVar, v.v.).

## 2. Coding Implementation Rules
- Khi viết các script Python kết nối với external APIs, tuyệt đối không dùng thư viện `requests` thô sơ hoặc `urllib`.
- Bắt buộc import và sử dụng `RateLimitedClient` từ thư viện dùng chung:
  ```python
  from science_skills_common.http_client import RateLimitedClient
  ```
- Khai báo các tham số an toàn:
  * `requests_per_second`: Thiết lập phù hợp với máy chủ (mặc định ≤ 10).
  * `max_retries`: Thiết lập ≥ 3.
  * Tự động xử lý ngoại lệ an toàn, thông báo lỗi sạch sẽ cho lập trình viên.
````

---

## 💡 Kịch Bản Lập Trình Thực Tế

### 🧑‍💻 Nhà phát triển:
> "Tôi cần viết một công cụ Python tải thông tin của hàng trăm mẫu protein từ cơ sở dữ liệu quốc tế UniProt để phân tích. Làm sao để đảm bảo công cụ chạy ổn định cả đêm mà không bị máy chủ UniProt chặn IP?"

### 🤖 AI Agent (Đã được trang bị Kỹ năng):
> "Tôi sẽ thiết kế một giải pháp tự động hóa an toàn bằng cách nhúng thư viện hạ tầng dùng chung `science-skills-common` của hệ thống. Đây là quy trình bảo vệ mà tôi sẽ áp dụng ngầm khi mã nguồn của bạn chạy:"
>
> 1. **Kiểm soát lưu lượng thông minh**: Thay vì sử dụng thư viện kết nối mạng thô sơ gửi yêu cầu ồ ạt, tôi sẽ cấu hình mã nguồn của bạn import `RateLimitedClient`. Thư viện này tự động khống chế tần suất gọi tối đa là 10 requests/giây để tuyệt đối tuân thủ chính sách của máy chủ UniProt.
> 2. **Tự động vượt lỗi kết nối**: Nếu máy chủ UniProt bị quá tải tạm thời hoặc gặp sự cố mạng (trả về lỗi HTTP 429 hoặc 503), client thông minh sẽ tự động kích hoạt cơ chế thử lại (Exponential Backoff), tăng dần thời gian chờ giữa các lần thử để bảo vệ kết nối của bạn.
> 3. **Đồng bộ đa luồng an toàn**: Khi bạn chạy nhiều tiến trình phân tích protein song song, thư viện sẽ tự động kích hoạt cơ chế khóa file (`file-locking`) để đồng bộ lưu lượng giữa các luồng, đảm bảo toàn bộ hệ thống của bạn không bao giờ vượt ngưỡng cho phép của máy chủ UniProt.
>
> *Nhờ sự bảo vệ ngầm này, script Python của bạn có thể chạy bền bỉ cả đêm, tải hàng nghìn protein một cách trơn tru mà không sợ bị máy chủ UniProt khóa IP hay làm gián đoạn tiến trình nghiên cứu.*

---

## ⚠️ Lưu Ý & Gotchas

* **Không Chạy Standalone**: Nhắc nhở Agent và chính bạn rằng đây không phải là một công cụ độc lập. Mọi cố gắng chạy nó đơn lẻ trên terminal đều sẽ báo lỗi.
* **Cơ Chế Khóa File (File Locking)**: Thư viện sử dụng cơ chế ghi tệp tạm để đồng bộ rate-limiting giữa nhiều tiến trình. Tránh chạy scripts trên các ổ đĩa mạng chia sẻ (Network Drives/NAS) vì cơ chế khóa file có thể bị trễ hoặc lỗi ghi quyền.
* **Tự Động Nạp Qua UV**: Luôn khai báo thư viện này trong phần header dependency của các scripts Python để `uv run` tự động tải và cài đặt phiên bản mới nhất từ local repository.
