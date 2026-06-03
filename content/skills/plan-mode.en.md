---
description: Activates a dedicated planning mode before writing any code. Instructs
  the agent to create architectural blueprints, analyze risks, plan tests, and establish
  concrete acceptance criteria.
oneLiner: Draft detailed, verifiable implementation plans before modifying code.
seoDescription: Implementation planning mode for AI Agents. Define scope, architect
  code changes, and outline test paths before execution.
seoTitle: Plan Mode - Minimax Skill for AI Agents
title: Plan Mode
---

## 📖 Why Do We Need This Skill?

Before jumping into coding complex tasks, agents risk implementing the wrong design, leading to heavy rework. This skill establishes a design-first mindset, allowing the agent to align on approaches, evaluate tradeoffs, and document an executable plan before writing code.

---

## ⚙️ How It Works

The planning mode workflow is:
1. **Assess Context**: Enter plan mode when requested or when facing high-impact changes touching multiple modules.
2. **Inspect Codebase Reality**: Analyze the current architecture and patterns in the repository to avoid creating redundant abstractions.
3. **Recommend One Path**: Formulate and propose one recommended implementation path, explaining key tradeoffs concisely in chat.
4. **Deliver Executable Plan**: Write a clear markdown plan doc covering scope, chosen path, verification plan, and the next steps.

Flowchart:
```
[Complex Feature Request] ➔ 🕵️ [Inspect Repository Architecture] ➔ 🧠 [Formulate & Propose Solution]
                              ➔ 📝 [Create Markdown Plan Doc] ➔ 🚦 [Confirm Next Step & Execute]
```

---

## 🚀 Agent Guidelines (Prompt Guidelines)

```markdown
# PLAN MODE PRINCIPLES
- **Recommend One Path**: Always present a clear recommended approach with tradeoffs, rather than a passive list of alternative options.
- **Colleague Tone**: Communicate like a trusted peer engineer at a whiteboard — concise, clear, and direct, avoiding robotic templates.
- **Actionable Handoff**: Every plan must detail scope boundaries, verification strategies, and end with an explicit, single **Next Step**.
```

---

## ⚠️ Gotchas and notes

* **Greenfield Architecture Fantasy**: Proposing complex, abstract frameworks that do not fit the project's existing codebase style. Keep solutions minimal.
* **Skipping Code Inspection**: Writing plans based on generic knowledge rather than viewing actual repository files leads to mismatched API signatures and redundant utilities.
