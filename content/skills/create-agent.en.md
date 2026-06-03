---
description: Scaffolds and configures a new agent on disk, setting up its directory
  structure, system prompts (agent.md), and configuration files. Supports both standalone
  agents and project-specific reins.
oneLiner: Quickly scaffold and configure a new standalone or project-specific agent.
seoDescription: Create Agent skill for AI Agents. Standard guide on scaffolding new
  agents, setting up agent.md system prompts and directory structures.
seoTitle: Create Agent - Minimax Skill for AI Agents
title: Create Agent
---

## 📖 Why Do We Need This Skill?

AI Agents need this skill to expand their own team dynamically. When a new specialized role is required and no existing agent fits, creating a dedicated agent with explicit boundaries and responsibilities prevents system prompt bloating and improves routing accuracy.

---

## ⚙️ How It Works

The workflow consists of five structured steps:
1. **Choose a Name**: Use `kebab-case` and name by responsibility (e.g., `payments-expert`). Check if it is free via `mavis agent info`.
2. **Scaffold**: Create folders under `~/.mavis/agents/` (for reusable helpers) or `.harness/reins/` (for project reins) using selected platform commands.
3. **Write agent.md**: Define the system prompt covering: Role, Scope, Work Conventions, and Acceptance Checklist (Stop when).
4. **Add Optional Assets**: Write `config.yaml` for custom model settings, hooks, or crons.
5. **Verify**: Run `mavis agent info <name>` to prove the markdown and YAML parsed correctly.

Process flow:
```
[Request New Agent] ➔ 🏷️ [Pick Name & Check Availability] ➔ 📂 [Scaffold Directory]
                             ➔ 📝 [Write agent.md (system prompt)] ➔ 🧪 [Verify via CLI]
```

---

## 🚀 Agent Guidelines (Prompt Guidelines)

```markdown
# CREATE AGENT INSTRUCTIONS & RULES
- **Naming Rule**: Always use `kebab-case` named by responsibility, not seniority (e.g. `auth-helper`, not `senior-coder`).
- **Standard agent.md structure**: Must contain name/description frontmatter, and headings: Scope, How you work, and Stop when.
- **Measurable Stop Condition**: Stop conditions must be verifiable (e.g., "tests pass, build passes, MR opened") instead of vague "task complete".
- **Router Compliance**: Determine the host platform first and load the correct command reference file (PowerShell vs Bash). Never translate shell recipes from memory.
```

---

## ⚠️ Gotchas and notes

* **Scope Overlap**: Having two agents with overlapping responsibilities makes orchestration routing unpredictable. Tighten scope boundaries.
* **YAML Tab Indentation**: Do not use tabs for indentation in YAML frontmatter; this causes parsing errors and makes the agent invisible to the list.
* **Vague Stop Conditions**: Vague definitions like "stop when task is finished" cause agents to halt without validating if code builds or tests pass.
