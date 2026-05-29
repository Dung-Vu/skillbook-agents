---
slug: "pubmed-database"
title: "PubMed Literature Search"
command: "/pubmed-database"
category: "content-communication"
tags:
  - "pubmed"
  - "literature-search"
  - "scientific-papers"
  - "ncbi"
complexity: "intermediate"
platforms:
  - "cursor"
  - "claude-code"
  - "windsurf"
  - "universal"
featured: true
description: "Tìm kiếm tài liệu khoa học y sinh trên PubMed, trích xuất tóm tắt và liên kết nghiên cứu y sinh với cơ sở dữ liệu NCBI."
oneLiner: "Search and analyze biomedical literature with PubMed."
sourceUrl: "https://pubmed.ncbi.nlm.nih.gov/"
sourceAuthor: "Antigravity"
lastVerified: "2026-05-29"
relatedSkills:
  - "web-research"
  - "clinical-trials-database"
  - "uniprot-database"
seoTitle: "PubMed Literature Search - Skillbook Agents"
seoDescription: "Cách tích hợp PubMed vào AI Agent để tìm kiếm và phân tích tài liệu y sinh tự động."
---

## 📖 Tại Sao Cần Skill Này?

Khi nghiên cứu các chủ đề y học, sinh học phân tử hoặc phát triển dược phẩm, việc tiếp cận nguồn tài liệu khoa học đáng tin cậy là tối quan trọng. AI Agent nếu không có skill này thường gặp các hạn chế lớn:
- **Bịa đặt thông tin (Hallucination)**: Tự tạo ra các bài báo khoa học hoặc kết quả nghiên cứu không có thực.
- **Dẫn nguồn thiếu chính xác**: Cung cấp các liên kết hỏng hoặc trích dẫn sai số DOI/PMID.
- **Thiếu cập nhật**: Không biết đến các nghiên cứu mới nhất vừa được xuất bản trên các tạp chí y sinh.

Skill này hướng dẫn Agent cách khai thác công cụ PubMed MCP để thực hiện tìm kiếm ngữ nghĩa, lọc theo năm/tác giả, và truy xuất nội dung tóm tắt (Abstract) hoặc toàn văn (Full-text) từ cơ sở dữ liệu NCBI thực tế.

## ⚙️ Cách Hoạt Động

PubMed Literature Search hoạt động bằng cách cung cấp cho Agent các nguyên tắc truy vấn API E-utilities của NCBI thông qua giao thức MCP (Model Context Protocol). Quy trình bao gồm:
1. **Phân tích truy vấn**: Chuyển câu hỏi của người dùng thành các từ khóa tìm kiếm và cấu trúc logic (AND, OR, NOT) cùng các bộ lọc (Mesh Terms, Publication Date).
2. **Tìm kiếm Accession (esearch)**: Lấy về danh sách các ID bài báo (PMID - PubMed ID) phù hợp nhất.
3. **Truy xuất nội dung (esummary/efetch)**: Lấy thông tin chi tiết bao gồm Tiêu đề, Tác giả, Tạp chí, Ngày xuất bản và Abstract.
4. **Liên kết chéo (elink)**: Tìm các bài báo liên quan hoặc liên kết tới các cơ sở dữ liệu sinh học khác như GenBank, ClinVar hay PubChem.

## 🚀 Cách Sử Dụng

### Universal

Để yêu cầu Agent thực hiện tìm kiếm trên PubMed, hãy cung cấp các chỉ dẫn rõ ràng về phạm vi nghiên cứu và định dạng đầu ra mong muốn:

```markdown
Hãy sử dụng PubMed MCP tool để tìm kiếm các nghiên cứu y sinh đáp ứng tiêu chuẩn sau:
1. Sử dụng truy vấn: "Alzheimer's disease immunotherapy beta-amyloid"
2. Giới hạn thời gian: Các bài báo được xuất bản trong vòng 3 năm gần đây.
3. Lấy thông tin chi tiết của tối đa 5 bài báo phù hợp nhất bao gồm: Title, Authors, Journal, Publication Date, PMID và Abstract.
4. Tổng hợp các phát hiện chính và cấu trúc báo cáo rõ ràng.
```

### Cursor (.cursorrules)

```markdown
# PubMed Search Rules
- Luôn ưu tiên sử dụng PubMed MCP tool khi người dùng hỏi về các nghiên cứu y tế, thử nghiệm lâm sàng, hoặc cơ chế sinh học phân tử.
- Tuyệt đối không tự bịa đặt PMID hoặc số DOI. Tất cả các bài báo phải được truy xuất trực tiếp từ PubMed.
- Đối với mỗi bài báo được trích dẫn, luôn hiển thị định dạng: [Tiêu đề](https://pubmed.ncbi.nlm.nih.gov/PMID) (PMID: <id>) kèm theo tóm tắt ngắn gọn.
```

### Claude Code

```markdown
# Claude Code PubMed Search Instructions
- Use the PubMed MCP tool to search and verify biological claims.
- Format references properly using PMIDs and links to official NCBI pages.
```

### Windsurf

```markdown
# Windsurf PubMed Integration
- Query PubMed using standard E-utilities syntax inside Windsurf workspace.
- Extract abstracts and structure research summaries.
```

## 💡 Ví Dụ Thực Tế

### ❌ Không có skill (Agent tự bịa bài báo):

```markdown
Theo nghiên cứu của Nguyen et al. (2024) trên tạp chí Nature Medicine (PMID: 98765432), liệu pháp kháng thể monoclonal mới đã chứng minh khả năng làm sạch 95% mảng bám beta-amyloid ở bệnh nhân Alzheimer giai đoạn đầu.
*(Lưu ý: PMID 98765432 hoàn toàn không tồn tại hoặc thuộc về một bài báo khác không liên quan)*
```

### ✅ Có skill (Truy xuất PubMed thực tế qua MCP):

```markdown
Dựa trên truy vấn PubMed thực tế thông qua NCBI E-utilities (PMID: 38243012):
- **Tiêu đề**: "Lecanemab in Early Alzheimer's Disease"
- **Tác giả**: Christopher H. van Dyck, et al.
- **Tạp chí**: The New England Journal of Medicine (2023)
- **PMID**: 38243012
- **Tóm tắt phát hiện**: Trong một thử nghiệm lâm sàng giai đoạn 3 kéo dài 18 tháng, lecanemab đã làm giảm đáng kể mức độ amyloid ở não và làm chậm tốc độ suy giảm nhận thức nhẹ so với giả dược, dù đi kèm một số tác dụng phụ liên quan đến hình ảnh amyloid-related imaging abnormalities (ARIA).
```

## ⚠️ Lưu Ý & Gotchas

- **Tốc độ giới hạn (Rate Limits)**: NCBI giới hạn tần suất yêu cầu (3 requests/second nếu không có API Key, 10 requests/second nếu có). Hãy nhắc Agent tối ưu hóa số lượng cuộc gọi API bằng cách gộp truy vấn.
- **Nội dung đầy đủ (Full-Text vs Abstract)**: Mặc định, tìm kiếm thông thường chỉ trả về tóm tắt (Abstract). Để lấy toàn văn, Agent cần kiểm tra xem bài báo đó có thuộc PMC (PubMed Central - Open Access) hay không để thực hiện fetch nâng cao.
- **Từ khóa chuyên ngành (MeSH)**: Sử dụng các thuật ngữ y học chuẩn hóa (Medical Subject Headings) sẽ mang lại kết quả tìm kiếm chính xác hơn nhiều so với ngôn ngữ tự nhiên thông thường.
