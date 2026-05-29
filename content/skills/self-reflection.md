---
slug: "self-reflection"
title: "Self Reflection"
command: "/self-reflection"
category: "reasoning-planning"
tags:
  - "review"
  - "accuracy"
  - "quality-control"
complexity: "starter"
platforms:
  - "cursor"
  - "claude-code"
  - "windsurf"
  - "universal"
featured: true
description: "Agent tự review và phản biện output của chính mình trước khi trả lời, bắt lỗi mà lần đầu bỏ sót."
oneLiner: "Review your own work before submitting."
sourceUrl: "https://arxiv.org/abs/2303.11366"
sourceAuthor: "Reflexion Research"
lastVerified: "2026-05-29"
relatedSkills:
  - "chain-of-thought"
  - "task-decomposition"
seoTitle: "Self Reflection — Skillbook Agents"
seoDescription: "Skill giúp agent tự review và sửa lỗi output trước khi trả lời."
---

## 📖 Tại Sao Cần Skill Này?

Bạn có bao giờ submit code rồi 5 phút sau mới nhận ra bug rõ ràng? Agent cũng vậy — nhưng nó không có "5 phút sau" nếu không được dạy tự review.

Khi không có Self Reflection:
- **Lỗi hiển nhiên bị bỏ qua** — typo, logic errors, missing imports
- **Không consistent** — output lần 1 khác lần 2 vì không có self-check
- **Overconfidence** — agent tự tin trả lời sai mà không biết

Self Reflection tạo một vòng feedback nội bộ: Agent → Output → Review → Fix → Final Output.

## ⚙️ Cách Hoạt Động

```
Generate Initial Response
        ↓
┌─── Self-Review Loop ───┐
│  1. Check correctness   │
│  2. Check completeness  │
│  3. Check edge cases    │
│  4. Check consistency   │
└────────┬────────────────┘
         ↓
   Found Issues?
    ├── Yes → Fix & Re-review
    └── No  → Output Final Response
```

Pattern này được gọi là **Reflexion** trong nghiên cứu — agent đạt **+15% accuracy** trên coding benchmarks nhờ tự phát hiện và sửa lỗi.

## 🚀 Cách Sử Dụng

### Universal (mọi platform)

```markdown
## Self-Review Protocol

After generating any code or complex response:

1. **Correctness Check**: Does this actually solve the stated problem?
2. **Edge Cases**: What happens with empty inputs, nulls, or extreme values?
3. **Completeness**: Are all requirements addressed? Any missing pieces?
4. **Best Practices**: Does this follow the project's conventions?
5. **Security**: Any potential vulnerabilities or unsafe operations?

If you find issues, fix them before presenting the final response.
Always note what you caught and fixed in your review.
```

## 💡 Ví Dụ Thực Tế

### ❌ Không có Self Reflection:

```typescript
// Agent viết function xong, submit luôn
function divide(a: number, b: number): number {
  return a / b;  // Bug: không handle b === 0
}
```

### ✅ Có Self Reflection:

```typescript
// Agent viết xong → tự review → phát hiện division by zero
function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error("Division by zero is not allowed");
  }
  return a / b;
}
// Self-review note: Caught missing zero-division guard
```

## ⚠️ Lưu Ý & Gotchas

- **Tăng latency** — mỗi response mất thêm ~20-30% thời gian vì review step
- **Giảm dần hiệu quả** — review lần 2, lần 3 ít bắt lỗi hơn lần 1. 1 lần review là sweet spot
- **Kết hợp tốt với `/chain-of-thought`** — CoT + Reflection = combo mạnh nhất cho accuracy
