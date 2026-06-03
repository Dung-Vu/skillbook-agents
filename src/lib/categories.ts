import { CategoryConfig, CategoryId } from "@/types/skill";

export const CATEGORIES: Record<CategoryId, CategoryConfig> = {
  "reasoning-planning": {
    id: "reasoning-planning",
    label: "Reasoning & Planning",
    icon: "🧩",
    color: "#a78bfa",
    description:
      "Skills giúp agent suy luận, lập kế hoạch, và ra quyết định",
    order: 1,
  },
  "code-engineering": {
    id: "code-engineering",
    label: "Code Generation & Engineering",
    icon: "💻",
    color: "#34d399",
    description:
      "Skills biến agent thành coding expert cho từng framework/ngôn ngữ",
    order: 2,
  },
  "tool-integration": {
    id: "tool-integration",
    label: "Tool Use & Integration",
    icon: "🔌",
    color: "#60a5fa",
    description: "MCP servers, API connectors, và external tool patterns",
    order: 3,
  },
  "content-communication": {
    id: "content-communication",
    label: "Content & Communication",
    icon: "✍️",
    color: "#fbbf24",
    description: "Technical writing, documentation, và content generation",
    order: 4,
  },
  "research-analysis": {
    id: "research-analysis",
    label: "Research & Analysis",
    icon: "🔭",
    color: "#f472b6",
    description: "Web research, data analysis, và fact-checking patterns",
    order: 5,
  },
  "safety-guardrails": {
    id: "safety-guardrails",
    label: "Safety & Guardrails",
    icon: "🛡️",
    color: "#f87171",
    description: "Input validation, permission control, và error recovery",
    order: 6,
  },
  "persona-behavior": {
    id: "persona-behavior",
    label: "Persona & Behavior",
    icon: "🤖",
    color: "#c084fc",
    description:
      "Role-based prompts, communication style, và domain expertise",
    order: 7,
  },
  "workflow-orchestration": {
    id: "workflow-orchestration",
    label: "Workflow & Orchestration",
    icon: "🚀",
    color: "#2dd4bf",
    description: "Multi-agent coordination, pipeline, và state management",
    order: 8,
  },
  "creative-design": {
    id: "creative-design",
    label: "Creative & Design",
    icon: "🪄",
    color: "#fb923c",
    description: "UI generation, image prompting, và creative assistance",
    order: 9,
  },
  "data-knowledge": {
    id: "data-knowledge",
    label: "Data & Knowledge",
    icon: "📊",
    color: "#38bdf8",
    description: "RAG, knowledge bases, data transformation, và vector search",
    order: 10,
  },
  "bioinformatics-genomics": {
    id: "bioinformatics-genomics",
    label: "Bioinformatics & Genomics",
    icon: "🧬",
    color: "#14b8a6",
    description:
      "Protein analysis, variant annotation, gene databases, và structural biology",
    order: 11,
  },
  "mobile-development": {
    id: "mobile-development",
    label: "Mobile Development",
    icon: "📱",
    color: "#a3e635",
    description: "Android/iOS development tools, SDKs, và device management",
    order: 12,
  },
} as const;

export function getCategoryById(id: CategoryId): CategoryConfig | undefined {
  return CATEGORIES[id];
}

export function getSortedCategories(): CategoryConfig[] {
  return Object.values(CATEGORIES).sort((a, b) => a.order - b.order);
}
