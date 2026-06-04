---
title: Protein Multiple Sequence Alignment
description: >-
  Align multiple protein sequences to evaluate genetic similarity, conserved
  domains, and critical residues.
oneLiner: Perform multiple sequence alignment (MSA) using Clustal Omega.
seoTitle: Protein Multiple Sequence Alignment — Skillbook Agents
seoDescription: >-
  Guide for Agents to perform MSA using Clustal Omega to analyze protein
  conservation and key residues.
---


## 📖 Why Do We Need This Skill?

- **Conservation & Mutation Analysis**: Identify evolutionarily conserved amino acid residues to predict mutation impacts.
- **Domain Identification**: Locate boundaries of shared domains and species-specific insertion/deletion events.
- **EBI API Integration**: Run multiple sequence alignments (MSA) via EBI Clustal Omega without local dependencies.
## ⚙️ How It Works

```
Multiple sequences (FASTA) → Submit to Clustal Omega API → 
Wait for result → Return aligned sequences + conservation scores
```

- **Input**: Accept between 2 and 4,000 protein sequences in FASTA format (max 4 MB).
- **Alignment**: Execute HMM profile-profile alignment using Clustal Omega via the EBI API.
- **Output**: Return aligned sequences with gap characters and conservation marks (`*`, `:`, `.`).
## 🚀 How to use


### Universal

```markdown
# Protein MSA Rules
- Require at least 2 protein sequences in FASTA format.
- DO NOT use for DNA/RNA alignment — protein only.
- DO NOT use if only 1 sequence is available — use protein-sequence-similarity-search to find homologs first.
- Summarize conservation patterns: which residues are identical, which regions are variable.
```

### Cursor (.cursorrules)

```markdown
# MSA Analysis
- Run Clustal Omega via EBI API, do not install local tools.
- Highlight residues that are 100% conserved — these are candidate functional sites.
- Combine with InterPro to verify domain boundaries.
```

## 💡 Real-World Examples / Scenarios


### 🧑‍💻 Developer:
> "I have amino acid sequences for 5 hemoglobin homologs from different species. Run a multiple sequence alignment (MSA) to locate functional residues."

### 🤖 AI Agent (Equipped with this Skill):
> "I will perform the multiple sequence alignment using EBI's Clustal Omega service:"
>
> 1. **Prepare FASTA Input**: I validated and merged the 5 sequence records into a single multi-FASTA string.
> 2. **Run Clustal Omega**: I submitted the alignment job to the EBI server.
> 3. **Analyze Conservation**: I parsed the alignment outputs, locating conserved residues (such as the proximal histidine binding the heme iron) and calculated sequence identity.
> 4. **Format Alignment**: I displayed the alignment using conservation annotations (*, :, .) to highlight conserved functional motifs.
>
> *The alignment map is prepared, indicating conserved functional regions across hemoglobin homologs.*

## ⚠️ Gotchas and notes

- **Protein Only**: Only align amino acid sequences; do not submit DNA, RNA, or nucleotides.
- **Input Limits**: Minimum of 2 and maximum of 4,000 sequences, with a maximum file size of 4 MB.
- **Async Processing**: Jobs run on remote EBI servers and may take from seconds to minutes to complete.
