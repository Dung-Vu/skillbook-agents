---
title: EMBL-EBI Ontology Lookup
description: >-
  Search terms, definitions, and hierarchies across 250+ biomedical ontologies
  (GO, DOID, HP).
oneLiner: Query EMBL-EBI's Ontology Lookup Service.
seoTitle: EMBL-EBI Ontology Lookup — Skillbook Agents
seoDescription: >-
  Guide for Agents to search and navigate 250+ biomedical ontologies via
  EMBL-EBI OLS.
---


## 📖 Why Do We Need This Skill?

Biomedical ontologies standardize scientific language — ensuring that "heart disease", "cardiac disorder", and "cardiovascular disease" all map to the same concept. OLS aggregates 250+ ontologies into a single API.

- **Term search**: Locate terms for any biological concept
- **Hierarchy navigation**: Fetch parents, children, and ancestors of terms
- **Cross-ontology**: Search GO, DOID (Disease), HP (Human Phenotype), UBERON (Anatomy), CL (Cell)
- **Autocomplete**: Suggest terms when user queries are inexact

## ⚙️ How It Works

```
Search term / Ontology ID → OLS API → 
Return term definitions, synonyms, hierarchy, cross-references
```

## 🚀 How to use

### Universal

```markdown
# OLS Rules
- Use OLS to resolve free-text names to standard ontology IDs (DOID:xxx, HP:xxx, UBERON:xxx).
- Useful when AlphaGenome needs UBERON/CL IDs for tissue/cell type.
- Report: ontology, term ID, definition, synonyms.
```

## 💡 Real-World Examples / Scenarios

### 🧑‍💻 Developer:
> "I want to standardize the clinical term 'breast carcinoma' to a standard ontology ID for database integration."

### 🤖 AI Agent (Equipped with this Skill):
> "I will use the EMBL-EBI Ontology Lookup Service (OLS) to resolve this term:"
>
> 1. **Cross-Ontology Query**: I sent a search request to the OLS API scanning over 250 databases.
> 2. **Term Resolution**: I resolved the matching terms in major ontologies:
>    * **DOID (Disease Ontology)**: `DOID:1612` (breast cancer).
>    * **MONDO (Mondo Disease Ontology)**: `MONDO:0008903`.
>    * **EFO (Experimental Factor Ontology)**: `EFO:0000305`.
> 3. **Hierarchy Navigation**: I mapped parent terms (cancer) and child terms (ductal breast carcinoma) to place it in context.
>
> *The standard term mapping is ready to normalize clinical data in your databases.*

## ⚠️ Gotchas and notes

- **Multiple Ontologies**: The same concept may have distinct IDs in DOID vs MONDO vs EFO — choose the ontology best suited for your use case.
- **Not for GO annotations**: Use QuickGO for gene-ontology annotations; OLS is only for term lookups and hierarchies.
- **Autocomplete endpoint**: Utilize the autocomplete endpoint when user inputs are loose or typed.
