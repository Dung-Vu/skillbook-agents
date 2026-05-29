---
slug: "reactome-database"
title: "Reactome Pathway Analysis"
command: "/reactome-database"
category: "reasoning-planning"
tags:
  - "reactome"
  - "pathways"
  - "molecular-biology"
  - "systems-biology"
complexity: "expert"
platforms:
  - "cursor"
  - "claude-code"
  - "windsurf"
  - "universal"
featured: false
description: "Phân tích con đường sinh hóa, tương tác phân tử và mạng lưới sinh học bằng Reactome, ánh xạ danh sách gen/protein sang hệ thống metabolic pathways."
oneLiner: "Map genes to pathways and analyze network biology with Reactome."
sourceUrl: "https://reactome.org/"
sourceAuthor: "Antigravity"
lastVerified: "2026-05-29"
relatedSkills:
  - "quickgo-database"
  - "uniprot-database"
  - "protein-sequence-msa"
seoTitle: "Reactome Pathway Analysis - Skillbook Agents"
seoDescription: "Cách tích hợp Reactome API vào AI Agent để tự động phân tích làm giàu con đường sinh hóa."
---

## 📖 Tại Sao Cần Skill Này?

Trong sinh học hệ thống (systems biology) và phân tích biểu hiện gen (differential expression analysis), việc chỉ có danh sách các gen đột biến hoặc hoạt hóa là chưa đủ. Các nhà nghiên cứu cần hiểu các gen đó cùng nhau tham gia vào các quá trình sinh hóa (pathways) nào để giải thích cơ chế bệnh lý. AI Agent không có skill này sẽ:
- **Thiếu khả năng lập luận hệ thống**: Chỉ phân tích rời rạc từng gen mà không nhìn ra bức tranh toàn cảnh về mạng lưới chuyển hóa hay truyền tín hiệu (signaling cascades).
- **Phỏng đoán con đường chuyển hóa**: Bịa đặt các phản ứng hóa sinh hoặc gán ghép gen sai vị trí trong chuỗi phản ứng.
- **Không thể biểu diễn trực quan**: Không biết cách kết xuất sơ đồ con đường chuyển hóa để phân tích vị trí các protein tham gia.

Skill này hướng dẫn Agent khai thác các tính năng phân tích làm giàu (Enrichment Analysis) của Reactome API thông qua Reactome MCP tool để lập bản đồ con đường chuyển hóa chính xác và phân tích hệ thống sinh học cấp độ chuyên gia.

## ⚙️ Cách Hoạt Động

Reactome Pathway Analysis hoạt động dựa trên việc truyền danh sách các định danh sinh học (Gene symbols, UniProt IDs, hoặc ChEBI IDs) vào Reactome Content and Analysis Services. Quy trình diễn ra như sau:
1. **Ánh xạ ID (Identifier Mapping)**: Chuyển đổi danh sách đầu vào thành các thực thể phân tử được chuẩn hóa trong cơ sở dữ liệu Reactome.
2. **Phân tích làm giàu (Over-Representation Analysis)**: Tính toán xác suất thống kê (sử dụng phân phối siêu hình học - hypergeometric distribution, tính toán chỉ số p-value và FDR corrected p-value) để xác định xem các con đường sinh hóa nào có sự hiện diện vượt trội của danh sách gen đầu vào so với ngẫu nhiên.
3. **Trích xuất chuỗi phản ứng (Reactions Chain)**: Xác định vị trí của gen đích trong chuỗi phản ứng (Upstream/Downstream) và các protein đồng vận/kháng vận tương tác trực tiếp.
4. **Kết xuất hình ảnh (Diagram Export)**: Gọi API xuất sơ đồ con đường chuyển hóa định dạng PNG/SVG, làm nổi bật (highlight) các protein có trong danh sách của người dùng.

## 🚀 Cách Sử Dụng

### Universal

Hãy yêu cầu Agent phân tích con đường chuyển hóa sinh học cho một danh sách gen đột biến bằng Reactome:

```markdown
Hãy sử dụng Reactome MCP tool để thực hiện phân tích làm giàu con đường sinh hóa cho danh sách gen sau:
Danh sách gen: "EGFR, KRAS, BRAF, MAP2K1, MAPK1"
1. Ánh xạ các gen này vào các con đường truyền tín hiệu của Reactome.
2. Xác định con đường sinh hóa chính có ý nghĩa thống kê cao nhất (p-value nhỏ nhất).
3. Liệt kê các phản ứng sinh hóa chi tiết trong con đường này và vai trò cụ thể của từng gen trong chuỗi truyền tín hiệu từ màng tế bào vào nhân.
4. Xuất liên kết sơ đồ con đường chuyển hóa (pathway diagram) làm nổi bật các gen này nếu có.
```

