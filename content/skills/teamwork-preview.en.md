---
title: Teamwork Multi-Agent Preview
description: >-
  Initialize collaborative multi-agent networks (Dev, QA, PM, Architect) to
  solve large-scale engineering tasks.
oneLiner: Coordinate collaborative multi-agent networks for large projects.
seoTitle: /teamwork-preview - Multi-Agent Collaboration Skill for Complex Projects
seoDescription: >-
  Detailed instructions on operating the `/teamwork-preview` skill to coordinate
  Dev, QA, PM, and Architect roles.
---


## 📖 Why Do We Need This Skill?

Large projects can overwhelm a single AI agent due to context limits and multitasking constraints. This skill coordinates a collaborative network of specialized agents to:
- **Deploy Specialized Roles**: Spawn sub-agents for specific PM, Architect, Developer, or QA responsibilities.
- **Collaborate Asynchronously**: Allow agents to debate solutions, share progress, and divide tasks effectively.
- **Enforce Quality Gates**: Triage development and testing, preventing bugs from reaching the user.

## ⚙️ How It Works

```
[Receive Large Project] ➔ 👥 [Initialize Agent Team]
                             ├── PM Agent: Manage Plans & Timeline
                             ├── Architect Agent: Design System Architecture
                             ├── Developer Agent: Execute Source Code Writing
                             └── QA Agent: Write Tests & Verify Quality ➔ [Handover Complete Product]
```

Coordination workflow:
1. **Spawn & Delegate**: Call `invoke_subagent` to spin up specialized sub-agents with dedicated prompts.
2. **Synchronize Progress**: PM agent acts as the hub, tracking status through a shared `task.md` file.
3. **Validate & Deliver**: QA agent runs test suites against developer code, and PM compiles the final handoff.

## 🚀 How to use

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

## 💡 Real-World Examples / Scenarios

### Developer:
> "Guide me on how to configure and deploy the Teamwork Multi-Agent Preview skill to Coordinate collaborative multi-agent networks for large projects."

### AI Agent (Equipped with Skill):
> "I have initialized the configuration. Here is the execution flow for the Teamwork Multi-Agent Preview skill:
> 1. Set up the environment variables and structure the inputs as specified.
> 2. Execute the workflow steps and integrate core components.
> 3. Verify results, optimize performance, and return the finalized assets."

## ⚠️ Gotchas and notes

* **Race Conditions**: Avoid having multiple agents write to the same source file or test directory concurrently.
* **Communication Overhead**: Keep discussions concise. The PM agent must terminate circular debates quickly.
