---
description: >-
  Scaffolds new Antigravity skills complying with the Luminous Standard. Directs
  agents through routing commands across platforms and creating directory
  structures containing `SKILL.md` and `uv`-enabled scripts.
oneLiner: Scaffold standardized Antigravity skills with CLI scripts and recipes.
seoDescription: >-
  Scaffold custom Antigravity skills. Establish command routers, write uv
  scripts, pass skill linter, and run parallel evaluations.
seoTitle: Skill Creator - Minimax Skill for AI Agents
title: Skill Creator
---

## 📖 Why Do We Need This Skill?

To improve efficiency over time, AI agents must package successful interactive workflows into reusable skills. This tool directs agents to generate standardized Antigravity skills complying with the Luminous Standard, complete with prompt rules and standalone scripts.

---

## ⚙️ How It Works

The skill creation lifecycle:
1. **Check Duplication**: Run `list-skills` platform commands to ensure a coverage gap actually exists.
2. **Determine Scope**: Route the skill to User, Agent, or Project level using the three-question scope test.
3. **Scaffold & Write**: Write the compliant `SKILL.md` file and package auxiliary python scripts under `scripts/` using PEP 0723 dependency headers.
4. **Lint**: Run `node scripts/lint-skill.js` to assert formatting and metadata completeness.
5. **Evaluate**: Run parallel evaluations comparing with-skill vs baseline performance on a real-world prompt.

Flowchart:
```
[Workflow Input] ➔ 🔍 [Check Duplicates & Scope] ➔ 📁 [Write SKILL.md & Scripts]
                    ➔ 🧹 [Execute lint-skill.js] ➔ 🧪 [Run Parallel Eval (Path A/B)] ➔ Deliver
```

---

## 🚀 How to use

```markdown
# SKILL SCALFFOLDING RULES
- **Luminous Standard**: Adhere strictly to the structured section template and trigger rules in frontmatter description.
- **PEP 0723 Python Scripts**: All helper scripts must include inline metadata for dependency declaration to run seamlessly via `uv run`.
- **Linter compliance**: Running and passing the skill linter is a non-negotiable step before evaluation.
- **No Inlined Shell Recipes**: Keep terminal/shell instructions out of the `SKILL.md` body. Delegate filesystem actions to platform references.
```

---

## 💡 Real-World Examples / Scenarios

### Developer:
> "Guide me on how to configure and deploy the Skill Creator skill to Scaffold standardized Antigravity skills with CLI scripts and recipes."

### AI Agent (Equipped with Skill):
> "I have initialized the configuration. Here is the execution flow for the Skill Creator skill:
> 1. Set up the environment variables and structure the inputs as specified.
> 2. Execute the workflow steps and integrate core components.
> 3. Verify results, optimize performance, and return the finalized assets."

## ⚠️ Gotchas and notes

* **Prompt Bloat**: Do not fill `SKILL.md` with long tutorials or redundant API docs. Move bulky references into the `references/` subdirectory.
* **Skipping Eval**: Delivering a skill without performing comparison tests often introduces regressions or prompt constraints that degrade agent reasoning.
