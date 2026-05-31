"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Terminal, Sparkles, X, CornerDownLeft } from "lucide-react";
import Fuse from "fuse.js";

interface SearchSkill {
  slug: string;
  title: string;
  command: string;
  category: string;
  tags: string[];
  description: string;
  oneLiner: string;
}

const CATEGORY_ICONS: Record<string, string> = {
  "reasoning-planning": "🧠",
  "code-engineering": "💻",
  "tool-integration": "🔌",
  "content-communication": "📝",
  "research-analysis": "🔍",
  "safety-guardrails": "🛡️",
  "persona-behavior": "🎭",
  "workflow-orchestration": "🔄",
  "creative-design": "🎨",
  "data-knowledge": "📊",
  "bioinformatics-genomics": "🧬",
  "mobile-development": "📱",
};

export function CommandPalette(): React.ReactElement {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [skills, setSkills] = useState<SearchSkill[]>([]);
  const [recent, setRecent] = useState<SearchSkill[]>(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("recent-skills");
      if (stored) {
        try {
          return JSON.parse(stored);
        } catch {
          // Ignore
        }
      }
    }
    return [];
  });
  const [fuse, setFuse] = useState<Fuse<SearchSkill> | null>(null);
  const results = React.useMemo(() => {
    if (!query || !fuse) return [];
    return fuse.search(query).map((r) => r.item);
  }, [query, fuse]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  
  const inputRef = useRef<HTMLInputElement>(null);
  const resultsContainerRef = useRef<HTMLDivElement>(null);

  // 1. Fetch skills on mount or first open
  useEffect(() => {
    const fetchSearchData = async () => {
      try {
        const response = await fetch("/api/skills");
        if (response.ok) {
          const data = await response.json();
          setSkills(data);
          
          // Initialize Fuse.js
          setFuse(new Fuse(data, {
            keys: ["command", "title", "tags", "oneLiner", "description"],
            threshold: 0.35,
          }));
        }
      } catch (err) {
        console.error("Failed to load search index:", err);
      }
    };

    fetchSearchData();
  }, []);



  // 2. Handle hotkeys (Cmd+K / Ctrl+K and Esc)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (!isOpen) {
          setQuery("");
          setSelectedIndex(0);
        }
        setIsOpen((prev) => !prev);
      }

      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // 3. Handle custom trigger event from Header search button
  useEffect(() => {
    const handleOpenTrigger = () => {
      setQuery("");
      setSelectedIndex(0);
      setIsOpen(true);
    };

    window.addEventListener("open-command-palette", handleOpenTrigger);
    return () => window.removeEventListener("open-command-palette", handleOpenTrigger);
  }, []);

  // 4. Handle input focus when palette opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
      // Disable background scrolling when modal is open
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // 7. Auto-scroll selected element into view
  useEffect(() => {
    const activeEl = resultsContainerRef.current?.querySelector("[data-active='true']");
    if (activeEl) {
      activeEl.scrollIntoView({
        block: "nearest",
      });
    }
  }, [selectedIndex]);

  // 8. Add to recent searches list in localStorage
  const saveToRecent = (skill: SearchSkill) => {
    const updated = [skill, ...recent.filter((r) => r.slug !== skill.slug)].slice(0, 5);
    setRecent(updated);
    localStorage.setItem("recent-skills", JSON.stringify(updated));
  };

  const handleSelectSkill = (skill: SearchSkill) => {
    saveToRecent(skill);
    setIsOpen(false);
    router.push(`/skills/${skill.slug}`);
  };

  // Keyboard navigation within the results list
  const handleListKeyDown = (e: React.KeyboardEvent) => {
    const list = query ? results : recent.length ? recent : skills.slice(0, 5);
    
    if (!list.length) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev < list.length - 1 ? prev + 1 : 0));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : list.length - 1));
    } else if (e.key === "Enter") {
      e.preventDefault();
      handleSelectSkill(list[selectedIndex]);
    }
  };

  const displayList = query 
    ? results 
    : recent.length 
    ? recent 
    : skills.filter((s) => s.slug === "alphafold-database" || s.slug === "android-cli" || s.slug === "pubmed-database" || s.slug === "pymol" || s.slug === "workflow-skill-creator").slice(0, 5);

  const listTitle = query 
    ? "Kết quả tìm kiếm" 
    : recent.length 
    ? "Tìm kiếm gần đây" 
    : "Kỹ năng nổi bật";

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[10vh] px-4 sm:px-6">
          {/* Overlay backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-0"
          />

          {/* Search palette dialog */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="w-full max-w-2xl bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-2xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[70vh] glass-panel"
            onKeyDown={handleListKeyDown}
          >
            {/* Search Input Bar */}
            <div className="flex items-center gap-3 px-4 py-4 bg-[var(--color-bg-tertiary)] border-b border-[var(--color-border)] select-none">
              <Search className="text-[var(--color-text-muted)] shrink-0" size={18} />
              <input
                ref={inputRef}
                type="text"
                placeholder="Tìm kiếm kỹ năng hoặc lệnh (ví dụ: alphafold, cli, prompt)..."
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setSelectedIndex(0);
                }}
                className="w-full bg-transparent border-none text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] text-sm focus:outline-none focus:ring-0 font-sans"
              />
              <button 
                onClick={() => setIsOpen(false)}
                className="p-1 rounded hover:bg-[var(--color-bg-primary)]/40 text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] cursor-pointer"
                title="Đóng tìm kiếm (Esc)"
              >
                <X size={16} />
              </button>
            </div>

            {/* Results & Sections Container */}
            <div 
              ref={resultsContainerRef} 
              className="flex-1 overflow-y-auto p-3 flex flex-col gap-2 min-h-0"
            >
              {displayList.length > 0 ? (
                <>
                  <div className="px-3 py-1.5 text-[10px] font-bold font-mono uppercase tracking-wider text-[var(--color-text-muted)] flex items-center justify-between">
                    <span>{listTitle}</span>
                    {listTitle === "Tìm kiếm gần đây" && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          localStorage.removeItem("recent-skills");
                          setRecent([]);
                        }}
                        className="text-[9px] hover:text-red-400 normal-case font-medium border-none bg-transparent cursor-pointer"
                      >
                        Xóa lịch sử
                      </button>
                    )}
                  </div>
                  
                  <div className="flex flex-col gap-1">
                    {displayList.map((skill, index) => {
                      const isActive = index === selectedIndex;
                      const catIcon = CATEGORY_ICONS[skill.category] || "🔌";
                      
                      return (
                        <div
                          key={skill.slug}
                          data-active={isActive}
                          onClick={() => handleSelectSkill(skill)}
                          onMouseEnter={() => setSelectedIndex(index)}
                          className={`flex items-center justify-between px-3 py-3 rounded-xl cursor-pointer transition-all ${
                            isActive
                              ? "bg-[var(--color-bg-card-hover)] border-l-2 border-[var(--color-accent-primary)] shadow-sm"
                              : "hover:bg-[var(--color-bg-card)] border-l-2 border-transparent"
                          }`}
                        >
                          <div className="flex items-center gap-3 min-w-0">
                            <span className="text-xl filter drop-shadow-sm shrink-0 select-none">
                              {catIcon}
                            </span>
                            <div className="flex flex-col min-w-0">
                              <span className="text-sm font-semibold text-[var(--color-accent-primary)] font-mono truncate">
                                {skill.command}
                              </span>
                              <span className="text-xs text-[var(--color-text-secondary)] font-sans mt-0.5 truncate max-w-md sm:max-w-lg">
                                {skill.title} &bull; {skill.oneLiner}
                              </span>
                            </div>
                          </div>
                          
                          {isActive && (
                            <div className="flex items-center gap-1.5 text-[var(--color-text-muted)] select-none">
                              <span className="text-[10px] font-mono">Truy cập</span>
                              <CornerDownLeft size={10} />
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </>
              ) : (
                <div className="flex flex-col items-center justify-center py-12 text-center text-[var(--color-text-muted)]">
                  <Terminal size={32} className="opacity-20 mb-3 animate-pulse" />
                  <span className="text-sm font-semibold font-mono">KHÔNG CÓ KẾT QUẢ KHỚP</span>
                  <span className="text-xs font-sans mt-1">
                    Không tìm thấy kỹ năng nào phù hợp với từ khóa &ldquo;{query}&rdquo;
                  </span>
                </div>
              )}
            </div>

            {/* Bottom Keyboard Utility Hint Bar */}
            <div className="px-4 py-2.5 bg-[var(--color-bg-tertiary)] border-t border-[var(--color-border)] select-none flex items-center justify-between text-[10px] font-mono text-[var(--color-text-muted)]">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1">
                  <kbd className="px-1 rounded bg-[var(--color-bg-primary)] border border-[var(--color-border)]">↑↓</kbd> Di chuyển
                </span>
                <span className="flex items-center gap-1">
                  <kbd className="px-1 rounded bg-[var(--color-bg-primary)] border border-[var(--color-border)]">Enter</kbd> Chọn
                </span>
                <span className="flex items-center gap-1">
                  <kbd className="px-1 rounded bg-[var(--color-bg-primary)] border border-[var(--color-border)]">Esc</kbd> Đóng
                </span>
              </div>
              
              <div className="flex items-center gap-1">
                <Sparkles size={11} className="text-[var(--color-accent-primary)] animate-pulse" />
                <span>Skillbook Search</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
