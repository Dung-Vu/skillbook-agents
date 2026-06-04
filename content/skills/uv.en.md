---
title: UV Python Package Manager
description: >-
  Guide for Agents to check, install, and utilize UV — a fast Rust-based Python
  package and environment manager accelerating dependency resolution by 10-100x.
oneLiner: Automate fast Python package and environment management using UV.
seoTitle: UV Python Package Manager Setup & Rules for AI — Skillbook Agents
seoDescription: >-
  Optimization guidelines helping AI Agents set up and execute Python scripts
  rapidly using the UV package manager.
---

## 📖 Why Do We Need This Skill?

Managing Python environments and package installation using traditional `pip` is often slow, causing timeout errors and dependency resolution issues. This skill enables the AI Agent to:
- **Accelerate installs by 10-100x**: Use Rust-based UV to resolve and download packages rapidly using global caches.
- **Leverage PEP 0723**: Identify and load inline dependencies declared in script headers without requiring `requirements.txt` files.
- **Isolate environments automatically**: Initialize, activate, and manage isolated virtual environments seamlessly.

## ⚙️ How It Works

```
[Run Python Script] ➔ 📋 [Check UV Version]
                         ├── NOT INSTALLED ➔ ⬇ [Download & Install UV] ➔ [Update PATH Env]
                         └── INSTALLED     ➔ 🚀 [Execute `uv run` + Auto-load Inline Deps]
```

Execution workflow:
1. **Verification**: Run `uv --version` to check if UV is installed on the host. If missing, automatically download and install it, updating the PATH variables.
2. **Resolution & Run**: Execute Python scripts using `uv run <script.py>` to automatically build a temporary environment, resolve inline dependencies, and run the code.

## 🚀 How to use

### IDE Configuration

- **With Cursor**: Add rules below to your `.cursorrules` file in Python projects to redirect `pip` operations to UV.
- **With Windsurf (Cascade)**: Add rules to `.windsurfrules` at the project root to enforce UV packages.

### Rules

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

## 💡 Real-World Examples / Scenarios

### Scenario A: Running Standalone Data Analytics Script

#### 🧑‍💻 Developer:
> "I want to test run a Python data analysis script `process_data.py` that needs `pandas` and `matplotlib`. How do I run it as fast as possible without wasting time setting up a virtual environment?"

#### 🤖 AI Agent (Equipped with Skill):
> "I will address this request immediately using lightning-fast UV package management. The execution process is as follows:"
>
> 1. **Directly Embed Dependencies**: I will automatically create `process_data.py` and embed library declarations (`pandas`, `matplotlib`) directly into the script's header per the PEP 0723 standard. This entirely eliminates the need to create a `requirements.txt` file manually.
> 2. **Check and Accelerate**: I diagnose that the UV tool is already installed on your machine. I will use the `uv run` command to launch.
> 3. **Super-fast Resolution**: UV will automatically spin up a temporary isolated virtual environment, download and link the library packages from the global cache in **under 0.5 seconds**.
> 4. **Successful Launch**: The Python script executes automatically, processing numbers and rendering a visual chart for you immediately.
>
> *Thanks to UV, you do not need to manually type commands to create a `venv` virtual environment, activate it, or wait for the `pip install` command to finish.*

### Scenario B: Setup and Deployment Workflow

#### Developer:
> "Guide me on how to configure and deploy the UV Python Package Manager skill to Automate fast Python package and environment management using UV."

#### AI Agent (Equipped with Skill):
> "I have initialized the configuration. Here is the execution flow for the UV Python Package Manager skill:
> 1. Set up the environment variables and structure the inputs as specified.
> 2. Execute the workflow steps and integrate core components.
> 3. Verify results, optimize performance, and return the finalized assets."

## ⚠️ Gotchas and notes

* **PATH Environment Variable**: After installing UV, reload the terminal or reload the PATH variable to ensure the shell recognizes the `uv` command.
* **Global Cache Hardlinks**: UV shares a global cache via hardlinks to save disk space and maximize acceleration across projects.
* **Avoid Mixing with Pip**: Do not run `pip install` and `uv` commands in the same virtual environment to prevent package structure conflicts.
