---
slug: jaspar-database
title: JASPAR TF Binding Profiles
command: /jaspar-database
category: bioinformatics-genomics
tags:
  - jaspar
  - transcription-factor
  - binding-motif
  - pwm
  - pfm
complexity: advanced
platforms:
  - cursor
  - claude-code
  - windsurf
  - gemini-cli
  - universal
featured: false
description: >-
  Tra cứu ma trận tần số vị trí và thông tin cấu trúc liên kết DNA của các yếu tố phiên mã (Transcription Factors) từ cơ sở dữ liệu JASPAR.
oneLiner: Tra cứu ma trận liên kết DNA của các yếu tố phiên mã từ JASPAR.
sourceUrl: 'https://jaspar.elixir.no/'
sourceAuthor: Google DeepMind
lastVerified: '2026-05-30'
relatedSkills:
  - unibind-database
seoTitle: JASPAR TF Binding Profiles — Skillbook Agents
seoDescription: >-
  Hướng dẫn Agent truy vấn TF binding profiles, PFMs, và PWMs từ JASPAR
  database.
provider: antigravity
---

## 📖 Tại Sao Cần Skill Này?

JASPAR là cơ sở dữ liệu chuẩn chuyên cung cấp thông tin về các vị trí liên kết của yếu tố phiên mã (Transcription Factor - TF). Nó giúp mô tả chính xác chuỗi mẫu DNA nào được từng yếu tố phiên mã nhận diện để liên kết vào.

- **Lấy ma trận liên kết (PFM/PWM)**: Tải về các số liệu toán học mô tả tần suất xuất hiện các ký tự DNA tại mỗi vị trí.
- **Chuyển đổi tên gen**: Đổi tên gen thông thường (như TP53, SP1) sang mã ma trận chuẩn của JASPAR.
- **Hỗ trợ nhiều định dạng**: Xuất dữ liệu dưới các định dạng phổ biến để chạy phần mềm chuyên dụng (MEME, TRANSFAC, YAML...).
- **Dự đoán vị trí liên kết**: Dùng ma trận này để quét tìm các điểm liên kết trên chuỗi gene.

## ⚙️ Cách Hoạt Động

```
Tên yếu tố phiên mã / Mã ma trận → API JASPAR → Trả về dữ liệu ma trận liên kết và thông tin liên quan (loài, họ, lớp)
```

## 🚀 Cách Sử Dụng

### Universal

```markdown
# Quy tắc sử dụng JASPAR
- Dùng JASPAR khi bạn cần lấy các ma trận mô tả vị trí liên kết (PFM/PWM) của yếu tố phiên mã.
- Quy đổi tên gen thông thường sang mã ma trận JASPAR tương ứng trước khi tiến hành tra cứu sâu.
- Lựa chọn định dạng xuất dữ liệu phù hợp (ví dụ: MEME để quét tìm vùng liên kết, TRANSFAC cho các công cụ cũ).
```

## 💡 Kịch Bản Lập Trình Thực Tế

### 🧑‍💻 Nhà phát triển:
> "Tôi cần tìm ma trận liên kết (PWM) của yếu tố phiên mã NF-kB (REL) từ cơ sở dữ liệu JASPAR để quét tìm vùng khởi động (promoter)."

### 🤖 AI Agent (Đã được trang bị Kỹ năng):
> "Tôi sẽ truy cập cơ sở dữ liệu JASPAR để tải ma trận liên kết cho bạn:"
>
> 1. **Tìm mã ma trận**: Tra cứu tên yếu tố phiên mã REL trên JASPAR để tìm mã ma trận chuẩn là **MA0101.1**.
> 2. **Tải ma trận**: Tải dữ liệu ma trận (PFM) của REL dưới định dạng MEME hoặc JASPAR thông qua API.
> 3. **Phân tích chuỗi mẫu**: Trích xuất chuỗi DNA mẫu mà yếu tố này thường liên kết (chuỗi đồng thuận) và gửi cho bạn.
>
> *Dữ liệu ma trận chuẩn hóa này đã sẵn sàng để bạn đưa vào các công cụ quét chuyên sâu.*

## ⚠️ Lưu Ý & Gotchas

- **Phiên bản ma trận**: JASPAR liên tục cập nhật dữ liệu. Hãy luôn chọn phiên bản ma trận mới nhất (ví dụ: kết thúc bằng `.5` thay vì `.1`).
- **Khác biệt giữa các loài**: Cùng một yếu tố phiên mã nhưng chuỗi liên kết có thể khác nhau giữa người và chuột.
- **Có cấu trúc khớp chưa chắc đã liên kết thực tế**: Một chuỗi DNA trùng khớp với ma trận của JASPAR chỉ là dự đoán lý thuyết. Để biết thực tế có liên kết hay không, cần đối chiếu với các bằng chứng thực nghiệm khác (như ENCODE hay UniBind).
