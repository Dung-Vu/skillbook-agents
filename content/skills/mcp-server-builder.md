---
slug: "mcp-server-builder"
title: "MCP Server Builder"
command: "/mcp-server-builder"
category: "tool-integration"
tags:
  - "mcp"
  - "tools"
  - "api"
  - "integration"
complexity: "advanced"
platforms:
  - "claude-code"
  - "cursor"
  - "gemini-cli"
  - "mcp"
featured: true
description: "Hướng dẫn agent xây dựng MCP server chuẩn — kết nối AI agents với databases, APIs, và external tools."
oneLiner: "Build the USB-C connector for your AI agent."
sourceUrl: "https://modelcontextprotocol.io"
sourceAuthor: "Anthropic"
lastVerified: "2026-05-29"
relatedSkills:
  - "nextjs-expert"
seoTitle: "MCP Server Builder — Skillbook Agents"
seoDescription: "Skill hướng dẫn xây dựng MCP server kết nối AI agents với external tools và databases."
---

## 📖 Tại Sao Cần Skill Này?

Model Context Protocol (MCP) là "USB-C cho AI" — chuẩn giao tiếp giữa AI agents và external tools/data. Không có MCP, agent bị giới hạn trong sandbox — không đọc được database, không gọi được API, không tương tác được với hệ thống bên ngoài.

Khi không biết xây MCP server:
- **Agent bị cô lập** — chỉ làm việc với text, không kết nối real-world data
- **Custom integration mỗi lần** — viết lại connector cho mỗi agent platform
- **Không reusable** — code chỉ chạy trên 1 platform cụ thể

MCP server cho phép viết 1 lần, chạy trên mọi MCP-compatible agent (Claude, Cursor, Gemini CLI, ...).

## ⚙️ Cách Hoạt Động

```
┌─────────────┐     MCP Protocol      ┌──────────────┐
│  AI Agent    │ ◄──────────────────► │  MCP Server   │
│  (Client)    │   JSON-RPC 2.0       │               │
│              │   stdio / HTTP SSE   │  ├── Tools    │
│  - Cursor    │                      │  ├── Resources│
│  - Claude    │                      │  └── Prompts  │
│  - Gemini    │                      │               │
└─────────────┘                       └───────┬───────┘
                                              │
                                      ┌───────▼───────┐
                                      │  External      │
                                      │  - Database    │
                                      │  - API         │
                                      │  - File System │
                                      └───────────────┘
```

MCP Server expose 3 loại capability:
- **Tools** — functions mà agent có thể gọi (query DB, call API)
- **Resources** — data sources agent có thể đọc (files, configs)
- **Prompts** — template prompts agent có thể sử dụng

## 🚀 Cách Sử Dụng

### Skill Instruction cho Agent

```markdown
## MCP Server Development Guide

When building an MCP server:

1. **Use TypeScript SDK**: `@modelcontextprotocol/sdk`
2. **Transport**: Use stdio for local, HTTP+SSE for remote
3. **Tool Definition**: Each tool needs:
   - Clear name (verb_noun format: `query_database`, `send_email`)
   - JSON Schema for input parameters
   - Descriptive annotation for the AI to understand usage
4. **Error Handling**: Always return structured errors, never crash
5. **Security**: Validate all inputs, use least-privilege access

### Basic MCP Server Template:

\```typescript
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";

const server = new McpServer({
  name: "my-mcp-server",
  version: "1.0.0",
});

server.tool("query_data", { query: { type: "string" } }, async ({ query }) => {
  // Implementation here
  return { content: [{ type: "text", text: result }] };
});

const transport = new StdioServerTransport();
await server.connect(transport);
\```
```

## 💡 Ví Dụ Thực Tế

### MCP Server kết nối PostgreSQL:

```typescript
server.tool(
  "query_database",
  {
    sql: { type: "string", description: "SQL query to execute" },
    params: { type: "array", description: "Query parameters" },
  },
  async ({ sql, params }) => {
    try {
      const result = await pool.query(sql, params);
      return {
        content: [{
          type: "text",
          text: JSON.stringify(result.rows, null, 2),
        }],
      };
    } catch (error) {
      return {
        content: [{ type: "text", text: `Error: ${error.message}` }],
        isError: true,
      };
    }
  }
);
```

## ⚠️ Lưu Ý & Gotchas

- **Security first** — MCP server có quyền truy cập real data. Luôn validate, sanitize, và limit permissions
- **Keep tools focused** — 1 tool = 1 việc. Đừng tạo "god tool" làm mọi thứ
- **Test thoroughly** — dùng MCP Inspector để test server trước khi deploy
- **Version your schema** — khi thay đổi tool schema, agent cũ có thể bị break
