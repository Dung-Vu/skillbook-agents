import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]): string {
  return clsx(inputs);
}

export function formatDate(dateString: string, locale: string = "vi"): string {
  const date = new Date(dateString);
  const targetLocale = locale === "en" ? "en-US" : "vi-VN";
  return date.toLocaleDateString(targetLocale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function formatCommand(command?: string, slug?: string): string {
  const raw = command || slug || "";
  if (!raw) return "";
  return raw.startsWith("/") ? raw : `/${raw}`;
}

export async function copyToClipboard(text: string): Promise<boolean> {
  if (typeof window === "undefined") return false;

  // Use Clipboard API if available and in secure context
  if (navigator.clipboard && typeof navigator.clipboard.writeText === "function") {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch (err) {
      console.warn("Clipboard API failed, trying fallback...", err);
    }
  }

  // Fallback for non-secure contexts (http) or unsupported browsers
  try {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    // Hide the textarea offscreen
    textArea.style.position = "fixed";
    textArea.style.top = "-9999px";
    textArea.style.left = "-9999px";
    textArea.style.width = "2em";
    textArea.style.height = "2em";
    textArea.style.padding = "0";
    textArea.style.border = "none";
    textArea.style.outline = "none";
    textArea.style.boxShadow = "none";
    textArea.style.background = "transparent";
    document.body.appendChild(textArea);
    
    // Select the text
    textArea.focus();
    textArea.select();
    
    // Execute copy command
    const successful = document.execCommand("copy");
    document.body.removeChild(textArea);
    return successful;
  } catch (err) {
    console.error("Fallback copy failed: ", err);
    return false;
  }
}
