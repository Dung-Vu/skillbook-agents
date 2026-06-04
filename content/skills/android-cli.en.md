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

Although Large Language Models (LLMs) excel at writing Kotlin, Java, or XML code, they lack awareness of your local computer environment. Without this skill:
* **AI will instruct manually**: The AI will ask you to open Android Studio, click step-by-step to create a project or diagnose the SDK.
* **Environment Mismatch**: The AI can easily misconfigure Gradle, fail builds due to JDK mismatches, or attempt to deploy an APK to an emulator that hasn't been launched.

**When equipped with this skill, your AI Agent will:**
1. **Self-Diagnose**: Automatically run checkups for `ANDROID_HOME`, `JAVA_HOME`, and adb device list to establish a safe environment before coding.
2. **Auto-Scaffolding**: Generate a standard Google Gradle/Kotlin project structure in one CLI command.
3. **Automated Build & Deploy**: Trigger the Gradle wrapper, compile source code, check device status, and deploy the APK directly to a phone or virtual emulator without manual intervention.

---

## ⚙️ How It Works

```
[Dev Request] ➔ 📋 [Self-Diagnose Environment] 
                   ├── PASS ➔ 🔨 [Execute Gradle/Build CLI] ➔ 📲 [Deploy & Launch App]
                   └── FAIL ➔ 🔧 [Auto-Fix Error / Installation Reminder] ➔ Re-try
```

Agent's thought process when executing this skill:
1. **Step 1: Diagnostics**: Validate core CLI tools (`sdkmanager`, `gradlew`, `adb`) and connectivity ports.
2. **Step 2: Exception Handling**: If SDKs or platform-tools are missing, automatically download the correct versions using `sdkmanager`.
3. **Step 3: Compilation**: Trigger the Gradle daemon in hardware-resource optimized mode.
4. **Step 4: Handoff**: Install the APK, send Shell commands to launch the main Activity, and listen to Logcat for initial crash warnings.

---

## 🚀 How to use

### With Cursor
Create a `.cursorrules` file at the root of your Android project and paste the content in the **Agent Guidelines** section below.

### With Windsurf (Cascade)
Create a `.windsurfrules` file at the root of your project for Cascade Agent to coordinate CLI commands smoothly.

### With Claude Code
Declare the rules in a `claude_rules.md` file or paste the prompt rules directly into the chat window.

---

## 🚀 How to use

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

---

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

---

## ⚠️ Gotchas and notes

* **RAM Memory Management**: The Gradle Daemon consumes around `500MB - 1GB` RAM. Prompt the Agent to stop it using `./gradlew --stop` at the end of the session.
* **Keystore Security**: Never allow the Agent to generate Release Keystore files or commit sensitive credentials (`local.properties`, keystore files) to public Git repositories.
* **Emulator Compatibility**: When using virtual emulators on Windows, make sure Hyper-V or HAXM is enabled to prevent deployment timeouts.
