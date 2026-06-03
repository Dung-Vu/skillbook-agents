import { z } from "zod";

export const ALLOWED_CATEGORIES = [
  "reasoning-planning",
  "code-engineering",
  "tool-integration",
  "content-communication",
  "research-analysis",
  "safety-guardrails",
  "persona-behavior",
  "workflow-orchestration",
  "creative-design",
  "data-knowledge",
  "bioinformatics-genomics",
  "mobile-development",
] as const;

export const ALLOWED_COMPLEXITIES = ["starter", "intermediate", "advanced", "expert"] as const;

export const ALLOWED_PLATFORMS = [
  "cursor",
  "claude-code",
  "windsurf",
  "gemini-cli",
  "copilot",
  "openai-codex",
  "universal",
  "mcp",
  "minimax-cli",
] as const;

export const SkillFrontmatterSchema = z.object({
  slug: z.string().min(1, "Slug cannot be empty"),
  title: z.string().min(1, "Title cannot be empty"),
  command: z.string(),
  category: z.enum(ALLOWED_CATEGORIES, {
    message: `Category must be one of: ${ALLOWED_CATEGORIES.join(", ")}`,
  }),
  tags: z.array(z.string()),
  complexity: z.enum(ALLOWED_COMPLEXITIES, {
    message: `Complexity must be one of: ${ALLOWED_COMPLEXITIES.join(", ")}`,
  }),
  platforms: z.array(z.string()).refine(
    (arr) => arr.every((p) => ALLOWED_PLATFORMS.includes(p as any)),
    { message: `Platforms must only contain values from: ${ALLOWED_PLATFORMS.join(", ")}` }
  ),
  featured: z.boolean(),
  description: z.string().min(5, "Description is too short"),
  oneLiner: z.string().min(5, "One-liner is too short"),
  sourceUrl: z.string().refine(
    (val) => val === "" || z.string().url().safeParse(val).success,
    { message: "sourceUrl must be a valid URL or empty string" }
  ),
  sourceAuthor: z.string(),
  lastVerified: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "lastVerified must be in YYYY-MM-DD format"),
  relatedSkills: z.array(z.string()),
  seoTitle: z.string(),
  seoDescription: z.string(),
  provider: z.enum(["antigravity", "minimax"], {
    message: "Provider must be 'antigravity' or 'minimax'",
  }),
  changelog: z.array(
    z.string().regex(/^\d{4}-\d{2}-\d{2}: .+$/, "Changelog entry must be in format 'YYYY-MM-DD: Description'")
  ).optional(),
});

export type SkillFrontmatter = z.infer<typeof SkillFrontmatterSchema>;
