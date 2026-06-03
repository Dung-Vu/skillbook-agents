---
description: Provides full access to Feishu/Lark services (Calendar, Chat, Tasks,
  Bitable, Docs) using the official `lark-cli` and daemon endpoints, handling OAuth
  auth flows and bot integrations.
oneLiner: Connect and interact with Feishu/Lark workspace APIs via lark-cli.
seoDescription: Feishu/Lark integration for AI Agents. Details lark-cli installation,
  daemon endpoints routing, OAuth login, and API usage.
seoTitle: Lark Tools - Minimax Skill for AI Agents
title: Lark Tools
---

## 📖 Why Do We Need This Skill?

This skill enables AI Agents to access and interact with the Feishu/Lark enterprise collaboration suite. Agents can inspect calendars, query contact lists, send real-time notifications to team channels, or write records to Bitable sheets, automating routine office communication and coordination.

---

## ⚙️ How It Works

The workflow operates as follows:
1. **Install Check**: Ensure `@larksuite/cli` is installed globally.
2. **Resolve Daemon URL**: Read `daemon.port` to compute the API base endpoint dynamically.
3. **Verify Binding & Auth**: Check status using `lark-cli auth status`. If invalid or expired, trigger onboard or OAuth flows.
4. **Invoke lark-cli**: Run target CLI commands (e.g., `lark-cli im +messages-send`) passing proper flags (`--as user` or `--as bot`) and parse the JSON output.

Flowchart:
```
[Lark Task] ➔ ⚙️ [Check CLI & Dynamic Port] ➔ 🔑 [Validate OAuth / Bot Credentials]
                ➔ 💻 [Execute lark-cli command] ➔ 📦 [Parse JSON Output & Return]
```

---

## 🚀 Agent Guidelines (Prompt Guidelines)

```markdown
# LARK TOOLS OPERATIONS RULES
- **Shell Routing**: Always load the platform command reference (`win32` vs `darwin/linux`) before running any glue commands.
- **Identity discipline**: Explicitly pass `--as user` for personal assets (Calendar, Drive) and `--as bot` for app-level events and message sends.
- **Dynamic Port Resolution**: Never hardcode localhost ports; always resolve the base URL dynamically from `<dataDir>/daemon.port`.
- **Pre-Read Sub-Skills**: Before running any shortcut like `+messages-send`, read its specific reference file under `cli-skills/lark-im/...` to handle formatting flags.
```

---

## ⚠️ Gotchas and notes

* **401 Errors**: Missing or expired user OAuth tokens. Run `lark-cli auth login --recommend` to fetch recommended scopes, or specify `--scope` for high-sensitivity endpoints.
* **Bitable Token Misidentifications**: Bitable requests require the `appToken` extracted from browser URL, and `tableId` fetched programmatically via `+table-list`.
* **Markdown Formatting**: Lark bots use a custom markdown format. Sending standard raw markdown to chat rooms can result in blank messages or formatting errors.
