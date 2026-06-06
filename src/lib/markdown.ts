// 1. Helper to escape HTML characters & apply premium syntax highlighting
export function highlightSyntax(rawCode: string, lang: string): string {
  const escaped = rawCode
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  if (!lang) return escaped;

  const l = lang.toLowerCase();

  if (["javascript", "typescript", "js", "ts", "jsx", "tsx", "json"].includes(l)) {
    const tokenRegex = /(\/\/.*|\/\*[\s\S]*?\*\/)|("[^"\\]*(?:\\.[^"\\]*)*"|'[^'\\]*(?:\\.[^'\\]*)*'|`[^`\\]*(?:\\.[^`\\]*)*`)|(\b\d+\b)|(\b(?:const|let|var|function|return|import|export|from|class|extends|interface|type|default|as|new|typeof|async|await|try|catch|finally|if|else|for|while|do|switch|case|break|continue|throw)\b)|(\b(?:string|number|boolean|any|void|unknown|never|React|useState|useEffect|useMemo|useCallback|useRef|window|document|console|Promise|null|undefined|true|false)\b)/g;

    return escaped.replace(tokenRegex, (match, comment, str, num, keyword, builtin) => {
      if (comment) return `<span class="text-zinc-500 italic">${comment}</span>`;
      if (str) return `<span class="text-emerald-400">${str}</span>`;
      if (num) return `<span class="text-amber-400">${num}</span>`;
      if (keyword) return `<span class="text-pink-400 font-medium">${keyword}</span>`;
      if (builtin) return `<span class="text-cyan-400 font-medium">${builtin}</span>`;
      return match;
    });
  }

  if (["bash", "sh", "shell", "cmd", "powershell", "ps1"].includes(l)) {
    const tokenRegex = /(#.*)|("[^"\\]*(?:\\.[^"\\]*)*"|'[^'\\]*(?:\\.[^'\\]*)*')|(\b(?:npm|yarn|pnpm|bun|npx|git|cd|mkdir|rm|cp|mv|ls|echo|curl|wget|chmod)\b)|(\/[a-zA-Z0-9_-]+)/g;

    return escaped.replace(tokenRegex, (match, comment, str, cmd, slashCmd) => {
      if (comment) return `<span class="text-zinc-500 italic">${comment}</span>`;
      if (str) return `<span class="text-emerald-400">${str}</span>`;
      if (cmd) return `<span class="text-pink-400 font-medium">${cmd}</span>`;
      if (slashCmd) return `<span class="text-sky-400 font-semibold">${slashCmd}</span>`;
      return match;
    });
  }

  return escaped;
}

// 2. Inline Markdown Parser for nested elements
export function parseInlineMarkdown(text: string): string {
  let html = text;

  // Escape HTML entities to prevent rendering issues
  html = html
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  // Bold: **text**
  html = html.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");

  // Italic: *text*
  html = html.replace(/\*([^*]+)\*/g, "<em>$1</em>");

  // Inline code: `code`
  html = html.replace(/`([^`]+)`/g, "<code>$1</code>");

  // Links: [text](url)
  // WARNING: To prevent XSS (Cross-Site Scripting) attacks, we validate the URL protocol.
  // We explicitly block dangerous protocols such as javascript:, data:, and vbscript:.
  // If a dangerous protocol is detected, we render the text as a span to block the link.
  html = html.replace(
    /\[([^\]]+)\]\(([^)]+)\)/g,
    (match, text, url) => {
      const cleanUrl = url.trim().toLowerCase();
      if (
        cleanUrl.startsWith("javascript:") ||
        cleanUrl.startsWith("data:") ||
        cleanUrl.startsWith("vbscript:")
      ) {
        console.warn(`[XSS Prevention] Blocked potentially dangerous URL protocol in markdown link: ${url}`);
        return `<span>${text}</span>`;
      }
      return `<a href="${url}" target="_blank" rel="noopener noreferrer" class="text-[var(--color-accent-primary)] hover:underline font-medium break-words">${text}</a>`;
    }
  );

  return html;
}

// 3. Robust stack-based parser for nested list blocks
export function parseNestedLists(lines: string[]): string {
  let html = "";
  const stack: { indent: number; type: "ul" | "ol" }[] = [];

  for (let idx = 0; idx < lines.length; idx++) {
    const line = lines[idx];
    const match = line.match(/^(\s*)(?:(-|\*|\+)|\d+\.)\s+(.*)$/);

    if (!match) {
      if (line.trim() !== "" && stack.length > 0) {
        html += " " + parseInlineMarkdown(line.trim());
      }
      continue;
    }

    const indent = match[1].length;
    const isUnordered = !!match[2];
    const type: "ul" | "ol" = isUnordered ? "ul" : "ol";
    const listClass = type === "ul" ? 'class="list-disc pl-5 my-2 space-y-1"' : 'class="list-decimal pl-5 my-2 space-y-1"';
    const content = parseInlineMarkdown(match[3]);

    while (stack.length > 0 && indent < stack[stack.length - 1].indent) {
      const popped = stack.pop();
      html += `</li></${popped?.type}>\n`;
    }

    if (stack.length === 0) {
      stack.push({ indent, type });
      html += `<${type} ${listClass}>\n<li>${content}`;
    } else {
      const top = stack[stack.length - 1];
      if (indent > top.indent) {
        stack.push({ indent, type });
        html += `\n<${type} ${listClass}>\n<li>${content}`;
      } else {
        if (type !== top.type) {
          stack.pop();
          html += `</li>\n</${top.type}>\n<${type} ${listClass}>\n<li>${content}`;
          stack.push({ indent, type });
        } else {
          html += `</li>\n<li>${content}`;
        }
      }
    }
  }

  while (stack.length > 0) {
    const popped = stack.pop();
    html += `</li>\n</${popped?.type}>`;
  }

  return html;
}

// 4. Table parser with proper alignments and styles
export function parseMarkdownTable(lines: string[]): string {
  if (lines.length === 0) return "";

  const getCells = (line: string): string[] => {
    const parts = line.split("|");
    if (parts[0].trim() === "") parts.shift();
    if (parts[parts.length - 1].trim() === "") parts.pop();
    return parts.map((cell) => cell.trim());
  };

  const headerCells = getCells(lines[0]);
  const alignCells = lines.length > 1 ? getCells(lines[1]) : [];
  const alignments = alignCells.map((cell) => {
    const left = cell.startsWith(":");
    const right = cell.endsWith(":");
    if (left && right) return "center";
    if (right) return "right";
    return "left";
  });

  const getAlignClass = (index: number): string => {
    const align = alignments[index] || "left";
    if (align === "center") return "text-center";
    if (align === "right") return "text-right";
    return "text-left";
  };

  let thead = "";
  if (headerCells.length > 0) {
    const ths = headerCells
      .map(
        (cell, idx) =>
          `<th class="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-[var(--color-text-primary)] border-b border-[var(--color-border)] ${getAlignClass(
            idx
          )}">${parseInlineMarkdown(cell)}</th>`
      )
      .join("");
    thead = `<thead><tr class="bg-[var(--color-bg-secondary)]">${ths}</tr></thead>`;
  }

  const rows: string[] = [];
  for (let idx = 2; idx < lines.length; idx++) {
    const cells = getCells(lines[idx]);
    const tds = cells
      .map(
        (cell, cellIdx) =>
          `<td class="px-4 py-3 text-sm text-[var(--color-text-secondary)] border-b border-[var(--color-border)] ${getAlignClass(
            cellIdx
          )}">${parseInlineMarkdown(cell)}</td>`
      )
      .join("");
    rows.push(`<tr class="hover:bg-[var(--color-bg-card-hover)]/30 transition-colors duration-150">${tds}</tr>`);
  }
  const tbody = `<tbody>${rows.join("")}</tbody>`;

  return `
    <div class="overflow-x-auto my-6 border border-[var(--color-border)] rounded-xl shadow-sm">
      <table class="min-w-full border-collapse align-middle font-sans">
        ${thead}
        ${tbody}
      </table>
    </div>
  `;
}

