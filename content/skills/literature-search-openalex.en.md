---
title: "OpenAlex Scholarly Database"
description: "Search and aggregate bibliographic data for papers, authors, research institutions, and citation metrics."
oneLiner: "Query the global OpenAlex open scholarly knowledge graph."
seoTitle: "OpenAlex Scholarly Database — Skillbook Agents"
seoDescription: "Guide for Agents to query OpenAlex for papers, authors, bibliometrics, and open-access downloads."
---


## 📖 Why Do We Need This Skill?

OpenAlex is a massive open scholarly database containing >250 million works — a modern successor to Microsoft Academic Graph. It is ideal for bibliometric analysis and tracking author/institutional research.

- **Comprehensive**: Index papers, authors, institutions, topics, publishers, and funders
- **Bibliometrics**: Retrieve citation counts, h-index, impact factors, and trending research topics
- **DOI resolution**: Resolve DOIs into complete metadata records
- **Open-Access PDFs**: Direct links to download PDFs when openly available
- **Taxonomy**: Explore academic taxonomies and topic classifications

## ⚙️ How It Works

```
Query / DOI / Author → OpenAlex API → 
Return works, author profiles, citation data, topic classifications
```

## 🚀 How to use

### Universal

```markdown
# OpenAlex Rules
- Use for bibliometric analysis: citation counts, h-index, author profiles.
- DOI lookup for quick paper metadata.
- Open-access PDF download when available.
- Find author publications, institution research output.
```

## 💡 Real-World Examples / Scenarios

### 🧑‍💻 Developer:
> "Analyze the academic impact of Professor Shinya Yamanaka (inventor of iPSCs), including his h-index and top cited papers."

### 🤖 AI Agent (Equipped with this Skill):
> "I will query the OpenAlex open academic database to generate a bibliometric report for you:"
>
> 1. **Identify Author ID**: I searched for Shinya Yamanaka and mapped his unique OpenAlex Author ID.
> 2. **Extract Bibliometrics**: I downloaded his profile metrics including total papers, citation counts, **h-index**, and **i10-index**.
> 3. **Retrieve Top Works**: I listed his most highly cited publications (such as the landmark 2006 Cell paper on mouse iPSC generation) with annual citation trends.
>
> *The professional academic impact report is prepared, giving you a detailed view of his research history.*

## ⚠️ Gotchas and notes

- **OpenAlex vs PubMed**: OpenAlex spans all disciplines, whereas PubMed is strictly biomedical.
- **Author Disambiguation**: OpenAlex uses machine learning to cluster authors — common names may occasionally contain errors.
- **Data Freshness**: OpenAlex updates weekly; extremely recent papers might take a few days to appear.
- **API Polite Pool**: Include a `mailto:` parameter in queries to access the polite pool for faster rate limits.
