---
description: >-
  The central runtime entry point for the Mavis system. Manages session
  lifecycles, inter-agent communication, scheduled tasks (crons), Git hooks, and
  system resource orchestration.
oneLiner: >-
  Central entry point for managing Mavis sessions, crons, hooks, and agent
  runtime.
seoDescription: >-
  Core operational guide for Mavis agent runtime. Control session lifecycles,
  memory boundaries, git hooks, and scheduling.
seoTitle: Mavis - Minimax Skill for AI Agents
title: Mavis
---

## 📖 Why Do We Need This Skill?

Mavis is the core runtime operation skill. Agents need it to control the Mavis platform itself, including inspecting other agents, executing inter-session messages, managing scheduled crons, registering Git hooks, and cleaning up long-term memory directories.

## ⚙️ How It Works

Mavis is controlled using the Mavis CLI and reference configurations:

1. **Identify Area**: Map the request to a sub-reference: agent, session, memory, cron, hook, etc.
2. **Read Guide**: Read the specific guide in `references/` before invoking commands.
3. **Execute & Update**: Run the native CLI command (e.g. `mavis communication send`, `mavis cron self`) and update runtime state.

```
[Mavis System Task] ➔ 📂 [Load Sub-Reference in references/] ➔ 💻 [Run Mavis CLI Command]
                       ➔ 🔄 [Apply State Change (Session/Cron/Memory)] ➔ 📋 [Deliver Status]
```

## 🚀 How to use

```markdown
# MAVIS OPERATIONAL RULES
- **Command Router compliance**: Never run Bash snippets on Windows or PowerShell here-strings on Linux. Execute platform commands strictly from the reference files.
- **Memory Boundaries**: Session memory is removed. Use only user-level, agent-level, or project-level memory files under `memory/`.
- **Inter-session communication**: When delegated a subtask, report completion back to the parent session using the `report-back-to-parent` recipe.
```

## 💡 Real-World Examples / Scenarios

### Developer:
> "Guide me on how to configure and deploy the Mavis skill to Central entry point for managing Mavis sessions, crons, hooks, and agent runtime."

### AI Agent (Equipped with Skill):
> "I have initialized the configuration. Here is the execution flow for the Mavis skill:
> 1. Set up the environment variables and structure the inputs as specified.
> 2. Execute the workflow steps and integrate core components.
> 3. Verify results, optimize performance, and return the finalized assets."

## ⚠️ Gotchas and notes

* **Dynamic port drift**: The Mavis daemon port is dynamic. Do not assume `localhost:5321` is constant. Always read `<dataDir>/daemon.port`.
* **YAML formatting in hooks/crons**: If the YAML definition for a hook or cron contains invalid syntax, the daemon will silently fail to parse it. Run status checks after registering.
