---
title: "Video Story Generator"
description: "Automated video story generator. Sets story plots, designs storyboards, creates consistent audio/image assets, and compiles the final video using FFmpeg."
oneLiner: "Generate cohesive video stories by compiling scripts, voiceovers, images, and FFmpeg layouts."
seoTitle: "Video Story Generator - Minimax Skill for AI Agents"
seoDescription: "Implement storyboard scripting, character-consistent image generation, and FFmpeg assembly workflows on AI Agents."
---

## 📖 Why Do We Need This Skill?

Creating narrative videos requires multiple independent steps: scriptwriting, voiceover synthesis, image generation, and video editing. This skill automates the pipeline, allowing the Agent to draft scripts, create character-consistent image assets, convert text to speech, and merge everything into a finished `.mp4` video.

## ⚙️ How It Works

The video production pipeline:
```
Story Concept --> Scene Storyboarding --> Asset Generation (Image/TTS) --> FFmpeg Assembly --> MP4 Output
```
1. **Scripting**: Draft the story outline and break it down into timed scenes.
2. **Storyboard Design**: Define visual descriptions, text-to-speech voice scripts, and transitions for each scene.
3. **Asset Generation**: Call image creators (referencing characters) and TTS utilities to synthesize dialog clips.
4. **FFmpeg Compilation**: Generate and execute shell scripts using FFmpeg filters to scale images, apply transitions, overlay subtitles, and sync audio tracks.
5. **Delivery**: Save the resulting video file and present the local path to the user.

## 🚀 Agent Guidelines (Prompt Guidelines)

- Maintain strict character consistency across scenes using explicit visual cues and seed controls.
- Calculate audio durations dynamically to set matching video frame display times.
- Ensure FFmpeg scripts handle variable image dimensions defensively by using `scale` and `pad` filters to standard 1920x1080 resolution.

## ⚠️ Gotchas and notes

- **Audio-Video Desync**: Do not hardcode fixed durations. Always inspect generated MP3 lengths before assembly.
- **CLI String Limit**: For long videos with many parts, use FFmpeg's concat text file mode (`-f concat`) instead of long terminal arguments.
