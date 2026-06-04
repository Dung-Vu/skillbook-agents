---
description: >-
  Controls the user's active Chrome browser profile (maintaining login states,
  cookies, extensions) via the `mavis browser tool` CLI. Perfect for interacting
  with authenticated web dashboards.
oneLiner: 'Automate operations on the user''s active, authenticated Chrome browser.'
seoDescription: >-
  Drive the user's active Chrome browser profile. Use logins, cookies, and
  extensions to automate authenticated web actions.
seoTitle: Mavis Browser - Minimax Skill for AI Agents
title: Mavis Browser
---

## 📖 Why Do We Need This Skill?

Agents need this skill to interact with internal pages, SaaS dashboards, or sites requiring the user's active login states, cookies, and extensions. This tool routes actions securely through the developer's real Chrome session.

## ⚙️ How It Works

The browser tool execution workflow:

1. **Verify Setup**: Call `mavis browser status` to check broker and extension connection status.
2. **Claim & Command**: Open target tab dynamically in background and send actions via `mavis browser tool <tool_name>`.
3. **Release**: Release tab when task is finished or session ends.

```
[Browser Request] ➔ 🔍 [Check broker & extension status] ➔ 📂 [Open Tab & Auto-Claim]
                      ➔ 💻 [Call browser tool (JSON input/output)] ➔ 🔓 [Release tab on completion]
```

## 🚀 How to use

```markdown
# BROWSER CONTROL RULES
- **Bare Tool Names**: Do not prefix tool names with `browser_`. Write them exactly as defined in the Chrome extension (e.g., `click`, `query`).
- **Focus Discipline**: Open new tabs with `{"active": false}` so you do not disrupt the user's active window.
- **Screenshot Base64 handling**: The screenshot output is a data URL. You must strip the `data:image/png;base64,` prefix before decoding with base64.
- **Strict JSON Parsing**: Always parse stdout from CLI as JSON. Do not assume or regex-match raw textual structures.
```

## 💡 Real-World Examples / Scenarios

### Developer:
> "Guide me on how to configure and deploy the Mavis Browser skill to Automate operations on the user's active, authenticated Chrome browser."

### AI Agent (Equipped with Skill):
> "I have initialized the configuration. Here is the execution flow for the Mavis Browser skill:
> 1. Set up the environment variables and structure the inputs as specified.
> 2. Execute the workflow steps and integrate core components.
> 3. Verify results, optimize performance, and return the finalized assets."

## ⚠️ Gotchas and notes

* **Tab Ownership Conflicts**: If another session owns a tab, tool calls will fail with a claim error. Pass `force: true` to override if necessary.
* **Background Tab Screenshots**: The screenshot tool captures the active visible window. Taking a screenshot of a background tab will yield an image of the active tab. Activate the tab before taking a screenshot.
