---
slug: android-cli
title: Android CLI Development
command: /android-cli
category: mobile-development
tags:
  - android
  - sdk
  - adb
  - gradle
  - deployment
complexity: intermediate
platforms:
  - cursor
  - claude-code
  - windsurf
  - gemini-cli
  - universal
featured: true
description: >-
  Hướng dẫn Agent kiểm soát toàn diện pipeline phát triển Android thông qua CLI
  — từ khởi tạo dự án, quản lý SDK, điều khiển ADB đến tự động hóa build Gradle.
oneLiner: >-
  Điều phối và tự động hóa toàn trình quy trình phát triển ứng dụng Android qua
  CLI.
sourceUrl: 'https://developer.android.com/'
sourceAuthor: Google DeepMind
lastVerified: '2026-05-31'
relatedSkills: []
seoTitle: Android CLI Development for AI Agents — Skillbook Agents
seoDescription: >-
  Bộ chỉ dẫn kỹ năng tối ưu hóa giúp AI Agent quản lý Android development qua
  CLI — project creation, SDK, deployment, diagnostics.
provider: antigravity
---

## 📖 Tại Sao Cần Skill Này?

Mặc dù các mô hình ngôn ngữ lớn (LLM) rất xuất sắc trong việc viết mã Kotlin, Java hoặc XML, chúng hoàn toàn không có khả năng nhận biết môi trường máy tính cục bộ của bạn. Nếu không có kỹ năng này:
* **AI sẽ hướng dẫn thủ công**: AI sẽ yêu cầu bạn tự mở Android Studio, click chuột từng bước để tạo project hoặc chẩn đoán SDK.
* **Sai lệch môi trường**: AI dễ dàng cấu hình sai Gradle, build lỗi do không khớp JDK, hoặc cố gắng deploy APK lên một emulator chưa được khởi chạy.

**Khi được trang bị Kỹ năng này, AI Agent của bạn sẽ:**
1. **Tự động chẩn đoán (Self-Diagnose)**: Tự động chạy chẩn đoán `ANDROID_HOME`, `JAVA_HOME` và danh sách thiết bị adb để thiết lập môi trường an toàn trước khi code.
2. **Khởi tạo siêu tốc (Auto-Scaffolding)**: Tự động tạo cấu trúc thư mục dự án Gradle/Kotlin hiện đại chuẩn Google chỉ qua một câu lệnh CLI.
3. **Build & Deploy tự vận hành**: Tự động kích hoạt Gradle wrapper, biên dịch mã nguồn, kiểm tra trạng thái thiết bị và deploy thẳng APK lên điện thoại/máy ảo mà không cần bạn can thiệp thủ công.

---

## ⚙️ Cách Hoạt Động

```
[Yêu cầu từ Dev] ➔ 📋 [Tự Chẩn Đoán Environment] 
                     ├── PASS ➔ 🔨 [Thực Thi Gradle/Build CLI] ➔ 📲 [Deploy & Launch App]
                     └── FAIL ➔ 🔧 [Tự Động Sửa Lỗi / Nhắc Nhở Cài Đặt] ➔ Re-try
```

Quy trình suy nghĩ của Agent khi thực thi kỹ năng này:
1. **Bước 1: Chẩn đoán**: Xác thực các công cụ CLI cốt lõi (`sdkmanager`, `gradlew`, `adb`) và các cổng kết nối.
2. **Bước 2: Xử lý ngoại lệ**: Nếu thiếu SDK hoặc platform-tools, tự động dùng `sdkmanager` tải xuống phiên bản phù hợp.
3. **Bước 3: Biên dịch**: Kích hoạt Gradle daemon trong chế độ tối ưu hóa tài nguyên phần cứng.
4. **Bước 4: Bàn giao**: Cài đặt APK thành công, gửi lệnh Shell khởi chạy Activity chính và lắng nghe Logcat tìm lỗi crash ban đầu.

---

## 🚀 Hướng Dẫn Kích Hoạt IDE

### Với Cursor
Tạo file `.cursorrules` ở thư mục gốc của dự án Android của bạn và dán nội dung ở phần **Quy Tắc Chỉ Dẫn Cho Agent** bên dưới vào.

### Với Windsurf (Cascade)
Tạo file `.windsurfrules` ở thư mục gốc của dự án để Cascade Agent tự động nhận diện và phối hợp các lệnh CLI một cách trơn tru nhất.

### Với Claude Code
Khai báo các quy tắc trong file `claude_rules.md` hoặc dán trực tiếp prompt rules vào cửa sổ chat để Claude Code tuân thủ.

