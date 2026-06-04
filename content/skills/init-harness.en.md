---
description: >-
  Bootstraps a `.harness/` directory for a coding project by analyzing the
  codebase structure, technologies, and dominant languages, then scaffolding a
  tailored multi-agent team.
oneLiner: Analyze codebase and bootstrap a coordinated multi-agent team harness.
seoDescription: >-
  Bootstrap a multi-agent team harness in `.harness/`. Automates repository
  scanning, agent selection, and configuration files scaffolding.
seoTitle: Init Harness - Minimax Skill for AI Agents
title: Init Harness
---

## 📖 Why Do We Need This Skill?

AI Agents need this skill to establish a structured multi-agent coordination environment (Harness) in a new coding repository. Cold-starting a project with specialized roles ensures modular development and avoids context overloading in a single agent session.

## ⚙️ How It Works

The bootstrap process runs end-to-end inside a dedicated worker session:

1. **Identify & Scan**: Detect if it is a single repository, monorepo, or multi-repo directory, scanning manifests to gather stack facts.
2. **Design & Scaffold**: Define a team of 3 to 7 agents and write agent prompts inside `.harness/reins/<name>/agent.md`.
3. **Orchestrate & Handoff**: Create `.harness/agent.md` at the project root and output a delivery summary.

```
[Scan Project & Detect Configs] ➔ 📊 [Analyze Tech Stack & Active Commits]
   ➔ 👥 [Determine Team Size & Roles] ➔ 📁 [Scaffold .harness/ structure] ➔ 📋 Report and Git Commit
```

## 🚀 How to use

```markdown
# INIT HARNESS RULES
- **Activation Gate**: Only initiate bootstrap when `<bootstrap_check>` is present in prompt context or requested explicitly.
- **Team Size Limit**: Scaffold a team of 3-7 agents. Do not pad the team with unnecessary specialists.
- **Orchestrator Integrity**: Never inline the list of project reins inside the orchestrator's `agent.md` body. The daemon injects the roster dynamically.
- **Git Check**: Do not bootstrap if the directory contains no real code or is not a git repository. Explain the reason to the user.
```

## 💡 Real-World Examples / Scenarios

### Developer:
> "Guide me on how to configure and deploy the Init Harness skill to Analyze codebase and bootstrap a coordinated multi-agent team harness."

### AI Agent (Equipped with Skill):
> "I have initialized the configuration. Here is the execution flow for the Init Harness skill:
> 1. Set up the environment variables and structure the inputs as specified.
> 2. Execute the workflow steps and integrate core components.
> 3. Verify results, optimize performance, and return the finalized assets."

## ⚠️ Gotchas and notes

* **Auto-Commit Pitfall**: Do not automate the `git commit` step within the bootstrap script. Allow the user to review the files and commit when ready.
* **Hardcoded Absolute Paths**: Ensure all documentation links in agent prompts are relative. Do not hardcode project absolute paths.
* **Monorepo Handling**: If the workspace contains multiple independent repos, bootstrap the root `.harness/` for coordination, and separate `.harness/` folders inside each repository.
