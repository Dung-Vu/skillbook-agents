---
description: >-
  Reads, parses, and extracts structural data from PowerPoint (`.pptx`)
  presentations. Supports slide layout traversal, reading speaker notes, and
  extracting embedded media.
oneLiner: 'Parse slide structures, text, and speaker notes from PowerPoint (.pptx) files.'
seoDescription: >-
  PowerPoint (.pptx) file generation and inspection. Implement PptxGenJS slides,
  handle layout coordinates, and execute QA checks.
seoTitle: Minimax PPTX - Minimax Skill for AI Agents
title: Minimax PPTX
---

## 📖 Why Do We Need This Skill?

Creating PowerPoint (`.pptx`) decks programmatically often leads to text overflows, aspect-ratio issues, or layout breaks. This skill provides explicit 16x9 canvas constraints, modular slide generation rules using JavaScript (PptxGenJS), and guidelines for parsing and editing existing templates safely.

---

## ⚙️ How It Works

The PPTX processing flow is:
1. **Analyze Design Identity**: Audit the template using `audit_pptx.py --sections themes,masters` to extract theme colors and typography details.
2. **Build Modular Slides**: Create individual `slide-XX.js` files exporting a synchronous `createSlide(pres, theme)` function.
3. **Enforce Boundaries**: Ensure all element coordinates sit within the strict 16x9 layout box (10.0" width x 5.625" height).
4. **Compile & QA Check**: Create `compile.js` to bundle slides, verify output parameters against the QA checklist, and write the final file.

Flowchart:
```
[PPTX Request / Template] ➔ 🔍 [Run audit_pptx.py for design clues] ➔ 📐 [Write modular slide JS (Max 10" x 5.625")]
                              ➔ 💻 [Run compile.js to output PPTX] ➔ 🧪 [Execute QA checks & numbering]
```

---

## 🚀 How to use

```markdown
# MINIMAX PPTX CONSTRAINTS
- **Aspect Ratio & Bounds**: Use `LAYOUT_16x9` (10" wide x 5.625" tall). Elements must satisfy `x + w <= 10.0` and `y + h <= 5.625`.
- **Synchronous Slide Modules**: Each slide module must export a synchronous `createSlide()` function. Do not use `async` / `await` within slides.
- **Color Formatting**: Hex colors must be 6-character strings without the `#` prefix (e.g. `22223b`). Do not encode opacity.
- **Page Numbers**: Mandatory on all non-cover slides near coordinates x: 9.3, y: 5.1.
```

---

## 💡 Real-World Examples / Scenarios

### Developer:
> "Guide me on how to configure and deploy the Minimax PPTX skill to Parse slide structures, text, and speaker notes from PowerPoint (.pptx) files."

### AI Agent (Equipped with Skill):
> "I have initialized the configuration. Here is the execution flow for the Minimax PPTX skill:
> 1. Set up the environment variables and structure the inputs as specified.
> 2. Execute the workflow steps and integrate core components.
> 3. Verify results, optimize performance, and return the finalized assets."

## ⚠️ Gotchas and notes

* **Dark-Mode Template Flipped Colors**: When imitating dark templates, make sure `bg` maps to the dark color and `primary` to the light text color to avoid printing invisible text.
* **Screenshot OS limitations**: Automatic slide rendering to images is macOS-only and requires `soffice` and `swiftc` dependencies to compile CLI tools.
