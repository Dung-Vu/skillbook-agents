---
category: content-communication
command: /docx
complexity: intermediate
description: >-
  Đọc, phân tích cú pháp và thao tác với các tệp tin Microsoft Word (`.docx`).
  Kỹ năng này vượt qua các rào cản môi trường (chẳng hạn như thiếu thư viện
  ngoài hoặc binary) bằng cách sử dụng các tệp tham chiếu lệnh hệ thống.
featured: false
lastVerified: '2026-06-03'
oneLiner: Đọc và xử lý tài liệu Word (.docx) hiệu quả trên nhiều hệ điều hành.
platforms:
  - universal
  - cursor
  - windsurf
  - claude-code
  - mcp
provider: minimax
relatedSkills:
  - minimax-pdf
  - minimax-xlsx
  - minimax-pptx
seoDescription: >-
  Đọc ghi tài liệu Word (.docx) nâng cao cho AI Agent. Hướng dẫn phân tích XML,
  áp dụng template typography chuẩn CJK và xuất PDF.
seoTitle: Minimax Docx - Minimax Skill for AI Agents
slug: minimax-docx
sourceAuthor: Minimax
sourceUrl: ''
tags:
  - docx
  - word
  - document
  - office
title: Minimax Docx
---

## 📖 Tại Sao Cần Skill Này?

Lập trình viên và AI Agent cần kỹ năng này khi có nhiệm vụ tạo báo cáo doanh nghiệp, hợp đồng pháp lý hoặc các tài liệu chính thức theo định dạng Microsoft Word (`.docx`). Kỹ năng này cung cấp các tiêu chuẩn căn lề, typography và các chốt chặn môi trường để thao tác trực tiếp với XML của tệp DOCX an toàn.

## ⚙️ Cách Hoạt Động

Quy trình xử lý file DOCX:

1. **Xác minh môi trường**: Chạy lệnh kiểm tra môi trường tương ứng (ví dụ: `env_check.ps1` trên Windows) trước khi thao tác.
2. **Định tuyến & Thực thi**: Lựa chọn lộ trình (Tạo mới, Áp dụng template, Chỉnh sửa, Đọc) và gọi CLI `.NET` hoặc script Python để xử lý XML của tệp DOCX an toàn.
3. **Kiểm thử**: Xuất PDF kiểm tra trực quan layout và TOC để đảm bảo tài liệu hiển thị chính xác.

```
[Tệp tin Word / Yêu cầu] ➔ 🛡️ [Kiểm tra env_check.sh/ps1] ➔ 📐 [Định tuyến mục đích (Create/Edit/Read)]
                              ➔ 💻 [Chạy CLI .NET hoặc Python script] ➔ 🧪 [Kiểm tra Layout & TOC]
```

## 🚀 Cách Sử Dụng

```markdown
# QUY TẮC XỬ LÝ ĐỊNH DẠNG DOCX
- **Không tự ý chuyển đổi PDF**: Khi được yêu cầu chuyển DOCX sang PDF, hãy sử dụng script render trực tiếp (`docx_to_pdf.py` hoặc LibreOffice), không chuyển qua trung gian Markdown/HTML vì sẽ làm mất cấu trúc căn lề, header/footer của Word.
- **Không ghi đè trực tiếp XML bằng String**: Tuyệt đối không chỉnh sửa XML của tệp DOCX bằng cách thay thế chuỗi (string replace) thủ công, vì việc này làm hỏng cấu trúc schema của Word. Phải sử dụng backend được phê duyệt.
- **Tuân thủ CJK typography**: Văn bản hỗn hợp chữ Latinh và tiếng Trung/Việt phải tuân thủ nghiêm ngặt quy tắc ghép font và cỡ chữ tiêu chuẩn của tài liệu chính thống (ví dụ: Times New Roman ghép với Microsoft YaHei).
```

## 💡 Kịch Bản Lập Trình Thực Tế

### Nhà phát triển:
> "Hãy hướng dẫn tôi cách thiết lập và sử dụng kỹ năng Minimax Docx để Đọc và xử lý tài liệu Word (.docx) hiệu quả trên nhiều hệ điều hành."

### AI Agent (Đã được trang bị Kỹ năng):
> "Tôi đã sẵn sàng. Dưới đây là kịch bản vận hành thực tế cho kỹ năng Minimax Docx:
> 1. Thiết lập các thông số cấu hình và tham số đầu vào cần thiết cho hệ thống.
> 2. Thực thi tuần tự các bước xử lý logic và tích hợp theo đúng chỉ dẫn của Minimax Docx.
> 3. Kiểm thử đầu ra, tối ưu hóa hiệu năng và cung cấp kết quả hoàn chỉnh."

## ⚠️ Lưu Ý & Gotchas

* **Lỗi CLI trên Windows**: Windows PowerShell yêu cầu chính sách bỏ qua thực thi (`-ExecutionPolicy Bypass`) khi gọi các script `.ps1`. Nếu không truyền cờ này, script kiểm tra môi trường sẽ bị chặn.
* **Lỗi nạp thư viện ngoài**: Backend ghi `.NET` yêu cầu phiên bản dotnet sdk >= 9. Nếu môi trường thiếu SDK này, việc ghi sẽ thất bại ở bước biên dịch CLI.
