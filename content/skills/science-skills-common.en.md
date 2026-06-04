---
title: Science Skills Common Library
description: >-
  Provide a shared HTTP client infrastructure with rate-limiting and exponential
  backoff retry mechanisms for external science APIs (NCBI, EBI, RCSB).
oneLiner: Shared rate-limiting and retry HTTP client library for science Agents.
seoTitle: Science Skills Common Library for AI Agents — Skillbook Agents
seoDescription: >-
  Infrastructure guidelines for rate-limiting, retries, and exponential backoff
  in science API requests.
---


## 📖 Why Do We Need This Skill?

- **Prevent IP Blocking**: Automatically comply with API rate limits of major servers (NCBI, Ensembl, UniProt) to avoid HTTP 429 errors.
- **Auto-Retry & Backoff**: Use exponential backoff to handle transient network errors or server overloads (HTTP 500, 503) seamlessly.
- **Process-Safe**: Utilize file locks to synchronize rate limits across multiple concurrent Python script instances.
## ⚙️ How It Works

```
[Science Script] ➔ 📞 [Call API via RateLimitedClient]
                         ├── Under threshold ➔ 🌐 [Call API] ➔ [Return Result]
                         └── Over threshold  ➔ ⏳ [File Lock / Auto-delay] ➔ [Retry]
```

- **Identify**: Recognize that this is a shared library, not a standalone tool.
- **Integrate**: Import `RateLimitedClient` instead of raw `requests` in Python scripts calling external APIs.
- **Configure**: Set target-appropriate requests-per-second (RPS) and `max_retries`.
## 🚀 How to use

### IDE Integration Guide
- **With Cursor**: Add the rules below to your project `.cursorrules` file to instruct Cursor to import this rate-limited client for Python API scripts.
- **With Windsurf (Cascade)**: Add these rules to `.windsurfrules` at the project root to enforce rate limits on Cascade web connections.

### Agent Guidelines
````markdown
# SCIENCE COMMON LIBRARY RULES & GUIDELINES

## 1. Role Recognition
- Identify `science-skills-common` as a shared library. Do not attempt to run `/science-skills-common` directly in the Terminal.
- This library is a prerequisite (dependency) for other scientific skills (PubMed, UniProt, ClinVar, etc.).

## 2. Coding Implementation Rules
- When writing Python scripts that connect to external APIs, never use raw `requests` or `urllib` libraries.
- Importing and using `RateLimitedClient` from the shared library is mandatory:
  ```python
  from science_skills_common.http_client import RateLimitedClient
  ```
- Declare safety parameters:
  * `requests_per_second`: Set appropriately for the target server (default ≤ 10).
  * `max_retries`: Set to ≥ 3.
  * Automatically handle exceptions safely and output clean error messages to the developer.
````
## 💡 Real-World Examples / Scenarios

### 🧑‍💻 Developer:
> "I need to write a Python tool to download protein details for hundreds of samples from the international UniProt database for analysis. How can I ensure the tool runs stably all night without being IP-blocked by the UniProt server?"

### 🤖 AI Agent (Equipped with Skill):
> "I will design a safe automation solution by incorporating the system's shared infrastructure library `science-skills-common`. Here is the protective process I will apply in the background when your source code runs:"
>
> 1. **Intelligent Flow Control**: Instead of using raw network libraries that send requests in bulk, I will configure your source code to import `RateLimitedClient`. This library automatically limits the maximum request frequency to 10 requests/second to strictly comply with UniProt's server policy.
> 2. **Automatic Connection Error Bypass**: If the UniProt server is temporarily overloaded or encounters network issues (returning HTTP 429 or 503 errors), the smart client will automatically trigger a retry mechanism (Exponential Backoff), gradually increasing wait times between attempts to protect your connection.
> 3. **Safe Multi-threading Synchronization**: When running multiple protein analysis processes in parallel, the library automatically activates a file-locking mechanism to synchronize traffic across threads, ensuring your overall system never exceeds the UniProt server's limit.
>
> *Thanks to this background protection, your Python script can run reliably all night, downloading thousands of proteins smoothly without fear of being IP-blocked by the UniProt server or disrupting your research progress.*
## ⚠️ Gotchas and notes

* **Do Not Run Standalone**: Remind yourself and the agent that this is not a standalone tool. Any attempt to run it individually in the terminal will report an error.
* **File Locking Mechanism**: The library uses a temporary file write mechanism to synchronize rate-limiting across multiple processes. Avoid running scripts on network shared drives (Network Drives/NAS) as the file-locking mechanism may experience delays or write permission errors.
* **Auto-load via UV**: Always declare this library in the dependency header of Python scripts so that `uv run` automatically downloads and installs the latest version from the local repository.
