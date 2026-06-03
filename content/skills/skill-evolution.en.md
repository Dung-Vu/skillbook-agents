---
description: Governs the evolution of existing skills by updating `SKILL.md` files
  based on runtime feedback or proposals. Focuses on safe patching, regression prevention,
  and prompt-size control.
oneLiner: Evolve and patch existing skill files based on feedback and runtime signals.
seoDescription: Evolve AI skills via Signal and Proposal feedback channels. Drive
  continuous improvement and triage nightly updates.
seoTitle: Skill Evolution - Minimax Skill for AI Agents
title: Skill Evolution
---

## 📖 Why Do We Need This Skill?

As system APIs upgrade and environments drift, existing skills can become outdated or buggy. This skill establishes a safe evolution channel, directing agents to file structured Signals for defects or Proposals for new patterns to prevent chaotic runtime edits.

---

## ⚙️ How It Works

The skill evolution cycle:
1. **Identify Feedback Channel**:
   - For bugs, outdated steps, or gaps: File a **Signal**.
   - For new reusable interaction workflows: File a **Proposal**.
2. **Gather Evidence**: Quote exact conversation history or error logs (max 200 chars for Signal, max 300 chars for Proposal).
3. **Submit via CLI**: Call the target CLI reporting commands (e.g. `mavis skill signal report`).
4. **Nightly Triage**: The background evolution cron reviews reports, triage them into task signals for refiners or creators.

Flowchart:
```
[Evolution Trigger] ➔ 📋 [Classify: Signal vs Proposal] ➔ 🔍 [Extract Concrete Conversation Quote]
                       ➔ 💻 [Run Mavis CLI report command] ➔ 🔄 [Nightly Cron Triage & Update]
```

---

## 🚀 Agent Guidelines (Prompt Guidelines)

```markdown
# EVOLUTION RULES & CONSTRAINTS
- **Quote Exact Evidence**: All submissions must quote exact excerpts from logs or conversation history. Never use hand-written summaries.
- **No built-in edits**: Do not attempt to modify built-in system skills directly at runtime. File a Signal and advise the user to submit an MR.
- **Repeatability Bar**: Only propose new skills if the workflow is demonstrably recurring. Avoid polluting the index with one-off tasks.
```

---

## ⚠️ Gotchas and notes

* **Including Fixes in Signals**: Do not inline code fixes inside Signal fields. The evolution pipeline treats Signals as evidence logs; the actual fix is engineered later during refinement.
* **Agent Errors vs Skill Defects**: Do not file signals if you simply failed to follow a correct instruction. That is an agent error; correct your behavior instead.
