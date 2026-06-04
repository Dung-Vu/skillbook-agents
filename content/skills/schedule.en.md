---
title: Schedule Recurring Task
description: Schedule automated background tasks or one-shot timers for AI Agents.
oneLiner: Schedule automated background tasks or timers.
seoTitle: /schedule - Scheduled & Recurring Automation Skill for AI
seoDescription: >-
  Rules for configuring timers and recurring cron schedules using the
  `/schedule` tool for AI Agents.
---
## 📖 Why Do We Need This Skill?

- **Recurring Schedules**: Run tasks automatically using cron syntax to fetch reports or update systems without manual prompts.
- **One-shot Timers**: Delay actions (using duration) to trigger checks or next steps after background tasks finish.
- **Asynchronous Monitoring**: Run silently in the background, only notifying the user when errors or updates occur.
## ⚙️ How It Works

```
[Setup Schedule/Timer] ➔ 🕒 [Background Runner]
                                 ├── Recurring (Cron) ➔ 🔄 [Trigger Task] ➔ [Report Results]
                                 └── One-shot Timer   ➔ ⏳ [Timeout]      ➔ [Run Diagnostics]
```

- **Task Registration**: Parse target parameters (recurring `CronExpression` or one-shot `DurationSeconds`).
- **Background Execution**: Queue the action to the background scheduler.
- **Execution & Alerting**: Trigger the workspace context, execute the command, and notify users upon completion or failure.
## 🚀 How to use


````markdown
# SCHEDULE COMMAND INSTRUCTIONS & RULES

## 1. Scheduling Types

- Clearly distinguish between the two scheduling modes:
  * **One-shot timer**: Use `DurationSeconds` to set a one-shot timer (maximum 900 seconds).
  * **Recurring cron**: Use `CronExpression` (standard 5 fields) to schedule repeating runs.

## 2. Notification & Logging

- Avoid printing excessively verbose logs when running periodic background tasks.
- Only create brief alerts or reports when data fluctuations or system errors are detected.
- Use background task management tools to monitor and cancel schedules when requested by the user.
````

---

## 💡 Real-World Examples / Scenarios


### Developer:
> "Guide me on how to configure and deploy the Schedule Recurring Task skill to Schedule automated background tasks or timers."

### AI Agent (Equipped with Skill):
> "I have initialized the configuration. Here is the execution flow for the Schedule Recurring Task skill:
> 1. Set up the environment variables and structure the inputs as specified.
> 2. Execute the workflow steps and integrate core components.
> 3. Verify results, optimize performance, and return the finalized assets."

## ⚠️ Gotchas and notes


* **Max Iterations**: For periodic cron tasks, always consider setting `MaxIterations` to automatically stop the scheduling process after a certain number of runs, avoiding wasted resources when the user is no longer tracking.
* **Duplicate Execution Handling**: Ensure that new runs do not clash for resources or overwrite the result files of a previous run if the previous run has not yet finished.