---

## 🚀 Cách Sử Dụng

```markdown
# ANDROID CLI INSTRUCTIONS & RULES

## 1. Environment Verification
- Trước khi chạy bất kỳ thao tác nào, bắt buộc phải chạy chẩn đoán môi trường:
  * Kiểm tra `ANDROID_HOME` và `JAVA_HOME` env variables.
  * Chạy `adb devices` để kiểm tra các thiết bị Android đang kết nối.

## 2. Project Creation & Structure
- Ưu tiên sử dụng Kotlin và Kotlin DSL (`build.gradle.kts`) thay vì Groovy.
- Thiết lập `minSdk = 24` (Android 7.0) để hỗ trợ các thư viện hiện đại và `targetSdk = 34` (Android 14).
- Ưu tiên sử dụng Jetpack Compose cho giao diện người dùng thay vì XML layouts truyền thống.

## 3. Gradle & Compilation Rules
- Luôn chạy thông qua Gradle Wrapper (`./gradlew` trên Unix, `gradlew.bat` trên Windows) để đảm bảo tính đồng nhất của phiên bản build.
- Sử dụng lệnh `./gradlew assembleDebug` để build thử nghiệm nhanh và `./gradlew bundleRelease` cho production (AAB).
- Khi build hoàn thành, luôn thông báo cho lập trình viên kích thước của APK/AAB và đường dẫn tuyệt đối đến tệp tin đó.

## 4. Device Deployment
- Xác minh trạng thái thiết bị trước khi chạy lệnh cài đặt.
- Sử dụng `adb install -r path/to/app.apk` để ghi đè ứng dụng mà không mất dữ liệu.
- Kích hoạt ứng dụng từ xa bằng shell command: `adb shell am start -n package_name/activity_name`.
```

---

## 💡 Kịch Bản Lập Trình Thực Tế

### 🧑‍💻 Nhà phát triển:
> "Tạo cho tôi một ứng dụng máy tính bỏ túi đơn giản bằng Jetpack Compose và chạy thử ngay trên điện thoại Pixel đang cắm cáp USB của tôi."

### 🤖 AI Agent (Đã được trang bị Kỹ năng):
> "Tôi sẽ tự động hóa toàn bộ quy trình này cho bạn. Dưới đây là các bước tôi đang thực hiện ngầm:"
>
> 1. **Tự động chẩn đoán môi trường**: Tôi đã kiểm tra hệ thống và xác nhận máy tính của bạn đã cấu hình sẵn JDK 17, Android SDK 34 và phát hiện điện thoại **Pixel 7 Pro** đã kết nối sẵn sàng qua cổng USB.
> 2. **Khởi tạo cấu trúc dự án**: Tôi sử dụng công cụ CLI để tự sinh cấu trúc thư mục dự án Android hiện đại (sử dụng ngôn ngữ Kotlin và Jetpack Compose).
> 3. **Lập trình chức năng**: Tôi tiến hành viết mã nguồn logic tính toán (Cộng, Trừ, Nhân, Chia) và thiết kế giao diện nút bấm mượt mà trong tệp `MainActivity.kt`.
> 4. **Biên dịch và Biên chạy**: Tôi kích hoạt trình Gradle để build tệp APK và dùng lệnh `adb` để cài đặt, sau đó tự khởi chạy ứng dụng trực tiếp trên màn hình điện thoại Pixel 7 Pro của bạn.
>
> *Chỉ sau khoảng 40 giây, ứng dụng máy tính bỏ túi đã xuất hiện sinh động trên điện thoại của bạn mà bạn không cần phải mở Android Studio hay tự tay gõ bất kỳ câu lệnh terminal nào.*

---

## ⚠️ Lưu Ý & Gotchas

* **Quản Lý Bộ Nhớ RAM**: Gradle Daemon thường chiếm dụng khoảng `500MB - 1GB` RAM và tiếp tục chạy ngầm. Hãy nhắc Agent tắt daemon bằng lệnh `./gradlew --stop` khi phiên làm việc kết thúc để giải phóng tài nguyên.
* **Keystore Bảo Mật**: Tuyệt đối không để Agent tự ý sinh file Keystore Release hoặc commit các mật khẩu nhạy cảm (`local.properties`, keystore file) lên kho lưu trữ Git công khai.
* **Tương Thích Emulator**: Khi sử dụng emulator ảo trên Windows, hãy luôn bật Hyper-V hoặc HAXM để tăng tốc độ khởi động thiết bị, tránh tình trạng timeout khi adb deploy.
