"use client";

import React, { useState, useMemo, useCallback } from "react";
import Link from "next/link";
import { ArrowLeft, FileCode, Copy, Check, Search, Cpu } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";

interface SourceFile {
  relPath: string;
  name: string;
  content: string;
  size: number;
}

interface SourceViewerClientProps {
  slug: string;
  title: string;
  files: SourceFile[];
}

// Simple regex-based syntax highlighter for better aesthetics
function highlightCode(code: string, filename: string): string {
  const ext = filename.split(".").pop()?.toLowerCase();
  
  // Escape HTML first
  let html = code
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  if (ext === "py") {
    // Keywords
    html = html.replace(
      /\b(def|class|return|if|elif|else|for|while|import|from|as|in|try|except|finally|with|pass|lambda|print|and|or|not|True|False|None)\b/g,
      '<span class="text-indigo-400 font-bold">$1</span>'
    );
    // Strings
    html = html.replace(/("[^"\\]*(?:\\.[^"\\]*)*")/g, '<span class="text-emerald-400">$1</span>');
    html = html.replace(/('[^'\\]*(?:\\.[^'\\]*)*')/g, '<span class="text-emerald-400">$1</span>');
    // Comments
    html = html.replace(/(#[^\n]*)/g, '<span class="text-slate-500 italic">$1</span>');
  } else if (ext === "cs" || ext === "js" || ext === "ts") {
    // Keywords
    html = html.replace(
      /\b(using|namespace|public|private|protected|internal|class|struct|interface|void|int|string|bool|double|float|var|const|let|function|return|if|else|for|while|foreach|switch|case|break|continue|new|null|this|true|false|async|await|import|export|from|typeof)\b/g,
      '<span class="text-indigo-400 font-bold">$1</span>'
    );
    // Strings
    html = html.replace(/("[^"\\]*(?:\\.[^"\\]*)*")/g, '<span class="text-emerald-400">$1</span>');
    html = html.replace(/('[^'\\]*(?:\\.[^'\\]*)*')/g, '<span class="text-emerald-400">$1</span>');
    // Comments
    html = html.replace(/(\/\/[^\n]*)/g, '<span class="text-slate-500 italic">$1</span>');
  } else if (ext === "sh" || ext === "ps1") {
    // Keywords
    html = html.replace(
      /\b(function|return|if|then|elif|else|fi|for|in|while|do|done|echo|exit|param|process)\b/g,
      '<span class="text-indigo-400 font-bold">$1</span>'
    );
    // Comments
    html = html.replace(/(#[^\n]*)/g, '<span class="text-slate-500 italic">$1</span>');
  }

  return html;
}

export function SourceViewerClient({ slug, title, files }: SourceViewerClientProps): React.ReactElement {
  const { language } = useLanguage();
  const [selectedPath, setSelectedPath] = useState<string>(files[0]?.relPath || "");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [copied, setCopied] = useState<boolean>(false);

  const selectedFile = useMemo(() => {
    return files.find((f) => f.relPath === selectedPath) || files[0] || null;
  }, [files, selectedPath]);

  const filteredFiles = useMemo(() => {
    if (!searchQuery.trim()) return files;
    return files.filter((f) => 
      f.relPath.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.content.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [files, searchQuery]);

  const handleCopy = useCallback(() => {
    if (!selectedFile) return;
    navigator.clipboard.writeText(selectedFile.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [selectedFile]);

  const highlightedHtml = useMemo(() => {
    if (!selectedFile) return "";
    return highlightCode(selectedFile.content, selectedFile.name);
  }, [selectedFile]);

  // Generate line numbers
  const lineNumbers = useMemo(() => {
    if (!selectedFile) return [];
    const lines = selectedFile.content.split("\n");
    return Array.from({ length: lines.length }, (_, i) => i + 1);
  }, [selectedFile]);

  return (
    <div className="min-h-screen pt-24 bg-[#0B0F19] text-slate-100 pb-16 flex flex-col font-sans">
      <div className="max-w-7xl mx-auto px-6 w-full flex-1 flex flex-col gap-6">
        
        {/* Top Navigation / Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-800 pb-5 gap-4">
          <div className="space-y-1">
            <Link 
              href={`/skills/${slug}`}
              className="text-xs font-mono font-bold text-indigo-400 hover:text-indigo-300 flex items-center gap-1.5 no-underline transition"
            >
              <ArrowLeft size={13} />
              {language === "en" ? "Back to Skill" : "Quay lại Skill"}
            </Link>
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight flex items-center gap-2 mt-2 text-white">
              <Cpu className="h-6 w-6 text-indigo-500" />
              {title}
            </h1>
            <p className="text-[11px] text-slate-400 font-mono">
              {language === "en" 
                ? `Minimax Local Source Code Viewer — /${slug}` 
                : `Trình xem mã nguồn cục bộ Minimax — /${slug}`}
            </p>
          </div>
          
          <div className="text-[10px] font-mono bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-lg text-slate-400 select-none">
            {files.length} {language === "en" ? "Source Files Detected" : "Tệp mã nguồn được tìm thấy"}
          </div>
        </div>

        {/* Main Interface Layout */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-6 min-h-[550px] items-stretch">
          
          {/* File Explorer (Left Panel - 3 cols) */}
          <div className="lg:col-span-4 bg-slate-950/80 border border-slate-800 rounded-2xl p-4 flex flex-col gap-4 max-h-[calc(100vh-280px)] overflow-hidden shadow-xl backdrop-blur-md">
            {/* Search Files */}
            <div className="relative">
              <Search size={14} className="absolute left-3 top-3 text-slate-500" />
              <input
                type="text"
                placeholder={language === "en" ? "Search files..." : "Tìm kiếm tệp..."}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-900/50 border border-slate-800 rounded-xl pl-9 pr-4 py-2 text-xs text-slate-100 placeholder:text-slate-500 outline-none focus:border-indigo-500/50 focus:shadow-[0_0_10px_rgba(99,102,241,0.15)] transition-all font-mono"
              />
            </div>

            {/* Files List */}
            <div className="flex-1 overflow-y-auto space-y-1.5 scrollbar-thin select-none pr-1">
              {filteredFiles.length === 0 ? (
                <div className="text-center py-10 text-slate-500 text-xs font-mono">
                  {language === "en" ? "No files found" : "Không tìm thấy tệp nào"}
                </div>
              ) : (
                filteredFiles.map((file) => {
                  const isSelected = file.relPath === selectedPath;
                  return (
                    <button
                      key={file.relPath}
                      onClick={() => setSelectedPath(file.relPath)}
                      className={cn(
                        "w-full text-left font-mono text-xs px-3.5 py-2.5 rounded-xl transition-all duration-150 cursor-pointer flex items-center justify-between group border",
                        isSelected 
                          ? "bg-indigo-500/10 border-indigo-500/30 text-indigo-300 font-bold" 
                          : "bg-transparent border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900/40 hover:border-slate-800/60"
                      )}
                    >
                      <div className="flex items-center gap-2 truncate">
                        <FileCode size={13} className={cn("shrink-0", isSelected ? "text-indigo-400" : "text-slate-500 group-hover:text-slate-400")} />
                        <span className="truncate">{file.relPath}</span>
                      </div>
                      <span className="text-[9px] text-slate-600 font-bold shrink-0 ml-2 group-hover:text-slate-500">
                        {(file.size / 1024).toFixed(1)} KB
                      </span>
                    </button>
                  );
                })
              )}
            </div>
          </div>

          {/* Code Editor Area (Right Panel - 8 cols) */}
          <div className="lg:col-span-8 flex flex-col bg-slate-950/80 border border-slate-800 rounded-2xl overflow-hidden shadow-xl backdrop-blur-md h-[calc(100vh-280px)] min-h-[400px]">
            {selectedFile ? (
              <>
                {/* Editor Top Bar */}
                <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-800/80 bg-slate-950 shrink-0">
                  <div className="flex items-center gap-2 truncate">
                    <FileCode size={14} className="text-indigo-400" />
                    <span className="font-mono text-xs text-slate-300 truncate font-semibold">
                      {selectedFile.relPath}
                    </span>
                    <span className="text-[10px] text-slate-600 font-mono select-none">
                      ({(selectedFile.size / 1024).toFixed(2)} KB)
                    </span>
                  </div>

                  <button
                    onClick={handleCopy}
                    className="flex items-center gap-1.5 text-[10px] font-mono font-bold px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-indigo-400 hover:bg-indigo-500/5 hover:border-indigo-500/20 active:scale-95 transition cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check size={11} className="text-emerald-500" />
                        <span className="text-emerald-500">{language === "en" ? "COPIED" : "ĐÃ SAO CHÉP"}</span>
                      </>
                    ) : (
                      <>
                        <Copy size={11} />
                        <span>{language === "en" ? "COPY CODE" : "SAO CHÉP MÃ"}</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Editor Content Area */}
                <div className="flex-1 flex overflow-hidden">
                  {/* Line Numbers Sidebar */}
                  <div className="w-12 bg-slate-950 text-slate-600 font-mono text-[11px] text-right pr-3 select-none border-r border-slate-800/40 py-4 font-bold">
                    {lineNumbers.map((num) => (
                      <div key={num} className="leading-5 h-5">
                        {num}
                      </div>
                    ))}
                  </div>

                  {/* Code Viewer Panel */}
                  <pre className="flex-1 p-4 m-0 overflow-auto bg-slate-950/40 scrollbar-thin select-text">
                    <code 
                      className="font-mono text-[11px] leading-5 block whitespace-pre"
                      dangerouslySetInnerHTML={{ __html: highlightedHtml }}
                    />
                  </pre>
                </div>
              </>
            ) : (
              <div className="flex-1 flex flex-col items-center justify-center p-8 text-center text-slate-500">
                <FileCode className="h-10 w-10 text-slate-700 mb-2" />
                <span className="text-xs font-mono">
                  {language === "en" ? "No file selected" : "Chưa chọn tệp tin"}
                </span>
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
