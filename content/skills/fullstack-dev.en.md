---
title: "Fullstack Dev"
description: "Full-stack backend architecture and frontend-backend integration guide. Focuses on REST API design, security, authentication, and robust integration patterns."
oneLiner: "Build high-quality full-stack applications and integrate APIs."
seoTitle: "Fullstack Dev - Minimax Skill for AI Agents"
seoDescription: "Full-stack development guide covering database modeling, RESTful API design, authentication, and secure system integration."
---

## 📖 Why Do We Need This Skill?

The boundary between frontend and backend is a major source of software defects due to data type mismatches, inconsistent error handling, and weak API security. This skill provides a solid integration blueprint based on Twelve-Factor App and Clean Architecture principles.

## ⚙️ How It Works

The full-stack development workflow follows:

```
[Gather Requirements] -> [Database & API Contract Design] -> [Backend Implementation] -> [Frontend Integration] -> [E2E Testing]
```

1. **API Contract**: Defines endpoints and validates request schemas using tools like Zod or Marshmallow.
2. **Security**: Standardizes CORS, password hashing, JWT storage, and route authorization.
3. **Integration**: Connects the UI client to backend services using typed API clients.

## 🚀 Agent Guidelines (Prompt Guidelines)

1. Always validate and sanitize all client inputs on the backend; never trust frontend validation alone.
2. Maintain up-to-date API contracts (e.g., OpenAPI schemas) to ensure seamless frontend-backend alignment.
3. Keep application configurations decoupled from code by using environment variables (`.env`).

## ⚠️ Gotchas and notes

- **Type Drift**: Modifying database or API schemas without updating the frontend triggers runtime crashes. Use shared TypeScript interfaces or schema generators.
- **Data Leaks**: Avoid returning raw database records to the client. Explicitly filter out sensitive properties like password hashes.
