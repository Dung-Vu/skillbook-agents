---
slug: "web-research"
title: "Web Research Agent"
command: "/web-research"
category: "research-analysis"
tags:
  - "research"
  - "web-scraping"
  - "fact-checking"
complexity: "intermediate"
platforms:
  - "claude-code"
  - "cursor"
  - "gemini-cli"
  - "mcp"
featured: false
description: "Biến agent thành research assistant — tìm kiếm web có hệ thống, tổng hợp thông tin, và verify facts."
oneLiner: "Research like a journalist, synthesize like a scientist."
sourceUrl: "https://github.com/anthropics/skills"
sourceAuthor: "Community"
lastVerified: "2026-05-29"
relatedSkills:
  - "chain-of-thought"
  - "task-decomposition"
seoTitle: "Web Research Agent — Skillbook Agents"
seoDescription: "Skill giúp agent nghiên cứu web có hệ thống và tổng hợp thông tin chính xác."
---

## 📖 Tại Sao Cần Skill Này?

Agent có thể truy cập web nhưng không biết cách research hiệu quả — nó tìm 1 source rồi tin luôn, không cross-verify, không đánh giá credibility.

Khi không có Web Research skill:
- **Single-source bias** — tin vào kết quả đầu tiên tìm được
- **Không verify** — thông tin sai vẫn được sử dụng
- **Tổng hợp kém** — copy-paste thay vì synthesize insights

## ⚙️ Cách Hoạt Động

```
Research Question
    ↓
1. Define: Xác định chính xác cần tìm gì
    ↓
2. Search: Query nhiều nguồn (3-5 sources minimum)
    ↓
3. Evaluate: Đánh giá credibility mỗi source
    ↓
4. Cross-verify: So sánh thông tin giữa các sources
    ↓
5. Synthesize: Tổng hợp thành insight rõ ràng
    ↓
6. Cite: Ghi rõ nguồn cho mọi claim
```

## 🚀 Cách Sử Dụng

### Universal

```markdown
## Research Protocol

When researching any topic:

1. **Define the question clearly** before searching
2. **Use multiple sources** (minimum 3) — don't trust a single result
3. **Evaluate credibility**: 
   - Official docs > blog posts > forum answers
   - Recent content > old content
   - Primary sources > secondary sources
4. **Cross-verify facts** between sources. Flag contradictions
5. **Synthesize** — don't just list. Extract the key insight
6. **Always cite sources** with URLs for every factual claim
7. **State uncertainty** — if sources disagree, say so explicitly

When you cannot verify a claim, prefix with:
"⚠️ Unverified: [claim]. Source: [url]"
```

## 💡 Ví Dụ Thực Tế

### ❌ Kém:

```
User: "Next.js 15 có support PPR không?"
Agent: "Có, Next.js 15 hỗ trợ Partial Prerendering."
(Không cite source, không mention nó là experimental)
```

### ✅ Tốt:

```
User: "Next.js 15 có support PPR không?"
Agent: "Có, theo Next.js docs (nextjs.org/docs):
- PPR được giới thiệu từ Next.js 14 (experimental)
- Next.js 15 nâng lên incremental adoption
- Vẫn cần opt-in qua next.config.js
- Source: https://nextjs.org/docs/app/api-reference/config/...

⚠️ Note: PPR vẫn đang evolve nhanh, recommend check docs 
trước khi implement."
```

## ⚠️ Lưu Ý & Gotchas

- **Tốn tokens** — research kỹ = nhiều web calls = nhiều context. Cân nhắc scope
- **Cần MCP/tools** — agent phải có khả năng search web (MCP server hoặc built-in)
- **Bias vẫn tồn tại** — search engines có bias, agent cần aware điều này
