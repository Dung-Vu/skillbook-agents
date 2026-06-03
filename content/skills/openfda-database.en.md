---
title: "OpenFDA Drug & Safety Data"
description: "Query official FDA data on drug adverse events, product recalls, labeling guidelines, and medical device registrations."
oneLiner: "Query FDA labeling, adverse events, and approval records."
seoTitle: "OpenFDA Drug & Safety Data — Skillbook Agents"
seoDescription: "Guide for Agents to query openFDA for drug adverse events, recalls, and regulatory data."
---


## 📖 Why Do We Need This Skill?

openFDA provides open-access API access to official US FDA records — including adverse event reports (FAERS), drug recalls, labeling instructions, approvals, shortages, and medical device clearances.

- **Adverse events (FAERS)**: Monitor side effects reported by patients and healthcare providers
- **Drug labeling**: Access FDA-approved labels containing indications, contraindications, and warnings
- **Recalls & enforcements**: Track product recalls and safety warning justifications
- **510(k) clearances**: Retrieve medical device approvals
- **28 API endpoints**: Spans drugs, devices, food, tobacco, cosmetics, and veterinary products

## ⚙️ How It Works

```
Drug name / NDC / Query → openFDA REST API → 
Return adverse events, labeling, recalls, approval data
```

## 🚀 How to use

### Universal

```markdown
# openFDA Rules
- Adverse events: count by reaction, seriousness, outcome.
- Drug labeling: indications_and_usage, warnings, contraindications.
- Report source: FAERS reports are voluntary — not complete surveillance.
- 28 endpoints available — specify which type of data needed.
```

## 💡 Real-World Examples / Scenarios

### 🧑‍💻 Developer:
> "Check recent serious adverse event reports associated with the pain reliever Ibuprofen on openFDA."

### 🤖 AI Agent (Equipped with this Skill):
> "I will query the US FDA openFDA API to compile a pharmacovigilance report:"
>
> 1. **Configure Search Filters**: I structured a query filtering for active ingredient `ibuprofen` over the past 6 months.
> 2. **Aggregate Statistics**: I analyzed thousands of reports to identify the most common serious side effects (e.g., acute kidney injury, gastrointestinal hemorrhage, skin rashes).
> 3. **Demographic Analysis**: I broke down the event distribution by patient age and gender.
> 4. **Safety Summary**: I structured a tabular summary displaying clinical risk signals useful for researchers and clinicians.
>
> *The safety report from official FDA records is prepared, helping you optimize clinical risk assessment.*

## ⚠️ Gotchas and notes

- **Voluntary Reporting**: The FAERS database relies on voluntary reporting — under-reporting is highly common.
- **Report ≠ Causation**: An adverse event record indicates a temporal association; it does not prove the drug caused the event.
- **Lack of Denominator**: Total exposure metrics are missing, so you cannot compute absolute incidence rates.
- **US Centric**: openFDA is limited to US FDA records. Regulatory data from other countries requires alternative sources.
