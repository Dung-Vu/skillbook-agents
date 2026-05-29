---
slug: "protein-sequence-msa"
title: "Multiple Sequence Alignment"
command: "/protein-sequence-msa"
category: "workflow-orchestration"
tags:
  - "msa"
  - "clustal-omega"
  - "bioinformatics"
  - "sequence-alignment"
complexity: "advanced"
platforms:
  - "cursor"
  - "claude-code"
  - "windsurf"
  - "universal"
featured: false
description: "Thực hiện căn chỉnh đa trình tự protein (Multiple Sequence Alignment - MSA) bằng Clustal Omega để phân tích tiến hóa, miền bảo tồn và vị trí đột biến."
oneLiner: "Align multiple protein sequences with Clustal Omega."
sourceUrl: "https://www.ebi.ac.uk/Tools/msa/clustalo/"
sourceAuthor: "Antigravity"
lastVerified: "2026-05-29"
relatedSkills:
  - "uniprot-database"
  - "pymol"
  - "web-research"
seoTitle: "Multiple Sequence Alignment - Skillbook Agents"
seoDescription: "Hướng dẫn tích hợp Clustal Omega để căn chỉnh chuỗi protein sinh học tự động qua AI Agent."
---

## 📖 Tại Sao Cần Skill Này?

Trong nghiên cứu sinh học tiến hóa và tin sinh học, việc so sánh nhiều trình tự protein (Multiple Sequence Alignment - MSA) là bước đi tiên quyết để phát hiện ra các amino acid có tính bảo tồn cao (highly conserved residues) - thường là các vị trí hoạt động quan trọng của protein. Khi thiếu skill này, AI Agent thường:
- **Căn chỉnh chuỗi thủ công sai lệch**: Tự ý chèn các khoảng trống (gaps) không đúng quy luật sinh học, làm hỏng khung đọc mở.
- **Không hiểu định dạng chuỗi**: Gặp lỗi khi đọc hoặc xuất ra các định dạng file sinh học tiêu chuẩn như FASTA, Clustal, hay Stockholm.
- **Mất dấu tiến hóa**: Không thể giải thích ý nghĩa sinh học của các ký hiệu bảo tồn (sao `*`, hai chấm `:`, chấm `.`).

Skill này hướng dẫn Agent khai thác các công cụ căn chỉnh chuỗi (như Clustal Omega hoặc MUSCLE) thông qua MSA MCP tool để tự động căn chỉnh hàng chục chuỗi protein, phát hiện vùng bảo tồn và vẽ cây tiến hóa (phylogenetic tree) chính xác.

## ⚙️ Cách Hoạt Động

Multiple Sequence Alignment hoạt động bằng cách gửi một tập hợp chuỗi protein ở định dạng FASTA đến công cụ căn chỉnh (ví dụ: API Clustal Omega tại EMBL-EBI). Quy trình bao gồm:
1. **Chuẩn hóa đầu vào**: Nhận danh sách các chuỗi dạng FASTA. Kiểm tra tính hợp lệ của các chữ cái đại diện cho amino acid (loại bỏ ký tự không hợp lệ).
2. **Gửi Task không đồng bộ (Asynchronous Job)**: Đăng ký một tiến trình MSA trên server EBI, nhận về một mã `Job ID` để theo dõi.
3. **Giám sát trạng thái (Polling status)**: Kiểm tra định kỳ trạng thái của Job (`RUNNING`, `FINISHED`, `ERROR`).
4. **Nhận kết quả (Fetch Results)**: Khi hoàn thành, tải về file căn chỉnh (Alignment output) và cây tiến hóa dạng Newick format.
5. **Phân tích vùng bảo tồn**: Đọc file căn chỉnh để chỉ ra các vùng acid amin hoàn toàn không thay đổi qua hàng triệu năm tiến hóa.

## 🚀 Cách Sử Dụng

### Universal

Yêu cầu Agent thực hiện căn chỉnh một danh sách chuỗi protein và phân tích các acid amin bảo tồn:

```markdown
Hãy sử dụng Clustal Omega MSA MCP tool để thực hiện căn chỉnh đa chuỗi cho các trình tự protein Hemoglobin subunit beta của 3 loài dưới đây:
1. Trình tự đầu vào định dạng FASTA:
```fasta
>Human
MVHLTPEEKSAVTALWGKVNVDEVGGEALGRLLVVYPWTQRFFESFGDLSTPDAVMGNPKVKAHGKKVLGAFSDGLAHLDNLKGTFATLSELCDLHVDDPENFRLLGNVLVCVLAHHFGKEFTPPVQAAYQKVVAGVANALAHKYH
>Chimpanzee
MVHLTPEEKSAVTALWGKVNVDEVGGEALGRLLVVYPWTQRFFESFGDLSTPDAVMGNPKVKAHGKKVLGAFSDGLAHLDNLKGTFATLSELCDLHVDDPENFRLLGNVLVCVLAHHFGKEFTPPVQAAYQKVVAGVANALAHKYH
>Mouse
MVHLTDAEKSAVSCLWGKVDVDEVGGEALGRLLVVYPWTQRYFDSFGDLSSASAIMGNPKVKAHGKKVINAFNDGLKHLDNLKGTFAHLSELCDLHVDDPENFRLLGNMIVIVLGHHLGKEFTPCAQAAFQKVVAGVASALAHKYH
```
2. Thực hiện căn chỉnh chuỗi và hiển thị kết quả định dạng Clustal.
3. Chỉ ra vị trí các amino acid được bảo tồn hoàn toàn ở cả 3 loài (kí hiệu `*`).
4. Giải thích ý nghĩa của vị trí đột biến Glu-6 ở người liên quan đến bệnh hồng cầu hình liềm so với chuột.
```

