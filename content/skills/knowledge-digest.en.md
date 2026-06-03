---
title: "Knowledge Digest"
description: "Converts textbooks or PDFs into personalized, multimodal interactive learning materials including handwritten notes, quiz webpages, slides, audio courses, and mind maps."
oneLiner: "Convert textbooks and learning materials into personalized multimodal content."
seoTitle: "Knowledge Digest - Minimax Skill for AI Agents"
seoDescription: "Guide for integrating multimodal learning content converter skills (quizzes, slides, mindmaps, audio) for AI Agents."
---

## 📖 Why Do We Need This Skill?

While AI Agents are excellent at reading and summarizing texts, they lack the ability to create structured, visual, and multimodal educational content. This skill enables the Agent to analyze complex textbooks and automatically generate optimized formats such as handwritten notes (PDF), interactive quizzes (HTML), slides (PDF/PPTX), mind maps (Mermaid/PNG), and audio courses (MP3) adjusted to the learner's level.

## ⚙️ How It Works

The workflow consists of 4 main phases:
```
Input Source (PDF/Text) ──> Structural & Concept Analysis ──> Generate Multimodal Assets ──> Deliver Assets
```
1. **Gather Input**: Identify source document, learner's grade level (elementary, middle school, high school, university, professional), and target formats.
2. **Content Analysis**: Parse chapters, extract core concepts, definitions, formulas, and assess difficulty levels.
3. **Asset Generation**: Synthesize notes, interactive quiz, slides, mind map, and audio course matching the user's level and interests.
4. **Deliver Assets**: Provide local file paths using the `<deliver_assets>` format without inline autoplay or image rendering in the chat.

## 🚀 Agent Guidelines (Prompt Guidelines)

- Adapt language, tone, and visual density based on the target Grade Level (e.g., lively and story-based for Elementary; professional and high-density for University).
- Handwritten notes must use a maximum of 2 colors (default: blue and pink) and look like natural hand-drawn annotations.
- SVG diagrams must be used for slides instead of decorative placeholder images. Avoid blue/purple themes in slides by default.
- Quizzes must be self-contained HTML files with minimal styling and instant JavaScript validation feedback.

## ⚠️ Gotchas and notes

- **Fidelity Constraint**: Do not introduce external unverified facts; strictly adhere to the provided source text.
- **Delivery Protocol**: Never embed images, PDFs, or audio players directly in the chat window. Always use the `<deliver_assets>` format.
- **Annotation Density**: Restrict annotations on handwritten notes to 3-8 per page to keep it clean and readable.
