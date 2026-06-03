import { type SkillFrontmatter } from "../lib/schema";

export type CategoryId =
  | "reasoning-planning"
  | "code-engineering"
  | "tool-integration"
  | "content-communication"
  | "research-analysis"
  | "safety-guardrails"
  | "persona-behavior"
  | "workflow-orchestration"
  | "creative-design"
  | "data-knowledge"
  | "bioinformatics-genomics"
  | "mobile-development";

export type { SkillFrontmatter };


export interface SkillEnglishOverride {
  title: string;
  description: string;
  oneLiner: string;
  seoTitle: string;
  seoDescription: string;
  content: string;
}

export interface Skill extends SkillFrontmatter {
  content: string;
  en?: SkillEnglishOverride;
}

export interface CategoryConfig {
  id: CategoryId;
  label: string;
  icon: string;
  color: string;
  description: string;
  order: number;
}

export const COMPLEXITY_CONFIG = {
  starter: { label: "Starter", color: "#22c55e", dot: "🟢" },
  intermediate: { label: "Intermediate", color: "#3b82f6", dot: "🔵" },
  advanced: { label: "Advanced", color: "#f97316", dot: "🟠" },
  expert: { label: "Expert", color: "#ef4444", dot: "🔴" },
} as const;

export const PLATFORM_CONFIG = {
  cursor: { label: "Cursor", color: "#00d4aa" },
  "claude-code": { label: "Claude Code", color: "#d97706" },
  windsurf: { label: "Windsurf", color: "#6366f1" },
  "gemini-cli": { label: "Gemini CLI", color: "#4285f4" },
  copilot: { label: "Copilot", color: "#6e40c9" },
  "openai-codex": { label: "OpenAI Codex", color: "#10a37f" },
  universal: { label: "Universal", color: "#8b5cf6" },
  mcp: { label: "MCP", color: "#ec4899" },
  "minimax-cli": { label: "Minimax CLI", color: "#f43f5e" },
} as const;

export type ComplexityLevel = keyof typeof COMPLEXITY_CONFIG;
export type PlatformId = keyof typeof PLATFORM_CONFIG;
