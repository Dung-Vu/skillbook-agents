---
title: PPTX Generator
description: >-
  Generate, edit, and read PowerPoint presentations. Create from scratch with
  PptxGenJS or edit existing decks via XML workflows.
oneLiner: Generate and manipulate PowerPoint slide decks programmatically.
seoTitle: PPTX Generator - Minimax Skill for AI Agents
seoDescription: >-
  Build PowerPoint generation and editing capabilities into AI Agents using
  PptxGenJS and Python-pptx workflows.
---

## 📖 Why Do We Need This Skill?

AI Agents often communicate summaries in markdown, but business users require PowerPoint presentations for meetings. This skill enables the Agent to design layouts, select colors, insert graphics, and compile fully functional `.pptx` files programmatically.

## ⚙️ How It Works

The PowerPoint build process:
```
Text content ──> PptxGenJS Code Generation ──> File Compilation ──> Style & Spacing Verification ──> Output Delivery
```
1. **Theme Setup**: Choose background, typography hierarchy, margins, and accent colors.
2. **Code Generation**: Generate a node/browser script calling PptxGenJS functions to add slides and shape objects.
3. **Deconstruct & Edit**: Unpack PPTX archives to modify internal XML layout files for custom template edits.
4. **Extraction**: Utilize python utilities like `markitdown` to ingest and parse existing presentations.

## 🚀 How to use

- Always implement strict spacing checks: ensure text bounding boxes do not overlap and titles have padding.
- Maintain consistent theme configurations across all slides in a deck (color palette, header heights, slide numbers).
- Use proper font sizing: Title (36-40pt), Subtitle (20-24pt), Body Text (14-16pt), Footnotes (8-10pt).

## 💡 Real-World Examples / Scenarios

### Developer:
> "Guide me on how to configure and deploy the PPTX Generator skill to Generate and manipulate PowerPoint slide decks programmatically."

### AI Agent (Equipped with Skill):
> "I have initialized the configuration. Here is the execution flow for the PPTX Generator skill:
> 1. Set up the environment variables and structure the inputs as specified.
> 2. Execute the workflow steps and integrate core components.
> 3. Verify results, optimize performance, and return the finalized assets."

## ⚠️ Gotchas and notes

- **Corrupt PPTX zips**: When writing XML directly, ensure strict schema compliance to prevent Microsoft PowerPoint from showing 'file is damaged' errors.
- **Overflowing text**: Check text lengths dynamically and auto-create continuation slides for lengthy bullet lists.
