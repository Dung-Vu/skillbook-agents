# Original User Request

## Initial Request — 2026-06-04T08:04:20Z

Rà soát và tinh chỉnh nội dung của toàn bộ 109 kỹ năng (skills) trong thư mục `content/skills/` nhằm giúp tài liệu súc tích, dễ đọc và dễ hiểu hơn cho người dùng, đồng thời giảm thiểu tối đa các đoạn văn dài dòng không cần thiết.

Working directory: c:\Users\Admin\Desktop\skillbook-agents
Integrity mode: development

## Requirements

### R1. Tinh Chỉnh Nội Dung Ngắn Gọn & Súc Tích (Conciseness & Readability)
- Quét qua toàn bộ 109 file kỹ năng (`.md` tiếng Việt và `.en.md` tiếng Anh) trong thư mục `content/skills/`.
- Thực hiện rút gọn các câu văn dài dòng:
  - Chuyển đổi các đoạn giải thích lý thuyết dông dài thành các gạch đầu dòng (bullet points) ngắn gọn, đi thẳng vào trọng tâm.
  - Loại bỏ các từ ngữ thừa, các câu giới thiệu sáo rỗng hoặc lặp đi lặp lại.
  - Đảm bảo mỗi phần H2 (Tại sao cần, Cách hoạt động, Cách sử dụng, Kịch bản, Lưu ý) không vượt quá 3-4 gạch đầu dòng/đoạn ngắn.

### R2. Bảo Toàn Tri Thức Kỹ Thuật (Preserve Core Technical Prompt Rules)
- Không được làm thay đổi cấu trúc frontmatter của các kỹ năng.
- Bắt buộc phải giữ nguyên các chỉ dẫn kỹ thuật cốt lõi (Prompt ruleset trong phần "Cách Sử Dụng" / "Agent Guidelines") để tránh làm giảm hiệu quả hoạt động thực tế của AI Agent.
- Giữ nguyên các ví dụ/kịch bản lập trình thực tế có chứa mã lệnh cụ thể.

### R3. Đồng Bộ Hóa Cấu Trúc File
- Đảm bảo sau khi tinh chỉnh, các file vẫn giữ đúng cấu trúc 5 H2 Canonical Emoji đã được định nghĩa trong `CONTRIBUTING.md`.
- Đảm bảo các tệp tiếng Anh song hành (`.en.md`) cũng được đồng bộ hóa nội dung rút gọn tương ứng.

## Acceptance Criteria

### Content Quality & Conciseness
- [ ] Tất cả 109 kỹ năng và tệp dịch tiếng Anh tương ứng được tinh chỉnh ngắn gọn, dễ đọc, cấu trúc rõ ràng.
- [ ] Không có tệp kỹ năng nào bị mất các chỉ dẫn prompt kỹ thuật cốt lõi hoặc mã lệnh thực tế.

### System Verification & Integrity
- [ ] Chạy lệnh `npm run validate:skills` thành công 100% không có lỗi frontmatter hay lỗi cấu trúc.
- [ ] Chạy `npm run build` thành công 100%, không bị lỗi TypeScript hoặc render tĩnh.
- [ ] Bộ kiểm thử Playwright E2E (`npx playwright test`) vượt qua 100% (17/17 tests passed).

## Follow-up — 2026-06-05T10:34:26+07:00

Thiết kế và lập trình hiệu ứng chuyển cảnh trang 3D WebGL vò giấy (Paper Crumple & Unfold Transition) mượt mà và chân thực cho ứng dụng Next.js 16 (App Router) + React 19 sử dụng Three.js và html2canvas.

Working directory: C:\Users\Admin\Desktop\Bonario\skillbook-agents
Integrity mode: development

## Requirements

### R1. Cài đặt các thư viện WebGL
- Tích hợp thêm các thư viện cần thiết vào `package.json` của dự án:
  - `three` và `@types/three` để dựng đồ họa WebGL.
  - `html2canvas` để chuyển đổi nội dung giao diện HTML DOM sang kết cấu texture WebGL.

