---
title: Agent Alignment Verification
description: >-
  Methodology for Agents to proactively query human intent, verifying
  ambiguities and edge cases before execution.
oneLiner: Proactively clarify intent and edge cases before code execution.
seoTitle: Agent Alignment Verification — Skillbook Agents
seoDescription: >-
  Guide for Agents to proactively align goals and verify implementation details
  with the user.
---


## 📖 Why Do We Need This Skill?

AI agents frequently make assumptions when facing incomplete specifications. The `/grill-me` skill helps the AI Agent proactively align by:
- **Detecting Ambiguities**: Identifies missing architecture, database schemas, or error-handling guidelines.
- **Sharp Questioning**: Asks 2-3 targeted questions per round rather than dumping a massive questionnaire.
- **Architectural Alignment**: Establishes a shared technical blueprint (`implementation_plan.md`) before writing code.

## ⚙️ How It Works

```
[Receive Initial Request] ➔ 🔍 [Analyze Design Flaws]
                               └── Ask critical questions ➔ 🗣️ [Interactive Exchange with User]
                                                                └── Consensus ➔ 📐 [Create Standard Blueprint]
```

Alignment verification loop:
1. **Pre-scan**: Analyzes the request for missing details (auth, database, environments).
2. **Halt & Inquire**: Asks targeted questions on scope, technology, and error handling.
3. **Consensus**: Writes the finalized plan after user approval.

## 🚀 How to use

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

## 💡 Real-World Examples / Scenarios

### Developer:
> "Guide me on how to configure and deploy the Agent Alignment Verification skill to Proactively clarify intent and edge cases before code execution."

### AI Agent (Equipped with Skill):
> "I have initialized the configuration. Here is the execution flow for the Agent Alignment Verification skill:
> 1. Set up the environment variables and structure the inputs as specified.
> 2. Execute the workflow steps and integrate core components.
> 3. Verify results, optimize performance, and return the finalized assets."

## ⚠️ Gotchas and notes

- **Avoid trivial details**: Only ask questions that impact architecture or programming logic; let best practices dictate minor implementation choices.
- **Objective framing**: Provide neutral pros/cons for technology options to guide the user's decision making.
