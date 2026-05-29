/* eslint-disable */
const fs = require("fs");
const path = require("path");

function parseMarkdownToHtml(md) {
  let html = md.replace(/\r/g, "");

  // Headers
  html = html.replace(/^### (.+)$/gm, '<h3>$1</h3>');
  html = html.replace(/^## (.+)$/gm, '<h2>$1</h2>');

  // Code blocks
  html = html.replace(
    /```(\w*)\n([\s\S]*?)```/g,
    (_match, lang, code) => {
      const escapedCode = code
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
      return `<pre><code class="language-${lang}">${escapedCode}</code></pre>`;
    }
  );

  // Inline code
  html = html.replace(/`([^`]+)`/g, "<code>$1</code>");

  // Bold
  html = html.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");

  // Italic
  html = html.replace(/\*([^*]+)\*/g, "<em>$1</em>");

  // Unordered lists
  html = html.replace(/^- (.+)$/gm, "<li>$1</li>");
  html = html.replace(/((?:<li>.*<\/li>\n?)+)/g, "<ul>$1</ul>");

  // Blockquotes
  html = html.replace(/^> (.+)$/gm, "<blockquote>$1</blockquote>");

  // Links
  html = html.replace(
    /\[([^\]]+)\]\(([^)]+)\)/g,
    '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>'
  );

  // Paragraphs - wrap standalone lines
  html = html.replace(
    /^(?!<[hupob]|<li|<\/|<a|<code|<pre|<blockquote)(.+)$/gm,
    "<p>$1</p>"
  );

  html = html.replace(/<p>\s*<\/p>/g, "");

  return html;
}

const fileContent = fs.readFileSync("content/skills/nextjs-expert.md", "utf-8");
// Skip frontmatter like gray-matter does
const markdownBody = fileContent.split("---").slice(2).join("---").trim();

const parsedHtml = parseMarkdownToHtml(markdownBody);
console.log("Pre blocks count:", (parsedHtml.match(/<pre>/g) || []).length);
console.log("H2 blocks count:", (parsedHtml.match(/<h2/g) || []).length);
console.log("H3 blocks count:", (parsedHtml.match(/<h3/g) || []).length);
console.log("First 500 chars of HTML:");
console.log(parsedHtml.slice(0, 500));
