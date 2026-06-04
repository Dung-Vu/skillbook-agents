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

In project management, software quality assurance, or academic tracking tasks, passive execution (waiting for user messages to run) has several limitations:
* **Lack of updates**: Cannot automatically detect real-time data changes.
* **Time-consuming manual work**: Users must repeatedly remind the AI to check the system or collect reports.

**When using the `/schedule` skill, your AI Agent will:**
1. **Run recurring tasks (Recurring Tasks)**: Use standard cron syntax to schedule repeated executions (e.g., scan for new articles every morning, check code errors every night).
2. **Set a one-shot timer (One-shot Timer)**: Set a duration to trigger an automatic check task after a long-running background process finishes.
3. **Perform background monitoring (Background Monitoring)**: Automatically run in the background and only send notifications/reports when important updates are detected or when errors occur.

---

## ⚙️ How It Works
```
[Set Timer Schedule] ➔ 🕒 [Background Timer]
                         ├── Periodic (Cron) ➔ 🔄 [Trigger Task] ➔ [Report Results]
                         └── One-shot timer  ➔ ⏳ [Time's up] ➔ [Run Diagnostics]
```

Agent thought process when scheduling:
1. **Identify Schedule Type**: Determine if the request requires a one-shot timer (`DurationSeconds`) or a recurring cron task (`CronExpression`).
2. **Register Background Task**: Register the scheduled task with the system's background scheduler.
3. **Execute and Verify**: Trigger the specified commands or scripts when the timer fires.
4. **Report Results**: Send compilation reports or alerts to the user.

---

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
