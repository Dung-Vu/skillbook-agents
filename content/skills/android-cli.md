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
description: Hướng dẫn trợ lý AI lập trình, tự động kiểm tra lỗi cấu hình, biên dịch và chạy ứng dụng Android trên điện thoại hoặc máy ảo thông qua dòng lệnh CLI mà không cần thao tác thủ công.
oneLiner: Điều khiển và tự động hóa quy trình phát triển ứng dụng Android bằng dòng lệnh CLI.
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

Mặc dù AI có thể viết mã ứng dụng Android rất tốt, nhưng nó không biết cấu hình máy tính của bạn như thế nào. Skill này cung cấp các lệnh tự động giúp trợ lý AI:
* **Tự kiểm tra lỗi**: Tự phát hiện xem máy tính đã cài đặt bộ công cụ Android (SDK) và Java chưa.
* **Tự tạo dự án**: Tạo sẵn khung ứng dụng Android hiện đại chỉ bằng một câu lệnh.
* **Cài đặt lên điện thoại**: Tự động dịch mã nguồn thành ứng dụng (tệp APK), cài đặt và mở ứng dụng đó ngay trên điện thoại hoặc máy ảo đang cắm vào máy tính.

## ⚙️ Cách Hoạt Động

Quy trình làm việc tự động:
1. **Kiểm tra môi trường**: AI kiểm tra xem các công cụ dòng lệnh của Android (`adb`, `gradlew`) đã sẵn sàng chưa.
2. **Sửa lỗi cấu hình**: Nếu thiếu các công cụ hoặc phiên bản Android cần thiết, AI sẽ tự động tải thêm.
3. **Biên dịch và Chạy thử**: Build ứng dụng thành tệp APK, cài đặt trực tiếp lên điện thoại của bạn qua kết nối USB và mở ứng dụng lên để bạn xem thử.

## 🚀 Cách Sử Dụng

1. Trước khi thực hiện, AI cần tự chạy lệnh kiểm tra các thiết bị đang kết nối bằng lệnh `adb devices`.
2. Ưu tiên viết ứng dụng bằng ngôn ngữ Kotlin hiện đại và Jetpack Compose (công cụ thiết kế giao diện nhanh).
3. Sử dụng bộ quản lý Gradle đi kèm dự án (`gradlew` hoặc `gradlew.bat`) để đảm bảo dự án chạy ổn định trên mọi máy tính.
4. Khi chạy xong, báo cáo cho người dùng đường dẫn tuyệt đối đến tệp ứng dụng APK đã tạo ra.

## 💡 Kịch Bản Lập Trình Thực Tế

### Người dùng:
> "Hãy tạo cho tôi một ứng dụng máy tính đơn giản và chạy thử trực tiếp trên điện thoại Pixel đang cắm cáp USB của tôi."

### Trợ lý AI:
> "Tôi sẽ thực hiện theo các bước sau:
> 1. Kiểm tra máy tính và phát hiện điện thoại Pixel của bạn đã kết nối sẵn sàng.
> 2. Tự động tạo mã nguồn cho ứng dụng máy tính (Cộng, Trừ, Nhân, Chia) bằng giao diện Jetpack Compose hiện đại.
> 3. Kích hoạt biên dịch ứng dụng thành tệp APK.
> 4. Cài đặt và tự động mở ứng dụng máy tính trực tiếp trên màn hình điện thoại Pixel của bạn."

## ⚠️ Lưu Ý & Gotchas

* **Tốn dung lượng bộ nhớ**: Quá trình biên dịch Android tiêu tốn nhiều bộ nhớ RAM. Bạn nên tắt các tiến trình biên dịch chạy ngầm khi không sử dụng bằng lệnh `./gradlew --stop`.
* **Bảo mật mật khẩu**: Không bao giờ đưa các tệp chứa mật khẩu ứng dụng hoặc mã khóa ký số lên mạng (như GitHub) để tránh bị mất tài khoản.
* **Tăng tốc máy ảo**: Nếu chạy trên máy ảo Android, hãy bật tính năng tăng tốc phần cứng (Hyper-V hoặc HAXM) để ứng dụng cài đặt nhanh hơn, tránh bị lỗi chờ quá lâu.
