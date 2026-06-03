---
title: "Nano Banana Pro"
description: "Generate/edit images with Nano Banana Pro (Gemini 3 Pro Image API). Supports text-to-image and image-to-image workflows at high resolutions (1K/2K/4K)."
oneLiner: "Advanced image generation and editing using the Gemini 3 Pro Image engine."
seoTitle: "Nano Banana Pro - Minimax Skill for AI Agents"
seoDescription: "Build image generation and transformation workflows for AI agents using the Nano Banana Pro API wrapper."
---

## 📖 Why Do We Need This Skill?

Visual AI workflows require precise programmatic control over image creation and editing. This skill provides a wrapper for Google's Gemini 3 Pro Image API, allowing agents to generate new concepts, edit existing images, perform inpainting/outpainting, and control dimensions and ratios.

## ⚙️ How It Works

The api execution flow:
```
Prompt / Input Image ──> CLI Command (Absolute Path) ──> API Execution ──> Resolution Scaling ──> Output Saved
```
1. **Command parsing**: Parse prompts, image paths (`--input-image`), and resolution targets (1K/2K/4K).
2. **Mode selection**: Route requests to text-to-image or image-to-image editing scripts.
3. **Execution**: Invoke python CLI scripts using absolute paths to prevent environment errors.
4. **Export**: Write generated PNG/JPG to the destination directory and return file paths.

## 🚀 Agent Guidelines (Prompt Guidelines)

- Always run image generation scripts using their absolute path; never change directories (`cd`) beforehand.
- Define explicit resolutions when calling the script to maintain asset quality (e.g., `--resolution 2K`).
- Use target prompts that specify lighting, focal length, styles, and high fidelity properties for consistent output.

## ⚠️ Gotchas and notes

- **Relative path errors**: Avoid referencing files relatively as it breaks terminal execution. Use full local paths.
- **API limits**: Be mindful of rate limits for high-resolution image generation tasks and implement proper retry mechanisms.
