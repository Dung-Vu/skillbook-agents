---
description: >-
  Activates a dedicated planning mode before writing any code. Instructs the
  agent to create architectural blueprints, analyze risks, plan tests, and
  establish concrete acceptance criteria.
oneLiner: 'Draft detailed, verifiable implementation plans before modifying code.'
seoDescription: >-
  Implementation planning mode for AI Agents. Define scope, architect code
  changes, and outline test paths before execution.
seoTitle: Plan Mode - Minimax Skill for AI Agents
title: Plan Mode
---

## 📖 Why Do We Need This Skill?


Before jumping into coding complex tasks, agents risk implementing the wrong design, leading to heavy rework. This skill establishes a design-first mindset, allowing the agent to align on approaches, evaluate tradeoffs, and document an executable plan before writing code.

---

## ⚙️ How It Works

Workflow Diagram:
```
[Complex Request] ➔ 🕵️ [Survey Codebase] ➔ 🧠 [Propose Solution & Align] ➔ 📝 [Write Markdown Plan]
```

- **Codebase Survey**: Automatically trigger for complex tasks to check files, directories, and code structure.
- **Optimal Proposal**: Recommend a single best solution with a brief risk analysis instead of vague options.
- **Markdown Planning**: Generate a plan file detailing the scope, code changes, verification, and next steps.
## 🚀 How to use


```markdown
# PLAN MODE PRINCIPLES
- **Recommend One Path**: Always present a clear recommended approach with tradeoffs, rather than a passive list of alternative options.
- **Colleague Tone**: Communicate like a trusted peer engineer at a whiteboard — concise, clear, and direct, avoiding robotic templates.
- **Actionable Handoff**: Every plan must detail scope boundaries, verification strategies, and end with an explicit, single **Next Step**.
```

---

## 💡 Real-World Examples / Scenarios


### Developer:
> "Guide me on how to configure and deploy the Plan Mode skill to Draft detailed, verifiable implementation plans before modifying code."

### AI Agent (Equipped with Skill):
> "I have initialized the configuration. Here is the execution flow for the Plan Mode skill:
> 1. Set up the environment variables and structure the inputs as specified.
> 2. Execute the workflow steps and integrate core components.
> 3. Verify results, optimize performance, and return the finalized assets."

## ⚠️ Gotchas and notes


* **Greenfield Architecture Fantasy**: Proposing complex, abstract frameworks that do not fit the project's existing codebase style. Keep solutions minimal.
* **Skipping Code Inspection**: Writing plans based on generic knowledge rather than viewing actual repository files leads to mismatched API signatures and redundant utilities.
