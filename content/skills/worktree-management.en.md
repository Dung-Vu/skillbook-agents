---
description: Manages Git Worktrees for parallel feature development on a single repository
  without cluttering the main workspace. Handles default branch detection, branch
  creation, and post-task cleanup.
oneLiner: Isolate and manage parallel Git branches using Git Worktrees.
seoDescription: Git worktree workflow management. Create isolated development worktrees,
  detect default branches, and clean up post-merge.
seoTitle: Worktree Management - Minimax Skill for AI Agents
title: Worktree Management
---

## 📖 Why Do We Need This Skill?

Modifying code directly on default branches causes git conflicts and restarts active file-watching development servers. Git Worktrees enable agents to isolate development directories for each feature branch, facilitating parallel coding and safe invasive testing.

---

## ⚙️ How It Works

The Git Worktree workflow:
1. **Detect Default Branch**: Query origin remote to find the default branch name (e.g. `main` or `dev`).
2. **Create Worktree**: Scaffold a new directory under `$PROJECT_ROOT/.worktrees/feature-xxx` using absolute paths resolved via `git rev-parse`.
3. **Develop & Validate**: Navigate into the worktree path, install node/python dependencies, write code and run test suites.
4. **Rebase & Reconcile**: Pull origin updates and rebase feature branches before creating pull requests.
5. **Clean up**: Delete the worktree folder using `git worktree remove` and delete local branches post-merge.

Flowchart:
```
[Git Task Request] ➔ 🔍 [Detect default branch via remote] ➔ 📁 [Create Worktree in .worktrees/]
                      ➔ 💻 [Write code & Run tests in worktree] ➔ 🧹 [Rebase, push branch, & prune worktree]
```

---

## 🚀 Agent Guidelines (Prompt Guidelines)

```markdown
# WORKTREE MANAGEMENT CONSTRAINTS
- **Worktree Isolation**: All code changes must occur inside a dedicated worktree directory under `.worktrees/`. The main repository directory must remain clean.
- **Absolute Path Resolution**: Always resolve the project root path using `git rev-parse --show-toplevel` before adding worktrees.
- **Branch Naming**: Feature branches must use the prefix `feature/<kebab-case>` and bug fixes must use `fix/<kebab-case>`.
- **Prune Post-Merge**: Prune local references and remove directories via `git worktree remove` when features land on remote.
```

---

## ⚠️ Gotchas and notes

* **Local Port Conflicts**: Running server processes in multiple parallel worktrees can trigger port conflict crashes. Bind servers to custom ports using environment configs.
* **Node Modules Copying**: Do not copy or symlink `node_modules` folders across worktrees. Run fresh package manager installs inside each worktree.
