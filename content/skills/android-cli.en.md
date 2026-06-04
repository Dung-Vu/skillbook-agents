---
title: Android CLI Development
description: >-
  Guide for Agents to command the Android development pipeline through CLI —
  from project setup and SDK management to ADB control and Gradle build
  automation.
oneLiner: >-
  Coordinate and automate the entire Android application development process via
  CLI.
seoTitle: Android CLI Development for AI Agents — Skillbook Agents
seoDescription: >-
  Optimization guidelines helping AI Agents manage Android development via CLI —
  project creation, SDK, deployment, diagnostics.
---

## 📖 Why Do We Need This Skill?

Although Large Language Models (LLMs) excel at writing Kotlin, Java, or XML code, they lack awareness of your local computer environment. This skill provides CLI commands for the Agent to:
* **Self-Diagnose**: Verify `ANDROID_HOME`, `JAVA_HOME`, and connected adb devices before starting.
* **Auto-Scaffolding**: Instantly generate a modern Google Gradle/Kotlin project structure via CLI.
* **Automated Build & Deploy**: Trigger Gradle wrapper, compile code, and deploy/run the APK on a device/emulator automatically.

## ⚙️ How It Works

```
[Dev Request] ➔ 📋 [Self-Diagnose Environment] 
                   ├── PASS ➔ 🔨 [Execute Gradle/Build CLI] ➔ 📲 [Deploy & Launch App]
                   └── FAIL ➔ 🔧 [Auto-Fix Error / Installation Reminder] ➔ Re-try
```

1. **Diagnostics**: Validates core CLI tools (`sdkmanager`, `gradlew`, `adb`).
2. **Exception Handling**: Downloads missing SDK platforms/tools via `sdkmanager`.
3. **Compilation & Deployment**: Compiles the debug APK, deploys via ADB, and monitors Logcat.

## 🚀 How to use

### IDE Setup
* **Cursor**: Create a `.cursorrules` file at the project root and insert the rules below.
* **Windsurf**: Create a `.windsurfrules` file at the project root for Cascade Agent.
* **Claude Code**: Define rules in `claude_rules.md` or paste them directly in chat.

### Operational Guide
```markdown
# ANDROID CLI INSTRUCTIONS & RULES

## 1. Environment Verification
- Before running any operations, environment diagnosis must be performed:
  * Check `ANDROID_HOME` and `JAVA_HOME` env variables.
  * Run `adb devices` to check connected Android devices.

## 2. Project Creation & Structure
- Prefer Kotlin and Kotlin DSL (`build.gradle.kts`) over Groovy.
- Set `minSdk = 24` (Android 7.0) to support modern libraries and `targetSdk = 34` (Android 14).
- Prefer Jetpack Compose for the user interface over traditional XML layouts.

## 3. Gradle & Compilation Rules
- Always run via Gradle Wrapper (`./gradlew` on Unix, `gradlew.bat` on Windows) to ensure build version consistency.
- Use the command `./gradlew assembleDebug` for quick test builds and `./gradlew bundleRelease` for production (AAB).
- When the build is complete, always inform the developer of the APK/AAB size and the absolute path to the file.

## 4. Device Deployment
- Verify the device status before running the installation command.
- Use `adb install -r path/to/app.apk` to overwrite the app without losing data.
- Remotely activate the app using the shell command: `adb shell am start -n package_name/activity_name`.
```

## 💡 Real-World Examples / Scenarios

### 🧑‍💻 Developer:
> "Create a simple calculator app using Jetpack Compose and run it on my Pixel phone connected via USB."

### 🤖 AI Agent (Equipped with this Skill):
> "I will automate this entire process for you. Here are the steps I am running in the background:"
>
> 1. **Diagnose Environment**: I checked the system and confirmed your machine has JDK 17 and Android SDK 34 configured, and detected a **Pixel 7 Pro** phone connected via USB.
> 2. **Initialize Project Structure**: I used CLI tools to generate a modern Android project layout (using Kotlin and Jetpack Compose).
> 3. **Implement Logic**: I wrote the math logic (Add, Subtract, Multiply, Divide) and designed the UI layout in `MainActivity.kt`.
> 4. **Compile and Deploy**: I triggered Gradle to build the APK and used `adb` to install and launch it directly on your Pixel 7 Pro.
>
> *In about 40 seconds, the calculator app is running on your phone without you needing to open Android Studio or type terminal commands.*

## ⚠️ Gotchas and notes

* **RAM Memory Management**: The Gradle Daemon consumes around `500MB - 1GB` RAM. Stop it using `./gradlew --stop` at the end of the session to free up resources.
* **Keystore Security**: Never allow the Agent to generate Release Keystore files or commit credentials (`local.properties`, keystore files) to public Git repositories.
* **Emulator Compatibility**: On Windows, ensure Hyper-V or HAXM is enabled to prevent adb deployment timeouts.
