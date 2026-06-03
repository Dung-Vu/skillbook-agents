---
title: "Mini Coder Max"
description: "Autonomous coding agent that systematically plans, implements, reviews, and delivers high-quality code. Handles tasks of any complexity by following a structured workflow."
oneLiner: "Autonomous coding agent following a disciplined plan-implement-review workflow."
seoTitle: "Mini Coder Max - Minimax Skill for AI Agents"
seoDescription: "Guide to building an autonomous software developer agent utilizing strict QA, multi-stage planning, and refactoring guidelines."
---

## 📖 Why Do We Need This Skill?

Writing code directly from user requests without structural preparation leads to brittle software, security holes, and code rot. This skill installs a strict, professional engineering workflow on the Agent, enforcing explicit planning, standard lint checks, automated reviews, and rigorous bug triage before the code is delivered.

## ⚙️ How It Works

The structured developer workflow:
```
Requirement Analysis ──> Architecture Planning ──> Targeted Coding ──> Self-Review & QA Triage ──> Final Delivery
```
1. **Planning**: Classify complexity (Simple, Moderate, Complex, Enterprise) and define scope, roadmaps, and risks.
2. **Research**: Query official docs and verify package versions, focusing on tier-1 trusted sources.
3. **Implementation**: Code with PEP8/ES6+ idioms, type safety, modular structures, and robust error catching.
4. **Quality Assurance**: Self-audit security (XSS, SQLi), memory leaks, readability, and API docs.
5. **Delivery**: Wrap the codebase with setup guides, assumptions, and future-work notes.

## 🚀 Agent Guidelines (Prompt Guidelines)

- Always create a written plan with complexity rating, estimated effort, and risk mitigation strategies before coding.
- Enforce clean code rules: no deep nesting (>3 levels), descriptive naming, and single-purpose functions.
- Classify issues during QA into 🔴 Critical, 🟠 High, 🟡 Medium, and 🟢 Low. Fix critical/high errors immediately.
- Never swallow errors silently; always validate inputs and handle exceptions gracefully.

## ⚠️ Gotchas and notes

- **Scope Creep**: Keep focused on the minimum viable scope. Do not build speculative features.
- **Secret Management**: Ensure environment variables are used. Never push hardcoded API keys or credentials.
- **Library Triage**: Evaluate dependencies based on open issues, bundle size, and maintenance frequency.
