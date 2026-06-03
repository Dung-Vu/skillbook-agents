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
  Tải ma trận tần số vị trí (PFM/PWM) của các yếu tố phiên mã (Transcription
  Factors) dưới nhiều định dạng (MEME, JASPAR).
oneLiner: Truy xuất hồ sơ liên kết của các yếu tố phiên mã từ JASPAR.
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

JASPAR là database chuẩn cho Transcription Factor (TF) binding profiles — mô tả chính xác pattern DNA nào mà mỗi TF nhận diện và bind vào.

- **PFM/PWM retrieval**: Lấy position frequency/weight matrices cho specific TFs
- **Gene symbol → Matrix ID**: Resolve tên gene (TP53, SP1) thành JASPAR matrix IDs
- **Multiple formats**: Export MEME, TRANSFAC, PFM, JASPAR, YAML
- **Motif analysis**: Sử dụng để scan genomic sequences cho TF binding sites

## ⚙️ Cách Hoạt Động

```
TF name / Matrix ID → JASPAR API → 
Return PFM, PWM, metadata (species, class, family)
```

## 🚀 Cách Sử Dụng

### Universal

```markdown
# JASPAR Rules
- Dùng JASPAR khi cần TF binding motif matrices (PFM/PWM).
- Resolve gene symbols sang JASPAR Matrix IDs trước khi query.
- Output formats: MEME (cho FIMO scanning), TRANSFAC (cho legacy tools).
- Kết hợp với UCSC TFBS data để cross-validate predictions.
```

## 💡 Kịch Bản Lập Trình Thực Tế

### 🧑‍💻 Nhà phát triển:
> "Tôi cần tìm ma trận trọng số liên kết (PWM) của yếu tố phiên mã NF-kB (REL) từ cơ sở dữ liệu JASPAR để quét tìm promoter."

### 🤖 AI Agent (Đã được trang bị Kỹ năng):
> "Tôi sẽ kết nối trực tiếp với cơ sở dữ liệu JASPAR để tải ma trận liên kết yếu tố phiên mã cho bạn:"
>
> 1. **Tra cứu mã số Ma trận**: Tôi tìm kiếm yếu tố phiên mã REL trên JASPAR và xác định mã ma trận chuẩn **MA0101.1**.
> 2. **Tải ma trận định dạng PFM/PWM**: Tôi gửi yêu cầu tải Position Frequency Matrix (PFM) của REL dưới định dạng MEME hoặc JASPAR thuần từ API.
> 3. **Phân tích logo Sequence**: Tôi trích xuất trình tự đồng thuận (consensus sequence) của REL là `GGGRNYYYCC` và cung cấp thông số về độ bảo thủ thông tin (information content).
>
> *Ma trận liên kết JASPAR chuẩn hóa đã sẵn sàng, bạn có thể đưa trực tiếp vào các công cụ quét motif như FIMO hay MEME.*

## ⚠️ Lưu Ý & Gotchas

- **Matrix version**: JASPAR updates matrices — luôn dùng latest version (MA0079.5, không phải MA0079.1).
- **Species-specific**: Cùng TF có thể có motifs khác nhau giữa human vs mouse.
- **PWM ≠ binding**: Motif match trong sequence không guarantee TF actually binds — cần epigenomic evidence (ENCODE, UniBind).
