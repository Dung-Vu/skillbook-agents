---
description: Generates visual summaries from complex data or documents using Mermaid
  diagrams, ASCII trees, or comparison tables. Helps developers grasp system architectures
  and workflows instantly.
oneLiner: Transform complex data and documents into clear visual summaries and charts.
seoDescription: Generate HTML visual summaries. Create charts, Mermaid flowcharts,
  and structured data views linked via media tags.
seoTitle: Visual Summary - Minimax Skill for AI Agents
title: Visual Summary
---

## 📖 Why Do We Need This Skill?

When dealing with complex system architectures, sequence flows, or large comparison matrices, text-based markdown is difficult to scan. This skill enables agents to proactively generate a beautiful, responsive HTML page containing interactive charts or Mermaid diagrams, delivered directly in chat.

---

## ⚙️ How It Works

The visual summary creation workflow:
1. **Choose Page Mode**: Select the appropriate layout: Data UI (dashboards, tables), Report (warm cream bg, serif headings), or Terminal (dark-slate mono view).
2. **Style Typography & Palette**: Apply professional fonts (Outfit, DM Serif Display) and clean accent tones. Banned colors include pure black `#000` and bright AI gradients.
3. **Build Visual Components**: Embed inline SVGs, CSS bench-bars, timeline steps, or load Mermaid for diagrams containing 4+ nodes.
4. **Write File & Emit Tag**: Generate a self-contained HTML file and output the `<media>` tag with the absolute path to render the preview.

Flowchart:
```
[Complex Data Input] ➔ 📐 [Select Layout Mode & Color Palette] ➔ 💻 [Generate Self-Contained HTML]
                         ➔ 🧪 [Assert Mobile Responsive & SVG Icons] ➔ 🖼️ [Emit <media> tag in chat]
```

---

## 🚀 Agent Guidelines (Prompt Guidelines)

```markdown
# VISUAL SUMMARY RULES
- **No ASCII Art Diagrams**: Banned: box-drawing ASCII diagrams. Use Mermaid (for 4+ nodes) or inline SVGs.
- **No Emoji Icons**: Do not use emojis as icons. Implement inline SVGs from lucide.dev with `currentColor`.
- **Media Tag Delivery**: Deliver the final HTML file via a standalone `<media type="file" src="..." caption="..." />` line.
- **Mobile Responsive**: Ensure layouts scale gracefully on mobile screens without causing horizontal scrollbars.
```

---

## ⚠️ Gotchas and notes

* **CORS issues with external resources**: Avoid referencing CDN assets (JS/CSS/Fonts) from untrusted or restricted domains. Stick to well-known CDNs like `cdn.tailwindcss.com` or inline style blocks.
* **Mermaid rendering latency**: Large Mermaid diagrams (more than 20 nodes) can cause visual lag or delayed layout calculations. In these cases, consider decomposing the diagram or pre-rendering to inline SVG for performance.
