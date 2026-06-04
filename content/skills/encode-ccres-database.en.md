---
title: ENCODE Regulatory Elements
description: >-
  Search cis-regulatory elements (cCREs) and epigenomic experimental datasets
  across human cell lines.
oneLiner: Query candidate cis-Regulatory Elements (cCREs) from ENCODE.
seoTitle: ENCODE Regulatory Elements — Skillbook Agents
seoDescription: Guide for Agents to query ENCODE cCRE annotations and ChIP-seq experiments.
---


## 📖 Why Do We Need This Skill?

ENCODE (Encyclopedia of DNA Elements) annotates millions of regulatory elements in the human genome — mapping promoters, enhancers, insulators, and silencers across diverse cell types.

- **cCREs (candidate cis-Regulatory Elements)**: ~1.1 million classified regulatory elements (PLS, pELS, dELS, CTCF-only, DNase-H3K4me3)
- **Cell type-specific**: Annotation mapped to specific cell types and tissues
- **Experimental data**: Access ChIP-seq peaks, DNASE-seq, and histone mark files from thousands of assays

## ⚙️ How It Works

```
Genomic region / Gene → SCREEN GraphQL API → 
Return cCRE annotations + experimental data
```

1. **cCRE query**: Search regulatory elements in a genomic region or near a gene
2. **Classification**: Identify PLS (promoter-like), pELS (proximal enhancer-like), dELS (distal enhancer-like), or CTCF-only elements
3. **Experiment data**: Query the ENCODE Portal REST API for raw ChIP-seq peaks, files, and metadata

## 🚀 How to use

### Universal

```markdown
# ENCODE Query Rules
- Use the SCREEN GraphQL API for cCRE regulatory annotation queries.
- Use the ENCODE Portal REST API for raw experimental data (ChIP-seq peaks, files).
- Report cCRE classification type and cell type specificity.
- Combine with UCSC conservation to strengthen regulatory evidence.
```

### Cursor (.cursorrules)

```markdown
# ENCODE
- cCRE types: PLS (promoter-like), pELS (proximal enhancer), dELS (distal enhancer), CTCF-only.
- High DNase + H3K4me3 = promoter-like. High DNase + H3K27ac = enhancer-like.
- Cell type matters: an enhancer active in the liver might be inactive in the brain.
```

## 💡 Real-World Examples / Scenarios

### 🧑‍💻 Developer:
> "I want to find cis-regulatory elements (cCREs) active near the SOX2 gene in human embryonic stem cells (hESC)."

### 🤖 AI Agent (Equipped with this Skill):
> "I will query the ENCODE database via the SCREEN GraphQL API:"
>
> 1. **Define Region**: I resolved the SOX2 genomic coordinates on GRCh38 and expanded the search window by 50kb upstream and downstream.
> 2. **Query cCREs**: I filtered cis-regulatory elements active in embryonic stem cells (H1-hESC).
> 3. **Analyze Epigenetic Signal**: I extracted ChIP-seq signal strengths for H3K4me3, H3K27ac, and DNase hypersensitivity.
> 4. **Export cCRE List**: I compiled active elements along with their ENCODE accessions (EH38E...) to help you design CRISPR experiments.
>
> *The list of candidate promoters and enhancers with activity levels has been compiled successfully.*

## ⚠️ Gotchas and notes

- **cCRE = Candidate**: These are computational predictions based on epigenomic data, not experimentally validated elements.
- **Cell Type Specificity**: An element active in cell type A might be completely inactive in cell type B.
- **API distinction**: SCREEN (GraphQL) is for cCRE annotations, ENCODE Portal (REST) is for raw experiment files.
- **Data volume**: ENCODE Portal contains petabytes of data. Filter queries carefully to avoid payload overflow.
