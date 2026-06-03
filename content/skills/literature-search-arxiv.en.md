---
title: "arXiv Paper Search"
description: "Search arXiv repository for mathematics, physics, computer science, and AI papers, extract abstracts, and download PDFs."
oneLiner: "Search and download preprint scientific papers from arXiv."
seoTitle: "arXiv Paper Search — Skillbook Agents"
seoDescription: "Guide for Agents to search scientific papers and preprints on arXiv."
---


## 📖 Why Do We Need This Skill?

arXiv is the largest preprint server for Physics, Math, CS, Quantitative Biology, and other STEM fields — where researchers share findings before peer-review. Especially critical for AI/ML publications.

- **Preprint access**: Read the latest research weeks or months ahead of formal journal publication
- **Full-text PDF**: Download full-text PDFs or view HTML papers for free
- **arXiv ID resolution**: Fetch specific papers using their IDs (e.g., 2301.12345)
- **Category searches**: Filter by cs.AI, cs.LG, q-bio, stat, etc.

## ⚙️ How It Works

```
Query / arXiv ID → arXiv API → 
Return metadata, abstracts, download PDF/HTML
```

## 🚀 How to use

### Universal

```markdown
# arXiv Search Rules
- Use for: CS/AI/ML papers, physics, math, quantitative biology.
- arXiv = preprints (not peer-reviewed). Always note this limitation.
- Can download full-text PDF/HTML for detailed analysis.
```

## 💡 Real-World Examples / Scenarios

### 🧑‍💻 Developer:
> "Find the latest papers on reasoning LLM optimization techniques on arXiv."

### 🤖 AI Agent (Equipped with this Skill):
> "I will search for scientific publications on arXiv:"
>
> 1. **Formulate Search Syntax**: I set up a query using boolean operators: `ti:"Reasoning LLM" OR abs:"Reasoning models" AND "optimization"`.
> 2. **Fetch and Filter**: I extracted the 5 most recent papers, retrieving title, authors, date, abstract, and PDF download links.
> 3. **Provide Summaries**: I read the abstracts to categorize techniques (e.g., Test-Time Compute, Reinforcement Learning) to give you an overview.
>
> *The refined academic bibliography and download links are ready, keeping you updated on research trends.*

## ⚠️ Gotchas and notes

- **Not Peer-Reviewed**: arXiv preprints are not peer-reviewed — quality and scientific rigor vary widely.
- **arXiv vs PubMed**: arXiv focuses on STEM preprints; PubMed covers peer-reviewed biomedical papers.
- **Version tracking**: Authors frequently update preprints (v1, v2, etc.) — make sure to check for the latest version.
