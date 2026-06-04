---
description: >-
  Refines and optimizes existing skill instructions. Focuses on eliminating
  redundant prompts, cleaning up code recipes, updating references, and ensuring
  top-tier adherence to Luminous quality standards.
oneLiner: 'Refine, clean up, and optimize existing skills for better performance.'
seoDescription: >-
  Refining existing AI Agent skills. Apply minimal patches, eliminate redundant
  instructions, and verify integrity with CAS.
seoTitle: Skill Refiner - Minimax Skill for AI Agents
title: Skill Refiner
---

## 📖 Why Do We Need This Skill?

This skill guides agents in applying minimal, evidence-backed patches to existing skills without introducing regressions. It prevents prompt size bloat and ensures modifications preserve formatting and metadata conventions.

---

## ⚙️ How It Works

The skill refinement procedure:
1. **Gather Evidence**: Fetch error logs, active signals, or user feedback highlighting the exact defect.
2. **Inspect Current Content**: Call `mavis skill show <name>` and copy the current code along with its `hash`.
3. **Analyze & Attribue**: Confirm the issue is a skill defect, not an agent execution error.
4. **Draft Surgical Patch**: Design the minimal edit point using `old_string` and `new_string` blocks.
5. **Apply with CAS**: Post the update payload to the `/api/skill-evolve/apply` endpoint, passing `expectedOldHash` to prevent race conditions.

Flowchart:
```
[Active Signal / Issue] ➔ 📖 [Read Skill Content & Extract Hash] ➔ 📐 [Draft Minimal Surgical Patch]
                           ➔ 🔒 [Assert CAS Hash Match] ➔ 💻 [Post Update via API / PR] ➔ Verify
```

---

## 🚀 How to use

```markdown
# SKILL REFINER CONSTRAINTS
- **CAS Match Required**: Every API update call must pass `expectedOldHash` to verify no concurrent edits occurred.
- **No Self-Refinement**: The `skill-refiner` agent must never attempt to modify its own `SKILL.md` file.
- **Frontmatter Preservation**: Never modify or corrupt the target skill's YAML frontmatter properties during patching.
- **Surgical Patching**: Write small, targeted line updates. Do not rewrite entire sections when modifying code examples.
```

---

## 💡 Real-World Examples / Scenarios

### Developer:
> "Guide me on how to configure and deploy the Skill Refiner skill to Refine, clean up, and optimize existing skills for better performance."

### AI Agent (Equipped with Skill):
> "I have initialized the configuration. Here is the execution flow for the Skill Refiner skill:
> 1. Set up the environment variables and structure the inputs as specified.
> 2. Execute the workflow steps and integrate core components.
> 3. Verify results, optimize performance, and return the finalized assets."

## ⚠️ Gotchas and notes

* **CAS Hash Conflicts**: If another process modified the skill first, the hash check will reject the payload. Re-read the skill and rebuild the patch.
* **Built-in Skill Updates**: Built-in system skills are read-only at runtime. Do not POST updates to them. Advise the user to create a git branch and open an MR.
