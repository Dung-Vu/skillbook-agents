---
slug: alphafold-database
title: AlphaFold Structure Analysis
command: /alphafold-database
category: bioinformatics-genomics
tags:
  - alphafold
  - protein-structure
  - plddt
  - structural-biology
  - deepmind
complexity: intermediate
platforms:
  - cursor
  - claude-code
  - windsurf
  - gemini-cli
  - universal
featured: true
description: >-
  Truy xuất và phân tích cấu trúc protein dự đoán bởi AlphaFold bằng mã UniProt
  ID.
oneLiner: Truy xuất và phân tích cấu trúc protein dự đoán bởi AlphaFold.
sourceUrl: 'https://alphafold.ebi.ac.uk/'
sourceAuthor: Google DeepMind
lastVerified: '2026-05-30'
relatedSkills:
  - foldseek-structural-search
  - pymol
  - uniprot-database
  - pdb-database
seoTitle: AlphaFold Structure Analysis — Skillbook Agents
seoDescription: >-
  Hướng dẫn Agent truy xuất cấu trúc protein AlphaFold, phân tích pLDDT và
  domain boundaries tự động.
provider: antigravity
---

## 📖 Tại Sao Cần Skill Này?

AlphaFold Database chứa hơn 200 triệu cấu trúc protein dự đoán — nguồn tài nguyên khổng lồ cho nghiên cứu sinh học cấu trúc. Tuy nhiên, Agent mặc định không biết cách:

- **Truy xuất cấu trúc**: Không biết API endpoint hay format file mmCIF mà AlphaFold sử dụng
- **Đánh giá chất lượng dự đoán**: Không hiểu metric pLDDT (predicted Local Distance Difference Test) — chỉ số quan trọng nhất cho biết độ tin cậy từng vùng
- **Phát hiện domain boundaries**: Không phân tích được Predicted Aligned Error (PAE) matrix để xác định ranh giới giữa các domain cứng

Skill này trang bị cho Agent bộ công cụ CLI hoàn chỉnh để tải cấu trúc, phân tích độ tin cậy, và phát hiện vùng vô trật tự (intrinsically disordered regions) tự động.

## ⚙️ Cách Hoạt Động

Workflow gồm 3 bước chính:

```
UniProt ID → Fetch Structure (mmCIF + PAE) → Analyze pLDDT → Analyze PAE/Domains
```

1. **Fetch Structure**: Tải file `.cif`, PAE JSON, và metadata từ AlphaFold API bằng script `fetch_structure.py`. Hỗ trợ tự động fallback sang fragment cho protein lớn.
2. **Analyze pLDDT**: Script `analyze_plddt.py` đọc metadata và phân loại: structured, disordered, hoặc mixed dựa trên ngưỡng confidence (Very High >90, High 70-90, Low 50-70, Very Low <50).
3. **Analyze PAE/Domains**: Script `analyze_pae.py` dùng sliding-window heuristic để phát hiện domain boundaries từ PAE matrix.

## 🚀 Cách Sử Dụng

### Universal

```markdown
# AlphaFold Structure Analysis Rules

Khi người dùng yêu cầu phân tích cấu trúc protein từ AlphaFold:
1. Yêu cầu UniProt Accession ID (vd: P00520, P04637). KHÔNG chấp nhận tên protein hay gene name.
2. Sử dụng script fetch_structure.py để tải cấu trúc mmCIF và PAE.
3. Chạy analyze_plddt.py để đánh giá confidence — báo cáo rõ ràng phần trăm vùng high/low confidence.
4. Chạy analyze_pae.py để phát hiện domain boundaries.
5. Tổng hợp kết quả: overall confidence, số domain, vùng disordered, cảnh báo nếu protein quá lớn (>2700 AA).
```

### Cursor (.cursorrules)

```markdown
# AlphaFold Analysis
- Luôn yêu cầu UniProt ID trước khi fetch cấu trúc AlphaFold.
- Chạy cả pLDDT analysis lẫn PAE domain analysis cho mỗi protein.
- Cảnh báo rõ ràng nếu protein có phần lớn vùng disordered (pLDDT < 50).
- Nhắc người dùng rằng pLDDT per-residue nằm trong B-factor column của file mmCIF.
```

### Claude Code

```markdown
# AlphaFold Analysis Instructions
- Require UniProt Accession ID before querying AlphaFold Database.
- Always run both pLDDT and PAE analyses — present a unified structural summary.
- Flag isoform warnings and large protein fragment issues prominently.
```

## 💡 Kịch Bản Lập Trình Thực Tế

### 🧑‍💻 Nhà phát triển:
> "Hãy tải và phân tích cấu trúc protein ABL1 từ cơ sở dữ liệu AlphaFold để xem vùng nào có độ tin cậy cao và vùng nào bị vô trật tự."

### 🤖 AI Agent (Đã được trang bị Kỹ năng):
> "Tôi sẽ tiến hành thực hiện yêu cầu này ngầm bằng các bước tự động sau:"
>
> 1. **Ánh xạ mã protein**: Tôi đã tự động chẩn đoán và ánh xạ gene ABL1 sang mã UniProt ID chuẩn là **P00520**.
> 2. **Tải cấu trúc mmCIF và ma trận PAE**: Tôi tự động chạy script tải cấu trúc 3D mmCIF và ma trận Predicted Aligned Error (PAE) từ AlphaFold Database.
> 3. **Phân tích chất lượng pLDDT**: Tôi quét dữ liệu pLDDT và nhận thấy cấu trúc đạt độ tin cậy trung bình là 72.3 (Mixed confidence), trong đó có 35% vùng đạt độ tin cậy rất cao (>90) và 22% vùng độ tin cậy rất thấp (<50).
> 4. **Xác định ranh giới các Domain**: Tôi phân tích ma trận PAE và xác định thành công ranh giới của 3 domain chính: SH3 (Residues 1-82), SH2 (Residues 83-145) và Kinase (Residues 230-500).
> 5. **Đưa ra khuyến nghị chuyên môn**: Tôi phát hiện vùng liên kết (Residues 146-229) có chỉ số pLDDT rất thấp, kết luận đây là vùng vô trật tự (intrinsically disordered linker) và khuyên bạn nên tránh sử dụng vùng này cho các tác vụ docking phân tử hay căn chỉnh cấu trúc.
>
> *Chỉ sau vài giây, toàn bộ cấu trúc 3D và báo cáo đánh giá chất lượng dự đoán của protein ABL1 đã được tổng hợp chi tiết và trực quan cho bạn.*

## ⚠️ Lưu Ý & Gotchas

- **Bắt buộc UniProt ID**: Không chấp nhận gene name, protein name, hay amino acid sequence. Yêu cầu người dùng tra cứu ID tại [uniprot.org](https://www.uniprot.org) trước.
- **Protein lớn (>2700 AA)**: AlphaFold chia thành fragments — kết quả có thể không hoàn chỉnh và cần cảnh báo rõ ràng.
- **Disordered ≠ sai**: pLDDT thấp không có nghĩa dự đoán sai — có thể protein đó thực sự vô trật tự (intrinsically disordered). Đừng nhầm lẫn hai khái niệm này.
- **Rate limit**: Script wrapper tự động enforce rate limit. Không tự gọi API trực tiếp bằng curl/wget.
