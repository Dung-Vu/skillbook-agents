---
title: JASPAR TF Binding Profiles
description: >-
  Download Position Frequency/Weight Matrices (PFM/PWM) of Transcription Factors
  in multiple formats (MEME, JASPAR).
oneLiner: Retrieve transcription factor binding profiles from JASPAR.
seoTitle: JASPAR TF Binding Profiles — Skillbook Agents
seoDescription: >-
  Guide for Agents to query TF binding profiles, PFMs, and PWMs from the JASPAR
  database.
---


## 📖 Why Do We Need This Skill?

JASPAR is the standard database for Transcription Factor (TF) binding profiles — describing exactly which DNA patterns each TF recognizes and binds to.

- **PFM/PWM retrieval**: Fetch position frequency/weight matrices for specific TFs
- **Gene symbol → Matrix ID**: Map gene names (TP53, SP1) to standard JASPAR matrix IDs
- **Multiple formats**: Export motifs in MEME, TRANSFAC, PFM, JASPAR, or YAML formats
- **Motif analysis**: Use matrices to scan genomic sequences for putative TF binding sites

## ⚙️ How It Works

```
TF name / Matrix ID → JASPAR API → 
Return PFM, PWM, metadata (species, class, family)
```

## 🚀 How to use

### Universal

```markdown
# JASPAR Rules
- Use JASPAR when TF binding motif matrices (PFM/PWM) are needed.
- Resolve gene symbols to JASPAR Matrix IDs before querying.
- Output formats: MEME (for FIMO scanning), TRANSFAC (for legacy tools).
- Combine with UCSC TFBS data to cross-validate predictions.
```

## 💡 Real-World Examples / Scenarios

### 🧑‍💻 Developer:
> "I need the position weight matrix (PWM) of the NF-kB (REL) transcription factor from JASPAR to scan a promoter region."

### 🤖 AI Agent (Equipped with this Skill):
> "I will connect to the JASPAR database to download the transcription factor binding matrix for you:"
>
> 1. **Lookup Matrix ID**: I searched for the REL transcription factor on JASPAR and identified its standard matrix ID **MA0101.1**.
> 2. **Fetch PFM/PWM Matrix**: I requested the Position Frequency Matrix (PFM) of REL in MEME/JASPAR format from the API.
> 3. **Analyze Motif Logo**: I extracted the consensus sequence `GGGRNYYYCC` and provided its information content profile.
>
> *The standardized JASPAR binding matrix is ready, and can be integrated directly into motif-scanning tools like FIMO or MEME.*

## ⚠️ Gotchas and notes

- **Matrix Version**: JASPAR updates matrices regularly — always use the latest version (e.g., MA0079.5 instead of MA0079.1).
- **Species specificity**: The same transcription factor can recognize slightly different motifs in humans versus mice.
- **PWM ≠ In vivo binding**: A motif match in a sequence does not guarantee in vivo binding — integrate epigenomic evidence (ENCODE, UniBind) for verification.
