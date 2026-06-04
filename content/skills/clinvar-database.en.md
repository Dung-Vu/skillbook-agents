---
title: ClinVar Clinical Variants
description: >-
  Query ClinVar to determine variant pathogenicity (Pathogenic, Benign, VUS) and
  fetch clinical evidence for human genomic variants.
oneLiner: Query clinical classifications and pathogenicity for genetic variants.
seoTitle: ClinVar Clinical Variants — Skillbook Agents
seoDescription: >-
  Guide for Agents to query pathogenicity and clinical significance of genetic
  variants from ClinVar.
---


## 📖 Why Do We Need This Skill?

ClinVar is NCBI's gold-standard database containing clinical classifications for millions of human genetic variants. When analyzing a variant, the primary question is: **"Does this variant cause disease?"**

- **5-tier classification**: Pathogenic → Likely Pathogenic → VUS → Likely Benign → Benign
- **Evidence-based**: Each classification includes clinical lab and review panel (ClinGen) evidence
- **Benchmark controls**: Find "hard positive" pathogenic variants for pipeline validation

## ⚙️ How It Works

```
Variant ID (rsID/HGVS/coordinates) → ClinVar API → 
Return classification, evidence, conditions, review status
```

1. **Input**: rsID (rs123456), HGVS notation (NM_000546.6:c.215C>G), or genomic coordinates
2. **Lookup**: Query the ClinVar database via NCBI E-utilities
3. **Output**: Clinical significance, review status (★ star rating), associated conditions, and submitter evidence

## 🚀 How to use

### Universal

```markdown
# ClinVar Lookup Rules
- When the user asks "does variant X cause disease?" → query ClinVar first.
- Report: classification, review stars, associated conditions.
- VUS (Variant of Uncertain Significance) = insufficient evidence → DO NOT classify as pathogenic or benign.
- Always report the review status (★): 4★ = expert panel reviewed, 1★ = single submitter.
```

### Cursor (.cursorrules)

```markdown
# ClinVar Rules
- ClinVar classification is not a diagnosis — always advise consulting a genetic counselor.
- Cross-reference with gnomAD allele frequency: rare + pathogenic = high concern.
- For VUS, suggest additional evidence from AlphaGenome or functional studies.
```

## 💡 Real-World Examples / Scenarios

### 🧑‍💻 Developer:
> "I detected the BRCA1 variant c.5096G>A (p.Arg1699Gln) in sequencing data. Check its ClinVar clinical classification."

### 🤖 AI Agent (Equipped with this Skill):
> "I will connect to the NCBI ClinVar database to check and compile a clinical report for you:"
>
> 1. **Fetch Variant Info**: I queried ClinVar using the standard HGVS string `BRCA1:c.5096G>A`.
> 2. **Analyze Pathogenicity**: I extracted the current clinical consensus status for this variant, which is **Pathogenic**.
> 3. **Collect Clinical Evidence**: I compiled reports from authoritative submitters (e.g., ENIGMA, Ambry Genetics), including ClinVar SCV accessions, associated phenotypes (Hereditary Breast and Ovarian Cancer Syndrome), and review status (3 stars - reviewed by expert panel).
>
> *Your ClinVar variant verification report is ready, aiding clinical diagnostic decision-making.*

## ⚠️ Gotchas and notes

- **Not for Diagnosis**: ClinVar classifications are reference resources, not a replacement for professional genetic counseling.
- **VUS Trap**: ~50% of variants in ClinVar are classified as VUS (Variant of Uncertain Significance) — do not assume they are benign or pathogenic.
- **Review Stars Matter**: A 1★ single submitter classification is not equivalent to a 4★ expert panel consensus. Always report the review status.
- **Updates**: Classifications evolve as clinical laboratories submit new empirical evidence.
