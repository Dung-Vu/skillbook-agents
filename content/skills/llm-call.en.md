---
description: >-
  Executes direct calls to configured LLMs via local Python scripts using
  settings in config.yaml. Ideal for testing prompts or comparing model outputs
  across OpenAI, Anthropic, and Gemini.
oneLiner: Make direct API calls to configured LLMs for testing and comparison.
seoDescription: >-
  Call configured LLM models directly via local Python runner. Use for prompt
  testing and model output comparison.
seoTitle: LLM Call - Minimax Skill for AI Agents
title: LLM Call
---

## 📖 Why Do We Need This Skill?

AI Agents need this skill to execute raw, single API calls to configured LLMs without invoking the agent's main planning loop. Useful for testing prompts, performing comparative testing, or sending text directly to models like GPT-4, Claude, or Gemini.

---

## ⚙️ How It Works

The workflow procedure is:
1. **Identify parameters**: Read the target model name and prompt text.
2. **Resolve Python launcher**: Detect environment, choosing `py -3` (Windows) or `python3` (macOS/Linux).
3. **Execute execution script**: Launch `llm_call.py` passing `--model`, `--prompt`, and optional configuration settings.
4. **Deliver output**: Print the raw model response. Summarize configuration or network errors on failure.

Flowchart:
```
[User Prompt] ➔ ⚙️ [Detect OS Launcher] ➔ ⚙️ [Read API settings from config.yaml]
                  ➔ 💻 [Run llm_call.py] ➔ 📝 [Return Raw Model Output]
```

---

## 🚀 How to use

```markdown
# LLM CALL RULES
- **Model specification**: Always specify `--model provider/model`. Run with `--list` to inspect configured models if not named.
- **No silent fallbacks**: If the HTTP request fails, return the error message. Do not retry with another model.
- **Config resolution**: Scan config.yaml from parent data dir fallback to `~/.mavis/config.yaml`. Specify profile config explicitly if requested.
```

---

## 💡 Real-World Examples / Scenarios

### Developer:
> "Guide me on how to configure and deploy the LLM Call skill to Make direct API calls to configured LLMs for testing and comparison."

### AI Agent (Equipped with Skill):
> "I have initialized the configuration. Here is the execution flow for the LLM Call skill:
> 1. Set up the environment variables and structure the inputs as specified.
> 2. Execute the workflow steps and integrate core components.
> 3. Verify results, optimize performance, and return the finalized assets."

## ⚠️ Gotchas and notes

* **Windows Python launcher**: Do not run `python3` on Windows systems; it is not available in standard installs. Use `py -3` or the resolved alias instead.
* **Config gaps**: If credentials are missing in `config.yaml`, explicitly inform the user which API key is missing instead of throwing vague network errors.
