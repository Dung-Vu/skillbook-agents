---
title: Feishu Webhook
description: >-
  Feishu/Lark Webhook messaging assistant. Send messages to Feishu groups via
  Webhook: plain text, rich text (Post), interactive cards with complex layouts,
  buttons, charts, tables, and images.
oneLiner: Send messages and interactive cards to Feishu/Lark groups via Webhooks.
seoTitle: Feishu Webhook - Minimax Skill for AI Agents
seoDescription: >-
  Integrate Feishu/Lark Webhooks to automate reports, notifications, and rich
  interactive message cards with buttons.
---

## 📖 Why Do We Need This Skill?

Manual updates or plain-text notifications lack engagement and structural clarity. This skill allows the agent to construct visually rich interactive cards containing charts, buttons, and structured summaries, publishing them automatically to Feishu/Lark channels.

## ⚙️ How It Works

The webhook messaging workflow follows:

```
[Trigger Event] -> [Check Environment & URL] -> [Format Message JSON] -> [Image Upload (if any)] -> [POST to Webhook]
```

1. **Verify**: Ensures the webhook URL and environment tokens are valid.
2. **Build JSON**: Constructs the exact payload structure (text, post, or interactive card JSON) based on Feishu schema.
3. **POST**: Dispatches the HTTP request and handles response validation.

## 🚀 How to use

1. Never hardcode Webhook URLs or access tokens; load them dynamically from environment variables.
2. Implement retry logic and rate limit management when sending high-volume notifications.
3. Use Feishu's Card Builder tool to prototype the card JSON layout before hardcoding it in the script.

## 💡 Real-World Examples / Scenarios

### Developer:
> "Guide me on how to configure and deploy the Feishu Webhook skill to Send messages and interactive cards to Feishu/Lark groups via Webhooks."

### AI Agent (Equipped with Skill):
> "I have initialized the configuration. Here is the execution flow for the Feishu Webhook skill:
> 1. Set up the environment variables and structure the inputs as specified.
> 2. Execute the workflow steps and integrate core components.
> 3. Verify results, optimize performance, and return the finalized assets."

## ⚠️ Gotchas and notes

- **Rate Limiting**: Feishu limits webhook triggers to 100 requests per minute. Batch messages or add delays to avoid being blocked.
- **Card Layout Errors**: Interactive card schemas are highly sensitive. Even minor formatting mistakes will cause the entire payload to fail silently or return a 400 error.
