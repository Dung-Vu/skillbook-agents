"use client";

import { useMemo, useState, useEffect, useRef, memo, forwardRef } from "react";
import { PLATFORM_CONFIG, PlatformId } from "@/types/skill";
import { motion, useScroll, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

interface SkillDetailClientProps {
  content: string;
  platforms?: string[];
}

// 1. Helper to escape HTML characters & apply premium syntax highlighting
function highlightSyntax(rawCode: string, lang: string): string {
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
function parseInlineMarkdown(text: string): string {
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
  html = html.replace(
    /\[([^\]]+)\]\(([^)]+)\)/g,
    '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-[var(--color-accent-primary)] hover:underline font-medium">$1</a>'
  );

  return html;
}

// 3. Robust stack-based parser for nested list blocks
function parseNestedLists(lines: string[]): string {
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
function parseMarkdownTable(lines: string[]): string {
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
    rows.push(`<tr class="hover:bg-[var(--color-bg-hover)]/30 transition-colors duration-150">${tds}</tr>`);
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

// 5. Master Block-Level Markdown Parser
function parseMarkdownToHtml(md: string): string {
  const lines = md.replace(/\r/g, "").split("\n");
  const blocks: string[] = [];

  let i = 0;
  while (i < lines.length) {
    const prevI = i;
    const line = lines[i];

    // 1. Code Blocks
    if (line.trim().startsWith("```")) {
      const match = line.trim().match(/^```(\w*)/);
      const lang = match ? match[1] : "";
      const codeLines: string[] = [];
      i++;
      while (i < lines.length && !lines[i].trim().startsWith("```")) {
        codeLines.push(lines[i]);
        i++;
      }
      i++; // Skip closing ```

      const rawCode = codeLines.join("\n");
      const highlightedCode = highlightSyntax(rawCode, lang);
      blocks.push(`<pre><code class="language-${lang}">${highlightedCode}</code></pre>`);
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
      !lines[i].startsWith("## ") &&
      !lines[i].startsWith("### ") &&
      !lines[i].startsWith("> ") &&
      !listPattern.test(lines[i])
    ) {
      pLines.push(lines[i]);
      i++;
    }
    const pContent = parseInlineMarkdown(pLines.join(" "));
    blocks.push(`<p>${pContent}</p>`);

    // Fallback to prevent infinite loops if no block matched and i didn't progress
    if (i === prevI) {
      blocks.push(`<p>${parseInlineMarkdown(line)}</p>`);
      i++;
    }
  }

  return blocks.join("\n");
}

export function SkillDetailClient({
  content,
  platforms = ["universal"],
}: SkillDetailClientProps): React.ReactElement {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<string>("");
  const [headings, setHeadings] = useState<{ id: string; text: string; level: number }[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  const htmlContent = useMemo(() => parseMarkdownToHtml(content), [content]);

  // Read selectedPlatform from localStorage safely (Next.js hydration compatibility)
  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("selectedPlatform");
      const timer = setTimeout(() => {
        if (saved && platforms.includes(saved)) {
          setSelectedPlatform(saved);
        } else if (platforms.length > 0) {
          setSelectedPlatform(platforms[0]);
        } else {
          setSelectedPlatform("universal");
        }
      }, 0);
      return () => clearTimeout(timer);
    }
  }, [platforms]);

  const selectPlatform = (platform: string) => {
    setSelectedPlatform(platform);
    if (typeof window !== "undefined") {
      localStorage.setItem("selectedPlatform", platform);
    }
  };

  // Unified Client-Side UX Enhancements Hook
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // --- 1. EXTRACT HEADINGS & SET IDs ---
    const headingElements = container.querySelectorAll("h2, h3");
    const items: { id: string; text: string; level: number }[] = [];

    headingElements.forEach((el, index) => {
      let id = el.id;
      if (!id) {
        id = el.textContent
          ? el.textContent
              .toLowerCase()
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "") // Bỏ dấu tiếng Việt
              .replace(/[^a-z0-9]+/g, "-") // Thay ký tự đặc biệt bằng gạch ngang
              .replace(/(^-|-$)/g, "") // Bỏ gạch ngang ở đầu/cuối
          : `heading-${index}`;
        if (!id) id = `heading-${index}`;
        el.id = id;
      }

      items.push({
        id,
        text: el.textContent || "",
        level: el.tagName === "H2" ? 2 : 3,
      });
    });

    setHeadings(items);

    // --- 2. INJECT COPY BUTTONS ON PRE ELEMENTS WITH PREMIUM MICRO-UX ---
    const preBlocks = container.querySelectorAll("pre");
    preBlocks.forEach((pre) => {
      if (pre.parentElement?.classList.contains("code-block-wrapper")) return;

      const wrapper = document.createElement("div");
      wrapper.className = "code-block-wrapper relative group/wrapper my-4 w-full";

      pre.parentNode?.insertBefore(wrapper, pre);
      wrapper.appendChild(pre);

      // Create Premium Copy Button with absolute Tooltip inside it
      const button = document.createElement("button");
      button.type = "button";
      button.className =
        "copy-button absolute top-3 right-3 p-1.5 rounded-lg border border-white/10 " +
        "bg-zinc-900/80 hover:bg-zinc-800 text-zinc-400 hover:text-white opacity-0 group-hover/wrapper:opacity-100 transition-all duration-300 " +
        "flex items-center justify-center shadow-sm cursor-pointer z-10 hover:border-emerald-500/50 hover:shadow-[0_0_12px_rgba(16,185,129,0.15)] " +
        "active:scale-95 group/btn";

      const tooltip = document.createElement("span");
      tooltip.className =
        "absolute bottom-full right-0 mb-2 px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 " +
        "text-[10px] font-medium text-zinc-300 opacity-0 group-hover/btn:opacity-100 transition-all duration-200 " +
        "pointer-events-none shadow-md z-20 whitespace-nowrap transform translate-y-1 group-hover/btn:translate-y-0";
      tooltip.innerText = "Copy command";
      button.appendChild(tooltip);

      const iconContainer = document.createElement("div");
      iconContainer.className = "relative w-3.5 h-3.5 flex items-center justify-center";
      iconContainer.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="copy-svg transition-all duration-300 transform scale-100 opacity-100"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="check-svg absolute transition-all duration-300 transform scale-0 opacity-0 text-emerald-400"><path d="M20 6 9 17l-5-5"/></svg>
      `;
      button.appendChild(iconContainer);

      button.addEventListener("click", async () => {
        const codeText = pre.querySelector("code")?.textContent || pre.innerText || "";
        try {
          await navigator.clipboard.writeText(codeText);

          const copySvg = button.querySelector(".copy-svg");
          const checkSvg = button.querySelector(".check-svg");

          tooltip.innerText = "Copied!";
          tooltip.className = tooltip.className
            .replace("text-zinc-300", "text-emerald-400")
            .replace("border-zinc-800", "border-emerald-500/30");

          button.classList.add("border-emerald-500/50", "bg-emerald-950/20", "text-emerald-400");
          button.classList.remove("border-white/10", "bg-zinc-900/80", "text-zinc-400", "hover:text-white");

          copySvg?.classList.add("scale-0", "opacity-0");
          copySvg?.classList.remove("scale-100", "opacity-100");

          checkSvg?.classList.add("scale-100", "opacity-100");
          checkSvg?.classList.remove("scale-0", "opacity-0");

          setTimeout(() => {
            tooltip.innerText = "Copy command";
            tooltip.className = tooltip.className
              .replace("text-emerald-400", "text-zinc-300")
              .replace("border-emerald-500/30", "border-zinc-800");

            button.classList.remove("border-emerald-500/50", "bg-emerald-950/20", "text-emerald-400");
            button.classList.add("border-white/10", "bg-zinc-900/80", "text-zinc-400", "hover:text-white");

            copySvg?.classList.remove("scale-0", "opacity-0");
            copySvg?.classList.add("scale-100", "opacity-100");

            checkSvg?.classList.remove("scale-100", "opacity-100");
            checkSvg?.classList.add("scale-0", "opacity-0");
          }, 2000);
        } catch (err) {
          console.error("Failed to copy code: ", err);
        }
      });

      wrapper.appendChild(button);
    });

    // --- 3. PLATFORM GROUPING AND VISIBILITY ---
    if (!selectedPlatform) return;

    const children = Array.from(container.children);

    // 3.1. Find H2 "Cách Sử Dụng"
    const usageHeaderIndex = children.findIndex(
      (el) =>
        el.tagName === "H2" &&
        (el.textContent?.includes("Cách Sử Dụng") ||
          el.textContent?.includes("Cách sử dụng") ||
          el.textContent?.toLowerCase().includes("how to use"))
    );
    if (usageHeaderIndex === -1) return;

    // 3.2. Find next H2 to determine the bound
    let nextHeaderIndex = children.findIndex((el, idx) => idx > usageHeaderIndex && el.tagName === "H2");
    if (nextHeaderIndex === -1) nextHeaderIndex = children.length;

    // 3.3. Remove existing wrappers to avoid duplicate nesting
    const existingWrappers = container.querySelectorAll(".platform-wrapper-block");
    if (existingWrappers.length > 0) {
      existingWrappers.forEach((wrapper) => {
        while (wrapper.firstChild) {
          wrapper.parentNode?.insertBefore(wrapper.firstChild, wrapper);
        }
        wrapper.parentNode?.removeChild(wrapper);
      });
    }

    // Reload list of children after unpacking wrappers
    const freshChildren = Array.from(container.children);
    const freshNextHeaderIndex =
      freshChildren.findIndex((el, idx) => idx > usageHeaderIndex && el.tagName === "H2") === -1
        ? freshChildren.length
        : freshChildren.findIndex((el, idx) => idx > usageHeaderIndex && el.tagName === "H2");

    // 3.4. Group siblings between H2 "Cách Sử Dụng" and next H2
    interface PlatformGroup {
      targetPlatforms: string[];
      elements: Element[];
    }
    const groups: PlatformGroup[] = [];
    let currentGroup: PlatformGroup | null = null;

    for (let i = usageHeaderIndex + 1; i < freshNextHeaderIndex; i++) {
      const el = freshChildren[i];

      if (
        el.tagName === "H3" ||
        (el.classList.contains("platform-wrapper-block") &&
          (el.firstChild as Element | null)?.tagName === "H3")
      ) {
        // If it's wrapped or raw H3
        const targetEl = el.tagName === "H3" ? el : (el.firstChild as Element);
        const text = targetEl.textContent?.toLowerCase() || "";
        const targetPlatforms: string[] = [];

        if (text.includes("cursor")) targetPlatforms.push("cursor");
        if (text.includes("windsurf")) targetPlatforms.push("windsurf");
        if (text.includes("claude code") || text.includes("claude-code") || text.includes("claude"))
          targetPlatforms.push("claude-code");
        if (
          text.includes("universal") ||
          text.includes("mọi platform") ||
          text.includes("chung") ||
          text.includes("mọi agent")
        )
          targetPlatforms.push("universal");
        if (text.includes("gemini")) targetPlatforms.push("gemini-cli");
        if (text.includes("copilot")) targetPlatforms.push("copilot");
        if (text.includes("openai") || text.includes("codex")) targetPlatforms.push("openai-codex");
        if (text.includes("mcp")) targetPlatforms.push("mcp");

        if (targetPlatforms.length === 0) targetPlatforms.push("universal");

        currentGroup = { targetPlatforms, elements: [el] };
        groups.push(currentGroup);
      } else {
        if (currentGroup) {
          currentGroup.elements.push(el);
        } else {
          currentGroup = { targetPlatforms: ["universal"], elements: [el] };
          groups.push(currentGroup);
        }
      }
    }

    // 3.5. Wrap each group's elements into a platform-wrapper-block
    groups.forEach((group) => {
      if (group.elements.length === 0) return;
      const firstEl = group.elements[0];

      // If it is already wrapped in platform-wrapper-block, do not double wrap
      if (firstEl.classList.contains("platform-wrapper-block")) return;

      const wrapper = document.createElement("div");
      wrapper.className = "platform-wrapper-block transition-all duration-300 w-full";
      wrapper.setAttribute("data-platforms", group.targetPlatforms.join(" "));

      firstEl.parentNode?.insertBefore(wrapper, firstEl);
      group.elements.forEach((el) => {
        wrapper.appendChild(el);
      });
    });

    // 3.6. Show / Hide based on selectedPlatform and handle Fallback
    const activeWrappers = container.querySelectorAll(".platform-wrapper-block");
    let hasMatch = false;

    // 3.6.1: Find exact match
    activeWrappers.forEach((wrapper) => {
      const platforms = wrapper.getAttribute("data-platforms")?.split(" ") || [];
      if (platforms.includes(selectedPlatform)) {
        wrapper.classList.remove("hidden");
        wrapper.classList.add("block");
        hasMatch = true;
      } else {
        wrapper.classList.remove("block");
        wrapper.classList.add("hidden");
      }
    });

    // 3.6.2: Fallback to Universal if no match was found for the selected platform
    if (!hasMatch) {
      activeWrappers.forEach((wrapper) => {
        const platforms = wrapper.getAttribute("data-platforms")?.split(" ") || [];
        if (platforms.includes("universal")) {
          wrapper.classList.remove("hidden");
          wrapper.classList.add("block");
        } else {
          wrapper.classList.remove("block");
          wrapper.classList.add("hidden");
        }
      });
    }
  }, [selectedPlatform, htmlContent]);

  // Precision Viewport Coordinate Scroll Tracking for TOC Active Highlight
  useEffect(() => {
    if (headings.length === 0) return;

    const handleScroll = () => {
      const scrollOffset = 120; // px from top of viewport (below sticky header)
      let activeHeadingId = "";

      for (let i = 0; i < headings.length; i++) {
        const heading = headings[i];
        const el = document.getElementById(heading.id);
        if (!el) continue;

        const rect = el.getBoundingClientRect();

        // If the heading has crossed or reached the scrollOffset threshold line
        if (rect.top <= scrollOffset) {
          activeHeadingId = heading.id;
        } else {
          // Headings are ordered; once we find one below the threshold, we can stop
          break;
        }
      }

      // Default to the first heading if none are above the scroll offset line
      if (!activeHeadingId && headings.length > 0) {
        activeHeadingId = headings[0].id;
      }

      setActiveId(activeHeadingId);
    };

    // Run once on mount to set initial highlight
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [headings]);

  // Framer Motion Scroll Progress for main detail container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Smooth scroll to with precise offset for sticky header prevention
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      const headerOffset = 100; // custom offset to prevent hiding titles under sticky header
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      if (typeof window !== "undefined") {
        window.history.pushState(null, "", `#${id}`);
      }
      setActiveId(id);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start w-full">
      {/* Table of Contents Sidebar - Only on Desktop */}
      <aside className="hidden lg:block lg:col-span-3 sticky top-28 max-h-[calc(100vh-8rem)] overflow-y-auto pr-6 relative">
        {/* Glowing Cyberpunk Scroll Progress Line */}
        <div className="absolute right-0 top-0 bottom-0 w-[2px] bg-white/5 rounded-full overflow-hidden">
          <motion.div
            className="w-full origin-top h-full bg-gradient-to-b from-[var(--color-cyber-violet)] via-[var(--color-neon-indigo)] to-[var(--color-accent-primary)] shadow-[0_0_8px_rgba(139,92,246,0.6)]"
            style={{ scaleY }}
          />
        </div>

        <div className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)] mb-4">
          Mục Lục Bài Viết
        </div>
        {headings.length === 0 ? (
          <p className="text-xs text-[var(--color-text-muted)] italic">Không có mục lục</p>
        ) : (
          <ul className="space-y-2">
            {headings.map((h) => (
              <li key={h.id} style={{ paddingLeft: h.level === 3 ? "1rem" : "0px" }}>
                <a
                  href={`#${h.id}`}
                  onClick={(e) => handleScrollTo(e, h.id)}
                  className={`block text-xs py-1 border-l-2 transition-all duration-200 no-underline ${
                    activeId === h.id
                      ? "border-[var(--color-accent-primary)] text-[var(--color-accent-primary)] font-semibold pl-3"
                      : "border-transparent text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] hover:border-[var(--color-border)] pl-2"
                  }`}
                >
                  {h.text}
                </a>
              </li>
            ))}
          </ul>
        )}
      </aside>

      {/* Main content pane */}
      <div className="lg:col-span-9 w-full">
        {/* Platform Tab Switcher - Upgraded with Framer Motion Sliding Backdrop */}
        {platforms.length > 0 && (
          <div className="flex items-center gap-2 border-b border-[var(--color-border)] pb-3 mb-6 overflow-x-auto scrollbar-none relative">
            <span className="text-xs font-semibold text-[var(--color-text-muted)] mr-2 whitespace-nowrap">
              Nền tảng hiển thị:
            </span>
            {platforms.map((p) => {
              const config = PLATFORM_CONFIG[p as PlatformId] || { label: p, color: "#999" };
              const isActive = selectedPlatform === p;
              return (
                <button
                  key={p}
                  onClick={() => selectPlatform(p)}
                  className={cn(
                    "relative px-3.5 py-1.5 text-xs font-medium rounded-full transition-colors duration-300 cursor-pointer whitespace-nowrap z-10 flex items-center shrink-0",
                    isActive
                      ? "text-[var(--color-text-primary)] font-semibold"
                      : "text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)]"
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activePlatformBubble"
                      className="absolute inset-0 rounded-full border -z-10 shadow-[0_0_12px_rgba(0,0,0,0.5)]"
                      style={{
                        backgroundColor: `${config.color}15`,
                        borderColor: `${config.color}35`,
                        boxShadow: `0 0 15px ${config.color}10`,
                      }}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span
                    className="inline-block w-2 h-2 rounded-full mr-1.5 shrink-0"
                    style={{ backgroundColor: config.color }}
                  />
                  {config.label}
                </button>
              );
            })}
          </div>
        )}

        <MarkdownContent ref={containerRef} htmlContent={htmlContent} />
      </div>
    </div>
  );
}

const MarkdownContent = memo(
  forwardRef<HTMLDivElement, { htmlContent: string }>(({ htmlContent }, ref) => {
    return <div ref={ref} className="skill-content" dangerouslySetInnerHTML={{ __html: htmlContent }} />;
  })
);
MarkdownContent.displayName = "MarkdownContent";
