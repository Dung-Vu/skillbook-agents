---
description: Controls the user's active Chrome browser profile (maintaining login
  states, cookies, extensions) via the `mavis browser tool` CLI. Perfect for interacting
  with authenticated web dashboards.
oneLiner: Automate operations on the user's active, authenticated Chrome browser.
seoDescription: Drive the user's active Chrome browser profile. Use logins, cookies,
  and extensions to automate authenticated web actions.
seoTitle: Mavis Browser - Minimax Skill for AI Agents
title: Mavis Browser
---

## 📖 Why Do We Need This Skill?

Agents need this skill to interact with internal pages, SaaS dashboards, or sites requiring the user's active login states, cookies, and extensions (like Gmail, GitHub, or company portals). Traditional playwright scrapers cannot bypass SSO or MFA, but this tool routes actions securely through the developer's real Chrome session.

---

## ⚙️ How It Works

The browser tool execution workflow:
1. **Verify setup**: Call `mavis browser status` to check if the broker socket is open and the extension shows a green connection dot.
2. **Claim Tab**: Open a tab (default `active:false` to avoid stealing focus). The first tool call automatically claims the tab for this session.
3. **Run Browser Commands**: Invoke actions using `mavis browser tool <tool_name> '<args>'` (e.g. `open_tab`, `click`, `screenshot`) and parse the stdout JSON.
4. **Release Tab**: The claim is released when the tab is closed, explicitly released via CLI, or when the agent session terminates.

Flowchart:
```
[Browser Request] ➔ 🔍 [Check broker & extension status] ➔ 📂 [Open Tab & Auto-Claim]
                      ➔ 💻 [Call browser tool (JSON input/output)] ➔ 🔓 [Release tab on completion]
```

---

## 🚀 Agent Guidelines (Prompt Guidelines)

```markdown
# BROWSER CONTROL RULES
- **Bare Tool Names**: Do not prefix tool names with `browser_`. Write them exactly as defined in the Chrome extension (e.g., `click`, `query`).
- **Focus Discipline**: Open new tabs with `{"active": false}` so you do not disrupt the user's active window.
- **Screenshot Base64 handling**: The screenshot output is a data URL. You must strip the `data:image/png;base64,` prefix before decoding with base64.
- **Strict JSON Parsing**: Always parse stdout from CLI as JSON. Do not assume or regex-match raw textual structures.
```

---

## ⚠️ Gotchas and notes

* **Tab Ownership Conflicts**: If another session owns a tab, tool calls will fail with a claim error. Pass `force: true` to override if necessary.
* **Background Tab Screenshots**: The screenshot tool captures the active visible window. Taking a screenshot of a background tab will yield an image of the active tab. Activate the tab before taking a screenshot.
