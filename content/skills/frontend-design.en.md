---
title: "Frontend Design"
description: "Create distinctive, production-grade frontend interfaces with high design quality. Generates creative, polished code and UI design that avoids generic AI aesthetics."
oneLiner: "Design and build stunning, production-ready frontend interfaces."
seoTitle: "Frontend Design - Minimax Skill for AI Agents"
seoDescription: "Develop exceptional frontend interfaces using Tailwind CSS, focusing on visual hierarchy, accessibility, and unique aesthetics."
---

## 📖 Why Do We Need This Skill?

Default AI-generated code often defaults to boilerplate layouts, muted color palettes, and sterile visual components (known as 'AI slop'). This skill directs the agent to establish a clear aesthetic direction (e.g., brutalist, retro-futuristic, editorial) and execute it with refined code and micro-interactions.

## ⚙️ How It Works

The frontend design process flows through:

```
[UI Requirement] -> [Choose Aesthetic Direction] -> [Define Theme & Colors] -> [Draft Layout & Spacing] -> [Clean Code & Animation]
```

1. **Aesthetic Direction**: Pinpoints a specific design theme matching the product's tone.
2. **Design Tokens**: Standardizes custom palettes, typography scale, and border radius variables.
3. **Development**: Implements semantic markup and Tailwind classes with polished transition timings.

## 🚀 Agent Guidelines (Prompt Guidelines)

1. Write mobile-first, responsive layouts utilizing Tailwind's breakpoint prefixes consistently.
2. Manage dynamic Tailwind classes using a helper function like `cn(clsx + twMerge)`.
3. Avoid arbitrary styling values (e.g., `w-[347px]`); stick to the spacing scale tokens provided by Tailwind.

## ⚠️ Gotchas and notes

- **Animation Overload**: Excess motion ruins usability and degrades performance. Keep animations subtle and fast (150ms-300ms duration).
- **Clashing Colors**: Random color choices look cheap. Stick to a curated palette consisting of a primary, secondary, neutral, and accent color.
