---
title: STRING Protein Interactions
description: >-
  Explore physical and functional protein-protein interaction networks,
  calculate confidence scores, and run cluster enrichment analysis.
oneLiner: Query protein-protein interaction networks from STRING.
seoTitle: STRING Protein Interactions — Skillbook Agents
seoDescription: >-
  Guide for Agents to query protein-protein interactions and functional
  enrichment from the STRING database.
---


## 📖 Why Do We Need This Skill?

Proteins do not act in isolation — they interact in complex networks. STRING integrates evidence from multiple channels (experiments, databases, text mining, co-expression) to map protein-protein interactions.

- **Interaction partners**: Find which partners interact with a query protein and their confidence scores
- **Evidence channels**: Break down scores by experimental (lab-verified), database (curated), text mining, and co-expression channels
- **Functional enrichment**: Analyze if interaction networks are enriched for specific pathways or GO terms

## ⚙️ How It Works

```
Protein(s) → STRING API → 
Return interaction network, confidence scores, enrichment analysis
```

1. **Network query**: Fetch interaction partners for one or more proteins
2. **Evidence breakdown**: Access confidence scores (0-1) across individual evidence channels
3. **Enrichment**: Run enrichment checks for KEGG pathways, GO terms, and Reactome pathways on the network

## 🚀 How to use

### Universal

```markdown
# STRING Query Rules
- Confidence score > 0.7 = high confidence interaction. > 0.9 = highest.
- Report evidence breakdown: experimental, database, text-mining.
- Functional enrichment cho protein list → identify common pathways.
- Specify species (9606 = human) khi query.
```

## 💡 Real-World Examples / Scenarios

### 🧑‍💻 Developer:
> "I want to build a protein-protein interaction (PPI) network around the AKT1 gene to find its key binding partners."

### 🤖 AI Agent (Equipped with this Skill):
> "I will query the STRING database to build and analyze the protein interaction network:"
>
> 1. **Map Protein Identifiers**: I mapped AKT1 to its unique STRING protein identifier.
> 2. **Fetch Network Partners**: I retrieved direct (first-shell) interacting partners from the STRING API, setting a high confidence threshold (>0.7).
> 3. **Break Down Evidence**: I parsed confidence channels, extracting experimental and database validations.
> 4. **Compile Network Report**: I structured the top 5 interacting partners (MTOR, PIK3CA, PTEN, etc.) with confidence scores and detailed signaling mechanisms.
>
> *The STRING interaction network is ready, supporting therapeutic target discovery.*

## ⚠️ Gotchas and notes

- **Combined Score Integration**: STRING combines evidence channels using Bayesian integration rather than a simple sum.
- **Text-Mining Bias**: High text-mining scores may simply reflect proteins frequently co-mentioned in papers, not necessarily physical binding.
- **Species Context**: Interaction networks can differ significantly between humans and model organisms (e.g., mice).
- **Functional vs Physical**: STRING lists functional associations alongside physical interactions.
