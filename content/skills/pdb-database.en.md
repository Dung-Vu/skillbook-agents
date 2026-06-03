---
title: "PDB 3D Structure Database"
description: "Search and download experimentally determined atomic 3D structures of proteins, nucleic acids, and bound ligands from the Protein Data Bank."
oneLiner: "Query and download experimental 3D structures from PDB."
seoTitle: "PDB 3D Structure Database — Skillbook Agents"
seoDescription: "Guide for Agents to search and download experimental 3D structures from the RCSB Protein Data Bank."
---


## 📖 Why Do We Need This Skill?

The RCSB PDB (Protein Data Bank) contains over 220,000 experimental 3D structures — solved via X-ray crystallography, cryo-EM, and NMR. Unlike AlphaFold's computational predictions, the PDB provides structures **empirically validated by experiments**.

- **Experimental structures**: Access resolution, R-factors, and experimental methods (X-ray, cryo-EM, NMR)
- **Ligand-bound states**: Retrieve co-crystal structures of proteins bound to drugs/ligands for structure-based drug design
- **Multi-attribute searches**: Find structures by sequence similarity, structural similarity, or chemical attributes

## ⚙️ How It Works

```
Query (text/sequence/structure) → RCSB PDB API → 
Return PDB entries with metadata, download structure files
```

1. **Text search**: Locate PDB entries by protein name, organism, or experimental method
2. **Sequence search**: Find solved structures sharing sequence similarity
3. **Download**: Fetch `.cif` or `.pdb` coordinate files for visualization (e.g., using PyMOL)

## 🚀 How to use

### Universal

```markdown
# PDB Query Rules
- PDB = experimental structures. AlphaFold = predicted structures. Always specify the source.
- Report: PDB ID, resolution, method, organism, ligands.
- Prioritize structures with high resolution (X-ray < 2.0Å, cryo-EM < 3.0Å).
- Combine with PyMOL to visualize downloaded structures.
```

## 💡 Real-World Examples / Scenarios

### 🧑‍💻 Developer:
> "Download the 3D crystal structure of the SARS-CoV-2 main protease (Mpro) from the Protein Data Bank for molecular docking."

### 🤖 AI Agent (Equipped with this Skill):
> "I will query the RCSB PDB to retrieve the coordinate file:"
>
> 1. **Identify PDB ID**: I resolved the highest resolution crystal structure of Mpro to PDB ID **6LU7**.
> 2. **Download Coordinates**: I downloaded the structure file in `.pdb` format from the RCSB server.
> 3. **Extract Resolution and Quality**: I parsed the structural metadata (Resolution: 2.16 Å, method: X-ray diffraction) and noted the co-crystallized inhibitor in the active pocket.
>
> *The 3D coordinates and structural quality assessment are prepared for your docking simulations.*

## ⚠️ Gotchas and notes

- **Resolution Matters**: Lower resolution values represent higher structural detail. X-ray structures <2.0Å are excellent; values >3.5Å are poor.
- **PDB vs AlphaFold**: PDB provides experimental structures (including ligand-bound states and mutational variants); AlphaFold predicts unliganded canonical structures.
- **Asymmetric Unit vs Biological Assembly**: A PDB file might contain only a subunit; you may need to generate the biological assembly to reconstruct the functional complex.
- **Obsolete Entries**: Check for deprecated PDB entries that have been replaced by newer, higher-quality structures.
