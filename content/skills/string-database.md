---
slug: string-database
title: STRING Protein Interactions
command: /string-database
category: bioinformatics-genomics
tags:
  - string
  - protein-interactions
  - ppi
  - network
  - functional-enrichment
complexity: intermediate
platforms:
  - cursor
  - claude-code
  - windsurf
  - gemini-cli
  - universal
featured: false
description: >-
  Kỹ năng tìm kiếm và phân tích cách các protein tương tác với nhau trong cơ thể, giúp xác định các protein liên kết và các con đường sinh học liên quan dựa trên cơ sở dữ liệu STRING.
oneLiner: Tra cứu mạng lưới tương tác giữa các protein và phân tích chức năng sinh học của chúng.
sourceUrl: 'https://string-db.org/'
sourceAuthor: Google DeepMind
lastVerified: '2026-05-30'
relatedSkills: []
seoTitle: STRING Protein Interactions — Skillbook Agents
seoDescription: >-
  Hướng dẫn Agent truy vấn protein-protein interactions và functional enrichment
  từ STRING.
provider: antigravity
---

## 📖 Tại Sao Cần Skill Này?

Các protein trong cơ thể không hoạt động riêng lẻ mà liên kết với nhau để thực hiện các chức năng sống. Kỹ năng này giúp bạn nhanh chóng tra cứu xem một loại protein cụ thể thường tương tác với những protein nào khác, mức độ tin cậy của mối liên kết đó ra sao và chúng cùng tham gia vào hoạt động sinh học nào trong tế bào.

- **Tìm đối tác tương tác**: Biết được protein X liên kết với những protein nào và độ tin cậy là bao nhiêu.
- **Xem nguồn bằng chứng**: Biết mối liên kết này được phát hiện qua thí nghiệm thực tế, qua tài liệu nghiên cứu hay suy luận máy tính.
- **Phân tích vai trò**: Xác định nhóm protein này cùng tham gia vào nhiệm vụ hay con đường sinh học nào.

## ⚙️ Cách Hoạt Động

Quy trình hoạt động:
```
[Tên Protein] ➔ [Truy vấn dữ liệu STRING] ➔ [Trả về mạng lưới liên kết & Phân tích chức năng]
```
1. **Tìm kiếm mạng lưới**: Lấy danh sách các protein tương tác trực tiếp với protein mục tiêu.
2. **Đánh giá bằng chứng**: Phân tích độ tin cậy của mối tương tác dựa trên nhiều nguồn dữ liệu khác nhau.
3. **Phân tích chức năng**: Lọc ra các con đường sinh học hoặc chức năng tế bào mà nhóm protein đó cùng đảm nhận.

## 🚀 Cách Sử Dụng

```markdown
# CÁC QUY TẮC TRA CỨU
- Chọn mức độ tin cậy cao (điểm số tương tác > 0.7) để có kết quả chính xác nhất.
- Liệt kê rõ các nguồn bằng chứng (từ thí nghiệm thực tế hay từ sách báo).
- Luôn chỉ định rõ loài sinh vật khi tra cứu (ví dụ: mã 9606 đại diện cho loài người).
```

## 💡 Kịch Bản Lập Trình Thực Tế

### 🧑‍💻 Nhà phát triển:
> "Tôi muốn tìm các protein tương tác mạnh nhất với gene AKT1 ở người để nghiên cứu cơ chế sinh học của nó."

### 🤖 AI Agent (Đã được trang bị Kỹ năng):
> "Tôi sẽ tra cứu cơ sở dữ liệu STRING để tìm các protein tương tác với AKT1 ở người:
>
> 1. **Ánh xạ tên**: Tôi chuyển đổi tên gene AKT1 sang mã protein tương ứng trong hệ thống STRING.
> 2. **Tìm đối tác liên kết**: Tôi tải danh sách các protein tương tác trực tiếp có độ tin cậy cao (> 0.7).
> 3. **Phân tích kết quả**: Tôi liệt kê các protein liên kết mạnh nhất như MTOR, PTEN, PIK3CA cùng với điểm số tin cậy và giải thích vai trò của chúng."

## ⚠️ Lưu Ý & Gotchas

- **Cách tính điểm tương tác**: Điểm tin cậy được tính theo thuật toán tích hợp nhiều nguồn của STRING, không phải phép cộng đơn giản của các bằng chứng.
- **Bằng chứng từ sách báo (Text-mining)**: Đôi khi hai protein chỉ được nhắc chung trong các bài báo nghiên cứu nhưng chưa chắc đã tương tác vật lý với nhau trong tế bào.
- **Loài sinh vật rất quan trọng**: Mạng lưới tương tác của cùng một loại protein có thể rất khác nhau giữa người và các loài động vật khác (như chuột).
- **Tương tác chức năng và vật lý**: STRING hiển thị cả các protein cùng hoạt động hỗ trợ nhau (tương tác chức năng) chứ không chỉ những protein tiếp xúc vật lý trực tiếp với nhau.