### R2. Component WebGL Paper Crumple Overlay
- Xây dựng component `src/components/ui/PaperCrumpleOverlay.tsx` để quản lý canvas 3D phủ toàn màn hình khi chuyển cảnh:
  - Chụp ảnh màn hình (screenshot capture) của layout hiện thời bằng `html2canvas` làm đầu vào texture.
  - Tạo lưới PlaneGeometry có mật độ phân đoạn cao (ví dụ: 64x64 hoặc 128x128) để xử lý biến dạng nếp nhăn.
  - Viết Custom Shader (Vertex/Fragment) để thực hiện:
    - **Vertex Shader:** Áp dụng nhiễu toán học 3D (Perlin/Simplex Noise) dựa trên progress biến thiên (từ 0.0 đến 1.0) nhằm tạo nếp gấp sắc cạnh (vo giấy) và co cụm lưới Plane thành cục giấy, áp dụng lực hút trọng lực rơi tự do theo trục Y khi progress tiến gần đến 1.0.
    - **Fragment Shader:** Tính toán lại normal vector trên lưới biến dạng để ánh sáng (Ambient & Directional Light) phản chiếu bóng tối và điểm sáng sắc nét chân thực.
  - **Quản lý vòng đời (Exit & Enter):**
    - **Exit (Crumple):** Khi bấm chuyển trang ➔ Chụp DOM hiện tại ➔ Chạy hiệu ứng vò giấy từ phẳng thành cục giấy và rơi xuống ➔ Kích hoạt điều hướng Next.js thực tế.
    - **Enter (Unfold):** Khi trang mới mount ➔ Chụp DOM trang mới ngầm ➔ Kích hoạt hiệu ứng mở phẳng cục giấy ngược lại từ 1.0 về 0.0 ➔ Ẩn overlay để trả lại tương tác DOM thật.
  - **Tối ưu hóa tài nguyên:** Tự động dọn dẹp (disposal) các đối tượng Three.js (geometries, materials, textures, renderer) để tránh rò rỉ bộ nhớ khi component bị unmount.

### R3. Cập nhật Hook Điều Hướng useTransitionNavigator
- Cập nhật [useTransitionNavigator.ts](file:///C:/Users/Admin/Desktop/Bonario/skillbook-agents/src/hooks/useTransitionNavigator.ts) để điều phối tiến trình:
  - Hàm `navigateTo(e, href)` sẽ ngăn chặn hành vi click mặc định.
  - Phát tín hiệu bắt đầu hiệu ứng vò giấy trên overlay.
  - Lắng nghe và đợi hiệu ứng vò giấy hoàn thành trước khi gọi `router.push(href)` để Next.js thực thi đổi trang.

### R4. Tích hợp Template Trang
- Tạo hoặc cập nhật template trang `src/app/skills/template.tsx` để bọc các trang con trong `PaperCrumpleOverlay`.
- Đảm bảo khi route con mount, hiệu ứng Unfold (mở trang giấy) được kích hoạt tự động.

## Acceptance Criteria

### WebGL Animation & Transition Flow
- [ ] Chuyển trang giữa trang Catalog và Detail kích hoạt thành công canvas overlay vò giấy 3D phủ toàn màn hình.
- [ ] Hiệu ứng vò giấy biến đổi mượt mà dựa trên progress shader và cục giấy rơi xuống phía dưới màn hình trước khi đổi trang.
- [ ] Khi trang mới tải xong, hiệu ứng mở phẳng giấy (unfold) tự động diễn ra từ tâm ra toàn màn hình để hiện trang mới.
- [ ] Sau khi hiệu ứng kết thúc, canvas overlay ẩn đi và người dùng tương tác được với các liên kết và nút bấm trên trang mới một cách bình thường.

### Code Quality & Validation
- [ ] Mã nguồn TypeScript không chứa bất kỳ lỗi biên dịch nào.
- [ ] Chạy lệnh kiểm tra cú pháp `npm run lint` đạt 0 lỗi (không có cảnh báo hoặc lỗi linter).
- [ ] Chạy lệnh `npm run validate:skills` thành công 100%.
- [ ] Biên dịch Next.js production build (`npm run build`) hoàn tất 100% không gặp lỗi.
- [ ] Các kiểm thử Playwright E2E (`npx playwright test`) vượt qua 100%.
