---
title: Reactome Pathway Analysis
description: >-
  Perform pathway enrichment analysis, look up cellular reaction mechanisms, and
  export pathway diagrams.
oneLiner: Query biochemical and signaling pathways from Reactome.
seoTitle: Reactome Pathway Analysis — Skillbook Agents
seoDescription: >-
  Guide for Agents to analyze pathway enrichment and navigate biochemical
  reactions in Reactome.
---


## 📖 Why Do We Need This Skill?

Reactome is a curated pathway database — detailing molecular biological reactions ranging from basic metabolism to complex signaling cascades, documenting reaction steps and participating molecules.

- **Pathway enrichment**: Submit a gene list to identify pathways that are statistically over-represented
- **Reaction details**: Map inputs, outputs, catalysts, and regulators for individual reaction steps
- **Pathway hierarchy**: Navigate from top-level pathways down to individual reaction steps
- **Diagram export**: Download pathway diagrams for visualization

## ⚙️ How It Works

```
Gene list / Pathway ID → Reactome API → 
Return enrichment results, pathway hierarchy, reaction details
```

1. **Enrichment analysis**: Submit gene/protein identifiers to obtain enriched pathways (returning p-values and FDRs)
2. **Pathway content query**: Retrieve reaction details including inputs, outputs, and catalyst details
3. **Hierarchy traversal**: Navigate the pathway tree starting from top-level terms

## 🚀 How to use

### Universal

```markdown
# Reactome Rules
- Enrichment: submit gene list → sort by FDR (< 0.05 = significant).
- Report: pathway name, entities found/total, p-value, and FDR.
- Unmapped identifiers: check and report IDs not found in Reactome.
- Diagram export is available for pathway visualization.
```

## 💡 Real-World Examples / Scenarios

### 🧑‍💻 Developer:
> "I have a list of 10 mutated genes from a cancer patient. Run a pathway enrichment analysis on Reactome."

### 🤖 AI Agent (Equipped with this Skill):
> "I will perform the pathway enrichment analysis using the Reactome Analysis Service:"
>
> 1. **Validate Identifiers**: I checked your gene list and standardized them to HGNC symbols.
> 2. **Run Enrichment**: I submitted the list to the Reactome server to calculate hypergeometric statistics.
> 3. **Identify Target Pathways**: I extracted the most statistically significant pathways.
> 4. **Format Results**: I compiled a table showing the top affected pathways with mapping ratios and direct links to Reactome interactive diagrams.
>
> *The Reactome pathway enrichment report is ready, highlighting mutated molecular pathways in your sample.*

## ⚠️ Gotchas and notes

- **FDR vs p-value**: Always use the False Discovery Rate (FDR) rather than the raw p-value to evaluate statistical significance.
- **Identifier Mapping**: Reactome accepts UniProt, Ensembl, and Gene Symbols. Double-check for unmapped identifiers.
- **Species Focus**: Reactome is most complete for human pathways. Other model organisms have less comprehensive annotations.
- **Reactome vs KEGG**: Reactome is fully open-access with detailed curated molecular mechanisms; KEGG is proprietary and covers broader pathways.
