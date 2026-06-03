---
title: "AlphaFold Structure Analysis"
description: "Retrieve and analyze protein structures predicted by AlphaFold using UniProt IDs."
oneLiner: "Retrieve and analyze protein structures predicted by AlphaFold."
seoTitle: "AlphaFold Structure Analysis — Skillbook Agents"
seoDescription: "Guide for Agents to retrieve AlphaFold protein structures, analyze pLDDT and domain boundaries automatically."
---


## 📖 Why Do We Need This Skill?

AlphaFold Database contains over 200 million predicted protein structures — a massive resource for structural biology research. However, the default Agent does not know how to:

- **Retrieve structures**: Does not know the API endpoint or the mmCIF file format that AlphaFold uses
- **Evaluate prediction quality**: Does not understand the pLDDT (predicted Local Distance Difference Test) metric — the most critical indicator of confidence for each region
- **Detect domain boundaries**: Cannot analyze the Predicted Aligned Error (PAE) matrix to determine boundaries between rigid domains

This skill equips the Agent with a complete CLI toolset to download structures, analyze confidence, and detect intrinsically disordered regions automatically.

## ⚙️ How It Works

The workflow consists of 3 main steps:

```
UniProt ID → Fetch Structure (mmCIF + PAE) → Analyze pLDDT → Analyze PAE/Domains
```

1. **Fetch Structure**: Download `.cif` files, PAE JSON, and metadata from the AlphaFold API using the `fetch_structure.py` script. Supports automatic fallback to fragments for large proteins.
2. **Analyze pLDDT**: The `analyze_plddt.py` script reads metadata and classifies: structured, disordered, or mixed based on confidence thresholds (Very High >90, High 70-90, Low 50-70, Very Low <50).
3. **Analyze PAE/Domains**: The `analyze_pae.py` script uses a sliding-window heuristic to detect domain boundaries from the PAE matrix.

## 🚀 How to use

### Universal

```markdown
# AlphaFold Structure Analysis Rules

When the user requests protein structure analysis from AlphaFold:
1. Require a UniProt Accession ID (e.g., P00520, P04637). DO NOT accept protein names or gene names.
2. Use the fetch_structure.py script to download mmCIF and PAE structures.
3. Run analyze_plddt.py to evaluate confidence — clearly report the percentage of high/low confidence regions.
4. Run analyze_pae.py to detect domain boundaries.
5. Synthesize the results: overall confidence, number of domains, disordered regions, and warn if the protein is too large (>2700 AA).
```

### Cursor (.cursorrules)

```markdown
# AlphaFold Analysis
- Always require a UniProt ID before fetching the AlphaFold structure.
- Run both pLDDT analysis and PAE domain analysis for each protein.
- Clearly warn if the protein has a majority of disordered regions (pLDDT < 50).
- Remind the user that per-residue pLDDT is located in the B-factor column of the mmCIF file.
```

### Claude Code

```markdown
# AlphaFold Analysis Instructions
- Require UniProt Accession ID before querying AlphaFold Database.
- Always run both pLDDT and PAE analyses — present a unified structural summary.
- Flag isoform warnings and large protein fragment issues prominently.
```

## 💡 Real-World Examples / Scenarios

### 🧑‍💻 Developer:
> "Please download and analyze the structure of the ABL1 protein from the AlphaFold database to see which regions have high confidence and which are disordered."

### 🤖 AI Agent (Equipped with this Skill):
> "I will proceed with this request in the background using the following automated steps:"
>
> 1. **Map Protein Code**: I diagnosed and mapped the ABL1 gene to the standard UniProt ID **P00520**.
> 2. **Download mmCIF Structure and PAE Matrix**: I automatically ran the script to download the 3D mmCIF structure and the Predicted Aligned Error (PAE) matrix from the AlphaFold Database.
> 3. **Analyze pLDDT Quality**: I scanned the pLDDT data and found the structure has an average confidence of 72.3 (Mixed confidence), with 35% of the regions having very high confidence (>90) and 22% of the regions having very low confidence (<50).
> 4. **Identify Domain Boundaries**: I analyzed the PAE matrix and successfully identified the boundaries of 3 main domains: SH3 (Residues 1-82), SH2 (Residues 83-145), and Kinase (Residues 230-500).
> 5. **Provide Expert Recommendations**: I detected that the linker region (Residues 146-229) has very low pLDDT scores, concluding it is an intrinsically disordered linker and recommending you avoid using this region for molecular docking or structural alignment.
>
> *In just a few seconds, the complete 3D structure and prediction quality report of the ABL1 protein have been summarized in detail for you.*

## ⚠️ Gotchas and notes

- **UniProt ID Required**: Gene names, protein names, or amino acid sequences are not accepted. Ask the user to lookup the ID on [uniprot.org](https://www.uniprot.org) first.
- **Large Proteins (>2700 AA)**: AlphaFold splits these into fragments — results may be incomplete and require a clear warning.
- **Disordered ≠ Wrong**: A low pLDDT score does not mean the prediction is incorrect — the protein region itself may be intrinsically disordered. Do not confuse the two concepts.
- **Rate Limit**: The script wrapper automatically enforces rate limits. Do not call the API directly using curl/wget.
