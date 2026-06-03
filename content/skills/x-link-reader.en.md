---
description: Fetches and analyzes content from X (formerly Twitter) links. Guides
  agents through retrieving single tweet details (metrics, content text) or profile
  information.
oneLiner: Retrieve tweet details and user profile metrics from X (Twitter) URLs.
seoDescription: Read public X/Twitter data via FxTwitter proxy API. Access single
  tweets, user profile metrics, and media content in JSON.
seoTitle: X Link Reader - Minimax Skill for AI Agents
title: X Link Reader
---

## 📖 Why Do We Need This Skill?

X.com blocks direct HTTP scraping with anti-bot challenge walls. This skill routes requests through the public FxTwitter API proxy, allowing agents to fetch tweet and profile details as structured JSON without requiring API keys.

---

## ⚙️ How It Works

The Twitter URL reading workflow:
1. **Detect Target link**: Identify URLs matching `x.com` or `twitter.com` patterns.
2. **Rewrite Domain**: Swap the original domain with `api.fxtwitter.com` (e.g. `api.fxtwitter.com/{user}/status/{id}`).
3. **Fetch Content**: Invoke `webfetch` with format `text` to retrieve the JSON response from the proxy.
4. **Format & Present**: Extract key fields (author display name, handles, tweet body text, views, engagement metrics) and format a clean markdown summary.

Flowchart:
```
[x.com / twitter.com URL] ➔ 🔄 [Rewrite to api.fxtwitter.com URL] ➔ 🌐 [Run webfetch with text format]
                             ➔ 🧩 [Extract Tweet Text & Engagement JSON] ➔ 📝 [Output clean summary]
```

---

## 🚀 Agent Guidelines (Prompt Guidelines)

```markdown
# X LINK READER CONSTRAINTS
- **Domain Restriction**: Never trigger direct HTTP calls to `x.com` or `twitter.com`. Always proxy requests through `api.fxtwitter.com`.
- **Translation Suffix**: If translation is requested, append `/translate/{lang}` (e.g. `/translate/zh`) to the fxtwitter API endpoint.
- **Structured Presentation**: Present a clean summary of the author, post body, date, engagement, and media links. Do not dump the raw JSON structure to the user.
```

---

## ⚠️ Gotchas and notes

* **Deleted or Protected Tweets**: Deleted posts or private accounts will trigger 404 or 401 response codes. Report these specific restrictions to the user.
* **Read-only Limitation**: FxTwitter is a public read-only proxy. It does not support write actions (posting tweets, replying, liking, or direct messaging).
