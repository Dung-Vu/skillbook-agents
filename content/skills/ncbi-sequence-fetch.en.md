---
title: NCBI Sequence Retrieval
description: >-
  Download gene and protein sequences using Accession IDs or search by organism
  from NCBI databases.
oneLiner: Retrieve nucleotide and protein sequences from NCBI.
seoTitle: NCBI Sequence Retrieval — Skillbook Agents
seoDescription: >-
  Guide for Agents to retrieve protein and nucleotide sequences from NCBI using
  E-utilities.
---


## 📖 Why Do We Need This Skill?

NCBI GenBank/RefSeq hosts billions of sequences — the largest reference repository for nucleotide and protein sequences. This skill provides multiple retrieval paths:

- **Accession lookup**: Retrieve coordinates using NM_000546, NP_000537, NC_000017, etc.
- **Gene + Organism search**: e.g., "TP53 homo sapiens" to fetch the canonical sequence
- **CDS translation**: Map nucleotide accessions and translate coding sequences (CDS) to proteins
- **Patent proteins**: Extract protein sequences directly from patent numbers
- **PubMed-linked**: Find sequences associated with a specific PubMed article ID

## ⚙️ How It Works

```
Accession / Gene name / PubMed ID → NCBI E-utilities → 
Return sequences in FASTA format
```

1. **Direct lookup**: Input accession ID to retrieve the raw sequence
2. **Search**: Input gene name + organism to locate the best matching sequence
3. **CDS translation**: Input nucleotide accession to extract the CDS and translate it to protein
4. **Cross-reference**: Input PubMed ID or patent number to fetch linked sequences

## 🚀 How to use

### Universal

```markdown
# NCBI Sequence Fetch Rules
- Supports multiple lookup modes: accession, gene+organism, locus tag, PubMed link, patent.
- Output is always in FASTA format.
- Use RefSeq accessions (NM_, NP_) when possible — higher quality than GenBank.
- Combine with UniProt or Ensembl for cross-validation.
```

## 💡 Real-World Examples / Scenarios

### 🧑‍💻 Developer:
> "Download the FASTA nucleotide sequence of the human insulin gene from NCBI GenBank."

### 🤖 AI Agent (Equipped with this Skill):
> "I will connect to the NCBI E-utilities API to retrieve the exact gene sequence:"
>
> 1. **Identify Accession ID**: I mapped the human insulin gene (INS) to its standard GenBank accession **NM_000207**.
> 2. **Retrieve Nucleotide Sequence**: I executed the NCBI efetch utility to download the sequence in standard FASTA format.
> 3. **Parse Coding Regions**: I checked the sequence length and parsed the CDS coordinates to point out the exact start and stop codons for expression vector design.
>
> *The FASTA sequence and CDS analysis report are ready for copy-paste.*

## ⚠️ Gotchas and notes

- **RefSeq vs GenBank**: RefSeq accessions (e.g., NM_, NP_) are curated, whereas GenBank may contain raw drafts or partial sequences.
- **Isoform variations**: Genes can have multiple transcript variants — specify the desired isoform if critical.
- **API Rate Limits**: NCBI E-utilities restricts queries to 3 req/sec (10 req/sec with an API key). The script wrapper automatically handles rate-limiting.
- **Precursor vs Mature**: Many fetched protein sequences represent the precursor form containing signal peptides or propeptides that must be cleaved.
