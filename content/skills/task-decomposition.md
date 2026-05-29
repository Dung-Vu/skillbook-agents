---
slug: "task-decomposition"
title: "Task Decomposition"
command: "/task-decomposition"
category: "reasoning-planning"
tags:
  - "planning"
  - "complex-tasks"
  - "subtasks"
complexity: "intermediate"
platforms:
  - "cursor"
  - "claude-code"
  - "windsurf"
  - "universal"
featured: false
description: "Phân tách task phức tạp thành subtasks có thể thực thi. Pattern: Analyze → Divide → Prioritize → Execute."
oneLiner: "Break big problems into small, solvable pieces."
sourceUrl: "https://arxiv.org/abs/2305.10601"
sourceAuthor: "Plan-and-Solve Research"
lastVerified: "2026-05-29"
relatedSkills:
  - "chain-of-thought"
  - "self-reflection"
seoTitle: "Task Decomposition — Skillbook Agents"
seoDescription: "Skill phân tách task phức tạp thành subtasks nhỏ để agent xử lý chính xác hơn."
---

## 📖 Tại Sao Cần Skill Này?

Yêu cầu "Build me a full authentication system" là quá lớn cho một bước xử lý. Agent sẽ bị overwhelm, bỏ sót, hoặc tạo ra code không coherent.

Khi không có Task Decomposition:
- **Incomplete implementation** — agent "quên" phần nào đó vì task quá lớn
- **Không có thứ tự ưu tiên** — làm cái dễ trước, bỏ qua cái quan trọng
- **Khó debug** — khi output sai, không biết sai ở bước nào

Task Decomposition biến 1 task lớn thành N subtasks nhỏ, mỗi subtask có scope rõ ràng và có thể verify độc lập.

## ⚙️ Cách Hoạt Động

```
Complex Task
    ↓
┌─ Analyze ──────────────────┐
│  Hiểu scope + requirements  │
└────────────┬───────────────┘
             ↓
┌─ Divide ───────────────────┐
│  Tách thành subtasks        │
│  ├── Subtask 1 (atomic)     │
│  ├── Subtask 2 (atomic)     │
│  └── Subtask N (atomic)     │
└────────────┬───────────────┘
             ↓
┌─ Prioritize ───────────────┐
│  Sắp xếp theo dependency    │
│  & importance               │
└────────────┬───────────────┘
             ↓
┌─ Execute ──────────────────┐
│  Thực hiện từng subtask      │
│  Verify sau mỗi bước        │
└────────────────────────────┘
```

## 🚀 Cách Sử Dụng

### Cursor / Claude Code / Windsurf

```markdown
## Task Decomposition Protocol

When receiving a complex task (>2 files or >50 lines of change):

1. **Analyze**: Restate the task and identify all requirements
2. **Decompose**: Break into subtasks, each should be:
   - Atomic (can be done in one step)
   - Testable (has clear success criteria)
   - Independent (minimal dependency on other subtasks)
3. **Order**: Arrange subtasks by dependency (what must be done first?)
4. **Execute**: Complete each subtask fully before moving to the next
5. **Checkpoint**: After each subtask, verify it works before continuing

Format your plan as a numbered checklist before starting work.
```

## 💡 Ví Dụ Thực Tế

### Input: "Add user authentication to this Next.js app"

### Agent's Decomposition:

```
📋 Task: Add user authentication

Subtasks:
  1. □ Install dependencies (next-auth, bcrypt)
  2. □ Create User model in Prisma schema
  3. □ Run database migration
  4. □ Create auth API route (/api/auth/[...nextauth])
  5. □ Create login page UI
  6. □ Create registration page UI
  7. □ Add session provider to root layout
  8. □ Create auth middleware for protected routes
  9. □ Add login/logout buttons to header
  10. □ Test full flow: register → login → access protected → logout

Executing subtask 1/10...
```

## ⚠️ Lưu Ý & Gotchas

- **Đừng decompose quá nhỏ** — "Import React" không cần là 1 subtask riêng
- **Sweet spot: 5-15 subtasks** cho một feature lớn
- **Dependency matters** — subtask 3 (migration) phải sau subtask 2 (schema)
- **Kết hợp với `/chain-of-thought`** — CoT cho reasoning trong mỗi subtask
