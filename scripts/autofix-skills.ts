import fs from "fs";
import path from "path";

const SKILLS_DIR = path.join(process.cwd(), "content", "skills");

function autofixSkills() {
  if (!fs.existsSync(SKILLS_DIR)) {
    console.error(`Skills directory not found at: ${SKILLS_DIR}`);
    process.exit(1);
  }

  const files = fs.readdirSync(SKILLS_DIR).filter((file) => file.endsWith(".md"));
  let fixCount = 0;

  console.log(`Scanning and fixing emojis/headings in ${files.length} files...`);

  files.forEach((file) => {
    const filePath = path.join(SKILLS_DIR, file);
    const content = fs.readFileSync(filePath, "utf-8");
    let updatedContent = content;

    const isEnglish = file.endsWith(".en.md");

    if (isEnglish) {
      // English replacements
      updatedContent = updatedContent
        .replace(/^## 🧠\s*Why Do We Need This Skill\??/gm, "## 📖 Why Do We Need This Skill?")
        .replace(/^## 🧠\s*Why is this skill needed\??/gm, "## 📖 Why Do We Need This Skill?")
        .replace(/^## ⚙️\s*How It Works/gm, "## ⚙️ How It Works")
        .replace(/^## 📜\s*Agent Guidelines \(Prompt Guidelines\)/gm, "## 🚀 Agent Guidelines (Prompt Guidelines)")
        .replace(/^## 🚀\s*How to use/gm, "## 🚀 How to use")
        .replace(/^## 💡\s*Real-World Examples \/ Scenarios/gm, "## 💡 Real-World Examples / Scenarios")
        .replace(/^## ⚠️\s*Gotchas and notes/gm, "## ⚠️ Gotchas and notes");
    } else {
      // Vietnamese replacements
      updatedContent = updatedContent
        .replace(/^## 🧠\s*Tại Sao AI Agent Của Bạn Cần Kỹ Năng Này\??/gm, "## 📖 Tại Sao AI Agent Của Bạn Cần Kỹ Năng Này?")
        .replace(/^## 🧠\s*Tại Sao Cần Skill Này\??/gm, "## 📖 Tại Sao Cần Skill Này?")
        .replace(/^## 🧠\s*Tại Sao Cần Kỹ Năng Này\??/gm, "## 📖 Tại Sao Cần Kỹ Năng Này?")
        .replace(/^## ⚙️\s*Cơ Chế Hoạt Động & Quy Trình Tư Tư Duy/gm, "## ⚙️ Cơ Chế Hoạt Động & Quy Trình Tư Duy")
        .replace(/^## ⚙️\s*Cơ Chế Hoạt Động & Quy Trình Tư Duy/gm, "## ⚙️ Cơ Chế Hoạt Động & Quy Trình Tư Duy")
        .replace(/^## ⚙️\s*Cách Hoạt Động/gm, "## ⚙️ Cách Hoạt Động")
        .replace(/^## 📜\s*Bộ Quy Tắc Chỉ Dẫn Cho Agent \(Prompt Guidelines\)/gm, "## 🚀 Bộ Quy Tắc Chỉ Dẫn Cho Agent (Prompt Guidelines)")
        .replace(/^## 📜\s*Chỉ Dẫn Cho Agent \(Prompt Guidelines\)/gm, "## 🚀 Bộ Quy Tắc Chỉ Dẫn Cho Agent (Prompt Guidelines)")
        .replace(/^## 🚀\s*Cách Sử Dụng/gm, "## 🚀 Cách Sử Dụng")
        .replace(/^## 🚀\s*Cách sử dụng/gm, "## 🚀 Cách Sử Dụng")
        .replace(/^## 💡\s*Kịch Bản Lập Trình Thực Tế/gm, "## 💡 Kịch Bản Lập Trình Thực Tế")
        .replace(/^## 💡\s*Kịch bản lập trình thực tế/gm, "## 💡 Kịch Bản Lập Trình Thực Tế")
        .replace(/^## ⚠️\s*Lưu Ý & Gotchas/gm, "## ⚠️ Lưu Ý & Gotchas")
        .replace(/^## ⚠️\s*Lưu ý & Gotchas/gm, "## ⚠️ Lưu Ý & Gotchas")
        .replace(/^## ⚠️\s*Cảnh Báo Vận Hành & Mẹo Tối Ưu \(Developer Gotchas\)/gm, "## ⚠️ Cảnh Báo Vận Hành & Mẹo Tối Ưu (Developer Gotchas)");
    }

    if (updatedContent !== content) {
      fs.writeFileSync(filePath, updatedContent, "utf-8");
      console.log(`  [FIXED]: ${file}`);
      fixCount++;
    }
  });

  console.log(`\nDone! Successfully updated ${fixCount} files.`);
}

autofixSkills();
