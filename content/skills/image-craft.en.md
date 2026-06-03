---
title: "Image Craft"
description: "Curated image generation assistant covering characters, scenes, products, and style transformations for generating high-quality stylized 3D images."
oneLiner: "Generate high-quality 3D and stylized product images using AI."
seoTitle: "Image Craft - Minimax Skill for AI Agents"
seoDescription: "AI image generation prompt engineer: designing chibi, 3D toy, claymation, and product ad mockups with professional studio lighting."
---

## 📖 Why Do We Need This Skill?

Writing image generation prompts without technical terms often yields generic or low-quality results. This skill acts as a specialized prompt engineer, transforming basic user concepts into detailed prompts utilizing professional camera angles, lighting setup, and material descriptors across 17 curated styles.

## ⚙️ How It Works

The image crafting workflow follows:

```
[Idea Input] -> [Select from 17 Styles] -> [Apply Prompt Template] -> [Call Image API] -> [Deliver Asset]
```

1. **Style Selection**: Identifies which of the 17 custom styles (e.g. Claymation, Knolling, Low-Poly) best fits the task.
2. **Prompt Composition**: Assembles prompt templates using predefined tags for focal length, studio lighting, and render engines.
3. **Render**: Triggers the generation tool and renders the image asset.

## 🚀 Agent Guidelines (Prompt Guidelines)

1. Automatically adjust text overlays on images to match the user's conversation language.
2. Keep chat interaction extremely concise; omit pleasantries and return the image asset tag directly.
3. Enforce the structural requirements of the chosen category template (Character, Scene, Product, or Transformation).

## ⚠️ Gotchas and notes

- **Typographical Errors**: Text generation inside image models is frequently misspelled. Alert the user if they request precise text overlays.
- **Style Contradiction**: Combining contradictory style tags (e.g., 'photorealistic' and 'low-poly') confuses the model. Keep the prompt styling coherent.
