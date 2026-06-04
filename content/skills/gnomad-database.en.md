---
title: gnomAD Population Genetics
description: >-
  Query the Genome Aggregation Database (gnomAD) to fetch variant frequencies
  and gene constraint metrics (pLI, LOEUF).
oneLiner: Query allele frequencies and gene constraints from gnomAD.
seoTitle: gnomAD Population Genetics — Skillbook Agents
seoDescription: >-
  Guide for Agents to check variant frequencies and loss-of-function intolerance
  in gnomAD.
---


## 📖 Why Do We Need This Skill?

gnomAD is the largest population reference database — compiling genome and exome sequencing data from over 140,000 healthy individuals. When evaluating a clinical variant, the second major question is: **"How rare is this variant in the general population?"**

- **Allele frequency**: Fetch global and population-specific allele frequencies (African, East Asian, Latino, etc.). Common variants are rarely pathogenic for rare mendelian disease.
- **Gene constraints**: Retrieve pLI (probability of Loss-of-Function Intolerance, >0.9 = constrained) and LOEUF (Loss-of-function Observed/Expected Upper Bound Fraction, lower = more constrained) to determine if a gene is sensitive to haploinsufficiency.
- **Regional coverage**: Check sequencing depth coverage at a specific locus.

## ⚙️ How It Works

```
Variant/Gene → gnomAD GraphQL API → 
Return allele frequencies, gene constraint, structural variants
```

1. **Input**: Variant ID in `chrom-pos-ref-alt` format (e.g., `17-7673803-G-A`) or Gene symbol
2. **Query**: gnomAD GraphQL API
3. **Output**: Allele frequencies, genotype counts, clinical classifications, and gene constraint metrics

## 🚀 How to use

### Universal

```markdown
# gnomAD Query Rules
- Use gnomAD to determine whether a variant is rare or common (cutoff: MAF < 0.01 = rare).
- Gene constraint: pLI > 0.9 or LOEUF < 0.35 = highly constrained (LoF intolerant).
- Report allele frequency for BOTH global and population-specific cohorts.
- DO NOT use for: individual patient genomes, somatic cancer mutations (use COSMIC), or raw sequencing reads.
```

### Cursor (.cursorrules)

```markdown
# gnomAD
- gnomAD = population reference, not a clinical interpretation tool.
- Absent from gnomAD ≠ pathogenic. It just has not been observed in ~800K genomes yet.
- Combine gnomAD frequency + ClinVar classification for a comprehensive variant assessment.
```

## 💡 Real-World Examples / Scenarios

### 🧑‍💻 Developer:
> "Is the variant 17-7673803-G-A common in the population? Check its allele frequency and the constraint score of its gene in gnomAD."

### 🤖 AI Agent (Equipped with this Skill):
> "I will query the gnomAD GraphQL API to retrieve variant frequencies and gene constraint parameters:"
>
> 1. **Fetch Variant Data**: I queried the gnomAD API for the variant ID `17-7673803-G-A`.
> 2. **Analyze Allele Frequency**: I extracted a global allele frequency of **0.000034** (3.4e-5) with 5 heterozygotes and 0 homozygotes, confirming it is an extremely rare variant.
> 3. **Retrieve Gene Constraint**: I identified the variant is in the **TP53** gene and fetched its constraint scores: pLI = **1.00** and LOEUF = **0.28**, indicating the gene is highly intolerant to loss-of-function variants.
> 4. **Synthesis**: I synthesize these results to suggest that the variant's extreme rarity combined with the gene's high constraint matches the characteristics of a pathogenic variant.
>
> *The population genetics report is prepared to support your variant prioritization pipeline.*

## ⚠️ Gotchas and notes

- **Not for Cancer**: gnomAD excludes individuals with severe pediatric disease and cancer. Do not use for somatic tumor mutation frequencies (use COSMIC instead).
- **Genome Assembly**: gnomAD v2 uses GRCh37/hg19, while gnomAD v3/v4 uses GRCh38. Ensure coordinates match the version being queried.
- **Zero Frequencies**: A variant absent from gnomAD is not automatically pathogenic, but it is a strong candidate for rare genetic diseases.
