---
title: "Code Review"
description: "Perform thorough code reviews for quality, maintainability, and best practices. Analyzes pull requests and provides detailed refactoring suggestions."
oneLiner: "Review code quality and suggest improvements based on industry standards."
seoTitle: "Code Review - Minimax Skill for AI Agents"
seoDescription: "Structured code review framework: checking for security vulnerabilities, logic errors, style consistency, and performance bottlenecks."
---

## 📖 Why Do We Need This Skill?

Manual code reviews often overlook subtle memory leaks, security holes, or style inconsistencies. This skill provides the agent with a rigorous, structured checklist to review pull requests, ensuring code quality and safety before merging.

## ⚙️ How It Works

The code review workflow runs as follows:

```
[Code Diff Input] -> [Syntax & Logic Check] -> [Security & Performance Audit] -> [Style Conformity] -> [Detailed Review Feedback]
```

1. **Syntax & Logic**: Scans for obvious programming mistakes, anti-patterns, and redundant code.
2. **Audit**: Evaluates algorithmic complexity, potential race conditions, and security liabilities.
3. **Feedback**: Generates categorized, actionable comments alongside clean refactoring examples.

## 🚀 Agent Guidelines (Prompt Guidelines)

1. Categorize code review feedback by severity: `Blocker` (must fix before merge), `Issue` (bug/performance concern), and `Nit` (stylistic preference).
2. Explain *why* a block of code needs change, referencing standards, and provide clear code snippets for the fix.
3. Verify that new code is adequately covered by unit tests.

## ⚠️ Gotchas and notes

- **Nitpicking**: Focus on correctness, maintainability, and performance rather than enforcing subjective style preferences not codified in the project's linter.
- **Review Fatigue**: Refrain from reviewing giant, multi-thousand-line PRs. Advise the developer to break them down into smaller, logical pull requests.
