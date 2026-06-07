# Visual Improvement Strategy — Skillbook Agents (Final Approved)

> Status: **approved** (2026-06-07)
> Audience: design + frontend leads
> Goal: Tinh chỉnh tối ưu hóa giao diện dựa trên phong cách tối giản (Minimalism) và tôn vinh tính trình diễn động (Dynamic Visuals). Tập trung vào vẻ đẹp của background động trên trang chủ, giữ nguyên cấu trúc hàng CLI thô mộc của thư viện và tối ưu nhẹ trải nghiệm đọc ở trang chi tiết.

---

## 0. TL;DR

Chiến lược này định hình lại giao diện trang web theo định hướng thẩm mỹ tối giản và trình diễn nghệ thuật của người dùng:
1. **Trang chủ (`/`)**: Tập trung tối đa vào hiệu ứng MeshGridBackground 3D động kết hợp hạt neon chuyển động mượt mà. Giữ lượng chữ (text) ở mức tối thiểu để tăng trải nghiệm trình diễn trực quan.
2. **Trang thư viện (`/skills`)**: Giữ nguyên bố cục hàng CLI (CLI rows) đặc trưng để giữ phong cách kỹ thuật thô mộc. Chỉnh sửa nhẹ kích thước chữ và nâng cấp màu sắc để tăng độ dễ đọc.
3. **Trang chi tiết (`/skills/[slug]`)**: Giữ nguyên bố cục hiện tại, tối ưu hóa hiển thị của các hộp mã nguồn (Code block) sắc nét hơn, cải thiện nút Copy rõ ràng và tăng nhẹ độ tương phản của chữ đọc.
4. **Lược bỏ các tính năng không phù hợp**: Không triển khai Theme Toggle, không phát triển tìm kiếm nâng cao (Cmd+K, filter chips phức tạp, trang tag).

---

## 1. Định hướng Thiết kế & Trải nghiệm

### 1.1 Tôn trọng Background động & Tối giản Text ở Trang chủ (`/`)
- **Vẻ đẹp trình diễn**: Hệ thống MeshGridBackground 3D, floating neon orbs, radial glow và hiệu ứng quét scanline là trọng tâm thị giác. Toàn bộ chữ nghĩa trên trang chủ được giữ ở mức tối thiểu, loại bỏ các khối giới thiệu rườm rà hay số liệu thống kê để tạo không gian nghệ thuật thoáng đãng và có chiều sâu.
- **Tối ưu hóa hiệu năng**: Điều chỉnh số lượng hạt (particles density), lưới vertices và cơ chế requestAnimationFrame của Canvas để MeshGrid hoạt động ổn định ở mức **60fps** trên cả các thiết bị di động tầm trung, tránh hiện tượng sụt giảm khung hình làm ảnh hưởng đến tính trình diễn động.
- **Giữ nguyên Timeline**: Giữ nguyên cơ chế cuộn chuột ngang (scroll-pinning) của dòng thời gian tiến hóa (Evolution Timeline) để người dùng tự khám phá sự chuyển động của các phân cảnh.

### 1.2 Giữ phong cách CLI thô mộc ở Trang Thư viện (`/skills`)
- **Tôn trọng thiết kế cũ**: Không chuyển sang dạng thẻ lưới (Card Grid) và không thêm các bộ lọc đa chọn phức tạp làm mất đi cá tính của trang web. Giữ nguyên dạng danh sách hàng CLI (CLI rows) thô mộc đặc trưng.
- **Tinh chỉnh hiển thị**: Tăng kích thước chữ của tiêu đề và one-liner từ 11px lên 13-14px. Cân chỉnh lại độ tương phản màu sắc của chữ trên nền sáng/tối để người dùng dễ duyệt danh sách hơn mà không làm mất đi phong cách dòng lệnh.

### 1.3 Tối ưu hóa trải nghiệm đọc ở Trang Chi tiết (`/skills/[slug]`)
- **Giữ nguyên bố cục**: Duy trì cấu trúc một cột đọc chính kết hợp thanh mục lục (TOC) tinh gọn hiện tại.
- **Nâng cấp Code block**: 
  - Khắc phục triệt để lỗi nút Copy trên môi trường mạng HTTP không bảo mật bằng cách sử dụng bộ dự phòng (DOM Textarea Copy Fallback).
  - Cố định nút Copy ở góc trên bên phải khung code, hiển thị rõ ràng trực quan thay vì chỉ hiện khi di chuột qua (hover-only).
  - Đảm bảo hiển thị số dòng (line numbers) và nhãn ngôn ngữ (language tag) sắc nét.
- **Tăng tương phản**: Tinh chỉnh nhẹ màu sắc của văn bản nội dung (`body text`) để tăng độ sắc nét khi đọc tài liệu dài.

### 1.4 Dọn dẹp Code thừa từ WebGL cũ
Do hiệu ứng chuyển cảnh WebGL cũ (`PaperCrumpleOverlay`) đã được gỡ bỏ hoàn toàn, chúng ta cần xóa sạch các đoạn code dư thừa để giảm dung lượng bundle tải trang ban đầu, giúp trang web phản hồi tức thì.

---

## 2. Danh sách tệp tin thay đổi (File-by-file change list)

| Đường dẫn tệp tin | Trạng thái | Hành động kỹ thuật chi tiết |
|---|---|---|
| `src/components/ui/PaperCrumpleOverlay.tsx` | **DELETE** | Xóa bỏ hoàn toàn (553 dòng code WebGL cũ không còn sử dụng). |
| `src/components/ui/MeshGridBackground.tsx` | **MODIFY** | Gỡ bỏ các hàm lắng nghe sự kiện `canvas-pause`/`canvas-resume` của overlay cũ. Cân chỉnh cấu hình hạt và tốc độ render để đạt 60fps. |
| `src/components/detail/SkillDetailClient.tsx` | **MODIFY** | Gỡ bỏ logic kiểm tra trạng thái `__transition` cũ. Tinh chỉnh Code block để cố định nút Copy, tăng độ tương phản của font chữ đọc. |
| `src/hooks/useTransitionNavigator.ts` | **MODIFY** | Rút gọn hook, loại bỏ các state chuyển cảnh rườm rà của WebGL cũ. |
| `src/components/catalog/SkillCatalogClient.tsx` | **MODIFY** | Giữ nguyên cấu trúc CLI rows. Chỉnh sửa nhẹ CSS để tăng kích thước chữ và điều chỉnh màu sắc tương phản cho one-liner. |

---

## 3. Kế hoạch xác minh (Verification Plan)

### 3.1 Kiểm thử Hiệu năng (Performance Test)
- Sử dụng công cụ Chrome DevTools Performance để đo đạc và đảm bảo MeshGridBackground chạy ổn định ở mức **60fps** trên cả Desktop và giả lập Mobile.
- Kiểm tra chỉ số giật lag khi người dùng cuộn trang ở dòng thời gian (scroll-pinning).

### 3.2 Kiểm thử Chức năng (Functional Test)
- Xác nhận nút Copy trên các hộp code hoạt động tốt trong mọi môi trường (cả HTTP thường và HTTPS bảo mật).
- Đảm bảo trang web biên dịch thành công 100% bằng cách chạy:
  ```bash
  pnpm run build
  ```
