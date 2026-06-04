---
title: Foldseek 3D Structural Search
description: >-
  Perform high-speed 3D protein structure searches from coordinate files (.pdb,
  .cif) against structural databases.
oneLiner: Search homologous 3D protein structures using Foldseek.
seoTitle: Foldseek 3D Structural Search — Skillbook Agents
seoDescription: >-
  Guide for Agents to search structurally similar proteins using the Foldseek
  API.
---


## 📖 Why Do We Need This Skill?

Two proteins can have completely different amino acid sequences yet fold into the same 3D structure — a phenomenon called **structural homology**. Sequence-based search (BLAST, MMseqs2) often misses these cases.

- **Sequence search fails**: When sequence identity drops below 20%, BLAST fails to detect homologs, despite structural similarity
- **Foldseek resolution**: Compares 3D atomic coordinates directly to identify proteins sharing the same fold, regardless of sequence similarity
- **Multi-database search**: Search against PDB, AlphaFold UniProt, CATH, and MGnify ESM Atlas simultaneously

This skill requires the user to supply a **3D coordinate file** (`.cif`, `.mmcif`, or `.pdb`).

## ⚙️ How It Works

```
File 3D (.cif/.pdb) → Upload to Foldseek API → Search databases → 
Return structurally similar proteins (with TM-score, RMSD)
```

1. **Input**: A 3D structure file — must exist on the host machine
2. **Search**: Foldseek API encodes the structure using a 3Di structural alphabet for rapid alignment
3. **Output**: List of structural homologs with TM-scores (>0.5 indicates significant homology), RMSD, and sequence identity

## 🚀 How to use

### Universal

```markdown
# Foldseek Structural Search Rules
- ONLY use when the user provides a 3D file (.cif, .mmcif, .pdb).
- DO NOT use if only sequence, gene name, or UniProt ID is provided — use protein-sequence-similarity-search or alphafold-database instead.
- Verify the file exists before invoking the API.
- Report results with TM-score, RMSD, and database source.
```

### Cursor (.cursorrules)

```markdown
# Foldseek Search
- Require a .cif or .pdb file before running Foldseek.
- TM-score > 0.5 = structural similarity is biologically significant.
- Combine with PyMOL to visualize the superposition result.
```

## 💡 Real-World Examples / Scenarios

### 🧑‍💻 Developer:
> "I solved a novel 3D structure saved in `my_protein.pdb`. Help me find structural homologs in the PDB database."

### 🤖 AI Agent (Equipped with this Skill):
> "I will search for structural homologs using the Foldseek API:"
>
> 1. **Parse PDB File**: I read your `my_protein.pdb` file, validated its format, and extracted alpha-carbon coordinates.
> 2. **Run Structural Alignment**: I sent your structure to the Foldseek server to compare it against millions of structures in PDB and AlphaFold DB using the Foldseek structural alphabet.
> 3. **Analyze Hits**: I filtered the closest matches, displaying TM-score, RMSD, and alignment coverage.
> 4. **Compile Report**: I identified the top hit as a tyrosine kinase, suggesting your protein shares this fold and likely carries out similar biological functions.
>
> *The Foldseek search results are compiled, enabling you to infer biological function in seconds.*

## ⚠️ Gotchas and notes

- **3D File Required**: Does not work with sequences, gene symbols, or UniProt IDs. A coordinate file is mandatory.
- **TM-Score Range**: TM-score values range from 0 to 1; values >0.5 indicate that the proteins share the same fold.
- **Coordinate Integrity**: Ensure the PDB/CIF file contains valid ATOM records. Missing loops or chains can alter search accuracy.
