---
title: AlphaGenome Variant Analysis
description: >-
  Analyze genetic variant effects on gene expression (RNA-seq), chromatin
  accessibility (DNASE), and regulatory elements.
oneLiner: Analyze genetic variant effects on gene expression using AlphaGenome.
seoTitle: AlphaGenome Variant Analysis — Skillbook Agents
seoDescription: >-
  Guide for Agents to predict genetic variant effects on gene expression and
  chromatin using AlphaGenome.
---


## 📖 Why Do We Need This Skill?

~98% of the human genome is non-coding (non-coding regions), but it contains critical regulatory elements like promoters, enhancers, and silencers. Non-coding variants are highly challenging to evaluate using traditional methods.

- **Variant effect prediction**: AlphaGenome predicts RNA-seq, DNASE, and ChIP-seq changes upon nucleotide substitution
- **Multi-track analysis**: Simultaneously evaluates effects on gene expression, chromatin accessibility, histone marks, and transcription factor binding
- **Tissue-specific**: Performs analysis tailored to specific tissues/cell types (UBERON/CL ontology)

## ⚙️ How It Works

```
Variant (chr:pos:ref>alt) → AlphaGenome API → 
Predict changes in RNA-seq, DNASE, ChIP, CTCF → Report impact scores
```

1. **Input**: Variant in `chr:pos:ref>alt` format (e.g., `chr17:7579472:G>A`)
2. **Prediction**: AlphaGenome model predicts signal changes for multiple assay tracks
3. **Output**: Effect sizes for RNA-seq, DNASE accessibility, histone modifications, and TF binding

## 🚀 How to use

### Universal

```markdown
# AlphaGenome Analysis Rules
- The variant must be in chr:pos:ref>alt format on GRCh38.
- Resolve biological terms (tissue/cell type) to UBERON/CL ontology before querying.
- Report: gene expression change, chromatin effect, TF binding disruption.
- Clearly warn: this is a prediction and requires experimental validation.
```

### Cursor (.cursorrules)

```markdown
# AlphaGenome
- Use when the user asks about non-coding variant effects, pathogenicity, or regulatory effects.
- Resolve tissue names to ontology IDs (UBERON/CL) before querying.
- Combine with ClinVar and gnomAD to cross-reference clinical significance.
```

## 💡 Real-World Examples / Scenarios

### 🧑‍💻 Developer:
> "I need to predict the impact of the non-coding variant chr17:7579472:G>A on TP53 expression in breast tissue."

### 🤖 AI Agent (Equipped with this Skill):
> "I will perform this analysis using the AlphaGenome deep learning model through automated steps:"
>
> 1. **Validate Variant Format**: I confirm your variant coordinates are GRCh38 compliant and mapped the breast tissue name to the standard ontology ID **UBERON:0001911**.
> 2. **Run Epigenomic Prediction**: I sent a query to the AlphaGenome API to run predictions across multiple biological signal tracks simultaneously.
> 3. **Summarize RNA-seq & Epigenomics Results**:
>    * TP53 expression: Predicted to decrease significantly by **2.3-fold** in breast tissue (Effect size: -0.85).
>    * Chromatin accessibility (DNASE): Significantly decreased at the promoter region (-0.62).
>    * Transcription Factor binding: The binding site for SP1 is completely disrupted (score: -0.91), directly affecting p53 autoregulation.
> 4. **Scientific Advisory**: I provide a report with the recommendation that since this is a deep learning model prediction, you should validate it experimentally using reporter assays or CRISPR editing.
>
> *The multi-dimensional genetic impact report is fully prepared to help you understand the regulatory mechanisms of the variant.*

## ⚠️ Gotchas and notes

- **GRCh38 Only**: Coordinates must be on human genome assembly GRCh38. If hg19 is provided, run liftover first.
- **Prediction, not diagnosis**: Do not use for clinical diagnosis. Always warn the user.
- **Tissue Ontology**: Resolve tissue/cell type names to UBERON or CL IDs — do not use free text.
- **Non-coding Focus**: Most effective for variants in promoters, enhancers, and UTRs. For coding variants, use Ensembl VEP instead.
