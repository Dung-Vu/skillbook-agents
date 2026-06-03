---
description: The central runtime entry point for the Mavis system. Manages session
  lifecycles, inter-agent communication, scheduled tasks (crons), Git hooks, and system
  resource orchestration.
oneLiner: Central entry point for managing Mavis sessions, crons, hooks, and agent
  runtime.
seoDescription: Core operational guide for Mavis agent runtime. Control session lifecycles,
  memory boundaries, git hooks, and scheduling.
seoTitle: Mavis - Minimax Skill for AI Agents
title: Mavis
---

## 📖 Why Do We Need This Skill?

Mavis is the core runtime operation skill. Agents need it to control the Mavis platform itself, including inspecting other agents, executing inter-session messages, managing scheduled crons, registering Git hooks, and cleaning up long-term memory directories.

---

## ⚙️ How It Works

Mavis is controlled using the Mavis CLI and reference configurations:
1. **Identify Area**: Map the request to a sub-reference: agent, session, memory, cron, hook, skill-management, or skill-evolution.
2. **Read Guide**: Read the specific guide in `references/` before invoking commands.
3. **Execute CLI**: Choose the native CLI command (e.g. `mavis communication send`, `mavis cron self`) and run it via platform-compliant recipes.

Flowchart:
```
[Mavis System Task] ➔ 📂 [Load Sub-Reference in references/] ➔ 💻 [Run Mavis CLI Command]
                       ➔ 🔄 [Apply State Change (Session/Cron/Memory)] ➔ 📋 [Deliver Status]
```

---

## 🚀 Agent Guidelines (Prompt Guidelines)

```markdown
# MAVIS OPERATIONAL RULES
- **Command Router compliance**: Never run Bash snippets on Windows or PowerShell here-strings on Linux. Execute platform commands strictly from the reference files.
- **Memory Boundaries**: Session memory is removed. Use only user-level, agent-level, or project-level memory files under `memory/`.
- **Inter-session communication**: When delegated a subtask, report completion back to the parent session using the `report-back-to-parent` recipe.
```

---

## ⚠️ Gotchas and notes

* **Dynamic port drift**: The Mavis daemon port is dynamic. Do not assume `localhost:5321` is constant. Always read `<dataDir>/daemon.port`.
* **YAML formatting in hooks/crons**: If the YAML definition for a hook or cron contains invalid syntax, the daemon will silently fail to parse it. Run status checks after registering.