### Cursor (.cursorrules)

```markdown
# MSA Alignment Rules
- Luôn kiểm tra định dạng đầu vào của các chuỗi: Phải là định dạng FASTA chuẩn (mỗi chuỗi bắt đầu bằng dòng tiêu đề `>ID` và theo sau là chuỗi amino acid trên các dòng tiếp theo).
- Hiển thị kết quả căn chỉnh trong một khối code block có độ rộng lớn, sử dụng font chữ monospace để các cột amino acid thẳng hàng hoàn hảo.
- Giải thích rõ ý nghĩa các ký hiệu bảo tồn ở dòng cuối cùng của khối căn chỉnh:
  - `*`: Vị trí bảo tồn hoàn toàn (identical residues).
  - `:`: Bảo tồn nhóm chức năng hóa học tương tự mạnh (strongly similar properties).
  - `.`: Bảo tồn nhóm chức năng hóa học tương tự yếu (weakly similar properties).
```

### Claude Code

```markdown
# Claude Code MSA Instructions
- Submit MSA jobs asynchronously to EMBL-EBI Clustal Omega API.
- Poll the job status using the provided Job ID every 3 seconds until finished.
```

### Windsurf

```markdown
# Windsurf MSA Integration
- Automate Clustal Omega or MUSCLE runs inside the bio-project environment.
- Read phylogenetic Newick trees and convert them to readable ASCII graphics.
```

## 💡 Ví Dụ Thực Tế

### ❌ Không có skill (Căn chỉnh chuỗi thủ công lệch lạc, không hiểu quy luật):

```markdown
Căn chỉnh chuỗi Hemoglobin:
Human: MVHLTPEEKSAVTALW...
Mouse: MVHLTDAEKSAVSCLW...
Hai chuỗi này rất giống nhau, chỉ khác nhau ở vị trí số 6 là E và D.
*(Lưu ý: Thiếu sự chuyên nghiệp, không thể căn chỉnh chính xác khi số lượng chuỗi tăng lên hoặc có gap)*
```

### ✅ Có skill (Kết quả căn chỉnh sinh học chuẩn xác từ Clustal Omega):

```markdown
Dữ liệu căn chỉnh đa trình tự sinh học từ **Clustal Omega**:

```text
CLUSTAL O(1.2.4) multiple sequence alignment

Human           MVHLTPEEKSAVTALWGKVNVDEVGGEALGRLLVVYPWTQRFFESFGDLSTPDAVMGNPK 60
Chimpanzee      MVHLTPEEKSAVTALWGKVNVDEVGGEALGRLLVVYPWTQRFFESFGDLSTPDAVMGNPK 60
Mouse           MVHLTDAEKSAVSCLWGKVDVDEVGGEALGRLLVVYPWTQRYFDSFGDLSSASAIMGNPK 60
                ***** :******.*****:*********************:*:******: .*::****

Human           VKAHGKKVLGAFSDGLAHLDNLKGTFATLSELCDLHVDDPENFRLLGNVLVCVLAHHFGK 120
Chimpanzee      VKAHGKKVLGAFSDGLAHLDNLKGTFATLSELCDLHVDDPENFRLLGNVLVCVLAHHFGK 120
Mouse           VKAHGKKVINAFNDGLKHLDNLKGTFAHLSELCDLHVDDPENFRLLGNMIVIVLGHHLGK 120
                ********:.**:**: ********** ********************::* **.**:**

Human           EFTPPVQAAYQKVVAGVANALAHKYH 146
Chimpanzee      EFTPPVQAAYQKVVAGVANALAHKYH 146
Mouse           EFTPCAQAAFQKVVAGVASALAHKYH 146
                **** .***:********.*******
```

**Phân tích bảo tồn**:
- Dòng ký hiệu dưới cùng cho thấy mức độ bảo tồn rất cao giữa 3 loài (rất nhiều dấu `*` bảo tồn tuyệt đối).
- **Vị trí đột biến**: Ở vị trí số 6, chuỗi người (Human) và tinh tinh (Chimpanzee) có acid amin là **Glu (E)** (tính acid, phân cực), trong khi chuột (Mouse) có **Asp (D)** (cũng tính acid, phân cực). Điều này thể hiện một đột biến thay thế bảo tồn tính chất lý hóa của amino acid.
- Tuy nhiên, trong bệnh hồng cầu hình liềm ở người, **Glu-6** đột biến thành **Val-6** (kị nước, không phân cực), tạo ra một điểm kị nước trên bề mặt protein khiến các phân tử hemoglobin kết chùm thành sợi dài, làm biến dạng tế bào hồng cầu.
```

## ⚠️ Lưu Ý & Gotchas

- **Giới hạn số chuỗi**: Công cụ Clustal Omega qua API công cộng thường giới hạn tối đa 4000 chuỗi hoặc dung lượng file đầu vào dưới 4MB. Hãy nhắc Agent kiểm soát số lượng chuỗi đầu vào.
- **Loại trình tự (Type of sequences)**: Clustal Omega yêu cầu khai báo rõ loại trình tự (Protein, DNA, hoặc RNA) hoặc nó sẽ tự động phát hiện. Việc truyền nhầm chuỗi DNA vào chế độ căn chỉnh Protein sẽ gây ra lỗi nghiêm trọng hoặc làm lệch kết quả căn chỉnh.
