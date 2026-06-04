---
title: ChEMBL Bioactive Molecules
description: >-
  Query bioactive chemical compounds, drug targets, bioactivity data (IC50/Ki),
  and mechanisms of action.
oneLiner: Query the ChEMBL cheminformatics database for bioactive molecules.
seoTitle: ChEMBL Bioactive Molecules — Skillbook Agents
seoDescription: >-
  Guide for Agents to query bioactive compounds, IC50/Ki values, and drug
  targets from ChEMBL.
---


## 📖 Why Do We Need This Skill?

ChEMBL is the largest database for bioactivity data of small molecules — containing ~2.4 million compounds with >20 million bioactivity measurements from medicinal chemistry literature.

- **Compound search**: Find compounds by name, SMILES, or structure (similarity/substructure)
- **Bioactivity data**: IC50, Ki, Kd, EC50 values for compound-target pairs
- **Drug targets**: Identify which proteins are targeted by a compound
- **Approved drugs**: Drug mechanisms, indications, and clinical data

## ⚙️ How It Works

```
Compound / Target → ChEMBL API → 
Return bioactivity data, mechanisms, approved drug info
```

## 🚀 How to use

### Universal

```markdown
# ChEMBL Rules
- Use ChEMBL when IC50/Ki/Kd values are needed for compound-target pairs.
- Use SMILES structure search for similarity/substructure queries.
- Report: ChEMBL ID, activity type, value, unit, target.
- Combine PubChem for chemical properties and ChEMBL for bioactivity.
```

## 💡 Real-World Examples / Scenarios

### 🧑‍💻 Developer:
> "I want to find the most potent COX-2 inhibitors on ChEMBL for research."

### 🤖 AI Agent (Equipped with this Skill):
> "I will connect and query the ChEMBL database for you using the following workflow:"
>
> 1. **Identify Target**: I mapped the COX-2 target protein (PTGS2) to the standard ChEMBL Target ID **CHEMBL230**.
> 2. **Query Bioactivity**: I queried the API to filter all compounds tested against this protein, focusing on IC50 and Ki metrics.
> 3. **Filter and Sort**: I extracted compounds showing high potency in the nanomolar (nM) range.
> 4. **Export Compound Report**: I compiled a list of the top 5 compounds (including Celecoxib - CHEMBL118, Valdecoxib - CHEMBL444, etc.) along with their SMILES structures, experimental IC50 values, and literature references.
>
> *The curated bioactivity data and molecular structures are ready for you to download for molecular docking simulations.*

## ⚠️ Gotchas and notes

- **Assay Conditions Vary**: IC50 values depend on assay conditions — compare carefully across different studies.
- **ChEMBL vs PubChem**: ChEMBL focus is curated bioactivity from literature; PubChem has broader chemical data and high-throughput screening.
- **pChEMBL**: Standardized -log(IC50/Ki/Kd) — values ≥5 are active (≤10 µM), ≥6 are potent (≤1 µM).
