---
slug: "dbsnp-database"
title: "dbSNP Genetic Variant Lookup"
command: "/dbsnp-database"
category: "data-knowledge"
tags:
  - "dbsnp"
  - "genetics"
  - "single-nucleotide-polymorphism"
  - "rsid"
complexity: "starter"
platforms:
  - "cursor"
  - "claude-code"
  - "windsurf"
  - "universal"
featured: false
description: "Tra cứu các biến thể di truyền ngắn (SNP, indels) trong cơ sở dữ liệu NCBI dbSNP bằng mã rsID hoặc tọa độ GRCh38."
oneLiner: "Query short genetic variants in NCBI dbSNP."
sourceUrl: "https://www.ncbi.nlm.nih.gov/snp/"
sourceAuthor: "Antigravity"
lastVerified: "2026-05-29"
relatedSkills:
  - "uniprot-database"
  - "quickgo-database"
  - "alphagenome-single-variant-analysis"
seoTitle: "dbSNP Genetic Variant Lookup - Skillbook Agents"
seoDescription: "Cách hướng dẫn AI Agent tra cứu biến thể di truyền và định danh SNP bằng rsID qua dbSNP."
---

## 📖 Tại Sao Cần Skill Này?

Khi phân tích dữ liệu bộ gen người (human genomics), việc tra cứu các biến thể di truyền đóng vai trò cốt lõi để xác định nguy cơ bệnh lý hoặc đặc điểm kiểu hình. Tuy nhiên, AI Agent nếu thiếu kết nối với cơ sở dữ liệu thực tế sẽ gặp các vấn đề lớn:
- **Nhầm lẫn tọa độ gen**: Trộn lẫn giữa các hệ tọa độ tham chiếu khác nhau như GRCh37 (hg19) và GRCh38 (hg38).
- **Mơ hồ về tần suất alen (Allele Frequency)**: Không thể cung cấp tần suất xuất hiện chính xác của biến thể trong các quần thể người (như 1000 Genomes hay gnomAD).
- **Sai lệch thông tin kiểu gen**: Nhầm lẫn các nucleotide bị đột biến.

Skill này trang bị cho Agent khả năng sử dụng dbSNP MCP tool để phân tích chính xác các mã định danh biến thể di truyền tiêu chuẩn (rsID) và lập bản đồ tọa độ gen đáng tin cậy.

## ⚙️ Cách Hoạt Động

dbSNP Genetic Variant Lookup hoạt động thông qua việc tích hợp API Entrez Utilities của NCBI. Khi nhận diện một truy vấn chứa mã biến thể (ví dụ: `rs4988235`), Agent sẽ thực hiện:
1. **Chuẩn hóa thông tin**: Xác định kiểu nhập liệu (rsID, HGVS string, hoặc VCF format).
2. **Truy vấn dbSNP API**: Lấy về siêu dữ liệu của biến thể bao gồm: gene association, vị trí trên nhiễm sắc thể (GRCh38), các nucleotide gốc/đột biến (Ref/Alt allele), và ý nghĩa lâm sàng (Clinical Significance).
3. **Trích xuất tần suất**: Đọc các chỉ số tần suất alen của biến thể trong các quần thể toàn cầu phục vụ mục đích so sánh.

## 🚀 Cách Sử Dụng

### Universal

Hãy đặt câu hỏi trực tiếp yêu cầu Agent phân tích một mã rsID di truyền cụ thể:

```markdown
Sử dụng dbSNP MCP tool để tra cứu thông tin chi tiết về biến thể di truyền sau:
1. Mã rsID: "rs4988235"
2. Trích xuất các thông tin: Tên gen liên quan, vị trí nhiễm sắc thể trên bản dựng GRCh38, biến đổi nucleotide cụ thể, và tần suất alen trong quần thể.
3. Giải thích ngắn gọn tác động sinh học của biến thể này đối với kiểu hình của người mang đột biến.
```

### Cursor (.cursorrules)

```markdown
# dbSNP Variant Rules
- Luôn ưu tiên dùng dbSNP MCP tool khi người dùng cung cấp mã rsID (e.g., `rs...`) hoặc định dạng HGVS (e.g., `NC_000002.12:g.135851020T>G`).
- Luôn chỉ rõ hệ tọa độ tham chiếu đang được sử dụng (mặc định khuyên dùng GRCh38).
- Phân biệt rõ ràng giữa Ref Allele (alen tham chiếu gốc) và Alt Allele (alen đột biến).
```

### Claude Code

```markdown
# Claude Code dbSNP Instructions
- Query the dbSNP database whenever a genetic variant identifier is provided.
- Format genome coordinates clearly (e.g. Chr2:135,851,020 on GRCh38).
```

### Windsurf

```markdown
# Windsurf dbSNP Tool Usage
- Translate rsIDs to chromosomal locations.
- Fetch variant clinical significance (e.g. pathogenic, benign, association).
```

## 💡 Ví Dụ Thực Tế

### ❌ Không có skill (Agent đoán mò thông tin biến thể):

```markdown
Biến thể rs4988235 nằm trên gen liên quan đến huyết áp và có tần suất xuất hiện rất thấp trong quần thể châu Á. Nó có thể gây ra chứng tăng huyết áp thứ phát.
*(Lưu ý: Đây hoàn toàn là phỏng đoán sai lệch)*
```

### ✅ Có skill (Tra cứu chính xác qua dbSNP):

```markdown
Kết quả truy xuất chính xác từ dbSNP cho biến thể **rs4988235**:
- **Gen liên quan**: *MCM6* (nằm ở vùng thượng nguồn điều hòa gen *LCT* mã hóa enzyme lactase).
- **Tọa độ GRCh38**: Nhiễm sắc thể 2 (Chr2:135,851,020), nucleotide đổi từ T sang G (`NC_000002.12:g.135851020T>G`).
- **Ý nghĩa sinh học**: Đây là đột biến chính quy định đặc tính **dung nạp lactose ở người trưởng thành** (Lactase Persistence). Biến thể G là alen trội cho phép tiếp tục sản sinh enzyme lactase để tiêu hóa sữa khi trưởng thành.
- **Tần suất quần thể**: Rất cao ở châu Âu (>75%), nhưng cực kỳ thấp ở các quần thể Đông Á (<5%).
```

## ⚠️ Lưu Ý & Gotchas

- **Định dạng rsID**: Khi truy xuất, hãy đảm bảo chỉ truyền phần số nguyên hoặc có tiền tố `rs` viết thường (ví dụ: `rs4988235` hoặc `4988235`). Không viết hoa `RS4988235` vì có thể gây lỗi phân tích cú pháp ở một số hệ thống API cũ.
- **Cập nhật tọa độ**: Do genome tham chiếu liên tục được cải tiến, hãy luôn kiểm tra xem tọa độ hiển thị có khớp với bản dựng mới nhất GRCh38 (hg38) hay bản dựng cũ GRCh37 (hg19) để tránh sai số khi thiết kế mồi PCR.
