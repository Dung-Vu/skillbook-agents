---
slug: "alphagenome-single-variant-analysis"
title: "AlphaGenome Single Variant Effect Analysis"
command: "/alphagenome-single-variant-analysis"
category: "research-analysis"
tags:
  - "alphagenome"
  - "variant-effect"
  - "genomics"
  - "deep-learning"
complexity: "expert"
platforms:
  - "cursor"
  - "claude-code"
  - "windsurf"
  - "universal"
featured: false
description: "Dự đoán tác động của các biến thể di truyền đơn (coding & non-coding) lên biểu hiện gen (RNA-seq), cấu trúc nhiễm sắc chất và ái lực liên kết của protein bằng mô hình deep learning AlphaGenome."
oneLiner: "Predict genetic variant effects on gene regulation with AlphaGenome."
sourceUrl: "https://github.com/google-deepmind/alphagenome"
sourceAuthor: "Antigravity"
lastVerified: "2026-05-29"
relatedSkills:
  - "dbsnp-database"
  - "quickgo-database"
  - "web-research"
seoTitle: "AlphaGenome Single Variant Effect Analysis - Skillbook Agents"
seoDescription: "Cách hướng dẫn AI Agent dự đoán ảnh hưởng của biến thể di truyền lên biểu hiện gen sử dụng mô hình AlphaGenome."
---

## 📖 Tại Sao Cần Skill Này?

Hơn 90% các biến thể di truyền liên quan đến bệnh tật nằm ở vùng không mã hóa (non-coding regions) của bộ gen người. Việc dự đoán xem một đột biến ở vùng enhancer hay promoter ảnh hưởng thế nào đến biểu hiện gen là một thách thức cực kỳ lớn. Nếu thiếu skill này, AI Agent sẽ gặp phải các giới hạn nghiêm trọng:
- **Bỏ sót biến thể phi mã hóa**: Chỉ tập trung phân tích các đột biến làm thay đổi acid amin (missense/nonsense) và bỏ qua các đột biến ở vùng điều hòa.
- **Thiếu tính định lượng**: Không thể đưa ra dự đoán định lượng về mức độ tăng/giảm biểu hiện gen (RNA-seq log2 fold change) do biến thể gây ra.
- **Bỏ qua tính đặc hiệu mô (Tissue specificity)**: Không biết rằng một đột biến có thể chỉ gây hại trong mô gan mà hoàn toàn vô hại trong mô cơ.

Skill này hướng dẫn Agent khai thác các tính năng dự đoán sâu sắc của AlphaGenome API thông qua AlphaGenome MCP tool để định lượng tác động của các biến thể gen đơn lên cấu trúc nhiễm sắc chất, ái lực liên kết của các nhân tố phiên mã (Transcription Factors) và biểu hiện gen trong từng mô cụ thể.

## ⚙️ Cách Hoạt Động

AlphaGenome Single Variant Effect Analysis hoạt động dựa trên các mô hình mạng neural sâu (deep learning models) được huấn luyện trên dữ liệu biểu sinh (epigenomic) và phiên mã (transcriptomic) khổng lồ. Quy trình phân tích gồm:
1. **Định danh biến thể**: Nhận vị trí biến thể dưới dạng định dạng chuẩn `chr:pos:ref>alt` (ví dụ: `chr2:135851020:T>G`) hoặc mã rsID.
2. **Cắt chuỗi genome cục bộ**: Lấy chuỗi nucleotide xung quanh vị trí biến thể (cửa sổ khoảng 1kb đến 10kb) để làm đầu vào cho mô hình.
3. **Chạy dự đoán song song (Wild-type vs Variant)**:
   - Đưa chuỗi gốc (Wild-type sequence) vào mô hình để dự đoán các tín hiệu biểu sinh (DNASE, histone marks) và mức biểu hiện RNA.
   - Đưa chuỗi đột biến (Variant sequence) vào mô hình để thực hiện dự đoán tương tự.
4. **Tính toán điểm tác động (Effect Scores)**: Tính toán sự khác biệt giữa hai trạng thái (thường là hiệu số hoặc $\log_2$ fold change) để đánh giá mức độ ảnh hưởng của biến thể lên:
   - **RNA-seq**: Mức độ biểu hiện của các gen đích lân cận.
   - **DNASE / ATAC-seq**: Độ mở của chất nhiễm sắc (chromatin accessibility).
   - **ChIP-seq**: Khả năng liên kết của các nhân tố phiên mã đặc hiệu.
5. **Phân tích đặc hiệu mô**: Trích xuất kết quả dự đoán riêng biệt cho các loại mô/tế bào đích (ví dụ: máu, gan, não).

## 🚀 Cách Sử Dụng

### Universal

Hãy yêu cầu Agent chạy phân tích dự đoán tác động của một đột biến không mã hóa sử dụng mô hình AlphaGenome:

