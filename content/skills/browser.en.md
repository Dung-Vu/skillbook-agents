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

When gathering academic data or testing web apps, using static HTTP request libraries (like `requests` or `urllib`) has limitations:
* **No SPA support**: Modern websites built with React, Vue, or Next.js require JavaScript execution to render content.
* **No physical interaction**: Cannot click buttons, fill forms, scroll pages, or solve CAPTCHAs/login gates.

**With the `/browser` skill, your AI Agent can:**
1. **Render dynamically**: Read and compile JS-heavy web applications.
2. **Interact physically**: Fill forms, click elements, capture screenshots, and download files.
3. **Scrape intelligently**: Extract clean text content, tables, or JSON data from the DOM.

---

## ⚙️ How It Works

```
[Receive URL & Request] ➔ 🌐 [Initialize Headless Browser]
                              ├── Access page ➔ ⏳ [Wait for Javascript to load completely]
                              ├── Perform interactions (Click, Fill, Scroll)
                              └── Extract DOM/Text/Screenshot ➔ 📋 [Write to output file]
```

Agent's thought process when executing `/browser`:
1. **Goal analysis**: Determine required page actions (login, search, scroll, click).
2. **Connection startup**: Open a headless browser via Playwright or Puppeteer.
3. **Physical operations**: Execute interaction steps sequentially using precise CSS selectors.
4. **Extract and package**: Read page text or take screenshots, save results, and close the browser safely.

---

## 🚀 How to use

````markdown
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
````

---

## 💡 Real-World Examples / Scenarios

### Developer:
> "Guide me on how to configure and deploy the Browser Automation skill to Interact directly and scrape data from web applications via automated browsers."

### AI Agent (Equipped with Skill):
> "I have initialized the configuration. Here is the execution flow for the Browser Automation skill:
> 1. Set up the environment variables and structure the inputs as specified.
> 2. Execute the workflow steps and integrate core components.
> 3. Verify results, optimize performance, and return the finalized assets."

## ⚠️ Gotchas and notes

* **Timeout handling**: Slow sites can freeze the browser. Always set timeouts (15-30 seconds) for navigation or finding elements.
* **Anti-Bot Detection**: Some sites block headless browsers. Use custom User-Agent headers and delay interaction speeds to avoid detection.
```
```
