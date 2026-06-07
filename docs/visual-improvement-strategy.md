# Visual Improvement Strategy — Skillbook Agents (Revised)

> Status: **revised** (2026-06-07)
> Audience: design + frontend leads
> Goal: Tối ưu hóa giao diện dựa trên phong cách tối giản (Minimalism) và trình diễn trực quan (Dynamic Visuals), tập trung vào vẻ đẹp của background động trên trang chủ và lược bỏ các tính năng phức tạp không cần thiết.

---

## 0. TL;DR

Chiến lược này định hình lại giao diện trang web theo định hướng trải nghiệm nghệ thuật và tối giản thông tin của người dùng:
1. **Trang chủ (`/`)**: Tập trung tối đa vào vẻ đẹp trình diễn của background động (MeshGrid, orbs, scanlines). Giữ lượng chữ (text) ở mức tối thiểu nhất để tạo không gian nghệ thuật thoáng đãng và huyền bí.
2. **Dọn dẹp code rác**: Xóa bỏ các tệp tin và đoạn code dư thừa của hiệu ứng WebGL cũ (`PaperCrumpleOverlay`) đã bị gỡ bỏ để tối ưu hóa hiệu năng tải trang.
3. **Lược bỏ các tính năng không cần thiết**: 
   - Không triển khai nút chuyển đổi chủ đề (Theme Toggle).
   - Không làm các tính năng tìm kiếm nâng cao phức tạp (Cmd+K, bộ lọc đa chọn, trang tag).
   - Giữ nguyên bố cục đọc hiện tại của trang chi tiết kỹ năng, không chia cột (sidebar) hay thêm thanh tiến trình đọc rườm rà.

---

## 1. Định hướng Thiết kế cốt lõi (Core Visual Identity)

### 1.1 Tôn trọng Background động & Tối giản Text
- **Trang chủ (`/`)**: Background động (Floating neon orbs, radial glow, grid lines, scanlines) là linh hồn của sự trình diễn. Giữ nguyên hiệu ứng này và tinh chỉnh để nó hiển thị mượt mà nhất mà không bị che lấp bởi chữ nghĩa.
- **Tối giản hóa thông tin**: Không thêm các số liệu thống kê (như "109 skills, 12 categories"), không thêm các khối text giới thiệu dài dòng. Giữ giao diện thoáng, tập trung vào thị giác của người dùng khi vừa đặt chân vào trang web.
- **Trình diễn dòng thời gian**: Giữ nguyên hiệu ứng cuộn chuột ngang (scroll-pinning) của Evolution timeline để người dùng trải nghiệm sự chuyển động của các phân cảnh một cách nghệ thuật.

### 1.2 Dọn dẹp Code thừa từ WebGL cũ (PaperCrumple)
Do hiệu ứng chuyển cảnh WebGL cũ đã được gỡ bỏ để trang web tải tức thì, chúng ta cần xóa sạch các đoạn code dư thừa để giảm dung lượng bundle:
- Xóa tệp `src/components/ui/PaperCrumpleOverlay.tsx` (553 dòng code không sử dụng).
- Xóa các đoạn kiểm tra `__transition` và các hàm lắng nghe canvas trong `SkillDetailClient.tsx` và `MeshGridBackground.tsx`.
- Rút gọn hook `useTransitionNavigator`.

---

## 2. Kế hoạch hành động chi tiết (Action Plan)

### Pha 1: Dọn dẹp & Tối ưu hiệu năng tải nền (Tuần 1)
- **Mục tiêu**: Làm sạch mã nguồn và tối ưu hóa MeshGridBackground để chạy mượt mà ở tốc độ 60fps trên mọi thiết bị.
- **Thao tác**:
  - Thực hiện xóa bỏ các tệp tin và dòng code thừa của WebGL cũ (PaperCrumple).
  - Tối ưu hóa hiệu năng render của background động trên trang chủ để giảm thiểu tải CPU/GPU nhưng vẫn giữ nguyên vẻ đẹp chuyển động nghệ thuật.

### Pha 2: Tinh chỉnh Chi tiết Kỹ năng (Tuần 2)
- **Mục tiêu**: Giữ nguyên cấu trúc đọc hiện tại của trang chi tiết kỹ năng, chỉ tinh chỉnh nhỏ về mặt hiển thị để tăng độ tinh tế.
- **Thao tác**:
  - Giữ nguyên giao diện Dark Cyberpunk cho trang chi tiết và trang chủ để tạo sự tương phản nghệ thuật với trang danh mục sáng.
  - Cải tiến nhỏ cho Code block: làm cho nút copy rõ ràng hơn để người dùng dễ thao tác.
