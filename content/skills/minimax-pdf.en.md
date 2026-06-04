---
description: >-
  Performs read and write operations on PDF documents. Guides text extraction,
  layout parsing, search, and generation of PDF files using compatible standard
  libraries.
oneLiner: Extract content from and generate PDF documents reliably.
seoDescription: >-
  Bilingual PDF processing guide for AI Agents. Covers text extraction
  (pdfplumber/vision), LaTeX compiling, and clickable TOC creation.
seoTitle: Minimax PDF - Minimax Skill for AI Agents
title: Minimax PDF
---

## 📖 Why Do We Need This Skill?

PDF documents are notoriously difficult to parse and generate layout-faithfully. This skill equips agents with robust extraction workflows (using pdfplumber or vision models for financial tables), LaTeX academic compilation recipes, and clickable Table of Contents (TOC) creation guidelines.

---

## ⚙️ How It Works

The PDF skill workflow is:
1. **Check Pitfalls Index**: Match the user request against the 10 canonical query templates (P1-P10) in `docs/pitfalls-index.md` and copy the prompt structure.
2. **Execute Read or Write Route**:
   - Read: Default to `pdfplumber`. If charts or complex tables are present, escalate to `read_pdf_vision.py` processing one page per call.
   - Write: Choose HTML-to-PDF, LaTeX compilation, or AcroForm filling using pypdf writer clone.
3. **Verify Deliverable**: Verify page sizes via `pdfinfo`, check embedded images via `pdfimages`, and test clickable TOC links.

Flowchart:
```
[PDF Task] ➔ 🔍 [Match Pitfalls Index] ➔ 📖 [Read: pdfplumber / Vision (One page/call)]
              ➔ 📝 [Write: HTML-to-PDF / LaTeX / Forms] ➔ 🧪 [Validate Page Size & TOC Links]
```

---

## 🚀 How to use

```markdown
# MINIMAX PDF OPERATION RULES
- **No stderr suppression**: Never append `2>/dev/null` to PDF shell commands. Redirect to log files if outputs are noisy.
- **Mandatory Clickable TOC**: Every multi-page PDF generated must include a clickable table of contents using internal anchors or outline bookmarks.
- **Vision Escalation**: For pages containing charts or complex financial tables, processing via `read_pdf_vision.py` page-by-page is mandatory.
- **AcroForm Fill Pattern**: Fill PDF forms only using `PdfWriter(clone_from=src)` and `update_page_form_field_values(...)`.
```

---

## 💡 Real-World Examples / Scenarios

### Developer:
> "Guide me on how to configure and deploy the Minimax PDF skill to Extract content from and generate PDF documents reliably."

### AI Agent (Equipped with Skill):
> "I have initialized the configuration. Here is the execution flow for the Minimax PDF skill:
> 1. Set up the environment variables and structure the inputs as specified.
> 2. Execute the workflow steps and integrate core components.
> 3. Verify results, optimize performance, and return the finalized assets."

## ⚠️ Gotchas and notes

* **Missing CJK Fonts**: When compiling PDF from HTML on headless systems, make sure CJK fonts are installed; otherwise, text renders as empty squares.
* **Chart.js Animation Renders**: Chromium might screenshot HTML pages before charts finish animating. Disable animations in Chart.js config or add delays before print.
