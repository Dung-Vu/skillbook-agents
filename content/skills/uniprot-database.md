---
slug: "uniprot-database"
title: "UniProt Protein Metadata Retrieval"
command: "/uniprot-database"
category: "data-knowledge"
tags:
  - "uniprot"
  - "proteins"
  - "proteomics"
  - "protein-sequence"
complexity: "intermediate"
platforms:
  - "cursor"
  - "claude-code"
  - "windsurf"
  - "universal"
featured: false
description: "Truy cập cơ sở dữ liệu UniProtKB để tra cứu siêu dữ liệu protein, chức năng sinh học, phân loại học và trình tự acid amin."
oneLiner: "Retrieve comprehensive protein metadata and sequences from UniProt."
sourceUrl: "https://www.uniprot.org/"
sourceAuthor: "Antigravity"
lastVerified: "2026-05-29"
relatedSkills:
  - "pymol"
  - "protein-sequence-msa"
  - "quickgo-database"
seoTitle: "UniProt Protein Metadata Retrieval - Skillbook Agents"
seoDescription: "Hướng dẫn tích hợp UniProt để tự động hóa việc truy xuất cấu trúc, chức năng và trình tự protein qua AI Agent."
---

## 📖 Tại Sao Cần Skill Này?

Trong nghiên cứu sinh học tế bào và proteomics, protein là đối tượng nghiên cứu cốt lõi. Việc nắm rõ chức năng sinh học, tương tác phân tử và chuỗi amino acid của protein là chìa khóa để giải quyết các bài toán y sinh. Một AI Agent thông thường dễ vướng phải các rào cản:
- **Trình bày sai chuỗi FASTA**: Tự sáng tạo hoặc làm mất các amino acid trong chuỗi sequence của protein.
- **Thiếu thông tin phân vùng (Domain/Active site)**: Không chỉ ra được vị trí chính xác của các cầu disulfua, vùng xuyên màng, hoặc trung tâm hoạt động của enzyme.
- **Sử dụng mã định danh lỗi thời**: Nhầm lẫn giữa các ID của các cơ sở dữ liệu khác nhau (PDB, RefSeq, GenBank).

Skill này giúp Agent khai thác cơ sở dữ liệu UniProtKB thông qua UniProt MCP tool để định danh chính xác protein bằng Accession Number tiêu chuẩn và trích xuất siêu dữ liệu sinh học đầy đủ, cập nhật nhất.

## ⚙️ Cách Hoạt Động

UniProt Protein Metadata Retrieval hoạt động bằng cách hướng dẫn Agent sử dụng giao thức truy vấn REST API của UniProt. Quy trình xử lý gồm:
1. **Phân giải Accession ID**: Nhận diện các mã UniProt định dạng chuẩn (ví dụ: `P0DTC2` cho Spike protein của SARS-CoV-2 hoặc `P68871` cho Beta-globin).
2. **Truy xuất thông tin chức năng**: Lấy dữ liệu mô tả chức năng (Function), các con đường chuyển hóa liên quan (Pathways) và vị trí dưới tế bào (Subcellular Location).
3. **Phân tích cấu trúc miền (Miền chức năng)**: Trích xuất tọa độ các Domain, Active Sites và các biến đổi sau dịch mã (Post-translational modifications - PTM).
4. **Lấy chuỗi Sequence**: Trích xuất chuỗi acid amin định dạng FASTA chuẩn mực, phục vụ cho các phân tích căn chỉnh chuỗi sinh học tiếp theo.

## 🚀 Cách Sử Dụng

### Universal

Hãy yêu cầu Agent tra cứu thông tin toàn diện về một protein đích bằng cách cung cấp Accession ID hoặc tên gen cụ thể:

```markdown
Hãy sử dụng UniProt MCP tool để tra cứu thông tin chi tiết về protein sau:
1. UniProt Accession: "P68871" (Hemoglobin subunit beta)
2. Thu thập các thông tin: Tên khoa học của sinh vật, chức năng sinh học chính của protein, vị trí hoạt động trong tế bào và chuỗi amino acid định dạng FASTA.
3. Chỉ ra các bệnh lý liên quan khi có đột biến xảy ra trên gen mã hóa protein này.
```

