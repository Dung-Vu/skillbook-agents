---
title: Ensembl Genome Browser
description: >-
  Query the Ensembl database to map gene/transcript IDs, download FASTA
  sequences, and run variant effect prediction (VEP).
oneLiner: 'Retrieve genomic sequences, gene structures, and predict variant consequences.'
seoTitle: Ensembl Genome Browser — Skillbook Agents
seoDescription: >-
  Guide for Agents to query gene, transcript, protein IDs and run variant
  consequences predictions using Ensembl VEP.
---


## 📖 Why Do We Need This Skill?

Ensembl is a primary genome browser and annotation database — providing gene structures, transcript variants, protein translations, and variant effect predictions. It acts as the central **ID translator** in bioinformatics.

- **ID translation**: ENSG → ENST → ENSP (gene ↔ transcript ↔ protein ID mapping)
- **Sequence retrieval**: Download DNA, cDNA, CDS, and protein sequences by ID
- **VEP (Variant Effect Predictor)**: Predict consequences of variants (missense, nonsense, splice site, etc.)
- **Gene structure**: Map exon boundaries, transcript isoforms, and UTRs

## ⚙️ How It Works

```
Gene/Transcript ID → Ensembl REST API → 
Return gene info, sequences, exon structures, variant consequences
```

1. **ID lookup**: Resolve ENSG/ENST/ENSP IDs into gene info, coordinates, and cross-references
2. **Sequence fetch**: Retrieve genomic, cDNA, CDS, or protein sequences
3. **VEP**: Submit variants to determine consequence types (missense, frameshift, splice_donor, etc.)

## 🚀 How to use

### Universal

```markdown
# Ensembl Query Rules
- Use Ensembl as the primary ID translator: gene name ↔ ENSG ↔ ENST ↔ ENSP ↔ UniProt.
- Use VEP for coding variants: report consequence type, amino acid change, and SIFT/PolyPhen scores.
- When genomic or protein sequences are needed → fetch from the Ensembl API.
- GRCh38 (human) coordinates by default.
```

### Cursor (.cursorrules)

```markdown
# Ensembl
- Ensembl = primary genome annotation source. Use for ID resolution, sequence retrieval, and VEP.
- VEP consequence hierarchy: transcript_ablation > frameshift > stop_gained > missense > synonymous.
- SIFT < 0.05 = damaging. PolyPhen > 0.85 = probably damaging.
```

## 💡 Real-World Examples / Scenarios

### 🧑‍💻 Developer:
> "Get the exon and intron structures of the BRCA2 gene from Ensembl so I can design Sanger sequencing primers."

### 🤖 AI Agent (Equipped with this Skill):
> "I will connect to the Ensembl REST API to extract the BRCA2 gene structure:"
>
> 1. **Gene ID Resolution**: I mapped BRCA2 to the standard Ensembl Gene ID **ENSG00000139618**.
> 2. **Canonical Transcript selection**: I identified the canonical transcript **ENST00000380152**.
> 3. **Exon/Intron Coordinates**: I downloaded details for all 27 exons, including coordinates, exon lengths, and sequence junctions.
>
> *Exon/intron boundaries are prepared to help you design PCR primers without frame-shift errors.*

## ⚠️ Gotchas and notes

- **Transcript Context**: A variant can be missense on transcript A but intronic on transcript B. Always specify the canonical transcript.
- **VEP vs Prediction tools**: VEP provides consequence types; tools like SIFT/PolyPhen predict functional impacts.
- **Species flag**: Ensembl supports hundreds of species. Specify the species in queries (defaults to human).
- **API rate limits**: Ensembl enforces rate limits — the script wrapper automatically manages them.
