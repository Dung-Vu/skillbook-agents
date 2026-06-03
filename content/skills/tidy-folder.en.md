---
title: "Tidy Folder"
description: "Automates folder organization and cleanup. Categorizes files by extension, archives cluttered documents to temporary folders, and ensures zero data loss."
oneLiner: "Organize cluttered directories safely by extension and type with backups."
seoTitle: "Tidy Folder - Minimax Skill for AI Agents"
seoDescription: "Build folder cleanup, archiving, and file organization skills for AI Agents with strict data safety rules."
---

## 📖 Why Do We Need This Skill?

Work directories quickly accumulate clutter, resulting in lost files and wasted space. This skill enables the Agent to perform automated, risk-free folder reorganization, establishing backups, skipping systemic files, and grouping documents cleanly.

## ⚙️ How It Works

The directory organization flow:
```
Scan Source Directory --> Create Backup Archive --> Classify by File Type --> Move Files & Prune Empty Folders
```
1. **Scan**: Read the targeted directory contents, gathering metadata (size, extensions, last modified).
2. **Backup**: Copy existing structures or create a rollback state before making structural changes.
3. **Classification**: Group extensions (e.g., `.docx` to /Documents, `.zip` to /Archives).
4. **Relocation**: Execute file moves, skipping protected files, and delete residual empty directories.

## 🚀 Agent Guidelines (Prompt Guidelines)

- Never delete a user's file permanently. Always archive, quarantine, or move files to a temporary recovery folder.
- Preserve configuration files (e.g., `.env`, `.gitignore`, `.git`, system files) without modifications.
- Output a directory tree representation of the organized folder upon completion.

## ⚠️ Gotchas and notes

- **File Locks**: Catch errors associated with open files locked by other applications (e.g., active Excel or Word sheets).
- **Naming Collisions**: Avoid overwriting files with identical names. Auto-append numerical suffixes (e.g., `report (1).pdf`).