### Cursor (.cursorrules)

```markdown
# Reactome Analysis Rules
- Luôn yêu cầu người dùng cung cấp danh sách gen ở dạng định dạng chuẩn như HGNC Gene Symbol (e.g., EGFR) hoặc UniProt ID (e.g., P00533) để đảm bảo độ chính xác khi ánh xạ.
- Khi báo cáo kết quả phân tích làm giàu, bắt buộc phải hiển thị các chỉ số thống kê: p-value, FDR (False Discovery Rate), và số lượng gen được ánh xạ thành công trên tổng số gen của con đường đó (e.g., 5/120 genes).
- Sắp xếp thứ tự các con đường chuyển hóa phát hiện được theo độ ý nghĩa thống kê giảm dần.
```

### Claude Code

```markdown
# Claude Code Reactome Instructions
- Perform Over-Representation Analysis using Reactome REST API `/AnalysisService`.
- Extract reaction participants (inputs, catalysts, outputs) for key biological pathways.
```

### Windsurf

```markdown
# Windsurf Reactome Pathways
- Auto-submit gene sets to Reactome identifier mapping tools.
- Highlight candidate proteins inside SVG biochemical diagrams.
```

## 💡 Ví Dụ Thực Tế

### ❌ Không có skill (Phân tích cơ chế chung chung, thiếu thống kê sinh học):

```markdown
EGFR, KRAS, BRAF, MAP2K1 và MAPK1 là các gen thuộc con đường MAPK liên quan đến bệnh ung thư. Khi chúng đột biến, tế bào sẽ tăng trưởng không kiểm soát.
*(Lưu ý: Không chỉ ra được chỉ số thống kê làm giàu và vị trí phản ứng cụ thể trong mạng lưới chuyển hóa)*
```

### ✅ Có skill (Báo cáo sinh học hệ thống chuyên sâu từ Reactome):

```markdown
Kết quả phân tích làm giàu thực tế từ **Reactome Analysis Service** cho danh sách gen: **EGFR, KRAS, BRAF, MAP2K1, MAPK1**:

### 1. Con đường sinh học nổi bật nhất
- **Tên con đường**: **Signaling by EGFR (R-HSA-177929)**
- **Số gen ánh xạ**: 5 / 102 (Độ bao phủ: 4.9%)
- **Chỉ số thống kê**: $p\text{-value} = 1.23 \times 10^{-7}$ | $\text{FDR} = 2.45 \times 10^{-6}$

### 2. Cơ chế truyền tín hiệu chi tiết (Cascade Reactions)
Sự tương tác của nhóm gen này tạo nên trục truyền tín hiệu **EGFR-MAPK** cổ điển điều hòa sự sinh trưởng của tế bào:
1. **EGFR (Receptor Tyrosine Kinase)** ở màng tế bào tự phosphoryl hóa khi gắn phối tử, kích hoạt protein trao đổi nucleotide SOS để chuyển đổi **KRAS** từ dạng bất hoạt (gắn GDP) sang hoạt động (gắn GTP).
2. **KRAS-GTP** tuyển mộ **BRAF (Raf kinase)** lên màng tế bào, kích hoạt nó thông qua quá trình phosphoryl hóa.
3. **BRAF** hoạt hóa phosphoryl hóa kinase **MAP2K1 (MEK1)**.
4. **MAP2K1** tiếp tục phosphoryl hóa kinase **MAPK1 (ERK2)**.
5. **MAPK1** dạng hoạt động di chuyển vào nhân tế bào, kích hoạt các yếu tố phiên mã (như *c-Fos*, *c-Jun*) thúc đẩy chu kỳ tế bào.

- **Diagram Link**: [Sơ đồ R-HSA-177929](https://reactome.org/PathwayBrowser/#/R-HSA-177929&FLG=EGFR,KRAS,BRAF,MAP2K1,MAPK1) làm nổi bật các gen đích của bạn bằng màu vàng.
```

## ⚠️ Lưu Ý & Gotchas

- **Đồng danh sinh học (Synonyms)**: Nhiều gen có nhiều tên gọi khác nhau (ví dụ: *MAPK1* còn được gọi là *ERK2*). Reactome hỗ trợ tự động giải quyết đồng danh, nhưng để chính xác nhất, khuyên Agent nên khuyên người dùng chuẩn hóa danh sách gen theo chuẩn HGNC trước khi chạy phân tích.
- **Tính đa dạng loài (Species Specificity)**: Mặc dù Reactome chú giải sâu nhất cho loài người (*Homo sapiens*), hệ thống cũng tự động suy luận (inference) sang các loài sinh vật mô hình khác như chuột, ruồi giấm hay nấm men. Hãy đảm bảo Agent chọn đúng loài đích trong tham số API để tránh sai lệch kết quả.
