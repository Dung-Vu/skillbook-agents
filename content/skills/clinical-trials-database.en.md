---
title: "ClinicalTrials.gov Search"
description: "Search clinical trials by condition, intervention, sponsor, recruiting status, and study locations."
oneLiner: "Query the ClinicalTrials.gov clinical trials registry."
seoTitle: "ClinicalTrials.gov Search — Skillbook Agents"
seoDescription: "Guide for Agents to search and analyze clinical trials using the ClinicalTrials.gov APIv2."
---


## 📖 Why Do We Need This Skill?

ClinicalTrials.gov is the largest registry for clinical trials — containing >480,000 trials worldwide. Crucial for tracking drug development, patient matching, and competitive intelligence.

- **Search trials**: By condition, drug/intervention, location, phase, or status
- **Trial details**: Protocol, eligibility criteria, study outcomes, and sponsor details
- **Recruiting trials**: Find active trials recruiting patients for matching
- **Portfolio analysis**: Aggregate all trials sponsored by a company
- **Count/aggregate**: Statistics of trials across conditions, phases, and years

## ⚙️ How It Works

```
Search query → ClinicalTrials.gov APIv2 → 
Return trial list, details, eligibility, statistics
```

## 🚀 How to use

### Universal

```markdown
# ClinicalTrials.gov Rules
- Search by: condition, intervention, location, phase, status, sponsor.
- NCT ID (NCTxxxxxxxx) cho direct trial lookup.
- Trial phases: Phase 1 (safety) → Phase 2 (efficacy) → Phase 3 (confirmation) → Phase 4 (post-market).
- Status: Recruiting, Active, Completed, Terminated, Withdrawn.
```

## 💡 Real-World Examples / Scenarios

### 🧑‍💻 Developer:
> "Find the latest Phase III trials recruiting Alzheimer's patients for monoclonal antibody treatments."

### 🤖 AI Agent (Equipped with this Skill):
> "I will query the ClinicalTrials.gov registry using the following automated workflow:"
>
> 1. **Build Query Structure**: I set filters for Condition (Alzheimer's Disease), Phase (Phase 3), Status (Recruiting), and Intervention keyword (Monoclonal Antibody).
> 2. **Fetch and Parse**: I retrieved matching trials, extracting NCT ID, title, sponsor, and eligibility criteria (Inclusion/Exclusion).
> 3. **Compile Report**: I structured a list of prominent trials (e.g., Donanemab, Lecanemab studies) alongside active sites and coordinator contact details.
>
> *You will receive an updated, real-time list of clinical trials supporting your patient matching or clinical research research project.*

## ⚠️ Gotchas and notes

- **Registration ≠ Quality**: All trials must register, but scientific quality and outcomes vary widely.
- **Status Lag**: Trial status on ClinicalTrials.gov may lag by several weeks compared to actual site status.
- **Results**: Not all trials publish results to the registry — check PubMed for peer-reviewed papers.
- **APIv2**: Always use APIv2 (modern) rather than classic API (deprecated).
