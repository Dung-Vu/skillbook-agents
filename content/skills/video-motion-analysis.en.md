---
title: "Video Motion Analysis"
description: "Professional video motion and posture analysis. Extracts keyframes, estimates body poses, renders stickman skeletons, and delivers improvement recommendations."
oneLiner: "Extract keyframes, analyze human motion, and draw stickman pose diagrams from video files."
seoTitle: "Video Motion Analysis - Minimax Skill for AI Agents"
seoDescription: "Implement video posture diagnostics, keyframe extraction, and stickman visualization workflows on AI Agents."
---

## 📖 Why Do We Need This Skill?

Analyzing human athletic posture, physical therapy motions, or industrial ergonomics requires slow-motion evaluation, frame parsing, and skeletal overlays. This skill enables the Agent to extract key transition frames, sketch stickman skeletons reflecting joint positions, and output posture corrections.

## ⚙️ How It Works

The movement analysis flow:
```
Raw Video Source --> Keyframe Selection --> Skeletal Joint Estimation --> Draw Stickman Overlay --> Posture Diagnostics
```
1. **Video Ingestion**: Parse input path, identifying target actions (e.g., squat form, tennis swing).
2. **Keyframe Extraction**: Slice video into key transitions (start, mid-action, peak extension, landing).
3. **Skeletal Plotting**: Construct stickman coordinates marking head, shoulders, hips, knees, and ankles.
4. **Metrics Analysis**: Measure critical angles (e.g. knee flexion) and provide target corrections.

## 🚀 Agent Guidelines (Prompt Guidelines)

- Skeletal stickman diagrams must use bright contrast colors (red, lime, yellow) to be clearly visible against clothing.
- Measure and state exact degree angles of joints rather than using vague words (e.g., 'your knee is bent too much').
- Package the generated pose frames and stickman diagrams cleanly, returning local paths via `<deliver_assets>`.

## ⚠️ Gotchas and notes

- **Occlusion**: Warn users if loose clothing or poor camera angles hide joint positions, which compromises analysis.
- **Processing Time**: Keep analysis clips short (under 30 seconds) to prevent script execution timeouts.
