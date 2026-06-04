---
title: InterPro Domain Analysis
description: >-
  Identify functional domains and classify protein families using InterPro,
  mapped against taxonomic distributions.
oneLiner: Analyze and identify protein domains and families.
seoTitle: InterPro Domain Analysis — Skillbook Agents
seoDescription: >-
  Guide for Agents to identify protein domains and families using InterPro and
  its 14 member databases.
---


## 📖 Why Do We Need This Skill?

Proteins operate via **domains** — independent structural and functional units. InterPro integrates 14 databases (Pfam, CDD, PROSITE, SMART, etc.) into a unified resource to analyze domain architectures.

- **Domain identification**: Discover which domains are present in a protein and their residue boundaries
- **Family classification**: Assign proteins to specific families and superfamilies
- **Functional sites**: Locate active sites, binding pockets, and post-translational modification (PTM) sites
- **InterPro-N**: Uses deep learning to significantly expand sequence annotation coverage

## ⚙️ How It Works

```
Protein ID / Sequence → InterPro API → 
Return domains, families, sites with member database annotations
```

1. **Protein lookup**: Fetch domain architecture for a specific UniProt ID
2. **Entry search**: Find all proteins sharing a particular domain entry
3. **Domain Architecture (IDA)**: Compare domain arrangements across different protein sequences

## 🚀 How to use

### Universal

```markdown
# InterPro Rules
- Use InterPro to identify which domains a protein contains and which family it belongs to.
- Report: InterPro entry ID, member database (Pfam, CDD), and domain boundaries.
- IDA (Integrated Domain Architecture) to compare proteins with the same domain arrangement.
- GO terms from InterPro entries for functional annotation.
```

## 💡 Real-World Examples / Scenarios

### 🧑‍💻 Developer:
> "I have a novel protein sequence. Run a prediction to see what domains and protein families it contains using InterPro."

### 🤖 AI Agent (Equipped with this Skill):
> "I will perform a domain architecture analysis using the InterPro API:"
>
> 1. **Validate FASTA Sequence**: I checked your amino acid sequence format for invalid characters.
> 2. **Run InterProScan**: I submitted your sequence to the InterPro server to scan across 14 member databases simultaneously (Pfam, PROSITE, SMART, PANTHER, etc.).
> 3. **Identify Domain Boundaries**: I mapped the matching residue coordinates, identifying a Kinase domain, an immunoglobulin domain, and nuclear localization signals (NLS).
> 4. **Annotate Functions**: I detailed the domain architecture and mapped Gene Ontology (GO) terms associated with the novel protein's biological functions.
>
> *The integrated domain architecture report is ready, helping you infer the biological functions of your novel protein sequence.*

## ⚠️ Gotchas and notes

- **Multiple Databases**: The same domain may match Pfam, CDD, or SMART with slightly different boundaries — InterPro unifies these annotations.
- **InterPro-N**: Neural network predictions provide annotations for protein sequences lacking close homolog representation.
- **Domain ≠ Function**: The presence of a domain does not guarantee activity — consider biological context.
