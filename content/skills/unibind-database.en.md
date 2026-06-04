---
title: UniBind TF Binding Sites
description: >-
  Download experimentally validated direct TF-DNA binding site coordinates from
  the UniBind database.
oneLiner: Retrieve experimentally validated transcription factor binding sites.
seoTitle: UniBind TF Binding Sites — Skillbook Agents
seoDescription: >-
  Guide for Agents to query experimentally validated TF binding sites from the
  UniBind database.
---


## 📖 Why Do We Need This Skill?

While JASPAR provides TF binding **motifs** (theoretical sequences), UniBind records **actual binding sites** validated by ChIP-seq experiments — showing the exact coordinates where TFs physically bind the genome in vivo.

- **Experimental validation**: Direct binding site coordinates from ChIP-seq, not computational predictions
- **Dataset cataloging**: List available datasets by species, cell lines, or TF names
- **BED/FASTA downloads**: Download binding coordinate files (BED) or sequences (FASTA) for local analyses
- **Complementary Analysis**: Combine JASPAR motifs with UniBind actual coordinates for robust TF studies

## ⚙️ How It Works

```
TF name / Cell line / Species → UniBind API → 
Return available datasets → Download BED/FASTA binding coordinates
```

1. **Catalog datasets**: Search ChIP-seq datasets available for a TF, cell line, or species
2. **Download coordinates**: Download BED files (coordinates) or FASTA files (sequences) for binding sites
3. **Overlap analysis**: Overlap coordinates with variants or regulatory intervals

## 🚀 How to use

### Universal

```markdown
# UniBind Rules
- UniBind = experimentally validated binding sites (ChIP-seq based).
- Use to list datasets, NOT query specific genomic intervals.
- Download BED/FASTA for local analysis.
- DO NOT use for: querying specific intervals/locations, motif models, or expression data.
```

## 💡 Real-World Examples / Scenarios

### 🧑‍💻 Developer:
> "Download genomic coordinates of CTCF binding sites validated in the MCF-7 breast cancer cell line from UniBind."

### 🤖 AI Agent (Equipped with this Skill):
> "I will query the UniBind database to fetch validated binding sites:"
>
> 1. **Filter Datasets**: I searched for CTCF ChIP-seq datasets in MCF-7 cells, selecting high-quality records.
> 2. **Download BED Coordinates**: I downloaded the BED file containing the exact coordinates (Chromosome, Start, End) of CTCF binding peaks.
> 3. **Report Summary**: I summarized the dataset, noting 45,210 binding peaks with average confidence scores.
>
> *The BED coordinate file and dataset summary are ready for integration into your genomic pipelines.*

## ⚠️ Gotchas and notes

- **Dataset-Level Queries**: The UniBind API returns whole datasets for download — it cannot query specific individual genomic intervals directly.
- **Cell Line specificity**: TF binding profiles vary across cell lines — ensure you choose the cell type relevant to your research question.
- **No Motif Matrices**: UniBind records binding coordinates; it does not host weight matrices (use JASPAR for motif models).
- **ChIP-seq quality**: While datasets pass UniBind quality control checks, review the original studies for validation.
