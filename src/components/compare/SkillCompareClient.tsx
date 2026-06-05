"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { Skill, PlatformId } from "@/types/skill";
import { PLATFORM_CONFIG, COMPLEXITY_CONFIG } from "@/types/skill";
import { parseMarkdownToHtml } from "@/lib/markdown";
import { useLanguage } from "@/context/LanguageContext";
import { cn, formatCommand } from "@/lib/utils";
import { GitCompare, Sparkles, Cpu, BookOpen, AlertTriangle } from "lucide-react";
import Link from "next/link";

interface SkillCompareClientProps {
  skills: Skill[];
}

export function SkillCompareClient({ skills }: SkillCompareClientProps): React.ReactElement {
  const searchParams = useSearchParams();
  const { language, t } = useLanguage();

  const [slugA, setSlugA] = useState<string>("");
  const [slugB, setSlugB] = useState<string>("");

  const scrollRefA = useRef<HTMLDivElement>(null);
  const scrollRefB = useRef<HTMLDivElement>(null);
  const scrollActivePane = useRef<"A" | "B" | null>(null);

  // Initialize from query parameters
  useEffect(() => {
    const paramA = searchParams.get("a");
    const paramB = searchParams.get("b");

    setTimeout(() => {
      if (paramA && skills.some(s => s.slug === paramA)) {
        setSlugA(paramA);
      } else if (skills.length > 0) {
        setSlugA(skills[0].slug);
      }

      if (paramB && skills.some(s => s.slug === paramB)) {
        setSlugB(paramB);
      } else if (skills.length > 1) {
        setSlugB(skills[1].slug);
      } else if (skills.length > 0) {
        setSlugB(skills[0].slug);
      }
    }, 0);
  }, [searchParams, skills]);

  // Sync state back to URL query parameters
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    let changed = false;

    if (slugA && params.get("a") !== slugA) {
      params.set("a", slugA);
      changed = true;
    }
    if (slugB && params.get("b") !== slugB) {
      params.set("b", slugB);
      changed = true;
    }

    if (changed) {
      const newPath = window.location.pathname + "?" + params.toString();
      window.history.replaceState(null, "", newPath);
    }
  }, [slugA, slugB]);

  const skillA = useMemo(() => {
    const s = skills.find(sk => sk.slug === slugA);
    if (!s) return null;
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
  }, [skills, slugA, language]);

  const skillB = useMemo(() => {
    const s = skills.find(sk => sk.slug === slugB);
    if (!s) return null;
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
  }, [skills, slugB, language]);

  const htmlA = useMemo(() => (skillA ? parseMarkdownToHtml(skillA.content) : ""), [skillA]);
  const htmlB = useMemo(() => (skillB ? parseMarkdownToHtml(skillB.content) : ""), [skillB]);

  // Sync scroll logic
  const handleScroll = (source: "A" | "B") => {
    const paneA = scrollRefA.current;
    const paneB = scrollRefB.current;
    if (!paneA || !paneB) return;

    if (!scrollActivePane.current) {
      scrollActivePane.current = source;
    }

    if (scrollActivePane.current !== source) return;

    if (source === "A") {
      const ratio = paneA.scrollTop / (paneA.scrollHeight - paneA.clientHeight);
      paneB.scrollTop = ratio * (paneB.scrollHeight - paneB.clientHeight);
    } else {
      const ratio = paneB.scrollTop / (paneB.scrollHeight - paneB.clientHeight);
      paneA.scrollTop = ratio * (paneA.scrollHeight - paneA.clientHeight);
    }
  };

  const handleTouchStart = (source: "A" | "B") => {
    scrollActivePane.current = source;
  };

  const handleMouseEnter = (source: "A" | "B") => {
    scrollActivePane.current = source;
  };

  const resetActiveScroll = () => {
    scrollActivePane.current = null;
  };

  return (
    <div className="min-h-screen pt-24 bg-[#f4f6fc] text-slate-800 pb-16 flex flex-col font-sans">
      <div className="max-w-7xl mx-auto px-6 w-full flex-1 flex flex-col gap-6">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-slate-200 pb-4 gap-4">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold font-mono tracking-tight text-indigo-600 uppercase flex items-center gap-2">
              <GitCompare className="h-6 w-6 text-indigo-600" />
              {language === "en" ? "Compare Skills" : "So Sánh Kỹ Năng"}
            </h1>
            <p className="text-xs text-slate-500 mt-1 font-mono">
              {language === "en" 
                ? "Analyze and compare instructions from different providers side-by-side" 
                : "Phân tích và đối chiếu chi tiết các chỉ dẫn kỹ năng song song"}
            </p>
          </div>
          
          <div className="flex items-center gap-2">
            <Link 
              href="/skills"
              className="text-xs font-mono font-bold px-4 py-2 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 transition shadow-sm"
            >
              {language === "en" ? "← Back to Catalog" : "← Về Danh Mục"}
            </Link>
          </div>
        </div>

        {/* selectors */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white/70 backdrop-blur-md p-4 rounded-2xl border border-slate-200 shadow-sm z-20">
          {/* Select A */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] font-mono tracking-wider font-bold text-slate-400 uppercase">
              {language === "en" ? "SKILL A" : "KỸ NĂNG A"}
            </label>
            <select
              value={slugA}
              onChange={(e) => setSlugA(e.target.value)}
              className="w-full text-xs font-mono bg-white border border-slate-200 rounded-xl px-3 py-2.5 outline-none focus:border-indigo-500 transition cursor-pointer"
            >
              {skills.map((s) => (
                <option key={s.slug} value={s.slug}>
                  [{s.provider.toUpperCase()}] {s.title} ({formatCommand(s.command, s.slug)})
                </option>
              ))}
            </select>
          </div>

          {/* Select B */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] font-mono tracking-wider font-bold text-slate-400 uppercase">
              {language === "en" ? "SKILL B" : "KỸ NĂNG B"}
            </label>
            <select
              value={slugB}
              onChange={(e) => setSlugB(e.target.value)}
              className="w-full text-xs font-mono bg-white border border-slate-200 rounded-xl px-3 py-2.5 outline-none focus:border-indigo-500 transition cursor-pointer"
            >
              {skills.map((s) => (
                <option key={s.slug} value={s.slug}>
                  [{s.provider.toUpperCase()}] {s.title} ({formatCommand(s.command, s.slug)})
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Comparison columns */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 min-h-[500px]">
          
          {/* Column A */}
          <div className="flex flex-col bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden h-[calc(100vh-320px)] min-h-[400px]">
            {skillA ? (
              <>
                <div className="p-5 border-b border-slate-100 bg-slate-50/50 shrink-0">
                  <div className="flex items-center justify-between gap-2 flex-wrap mb-2">
                    <span className={cn(
                      "text-[9px] font-mono font-bold px-2 py-0.5 rounded uppercase tracking-wider",
                      skillA.provider === "antigravity" 
                        ? "bg-indigo-100 text-indigo-700 border border-indigo-200" 
                        : "bg-pink-100 text-pink-700 border border-pink-200"
                    )}>
                      {skillA.provider}
                    </span>
                    <span className="text-[9px] font-mono text-slate-400">
                      {COMPLEXITY_CONFIG[skillA.complexity]?.dot} {COMPLEXITY_CONFIG[skillA.complexity]?.label}
                    </span>
                  </div>
                  <h2 className="text-base font-bold text-slate-800 truncate mb-1">
                    {skillA.title}
                  </h2>
                  <p className="text-[11px] font-mono font-bold text-indigo-600 truncate mb-2">
                    {formatCommand(skillA.command, skillA.slug)}
                  </p>
                  <p className="text-[11px] text-slate-500 line-clamp-2 leading-relaxed">
                    {skillA.description}
                  </p>
                  
                  {/* Platforms */}
                  <div className="flex flex-wrap gap-1 mt-3">
                    {skillA.platforms.map((p) => {
                      const cfg = PLATFORM_CONFIG[p as PlatformId] || { label: p, color: "#8b5cf6" };
                      return (
                        <span 
                          key={p} 
                          className="text-[9px] font-mono px-1.5 py-0.5 rounded border bg-slate-50 text-slate-600"
                          style={{ borderColor: `${cfg.color}33` }}
                        >
                          {cfg.label}
                        </span>
                      );
                    })}
                  </div>
                </div>

                {/* Content Panel A */}
                <div 
                  ref={scrollRefA}
                  onScroll={() => handleScroll("A")}
                  onTouchStart={() => handleTouchStart("A")}
                  onMouseEnter={() => handleMouseEnter("A")}
                  onMouseLeave={resetActiveScroll}
                  className="flex-1 p-6 overflow-y-auto skill-content scrollbar-thin select-text"
                >
                  <div dangerouslySetInnerHTML={{ __html: htmlA }} />
                </div>
              </>
            ) : (
              <div className="flex-1 flex flex-col items-center justify-center p-8 text-center text-slate-400">
                <AlertTriangle className="h-8 w-8 text-slate-300 mb-2" />
                <span className="text-xs font-mono">Skill A not loaded</span>
              </div>
            )}
          </div>

          {/* Column B */}
          <div className="flex flex-col bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden h-[calc(100vh-320px)] min-h-[400px]">
            {skillB ? (
              <>
                <div className="p-5 border-b border-slate-100 bg-slate-50/50 shrink-0">
                  <div className="flex items-center justify-between gap-2 flex-wrap mb-2">
                    <span className={cn(
                      "text-[9px] font-mono font-bold px-2 py-0.5 rounded uppercase tracking-wider",
                      skillB.provider === "antigravity" 
                        ? "bg-indigo-100 text-indigo-700 border border-indigo-200" 
                        : "bg-pink-100 text-pink-700 border border-pink-200"
                    )}>
                      {skillB.provider}
                    </span>
                    <span className="text-[9px] font-mono text-slate-400">
                      {COMPLEXITY_CONFIG[skillB.complexity]?.dot} {COMPLEXITY_CONFIG[skillB.complexity]?.label}
                    </span>
                  </div>
                  <h2 className="text-base font-bold text-slate-800 truncate mb-1">
                    {skillB.title}
                  </h2>
                  <p className="text-[11px] font-mono font-bold text-indigo-600 truncate mb-2">
                    {formatCommand(skillB.command, skillB.slug)}
                  </p>
                  <p className="text-[11px] text-slate-500 line-clamp-2 leading-relaxed">
                    {skillB.description}
                  </p>
                  
                  {/* Platforms */}
                  <div className="flex flex-wrap gap-1 mt-3">
                    {skillB.platforms.map((p) => {
                      const cfg = PLATFORM_CONFIG[p as PlatformId] || { label: p, color: "#8b5cf6" };
                      return (
                        <span 
                          key={p} 
                          className="text-[9px] font-mono px-1.5 py-0.5 rounded border bg-slate-50 text-slate-600"
                          style={{ borderColor: `${cfg.color}33` }}
                        >
                          {cfg.label}
                        </span>
                      );
                    })}
                  </div>
                </div>

                {/* Content Panel B */}
                <div 
                  ref={scrollRefB}
                  onScroll={() => handleScroll("B")}
                  onTouchStart={() => handleTouchStart("B")}
                  onMouseEnter={() => handleMouseEnter("B")}
                  onMouseLeave={resetActiveScroll}
                  className="flex-1 p-6 overflow-y-auto skill-content scrollbar-thin select-text"
                >
                  <div dangerouslySetInnerHTML={{ __html: htmlB }} />
                </div>
              </>
            ) : (
              <div className="flex-1 flex flex-col items-center justify-center p-8 text-center text-slate-400">
                <AlertTriangle className="h-8 w-8 text-slate-300 mb-2" />
                <span className="text-xs font-mono">Skill B not loaded</span>
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
