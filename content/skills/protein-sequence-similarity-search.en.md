---
title: Protein Sequence Similarity Search
description: >-
  Align query protein sequences against reference databases to identify homologs
  and infer biological functions.
oneLiner: Search for homologous protein sequences using MMseqs2 or BLAST.
seoTitle: Protein Sequence Similarity Search — Skillbook Agents
seoDescription: Guide for Agents to search for protein homologs using MMseqs2 and BLAST.
---


## 📖 Why Do We Need This Skill?

- **Functional Inference**: Characterize unknown proteins by locating characterized homologous sequences.
- **MMseqs2 (Default)**: Perform search 100-1000x faster than BLAST, ideal for initial screening.
- **BLAST (Fallback)**: Run a comprehensive database search, acting as a fallback when MMseqs2 hits are insufficient.
## ⚙️ How It Works

```
Protein sequence (FASTA) → MMseqs2/BLAST search → 
Return homologous proteins (E-value, identity%, coverage)
```

- **Input**: Accept a single protein sequence or FASTA format text.
- **Search Logic**: Search via MMseqs2, automatically falling back to BLAST if necessary.
- **Output**: Return homologs with E-values, percent identity, coverage, and database annotations.
## 🚀 How to use


### Universal

```markdown
# Sequence Similarity Search
- When the user provides a protein sequence → run MMseqs2 first.
- If MMseqs2 returns few results → fallback to BLAST.
- Report: top hits, E-value, identity %, functional annotations.
- DO NOT use when the user wants to find structural similarity → use Foldseek.
```

### Cursor (.cursorrules)

```markdown
# Protein Search
- MMseqs2 is the default search tool. Use BLAST when a comprehensive search is needed.
- E-value < 1e-5 = significant hit. Identity > 30% = likely same function.
- Always report the taxonomy of top hits to check evolutionary conservation.
```

## 💡 Real-World Examples / Scenarios


### 🧑‍💻 Developer:
> "I found an unknown protein sequence from a soil sample. Run BLAST to find homologous proteins."

### 🤖 AI Agent (Equipped with this Skill):
> "I will search for sequence homologs using BLAST/MMseqs2:"
>
> 1. **Validate Query Sequence**: I checked your input sequence to ensure it contains only valid amino acid characters.
> 2. **Run BLAST Search**: I submitted your sequence to NCBI BLAST to search the non-redundant (nr) database.
> 3. **Filter Matches**: I filtered matches based on E-value (approaching 0), percent identity, and bit score.
> 4. **Annotate Function**: I identified a hit with 98% identity to a bacterial cellulase, helping you infer the biological function of your soil protein.
>
> *The BLAST results and functional annotations are compiled, identifying the unknown protein in seconds.*

## ⚠️ Gotchas and notes


- **Proteins Only**: Do not submit DNA/RNA sequences. Translate coding DNA sequences to amino acids first.
- **Not for Structural Homology**: If sequence identity is low (<20%), use Foldseek structural searches instead of sequence searches.
- **E-Value Dependence**: E-values depend on database size — the same alignment might be highly significant in a small database but non-significant in a larger database.
