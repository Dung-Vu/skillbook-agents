---
title: "PubChem Chemical Database"
description: "Search chemical molecules, structures, IUPAC names, physical properties, and safety/bioactivity details from PubChem."
oneLiner: "Query chemicals and bioactivities from PubChem."
seoTitle: "PubChem Chemical Database — Skillbook Agents"
seoDescription: "Guide for Agents to query PubChem for chemical properties, safety, and bioactivity data."
---


## 📖 Why Do We Need This Skill?

PubChem is the world's largest open chemical database — containing >110 million compounds annotated with properties, bioassays, safety details, and patents.

- **Compound lookup**: Search by name, CID, SMILES, or InChI keys
- **Chemical properties**: Retrieve molecular weight, formulas, logP, polar surface areas, etc.
- **Similarity/Substructure searches**: Find molecules containing specific scaffolds or structural similarity
- **Bioactivity assays**: Access bioassay screening results and targets

## ⚙️ How It Works

```
Name / CID / SMILES → PubChem PUG REST API → 
Return chemical properties, bioactivity, similar compounds
```

## 🚀 How to use

### Universal

```markdown
# PubChem Rules
- Use PubChem for chemical properties and compound identification.
- Similarity search: Tanimoto ≥ 0.8 = structurally similar.
- Combine ChEMBL for curated bioactivity (IC50/Ki).
```

## 💡 Real-World Examples / Scenarios

### 🧑‍💻 Developer:
> "Look up the chemical properties, SMILES string, and toxicity of Curcumin on PubChem."

### 🤖 AI Agent (Equipped with this Skill):
> "I will connect to the PubChem API to retrieve the chemical profile of Curcumin:"
>
> 1. **Identify CID**: I searched for Curcumin and identified its unique PubChem CID as **969516**.
> 2. **Fetch Properties**: I extracted its molecular formula (`C21H20O6`), molecular weight (`368.4 g/mol`), and SMILES string.
> 3. **Retrieve Toxicity & Safety**: I fetched MSDS datasheets, checking for irritation warnings and LD50 values in mice.
>
> *The Curcumin chemical profile is fully prepared, supporting your medicinal chemistry research.*

## ⚠️ Gotchas and notes

- **CID vs SID**: CIDs identify unique molecules, whereas SIDs represent individual substance submissions (which can include mixtures or salts).
- **PubChem vs ChEMBL**: PubChem contains broad chemical properties and high-throughput screening assays; ChEMBL focuses on curated medicinal chemistry bioactivities (IC50/Ki).
- **Rule of 5**: Molecular Weight ≤500, LogP ≤5, Hydrogen Bond Donors ≤5, Hydrogen Bond Acceptors ≤10 — a useful drug-likeness filter.
