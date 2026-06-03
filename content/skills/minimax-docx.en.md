---
description: Reads, parses, and manipulates Microsoft Word (`.docx`) files. Navigates
  platform-specific environment constraints (such as missing libraries or binaries)
  using command reference recipes.
oneLiner: Read and process Word (.docx) documents reliably across systems.
seoDescription: Advanced Word (.docx) processing guide for AI Agents. Apply styles,
  manage templates, repair layouts, and handle environments.
seoTitle: Minimax Docx - Minimax Skill for AI Agents
title: Minimax Docx
---

## 📖 Why Do We Need This Skill?

Agents need this skill to generate, template-apply, edit, and read Microsoft Word (`.docx`) deliverables. It contains detailed guidelines for styling, section boundaries, and CJK typography pairings, while solving environment dependencies across different operating systems.

---

## ⚙️ How It Works

The DOCX processing workflow is:
1. **Verify Environment**: Run the appropriate check (`env_check.sh` / `env_check.ps1`) at the required level (`read` / `render` / `full`).
2. **Select Route**: Match the task to a route: `CREATE_DOCX`, `APPLY_TEMPLATE`, `EDIT_FILL_DOCX`, or a read route.
3. **Load Style Recipes**: For writing tasks, apply typography guidelines (`references/typography_guide.md`) and CJK standards.
4. **Execute & Validate**: Call the .NET CLI or Python scripts, convert to PDF, and perform visual validation of pages.

Flowchart:
```
[Word Doc Request] ➔ 🛡️ [Run env_check.sh/ps1] ➔ 📐 [Route Intent (Create/Apply/Edit/Read)]
                      ➔ 💻 [Run .NET Cli or Python script] ➔ 🧪 [Verify Layout and Export PDF]
```

---

## 🚀 Agent Guidelines (Prompt Guidelines)

```markdown
# MINIMAX DOCX RULES
- **Direct PDF Export**: Convert DOCX to PDF using native exports (`docx_to_pdf.py` or LibreOffice headless). Do not route through intermediate Markdown/HTML.
- **No raw XML string replaces**: Never edit DOCX XML using manual string replacement. This invalidates schemas. Use approved backends.
- **Typography Standards**: Follow CJK and typography guidelines. Ensure headings use OutlineLevel and paragraph styles align with standard templates.
- **Environment Gates**: Always verify dependencies using `env_check` scripts before launching generation tasks.
```

---

## ⚠️ Gotchas and notes

* **Windows Execution Policy**: PowerShell calls to `.ps1` helpers require `-ExecutionPolicy Bypass`. Omitting this blocks execution.
* **Dotnet SDK Dependencies**: Writing features rely on dotnet SDK >= 9. If the host environment lacks this dependency, compilation will fail. Run the setup scripts.
