---
title: Human Protein Atlas
description: >-
  Retrieve protein expression profiles and subcellular localizations using
  antibody-based immunohistochemistry from the Human Protein Atlas (HPA).
oneLiner: Query protein expression and subcellular spatial localization data.
seoTitle: Human Protein Atlas — Skillbook Agents
seoDescription: >-
  Guide for Agents to retrieve protein expression and subcellular localization
  from the Human Protein Atlas.
---


## 📖 Why Do We Need This Skill?

RNA expression (GTEx) indicates if a gene is transcribed — but protein expression directly reflects biological function. The Human Protein Atlas (HPA) provides:

- **Protein expression**: Immunohistochemistry (IHC) staining profiles across major human tissues and organs
- **Subcellular localization**: High-resolution spatial mapping of proteins within cellular compartments (nucleus, cytoplasm, membrane, mitochondria, etc.)
- **Semi-quantitative levels**: Classification into Not detected / Low / Medium / High for each tissue type

## ⚙️ How It Works

```
Gene/Protein name → HPA API → 
Return tissue expression levels + subcellular localization + IHC images
```

1. **Tissue expression**: Semi-quantitative expression levels (Not detected → High) across ~44 normal tissues
2. **Subcellular**: Immunofluorescence-based compartment localization in human cell lines
3. **Pathology**: Staining profiles in ~20 common cancer types

## 🚀 How to use

### Universal

```markdown
# HPA Query Rules
- When protein-level expression is needed (not just RNA) → use HPA.
- Report: tissue expression levels, subcellular localization, and reliability score.
- HPA uses a semi-quantitative scale: Not detected / Low / Medium / High.
- Compare with GTEx RNA data to check RNA-protein correlation.
```

### Cursor (.cursorrules)

```markdown
# Human Protein Atlas
- HPA = protein expression reference (complements GTEx RNA data).
- Reliability: Enhanced (validated), Supported, Approved, Uncertain.
- Subcellular localization is highly useful for drug target assessment.
```

## 💡 Real-World Examples / Scenarios

### 🧑‍💻 Developer:
> "Look up the TP53 protein on the Human Protein Atlas to find its subcellular localization."

### 🤖 AI Agent (Equipped with this Skill):
> "I will connect to the Human Protein Atlas (HPA) database to extract subcellular distribution data for you:"
>
> 1. **Query HPA Antibodies**: I searched for the TP53 protein based on verified HPA antibody profiles.
> 2. **Extract Subcellular Localization**: I analyzed the immunofluorescence staining data and determined that the TP53 protein is localized primarily in the **Nucleus**.
> 3. **Verify Reliability**: I reported the reliability score as "Approved" based on consistent staining across multiple cell lines.
> 4. **Tissue Staining**: I fetched additional immunohistochemistry (IHC) data to report p53 protein levels in cancer versus normal tissues.
>
> *The subcellular spatial mapping and validated antibody information for TP53 are compiled, aiding cellular biology experiments.*

## ⚠️ Gotchas and notes

- **Semi-quantitative**: IHC staining is semi-quantitative, not as precise as mass spectrometry.
- **Antibody-dependent**: Results depend heavily on antibody quality — check the antibody reliability score before concluding.
- **RNA vs Protein Correlation**: Expression levels can differ significantly between RNA (GTEx) and protein (HPA).
- **Normal vs Cancer**: The tissue section covers normal tissues, while cancer staining data is situated in the pathology section.
