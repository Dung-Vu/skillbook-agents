---
slug: "quickgo-database"
title: "QuickGO Gene Ontology Mapping"
command: "/quickgo-database"
category: "data-knowledge"
tags:
  - "quickgo"
  - "gene-ontology"
  - "bioinformatics"
  - "gene-annotation"
complexity: "starter"
platforms:
  - "cursor"
  - "claude-code"
  - "windsurf"
  - "universal"
featured: false
description: "Ánh xạ gen và protein sang các thuật ngữ Gene Ontology (Biological Process, Molecular Function, Cellular Component) bằng QuickGO API."
oneLiner: "Map genes to ontology annotations with QuickGO."
sourceUrl: "https://www.ebi.ac.uk/QuickGO/"
sourceAuthor: "Antigravity"
lastVerified: "2026-05-29"
relatedSkills:
  - "uniprot-database"
  - "reactome-database"
  - "web-research"
seoTitle: "QuickGO Gene Ontology Mapping - Skillbook Agents"
seoDescription: "Cách tích hợp QuickGO để phân loại chức năng gen và ánh xạ Gene Ontology bằng AI Agent."
---

## 📖 Tại Sao Cần Skill Này?

Trong phân tích tin sinh học (bioinformatics) và giải trình tự gen thế hệ mới (NGS), việc phân loại chức năng của hàng ngàn gen là thách thức lớn. Hệ thống Gene Ontology (GO) cung cấp bộ từ vựng chuẩn hóa để giải quyết vấn đề này. Tuy nhiên, AI Agent khi không có skill này thường:
- **Ánh xạ sai thuật ngữ GO**: Sử dụng các ID GO ngẫu nhiên không tồn tại hoặc bị lỗi thời.
- **Nhầm lẫn giữa 3 phân loại chính**: Trộn lẫn giữa Biological Process (Quy trình sinh học), Molecular Function (Chức năng phân tử), và Cellular Component (Thành phần tế bào).
- **Mất dấu nguồn minh chứng (Evidence Codes)**: Đưa ra thông tin chức năng nhưng không thể chứng minh chú giải đó dựa trên bằng chứng thực nghiệm lâm sàng hay chỉ là suy luận tự động từ máy.

Skill này giúp Agent khai thác công cụ QuickGO API để tra cứu chính xác các chú giải GO, hiểu mối quan hệ phân cấp giữa các thuật ngữ và xác định độ tin cậy của dữ liệu sinh học.

## ⚙️ Cách Hoạt Động

QuickGO Gene Ontology Mapping hoạt động bằng cách kết nối với hệ thống REST API của QuickGO thuộc EMBL-EBI. Quy trình xử lý bao gồm:
1. **Lọc thông tin đầu vào**: Nhận diện gen (ví dụ: *TP53*) hoặc protein ID (ví dụ: `P04637`) và loại sinh vật mục tiêu.
2. **Truy vấn chú giải GO (Annotations)**: Lấy danh sách các thuật ngữ GO được liên kết với gen/protein đó.
3. **Phân loại thuật ngữ**: Sắp xếp các thuật ngữ thu được vào 3 nhánh cấu trúc chuẩn:
   - **Biological Process (BP)**: Hoạt động sinh học vĩ mô mà gen đóng góp (ví dụ: apoptosis - chết tế bào theo chương trình).
   - **Molecular Function (MF)**: Hoạt động hóa sinh ở cấp độ phân tử (ví dụ: DNA binding - liên kết DNA).
   - **Cellular Component (CC)**: Vị trí giải phẫu trong tế bào nơi protein hoạt động (ví dụ: nucleus - nhân tế bào).
4. **Trích xuất mã bằng chứng**: Lấy mã chứng cứ (ví dụ: EXP, IDA, IMP cho thực nghiệm; IBA, ISS cho so sánh trình tự) để đánh giá chất lượng chú giải.

## 🚀 Cách Sử Dụng

### Universal

Hãy yêu cầu Agent tra cứu và phân loại các chú giải chức năng của một protein sử dụng QuickGO API:

