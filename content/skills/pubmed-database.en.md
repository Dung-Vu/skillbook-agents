---
title: PubMed Literature Search
description: >-
  Query MEDLINE biomedical abstracts, linking literature to biological entities
  such as genes, proteins, and chemical compounds.
oneLiner: Search biomedical literature from PubMed.
seoTitle: PubMed Literature Search — Skillbook Agents
seoDescription: >-
  Guide for Agents to search and analyze biomedical literature from PubMed using
  NCBI E-utilities.
---


## 📖 Why Do We Need This Skill?

PubMed contains >37 million citations for biomedical literature — an essential reference source for medical and biological research. Agents lacking this skill often fabricate references or provide incorrect citations.

- **Grounded search**: Retrieve actual papers with real PMIDs — eliminating hallucination
- **10 functions**: Search, fetch abstracts, full text, cross-database linking, spelling check, citation matching, discovery, and caching
- **Cross-database**: Link papers directly to Gene, Protein, PubChem, and ClinVar databases
- **Bulk workflows**: Utilize the History Server pipeline for batch processing of >10 PMIDs

## ⚙️ How It Works

```
Search query → PubMed E-utilities → PMIDs → 
Fetch abstracts / Full text → Cross-database links
```

1. **search_pubmed**: Query PMIDs matching structured or free-text inputs
2. **fetch_article_abstracts**: Retrieve titles, authors, and abstracts for a batch of PMIDs
3. **get_full_text_pmc**: Fetch open-access full texts from PubMed Central
4. **find_linked_biological_data**: Map literature annotations to biological databases

## 🚀 How to use

### Universal

```markdown
# PubMed Rules
- Always use the PubMed MCP tool when biomedical literature is needed. DO NOT fabricate PMIDs.
- Filter with jq before reading into the context — avoid context overflow.
- Use MeSH terms for precise searches: "Alzheimer Disease"[MeSH] instead of free text.
- Bulk: >10 PMIDs → use History Server (cache_results_history).
- Always list URLs of the papers used in the output.
```

### Cursor (.cursorrules)

```markdown
# PubMed Search
- DO NOT fabricate PMIDs or DOIs. All citations must be from real PubMed articles.
- Format: [Title](https://pubmed.ncbi.nlm.nih.gov/PMID) (PMID: xxx)
- Limit search queries to 3-5 if not found — do not iterate indefinitely.
```

## 💡 Real-World Examples / Scenarios

### 🧑‍💻 Developer:
> "I want to search PubMed for the latest clinical trials investigating the effects of Metformin on longevity."

### 🤖 AI Agent (Equipped with this Skill):
> "I will perform the literature search on the NCBI PubMed database:"
>
> 1. **Construct MeSH Query**: I formulated an advanced query using medical subject headings: `Metformin[Mesh] AND Longevity[Mesh] OR Aging[Title/Abstract] AND Clinical Trial[Publication Type]`.
> 2. **Fetch Publications**: I retrieved the 5 most recent high-quality trials, extracting title, authors, publication date, abstract, and PMID/PMCID identifiers.
> 3. **Summarize Clinical Evidence**: I summarized the trials (including clinical protocols like the TAME trial) to highlight their core findings.
>
> *A structured bibliography with summaries is prepared, assisting your literature review compilation.*

## ⚠️ Gotchas and notes

- **API Rate Limits**: The API is limited to 3 req/sec (10 req/sec with an API key). The script wrapper manages these boundaries automatically.
- **Full Text Availability**: Full text is only retrievable for open-access papers in PubMed Central (PMC); other entries only return abstracts.
- **MeSH Search Precision**: Always use Medical Subject Headings (MeSH) for precise query scoping — e.g., "Neoplasms"[MeSH] encompasses all cancer sub-types.
- **Bulk Efficiency**: For querying >10 papers, use the History Server pipeline instead of fetching records one-by-one.
