---
title: Europe PMC Literature
description: >-
  Search biomedical literature, download open-access full texts (PMCID), and
  retrieve citations.
oneLiner: Query biomedical literature on the Europe PMC system.
seoTitle: Europe PMC Literature — Skillbook Agents
seoDescription: >-
  Guide for Agents to search scientific literature and download full-text papers
  from Europe PMC.
---


## 📖 Why Do We Need This Skill?

Europe PMC expands upon PubMed by providing full-text access, preprints, patents, and NHS guidelines. It is particularly powerful for open-access full-text retrieval and citation network analysis.

- **Broader coverage**: Integrates PubMed + preprints + patents + agriculture/food sciences
- **Full-text XML**: Download complete full-text articles using PMCIDs (for open-access papers)
- **Citation network**: Fetch citing articles and bibliographies for a given paper
- **Text-mining ready**: Structured full-text is optimized for automated text mining

## ⚙️ How It Works

```
Query / PMCID / DOI → Europe PMC API → 
Return papers, full-text XML, citations, bibliography
```

## 🚀 How to use

### Universal

```markdown
# Europe PMC Rules
- Use when full-text XML is needed (Europe PMC has more open-access than PubMed alone).
- Citation analysis: get papers cited by or citing a specific paper.
- PMCID is required for full-text retrieval (not PMID).
```

## 💡 Real-World Examples / Scenarios

### 🧑‍💻 Developer:
> "I am looking for open-access articles discussing the mutation mechanisms of Omicron. Search Europe PMC and download the full text."

### 🤖 AI Agent (Equipped with this Skill):
> "I will query Europe PMC to search and extract open-access papers:"
>
> 1. **Perform Search**: I sent an advanced query for `Omicron mutation mechanism` and applied the Open Access filter (PMCID).
> 2. **Download Full Text**: I used the Europe PMC API to download the complete XML/text content using the identified PMCID.
> 3. **Extract Findings**: I analyzed key sections (Results, Discussion) and summarized the spike protein mutations for you.
>
> *The full-text paper and the summary of mutations are prepared, supporting your literature review.*

## ⚠️ Gotchas and notes

- **PMCID vs PMID**: Full-text downloading requires a PMCID (PMCxxxxxxx), not a PMID. Not all PMIDs have associated PMCIDs.
- **Open Access restriction**: Full text is only retrievable for open-access articles in the PMC repository.
- **Complementary to PubMed**: Use PubMed for literature searching and Europe PMC for full-text and citation network extraction.
