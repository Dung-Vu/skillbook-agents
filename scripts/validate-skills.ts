import fs from "fs";
import path from "path";
import matter from "gray-matter";
import tagsWhitelist from "../src/lib/tags-whitelist.json" with { type: "json" };
import { SkillFrontmatterSchema } from "../src/lib/schema.ts";

const SKILLS_DIR = path.join(process.cwd(), "content", "skills");

function validateSkills() {
  if (!fs.existsSync(SKILLS_DIR)) {
    console.error(`Skills directory not found at: ${SKILLS_DIR}`);
    process.exit(1);
  }

  const files = fs.readdirSync(SKILLS_DIR).filter(
    (file) => file.endsWith(".md") && !file.endsWith(".en.md")
  );

  const allSlugs = new Set(files.map((file) => file.replace(/\.md$/, "")));
  const errors: { file: string; error: string }[] = [];
  const relatedSkillsGraph = new Map<string, string[]>();

  console.log(`Analyzing ${files.length} base skill files...`);

  // Phase 1: Load and Validate Frontmatter Schemas
  files.forEach((file) => {
    const filePath = path.join(SKILLS_DIR, file);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const slug = file.replace(/\.md$/, "");

    let parsedMatter;
    try {
      parsedMatter = matter(fileContent);
    } catch (err) {
      errors.push({ file, error: `YAML parse error: ${(err as Error).message}` });
      return;
    }

    const { data, content } = parsedMatter;

    let hasSlugError = false;
    if (data.slug === undefined) {
      errors.push({
        file,
        error: "Missing required 'slug' field in frontmatter.",
      });
      hasSlugError = true;
    } else if (data.slug !== slug) {
      errors.push({
        file,
        error: `Frontmatter slug '${data.slug}' does not match filename slug '${slug}'.`,
      });
      hasSlugError = true;
    }

    const result = SkillFrontmatterSchema.safeParse(data);
    if (!result.success) {
      result.error.issues.forEach((err) => {
        if (err.path[0] === "slug" && hasSlugError) {
          return;
        }
        errors.push({
          file,
          error: `Metadata error [${err.path.join(".")}]: ${err.message}`,
        });
      });
      return;
    }
    if (hasSlugError) {
      return;
    }

    const valData = result.data;
    relatedSkillsGraph.set(slug, valData.relatedSkills);

    // Validate tags against whitelist
    valData.tags.forEach((tag) => {
      if (!tagsWhitelist.includes(tag)) {
        errors.push({
          file,
          error: `Invalid tag: '${tag}' is not in the tags whitelist (src/lib/tags-whitelist.json)`,
        });
      }
    });

    // Validate relatedSkills existence
    valData.relatedSkills.forEach((relatedSlug) => {
      if (!allSlugs.has(relatedSlug)) {
        errors.push({
          file,
          error: `Invalid relatedSkills reference: '${relatedSlug}' does not exist in content/skills/`,
        });
      }
    });

    // Validate H2 Headings structure (flexible checking)
    const h2Lines = content
      .split("\n")
      .filter((line) => line.startsWith("## "))
      .map((line) => line.trim());
    
    // Core H2 Headings (Unified for all providers)
    const expectedH2s = [
      "## 📖 Tại Sao Cần Skill Này?",
      "## ⚙️ Cách Hoạt Động",
      "## 🚀 Cách Sử Dụng",
      "## 💡 Kịch Bản Lập Trình Thực Tế",
      "## ⚠️ Lưu Ý & Gotchas"
    ];

    expectedH2s.forEach((expectedH2) => {
      if (!h2Lines.includes(expectedH2)) {
        errors.push({
          file,
          error: `Missing required heading: '${expectedH2}'`,
        });
      }
    });

    // Validate English Translation file headings if it exists
    const enFile = `${slug}.en.md`;
    const enFilePath = path.join(SKILLS_DIR, enFile);
    if (fs.existsSync(enFilePath)) {
      const enContentRaw = fs.readFileSync(enFilePath, "utf-8");
      const enH2Lines = enContentRaw
        .split("\n")
        .filter((line) => line.startsWith("## "))
        .map((line) => line.trim());

      const expectedEnH2s = [
        "## 📖 Why Do We Need This Skill?",
        "## ⚙️ How It Works",
        "## 🚀 How to use",
        "## 💡 Real-World Examples / Scenarios",
        "## ⚠️ Gotchas and notes"
      ];

      expectedEnH2s.forEach((expectedH2) => {
        if (!enH2Lines.includes(expectedH2)) {
          errors.push({
            file: enFile,
            error: `Missing required English heading: '${expectedH2}'`,
          });
        }
      });
    }
  });

  // Phase 2: Validate relatedSkills Graph for cycles & depth (warning-only or error based on config)
  const isStrictGraph = true; // Set to true to fail build. Note: Current content contains many cycles!
  
  for (const startSlug of relatedSkillsGraph.keys()) {
    try {
      checkGraphFromNode(startSlug, relatedSkillsGraph);
    } catch (err) {
      if (isStrictGraph) {
        errors.push({
          file: `${startSlug}.md`,
          error: `Graph validation error: ${(err as Error).message}`,
        });
      } else {
        console.warn(`[WARNING] relatedSkills graph anomaly on ${startSlug}: ${(err as Error).message}`);
      }
    }
  }

  // Report errors
  if (errors.length > 0) {
    console.error("\n❌ Validation Failed! Found the following errors:");
    errors.forEach((err) => {
      console.error(`- [${err.file}]: ${err.error}`);
    });
    process.exit(1);
  }

  console.log(`\n✅ Validation Successful! All ${files.length} skills and translations are valid.`);
  process.exit(0);
}

function checkGraphFromNode(
  start: string,
  graph: Map<string, string[]>,
  visited: Set<string> = new Set(),
  depth = 0
) {
  if (visited.has(start)) {
    throw new Error(`Circular dependency detected: ${Array.from(visited).join(" -> ")} -> ${start}`);
  }
  if (depth > 3) {
    throw new Error(`Link depth limit (max 3 hops) exceeded via path: ${Array.from(visited).join(" -> ")} -> ${start}`);
  }

  visited.add(start);
  const related = graph.get(start) || [];
  for (const rel of related) {
    if (graph.has(rel)) {
      checkGraphFromNode(rel, graph, new Set(visited), depth + 1);
    }
  }
}

validateSkills();