// Whitelist of safe language identifiers that may appear in the `lang` slot of
// a fenced code block. Anything else is stripped to prevent the markdown
// parser from injecting attacker-controlled content into the rendered
// `<code class="language-${lang}">` attribute. Keep this list in sync with
// `highlightSyntax()` in this file.
const SAFE_LANG_PATTERN = /^[a-z0-9+#.-]{1,30}$/i;
function sanitizeLang(raw: string): string {
  if (!raw) return "";
  return SAFE_LANG_PATTERN.test(raw) ? raw : "";
}

// 5. Master Block-Level Markdown Parser
export function parseMarkdownToHtml(md: string): string {
  const lines = md.replace(/\r/g, "").split("\n");
  const blocks: string[] = [];

  let i = 0;
  while (i < lines.length) {
    const line = lines[i];

    // 1. Code Blocks
    if (line.trim().startsWith("```")) {
      const backtickMatch = line.trim().match(/^(~{3,4}|`{3,4})/);
      const backticks = backtickMatch ? backtickMatch[1] : "```";
      const lang = sanitizeLang(line.trim().substring(backticks.length).trim());
      const codeLines: string[] = [];
      i++;
      while (i < lines.length && !lines[i].trim().startsWith(backticks)) {
        codeLines.push(lines[i]);
        i++;
      }
      i++; // Skip closing backticks

      const rawCode = codeLines.join("\n");
      const highlightedCode = highlightSyntax(rawCode, lang);
      // `lang` is already sanitized via `sanitizeLang()` above, so it can be
      // safely interpolated as an attribute. The code body is escaped inside
      // `highlightSyntax()` so no further encoding is required here.
      const langAttr = lang ? ` class="language-${lang}"` : "";
      blocks.push(`<pre><code${langAttr}>${highlightedCode}</code></pre>`);
      continue;
    }

    // 2. Blank Lines
    if (line.trim() === "") {
      i++;
      continue;
    }

    // 3. Headers
    if (line.startsWith("### ")) {
      blocks.push(`<h3>${parseInlineMarkdown(line.substring(4))}</h3>`);
      i++;
      continue;
    }
    if (line.startsWith("## ")) {
      blocks.push(`<h2>${parseInlineMarkdown(line.substring(3))}</h2>`);
      i++;
      continue;
    }

    // 4. Blockquotes
    if (line.startsWith("> ")) {
      const bqLines: string[] = [];
      while (i < lines.length && lines[i].startsWith("> ")) {
        bqLines.push(lines[i].substring(2));
        i++;
      }
      const bqContent = parseMarkdownToHtml(bqLines.join("\n"));
      blocks.push(`<blockquote>${bqContent}</blockquote>`);
      continue;
    }

    // 5. Tables
    if (
      line.trim().startsWith("|") &&
      i + 1 < lines.length &&
      lines[i + 1].trim().startsWith("|") &&
      lines[i + 1].includes("-")
    ) {
      const tableLines: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith("|")) {
        tableLines.push(lines[i].trim());
        i++;
      }

      const tableHtml = parseMarkdownTable(tableLines);
      blocks.push(tableHtml);
      continue;
    }

    // 6. Nested Lists
    const listPattern = /^(\s*)(?:(-|\*|\+)|\d+\.)\s+(.*)$/;
    if (listPattern.test(line)) {
      const listLines: string[] = [];
      while (
        i < lines.length &&
        (listPattern.test(lines[i]) || (lines[i].trim() !== "" && lines[i].startsWith(" ")))
      ) {
        listLines.push(lines[i]);
        i++;
      }
      const listHtml = parseNestedLists(listLines);
      blocks.push(listHtml);
      continue;
    }

    // 7. Standalone paragraphs
    const pLines: string[] = [];
    while (
      i < lines.length &&
      lines[i].trim() !== "" &&
      !lines[i].trim().startsWith("```") &&
      !lines[i].startsWith("##") &&
      !lines[i].startsWith("> ") &&
      !lines[i].trim().startsWith("|") &&
      !listPattern.test(lines[i])
    ) {
      pLines.push(lines[i]);
      i++;
    }

    if (pLines.length > 0) {
      const pContent = parseInlineMarkdown(pLines.join(" "));
      blocks.push(`<p>${pContent}</p>`);
    } else {
      // Fallback for single unmatched line
      blocks.push(`<p>${parseInlineMarkdown(line)}</p>`);
      i++;
    }
  }

  return blocks.join("\n");
}
