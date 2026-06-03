---
title: "UniProt Protein Database"
description: "Access the global UniProtKB database to query protein descriptions, point mutations, and literature references."
oneLiner: "Query protein annotations and sequences from UniProt."
seoTitle: "UniProt Protein Database — Skillbook Agents"
seoDescription: "Guide for Agents to retrieve protein metadata, function annotations, and sequences from UniProtKB."
---


## 📖 Why Do We Need This Skill?

UniProt is the **protein encyclopedia** — compiling functions, structural properties, taxonomy, and references for hundreds of millions of sequences. It is the starting point for almost any protein analysis.

- **Functional annotation**: Access information on catalytic activities, biological processes, and subcellular compartments
- **ID mapping**: Translate IDs between UniProt, Ensembl, PDB, RefSeq, and Gene Symbols
- **Sequence retrieval**: Download canonical and isoform protein sequences
- **Swiss-Prot vs TrEMBL**: Distinguish between reviewed (curated) and unreviewed (automated) annotations

## ⚙️ How It Works

```
Protein name / Gene / ID → UniProt REST API → 
Return functional annotations, sequences, cross-references, publications
```

1. **Search**: Run free-text or accession searches (e.g., P00520, KRAS_HUMAN)
2. **Annotations**: Extract functional summaries, catalytic features, disease associations, and pathways
3. **Cross-references**: Locate links to PDB, Ensembl, InterPro, STRING, and Reactome records

## 🚀 How to use

### Universal

```markdown
# UniProt Query Rules
- UniProt is the starting point for protein information. Always check UniProt first.
- Prioritize Swiss-Prot entries (reviewed, curated) over TrEMBL (automated).
- Use ID mapping services to convert between database identifiers.
- DO NOT use for: sequence alignment (use MSA skill), protein folding, or similarity search.
```

### Cursor (.cursorrules)

```markdown
# UniProt
- Swiss-Prot = reviewed by human curators. TrEMBL = automated annotation.
- UniProt ID format: P00520 (accession) or ABL1_HUMAN (entry name).
- Function, GO terms, disease associations, and literature — all in the UniProt entry.
```

## 💡 Real-World Examples / Scenarios

### 🧑‍💻 Developer:
> "Get the functional annotations, active sites, and post-translational modifications (PTMs) for the human insulin protein from UniProt."

### 🤖 AI Agent (Equipped with this Skill):
> "I will query UniProtKB to extract the protein profile of human insulin:"
>
> 1. **Identify Accession ID**: I mapped human insulin to standard Swiss-Prot accession **P01308**.
> 2. **Extract Functions**: I retrieved the functional summary detailing insulin's role in blood glucose regulation.
> 3. **Fetch Feature Annotations**:
>    * **Active Sites**: Located residue positions involved in receptor binding.
>    * **PTMs**: Mapped the 3 disulfide bonds critical for functional protein folding.
>    * **Isoforms**: Listed alternative splicing translations.
>
> *The detailed insulin profile is prepared, supporting structural and biochemical studies.*

## ⚠️ Gotchas and notes

- **Swiss-Prot Preference**: When multiple entries match, prioritize reviewed Swiss-Prot records over unreviewed TrEMBL records.
- **Isoform sequences**: UniProt maps annotation to a single canonical sequence; alternative isoforms can vary significantly.
- **Not for Alignments**: Use the protein-sequence-msa or similarity search tools for sequence alignments.
- **ID Mapping Latency**: Large ID mapping requests can experience rate limits and latency.