```markdown
Hãy sử dụng QuickGO MCP tool để truy xuất toàn bộ chú giải Gene Ontology cho protein sau:
1. Protein Accession: "P04637" (Cellular tumor antigen p53)
2. Hãy phân nhóm kết quả thu được thành 3 danh mục rõ ràng: Molecular Function, Biological Process và Cellular Component.
3. Đối với mỗi thuật ngữ GO, hãy hiển thị: GO ID (ví dụ: GO:0003700), Tên thuật ngữ và Mã chứng cứ (Evidence Code).
4. Nhận xét ngắn gọn về các hoạt động chính của protein này dựa trên dữ liệu thu được.
```

### Cursor (.cursorrules)

```markdown
# QuickGO Rules
- Luôn định dạng GO ID đúng chuẩn bắt đầu bằng `GO:` tiếp theo là 7 chữ số (e.g., `GO:0006915`).
- Khi trình bày các chú giải chức năng, bắt buộc phải chia làm 3 cột hoặc 3 nhóm: Biological Process, Molecular Function, Cellular Component.
- Giải thích rõ các mã chứng cứ (Evidence Codes) quan trọng nếu người dùng yêu cầu phân tích chuyên sâu về chất lượng nghiên cứu.
```

### Claude Code

```markdown
# Claude Code QuickGO Instructions
- Connect to EMBL-EBI QuickGO API to fetch precise ontology terms.
- Highlight experimental evidence codes (e.g., IDA, IMP) as high-confidence annotations.
```

### Windsurf

```markdown
# Windsurf QuickGO Mapping
- Query QuickGO for gene enrichment metadata.
- Extract cell compartment localization profiles.
```

## 💡 Ví Dụ Thực Tế

### ❌ Không có skill (Thông tin chung chung, không có mã ID chuẩn):

```markdown
Protein p53 hoạt động trong nhân tế bào, liên kết trực tiếp với DNA để ngăn ngừa ung thư và thúc đẩy quá trình tự hủy của các tế bào lỗi.
*(Lưu ý: Thiếu các định danh GO ID tiêu chuẩn và bằng chứng khoa học cụ thể)*
```

### ✅ Có skill (Báo cáo sinh học chuẩn hóa cấu trúc từ QuickGO):

```markdown
Dữ liệu Gene Ontology thu nhận từ QuickGO cho **p53 (Accession: P04637)**:

### 1. Molecular Function (Chức năng phân tử)
- **GO:0003700** - DNA-binding transcription factor activity (Mã chứng cứ: IDA - Inferred from Direct Assay)
- **GO:0008270** - zinc ion binding (Mã chứng cứ: IDA)

### 2. Biological Process (Quy trình sinh học)
- **GO:0006915** - apoptotic process (Mã chứng cứ: IMP - Inferred from Mutant Phenotype)
- **GO:0007049** - cell cycle (Mã chứng cứ: TAS - Traceable Author Statement)

### 3. Cellular Component (Thành phần tế bào)
- **GO:0005634** - nucleus (Mã chứng cứ: IDA)
- **GO:0005739** - mitochondrion (Mã chứng cứ: IDA)

**Nhận xét**: p53 đóng vai trò bảo vệ hệ gen bằng cách hoạt động như một yếu tố phiên mã liên kết DNA trong nhân (CC, MF), điều hòa chu kỳ tế bào và kích hoạt apoptosis (BP) khi phát hiện tổn thương DNA di truyền.
```

## ⚠️ Lưu Ý & Gotchas

- **Sự lỗi thời của thuật ngữ**: Một số thuật ngữ GO có thể bị thay thế (obsoleted) hoặc gộp vào các thuật ngữ khác theo thời gian. Hãy nhắc Agent kiểm tra trạng thái hoạt động của GO ID trong API trước khi sử dụng để tránh lỗi liên kết.
- **Tính đa dạng sinh vật**: Khi tra cứu các gen có tên giống nhau giữa các loài (ví dụ gen của chuột *Mus musculus* và người *Homo sapiens*), hãy luôn đi kèm mã định danh loài (Taxonomy ID) để nhận được kết quả chú giải chuẩn xác nhất.
