---
title: "UCSC Conservation & TFBS"
description: "Retrieve genomic evolutionary conservation scores (phyloP, phastCons) and experimental transcription factor binding sites (TFBS) from the UCSC Genome Browser."
oneLiner: "Query evolutionary conservation and TF binding sites."
seoTitle: "UCSC Conservation & TFBS — Skillbook Agents"
seoDescription: "Guide for Agents to retrieve conservation scores and TFBS data from the UCSC Genome Browser."
---


## 📖 Why Do We Need This Skill?

Genomic regions conserved across evolution (evolutionary conservation) typically harbor important biological functions. The UCSC Genome Browser provides two major datasets:

- **Conservation scores**: phyloP (base-by-base conservation metrics) and phastCons (identifying contiguous conserved elements) to evaluate if variants sit in conserved loci
- **TFBS (Transcription Factor Binding Sites)**: Empirical ChIP-seq peaks from ENCODE, JASPAR, or ReMap to identify TFs binding at variant coordinates

Variants falling in highly conserved regions that also disrupt transcription factor binding represent strong candidates for regulatory disease phenotypes.

## ⚙️ How It Works

```
Genomic region (chr:start-end) → UCSC API → 
Return phyloP/phastCons scores + TFBS overlaps
```

1. **Conservation lookup**: Retrieve phyloP scores (positive indicating conservation, negative indicating rapid evolution) and phastCons probabilities (0 to 1)
2. **TFBS overlap**: Query ChIP-seq peak coordinates (ENCODE, ReMap) overlapping queried variants
3. **Interpretation**: Synthesize conservation and binding data to score regulatory functional impacts

## 🚀 How to use

### Universal

```markdown
# UCSC Conservation & TFBS Rules
- phyloP > 2.0 = significantly conserved. phyloP > 4.0 = ultra-conserved.
- phastCons > 0.9 = part of conserved element.
- Combine conservation + TFBS: conserved + TF binding = regulatory element.
- Report ENCODE/JASPAR/ReMap project source for each TFBS hit.
```

### Cursor (.cursorrules)

```markdown
# UCSC Data
- Use conservation scores when evaluating non-coding variants.
- Negative phyloP = accelerated evolution (may indicate adaptation, not necessarily unimportant).
- TFBS data helps determine if a variant disrupts a regulatory element.
```

## 💡 Real-World Examples / Scenarios

### 🧑‍💻 Developer:
> "Evaluate if the TP53 variant chr17:7577120 sits in a conserved region and overlaps any transcription factor binding sites."

### 🤖 AI Agent (Equipped with this Skill):
> "I will query UCSC Genome Browser evolutionary and regulatory tracks:"
>
> 1. **Fetch Conservation Scores**: I retrieved `phyloP` and `phastCons` scores (aligned across 100 vertebrates) at the variant. The phyloP score is 5.2, indicating high evolutionary conservation.
> 2. **Check TFBS Overlaps**: I queried regulatory tracks from ENCODE and ReMap to check for overlapping ChIP-seq peaks.
> 3. **Identify Disrupted Bindings**: I identified that the variant overlaps a p300 binding motif, suggesting the variant could impair downstream transcriptional activation.
>
> *The UCSC evolutionary and regulatory report is ready, supplying evidence for the variant's potential pathogenicity.*

## ⚠️ Gotchas and notes

- **phyloP Interpretation**: Positive scores represent conservation (purifying selection); negative scores indicate rapid evolution (positive selection). Near zero indicates neutral evolution.
- **Alignment Quality**: phyloP scores depend on vertebrate alignment quality at the target genomic coordinates.
- **Binding Dynamics**: ChIP-seq peaks indicate a TF was bound in a specific cell line, but does not guarantee the TF is active in your target tissue.
