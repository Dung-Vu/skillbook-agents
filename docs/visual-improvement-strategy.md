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

## 1. Định hướng Thiết kế cốt lõi (Core Visual Identity)

### 1.1 Tôn trọng Background động & Tối giản Text
- **Trang chủ (`/`)**: Background động (MeshGridBackground 3D, floating neon orbs, radial glow, scanlines) là linh hồn của sự trình diễn. Cần tối ưu hiệu năng để hệ thống MeshGrid chạy mượt mà ở tốc độ 60fps trên mọi thiết bị (kể cả di động).
- **Tối giản hóa thông tin**: Tuyệt đối không thêm các số liệu thống kê hay khối giới thiệu dài dòng. Giữ giao diện cực kỳ thoáng đãng, hướng thị giác vào chuyển động nghệ thuật của background.
- **Dòng thời gian (Evolution Timeline)**: Giữ nguyên cơ chế cuộn chuột ngang (scroll-pinning) độc đáo để thể hiện chuyển động phân cảnh.

### 1.2 Dọn dẹp Code thừa từ WebGL cũ (PaperCrumple)
Loại bỏ hoàn toàn tàn dư của WebGL cũ (PaperCrumpleOverlay) để tối ưu hiệu năng tải trang ban đầu:
- Xóa tệp `src/components/ui/PaperCrumpleOverlay.tsx` (553 dòng code không sử dụng).
- Xóa các đoạn kiểm tra `__transition` và các hàm lắng nghe canvas trong `SkillDetailClient.tsx` và `MeshGridBackground.tsx`.
- Rút gọn hook `useTransitionNavigator`.

---

## 2. Kế hoạch hành động chi tiết (Action Plan)

### Pha 1: Dọn dẹp & Tối ưu hiệu năng MeshGrid (Tuần 1)
- **Xóa code WebGL cũ**:
  - `DELETE` `src/components/ui/PaperCrumpleOverlay.tsx`
  - Gỡ bỏ các event listeners và logic kiểm tra `__transition` liên quan đến canvas-pause/resume cũ.
- **Tối ưu hóa MeshGridBackground**:
  - Tinh chỉnh các tham số cấu hình hạt (particle size, velocity, mesh vertices density) của MeshGrid để giảm tải GPU/CPU nhưng vẫn giữ nguyên vẻ đẹp chuyển động nghệ thuật 3D.
  - Đảm bảo MeshGridBackground chạy mượt mà, đạt 60fps trên các thiết bị di động có cấu hình trung bình.

### Pha 2: Chỉnh sửa trang Thư viện & Chi tiết (Tuần 2)
- **Nâng cấp trang Thư viện (`/skills`)**:
  - Giữ nguyên cấu trúc hàng CLI (CLI rows) thô mộc đặc trưng.
  - Tăng nhẹ kích thước chữ của tiêu đề và mô tả ngắn (one-liner) của từng hàng, đồng thời tinh chỉnh màu sắc để đảm bảo độ tương tương phản tốt hơn trên nền sáng/tối.
- **Nâng cấp trang Chi tiết (`/skills/[slug]`)**:
  - Giữ nguyên bố cục hiện tại của trang chi tiết.
  - Tối ưu hóa Code block: Thiết lập nút sao chép (Copy) cố định ở góc trên bên phải của khung code, có nhãn rõ ràng để người dùng dễ thao tác.
  - Tăng nhẹ độ tương phản màu chữ chính của bài viết (body text) để dễ đọc hơn.
