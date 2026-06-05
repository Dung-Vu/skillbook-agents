import fs from "fs";
import path from "path";
import matter from "gray-matter";

const SKILLS_DIR = path.join(process.cwd(), "content", "skills");

function pruneSkills() {
  if (!fs.existsSync(SKILLS_DIR)) {
    console.error(`Skills directory not found at: ${SKILLS_DIR}`);
    process.exit(1);
  }

  // Load all base skills (ignore english override files)
  const files = fs.readdirSync(SKILLS_DIR).filter(
    (file) => file.endsWith(".md") && !file.endsWith(".en.md")
  );

  interface SkillData {
    provider?: string;
    slug?: string;
    relatedSkills?: string[];
    [key: string]: unknown;
  }

  const skillDataMap = new Map<string, { filePath: string; data: SkillData; content: string }>();

  // Read all frontmatters and default missing provider / slug fields
  files.forEach((file) => {
    const filePath = path.join(SKILLS_DIR, file);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const slug = file.replace(/\.md$/, "");
    const parsed = matter(fileContent);
    
    // Auto-fill missing provider
    if (!parsed.data.provider) {
      parsed.data.provider = "antigravity";
    }
    
    // Auto-fill missing slug
    if (!parsed.data.slug) {
      parsed.data.slug = slug;
    }

    skillDataMap.set(slug, {
      filePath,
      data: parsed.data,
      content: parsed.content,
    });
  });

  const prunedEdges: { from: string; to: string; reason: string }[] = [];

  let changed = true;
  while (changed) {
    changed = false;

    // Build the current graph from the state
    const graph = new Map<string, string[]>();
    for (const [slug, info] of skillDataMap.entries()) {
      graph.set(slug, info.data.relatedSkills || []);
    }

    // Traverse the graph from each node to find the first violation
    let violation: { from: string; to: string; reason: string } | null = null;

    function findViolation(
      curr: string,
      pathSet: string[],
      depth = 0
    ): boolean {
      const idx = pathSet.indexOf(curr);
      if (idx !== -1) {
        // Cycle detected
        const from = pathSet[pathSet.length - 1];
        violation = {
          from,
          to: curr,
          reason: `Circular dependency detected: ${pathSet.join(" -> ")} -> ${curr}`,
        };
        return true;
      }
      if (depth > 3) {
        // Depth violation
        const from = pathSet[pathSet.length - 1];
        violation = {
          from,
          to: curr,
          reason: `Link depth limit (>3 hops) exceeded via path: ${pathSet.join(" -> ")} -> ${curr}`,
        };
        return true;
      }

      const related = graph.get(curr) || [];
      for (const rel of related) {
        if (graph.has(rel)) {
          if (findViolation(rel, [...pathSet, curr], depth + 1)) {
            return true;
          }
        }
      }
      return false;
    }

    for (const slug of graph.keys()) {
      if (findViolation(slug, [])) {
        break;
      }
    }

    if (violation) {
      const { from, to, reason } = violation;
      // Prune edge from -> to
      const info = skillDataMap.get(from)!;
      const originalRelated = info.data.relatedSkills || [];
      info.data.relatedSkills = originalRelated.filter((s: string) => s !== to);
      prunedEdges.push({ from, to, reason });
      changed = true;
    }
  }

  // Write changes back to disk
  for (const [, info] of skillDataMap.entries()) {
    const updatedContent = matter.stringify(info.content, info.data);
    fs.writeFileSync(info.filePath, updatedContent, "utf-8");
  }

  const logLines = [
    `Pruning completed. Total pruned edges: ${prunedEdges.length}`,
    ...prunedEdges.map(edge => `Pruned edge: ${edge.from} -> ${edge.to} (${edge.reason})`)
  ];

  fs.writeFileSync("pruned_list_clean.txt", logLines.join("\n"), "utf-8");
  console.log(`Pruning completed. Log written to pruned_list_clean.txt. Total pruned edges: ${prunedEdges.length}`);
}

pruneSkills();
