---
title: Social Media Trend Search
description: >-
  Social media trend search and analysis tool for platforms like TikTok,
  Instagram, Pinterest, and X. Analyzes popular keywords and sends alerts via
  Feishu/Lark webhooks.
oneLiner: >-
  Search and analyze real-time social media trends, exporting alerts to
  Feishu/Lark webhooks.
seoTitle: Social Media Trend Search - Minimax Skill for AI Agents
seoDescription: >-
  Implement social media trend monitoring, keyword analytics, and Feishu
  integration workflows on AI Agents.
---

## 📖 Why Do We Need This Skill?

Social media trends decay quickly, making manual research slow and error-prone. This skill enables the Agent to query social metrics, identify viral inflection points, filter engagement markers, and format rich message cards sent automatically to Feishu/Lark chat channels.

## ⚙️ How It Works

The trend alerts pipeline:
```
Keywords/Hashtags --> Social API Query --> Engagement Inflection Analysis --> Send Feishu/Lark Message Card
```
1. **Input Setup**: Map target keywords, platforms, and the Lark/Feishu webhook URL.
2. **Metric Scraping**: Gather daily volume, view counts, and engagement velocities.
3. **Triage**: Categorize trends (e.g., Rising, Breakout, Saturation) and capture example post URLs.
4. **Outbound Push**: Format an interactive Lark message card JSON and POST it to the webhook.

## 🚀 How to use

- Always use the structured Lark/Feishu Card format instead of raw text strings for alerts to ensure readability.
- Classify trends clearly and link directly to 3-5 reference social media posts.
- Protect webhooks: load URLs from configuration or environment variables, avoiding hardcoding in the codebase.

## 💡 Real-World Examples / Scenarios

### Developer:
> "Guide me on how to configure and deploy the Social Media Trend Search skill to Search and analyze real-time social media trends, exporting alerts to Feishu/Lark webhooks."

### AI Agent (Equipped with Skill):
> "I have initialized the configuration. Here is the execution flow for the Social Media Trend Search skill:
> 1. Set up the environment variables and structure the inputs as specified.
> 2. Execute the workflow steps and integrate core components.
> 3. Verify results, optimize performance, and return the finalized assets."

## ⚠️ Gotchas and notes

- **Invalid JSON Card schemas**: Validate interactive card payload syntax prior to posting to prevent webhook rejection.
- **Out of date posts**: Ensure example URLs are currently live and not deleted or private profiles.
