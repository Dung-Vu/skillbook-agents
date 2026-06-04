---
title: Workflow Skill Creator
description: >-
  Meta-skill enabling Agents to package, document, and standardize complex
  successful interactive workflows into reusable Antigravity skills.
oneLiner: Package complex workflows into reusable Antigravity skills automatically.
seoTitle: Workflow Skill Creator for AI Agents — Skillbook Agents
seoDescription: >-
  Meta-skill instructions helping AI Agents distill chat conversations into
  reusable structured skills.
---

## 📖 Why Do We Need This Skill?

During project development, developers and AI Agents build complex workflows — spanning API calls, data translations, and automated build and test checks. Without this skill:
* **Knowledge Loss**: When a chat session closes, the reasoning steps and command sequences are lost, requiring the user to retrain the AI in subsequent sessions.
* **Manual Repetition**: Agents cannot systematize and package their action history into permanent automation scripts.

**With this meta-skill, your AI Agent will:**
1. **Package Knowledge**: Analyze chat history to distill successful actions and package them into standard Antigravity skill templates.
2. **4-Phase Curation**: Follow a strict design lifecycle: Brainstorm ➔ Design ➔ Implement ➔ Validate.
3. **Deliver Reusable Assets**: Build `SKILL.md` instruction files and `uv` scripts for direct reuse in future projects.

## ⚙️ How It Works

```
[Interaction History] ➔ 🧠 [Phase 1: Analysis & Brainstorm] ➔ 📐 [Phase 2: Input/Output Design]
                             └── 💻 [Phase 3: Create SKILL.md & Scripts] ➔ 🧪 [Phase 4: Run E2E Test]
```

Agent thought process when executing this skill:
1. **Phase 1 & 2: Analysis & Design**: Review conversation history to extract successful patterns, identifying explicit input parameters and expected output formats. Map out files and structure for the new skill directory.
2. **Phase 3 & 4: Implementation & Validation**: Write the Luminous-compliant `SKILL.md` file and build Python scripts compatible with `uv run` (PEP 0723). Execute the newly created skill with sample inputs to verify functionality.

## 🚀 How to use

### IDE Configuration

- **With Cursor**: Add the rules below to your project `.cursorrules` file to enable Cursor to package workflows when requested.
- **With Windsurf (Cascade)**: Add these rules to `.windsurfrules` at the project root to enable Cascade to package workflows.

### Rules

```markdown
# WORKFLOW SKILL CREATOR INSTRUCTIONS & RULES

## 1. Activation Context
- Only activate this skill when the developer explicitly requests phrases such as: `"package this workflow"`, `"make this a skill"`, `"create a skill from this workflow"`.
- Never attempt to create a skill from scratch if there is no successful prior execution history in the conversation.

## 2. Execution Phases (Mandatory)
You must report and proceed through all 4 phases; do not skip any phase:
- **Phase 1: Brainstorming**: Summarize the successfully executed workflow, list created files, and specify expected inputs/outputs.
- **Phase 2: Design**: Design the new skill directory structure (e.g., `skills/my-new-skill/` containing `SKILL.md` and a `scripts/` directory).
- **Phase 3: Implementation**: Write a high-quality `SKILL.md` guideline file and accompany it with Python scripts (if applicable).
- **Phase 4: Validation**: Run a practical test on the newly created skill package with mock data to confirm feasibility.

## 3. Standardization
- Any accompanying Python script must declare inline dependencies using the **PEP 0723** format for maximum compatibility with `uv run`.
- The newly created `SKILL.md` file must strictly adhere to the Luminous Standard structural guidelines.
```

## 💡 Real-World Examples / Scenarios

### 🧑‍💻 Developer:
> "The workflow we just ran to fetch protein structures from NCBI, analyze them with AlphaFold, and render them in PyMOL was great. Help me package this into a reusable tool."

### 🤖 AI Agent (Equipped with this Skill):
> "I will package that workflow into an Antigravity skill directory using the 4-phase curation process:"
>
> 1. **Phase 1: Brainstorming**: I reviewed our recent logs to map inputs (UniProt ID) and outputs (ray-traced PNG structures).
> 2. **Phase 2: Directory Design**: I structured the new skill directory `protein-renderer` and mapped its command interface.
> 3. **Phase 3: Implementation**: I created the `SKILL.md` instructions and wrote helper Python scripts using PEP 0723 dependency headers.
> 4. **Phase 4: Validation**: I ran a test render with an insulin sequence to verify that the pipeline runs successfully.
>
> *The structured skill is packaged and saved in your local workspace. In future sessions, you can run `/protein-renderer` to trigger the pipeline automatically.*

## ⚠️ Gotchas and notes

* **Requires Context History**: This skill cannot generate new workflows from scratch without a preceding successful interactive sequence. The Agent relies on conversation history to extract rules.
* **Validation is Mandatory**: Never deliver a skill without running Phase 4 (Validation). Unverified skills are prone to dependency errors.
* **Optimize dependency headers**: Declare all Python dependencies in script headers to ensure `uv run` executes them cleanly for subsequent users.
