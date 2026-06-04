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

- **Lookup & Search**: Rapidly retrieve nucleotide/protein sequences via Accession ID (NM_000546, NP_000537...) or gene + organism search.
- **CDS Translation**: Extract CDS from nucleotide accessions and translate them directly to proteins.
- **Cross-reference**: Find sequences linked to patent numbers or specific PubMed articles.
## ⚙️ How It Works

```
Accession / Gene name / PubMed ID → NCBI E-utilities → 
Return sequences in FASTA format
```

- **Lookup & Search**: Direct lookup via Accession ID or search by gene name + organism.
- **CDS Translation**: Extract CDS coordinates and translate to protein sequences.
- **Cross-reference**: Retrieve sequences linked to PubMed IDs or patent numbers.
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

- **RefSeq vs GenBank**: Prefer curated RefSeq accessions (NM_, NP_) over raw GenBank drafts/partial sequences.
- **API Rate Limits**: Limited to 3 req/s (10 req/s with API key); the script wrapper handles throttling automatically.
- **Precursor vs Mature**: Fetched sequences represent precursor proteins; signal peptides or propeptides must be cleaved for mature forms.
