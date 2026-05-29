---
slug: "error-recovery"
title: "Error Recovery & Graceful Degradation"
command: "/error-recovery"
category: "safety-guardrails"
tags:
  - "error-handling"
  - "resilience"
  - "retry"
complexity: "intermediate"
platforms:
  - "cursor"
  - "claude-code"
  - "windsurf"
  - "universal"
featured: false
description: "Agent tự phát hiện lỗi, thử lại với approach khác, và không bao giờ dừng lại mà không giải thích."
oneLiner: "Fail gracefully, recover automatically."
sourceUrl: "https://github.com/anthropics/skills"
sourceAuthor: "Anthropic"
lastVerified: "2026-05-29"
relatedSkills:
  - "self-reflection"
  - "task-decomposition"
seoTitle: "Error Recovery — Skillbook Agents"
seoDescription: "Skill giúp agent tự phục hồi khi gặp lỗi và không bao giờ fail silently."
---

## 📖 Tại Sao Cần Skill Này?

Agent gặp lỗi là chuyện thường — API timeout, file không tồn tại, syntax sai. Vấn đề là agent xử lý lỗi đó như thế nào.

Khi không có Error Recovery:
- **Agent dừng lại hoàn toàn** — "I can't do this" và không thử cách khác
- **Fail silently** — lỗi xảy ra nhưng agent giả vờ mọi thứ OK
- **Không learn from errors** — gặp cùng lỗi, lặp lại cùng approach sai

Skill này biến agent thành resilient — fail, learn, retry, succeed.

## ⚙️ Cách Hoạt Động

```
Attempt Task
    ↓
Success? ──Yes──→ Return Result
    │
    No
    ↓
┌─ Error Analysis ──────────────┐
│  1. Identify error type        │
│  2. Determine if retryable     │
│  3. Choose recovery strategy   │
└────────────┬──────────────────┘
             ↓
      ┌──────┴──────┐
      │  Strategy    │
      ├─────────────┤
      │ • Retry with │
      │   different  │
      │   approach   │
      │ • Fallback   │
      │   to simpler │
      │   solution   │
      │ • Ask user   │
      │   for help   │
      └──────┬──────┘
             ↓
      Retry (max 3 attempts)
```

## 🚀 Cách Sử Dụng

### Universal

```markdown
## Error Recovery Protocol

When encountering an error:

1. **Don't panic**: Analyze the error message carefully
2. **Classify**: Is it a syntax error, runtime error, permission issue, or data problem?
3. **Retry strategy**:
   - Syntax error → fix the specific issue and retry
   - API error → try alternative endpoint or different approach
   - Permission error → explain what access is needed
   - Data error → validate inputs and try with sanitized data
4. **Fallback**: If the ideal approach fails after 2 attempts, 
   try a simpler alternative that still solves the core problem
5. **Communicate**: Always tell the user:
   - What failed
   - Why it failed
   - What you tried instead
   - What the user can do to help (if needed)

NEVER: 
- Silently ignore errors
- Give up without trying at least one alternative
- Pretend an error didn't happen
```

## 💡 Ví Dụ Thực Tế

### ❌ Không có Error Recovery:

```
Agent: *tries to install package*
Error: EACCES permission denied
Agent: "I encountered an error. Please try again later."
```

### ✅ Có Error Recovery:

```
Agent: *tries to install package*
Error: EACCES permission denied

Agent: "Permission denied khi install globally. 
Let me try a different approach:
1. Attempt: npx instead of global install → Success!

Using npx to run the package directly instead of 
global installation. This avoids the permission issue 
and is actually the recommended approach."
```

## ⚠️ Lưu Ý & Gotchas

- **Max 3 retries** — tránh infinite loop. Sau 3 lần, hỏi user
- **Đừng retry blindly** — cùng approach, cùng input = cùng lỗi. Phải thay đổi strategy
- **Log everything** — mỗi attempt và error đều cần được report cho user
- **Know when to stop** — có lỗi không thể recover (disk full, network down). Agent cần biết dừng và báo
