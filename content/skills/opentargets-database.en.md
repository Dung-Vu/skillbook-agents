---
title: Open Targets Drug Discovery
description: >-
  Support biological target validation by integrating genetic, literature, and
  clinical trial evidence from Open Targets.
oneLiner: Query target-disease associations and drug development profiles.
seoTitle: Open Targets Drug Discovery — Skillbook Agents
seoDescription: >-
  Guide for Agents to query target-disease associations and tractability
  profiles from the Open Targets Platform.
---


## 📖 Why Do We Need This Skill?

Open Targets integrates genetics, genomics, transcriptomics, drugs, and literature evidence to score the association between **targets** (genes/proteins) and **diseases** — supporting drug discovery workflows.

- **Target-disease associations**: Overall score (0-1) reflecting the strength of the gene-disease relationship
- **Tractability**: Determine if a target is druggable via small molecules, antibodies, or gene therapies
- **Known drugs**: List approved drugs and clinical trials testing the target
- **Safety profiles**: Access known toxicity and safety warnings associated with modulating the target

## ⚙️ How It Works

```
Gene / Disease → Open Targets GraphQL API → 
Return associations, evidence, drugs, tractability, safety
```

1. **Association**: Retrieve the overall score (0-1) for a gene-disease pair, broken down by evidence channels
2. **Evidence channels**: Analyze genetics (GWAS), somatic mutations, expression profiles, literature, and drugs
3. **Tractability**: Assess modalities (small molecules, antibodies, PROTACs, gene therapies)

## 🚀 How to use

### Universal

```markdown
# Open Targets Rules
- Association score > 0.5 = strong evidence. Score 0.1-0.5 = moderate.
- Report evidence breakdown: genetic_association, somatic_mutation, known_drug, etc.
- Tractability assessment cho drug development feasibility.
- Known drugs: report mechanism, phase, approval status.
```

## 💡 Real-World Examples / Scenarios

### 🧑‍💻 Developer:
> "I am researching the EGFR gene target in non-small cell lung cancer (NSCLC). Find disease associations and clinical drugs on Open Targets."

### 🤖 AI Agent (Equipped with this Skill):
> "I will query the Open Targets Platform API to generate a target validation report:"
>
> 1. **Map Identifiers**: I resolved EGFR to its Ensembl ID and NSCLC to its ontology disease code.
> 2. **Calculate Association Score**: I retrieved the EGFR-NSCLC association score, confirming a strong biological connection (score near 1.0 due to somatic mutations).
> 3. **Identify Clinical Drugs**: I extracted active EGFR inhibitors (e.g., Osimertinib, Gefitinib) with their highest clinical trial phase (Phase IV) and mechanisms of action.
>
> *The comprehensive EGFR-NSCLC report detailing genetic evidence and clinical drug landscapes is ready to support your research.*

## ⚠️ Gotchas and notes

- **Association ≠ Causation**: A high association score indicates strong evidence linking target and disease, but does not guarantee therapeutic success.
- **Tractability Tiers**: Bucket 1 (clinical precedence) > Bucket 2 (predicted druggable) > Bucket 3 (no structural/empirical druggability evidence).
- **Human Focus**: Open Targets is designed primarily for human target-disease validation.
