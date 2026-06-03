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

## 📖 Tại Sao AI Agent Của Bạn Cần Kỹ Năng Này?

Lập trình viên và AI Agent cần kỹ năng này khi có nhiệm vụ tạo báo cáo doanh nghiệp, hợp đồng pháp lý hoặc các tài liệu chính thức theo định dạng Microsoft Word (`.docx`). Kỹ năng này cung cấp các tiêu chuẩn căn lề, ghép nối phong cách chữ (typography) CJK chuyên nghiệp và các chốt chặn môi trường để thao tác trực tiếp với XML của tệp DOCX mà không làm hỏng cấu trúc tệp tin.

---

## ⚙️ Cơ Chế Hoạt Động & Quy Trình Tư Duy

Quy trình xử lý file DOCX:
1. **Xác minh môi trường**: Chạy lệnh kiểm tra môi trường tương ứng (ví dụ: `env_check.ps1` trên Windows) ở các mức `read`, `render` hoặc `full` tùy thuộc vào tác vụ.
2. **Định tuyến mục đích**: Lựa chọn 1 trong các lộ trình hành động: Tạo mới (`CREATE_DOCX`), Áp dụng template (`APPLY_TEMPLATE`), Chỉnh sửa nội dung (`EDIT_FILL_DOCX`), hoặc Đọc dữ liệu (`READ_CONTENT`).
3. **Áp dụng phong cách nghệ thuật**: Đối với lộ trình ghi, nạp các tệp hướng dẫn phong cách chữ (`typography_guide.md`) và thiết kế trang.
4. **Gọi Backend và Kiểm thử**: Sử dụng CLI `.NET` hoặc script Python để thao tác, sau đó chạy xuất PDF và kiểm tra trực quan các trang.

Sơ đồ quy trình:
```
[Tệp tin Word / Yêu cầu] ➔ 🛡️ [Kiểm tra env_check.sh/ps1] ➔ 📐 [Định tuyến mục đích (Create/Edit/Read)]
                              ➔ 💻 [Chạy CLI .NET hoặc Python script] ➔ 🧪 [Kiểm tra Layout & TOC]
```

---

## 🚀 Bộ Quy Tắc Chỉ Dẫn Cho Agent (Prompt Guidelines)

```markdown
# QUY TẮC XỬ LÝ ĐỊNH DẠNG DOCX
- **Không tự ý chuyển đổi PDF**: Khi được yêu cầu chuyển DOCX sang PDF, hãy sử dụng script render trực tiếp (`docx_to_pdf.py` hoặc LibreOffice), không chuyển qua trung gian Markdown/HTML vì sẽ làm mất cấu trúc căn lề, header/footer của Word.
- **Không ghi đè trực tiếp XML bằng String**: Tuyệt đối không chỉnh sửa XML của tệp DOCX bằng cách thay thế chuỗi (string replace) thủ công, vì việc này làm hỏng cấu trúc schema của Word. Phải sử dụng backend được phê duyệt.
- **Tuân thủ CJK typography**: Văn bản hỗn hợp chữ Latinh và tiếng Trung/Việt phải tuân thủ nghiêm ngặt quy tắc ghép font và cỡ chữ tiêu chuẩn của tài liệu chính thống (ví dụ: Times New Roman ghép với Microsoft YaHei).
```

---

## ⚠️ Cảnh Báo Vận Hành & Mẹo Tối Ưu (Developer Gotchas)

* **Lỗi CLI trên Windows**: Windows PowerShell yêu cầu chính sách bỏ qua thực thi (`-ExecutionPolicy Bypass`) khi gọi các script `.ps1`. Nếu không truyền cờ này, script kiểm tra môi trường sẽ bị chặn.
* **Lỗi nạp thư viện ngoài**: Backend ghi `.NET` yêu cầu phiên bản dotnet sdk >= 9. Nếu môi trường thiếu SDK này, việc ghi sẽ thất bại ở bước biên dịch CLI.
