---
title: dbSNP Variant Lookup
description: >-
  Look up SNP and indel details using rsIDs or genomic coordinates, and fetch
  allele frequencies and disease associations.
oneLiner: Query and map short genetic variants in the dbSNP database.
seoTitle: dbSNP Variant Lookup — Skillbook Agents
seoDescription: >-
  Guide for Agents to look up SNPs and indels in dbSNP, mapping between rsID,
  genomic coordinates, and HGVS.
---


## 📖 Why Do We Need This Skill?

dbSNP is the global registry for short genetic variants — each variant is assigned a unique **rsID** (e.g., rs1234567). It acts as the "ID number" of the variant, widely used in GWAS, clinical reports, and research papers.

- **ID resolution**: Convert between rsID ↔ genomic coordinates ↔ HGVS notation
- **Allele frequency**: Fetch allele frequencies across global and population-specific cohorts
- **Clinical significance**: Links to ClinVar, associated genes, and molecular variant consequences

## ⚙️ How It Works

```
rsID / Coordinates / HGVS → dbSNP API → 
Return variant details (type, genes, frequencies, clinical significance)
```

1. **Input**: rsID (rs123), VCF format (chr:pos:ref:alt), or HGVS string
2. **Query**: NCBI dbSNP REST API
3. **Output**: Variant type (SNV/indel), gene associations, allele frequencies (GRCh38), and clinical links

## 🚀 How to use

### Universal

```markdown
# dbSNP Lookup Rules
- When the user provides an rsID → query dbSNP to get coordinates, gene, and allele frequency.
- When the user provides genomic coordinates → query dbSNP to find the corresponding rsID.
- Report: variant type, gene, allele frequency, and clinical significance if available.
- Output coordinates must always be on GRCh38.
```

### Cursor (.cursorrules)

```markdown
# dbSNP
- dbSNP is the first step when the user provides an rsID — resolve to coordinates before using other tools.
- Allele frequency helps distinguish common vs. rare variants (MAF < 1% = rare).
- Cross-reference with ClinVar for clinical interpretation.
```

## 💡 Real-World Examples / Scenarios

### 🧑‍💻 Developer:
> "Look up the SNP rs121912651 on dbSNP to get its genomic coordinates and biological consequences."

### 🤖 AI Agent (Equipped with this Skill):
> "I will query and analyze this variant on dbSNP using the following automated steps:"
>
> 1. **Launch dbSNP API**: I sent a query to the NCBI Entrez API to fetch details for rs121912651.
> 2. **Map Genomic Coordinates**: I mapped the variant to human chromosome 17 (GRCh38 assembly) and retrieved the nucleotide change HGVS.
> 3. **Evaluate Biological Consequences**: I analyzed the variant function, locating it within the **TP53** gene as a missense variant (p.Arg273Cys) affecting the DNA-binding domain.
> 4. **Extract Allele Frequencies**: I fetched allele frequencies from the 1000 Genomes project and gnomAD to report its genetic prevalence.
>
> *The detailed dbSNP variant information has been compiled, helping you annotate NGS data accurately.*

## ⚠️ Gotchas and notes

- **rsID Merges**: Deprecated rsIDs are merged into active ones — dbSNP automatically handles redirects.
- **GRCh38 default**: Output coordinates are on GRCh38. If hg19 is used, perform liftover coordinates.
- **Common ≠ Benign**: Common variants (MAF > 1%) can still contribute to disease risk (e.g., APOE ε4).
- **Clinical vs Frequency**: dbSNP supplies allele frequency, ClinVar supplies pathogenicity — combine both.
