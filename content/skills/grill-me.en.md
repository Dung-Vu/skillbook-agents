---
title: "Agent Alignment Verification"
description: "Methodology for Agents to proactively query human intent, verifying ambiguities and edge cases before execution."
oneLiner: "Proactively clarify intent and edge cases before code execution."
seoTitle: "Agent Alignment Verification — Skillbook Agents"
seoDescription: "Guide for Agents to proactively align goals and verify implementation details with the user."
---


## 🧠 Why Do We Need This Skill?

AI agents frequently guess user preferences when facing incomplete specifications. This leads to code misalignment and wasted computing cycles. Without this skill:
* **Misaligned architecture**: AI builds a REST API when a simple utility script was desired.
* **Security vulnerabilities**: AI exposes database credentials because the deployment scope was unclear.

**With this skill, your AI Agent will:**
1. **Detect ambiguity**: Halt execution when critical parameters are missing.
2. **Propose clear choices**: Present the user with structured technical options rather than asking open questions.
3. **Confirm constraints**: Verify target environments, performance, and security requirements early.

---

## ⚙️ How It Works

```
[Receive Initial Request] ➔ 🔍 [Analyze Design Flaws]
                               └── Ask critical questions ➔ 🗣️ [Interactive Exchange with User]
                                                                └── Consensus ➔ 📐 [Create Standard Blueprint]
```

Alignment verification loop:
1. **Pre-scan**: Analyze the user prompt for missing technical specifics (databases, runtime versions, auth mechanisms).
2. **Halt & Inquire**: Stop execution and prompt the user with a structured questionnaire.
3. **Apply & Resume**: Integrate user answers into the development context and execute.

---

## 📜 Agent Guidelines (Prompt Guidelines)

````markdown
# GRILL-ME INTERVIEW INSTRUCTIONS & RULES

## 1. Interactive Interview Rule
- Do not ask all questions in a single response. Break them down into multiple rounds of exchange (only ask 2-3 core questions per round).
- Listen to answers, respond intelligently, and adjust the next questions based on the data provided by the user.

## 2. Subject Areas to Cover
- Ensure clarity on the following aspects:
  * **Scope**: Which features are mandatory for MVP vs. features that can be added later.
  * **Technology**: Required (or to be avoided) technologies or libraries.
  * **Error Handling**: How to handle exceptional cases or system errors.

## 3. Output Generation
- Transition to creating the detailed implementation plan file only after the user has explicitly confirmed agreement with all proposals.
````

---

## ⚠️ Gotchas and notes

* **Avoid Trivial Questions**: Only ask questions that genuinely impact the system architecture or coding logic. Avoid asking about minor details that the AI can decide effectively based on best practices.
* **Maintain Objective Tone**: Provide clear pros/cons analysis for each technology option to help the user make accurate decisions.
```
```
