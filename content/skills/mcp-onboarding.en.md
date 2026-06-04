---
description: >-
  Guides the user through onboarding a new MCP server via a structured,
  interactive conversational flow. Collects missing details (like API keys) and
  validates connection before writing settings.
oneLiner: 'Interactive workflow to onboard, configure, and validate new MCP servers.'
seoDescription: >-
  Interactive onboarding workflow for MCP servers. Automate configuration, OAuth
  flow, and token setup using genUI cards.
seoTitle: MCP Onboarding - Minimax Skill for AI Agents
title: MCP Onboarding
---

## 📖 Why Do We Need This Skill?

This skill provides a user-friendly conversational wizard to onboard external tools into the agent workspace. It hides low-level CLI commands, walks the user through credential setup via genUI interfaces, and automatically validates connections.

---

## ⚙️ How It Works

The interactive onboarding workflow is:
1. **Identify Missing Fields**: Check if the requested service matches a preset (like Figma). Request only missing fields from the user.
2. **Register Server**: Call `mavis mcp add` behind the scenes to write config files.
3. **Run Auth Flow**:
   - For OAuth2: Run `auth login`, format the returned URL into a clickable markdown link, and poll status.
   - For Bearer/PAT: Present the `<genui-mcp-auth>` tag to prompt for the secret token.
4. **Complete Setup**: Once authenticated, automatically trigger `mavis mcp sync` and notify the user when the skill is ready.

Flowchart:
```
[Onboard Request] ➔ 🛠️ [Load Preset Configuration] ➔ 🔑 [Launch OAuth Link or genUI Card]
                     ➔ 🔄 [Poll Status & Auto-Sync] ➔ 📋 [Deliver mcp-<id> Skill]
```

---

## 🚀 How to use

```markdown
# MCP ONBOARDING RULES
- **No Manual Commands**: Never instruct the user to run `mavis mcp` commands manually. The agent must execute these commands on behalf of the user.
- **Secure Token Collection**: Always use the `<genui-mcp-auth>` tag for collecting secrets (tokens, keys). Never ask users to paste raw secrets in plaintext chat.
- **Secrets Protection**: Never print collected access tokens back to the user or write them in session output logs.
```

---

## 💡 Real-World Examples / Scenarios

### Developer:
> "Guide me on how to configure and deploy the MCP Onboarding skill to Interactive workflow to onboard, configure, and validate new MCP servers."

### AI Agent (Equipped with Skill):
> "I have initialized the configuration. Here is the execution flow for the MCP Onboarding skill:
> 1. Set up the environment variables and structure the inputs as specified.
> 2. Execute the workflow steps and integrate core components.
> 3. Verify results, optimize performance, and return the finalized assets."

## ⚠️ Gotchas and notes

* **Browser Redirect Blocks**: When redirecting users to the OAuth URL, browser pop-up blockers might halt the flow. If polling times out, prompt the user to reload the page.
* **Multi-Field Auth Limits**: The standard `<genui-mcp-auth>` UI only collects Host and Token. Collect additional non-sensitive configurations via plaintext conversation first.