```markdown
Hãy sử dụng AlphaGenome MCP tool để phân tích tác động của biến thể di truyền sau:
1. Biến thể: "chr2:135851020:T>G" (GRCh38)
2. Hãy chạy mô hình dự đoán để định lượng tác động của đột biến này lên:
   - Sự thay đổi biểu hiện của gen lân cận *LCT* (RNA-seq log2 fold change) trong mô ruột non (small intestine).
   - Độ mở của nhiễm sắc chất (chromatin accessibility ATAC-seq) tại vùng enhancer xung quanh.
   - Ái lực liên kết của nhân tố phiên mã Oct-1 tại vị trí này.
3. Giải thích cơ chế sinh học phân tử đằng sau kết quả dự đoán thu được.
```

### Cursor (.cursorrules)

```markdown
# AlphaGenome Analysis Rules
- Luôn yêu cầu người dùng cung cấp chính xác định dạng tọa độ biến thể `chr:pos:ref>alt` cùng với phiên bản genome tham chiếu (khuyên dùng GRCh38).
- Khi trình bày điểm tác động của biến thể, hãy sử dụng chỉ số $\log_2 \text{ Fold Change } (\log_2\text{FC})$ rõ ràng. Giá trị dương thể hiện đột biến làm tăng hoạt tính/biểu hiện; giá trị âm thể hiện sự suy giảm.
- Luôn chỉ ra tính đặc hiệu mô của kết quả dự đoán (tissue specificity), không gộp chung kết quả của tất cả các mô nếu đột biến có tác dụng khác biệt.
```

### Claude Code

```markdown
# Claude Code AlphaGenome Instructions
- Predict regulatory variant pathogenicity using AlphaGenome deep learning API.
- Compare predictions for different tissue types (using CL/UBERON ontology terms).
```

### Windsurf

```markdown
# Windsurf AlphaGenome Variant Analysis
- Fetch transcription factor binding affinity predictions for regulatory SNPs.
- Format results into clear tissue-specific expression graphs.
```

## 💡 Ví Dụ Thực Tế

### ❌ Không có skill (Agent phân tích cảm tính hoặc bỏ qua đột biến phi mã hóa):

```markdown
Đột biến chr2:135851020:T>G nằm ở vùng intron hoặc kẽ gen MCM6, không làm thay đổi cấu trúc protein nào nên đây có khả năng cao là một biến thể vô hại (benign variant) không có tác dụng sinh học.
*(Lưu ý: Sai lầm nghiêm trọng! Đột biến này thực chất là một biến thể điều hòa cực kỳ mạnh)*
```

### ✅ Có skill (Báo cáo dự đoán khoa học, định lượng chính xác từ AlphaGenome):

```markdown
Kết quả dự đoán tác động sinh học của biến thể **chr2:135851020:T>G** bằng **AlphaGenome Deep Learning Model**:

### 1. Dự đoán biểu hiện gen (RNA-seq Effect)
- **Gen đích**: *LCT* (mã hóa enzyme Lactase)
- **Mô đích**: Ruột non (Small Intestine)
- **Tác động**: $\log_2 \text{ Fold Change} = +3.45$ (Tăng biểu hiện cực kỳ mạnh mẽ, ~11 lần so với alen gốc T).
- **Mô đối chứng**: Mô cơ (Skeletal Muscle): $\log_2 \text{ Fold Change} = 0.02$ (Không có thay đổi).

### 2. Dự đoán cấu trúc nhiễm sắc chất (Epigenomic Effect)
- **ATAC-seq (Độ mở chromatin)**: $\log_2 \text{ Fold Change} = +2.80$ (Tạo ra một vùng nhiễm sắc chất mở rộng, cho phép các máy móc phiên mã tiếp cận dễ dàng hơn).
- **ChIP-seq (TF Binding affinity)**: Tăng mạnh ái lực liên kết của nhân tố phiên mã **Oct-1** tại vùng trình diện đột biến ($\Delta \text{binding score} = +8.2$).

### 3. Giải thích cơ chế sinh học
Biến thể G phá vỡ trạng thái đóng của chromatin ở vùng enhancer nằm trong intron của gen *MCM6* lân cận, tạo điều kiện cho yếu tố phiên mã **Oct-1** liên kết mạnh mẽ trong tế bào ruột non. Enhancer này sau đó tương tác vòng lặp (looping) với promoter của gen *LCT*, thúc đẩy quá trình phiên mã liên tục enzyme lactase ở người trưởng thành (Lactase Persistence).
```

## ⚠️ Lưu Ý & Gotchas

- **Ý nghĩa của Điểm số (Score Interpretation)**: Điểm tác động lớn không phải lúc nào cũng đồng nghĩa với việc gây bệnh (Pathogenic). Một đột biến làm tăng mạnh biểu hiện gen có thể là một biến thể tiến hóa có lợi (như dung nạp sữa ở người) hoặc ngược lại, kích hoạt oncogene gây ung thư. Agent cần phối hợp với cơ sở dữ liệu lâm sàng như ClinVar để đánh giá tính hướng bệnh.
- **Giới hạn mô hình**: Các mô hình deep learning được huấn luyện trên dữ liệu thực nghiệm sẵn có. Đối với một số mô hiếm gặp hoặc dòng tế bào không phổ biến, độ tin cậy của dự đoán có thể giảm đi. Hãy nhắc Agent hiển thị khoảng tin cậy (Confidence intervals) của dự đoán nếu mô hình có cung cấp.
