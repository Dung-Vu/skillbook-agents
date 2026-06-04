---
slug: protein-sequence-similarity-search
title: Protein Sequence Similarity Search
command: /protein-sequence-similarity-search
category: bioinformatics-genomics
tags:
  - blast
  - mmseqs2
  - homology
  - sequence-search
  - protein
complexity: intermediate
platforms:
  - cursor
  - claude-code
  - windsurf
  - gemini-cli
  - universal
featured: false
description: >-
  Đối chiếu trình tự protein truy vấn với các cơ sở dữ liệu lớn để tìm kiếm
  homologue di truyền và suy diễn chức năng sinh học.
oneLiner: Tìm kiếm trình tự protein tương đồng bằng MMseqs2 hoặc BLAST.
sourceUrl: 'https://www.ebi.ac.uk/Tools/sss/'
sourceAuthor: Google DeepMind
lastVerified: '2026-05-30'
relatedSkills:
  - protein-sequence-msa
  - uniprot-database
  - interpro-database
seoTitle: Protein Sequence Similarity Search — Skillbook Agents
seoDescription: >-
  Hướng dẫn Agent tìm kiếm protein homolog bằng MMseqs2 và BLAST để suy luận
  chức năng.
provider: antigravity
---

## 📖 Tại Sao Cần Skill Này?

- **Suy luận chức năng**: Định danh chức năng của protein chưa rõ bằng cách tìm kiếm các chuỗi tương đồng đã được chú giải.
- **MMseqs2 (Mặc định)**: Cung cấp khả năng tìm kiếm nhanh gấp 100-1000 lần BLAST, tối ưu cho lần quét đầu tiên.
- **BLAST (Dự phòng)**: Tìm kiếm toàn diện hơn, tự động kích hoạt khi MMseqs2 không trả về đủ kết quả.
## ⚙️ Cách Hoạt Động

```
Protein sequence (FASTA) → MMseqs2/BLAST search → 
Return homologous proteins (E-value, identity%, coverage)
```

- **Đầu vào**: Trình tự protein hoặc tệp FASTA.
- **Thuật toán quét**: Sử dụng MMseqs2 để tìm kiếm nhanh, tự động chuyển sang BLAST nếu cần kết quả sâu hơn.
- **Đầu ra**: Trích xuất các homologs kèm E-value, phần trăm đồng nhất (identity%), độ phủ (coverage) và chú giải.
## 🚀 Cách Sử Dụng


### Universal

```markdown
# Sequence Similarity Search
- Khi người dùng cung cấp protein sequence → chạy MMseqs2 trước.
- Nếu MMseqs2 trả ít kết quả → fallback sang BLAST.
- Báo cáo: top hits, E-value, identity%, functional annotations.
- KHÔNG dùng khi người dùng muốn tìm structural similarity → dùng Foldseek.
```

### Cursor (.cursorrules)

```markdown
# Protein Search
- MMseqs2 là default search tool. Dùng BLAST khi cần comprehensive search.
- E-value < 1e-5 = significant hit. Identity > 30% = likely same function.
- Luôn report taxonomy của top hits để check evolutionary conservation.
```

## 💡 Kịch Bản Lập Trình Thực Tế


### 🧑‍💻 Nhà phát triển:
> "Tôi vừa tìm thấy một chuỗi protein lạ từ mẫu đất. Hãy chạy BLAST để tìm xem protein này tương đồng với những protein đã biết nào."

### 🤖 AI Agent (Đã được trang bị Kỹ năng):
> "Tôi sẽ thực hiện tìm kiếm tương đồng chuỗi siêu tốc bằng thuật toán BLAST/MMseqs2 của NCBI/EBI:"
>
> 1. **Xác thực chuỗi truy vấn**: Tôi kiểm tra chuỗi amino acid của bạn để đảm bảo tính hợp lệ.
> 2. **Khởi chạy BLAST search**: Tôi gửi chuỗi protein của bạn lên máy chủ NCBI BLAST để quét qua cơ sở dữ liệu phi tương đồng khổng lồ (nr database).
> 3. **Phân tích các hit trùng khớp**: Tôi lọc danh sách các protein tương đồng nhất dựa trên chỉ số E-value (kỳ vọng sai số) gần bằng 0, điểm số Identity (tỷ lệ trùng khớp amino acid) và điểm Bit-score.
> 4. **Báo cáo kết luận chức năng**: Tôi trình bày bảng kết quả chi tiết, xác định protein lạ của bạn có tỷ lệ trùng khớp 98% với một enzyme cellulase của vi khuẩn đất, giúp bạn suy luận chính xác chức năng sinh học của mẫu.
>
> *Bảng kết quả BLAST và báo cáo chú giải chức năng chi tiết sẽ giúp bạn định danh mẫu protein lạ chỉ trong tích tắc.*

## ⚠️ Lưu Ý & Gotchas


- **Chỉ protein sequence**: Không dùng cho DNA/RNA. Nếu có coding DNA → translate trước.
- **Không dùng cho structural search**: Nếu sequence identity <20%, thử Foldseek thay vì BLAST.
- **E-value context**: E-value phụ thuộc database size — cùng một alignment có thể significant trong database nhỏ nhưng không significant trong database lớn.
