---
title: "UV Python Package Manager"
description: "Guide for Agents to check, install, and utilize UV — a fast Rust-based Python package and environment manager accelerating dependency resolution by 10-100x."
oneLiner: "Automate fast Python package and environment management using UV."
seoTitle: "UV Python Package Manager Setup & Rules for AI — Skillbook Agents"
seoDescription: "Optimization guidelines helping AI Agents set up and execute Python scripts rapidly using the UV package manager."
---


## 📖 Why Do We Need This Skill?

Python is the primary language for AI, data analysis, and automation. However, managing virtual environments (`venv`) and installing packages using traditional `pip` poses challenges for Agents:
* **Slow resolution speeds**: Resolving and downloading packages with `pip` can trigger chat session timeouts.
* **Environment misconfigurations**: Agents often forget to activate virtual environments or install packages globally, causing file write permission conflicts.

**When equipped with this skill, your AI Agent will:**
1. **10-100x Acceleration**: Use UV (written in Rust) to resolve and install dependencies in seconds using global caches.
2. **Leverage PEP 0723**: Read inline dependency metadata directly inside script headers, eliminating the need for `requirements.txt` files.
3. **Isolated Environments**: Automatically initialize, activate, and manage isolated virtual environments without user setup.

---

## ⚙️ How It Works

```
[Run Python Script] ➔ 📋 [Check UV Version]
                         ├── NOT INSTALLED ➔ ⬇ [Download & Install UV] ➔ [Update PATH Env]
                         └── INSTALLED     ➔ 🚀 [Execute `uv run` + Auto-load Inline Deps]
```

Agent thought process when executing this skill:
1. **Verification**: Run `uv --version` to check if UV is installed on the host.
2. **Setup**: If missing, download and install UV via PowerShell (Windows) or shell scripts (Unix), updating PATH variables.
3. **Execution**: Run scripts using `uv run <script.py>`. This command automatically sets up temporary environments, installs dependencies declared in script headers, and executes isolation-safe code.

---

## 🚀 How to use

### With Cursor
Add the rules below to your `.cursorrules` file in Python projects to redirect `pip` operations to UV.

### With Windsurf (Cascade)
Add these rules to `.windsurfrules` at the project root to enforce UV packages.

---

## 🚀 Agent Guidelines (Prompt Guidelines)

````markdown
# UV PACKAGE MANAGER INSTRUCTIONS & RULES

## 1. Prerequisites Check
- Always check if `uv` is installed on the system before executing any Python code.
- If not installed, automatically run the official installation command:
  * Windows (PowerShell): `irm https://astral.sh/uv/install.ps1 | iex`
  * macOS / Linux: `curl -LsSf https://astral.sh/uv/install.sh | sh`
  * After installation, run `uv --version` to verify (version ≥ 0.4.x required).

## 2. Execution & Dependency Management
- Do not use `pip install` or `python -m venv`. Always replace them with `uv` commands.
- For standalone script files, use the **PEP 0723** format to declare dependencies at the top of the file. For example:
  ```python
  # /// script
  # dependencies = [
  #   "requests",
  #   "biopython",
  # ]
  # ///
  ```
- Activate and run script files using: `uv run script.py`.

## 3. Project Management
- To create a new Python project, use: `uv init project_name`.
- To add a package to the project's local virtual environment, use: `uv add package_name`.
````

---

## 💡 Example scenarios

### 🧑‍💻 Developer:
> "I want to test run a Python data analysis script `process_data.py` that needs `pandas` and `matplotlib`. How do I run it as fast as possible without wasting time setting up a virtual environment?"

### 🤖 AI Agent (Equipped with Skill):
> "I will address this request immediately using lightning-fast UV package management. The execution process is as follows:"
>
> 1. **Directly Embed Dependencies**: I will automatically create `process_data.py` and embed library declarations (`pandas`, `matplotlib`) directly into the script's header per the PEP 0723 standard. This entirely eliminates the need to create a `requirements.txt` file manually.
> 2. **Check and Accelerate**: I diagnose that the UV tool is already installed on your machine. I will use the `uv run` command to launch.
> 3. **Super-fast Resolution**: UV will automatically spin up a temporary isolated virtual environment, download and link the library packages from the global cache in **under 0.5 seconds**.
> 4. **Successful Launch**: The Python script executes automatically, processing numbers and rendering a visual chart for you immediately.
>
> *Thanks to UV, you do not need to manually type commands to create a `venv` virtual environment, activate it, or wait for the `pip install` command to finish.*

---

## ⚠️ Gotchas and notes

* **PATH Environment Variable Error Handling**: After installing UV for the first time, the current terminal might not recognize the `uv` command. Always try closing and reopening the terminal or reloading the environment variables (`$env:Path` on Windows) instead of reinstalling multiple times.
* **Leverage Global Cache**: UV shares an extremely smart global cache. If multiple projects use the same library, UV will create hard links instead of physically copying files, saving disk space and maximizing acceleration.
* **Pip Warning**: Remind the agent never to mix `pip install` and `uv pip install` in the same virtual environment to avoid package structure conflicts.
