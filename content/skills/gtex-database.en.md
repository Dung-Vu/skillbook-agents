---
title: "GTEx Gene Expression"
description: "Analyze quantitative gene expression and expression quantitative trait loci (eQTL) across 54 healthy human tissues."
oneLiner: "Retrieve RNA expression and eQTL data from the GTEx project."
seoTitle: "GTEx Gene Expression — Skillbook Agents"
seoDescription: "Guide for Agents to retrieve RNA-seq expression and eQTL data from GTEx across 54 tissues."
---


## 📖 Why Do We Need This Skill?

The GTEx (Genotype-Tissue Expression) Project provides quantitative gene expression data from ~17,000 samples across **54 non-diseased tissue sites** — the most critical reference resource to understand where genes are expressed and which variants affect expression.

- **Tissue-specific expression**: Gene X is highly expressed in the brain but lowly in the liver → functional relevance
- **eQTL data**: Identify which genetic variants directly affect gene expression levels (expression quantitative trait loci)
- **Normal reference**: Data derived from healthy tissues serves as a baseline for pathology comparison

## ⚙️ How It Works

```
Gene / Variant → GTEx API → 
Return expression levels (TPM) across tissues + eQTL associations
```

1. **Gene expression**: Fetch median TPM per tissue for the queried gene
2. **eQTL**: Retrieve variant-gene associations including effect size and p-value
3. **Tissue comparison**: Construct expression heatmaps across 54 tissues

## 🚀 How to use

### Universal

```markdown
# GTEx Query Rules
- Report expression in TPM (Transcripts Per Million) — the standard unit.
- Show top 5 highest expressing tissues + non-expressing tissues.
- eQTL: report effect size (NES), p-value, and tissue specificity.
- GTEx contains normal tissue only — no cancer or disease data.
```

### Cursor (.cursorrules)

```markdown
# GTEx
- GTEx = gold standard cho tissue-specific expression profiles.
- TPM > 10 = expressed, TPM > 100 = highly expressed, TPM < 1 = low/not expressed.
- eQTL significant: p-value < 5e-8 (genome-wide), effect size (NES) cho direction.
```

## 💡 Real-World Examples / Scenarios

### 🧑‍💻 Developer:
> "I want to know how the RNA expression of the ERBB2 (HER2) gene differs across human tissues, especially in breast tissue."

### 🤖 AI Agent (Equipped with this Skill):
> "I will query the GTEx (Genotype-Tissue Expression) database to fetch quantitative gene expression data for you:"
>
> 1. **Query Standard Gene ID**: I mapped ERBB2 to its canonical Ensembl Gene ID.
> 2. **Fetch Boxplot Data**: I requested quantitative RNA-seq data measured in TPM (Transcripts Per Million) across 54 healthy tissues from the GTEx API.
> 3. **Compare Expression Levels**: I analyzed the values and identified that ERBB2 is expressed at medium-high levels in healthy breast tissue (TPM ~15.4), but is extremely low in brain and skeletal muscle.
> 4. **Identify eQTLs**: I searched for genetic variants (eQTLs) regulating ERBB2 expression in breast tissue and reported the corresponding rsID codes.
>
> *The detailed GTEx tissue expression report is compiled, providing an overview of healthy gene distribution prior to pathological study.*

## ⚠️ Gotchas and notes

- **Normal Tissue Only**: GTEx does not contain diseased or cancer samples. Use TCGA for cancer expression datasets.
- **Bulk RNA-seq**: This is bulk sequencing data — it cannot resolve individual cell types within a tissue. Use single-cell databases for cell-type resolution.
- **Post-mortem Samples**: GTEx tissues are obtained post-mortem — expression patterns may differ slightly from in vivo states.
- **eQTL Context**: eQTL effects can be highly tissue-specific — a variant may affect expression in the liver but not in the brain.
