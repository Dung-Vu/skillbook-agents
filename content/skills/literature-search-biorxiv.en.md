---
title: "bioRxiv/medRxiv Preprints"
description: "Browse and filter unreviewed biomedical preprints by scientific category and time interval."
oneLiner: "Search life sciences preprints on bioRxiv and medRxiv."
seoTitle: "bioRxiv/medRxiv Preprints — Skillbook Agents"
seoDescription: "Guide for Agents to browse and download biology and medicine preprints from bioRxiv and medRxiv."
---


## 📖 Why Do We Need This Skill?

bioRxiv (biology) and medRxiv (medicine) are the leading preprint platforms for life sciences — where researchers share results before peer review, particularly vital for genomics, neuroscience, and epidemiology.

- **Life sciences focus**: Biology, genomics, neuroscience, biochemistry, immunology
- **Medical preprints**: Clinical research, public health, and epidemiology (medRxiv)
- **DOI-based fetch**: Retrieve paper metadata directly via DOI
- **Browse by date**: View recent papers by category and custom date ranges

## ⚙️ How It Works

```
DOI / Date range + Category → bioRxiv/medRxiv API → 
Return paper metadata, abstracts, download links
```

## 🚀 How to use

### Universal

```markdown
# bioRxiv/medRxiv Rules
- Date ranges must be NARROW (1-4 weeks) when browsing — API timeout occurs if too wide.
- Specify category when browsing: genomics, neuroscience, immunology, etc.
- Keyword filtering is local (client-side) — narrow the date range first.
- Use DOI for direct paper lookup.
```

## 💡 Real-World Examples / Scenarios

### 🧑‍💻 Developer:
> "Scan the latest preprints about large language models in biomedicine on bioRxiv from this week."

### 🤖 AI Agent (Equipped with this Skill):
> "I will browse the bioRxiv/medRxiv preprint servers for you:"
>
> 1. **Configure Time Range**: I set the query duration to the last 7 days and filtered by Bioinformatics and Genomics categories.
> 2. **Keywords filtering**: I filtered preprints containing `LLM`, `language model`, or `GPT` in their titles or abstracts.
> 3. **Compile Preprint List**: I presented the latest studies with DOIs, author lists, summaries, and direct links.
>
> *You stay updated on the latest scientific discoveries before they undergo peer review and publication.*

## ⚠️ Gotchas and notes

- **Not Peer-Reviewed**: Preprints are not peer-reviewed. Handle claims with caution.
- **Narrow Date Ranges**: The browse API will timeout if the date range is too wide (>4 weeks). Always specify a category.
- **medRxiv Disclaimer**: Medical preprints require extra care — do not use clinical preprints for medical decisions.
