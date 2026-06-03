# 🎯 Skillbook Agents — Kế Hoạch Nâng Cấp FE (Rút Gọn)

> **Tầm nhìn**: Website bách khoa toàn thư về AI Agent Skills — tập trung 100% vào nâng cấp trải nghiệm thị giác (showcase) và hiệu năng, không thêm skill hoặc thay đổi database.

---

## 🚀 Nhật Ký Triển Khai (Hoàn Thành 100%)

### Phase 1: Tái cấu trúc & Đồng bộ Codebase 🧹 [COMPLETED]
- **Tách god component**: Chia nhỏ `LandingPage.tsx` (1189 LOC) thành các section độc lập: `HeroSection.tsx` (orbs & shockwave GSAP), `EvolutionSection.tsx` (timeline cuộn), `SandboxSection.tsx` (trình giả lập), và `StageGraphics.tsx` (SVG neon).
- **Hợp nhất Header & Footer**:
  - Gộp các header trùng lặp thành `Header.tsx` thống nhất, chuyển ngữ tiếng Việt, thêm hiệu ứng active link và trigger Cmd+K.
  - Cập nhật link repo GitHub chính thức: `https://github.com/Dung-Vu/skillbook-agents`.
- **Premium Loading & Error**: Tạo `loading.tsx` (shimmer skeletons) và `error.tsx` (Cyberpunk boundary) cho các routes `/skills`.
- **Dọn dẹp**: Xóa tệp thừa `test-parser.js` và các SVG mặc định của Next.js.

### Phase 2: Trải nghiệm Chi tiết & Command Palette ✨ [COMPLETED]
- **Nâng cấp trang chi tiết (`SkillDetailClient.tsx`)**: Tích hợp thanh tiến trình đọc neon, nút Share liên kết, nút Scroll-to-Top FAB trôi nổi, và dịch thuật các nhãn tooltip sang tiếng Việt.
- **Visual Hero Banner**: Sửa `/skills/[slug]/page.tsx` hiển thị banner lớn chuyển màu theo danh mục, nâng cấp card điều hướng Trước/Sau với viền sáng `.glow-border` phát quang theo độ phức tạp.
- **Command Palette (`CommandPalette.tsx`)**: Tự thiết kế modal tìm kiếm toàn cục (Cmd+K / Ctrl+K) bằng React 19 + Framer Motion. Tích hợp Fuse.js tìm kiếm qua API `/api/skills` và lưu lịch sử bằng `localStorage`.

### Phase 3: Hiện đại hóa các Sub-pages & 404 🌟 [COMPLETED]
- **Catalog View**: Thay thế ảnh nền bằng Next.js `<Image>`, thêm bộ đếm số hoạt họa `AnimatedCounter` (`requestAnimationFrame`), hiển thị tooltip phím tắt tìm kiếm, và đọc URL query `?search=...`.
- **Trang Giới thiệu (`AboutClient.tsx`)**: Tách client component, tạo timeline AI Agent workflow 4 bước tương tác trực quan bằng Framer Motion, cập nhật mô tả thành 12 categories.
- **Trang Changelog (`ChangelogClient.tsx`)**: Tạo timeline cuộn stagger reveal (`whileInView`) và pulse neon cyberpunk cho các chấm tròn mốc lịch sử.
- **Trang 404 (`not-found.tsx`)**: Thiết kế chữ glitch cyberpunk, Matrix particle background bằng HTML5 Canvas, nhúng ô tìm kiếm hoạt động trực tiếp hướng về Catalog.

### Phase 4: Tối ưu Hiệu năng & PWA 🚀 [COMPLETED]
- **Lazy load canvas**: Sử dụng `next/dynamic` với `{ ssr: false }` nạp động 3 canvas nền trang chủ để giảm bundle size ban đầu.
- **Thưa hạt & Giảm chuyển động**: Tự động giảm 50% số lượng hạt trên di động, hỗ trợ đóng băng hoạt ảnh nếu hệ điều hành bật `prefers-reduced-motion`.
- **Sửa lỗi biên dịch `fs`**: Chuyển đổi [Footer.tsx](file:///d:/skillbook-agents/src/components/layout/Footer.tsx) sang fetch số lượng skill client-side qua API, khắc phục lỗi Webpack kéo `fs` Node.js vào trình duyệt.
- **PWA support**: Tạo [manifest.ts](file:///d:/skillbook-agents/src/app/manifest.ts) cấu hình standalone mode, favicon và icon đồng bộ.

### Phase 5: Production Ready 🌐 [COMPLETED]
- **TypeScript**: Khắc phục lỗi ép kiểu `Variants` trong Framer Motion 12 tại `AboutClient.tsx`.
- **Build test**: Chạy thành công `npm run build` không cảnh báo (exit code 0), sinh ra 49 routes tĩnh và động tối ưu.

### Phase 6: Responsive Design Pass 📱 [COMPLETED — 2026-05-31]
- **Nguồn:** Follow-up `2026-05-31T12:46:15Z`.
- **Scope:** Audit và sửa responsive overflow trên toàn bộ 5 route chính (`/`, `/skills`, `/skills/[slug]`, `/about`, `/changelog`) ở mọi viewport (mobile/tablet/desktop) — triệt tiêu tràn viền, bẻ dòng lỗi, che khuất phần tử.

### Phase 7: Mobile Slim & Luminous Light Theme ✨ [COMPLETED — 2026-05-31]
- **Nguồn:** Follow-up `2026-05-31T14:39:41Z` (Mobile redesign + Luminous theme) và `2026-05-31T15:20:33Z` (Slim typography/card).
- **Scope:** Đồng bộ Luminous Light Theme sáng màu từ desktop xuống mobile, tinh giản typography + card size, triệt tiêu lê thê và lệch màu trên di động.

### Phase 8: Skill Detail Page Final Fix 🎯 [COMPLETED — 2026-05-31]
- **Nguồn:** Follow-up `2026-05-31T18:39:20Z`.
- **Scope:** Sửa đổi và tối ưu giao diện trang chi tiết kỹ năng (`/skills/[slug]`) để hiển thị hoàn hảo trên cả desktop và mobile (TOC, related-skills, prev/next nav).

---

## 🛡️ Quyết Định Thiết Kế Đã Thống Nhất
1. **GitHub URL**: `https://github.com/Dung-Vu/skillbook-agents` thống nhất toàn cục.
2. **Deploy**: **Vercel** (hỗ trợ Next.js 16 App Router & SSG tối ưu).
3. **Ngôn ngữ**: **Tiếng Việt làm chủ đạo**, giữ nguyên thuật ngữ kỹ thuật tiếng Anh phổ biến (*slug, metadata, frontmatter, CLI, Command Palette, SEO*).
4. **Hiệu năng**: Triển khai Intersection Observer cho canvas và cô lập GSAP chạy động client-side tại Landing Page.

---

## 📊 Kế Hoạch Xác Minh (Verification)
* **Automated**: `pnpm run build` (chạy `validate:skills` trước, rồi `next build`) và `pnpm run lint` đạt kết quả thành công (verified).
* **E2E**: `pnpm run test:e2e` — 18 ca kiểm thử Playwright trên 5 spec files (verified sau cleanup `66c2864`).
* **Manual**: Tương thích hoàn toàn trên Chrome, Safari, Firefox và các trình duyệt di động iOS/Android.
