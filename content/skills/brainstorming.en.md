---
title: "Brainstorming"
description: "Required step before any creative or implementation work. Explores user intent, clarifies requirements, proposes approaches, and writes a detailed design spec before writing code."
oneLiner: "Explore user requirements and draft a design specification before coding."
seoTitle: "Brainstorming - Minimax Skill for AI Agents"
seoDescription: "Design thinking and requirements elicitation workflow to prevent wasted development effort and code rework."
---

## 📖 Why Do We Need This Skill?

Diving straight into implementation without explicit alignment is the main cause of project failure and code rework. This skill mandates a collaborative dialogue to clarify intent, present alternative approaches, and commit a design spec to git before building.

## ⚙️ How It Works

The transition from abstract idea to technical specification follows:

```
[Idea] -> [Clarifying Questions (One by One)] -> [Propose 2-3 Approaches] -> [Design Doc Generation] -> [Spec Review Loop]
```

1. **Clarify**: Asks targeted questions, one at a time, to isolate goals and constraints.
2. **Propose**: Outlines 2-3 design options along with recommendations.
3. **Spec Review**: Saves the final spec to a Markdown file and runs a subagent validation loop.

## 🚀 Agent Guidelines (Prompt Guidelines)

1. Do NOT write code or scaffold directories until the design specification is explicitly approved by the user.
2. Ask only one clarifying question per turn to keep the feedback loop lightweight.
3. Save all approved specifications under `docs/superpowers/specs/` for version control.

## ⚠️ Gotchas and notes

- **The 'Too Simple' Trap**: Even trivial features or configuration changes benefit from a quick design alignment to catch unstated assumptions.
- **Question Fatigue**: Avoid querying open-ended details endlessly. Propose sensible defaults or multiple-choice questions instead.
