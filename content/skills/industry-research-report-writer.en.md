---
title: Industry Research Report Writer
description: >-
  Creates professional industry research reports with comprehensive data
  gathering, synthesis, fact-checking, and DOCX/PDF formatting. Focuses on
  market sizes, trends, and competitive landscape.
oneLiner: Automate market research and compile professional DOCX/PDF industry reports.
seoTitle: Industry Research Report Writer - Minimax Skill for AI Agents
seoDescription: >-
  Professional industry analysis tool: coordinating data collection, drafting
  DOCX reports, injecting charts, and verifying statistics.
---

## 📖 Why Do We Need This Skill?

Compiling industry research reports requires a disciplined approach to verify numbers and maintain layout quality. This skill automates a strict 4-phase research-to-docx pipeline, ensuring all statistics are cross-checked and compiled into formatted documents with embedded visual charts.

## ⚙️ How It Works

The report writing pipeline follows these phases:

```
[Research & Data Mining] -> [Report Drafting & Charting] -> [Data Fact-Checking] -> [DOCX/PDF Formatting & Export]
```

1. **Research**: Mines primary sources for market sizes, CAGRs, and segment shares (Wikipedia is banned).
2. **Drafting**: Outlines sections, writes analytical text, and generates image charts.
3. **Fact-Checking**: Audits the text for contradictory numbers (e.g. market size vs. sum of segments).
4. **Formatting**: Programs and exports the document as a clean DOCX/PDF.

## 🚀 How to use

1. Write the final report directly to a file; do not stream long-form report text into the chat window.
2. Never cite Wikipedia. Rely exclusively on primary financial filings, trade organizations, or governmental databases.
3. Always execute a dedicated fact-checking pass before compiling the final DOCX.

## 💡 Real-World Examples / Scenarios

### Developer:
> "Guide me on how to configure and deploy the Industry Research Report Writer skill to Automate market research and compile professional DOCX/PDF industry reports."

### AI Agent (Equipped with Skill):
> "I have initialized the configuration. Here is the execution flow for the Industry Research Report Writer skill:
> 1. Set up the environment variables and structure the inputs as specified.
> 2. Execute the workflow steps and integrate core components.
> 3. Verify results, optimize performance, and return the finalized assets."

## ⚠️ Gotchas and notes

- **Format Loss**: Using basic markdown converters for DOCX generation destroys custom table layouts. Use XML-based templating or dedicated python libraries instead.
- **Empty Chart Data**: Ensure all chart datasets are fully populated. A missing column value will break chart rendering in the exported document.
