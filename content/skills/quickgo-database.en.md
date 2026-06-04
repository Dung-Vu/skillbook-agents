---
title: QuickGO Gene Ontology
description: >-
  Map genes to biological processes, molecular functions, and cellular
  compartments, and traverse Gene Ontology hierarchies.
oneLiner: Query Gene Ontology (GO) functional annotations.
seoTitle: QuickGO Gene Ontology — Skillbook Agents
seoDescription: >-
  Guide for Agents to query Gene Ontology via QuickGO to map genes with
  biological processes and functions.
---


## 📖 Why Do We Need This Skill?

Gene Ontology (GO) is the international standard classification system for gene functions — assigning standardized GO terms to every gene/protein describing: what it does (Molecular Function), what processes it participates in (Biological Process), and where it is located (Cellular Component).

- **Gene to function**: Determine which biological processes a gene is involved in
- **Function to gene**: Find all genes annotated to a specific term (e.g., "apoptosis")
- **Hierarchy navigation**: GO terms form a structured directed acyclic graph — query parent/child relationships

## ⚙️ How It Works

```
Gene / GO term → QuickGO REST API → 
Return GO annotations, hierarchy, evidence codes
```

1. **Annotation query**: Retrieve GO terms mapped to a gene/protein, with filters for evidence codes
2. **Term lookup**: Fetch definitions and hierarchy metadata for a specific GO term ID
3. **Hierarchy navigation**: Walk parent, child, or ancestor lineages

## 🚀 How to use

### Universal

```markdown
# QuickGO Rules
- GO has 3 aspects: BP (Biological Process), MF (Molecular Function), CC (Cellular Component).
- Evidence codes matter: EXP/IDA/IPI = experimental, IEA = electronic (lower quality).
- Use the hierarchy to find more general or more specific terms.
- DO NOT use for: drug targets (use OpenTargets) or pathway diagrams (use Reactome).
```

## 💡 Real-World Examples / Scenarios

### 🧑‍💻 Developer:
> "Look up the Gene Ontology (GO) terms for the TP53 gene to find its molecular functions and biological processes."

### 🤖 AI Agent (Equipped with this Skill):
> "I will query the EMBL-EBI QuickGO database to retrieve the biological function annotations for you:"
>
> 1. **Map to UniProt ID**: I mapped TP53 to its standard UniProt accession **P04637**.
> 2. **Query GO Annotations**: I retrieved experimental annotations from the QuickGO API.
> 3. **Categorize by GO branches**:
>    * **Molecular Function**: Mapped to `GO:0003700` (DNA-binding transcription factor activity).
>    * **Biological Process**: Mapped to `GO:0006915` (apoptotic process).
>    * **Cellular Component**: Mapped to `GO:0005634` (nucleus localization).
> 4. **Filter by Evidence**: I filtered annotations to display only experimentally verified evidence codes to ensure high reliability.
>
> *The comprehensive Gene Ontology annotation report is ready, detailing the gene's molecular mechanisms.*

## ⚠️ Gotchas and notes

- **Evidence Codes**: Computational predictions (IEA - Inferred from Electronic Annotation) account for ~98% of database records but have lower reliability than experimental evidence codes (EXP, IDA).
- **GO vs Pathway**: GO terms describe independent functions/processes, not signaling cascades. Use Reactome for pathway diagrams.
- **Ancestral Propagation**: GO annotations propagate up the hierarchy — genes annotated to a child term automatically inherit parent terms.
