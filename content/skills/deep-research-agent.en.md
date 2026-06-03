---
title: "Deep Research Agent"
description: "Autonomous multi-phase research agent that decomposes queries, gathers information from diverse sources, verifies facts, and synthesizes structured reports with 100+ source citations."
oneLiner: "Conduct autonomous multi-source research and write deep reports."
seoTitle: "Deep Research Agent - Minimax Skill for AI Agents"
seoDescription: "Autonomous deep research agent: decomposing queries, crawling multiple levels of references, fact-checking, and synthesizing reports."
---

## 📖 Why Do We Need This Skill?

Standard web searches are often restricted by single-query limits and surface-level snippets. This skill allows the agent to break down a broad topic into distinct sub-questions, crawl multiple links deep, cross-reference statistics, and synthesize structured research papers.

## ⚙️ How It Works

The 4-tier deep research process operates as follows:

```
[User Query] -> [Query Decomposition] -> [Multi-depth Web Crawling] -> [Fact Cross-Checking] -> [Structured Report]
```

1. **Decomposition**: Expands a single query into a tree of sub-queries targeting specific domains.
2. **Crawling**: Gathers initial web sources, extracts secondary links, and fetches deep-tier documents.
3. **Cross-Checking**: Evaluates source reliability and resolves contradictory data before compiling the report.

## 🚀 Agent Guidelines (Prompt Guidelines)

1. Cite source URLs for all key statistics, figures, and claims made throughout the report.
2. Cross-reference major assertions using at least three independent sources before accepting them as facts.
3. Format reports with a standard executive summary, thematic sections, and a reference index.

## ⚠️ Gotchas and notes

- **Misinformation**: Avoid citing unverified blogs or forums. Prioritize official industry publications, academic studies, or government registers.
- **Search Depth Overflow**: Recursive link exploration can quickly spiral out of control. Set a maximum search depth limit of 4.
