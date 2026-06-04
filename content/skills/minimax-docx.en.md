---
description: >-
  Reads, parses, and manipulates Microsoft Word (`.docx`) files. Navigates
  platform-specific environment constraints (such as missing libraries or
  binaries) using command reference recipes.
oneLiner: Read and process Word (.docx) documents reliably across systems.
seoDescription: >-
  Advanced Word (.docx) processing guide for AI Agents. Apply styles, manage
  templates, repair layouts, and handle environments.
seoTitle: Minimax Docx - Minimax Skill for AI Agents
title: Minimax Docx
---

## 📖 Why Do We Need This Skill?

Agents need this skill to generate, template-apply, edit, and read Microsoft Word (`.docx`) deliverables. It contains detailed guidelines for styling, section boundaries, and CJK typography pairings, while solving environment dependencies across different operating systems.

## ⚙️ How It Works

The DOCX processing workflow is:

1. **Verify**: Run `env_check` scripts to verify environment dependencies.
2. **Execute**: Call the approved .NET CLI or Python scripts to read or write the DOCX files.
3. **Validate**: Convert target document to PDF and verify pagination and visual layouts.

```
[Word Doc Request] ➔ 🛡️ [Run env_check.sh/ps1] ➔ 📐 [Route Intent (Create/Apply/Edit/Read)]
                      ➔ 💻 [Run .NET Cli or Python script] ➔ 🧪 [Verify Layout and Export PDF]
```

## 🚀 How to use

```markdown
# MINIMAX DOCX RULES
- **Direct PDF Export**: Convert DOCX to PDF using native exports (`docx_to_pdf.py` or LibreOffice headless). Do not route through intermediate Markdown/HTML.
- **No raw XML string replaces**: Never edit DOCX XML using manual string replacement. This invalidates schemas. Use approved backends.
- **Typography Standards**: Follow CJK and typography guidelines. Ensure headings use OutlineLevel and paragraph styles align with standard templates.
- **Environment Gates**: Always verify dependencies using `env_check` scripts before launching generation tasks.
```

## 💡 Real-World Examples / Scenarios

### Developer:
> "Guide me on how to configure and deploy the Minimax Docx skill to Read and process Word (.docx) documents reliably across systems."

### AI Agent (Equipped with Skill):
> "I have initialized the configuration. Here is the execution flow for the Minimax Docx skill:
> 1. Set up the environment variables and structure the inputs as specified.
> 2. Execute the workflow steps and integrate core components.
> 3. Verify results, optimize performance, and return the finalized assets."

## ⚠️ Gotchas and notes

* **Windows Execution Policy**: PowerShell calls to `.ps1` helpers require `-ExecutionPolicy Bypass`. Omitting this blocks execution.
* **Dotnet SDK Dependencies**: Writing features rely on dotnet SDK >= 9. If the host environment lacks this dependency, compilation will fail. Run the setup scripts.