### Cursor (.cursorrules)

```markdown
# UniProt Query Rules
- Khi người dùng đề cập đến một protein, luôn ưu tiên sử dụng UniProt Accession ID để truy xuất siêu dữ liệu thay vì sử dụng tên gọi thông thường để tránh nhầm lẫn.
- Trình bày chuỗi FASTA trong các thẻ code block chuẩn xác với đầy đủ ký tự amino acid viết tắt (1 chữ cái).
- Luôn hiển thị trạng thái kiểm chứng (Verified status) của protein: Gold Star (Swiss-Prot / Reviewed) vs Grey Star (TrEMBL / Unreviewed).
```

### Claude Code

```markdown
# Claude Code UniProt Instructions
- Retrieve protein sequences and biological annotations using the UniProt REST API.
- Keep structural domain boundaries accurate when describing active sites.
```

### Windsurf

```markdown
# Windsurf UniProt Tooling
- Resolve gene symbols to UniProt Accession IDs.
- Extract catalytic activity details and cofactor requirements for enzymes.
```

## 💡 Ví Dụ Thực Tế

### ❌ Không có skill (Thông tin chung chung, chuỗi amino acid bị cắt xén):

```markdown
Protein Hemoglobin subunit beta mã hóa bởi gen HBB. Đây là thành phần của hemoglobin giúp vận chuyển oxy. Chuỗi amino acid của nó bắt đầu bằng MVHLT... và dài khoảng 147 acid amin.
*(Lưu ý: Thiếu tính chính xác và không có định dạng FASTA tiêu chuẩn để máy tính xử lý tiếp)*
```

### ✅ Có skill (Truy xuất UniProtKB chính xác cao):

```markdown
Dữ liệu truy xuất trực tiếp từ UniProtKB cho **Hemoglobin subunit beta (Accession: P68871)**:
- **Trạng thái**: Reviewed (Swiss-Prot)
- **Sinh vật**: *Homo sapiens* (Người)
- **Chức năng**: Tham gia vận chuyển oxy từ phổi đến các mô ngoại vi thông qua việc tạo phức tetramer gồm 2 chuỗi alpha và 2 chuỗi beta hemoglobin.
- **Chuỗi FASTA**:
```fasta
>sp|P68871|HBB_HUMAN Hemoglobin subunit beta OS=Homo sapiens OX=9606 GN=HBB PE=1 SV=2
MVHLTPEEKSAVTALWGKVNVDEVGGEALGRLLVVYPWTQRFFESFGDLSTPDAVMGNPK
VKAHGKKVLGAFSDGLAHLDNLKGTFATLSELCDLHVDDPENFRLLGNVLVCVLAHHFGK
EFTPPVQAAYQKVVAGVANALAHKYH
```
- **Bệnh học liên quan**: Các biến thể trên gen *HBB* là nguyên nhân trực tiếp gây ra bệnh **Hồng cầu hình liềm** (Sickle Cell Anemia - đột biến Glu-6 thành Val) và bệnh **Beta-thalassemia**.
```

## ⚠️ Lưu Ý & Gotchas

- **Reviewed vs Unreviewed**: UniProt gồm hai phân mục: **Swiss-Prot** (đã được các chuyên gia thủ công kiểm chứng và chú giải, độ tin cậy rất cao) và **TrEMBL** (chú giải tự động bằng máy, quy mô lớn nhưng có thể chứa sai sót). Nhắc Agent luôn ưu tiên thông tin từ Swiss-Prot.
- **Trình tự đồng dạng (Isoforms)**: Một số gen có thể tạo ra nhiều isoform protein khác nhau do quá trình cắt nối lựa chọn (alternative splicing). Khi phân tích chuỗi, Agent cần làm rõ đang sử dụng chuỗi đại diện (canonical sequence) hay một isoform cụ thể.
