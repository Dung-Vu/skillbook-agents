import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Skill, SkillFrontmatter } from "@/types/skill";

const SKILLS_DIR = path.join(process.cwd(), "content", "skills");

export function getSkillSlugs(): string[] {
  if (!fs.existsSync(SKILLS_DIR)) return [];
  return fs
    .readdirSync(SKILLS_DIR)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));
}

export function getSkillBySlug(slug: string): Skill | null {
  const filePath = path.join(SKILLS_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  return {
    ...(data as SkillFrontmatter),
    slug,
    content,
  };
}

export function getAllSkills(): Skill[] {
  const slugs = getSkillSlugs();
  return slugs
    .map((slug) => getSkillBySlug(slug))
    .filter((skill): skill is Skill => skill !== null)
    .sort((a, b) => {
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return a.title.localeCompare(b.title);
    });
}

export function getSkillsByCategory(category: string): Skill[] {
  return getAllSkills().filter((skill) => skill.category === category);
}

export function getRelatedSkills(skill: Skill): Skill[] {
  if (!skill.relatedSkills || skill.relatedSkills.length === 0) return [];
  return skill.relatedSkills
    .map((slug) => getSkillBySlug(slug))
    .filter((s): s is Skill => s !== null);
}

export function getSkillCount(): number {
  return getSkillSlugs().length;
}

export function getSkillCountByCategory(): Record<string, number> {
  const skills = getAllSkills();
  const counts: Record<string, number> = {};
  for (const skill of skills) {
    counts[skill.category] = (counts[skill.category] || 0) + 1;
  }
  return counts;
}
