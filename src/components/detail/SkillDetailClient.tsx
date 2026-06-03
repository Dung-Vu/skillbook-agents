"use client";

import { useMemo, useState, useEffect, useRef, memo, forwardRef } from "react";
import {
  PLATFORM_CONFIG,
  PlatformId,
  Skill,
  CategoryConfig,
} from "@/types/skill";
import {
  motion,
  useScroll,
  useSpring,
  AnimatePresence,
  useMotionValue,
  useMotionTemplate,
  Variants,
  MotionStyle,
} from "framer-motion";

interface CustomWindow extends Window {
  __canvasPaused?: boolean;
}
import { cn, formatDate } from "@/lib/utils";
import {
  ArrowUp,
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Calendar,
  HelpCircle,
  Cpu,
  Terminal,
  Lightbulb,
  AlertCircle,
  ChevronRight,
  BookOpen,
  XCircle,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";
import { useTransitionNavigator } from "@/hooks/useTransitionNavigator";
import { useLanguage } from "@/context/LanguageContext";

const getHeadingIcon = (text: string) => {
  const lower = text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  if (lower.includes("tai sao") || lower.includes("why")) return <HelpCircle size={13} className="shrink-0 text-indigo-400" />;
  if (lower.includes("cach hoat dong") || lower.includes("how it works")) return <Cpu size={13} className="shrink-0 text-blue-400" />;
  if (lower.includes("cach su dung") || lower.includes("how to use") || lower.includes("usage")) return <Terminal size={13} className="shrink-0 text-emerald-400" />;
  if (lower.includes("vi du") || lower.includes("example")) return <Lightbulb size={13} className="shrink-0 text-amber-400" />;
  if (lower.includes("luu y") || lower.includes("gotchas") || lower.includes("note")) return <AlertCircle size={13} className="shrink-0 text-rose-400" />;
  if (lower.includes("khong co skill")) return <XCircle size={12} className="shrink-0 text-red-500/80" />;
  if (lower.includes("co skill")) return <CheckCircle2 size={12} className="shrink-0 text-emerald-500/80" />;
  return <BookOpen size={13} className="shrink-0 text-zinc-400" />;
};

interface SkillDetailClientProps {
  slug: string;
  skill: Skill;
  category: CategoryConfig | undefined;
  relatedSkills: Skill[];
  prevSkill: Skill | null;
  nextSkill: Skill | null;
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

// 5. Master Block-Level Markdown Parser
function parseMarkdownToHtml(md: string): string {
  const lines = md.replace(/\r/g, "").split("\n");
  const blocks: string[] = [];

  let i = 0;
  while (i < lines.length) {
    const prevI = i;
    const line = lines[i];

    // 1. Code Blocks (Supports both 3 and 4 backticks for nested blocks)
    if (line.trim().startsWith("```")) {
      const backtickMatch = line.trim().match(/^(~{3,4}|`{3,4})/);
      const backticks = backtickMatch ? backtickMatch[1] : "```";
      const lang = line.trim().substring(backticks.length).trim();
      const codeLines: string[] = [];
      i++;
      while (i < lines.length && !lines[i].trim().startsWith(backticks)) {
        codeLines.push(lines[i]);
        i++;
      }
      i++; // Skip closing backticks

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

const pageVariants: Variants = {
  initial: { opacity: 0, scale: 1, filter: "blur(0px)" },
  animate: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.97,
    filter: "blur(4px)",
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

const heroVariants: Variants = {
  initial: { opacity: 0, y: -20, scale: 0.98 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 18,
      mass: 0.8,
      delay: 0.0,
    },
  },
};

const tocVariants: Variants = {
  initial: { opacity: 0, x: -15 },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 220,
      damping: 24,
      mass: 0.6,
      delay: 0.12,
    },
  },
};

const contentVariants: Variants = {
  initial: { opacity: 0, y: 30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 130,
      damping: 20,
      mass: 0.7,
      delay: 0.20,
    },
  },
};

const scrolledFadeInVariants: Variants = {
  initial: { opacity: 0, y: 40 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 18,
      mass: 0.8,
      delay: 0.10,
    },
  },
};

const scrolledViewport = { once: true, margin: "-100px" };

export function SkillDetailClient({
  slug,
  skill: rawSkill,
  category,
  relatedSkills: rawRelatedSkills,
  prevSkill: rawPrevSkill,
  nextSkill: rawNextSkill,
}: SkillDetailClientProps): React.ReactElement {
  const { language, t } = useLanguage();

  const skill = useMemo(() => {
    if (language === "en" && rawSkill.en) {
      return {
        ...rawSkill,
        title: rawSkill.en.title || rawSkill.title,
        description: rawSkill.en.description || rawSkill.description,
        oneLiner: rawSkill.en.oneLiner || rawSkill.oneLiner,
        content: rawSkill.en.content || rawSkill.content,
      };
    }
    return rawSkill;
  }, [rawSkill, language]);

  const relatedSkills = useMemo(() => {
    return rawRelatedSkills.map((s) => {
      if (language === "en" && s.en) {
        return {
          ...s,
          title: s.en.title || s.title,
          description: s.en.description || s.description,
          oneLiner: s.en.oneLiner || s.oneLiner,
          content: s.en.content || s.content,
        };
      }
      return s;
    });
  }, [rawRelatedSkills, language]);

  const prevSkill = useMemo(() => {
    if (!rawPrevSkill) return null;
    if (language === "en" && rawPrevSkill.en) {
      return {
        ...rawPrevSkill,
        title: rawPrevSkill.en.title || rawPrevSkill.title,
        description: rawPrevSkill.en.description || rawPrevSkill.description,
        oneLiner: rawPrevSkill.en.oneLiner || rawPrevSkill.oneLiner,
        content: rawPrevSkill.en.content || rawPrevSkill.content,
      };
    }
    return rawPrevSkill;
  }, [rawPrevSkill, language]);

  const nextSkill = useMemo(() => {
    if (!rawNextSkill) return null;
    if (language === "en" && rawNextSkill.en) {
      return {
        ...rawNextSkill,
        title: rawNextSkill.en.title || rawNextSkill.title,
        description: rawNextSkill.en.description || rawNextSkill.description,
        oneLiner: rawNextSkill.en.oneLiner || rawNextSkill.oneLiner,
        content: rawNextSkill.en.content || rawNextSkill.content,
      };
    }
    return rawNextSkill;
  }, [rawNextSkill, language]);
  const containerRef = useRef<HTMLDivElement>(null);
  const [headings, setHeadings] = useState<{ id: string; text: string; level: number }[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  const { isExiting, navigateTo } = useTransitionNavigator();

  useEffect(() => {
    if (typeof window !== "undefined") {
      (window as unknown as CustomWindow).__canvasPaused = false;
      window.dispatchEvent(new CustomEvent("canvas-resume"));
    }
  }, []);

  const htmlContent = useMemo(() => parseMarkdownToHtml(skill.content), [skill.content]);
  const platforms = useMemo(() => skill.platforms || ["universal"], [skill.platforms]);



  // 1. Chỉ thực hiện định hình cấu trúc DOM ban đầu một lần duy nhất khi Markdown Render thay đổi
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // --- 1.1. EXTRACT HEADINGS & SET IDs ---
    const headingElements = container.querySelectorAll("h2, h3");
    const items: { id: string; text: string; level: number }[] = [];

    headingElements.forEach((el, index) => {
      const rawText = el.textContent || "";
      // Regex loại bỏ emoji
      const cleanedText = rawText
        .replace(/[\u{1F300}-\u{1F9FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]|[\u{1F1E0}-\u{1F1FF}]/gu, "")
        .trim();
      
      // Cập nhật lại text của thẻ H2/H3 thực tế trong DOM để loại bỏ emoji cũ kỹ mà không phá vỡ các thẻ HTML con
      const removeEmojis = (node: ChildNode) => {
        if (node.nodeType === 3) { // TEXT_NODE
          node.textContent = (node.textContent || "")
            .replace(/[\u{1F300}-\u{1F9FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]|[\u{1F1E0}-\u{1F1FF}]/gu, "");
        } else {
          node.childNodes.forEach(removeEmojis);
        }
      };
      removeEmojis(el);

      let id = el.id;
      if (!id) {
        id = cleanedText
          ? cleanedText
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
        text: cleanedText,
        level: el.tagName === "H2" ? 2 : 3,
      });
    });

    setHeadings(items);

    // --- 1.2. INJECT COPY BUTTONS ON PRE ELEMENTS WITH PREMIUM MICRO-UX ---
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
        "copy-button absolute top-3 right-3 p-3 md:p-1.5 rounded-lg border border-white/10 " +
        "bg-zinc-900/80 hover:bg-zinc-800 text-zinc-400 hover:text-white opacity-100 md:opacity-0 md:group-hover/wrapper:opacity-100 transition-all duration-300 " +
        "flex items-center justify-center shadow-sm cursor-pointer z-10 hover:border-emerald-500/50 hover:shadow-[0_0_12px_rgba(16,185,129,0.15)] " +
        "active:scale-95 group/btn";

      const tooltip = document.createElement("span");
      tooltip.className =
        "absolute bottom-full right-0 mb-2 px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 " +
        "text-[10px] font-medium text-zinc-300 opacity-0 group-hover/btn:opacity-100 transition-all duration-200 " +
        "pointer-events-none shadow-md z-20 whitespace-nowrap transform translate-y-1 group-hover/btn:translate-y-0";
      tooltip.innerText = t("detail.copyCommand");
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
        let copied = false;
        
        try {
          await navigator.clipboard.writeText(codeText);
          copied = true;
        } catch {
          // Fallback to execCommand for headless test environments (lacks active window focus)
          try {
            const textArea = document.createElement("textarea");
            textArea.value = codeText;
            textArea.style.position = "fixed";
            textArea.style.left = "-9999px";
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
            copied = document.execCommand("copy");
            document.body.removeChild(textArea);
          } catch (fallbackErr) {
            console.error("Copy fallback failed: ", fallbackErr);
          }
        }

        if (copied) {
          const copySvg = button.querySelector(".copy-svg");
          const checkSvg = button.querySelector(".check-svg");

          tooltip.innerText = t("detail.copied");
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
            tooltip.innerText = t("detail.copyCommand");
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
        }
      });

      wrapper.appendChild(button);
    });

    // --- 1.3. PLATFORM GROUPING BAN ĐẦU ---
    const children = Array.from(container.children);

    // 1.3.1. Find H2 "Cách Sử Dụng"
    const usageHeaderIndex = children.findIndex(
      (el) =>
        el.tagName === "H2" &&
        (el.textContent?.includes("Cách Sử Dụng") ||
          el.textContent?.includes("Cách sử dụng") ||
          el.textContent?.toLowerCase().includes("how to use") ||
          el.textContent?.toLowerCase().includes("kích hoạt") ||
          el.textContent?.toLowerCase().includes("activation"))
    );
    if (usageHeaderIndex === -1) return;

    // 1.3.2. Find next H2 to determine the bound
    let nextHeaderIndex = children.findIndex((el, idx) => idx > usageHeaderIndex && el.tagName === "H2");
    if (nextHeaderIndex === -1) nextHeaderIndex = children.length;

    // 1.3.3. Remove existing wrappers to avoid duplicate nesting
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

    // 1.3.4. Group siblings between H2 "Cách Sử Dụng" and next H2
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

        if (targetPlatforms.length === 0) {
          targetPlatforms.push("universal");
        } else {
          // If none of the matched targetPlatforms are explicitly supported by this skill,
          // then this block should also be treated as 'universal' so it remains visible.
          const hasSupportedPlatform = targetPlatforms.some((p) => platforms.includes(p));
          if (!hasSupportedPlatform && !targetPlatforms.includes("universal")) {
            targetPlatforms.push("universal");
          }
        }

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

    // 1.3.5. Wrap each group's elements into a platform-wrapper-block
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
  }, [htmlContent, platforms]);

  // 2. Chuyển đổi trạng thái hiển thị nền tảng
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const activeWrappers = container.querySelectorAll(".platform-wrapper-block");
    activeWrappers.forEach((wrapper) => {
      wrapper.classList.remove("hidden");
      wrapper.classList.add("block");
    });

    // 2.3: Trích xuất danh sách các tiêu đề để hiển thị trong Mục Lục bài viết
    const headingElements = container.querySelectorAll("h2, h3");
    const visibleHeadings: { id: string; text: string; level: number }[] = [];

    headingElements.forEach((el, index) => {
      const rawText = el.textContent || "";
      const cleanedText = rawText
        .replace(/[\u{1F300}-\u{1F9FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]|[\u{1F1E0}-\u{1F1FF}]/gu, "")
        .trim();

      visibleHeadings.push({
        id: el.id || `heading-${index}`,
        text: cleanedText,
        level: el.tagName === "H2" ? 2 : 3,
      });
    });

    setHeadings(visibleHeadings);
  }, [htmlContent]);

  // R1: Tối ưu hoá TOC Active Link Tracking bằng IntersectionObserver (Không gây Layout Thrashing)
  useEffect(() => {
    if (headings.length === 0) return;

    const headingElements = headings
      .map((h) => document.getElementById(h.id))
      .filter((el): el is HTMLElement => el !== null);

    const headingVisibility = new Map<string, boolean>();
    const headingAbove = new Map<string, boolean>();

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        headingVisibility.set(entry.target.id, entry.isIntersecting);
        headingAbove.set(entry.target.id, entry.boundingClientRect.top < 120);
      });

      const activeHeading = headings.find((h) => headingVisibility.get(h.id));

      if (activeHeading) {
        setActiveId(activeHeading.id);
      } else {
        let lastPassedHeadingId = "";
        for (let i = headings.length - 1; i >= 0; i--) {
          if (headingAbove.get(headings[i].id)) {
            lastPassedHeadingId = headings[i].id;
            break;
          }
        }
        if (lastPassedHeadingId) {
          setActiveId(lastPassedHeadingId);
        } else if (headings.length > 0) {
          setActiveId(headings[0].id);
        }
      }
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: "-120px 0px -60% 0px",
      threshold: 0,
    });

    headingElements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
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

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", checkScroll, { passive: true });
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

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

      if (typeof window !== "undefined" && window.history.pushState) {
        window.history.pushState(null, "", `#${id}`);
      } else if (typeof window !== "undefined") {
        // eslint-disable-next-line react-hooks/immutability
        window.location.hash = id;
      }
      setActiveId(id);
    }
  };

  return (
    <>
      {/* Global Reading Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--color-cyber-violet)] via-[var(--color-neon-indigo)] to-[var(--color-accent-primary)] origin-left z-[100] shadow-[0_1px_10px_rgba(139,92,246,0.4)]"
        style={{ scaleX }}
      />

      <AnimatePresence mode="wait">
        <motion.main
          key={slug} // Bắt buộc dùng slug làm key để kích hoạt hoạt ảnh EXIT khi đổi trang
          variants={pageVariants}
          initial="initial"
          animate={isExiting ? "exit" : "animate"}
          exit="exit"
          className="min-h-screen pt-24 pb-20 px-6 w-full will-change-transform will-change-opacity origin-top transform-gpu"
        >
          <div className="max-w-7xl mx-auto">
            {/* R1: Hero Banner bọc trong motion.div */}
            <motion.div 
              variants={heroVariants}
              className="relative p-5 sm:p-10 rounded-2xl border border-[var(--color-border)] overflow-hidden mb-6 sm:mb-12 shadow-xl will-change-[transform,opacity] translate-z-0"
              style={{
                background: `linear-gradient(135deg, ${category ? `${category.color}10` : 'color-mix(in srgb, var(--color-cyber-violet) 10%, transparent)'} 0%, var(--color-bg-secondary) 100%)`,
                borderColor: category ? `${category.color}20` : 'color-mix(in srgb, var(--color-cyber-violet) 20%, transparent)'
              }}
            >
              {/* Dynamic Ambient Background Glow */}
              <div 
                className="absolute -right-20 -top-20 w-64 h-64 rounded-full blur-[80px] opacity-25 pointer-events-none"
                style={{
                  backgroundColor: category ? category.color : 'var(--color-cyber-violet)'
                }}
              />

              <div className="relative z-10">
                {/* Breadcrumb inside hero for cleaner layout */}
                <nav className="flex items-center gap-2 text-xs text-[var(--color-text-muted)] mb-4 sm:mb-6 flex-wrap font-mono select-none">
                  <Link
                    href="/skills"
                    onClick={(e) => navigateTo(e as unknown as React.MouseEvent<HTMLAnchorElement>, "/skills")}
                    className="hover:text-[var(--color-accent-primary)] no-underline transition-colors"
                  >
                    Skills
                  </Link>
                  <span>/</span>
                  {category && (
                    <>
                      <span className="hover:text-[var(--color-text-primary)] transition-colors">
                        {category.icon} {category.label}
                      </span>
                      <span>/</span>
                    </>
                  )}
                  <span className="text-[var(--color-text-primary)] font-medium">
                    {skill.command}
                  </span>
                </nav>

                <div className="flex items-start justify-between flex-wrap gap-3 mb-3 sm:mb-4">
                  <h1
                    className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight break-all"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    <span 
                      className="gradient-text font-bold"
                      style={{
                        backgroundImage: `linear-gradient(135deg, #ffffff 0%, ${category ? category.color : 'var(--color-cyber-violet)'} 100%)`
                      }}
                    >
                      {skill.command}
                    </span>
                  </h1>

                </div>



                <p className="text-base sm:text-lg text-[var(--color-text-secondary)] leading-relaxed max-w-4xl font-sans">
                  {skill.description}
                </p>



                <div className="flex items-center gap-4 flex-wrap mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-[var(--color-border)] select-none">
                  {skill.sourceUrl && (
                    <a
                      href={skill.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary text-[11px] py-1.5 px-3.5 flex items-center gap-1.5 no-underline hover:scale-102 active:scale-98"
                    >
                      <ExternalLink size={12} />
                      {t("detail.viewSource")}
                    </a>
                  )}
                  <div className="flex items-center gap-1.5 text-[11px] text-[var(--color-text-muted)] font-mono">
                    <Calendar size={12} />
                    <span>{t("detail.lastVerified")} {formatDate(skill.lastVerified)}</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Content & TOC Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start w-full">
              {/* Table of Contents Sidebar - Only on Desktop */}
              <motion.aside
                variants={tocVariants}
                className="hidden lg:block lg:col-span-3 sticky top-28 max-h-[calc(100vh-8rem)] overflow-y-auto pr-6 relative will-change-[transform,opacity] translate-z-0 transform-gpu translate-x-0"
              >
                {/* Glowing Cyberpunk Scroll Progress Line */}
                <div className="absolute right-0 top-0 bottom-0 w-[2px] bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    className="w-full origin-top h-full bg-gradient-to-b from-[var(--color-cyber-violet)] via-[var(--color-neon-indigo)] to-[var(--color-accent-primary)] shadow-[0_0_8px_rgba(139,92,246,0.6)]"
                    style={{ scaleY }}
                  />
                </div>

                <div className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)] mb-4">
                  {t("detail.toc")}
                </div>
                {headings.length === 0 ? (
                  <p className="text-xs text-[var(--color-text-muted)] italic">{t("detail.noToc")}</p>
                ) : (
                  <ul className="space-y-2 relative">
                    {headings.map((h) => (
                      <li key={h.id} className="relative py-1" style={{ paddingLeft: h.level === 3 ? "1rem" : "0px" }}>
                        <a
                          href={`#${h.id}`}
                          onClick={(e) => handleScrollTo(e, h.id)}
                          className={cn(
                            "flex items-center gap-2 text-xs py-1 transition-all duration-300 relative z-10 no-underline pl-3",
                            activeId === h.id
                              ? "text-[var(--color-accent-primary)] font-semibold"
                              : "text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)]"
                          )}
                        >
                          {h.level === 3 ? (
                            <ChevronRight size={10} className="shrink-0 text-zinc-500/60" />
                          ) : (
                            getHeadingIcon(h.text)
                          )}
                          <span>{h.text}</span>
                        </a>
                        {activeId === h.id && (
                          <motion.div
                            layoutId="activeTOC"
                            className="absolute inset-y-0 left-0 right-0 bg-[var(--color-accent-glow)] border-l-2 border-[var(--color-accent-primary)] rounded-r-md -z-10"
                            transition={{ type: "spring", stiffness: 350, damping: 30 }}
                          />
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </motion.aside>

              {/* Main content pane */}
              <motion.div
                variants={contentVariants}
                className="lg:col-span-9 w-full will-change-[transform,opacity] translate-z-0 transform-gpu"
              >


                <MarkdownContent ref={containerRef} htmlContent={htmlContent} />
              </motion.div>
            </div>

            {/* Related Skills */}
            {relatedSkills.length > 0 && (
              <motion.div
                initial="initial"
                whileInView="whileInView"
                viewport={scrolledViewport}
                variants={scrolledFadeInVariants}
                className="mt-16 pt-8 border-t border-[var(--color-border)] will-change-[transform,opacity] translate-z-0 transform-gpu"
              >
                <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                  {t("detail.relatedSkills")}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {relatedSkills.map((rs) => (
                    <HologramCard
                      key={rs.slug}
                      href={`/skills/${rs.slug}`}
                      className="skill-card"
                      id={`related-${rs.slug}`}
                      onClick={(e) => navigateTo(e, `/skills/${rs.slug}`)}
                    >
                      <span className="skill-card__command transition-colors duration-200">{rs.command}</span>
                      <p className="skill-card__description transition-colors duration-200">{rs.description}</p>
                    </HologramCard>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Prev / Next Navigation */}
            <motion.div
              initial="initial"
              whileInView="whileInView"
              viewport={scrolledViewport}
              variants={scrolledFadeInVariants}
              className={cn(
                "mt-16 pt-8 border-t border-[var(--color-border)] grid grid-cols-1 sm:grid-cols-2 gap-4 select-none will-change-[transform,opacity] translate-z-0 transform-gpu",
                !prevSkill && "max-sm:hidden"
              )}
            >
              {prevSkill ? (
                <ElasticPaginationLink href={`/skills/${prevSkill.slug}`} isNext={false} skill={prevSkill} onClick={(e) => navigateTo(e, `/skills/${prevSkill.slug}`)} />
              ) : (
                <div className="hidden sm:block" />
              )}
              {nextSkill ? (
                <ElasticPaginationLink href={`/skills/${nextSkill.slug}`} isNext={true} skill={nextSkill} onClick={(e) => navigateTo(e, `/skills/${nextSkill.slug}`)} />
              ) : (
                <div className="hidden sm:block" />
              )}
            </motion.div>
          </div>
        </motion.main>
      </AnimatePresence>

      {/* Floating Back to Top FAB Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-6 right-6 p-3 rounded-full bg-[var(--color-bg-secondary)] border border-[var(--color-border-accent)] text-[var(--color-accent-primary)] shadow-[0_0_15px_rgba(167,139,250,0.3)] hover:shadow-[0_0_25px_rgba(167,139,250,0.5)] hover:bg-[var(--color-bg-card-hover)] transition-all cursor-pointer z-50 flex items-center justify-center hover:scale-105 active:scale-95 group"
            title={t("detail.scrollTop")}
          >
            <ArrowUp size={18} className="group-hover:-translate-y-0.5 transition-transform duration-200" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}

// R3: Component phụ của Related Card với hiệu ứng hologram bắt điểm chuột hiệu năng cao
function HologramCard({ children, href, className, id, onClick }: { children: React.ReactNode; href: string; className?: string; id?: string; onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rectRef = useRef<DOMRect | null>(null);
  const rafRef = useRef<number | null>(null);

  function handleMouseEnter(e: React.MouseEvent<HTMLAnchorElement>) {
    rectRef.current = e.currentTarget.getBoundingClientRect();
  }

  function handleMouseMove(e: React.MouseEvent<HTMLAnchorElement>) {
    if (!rectRef.current) {
      rectRef.current = e.currentTarget.getBoundingClientRect();
    }
    
    const { left, top } = rectRef.current;
    const x = e.clientX - left;
    const y = e.clientY - top;

    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    
    rafRef.current = requestAnimationFrame(() => {
      mouseX.set(x);
      mouseY.set(y);
    });
  }

  function handleMouseLeave() {
    rectRef.current = null;
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
  }

  return (
    <Link 
      href={href} 
      id={id}
      onClick={onClick}
      className={cn("group relative rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)] hover:bg-[var(--color-bg-card-hover)] max-sm:bg-[var(--color-bg-card)]/85 max-sm:backdrop-blur-md max-sm:border-[var(--color-border)] max-sm:shadow-[0_4px_24px_rgba(0,0,0,0.45)] p-5 sm:p-6 overflow-hidden block no-underline will-change-transform hover:scale-[1.01] active:scale-[0.98] transition-all duration-200", className)} 
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* 3D Soft Light Overlay */}
      <motion.div
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              300px circle at ${mouseX}px ${mouseY}px,
              rgba(139, 92, 246, 0.08),
              transparent 80%
            )
          `
        }}
      />
      {/* Hologram Border Light */}
      <motion.div
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 rounded-2xl"
        style={{
          padding: "1.5px",
          background: useMotionTemplate`
            radial-gradient(
              160px circle at ${mouseX}px ${mouseY}px,
              var(--color-cyber-violet) 0%,
              var(--color-neon-indigo) 50%,
              transparent 80%
            )
          `,
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "exclude",
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
        } as MotionStyle}
      />
      {children}
    </Link>
  );
}

const MotionLink = motion(Link);

// R3: Component phụ Pagination với hoạt ảnh Elastic Slide/Gradient
function ElasticPaginationLink({ href, isNext, skill, onClick }: { href: string; isNext: boolean; skill: Skill; onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void }) {
  const { t } = useLanguage();
  const containerVariants: Variants = {
    initial: {},
    hover: {}
  };

  const elasticBgVariants: Variants = {
    initial: { scaleX: 0, opacity: 0 },
    hover: {
      scaleX: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 220, damping: 18 }
    }
  };

  return (
    <MotionLink
      href={href}
      onClick={onClick}
      initial="initial"
      whileHover="hover"
      variants={containerVariants}
      className={cn(
        "glow-border p-5 no-underline group flex flex-col gap-1 relative overflow-hidden transition-all duration-300 will-change-transform transform-gpu max-sm:bg-[var(--color-bg-card)]/85 max-sm:backdrop-blur-md max-sm:border-[var(--color-border)] max-sm:shadow-[0_4px_24px_rgba(0,0,0,0.45)] max-sm:rounded-2xl active:scale-[0.98]",
        isNext ? "sm:items-end sm:text-right items-start text-left max-sm:hidden" : "items-start text-left"
      )}
      style={{
        '--color-cyber-violet': '#8b5cf6'
      } as React.CSSProperties}
    >
      {/* Elastic background slide-out đồng bộ thông qua Variant Orchestration */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-[var(--color-cyber-violet)]/10 to-[var(--color-neon-indigo)]/10 -z-10"
        variants={elasticBgVariants}
        style={{ originX: isNext ? 1 : 0 }}
      />

      <span className="text-[10px] font-bold font-mono tracking-wider text-[var(--color-text-muted)] uppercase flex items-center gap-1 group-hover:text-[var(--color-accent-primary)] transition-colors relative z-10">
        {!isNext && <ArrowLeft size={10} />}
        {isNext ? t("detail.nextSkill") : t("detail.prevSkill")}
        {isNext && <ArrowRight size={10} />}
      </span>
      <span className="text-base font-bold text-[var(--color-text-primary)] font-mono group-hover:text-[var(--color-accent-primary)] transition-colors mt-1 relative z-10">
        {skill.command}
      </span>
      <span className="text-xs text-[var(--color-text-muted)] font-sans line-clamp-1 mt-0.5 relative z-10 group-hover:text-zinc-200">
        {skill.oneLiner}
      </span>
    </MotionLink>
  );
}


const MarkdownContent = memo(
  forwardRef<HTMLDivElement, { htmlContent: string }>(({ htmlContent }, ref) => {
    return <div ref={ref} className="skill-content" dangerouslySetInnerHTML={{ __html: htmlContent }} />;
  })
);
MarkdownContent.displayName = "MarkdownContent";
