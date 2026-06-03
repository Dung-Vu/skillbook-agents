---
title: "Teamwork Multi-Agent Preview"
description: "Initialize collaborative multi-agent networks (Dev, QA, PM, Architect) to solve large-scale engineering tasks."
oneLiner: "Coordinate collaborative multi-agent networks for large projects."
seoTitle: "/teamwork-preview - Multi-Agent Collaboration Skill for Complex Projects"
seoDescription: "Detailed instructions on operating the `/teamwork-preview` skill to coordinate Dev, QA, PM, and Architect roles."
---


## 📖 Why Do We Need This Skill?

When facing large-scale software systems, single AI agents struggle with context limits and multitasking constraints:
* **Information Overload**: A single agent writing code, running tests, fixing bugs, and compiling docs can experience context dilution.
* **Lack of Specialized Review**: Lacks review from dedicated QA testers or architectural oversight from designers.

**With the `/teamwork-preview` skill, your AI Agent can:**
1. **Deploy Specialized Roles**: Spawn sub-agents configured for PM, Architect, Developer, or QA responsibilities.
2. **Collaborate Asynchronously**: Allow agents to debate architectural solutions and divide tasks using virtual Gantt charts.
3. **Enforce Quality Gates**: QA agents test Developer code, verifying compilation and logic before delivery.

---

## ⚙️ How It Works

```
[Receive Large Project] ➔ 👥 [Initialize Agent Team]
                             ├── PM Agent: Manage Plans & Timeline
                             ├── Architect Agent: Design System Architecture
                             ├── Developer Agent: Execute Source Code Writing
                             └── QA Agent: Write Tests & Verify Quality ➔ [Handover Complete Product]
```

Agent thought process when executing teamwork-preview:
1. **Project Breakdown**: Determine project scale and the necessary specialized roles.
2. **Spawn Sub-agents**: Call the `invoke_subagent` tool with specialized system prompts.
3. **Coordinate Communication**: The PM agent tracks milestone completion via a shared `task.md` file.
4. **Consolidate Results**: Merge developer code and QA testing reports to deliver a validated product.

---

## 🚀 Agent Guidelines (Prompt Guidelines)

````markdown
# TEAMWORK MULTI-AGENT INSTRUCTIONS & RULES

## 1. Sub-agent Spawning & Context Separation
- Only spawn sub-agents for independent tasks that require distinctly different roles (e.g., QA writing test cases completely separate from Developer writing code).
- Avoid summoning unnecessary sub-agents to prevent diluting the context and wasting system tokens.

## 2. Multi-Agent Communication
- Use the `send_message` tool to exchange technical information between agents in a structured manner.
- Each sub-agent must document their work progress in a separate log file for the PM Agent to easily merge.

## 3. Strict Quality Gates
- Code written by the Developer Agent **must** be reviewed and tested by the QA Agent before the final results are delivered to the user.
- If the QA Agent detects an error, the Developer must revert to the modification step and rerun tests.
````

---

## ⚠️ Gotchas and notes

* **Race Conditions**: When multiple agents modify the same source file or overwrite the test directory, race conditions can easily occur. Ensure that agents work on separate directory partitions or files.
* **Communication Optimization**: Limit agents from discussing too verbosely or repeating a single issue. The PM Agent must have the authority to decide and terminate prolonged technical debates.
```
```
