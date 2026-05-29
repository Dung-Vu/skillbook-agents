---
slug: "multi-agent-coordinator"
title: "Multi-Agent Coordinator"
command: "/multi-agent-coordinator"
category: "workflow-orchestration"
tags:
  - "multi-agent"
  - "orchestration"
  - "delegation"
complexity: "expert"
platforms:
  - "claude-code"
  - "cursor"
  - "universal"
featured: true
description: "Pattern điều phối nhiều agents chuyên biệt — coordinator dispatches tasks, specialists execute, results merge."
oneLiner: "One brain to orchestrate them all."
sourceUrl: "https://arxiv.org/abs/2308.08155"
sourceAuthor: "Multi-Agent Research"
lastVerified: "2026-05-29"
relatedSkills:
  - "task-decomposition"
  - "error-recovery"
seoTitle: "Multi-Agent Coordinator — Skillbook Agents"
seoDescription: "Pattern điều phối nhiều AI agents chuyên biệt để giải quyết task phức tạp."
---

## 📖 Tại Sao Cần Skill Này?

Một agent không thể giỏi mọi thứ. Giống như team engineering thực tế — frontend dev, backend dev, DevOps — mỗi agent nên chuyên một lĩnh vực.

Khi dùng single agent cho mọi thứ:
- **Context window limit** — quá nhiều skills = overload, performance giảm
- **Jack of all trades** — biết nhiều nhưng không giỏi gì
- **No parallelism** — sequential execution chậm

Multi-Agent pattern: 1 Coordinator + N Specialists = output tốt hơn, nhanh hơn.

## ⚙️ Cách Hoạt Động

```
User Request
    ↓
┌─ COORDINATOR ──────────────────┐
│  1. Analyze task               │
│  2. Decompose into subtasks    │
│  3. Assign to specialists      │
│  4. Monitor progress           │
│  5. Merge results              │
│  6. Quality check              │
└────────┬───────────────────────┘
         ↓
    ┌────┴────┬────────┬─────────┐
    ↓         ↓        ↓         ↓
┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐
│Front │ │Back  │ │Test  │ │Docs  │
│end   │ │end   │ │Agent │ │Agent │
│Agent │ │Agent │ │      │ │      │
└──┬───┘ └──┬───┘ └──┬───┘ └──┬───┘
   ↓         ↓        ↓         ↓
   └─────────┴────────┴─────────┘
                  ↓
         COORDINATOR merges
              ↓
         Final Output
```

## 🚀 Cách Sử Dụng

### Coordinator System Prompt

```markdown
## Multi-Agent Coordination Protocol

You are the COORDINATOR. Your job is to orchestrate, NOT execute.

### Your Responsibilities:
1. **Analyze** the user's request and identify required expertise
2. **Decompose** into independent, parallelizable subtasks
3. **Delegate** each subtask to the appropriate specialist agent
4. **Monitor** each agent's progress and handle failures
5. **Merge** results into a coherent final output
6. **Quality check** the merged result before delivering

### Rules:
- Never do specialist work yourself
- Each subtask must have clear: input, expected output, success criteria
- If a specialist fails, try reassigning or doing error recovery
- Always provide a unified, coherent response — not just concatenated outputs

### Specialist Roster:
- @frontend: React, CSS, UI/UX, accessibility
- @backend: APIs, databases, business logic
- @testing: Unit tests, integration tests, E2E
- @docs: Documentation, README, API docs
- @devops: CI/CD, Docker, deployment
```

## 💡 Ví Dụ Thực Tế

### Task: "Add a comment system to the blog"

```
COORDINATOR analysis:
  Required specialists: @frontend, @backend, @testing

  Subtask 1 → @backend:
    "Create Comment model, API routes (CRUD), 
     input validation with Zod"
    
  Subtask 2 → @frontend:
    "Create CommentSection component, CommentForm,
     optimistic updates, loading states"
    
  Subtask 3 → @testing (after 1 & 2):
    "Write unit tests for API routes,
     integration tests for comment flow"

  Merge plan:
    Backend output + Frontend output → verify integration
    → add tests → final review → deliver
```

## ⚠️ Lưu Ý & Gotchas

- **Overhead** — coordination cost. Đừng dùng cho tasks mà 1 agent xử lý đủ
- **Communication format** — specialists cần output format thống nhất để merge dễ
- **Error propagation** — 1 specialist fail → ảnh hưởng toàn bộ pipeline. Cần fallback
- **Context sharing** — specialists cần biết enough context nhưng không quá nhiều
