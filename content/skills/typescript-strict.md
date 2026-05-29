---
slug: "typescript-strict"
title: "TypeScript Strict Mode"
command: "/typescript-strict"
category: "code-engineering"
tags:
  - "typescript"
  - "type-safety"
  - "code-quality"
complexity: "starter"
platforms:
  - "cursor"
  - "claude-code"
  - "windsurf"
  - "universal"
featured: false
description: "Buộc agent viết TypeScript strict — no any, explicit types, proper generics, và exhaustive pattern matching."
oneLiner: "Zero any, zero compromise."
sourceUrl: "https://cursor.directory"
sourceAuthor: "Community"
lastVerified: "2026-05-29"
relatedSkills:
  - "nextjs-expert"
  - "senior-engineer"
seoTitle: "TypeScript Strict — Skillbook Agents"
seoDescription: "Skill buộc agent viết TypeScript với strict mode và type safety tối đa."
---

## 📖 Tại Sao Cần Skill Này?

Agent mặc định thường "lười" về types — dùng `any` cho nhanh, skip generics, và không nghĩ về type narrowing. Kết quả: code compile được nhưng runtime errors ngồi đầy.

Khi không có TypeScript Strict:
- **`any` everywhere** — mất hoàn toàn type safety
- **Missing return types** — function có thể return anything
- **No null checks** — `Cannot read property of undefined` liên tục
- **Poor DX** — IDE autocomplete không hoạt động vì types sai

## ⚙️ Cách Hoạt Động

Skill này thiết lập một bộ quy tắc strict cho agent khi viết TypeScript:

1. **No `any`** — mọi value đều phải có type cụ thể
2. **Explicit return types** — trên exported functions và API handlers
3. **Const assertions** — `as const` thay vì enums
4. **Discriminated unions** — cho state management và error handling
5. **Utility types** — `Pick`, `Omit`, `Partial` thay vì duplicate interfaces

## 🚀 Cách Sử Dụng

### Universal

```markdown
## TypeScript Strict Rules

- NEVER use `any`. Use `unknown` if type is truly dynamic, then narrow.
- Always add explicit return types on exported functions.
- Prefer `interface` for object shapes, `type` for unions/intersections.
- Use `as const` objects instead of enums:
  ```ts
  const Status = { ACTIVE: "active", INACTIVE: "inactive" } as const;
  type Status = (typeof Status)[keyof typeof Status];
  ```
- Use discriminated unions for state:
  ```ts
  type Result<T> = 
    | { success: true; data: T }
    | { success: false; error: string };
  ```
- Use `satisfies` for type checking without widening.
- Prefer optional chaining (?.) and nullish coalescing (??) over manual checks.
- Always handle all cases in switch statements (use `never` for exhaustive checks).
```

## 💡 Ví Dụ Thực Tế

### ❌ Không strict:

```typescript
function fetchUser(id: any) {
  return fetch(`/api/users/${id}`).then(r => r.json())
}
// Return type: Promise<any> — zero type safety
```

### ✅ Strict:

```typescript
interface User {
  id: string;
  name: string;
  email: string;
}

async function fetchUser(id: string): Promise<User> {
  const response = await fetch(`/api/users/${id}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch user: ${response.status}`);
  }
  return response.json() as Promise<User>;
}
// Return type explicit, input typed, error handled
```

## ⚠️ Lưu Ý & Gotchas

- **Đôi khi `any` là unavoidable** — thêm comment `// TODO: type this` để track
- **Đừng over-type** — TypeScript infers tốt. Không cần `const x: string = "hello"`
- **Library types** — một số thư viện có types kém. Dùng `@types/*` hoặc tự declare
