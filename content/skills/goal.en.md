---
title: "Goal-Oriented Planning"
description: "Structured planning guidelines enabling AI Agents to dissect complex requests, create execution plans, and track milestones."
oneLiner: "Structured planning guidelines for AI Agents to break down complex requests."
seoTitle: "Goal-Oriented Planning for AI Agents — Skillbook Agents"
seoDescription: "How to instruct AI Agents to form structured plans, outline assumptions, and implement milestone tracking."
---


## 🧠 Why Do We Need This Skill?

Complex engineering tasks often fail because agents dive straight into coding without analyzing requirements. Without this skill:
* **Scope Creep**: AI works on wrong assumptions, writing code that must be rewritten.
* **No Milestone tracking**: If the agent runs out of tokens or crashes, there is no state checkpoint to resume.

**With this planning skill, your AI Agent will:**
1. **Formulate explicit goals**: Translate ambiguous requests into defined technical deliverables.
2. **Identify critical paths**: Determine which steps depend on prior ones (e.g., compile checks before testing).
3. **Implement checkpoints**: Keep a persistent state file (`plan.md` or similar) to survive agent restarts.

---

## ⚙️ How It Works

```
[Receive Main Goal] ➔ 📝 [Create Plan task.md]
                         ├── Execute each sub-task
                         ├── Encounter error ➔ 🔍 [Analyze & Self-correct]
                         └── Goal achieved ➔ 🚀 [Acceptance Report]
```

Agent planning workflow:
1. **Deconstruction**: Break the request into core requirements and nice-to-haves.
2. **Constraint Check**: Verify permissions, environment limitations, and system versions.
3. **Drafting Plan**: Outline sequential steps, listing verification criteria for each.
4. **Execution & Checkpoints**: Run commands and update plan states after each milestone.

---

## 📜 Agent Guidelines (Prompt Guidelines)

````markdown
# GOAL COMMAND INSTRUCTIONS & RULES

## 1. Autonomous Execution Rule
- When the user activates the `/goal` command, switch to maximum autonomous mode.
- Do not stop to ask for user feedback on intermediate decisions unless a critical, unrecoverable error is encountered.

## 2. Planning & Tracking
- Always create or update a `task.md` file in the working directory to manage the checklist.
- Update the status of each task (`[ ]`, `[/]`, `[x]`) after each execution step so the user can track progress at any time.

## 3. Self-Correction & Robustness
- If a command or script fails, carefully read the error message from the console, identify the root cause, and auto-correct the source code.
- Do not retry the same failing solution more than 3 times. Instead, find an alternative approach.
````

---

## ⚠️ Gotchas and notes

* **Token Budget**: Long-running tasks consume a large amount of tokens. The agent must continuously optimize the context by avoiding printing excessively large outputs to the terminal and only saving data to result files.
* **Infinite Loops**: Always set up a loop-detection mechanism if a test or test execution command repeatedly fails without any progress.
