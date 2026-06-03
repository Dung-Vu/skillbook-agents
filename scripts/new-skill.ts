import fs from "fs";
import path from "path";

function toTitleCase(str: string): string {
  return str
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function generateNewSkill() {
  const args = process.argv.slice(2);
  let slug = "";
  let provider = "";

  for (let i = 0; i < args.length; i++) {
    if (args[i] === "--slug" && i + 1 < args.length) {
      slug = args[i + 1].trim();
    }
    if (args[i] === "--provider" && i + 1 < args.length) {
      provider = args[i + 1].trim().toLowerCase();
    }
  }

  if (!slug) {
    console.error("Error: --slug is required. Usage: npm run new:skill -- --slug <slug> --provider <minimax|antigravity>");
    process.exit(1);
  }

  if (!/^[a-z0-9-]+$/.test(slug)) {
    console.error("Error: slug must match /^[a-z0-9-]+$/ to prevent path traversal and ensure a clean URL format.");
    process.exit(1);
  }

  if (provider !== "minimax" && provider !== "antigravity") {
    console.error("Error: --provider must be 'minimax' or 'antigravity'.");
    process.exit(1);
  }

  const SKILLS_DIR = path.join(process.cwd(), "content", "skills");
  if (!fs.existsSync(SKILLS_DIR)) {
    fs.mkdirSync(SKILLS_DIR, { recursive: true });
  }

  const viFilePath = path.join(SKILLS_DIR, `${slug}.md`);
  const enFilePath = path.join(SKILLS_DIR, `${slug}.en.md`);

  if (fs.existsSync(viFilePath) || fs.existsSync(enFilePath)) {
    console.error(`Error: Skill files for slug '${slug}' already exist!`);
    process.exit(1);
  }

  const title = toTitleCase(slug);
  const currentDate = new Date().toISOString().split("T")[0];

  // Vietnamese Frontmatter and Content Template
  let viContent = `---
slug: "${slug}"
title: "${title}"
command: "/${slug}"
category: "reasoning-planning"
tags: []
complexity: "starter"
platforms:
  - "universal"
featured: false
description: "Mô tả ngắn gọn về tác dụng và chức năng của kỹ năng (tiếng Việt)."
oneLiner: "One-liner description in English."
sourceUrl: ""
sourceAuthor: "${provider === "minimax" ? "Minimax" : "Skillbook Team"}"
lastVerified: "${currentDate}"
relatedSkills: []
seoTitle: "${title} - ${provider === "minimax" ? "Minimax " : ""}Skill for AI Agents"
seoDescription: "Mô tả SEO bằng tiếng Việt."
provider: "${provider}"
---

`;

  if (provider === "minimax") {
    viContent += `## 📖 Tại Sao AI Agent Của Bạn Cần Kỹ Năng Này?

## ⚙️ Cơ Chế Hoạt Động & Quy Trình Tư Duy

## 🚀 Bộ Quy Tắc Chỉ Dẫn Cho Agent (Prompt Guidelines)

## ⚠️ Cảnh Báo Vận Hành & Mẹo Tối Ưu (Developer Gotchas)
`;
  } else {
    viContent += `## 📖 Tại Sao Cần Skill Này?

## ⚙️ Cách Hoạt Động

## 🚀 Cách Sử Dụng

## 💡 Kịch Bản Lập Trình Thực Tế

## ⚠️ Lưu Ý & Gotchas
`;
  }

  // English Frontmatter and Content Template
  let enContent = `---
title: "${title}"
description: "English translation of description."
oneLiner: "One-liner description in English."
seoTitle: "${title} - ${provider === "minimax" ? "Minimax " : ""}Skill for AI Agents"
seoDescription: "English SEO description."
---

`;

  if (provider === "minimax") {
    enContent += `## 📖 Why Do We Need This Skill?

## ⚙️ How It Works

## 🚀 Agent Guidelines (Prompt Guidelines)

## ⚠️ Gotchas and notes
`;
  } else {
    enContent += `## 📖 Why Do We Need This Skill?

## ⚙️ How It Works

## 🚀 How to use

## 💡 Real-World Examples / Scenarios

## ⚠️ Gotchas and notes
`;
  }

  fs.writeFileSync(viFilePath, viContent, "utf-8");
  fs.writeFileSync(enFilePath, enContent, "utf-8");

  console.log(`Successfully created new skill templates:`);
  console.log(`  - ${viFilePath}`);
  console.log(`  - ${enFilePath}`);
}

generateNewSkill();
