---
title: Web Scraper
description: >-
  Versatile web scraping and crawling tool. Extracts text content from web
  pages, parses structured data, and saves results in popular formats (JSON,
  CSV, Markdown).
oneLiner: Scrape and extract structured data from websites into JSON/CSV formats.
seoTitle: Web Scraper - Minimax Skill for AI Agents
seoDescription: >-
  Implement web crawling, parser script generation, and structured data export
  workflows on AI Agents.
---

## 📖 Why Do We Need This Skill?

AI Agents need real-world web data to ground their analysis, but raw HTML is messy and websites block basic bots. This skill provides the Agent with Python patterns using BeautifulSoup or Playwright to extract structured entities, bypass simple security checks, and export cleaned dataset files.

## ⚙️ How It Works

The web harvesting cycle:
```
Target URL Input --> Parse HTML Structure --> Code Scraper Script --> Execute & Extract Data --> Save to JSON/CSV
```
1. **Target Analysis**: Ingest target URL and specify required data fields (e.g., titles, prices, dates).
2. **Inspection**: Audit the web page structure to identify reliable CSS selectors or API endpoints.
3. **Script Execution**: Author and run Python script using HTTP clients (`httpx`, `requests`) or dynamic browsers (`playwright`).
4. **Parsing & Cleaning**: Strip HTML boilerplate, clean unicode strings, and structure records.
5. **Exporting**: Save target arrays into JSON, CSV, or Markdown tables and return paths.

## 🚀 How to use

- Always include realistic User-Agent headers and build in polite request delays (throttling) to respect server workloads.
- Implement robust exception handling for connection timeouts, ssl errors, and 404/500 HTTP response codes.
- Validate output datasets: ensure empty rows or failed selector parses are logged and filtered out.

## 💡 Real-World Examples / Scenarios

### Developer:
> "Guide me on how to configure and deploy the Web Scraper skill to Scrape and extract structured data from websites into JSON/CSV formats."

### AI Agent (Equipped with Skill):
> "I have initialized the configuration. Here is the execution flow for the Web Scraper skill:
> 1. Set up the environment variables and structure the inputs as specified.
> 2. Execute the workflow steps and integrate core components.
> 3. Verify results, optimize performance, and return the finalized assets."

## ⚠️ Gotchas and notes

- **Dynamic Content**: Static scraper requests will fail on React/Vue pages that load content via clientside JS. Playwright must be used.
- **IP Bans / Captchas**: Warn users when targeted platforms use advanced firewall protections like Cloudflare, which blocks CLI scrapers.
