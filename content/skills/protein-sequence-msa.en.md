---
title: "Protein Multiple Sequence Alignment"
description: "Align multiple protein sequences to evaluate genetic similarity, conserved domains, and critical residues."
oneLiner: "Perform multiple sequence alignment (MSA) using Clustal Omega."
seoTitle: "Protein Multiple Sequence Alignment — Skillbook Agents"
seoDescription: "Guide for Agents to perform MSA using Clustal Omega to analyze protein conservation and key residues."
---


## 📖 Why Do We Need This Skill?

Multiple Sequence Alignment (MSA) is a foundational step in molecular biology — comparing multiple sequences simultaneously to identify conserved regions and residues critical for protein structure and function.

- **Conservation analysis**: Highly conserved residues across evolutionary distances indicate essential functional/structural roles
- **Domain boundaries**: Identify conserved blocks representing shared domains versus variable gap-heavy insertion/deletion loops
- **Mutation severity**: Mutations at highly conserved positions are more likely to disrupt function and cause disease

Default Agents lack the tools to perform sequence alignment. This skill connects to the EBI Clustal Omega API.

## ⚙️ How It Works

```
Multiple sequences (FASTA) → Submit to Clustal Omega API → 
Wait for result → Return aligned sequences + conservation scores
```

1. **Input**: Between 2 and 4000 protein sequences in FASTA format (max file size 4 MB)
2. **Alignment**: Clustal Omega aligns sequences using an HMM profile-profile comparison method
3. **Output**: Aligned sequence sequences showing gaps and conservation symbols (`*` identical, `:` highly conserved, `.` semi-conserved)

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

- **Proteins Only**: This service is configured only for protein alignments, not DNA or RNA sequences.
- **Limits**: The API supports up to 4000 sequences and 4 MB input files.
- **Requires ≥2 sequences**: A single sequence cannot be aligned. Run a sequence similarity search first to find homologs.
- **Async Execution**: Clustal Omega runs as an asynchronous job on EBI servers; alignment can take from seconds to minutes depending on input sizes.
