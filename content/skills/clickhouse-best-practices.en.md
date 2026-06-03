---
title: "ClickHouse Best Practices"
description: "Expert guidelines for ClickHouse schema design, query optimization, JOIN strategies, partitioning, ingestion tuning, and performance troubleshooting."
oneLiner: "Optimize database schemas and query performance for ClickHouse."
seoTitle: "ClickHouse Best Practices - Minimax Skill for AI Agents"
seoDescription: "Comprehensive ClickHouse optimization playbook containing 28 rules for schema design, SQL tuning, and data ingestion."
---

## 📖 Why Do We Need This Skill?

ClickHouse is incredibly fast as a columnar database, but it requires a very different design paradigm compared to OLTP databases (like PostgreSQL). Misconfiguring ORDER BY keys, abusing mutations, or over-partitioning can easily degrade performance or exhaust disk IO.

## ⚙️ How It Works

The ClickHouse analysis and optimization workflow:

```
[SQL Schema/Query] -> [28 Rules Check] -> [Identify Anti-patterns] -> [Propose Refactored SQL] -> [Ingestion Advice]
```

1. **Schema Check**: Validates data types, ORDER BY sort order (low-to-high cardinality), and engine selections.
2. **Query Check**: Optimizes aggregates, replaces heavy JOINs with dictionary lookups or array constructs, and ensures partition pruning.
3. **Ingestion Check**: Recommends batch writing structures (minimum 10,000 to 100,000 rows per insert block).

## 🚀 Agent Guidelines (Prompt Guidelines)

1. Ensure the `ORDER BY` keys are ordered from lowest cardinality to highest cardinality for optimal compression.
2. Avoid `Nullable` columns where possible; use default sentinel values (e.g. empty strings or 0) to save disk space and boost read speeds.
3. Leverage ClickHouse-specific aggregate functions (e.g. `uniqCombined` instead of `COUNT(DISTINCT)`) for extreme speedups.

## ⚠️ Gotchas and notes

- **Row-level Updates/Deletes**: Do not treat ClickHouse like a transactional DB. Use `ReplacingMergeTree` or partitioning schemes instead of frequent `UPDATE`/`DELETE` queries.
- **Over-partitioning**: Partitioning by day when volume is low creates too many tiny parts, causing severe merge overhead. Partition by month instead.
