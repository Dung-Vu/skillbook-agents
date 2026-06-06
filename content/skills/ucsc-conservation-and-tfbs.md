---
slug: ucsc-conservation-and-tfbs
title: UCSC Conservation & TFBS
command: /ucsc-conservation-and-tfbs
category: bioinformatics-genomics
tags:
  - ucsc
  - conservation
  - phylop
  - phastcons
  - tfbs
complexity: advanced
platforms:
  - cursor
  - claude-code
  - windsurf
  - gemini-cli
  - universal
featured: false
description: >-
  Kỹ năng tải điểm bảo tồn tiến hóa gen (độ bền vững của gen qua hàng triệu năm) và xác định các điểm liên kết kiểm soát gen từ cơ sở dữ liệu UCSC Genome Browser.
oneLiner: Tra cứu mức độ bảo tồn tiến hóa của gen và các vùng điều khiển phiên mã.
sourceUrl: 'https://genome.ucsc.edu/'
sourceAuthor: Google DeepMind
lastVerified: '2026-05-30'
relatedSkills:
  - jaspar-database
  - alphagenome-single-variant-analysis
seoTitle: UCSC Conservation & TFBS — Skillbook Agents
seoDescription: Hướng dẫn Agent lấy conservation scores và TFBS data từ UCSC Genome Browser.
provider: antigravity
---

## 📖 Tại Sao Cần Skill Này?

Các vùng gen được giữ nguyên qua hàng triệu năm tiến hóa thường có chức năng sinh học vô cùng quan trọng đối với sự sống. Kỹ năng này giúp bạn kiểm tra xem một vị trí gen cụ thể có được bảo tồn qua các loài động vật hay không, và xem vị trí đó có đóng vai trò như một "nút công tắc" (nơi các protein điều hòa liên kết) để bật/tắt hoạt động của gen hay không.

- **Đánh giá mức độ bảo tồn**: Biết được vị trí gen này có thay đổi giữa các loài hay không (qua điểm số phyloP và phastCons).
- **Tìm vị trí điều hòa (TFBS)**: Xác định xem protein điều hòa (yếu tố phiên mã) nào bám vào vị trí gen này.
- **Dự đoán tác hại**: Nếu một đột biến xảy ra ở vùng gen cực kỳ ổn định và làm hỏng nút công tắc điều hòa, khả năng cao nó sẽ gây hại lớn cho cơ thể.

## ⚙️ Cách Hoạt Động

Quy trình hoạt động:
```
[Tọa độ vùng gen (chr:bắt đầu-kết thúc)] ➔ [Truy vấn dữ liệu UCSC] ➔ [Trả về điểm bảo tồn & các yếu tố điều hòa]
```

1. **Tra cứu bảo tồn**: Lấy điểm số phyloP (số dương càng cao nghĩa là càng ít thay đổi qua tiến hóa) và phastCons (xác suất nằm trong vùng quan trọng).
2. **Xác định vị trí liên kết**: Tìm kiếm dữ liệu từ các dự án lớn (ENCODE, JASPAR, ReMap) để xem có protein điều hòa nào bám vào vùng gen này không.
3. **Đánh giá chung**: Tổng hợp cả hai thông tin để xác định mức độ quan trọng của vùng gen đó.

## 🚀 Cách Sử Dụng

```markdown
# QUY TẮC PHÂN TÍCH
- Điểm phyloP > 2.0 được coi là vùng gen có tính bảo tồn cao. Điểm phyloP > 4.0 là vùng cực kỳ bảo thủ (hầu như không đổi giữa các loài).
- Điểm phastCons > 0.9 thể hiện khả năng rất cao là một phần của vùng gen quan trọng.
- Kết hợp cả hai dữ liệu: Nếu một vùng gen vừa được bảo tồn vừa có yếu tố điều hòa bám vào, đó chắc chắn là một vùng chức năng quan trọng.
```

## 💡 Kịch Bản Lập Trình Thực Tế

### 🧑‍💻 Nhà phát triển:
> "Tôi muốn kiểm tra xem vị trí gen chr17:7577120 trên gene TP53 có được bảo tồn qua tiến hóa không và có protein điều hòa nào bám vào đó không."

### 🤖 AI Agent (Đã được trang bị Kỹ năng):
> "Tôi sẽ truy vấn dữ liệu từ UCSC Genome Browser cho vị trí gen bạn yêu cầu:
>
> 1. **Kiểm tra điểm bảo tồn**: Điểm phyloP tại vị trí này là 5.2, chứng tỏ đây là vùng gen cực kỳ bền vững và hầu như không thay đổi qua hàng triệu năm tiến hóa ở 100 loài động vật có xương sống.
> 2. **Tìm protein liên kết**: Tôi phát hiện vị trí này trùng khớp với điểm bám của protein điều hòa p300.
> 3. **Kết luận**: Đột biến xảy ra ở vị trí này có nguy cơ cao làm mất chức năng điều hòa hoạt động của gene TP53."

## ⚠️ Lưu Ý & Gotchas

- **Giải thích điểm phyloP**: Điểm dương có nghĩa là vùng gen được bảo tồn tốt, điểm âm nghĩa là vùng gen đang tiến hóa rất nhanh (đang thích nghi nhanh), và bằng 0 là bình thường.
- **Chất lượng dữ liệu**: Độ chính xác của điểm bảo tồn phụ thuộc vào độ chính xác khi xếp hàng trình tự gen giữa các loài động vật với nhau.
- **Hoạt động thực tế**: Việc protein bám vào gen trong phòng thí nghiệm không đồng nghĩa với việc nó sẽ luôn hoạt động ở mọi loại tế bào hay mọi cơ quan trong cơ thể.
