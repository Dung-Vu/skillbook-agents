---
title: Browser Automation
description: >-
  Enable AI Agents to interact directly with web applications via automated
  browsers to perform data scraping and UI testing.
oneLiner: >-
  Interact directly and scrape data from web applications via automated
  browsers.
seoTitle: /browser - Web Browser Automation Skill for AI Agents
seoDescription: >-
  Detailed instructions on operating the `/browser` automation tool to scrape
  websites and test UI/UX.
---


## 📖 Why Do We Need This Skill?

When gathering academic data or testing web apps, static HTTP request libraries (like `requests` or `urllib`) have major limitations:
* **No SPA support**: Cannot execute JavaScript to render content on modern websites (React, Vue, Next.js).
* **No physical interaction**: Cannot automatically click buttons, fill forms, scroll pages, or solve CAPTCHAs.

With the `/browser` skill, the Agent can dynamically render JavaScript, perform UI interactions (click, fill, screenshot), and extract data cleanly into JSON or Markdown.

## ⚙️ How It Works

```
[Receive URL & Request] ➔ 🌐 [Initialize Headless Browser]
                              ├── Access page ➔ ⏳ [Wait for Javascript to load completely]
                              ├── Perform interactions (Click, Fill, Scroll)
                              └── Extract DOM/Text/Screenshot ➔ 📋 [Write to output file]
```

1. **Diagnosis**: Determine page actions to be executed.
2. **Initialization**: Open a headless browser via Playwright or Puppeteer.
3. **Execution & Extraction**: Interact with CSS selectors and output results to files.

## 🚀 How to use

```markdown
# BROWSER AUTOMATION INSTRUCTIONS & RULES

## 1. Environment & Setup
- Always use a headless browser to optimize performance and system resources.
- Ensure Playwright/Puppeteer libraries are fully installed before execution.

## 2. Interactive Flow
- When clicking a button or filling a form, make sure to wait for the element to appear in the DOM (`waitForSelector`).
- Take screenshots (`screenshot`) when encountering UI errors or to visually confirm interaction results to the user.

## 3. Data Extraction
- Avoid loading the raw HTML code of the page into the chat context. Write an extraction script to retrieve only clean text tags (`innerText`) or required tables to save tokens.
- Save scraped data as JSON or Markdown files.
```

## 💡 Real-World Examples / Scenarios

### Developer:
> "Guide me on how to configure and deploy the Browser Automation skill to Interact directly and scrape data from web applications via automated browsers."

### AI Agent (Equipped with Skill):
> "I have initialized the configuration. Here is the execution flow for the Browser Automation skill:
> 1. Set up the environment variables and structure the inputs as specified.
> 2. Execute the workflow steps and integrate core components.
> 3. Verify results, optimize performance, and return the finalized assets."

## ⚠️ Gotchas and notes

* **Timeout handling**: Set wait limits (`timeout` 15-30 seconds) to avoid freezing processes on slow-loading websites.
* **Anti-Bot Detection**: Simulating standard user behaviors and setting custom User-Agents to avoid headless browser blocks.
