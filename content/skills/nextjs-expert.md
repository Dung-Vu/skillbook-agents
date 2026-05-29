---
slug: "nextjs-expert"
title: "Next.js Expert"
command: "/nextjs-expert"
category: "code-engineering"
tags:
  - "nextjs"
  - "react"
  - "typescript"
  - "app-router"
complexity: "intermediate"
platforms:
  - "cursor"
  - "claude-code"
  - "windsurf"
featured: true
description: "Biến agent thành Next.js specialist với App Router, RSC, TypeScript strict, và production best practices."
oneLiner: "Your agent becomes a Next.js senior dev."
sourceUrl: "https://cursor.directory"
sourceAuthor: "Community"
lastVerified: "2026-05-29"
relatedSkills:
  - "typescript-strict"
  - "test-driven-dev"
seoTitle: "Next.js Expert — Skillbook Agents"
seoDescription: "Skill biến agent thành Next.js specialist với App Router và TypeScript best practices."
---

## 📖 Tại Sao Cần Skill Này?

Next.js thay đổi nhanh — App Router, Server Components, Server Actions, streaming, PPR — mỗi phiên bản mới có breaking changes. Agent được train trên data cũ sẽ viết code theo patterns lỗi thời.

Khi không có skill này:
- **Dùng Pages Router patterns** trong App Router project
- **Client Component everywhere** — không tận dụng Server Components
- **Sai API** — dùng `getServerSideProps` thay vì native async components
- **Missing best practices** — không dùng `loading.tsx`, `error.tsx`, metadata API

Skill này inject kiến thức Next.js mới nhất vào agent, biến nó thành specialist.

## ⚙️ Cách Hoạt Động

Skill hoạt động như một "cheat sheet" được inject vào system prompt, cung cấp:

1. **Architecture rules** — khi nào dùng Server vs Client Components
2. **API patterns** — cách đúng để fetch data, handle forms, manage state
3. **File conventions** — `page.tsx`, `layout.tsx`, `loading.tsx`, `error.tsx`
4. **Performance patterns** — streaming, Suspense, dynamic imports

## 🚀 Cách Sử Dụng

### Cursor (.cursorrules)

```markdown
# Next.js App Router Expert

## Architecture
- Server Components by DEFAULT. Only add 'use client' when component needs:
  - useState, useEffect, or other hooks
  - Browser APIs (window, document)
  - Event handlers (onClick, onChange)
  - Third-party client libraries

## Data Fetching
- Use async Server Components for data fetching (no useEffect + fetch)
- Use Server Actions for mutations (forms, data updates)
- params and searchParams are Promises — always await them

## File Conventions
- Every route segment should have: page.tsx, loading.tsx, error.tsx
- Use layout.tsx for shared UI between sibling routes
- Use route groups (folder) for organization without URL impact

## TypeScript
- Strict mode always
- Use PageProps<'/path'> for page component props
- Explicit return types on exported functions

## Performance
- Use dynamic() for heavy client components
- Use next/image for all images
- Use next/font for font loading
- Implement Suspense boundaries for streaming
```

### Claude Code

```markdown
# Claude Code Next.js Rules
- Server Components by default.
- Always use server actions for mutations.
```

### Windsurf (.windsurfrules)

```markdown
# Windsurf Next.js Rules
- Strict TypeScript.
- Optimize image sizes.
```

## 💡 Ví Dụ Thực Tế

### ❌ Không có skill (outdated patterns):

```tsx
// ❌ Client-side fetching in App Router
'use client'
import { useEffect, useState } from 'react'

export default function Page() {
  const [data, setData] = useState(null)
  useEffect(() => {
    fetch('/api/posts').then(r => r.json()).then(setData)
  }, [])
  return <div>{data?.title}</div>
}
```

### ✅ Có skill (modern patterns):

```tsx
// ✅ Server Component with async data fetching
export default async function Page() {
  const data = await fetch('https://api.example.com/posts', {
    next: { revalidate: 3600 }
  }).then(r => r.json())
  
  return <div>{data.title}</div>
}
```

## ⚠️ Lưu Ý & Gotchas

- **Cập nhật theo version** — Next.js release cycle nhanh, cần verify skill content phù hợp version đang dùng
- **Project-specific** — mỗi project có conventions riêng, skill này là baseline, cần customize thêm
- **Đọc AGENTS.md** — Next.js 15+ tự generate AGENTS.md với docs mới nhất, luôn ưu tiên đọc file đó
