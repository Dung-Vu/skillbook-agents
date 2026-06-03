---
title: "Research Paper Generator"
description: "Deep research paper generator capable of producing 12k-15k word academic papers. Automates literature search, outlines chapters, writes contents segment-by-segment, and manages academic citations."
oneLiner: "Generate comprehensive academic research papers (12k-15k words) with valid citations."
seoTitle: "Research Paper Generator - Minimax Skill for AI Agents"
seoDescription: "Implement academic writing, citation management, and deep literature review capabilities on AI Agents."
---

## 📖 Why Do We Need This Skill?

Standard AI summaries are insufficient for professional academic writing which demands structured argumentation, deep literature reviews, and formatting. This skill enables the Agent to manage long-form document synthesis, compile references, and produce publication-ready outputs in Word format.

## ⚙️ How It Works

The academic research writing workflow:
```
Research Topic --> Literature Search & Outlining --> Segmented Writing --> Citation Cross-Check --> DOCX Export
```
1. **Literature Search**: Query search engines to assemble facts, definitions, and existing theories.
2. **Outline Design**: Structure the paper into a comprehensive plan (Abstract, Intro, Methods, Results, Discussion, Refs).
3. **Segmented Synthesis**: Author chapters individually to maximize depth, logic, and technical writing style.
4. **Citation Management**: Insert and cross-reference citations against the bibliography.
5. **Compilation**: Package the output into clean `.docx` or Markdown deliverables.

## 🚀 Agent Guidelines (Prompt Guidelines)

- Never attempt to write a 12k-15k word paper in a single turn. Enforce segmented writing of individual sections.
- Ensure all inline citations point to existing publications, journals, or verified datasets listed in the references.
- Style must be academic and formal. Include data tables and structural definitions in the methodology and results sections.

## ⚠️ Gotchas and notes

- **Hallucinated Citations**: Do not invent author names or journal titles. Every citation must represent real work.
- **Structural Gaps**: Monitor text transitions between segments to prevent repetition or logic gaps.
