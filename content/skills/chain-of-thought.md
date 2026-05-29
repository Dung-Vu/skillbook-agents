---
slug: "chain-of-thought"
title: "Chain of Thought"
command: "/chain-of-thought"
category: "reasoning-planning"
tags:
  - "prompting"
  - "accuracy"
  - "hallucination-reduction"
complexity: "starter"
platforms:
  - "cursor"
  - "claude-code"
  - "windsurf"
  - "gemini-cli"
  - "universal"
featured: true
description: "Buộc agent suy luận từng bước, phân tích trước khi trả lời, giảm hallucination cho complex tasks."
oneLiner: "Think step-by-step, answer better."
sourceUrl: "https://arxiv.org/abs/2201.11903"
sourceAuthor: "Google Research"
lastVerified: "2026-05-29"
relatedSkills:
  - "self-reflection"
  - "task-decomposition"
seoTitle: "Chain of Thought — Skillbook Agents"
seoDescription: "Hướng dẫn agent suy luận từng bước để giảm hallucination và tăng accuracy."
---

## 📖 Tại Sao Cần Skill Này?

Agent không có Chain-of-Thought giống như một người trả lời câu hỏi thi mà không nháp — nhảy thẳng đến đáp án.

Khi không có CoT:
- **Hallucination** — agent bịa thông tin vì không kiểm tra logic
- **Logic errors** — bỏ qua bước trung gian dẫn đến kết luận sai
- **Incomplete solutions** — giải pháp thiếu sót vì không phân tích đủ sâu

CoT buộc agent phải "nghĩ trên giấy" — mỗi bước suy luận đều được viết ra, kiểm tra được, và trace được.

## ⚙️ Cách Hoạt Động

Chain-of-Thought tạo ra một pipeline suy luận bắt buộc:

```
Input → Understand Context → Decompose Problem →
Reason Step-by-Step → Verify Each Step → Synthesize → Output
```

Thay vì: `Question → Answer` (1 bước)
CoT tạo: `Question → Think → Step 1 → Step 2 → ... → Verify → Answer` (nhiều bước)

Nghiên cứu từ Google (Wei et al., 2022) cho thấy CoT cải thiện accuracy **15-40%** trên các benchmark toán học và logic.

## 🚀 Cách Sử Dụng

### Cursor / Windsurf

Thêm vào file `.cursorrules` hoặc `.windsurfrules`:

```markdown
## Reasoning Protocol

When solving problems:
1. **Understand**: Restate the problem in your own words
2. **Plan**: List the steps needed before writing any code
3. **Execute**: Implement each step, explaining your reasoning
4. **Verify**: Check your solution against the original requirements
5. **Edge cases**: Consider and handle edge cases explicitly

Never jump to code without explaining your approach first.
```

### Claude Code

Thêm vào `CLAUDE.md`:

```markdown
# Chain of Thought

Before answering any complex question or writing code:
1. Think through the problem step by step
2. Consider multiple approaches and explain tradeoffs
3. Choose the best approach with clear reasoning
4. Implement incrementally, verifying each step
5. Review your solution for correctness and completeness
```

## 💡 Ví Dụ Thực Tế

### ❌ Không có CoT:

```
User: "Viết function tìm phần tử xuất hiện nhiều nhất trong array"
Agent: *viết code ngay, quên handle edge case array rỗng, 
       dùng approach O(n²) thay vì O(n)*
```

### ✅ Có CoT:

```
User: "Viết function tìm phần tử xuất hiện nhiều nhất trong array"
Agent: 
  "Phân tích bài toán:
   1. Input: array of any type → cần handle empty array
   2. Output: phần tử có frequency cao nhất
   3. Edge cases: array rỗng, nhiều phần tử cùng frequency
   4. Approach: dùng Map đếm frequency → O(n) time, O(n) space
   5. Implementation: ..."
   *viết code đúng, handle edge cases, optimal complexity*
```

## ⚠️ Lưu Ý & Gotchas

- **Token cost tăng ~30-50%** — CoT sinh ra nhiều text hơn. Chấp nhận trade-off này cho complex tasks
- **Không cần cho simple tasks** — "Format this date" không cần CoT. Dùng cho logic, debugging, architecture decisions
- **Kết hợp với `/self-reflection`** — sau khi CoT, agent tự review lại output → accuracy tăng thêm 10-20%
- **Cẩn thận "fake reasoning"** — một số model giả vờ suy luận nhưng thực ra chỉ pad output. Kiểm tra xem reasoning có thực sự ảnh hưởng đến kết quả không
