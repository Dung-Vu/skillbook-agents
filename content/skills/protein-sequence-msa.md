---
slug: protein-sequence-msa
title: Protein Multiple Sequence Alignment
command: /protein-sequence-msa
category: bioinformatics-genomics
tags:
  - msa
  - clustal-omega
  - sequence-alignment
  - protein
  - conservation
complexity: intermediate
platforms:
  - cursor
  - claude-code
  - windsurf
  - gemini-cli
  - universal
featured: false
description: >-
  Căn chỉnh nhiều trình tự protein để đánh giá mức độ tương đồng di truyền, vùng
  domain bảo tồn và các axit amin quan trọng.
oneLiner: Thực hiện đa căn chỉnh trình tự protein (MSA) bằng Clustal Omega.
sourceUrl: 'https://www.ebi.ac.uk/jdispatcher/msa/clustalo'
sourceAuthor: Google DeepMind
lastVerified: '2026-05-30'
relatedSkills: []
seoTitle: Protein Multiple Sequence Alignment — Skillbook Agents
seoDescription: >-
  Hướng dẫn Agent thực hiện MSA protein với Clustal Omega để phân tích
  conservation và residue quan trọng.
provider: antigravity
---

## 📖 Tại Sao Cần Skill Này?

- **Phân tích Bảo tồn & Đột biến**: Xác định các vị trí amino acid được bảo tồn qua tiến hóa để dự đoán tầm ảnh hưởng của đột biến.
- **Nhận diện Domain**: Phát hiện ranh giới các domain chức năng chung hoặc các vùng chèn/xóa đặc thù của loài.
- **Tích hợp API EBI**: Căn chỉnh đa chuỗi (MSA) qua EBI Clustal Omega API mà không cần cài đặt công cụ cục bộ.
## ⚙️ Cách Hoạt Động

```
Multiple sequences (FASTA) → Submit to Clustal Omega API → 
Wait for result → Return aligned sequences + conservation scores
```

- **Đầu vào**: Nhận từ 2 đến 4000 chuỗi protein định dạng FASTA (tối đa 4 MB).
- **Căn chỉnh**: Sử dụng thuật toán HMM profile-profile alignment của Clustal Omega thông qua EBI API.
- **Đầu ra**: Trả về các chuỗi đã căn chỉnh kèm gap và ký tự chỉ thị mức độ bảo tồn (`*`, `:`, `.`).
## 🚀 Cách Sử Dụng


### Universal

```markdown
# Protein MSA Rules
- Yêu cầu ít nhất 2 protein sequences ở format FASTA.
- KHÔNG dùng cho DNA/RNA alignment — chỉ protein.
- KHÔNG dùng nếu chỉ có 1 sequence — dùng protein-sequence-similarity-search để tìm homologs trước.
- Tóm tắt conservation patterns: residue nào identical, vùng nào variable.
```

### Cursor (.cursorrules)

```markdown
# MSA Analysis
- Chạy Clustal Omega qua EBI API, không cài local tools.
- Highlight residue 100% conserved — đây là candidate functional sites.
- Kết hợp với InterPro để verify domain boundaries.
```

## 💡 Kịch Bản Lập Trình Thực Tế


### 🧑‍💻 Nhà phát triển:
> "Tôi có chuỗi amino acid của 5 loại hemoglobin từ các loài động vật khác nhau. Hãy chạy căn chỉnh đa chuỗi (MSA) để tôi tìm vùng bảo thủ chức năng."

### 🤖 AI Agent (Đã được trang bị Kỹ năng):
> "Tôi sẽ thực hiện căn chỉnh đa chuỗi bằng công cụ Clustal Omega của viện EBI thông qua quy trình tự động hóa:"
>
> 1. **Chuẩn bị dữ liệu FASTA**: Tôi kiểm tra và định dạng chuỗi của 5 loài thành một tệp tin FASTA chung.
> 2. **Chạy căn chỉnh Clustal Omega**: Tôi gửi dữ liệu đến máy chủ EBI để khởi chạy thuật toán căn chỉnh đa chuỗi.
> 3. **Phân tích vùng bảo thủ**: Tôi đọc kết quả căn chỉnh, xác định chính xác các vị trí amino acid bảo thủ 100% (như các vị trí histidine liên kết với nhân heme) và đánh giá độ tương đồng chuỗi.
> 4. **Trình bày kết quả trực quan**: Tôi tạo biểu đồ căn chỉnh dạng chữ, sử dụng các ký tự đặc biệt (*, :, .) để biểu thị mức độ bảo thủ và đề xuất xây dựng cây phát sinh chủng loại sơ bộ.
>
> *Kết quả căn chỉnh đa chuỗi trực quan giúp bạn xác định ngay lập tức ranh giới các vùng chức năng quan trọng của protein.*

## ⚠️ Lưu Ý & Gotchas

- **Chỉ dùng cho Protein**: Không hỗ trợ chuỗi DNA/RNA hay nucleotide thô.
- **Giới hạn & Điều kiện**: Yêu cầu tối thiểu 2 chuỗi (tối đa 4000 chuỗi, 4 MB). Nếu có 1 chuỗi, cần tìm homologs trước.
- **Xử lý bất đồng bộ**: Tiến trình chạy trên máy chủ EBI nên có thể mất từ vài giây đến vài phút để hoàn thành.
