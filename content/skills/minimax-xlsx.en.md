---
description: >-
  Processes, analyzes, and writes Excel spreadsheet (`.xlsx`) files. Provides a
  library cookbook and decision tree (e.g., pandas vs openpyxl) based on data
  size and target operation.
oneLiner: Read and write Excel (.xlsx) sheets using optimized libraries.
seoDescription: >-
  Professional Excel (.xlsx) processing. Standard guide on pandas/openpyxl,
  writing live formulas, and running recalculation.
seoTitle: Minimax XLSX - Minimax Skill for AI Agents
title: Minimax XLSX
---

## 📖 Why Do We Need This Skill?

Excel spreadsheets are fundamental for financial models and business operations. This skill enforces the "Formula-first" principle (representing all computed values as live formulas rather than static values) and leverages LibreOffice headless recalculations to ensure data accuracy upon delivery.

---

## ⚙️ How It Works

The XLSX development and verification loop:
1. **Select Library**: Choose tools based on size (pandas/polars for reading raw datasets, openpyxl for editing styles and inserting formulas).
2. **Apply Formula-first**: Write derived values as live Excel formulas (e.g. `=AVERAGE(B2:B12)`) instead of pre-computed numbers in Python.
3. **Format Aesthetics**: Use accounting color conventions (blue text for manual inputs, black text for formulas, green for cross-sheet links).
4. **Recalculate & Verify**: Run `recalc.py` to evaluate formulas headless in LibreOffice, validating that `total_errors == 0`.

Flowchart:
```
[Raw Data Input] ➔ 📊 [Load via pandas / polars] ➔ ✍️ [Write Formulas & Styles via openpyxl]
                     ➔ 🎨 [Apply Cell Color Coding] ➔ 🔄 [Run recalc.py & Verify No Errors]
```

---

## 🚀 How to use

```markdown
# EXCEL FORMULA-FIRST RULES
- **Formula-First regime**: Write all calculated metrics as live `=...` formulas. Never write pre-computed numbers from Python calculations.
- **Recalculation is mandatory**: Run `python scripts/recalc.py <output.xlsx>` to evaluate formula values. Deliveries with un-evaluated formulas fail.
- **Data Integrity**: Never call `df.head(N)` or down-sample large datasets. Write full row counts to maintain correct aggregations.
- **Native Summaries**: Construct summaries using Excel-native pivots or `=SUMIFS`/`=COUNTIFS` rather than pandas `groupby` written as values.
```

---

## 💡 Real-World Examples / Scenarios

### Developer:
> "Guide me on how to configure and deploy the Minimax XLSX skill to Read and write Excel (.xlsx) sheets using optimized libraries."

### AI Agent (Equipped with Skill):
> "I have initialized the configuration. Here is the execution flow for the Minimax XLSX skill:
> 1. Set up the environment variables and structure the inputs as specified.
> 2. Execute the workflow steps and integrate core components.
> 3. Verify results, optimize performance, and return the finalized assets."

## ⚠️ Gotchas and notes

* **Cached Value Gaps**: openpyxl writes formulas as strings but does not compute cached results. Users opening spreadsheets in non-Excel viewers will see 0 or blanks without recalculation.
* **Merged Cells Traversal**: openpyxl only stores values in the top-left cell of a merged region. Iterating over other cells in the range returns `None`. Unmerge before parsing values.
