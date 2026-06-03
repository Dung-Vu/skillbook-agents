---
title: "Topic Tracker"
description: "Topic tracker and event analysis system. Gathers news updates, flags information contradictions, performs fact-checking, and writes multi-perspective reports."
oneLiner: "Monitor hot topics, verify claims, and write balanced analytical articles."
seoTitle: "Topic Tracker - Minimax Skill for AI Agents"
seoDescription: "Implement real-time news monitoring, claim verification, and objective journalism workflows on AI Agents."
---

## 📖 Why Do We Need This Skill?

Information sources frequently present biased, conflicting, or false claims during breaking news events. This skill provides the Agent with a journalistic workflow to fetch multi-source coverages, cross-check inconsistencies, locate primary source verifications, and compile objective reports.

## ⚙️ How It Works

The media monitoring workflow:
```
Topic Input --> Multi-Source Web Scraping --> Contradiction & Fact-Check Mapping --> Write Objective Synthesis
```
1. **Information Gathering**: Query search engines to collect coverage across local and international news agencies.
2. **Contradiction Auditing**: Extract primary assertions and map opposing statements in a comparison table.
3. **Verification**: Cross-reference with independent fact-checking databases and primary public records.
4. **Journalistic Output**: Compose an unbiased summary detailing the event, conflicting views, and verified statuses.

## 🚀 Agent Guidelines (Prompt Guidelines)

- Always use a neutral, objective tone; do not state personal bias or emotional adjectives.
- Every assertion cited must be mapped to a specific source URL, date, and publishing entity.
- Structure articles with clear headers: Executive Summary, The Conflict, Verifiable Facts, and References.

## ⚠️ Gotchas and notes

- **Echo Chambers**: Avoid sourcing exclusively from politically aligned agencies. Gather diverse perspectives.
- **Stale Information**: Check timestamps of news articles; verify that updates are current to prevent propagating resolved rumors.
