---
title: "HTML Presentation Generator"
description: "Generate professional multi-page HTML presentations (PPT) exportable to PDF/PPTX. Covers color palettes, layouts, SVG decorations, and slide templates."
oneLiner: "Create professional HTML-based slides and export to PDF."
seoTitle: "HTML Presentation Generator - Minimax Skill for AI Agents"
seoDescription: "Automated HTML/CSS slide deck generation tool, optimized for clean responsive printing and PDF/PPTX conversions."
---

## 📖 Why Do We Need This Skill?

Standard PowerPoint design is manual and easily loses layouts across systems. By constructing slides as standardized HTML pages (fixed 960x540 canvas), the agent can script pixel-perfect presentations that render beautifully on any browser and export to PDF flawlessly.

## ⚙️ How It Works

The slide deck creation pipeline follows:

```
[Topic & Content Research] -> [Color/Font Palette Selection] -> [Generate Slide HTML Files] -> [Add SVG Visuals] -> [Export PDF/PPTX]
```

1. **Content Draft**: Researches the topic and designs the slide outline.
2. **Theming**: Chooses a tailored color scheme and locks typography to Times New Roman.
3. **Coding**: Generates individual slide files, adding SVG layouts, timelines, or data charts.

## 🚀 Agent Guidelines (Prompt Guidelines)

1. Keep each slide within a strict, standalone HTML file styled to fixed dimensions of 960x540 pixels.
2. Lock the typography font family to **Times New Roman** for all text.
3. Draw geometric layouts using inline SVG code rather than external images to keep the PDF output vector-sharp.

## ⚠️ Gotchas and notes

- **Content Overflow**: Excess copy will spill out of the fixed 960x540 frame. Limit text volume to under 60 words per slide.
- **Printer Render Flaws**: Complex CSS grids or modern filters might break during PDF conversion. Stick to standard flexbox layouts for positioning.
