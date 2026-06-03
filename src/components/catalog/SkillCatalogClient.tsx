"use client";

import React, { useState, useMemo, useEffect, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Search, ArrowRight, Copy, Check } from "lucide-react";
import Fuse from "fuse.js";
import { cn } from "@/lib/utils";
import {
  Skill,
  PLATFORM_CONFIG,
  PlatformId,
} from "@/types/skill";
import { CATEGORIES } from "@/lib/categories";
import { MeshGridBackground } from "@/components/ui/MeshGridBackground";
import { useTransitionNavigator } from "@/hooks/useTransitionNavigator";
import { useLanguage } from "@/context/LanguageContext";
import { TranslationKey } from "@/lib/translations";

interface CustomWindow extends Window {
  __canvasPaused?: boolean;
}

interface SkillCatalogClientProps {
  skills: Skill[];
  categoryCountMap: Record<string, number>;
}

// ============================================================================
// ANIMATION VARIANTS
// ============================================================================
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0.01,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.02,
      staggerDirection: -1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 10, scale: 0.99 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 16,
      mass: 0.8,
    },
  },
  exit: {
    opacity: 0,
    y: -6,
    scale: 0.99,
    transition: {
      duration: 0.12,
      ease: "easeInOut",
    },
  },
};

// ============================================================================
// ULTRA MINIMALIST SKILL ROW COMPONENT
// ============================================================================
interface SkillRowProps {
  skill: Skill;
  navigateTo: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}

const SkillRow = React.memo(function SkillRow({ skill, navigateTo }: SkillRowProps): React.ReactElement {
  const [copied, setCopied] = useState(false);
  const { t } = useLanguage();

  const handleCopy = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(skill.command);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }, [skill.command]);

  return (
    <Link
      href={`/skills/${skill.slug}`}
      onClick={(e) => navigateTo(e as unknown as React.MouseEvent<HTMLAnchorElement>, `/skills/${skill.slug}`)}
      className="skill-card flex flex-col sm:flex-row sm:items-center justify-between py-3 px-4 border-b border-slate-100 hover:bg-slate-50/50 transition-all duration-300 group font-mono text-xs cursor-pointer block"
      id={`skill-${skill.slug}`}
    >
      <div className="flex items-center gap-2 sm:w-[35%] shrink-0">
        <span className="font-bold font-mono text-[11px] sm:text-xs bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent group-hover:brightness-110 transition-all duration-200 truncate">
          {skill.command}
        </span>
        <button
          onClick={handleCopy}
          className="p-1 rounded bg-slate-100 border border-slate-200/60 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50/80 opacity-0 group-hover:opacity-100 focus:opacity-100 transition-all duration-200 shrink-0 ml-1 flex items-center justify-center cursor-pointer"
          title={t("detail.copyCommand")}
        >
          {copied ? (
            <Check size={8} className="text-emerald-600 font-bold" />
          ) : (
            <Copy size={8} />
          )}
        </button>
      </div>

      <div className="text-[10px] sm:text-[11px] text-slate-500 group-hover:text-slate-800 transition-colors duration-150 sm:w-[53%] mt-1 sm:mt-0 font-sans line-clamp-2 sm:line-clamp-1 leading-relaxed">
        {skill.oneLiner || skill.description}
      </div>

      <div className="hidden sm:flex sm:w-[12%] justify-end text-slate-400 group-hover:text-indigo-600 group-hover:translate-x-1.5 transition-all duration-200 shrink-0">
        <ArrowRight size={11} />
      </div>
    </Link>
  );
});


// ============================================================================
// MAIN ENCYCLOPEDIA CLIENT (2-Column Sidebar Layout)
// ============================================================================
export function SkillCatalogClient({
  skills = [],
  categoryCountMap = {},
}: SkillCatalogClientProps): React.ReactElement {
  const [searchVal, setSearchVal] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activeProvider, setActiveProvider] = useState<"antigravity" | "minimax" | null>(null);

  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { language, t } = useLanguage();

  const localizedSkills = useMemo(() => {
    return skills.map((s) => {
      if (language === "en" && s.en) {
        return {
          ...s,
          title: s.en.title || s.title,
          description: s.en.description || s.description,
          oneLiner: s.en.oneLiner || s.oneLiner,
        };
      }
      return s;
    });
  }, [skills, language]);

  useEffect(() => {
    const checkMobile = (): void => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchQuery(searchVal);
    }, 200);
    return () => clearTimeout(timer);
  }, [searchVal]);

  const sortedCategories = useMemo(
    () =>
      Object.values(CATEGORIES)
        .filter((cat) => (categoryCountMap[cat.id] || 0) > 0)
        .sort((a, b) => a.order - b.order),
    [categoryCountMap]
  );

  const categoryScopedSkills = useMemo(() => {
    let result = localizedSkills || [];
    if (activeCategory) {
      result = result.filter((s) => s.category === activeCategory);
    }
    if (activeProvider) {
      result = result.filter((s) => s.provider === activeProvider);
    }
    return result;
  }, [localizedSkills, activeCategory, activeProvider]);

  const scopedFuse = useMemo(() => {
    return new Fuse(categoryScopedSkills, {
      keys: [
        { name: "title", weight: 0.4 },
        { name: "command", weight: 0.3 },
        { name: "description", weight: 0.2 },
        { name: "tags", weight: 0.1 },
      ],
      threshold: 0.35,
    });
  }, [categoryScopedSkills]);

  const filteredSkills = useMemo(() => {
    if (!searchQuery.trim()) {
      return categoryScopedSkills;
    }
    const searchResults = scopedFuse.search(searchQuery);
    return searchResults.map((r) => r.item);
  }, [categoryScopedSkills, scopedFuse, searchQuery]);



  const filteredTotal = categoryScopedSkills.length;


  const handleCategoryClick = useCallback((categoryId: string | null): void => {
    setActiveCategory((prev) => (prev === categoryId ? null : categoryId));
  }, []);

  const clearFilters = useCallback((): void => {
    setSearchVal("");
    setSearchQuery("");
    setActiveCategory(null);
    setActiveProvider(null);
  }, []);

  const hasFilters = useMemo(() => {
    return !!(searchVal || activeCategory || activeProvider);
  }, [searchVal, activeCategory, activeProvider]);

  const { isExiting, navigateTo } = useTransitionNavigator();

  useEffect(() => {
    if (typeof window !== "undefined") {
      (window as unknown as CustomWindow).__canvasPaused = false;
      window.dispatchEvent(new CustomEvent("canvas-resume"));
    }
  }, []);

  return (
    <div className="min-h-screen pt-24 bg-[#f4f6fc] text-slate-800 relative overflow-clip pb-16 transition-colors duration-300">
      {/* Dynamic Background Cyberpunk Mesh Grid */}
      <MeshGridBackground />

      <motion.div
        variants={{
          initial: { opacity: 1, scale: 1, filter: "blur(0px)" },
          animate: { opacity: 1, scale: 1, filter: "blur(0px)" },
          exit: {
            opacity: 0,
            scale: 0.97,
            filter: "blur(4px)",
            transition: { duration: 0.3, ease: "easeInOut" }
          }
        }}
        initial="initial"
        animate={isExiting ? "exit" : "animate"}
        className="will-change-transform will-change-opacity origin-top transform-gpu"
      >
        {/* Main Layout Grid */}
        <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* ==================================================================
              COL 1: SIDEBAR LEFT (280px / Index & Filters)
              ================================================================== */}
          <aside className="hidden lg:block lg:w-60 shrink-0 lg:sticky lg:top-20 max-h-[calc(100vh-120px)] overflow-y-auto pr-1 space-y-6 scrollbar-none select-none">
            
            {/* Desktop Categories Vertical Menu */}
            <div className="hidden lg:block space-y-2">
              <span className="text-[10px] font-mono tracking-[0.2em] font-bold text-slate-400 uppercase block mb-3">
                {t("catalog.index")}
              </span>
              <button
                onClick={() => handleCategoryClick(null)}
                className={cn(
                  "w-full text-left font-mono text-xs px-3.5 py-2 rounded-xl transition-all duration-200 cursor-pointer flex items-center justify-between group border border-transparent",
                  !activeCategory 
                    ? "bg-indigo-50/80 text-indigo-600 font-bold border-indigo-100 shadow-sm" 
                    : "text-slate-600 hover:text-indigo-600 hover:bg-white/80"
                )}
              >
                <span>{t("catalog.allDocs")}</span>
                <span className="text-[10px] opacity-70 font-semibold">{localizedSkills.length}</span>
              </button>

              {sortedCategories.map((cat) => {
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => handleCategoryClick(cat.id)}
                    className={cn(
                      "w-full text-left font-mono text-xs px-3.5 py-2 rounded-xl transition-all duration-200 cursor-pointer flex items-center justify-between group border border-transparent",
                      isActive 
                        ? "bg-indigo-50/80 text-indigo-600 font-bold border-indigo-100 shadow-sm" 
                        : "text-slate-600 hover:text-indigo-600 hover:bg-white/80"
                    )}
                  >
                    <span className="truncate">{cat.icon} {t(("category." + cat.id) as TranslationKey) || cat.label}</span>
                    <span className="text-[10px] opacity-70 font-semibold">
                       {categoryCountMap[cat.id] || 0}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Source / Engine Filters */}
            <div className="space-y-2">
              <span className="text-[10px] font-mono tracking-[0.2em] font-bold text-slate-400 uppercase block mb-2">
                {t("catalog.sources")}
              </span>
              <div className="flex flex-wrap lg:flex-col gap-1.5">
                <button
                  onClick={() => setActiveProvider(prev => prev === "antigravity" ? null : "antigravity")}
                  className={cn(
                    "text-[10px] font-mono text-left px-3 py-1.5 rounded-lg border cursor-pointer transition-all duration-150 flex items-center justify-between w-full",
                    activeProvider === "antigravity"
                      ? "bg-indigo-50 border-indigo-200 text-indigo-600 font-bold shadow-sm"
                      : "bg-white/60 border-slate-200/60 text-slate-600 hover:text-indigo-600 hover:bg-white"
                  )}
                >
                  <span>Antigravity</span>
                  <span className={cn(
                    "text-[9px] font-bold px-1.5 py-0.2 rounded font-mono",
                    activeProvider === "antigravity" ? "bg-indigo-100 text-indigo-700" : "bg-slate-100 text-slate-500"
                  )}>
                    {localizedSkills.filter(s => s.provider === "antigravity").length}
                  </span>
                </button>
                <button
                  onClick={() => setActiveProvider(prev => prev === "minimax" ? null : "minimax")}
                  className={cn(
                    "text-[10px] font-mono text-left px-3 py-1.5 rounded-lg border cursor-pointer transition-all duration-150 flex items-center justify-between w-full",
                    activeProvider === "minimax"
                      ? "bg-indigo-50 border-indigo-200 text-indigo-600 font-bold shadow-sm"
                      : "bg-white/60 border-slate-200/60 text-slate-600 hover:text-indigo-600 hover:bg-white"
                  )}
                >
                  <span>Minimax</span>
                  <span className={cn(
                    "text-[9px] font-bold px-1.5 py-0.2 rounded font-mono",
                    activeProvider === "minimax" ? "bg-indigo-100 text-indigo-700" : "bg-slate-100 text-slate-500"
                  )}>
                    {localizedSkills.filter(s => s.provider === "minimax").length}
                  </span>
                </button>
              </div>
            </div>



          </aside>

          {/* ==================================================================
              COL 2: MAIN CONTENT PANEL (75% / Search & List)
              ================================================================== */}
          <div className="flex-1 min-w-0 w-full space-y-6">
            {/* SEO & Docs Header Title */}
            <div className="border-b border-slate-200/60 pb-4">
              <h1 className="text-xl sm:text-2xl font-bold font-mono tracking-tight text-indigo-600 uppercase">
                {t("catalog.title")}
              </h1>
              <p className="text-xs text-slate-500 mt-1 font-mono">
                {t("catalog.subtitle")}
              </p>
            </div>

            {/* Mobile Categories Collapsible List */}
            <div className="lg:hidden w-full select-none">
              <button
                onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
                className="w-full py-3 px-4 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-xs font-mono font-bold text-slate-700 flex items-center justify-between cursor-pointer shadow-sm active:scale-[0.99] transition-all"
              >
                <div className="flex items-center gap-2 min-w-0">
                  {activeCategory ? (
                    <>
                      <span className="shrink-0">{CATEGORIES[activeCategory]?.icon}</span>
                      <span className="truncate text-left text-slate-800 font-sans font-semibold">
                        {t(("category." + activeCategory) as TranslationKey) || CATEGORIES[activeCategory]?.label}
                      </span>
                    </>
                  ) : (
                    <>
                      <span className="shrink-0">🌐</span>
                      <span className="truncate text-left text-slate-800 font-sans font-semibold">
                        {t("catalog.allDocs")}
                      </span>
                    </>
                  )}
                </div>
                <span className="text-[9px] text-indigo-500 font-bold shrink-0 ml-2">
                  {isCategoriesOpen ? t("catalog.mobileHide") : t("catalog.mobileShow")}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {isCategoriesOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden mt-2 bg-white/80 border border-slate-200 rounded-2xl p-2 space-y-1 shadow-sm"
                  >
                    <button
                      onClick={() => {
                        handleCategoryClick(null);
                        setIsCategoriesOpen(false);
                      }}
                      className={cn(
                        "w-full text-left font-mono text-[11px] px-3.5 py-2.5 rounded-xl transition-all duration-200 cursor-pointer flex items-center justify-between group border border-transparent",
                        !activeCategory 
                          ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold shadow-sm" 
                          : "text-slate-600 hover:text-indigo-600 hover:bg-white/80"
                      )}
                    >
                      <span>{t("catalog.allDocs")}</span>
                      <span className={cn(
                        "text-[9px] font-bold px-1.5 py-0.5 rounded",
                        !activeCategory ? "bg-white/20 text-white" : "bg-slate-100 text-slate-500"
                      )}>{localizedSkills.length}</span>
                    </button>

                    {sortedCategories.map((cat) => {
                      const isActive = activeCategory === cat.id;
                      return (
                        <button
                          key={cat.id}
                          onClick={() => {
                            handleCategoryClick(cat.id);
                            setIsCategoriesOpen(false);
                          }}
                          className={cn(
                            "w-full text-left font-mono text-[11px] px-3.5 py-2.5 rounded-xl transition-all duration-200 cursor-pointer flex items-center justify-between group border border-transparent",
                            isActive 
                              ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold shadow-sm" 
                              : "text-slate-600 hover:text-indigo-600 hover:bg-white/80"
                          )}
                        >
                          <span className="truncate">{cat.icon} {t(("category." + cat.id) as TranslationKey) || cat.label}</span>
                          <span className={cn(
                            "text-[9px] font-bold px-1.5 py-0.5 rounded",
                            isActive ? "bg-white/20 text-white" : "bg-slate-100 text-slate-500"
                          )}>
                            {categoryCountMap[cat.id] || 0}
                          </span>
                        </button>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>



            {/* Search Control Hub */}
            <div className="flex items-center gap-3">
              <div className="relative flex-1 bg-white/80 border border-slate-200 focus-within:border-indigo-500/50 focus-within:shadow-[0_0_15px_rgba(99,102,241,0.1)] transition-all duration-300 flex items-center rounded-xl">
                <Search
                  size={15}
                  className="absolute left-3.5 text-slate-400"
                />
                <input
                  type="text"
                  placeholder={isMobile ? t("catalog.mobileSearchPlaceholder") : t("catalog.searchPlaceholder")}
                  value={searchVal}
                  onChange={(e) => setSearchVal(e.target.value)}
                  className="w-full pl-10 pr-32 py-2.5 bg-transparent border-none rounded-xl text-xs text-slate-800 placeholder:text-slate-400 outline-none font-mono"
                  id="skill-search"
                />
                
                {/* Tech Badge Status Indicator */}
                <div className="absolute right-3 font-mono text-[9px] font-bold px-2 py-0.5 rounded bg-slate-100 border border-slate-200 select-none pointer-events-none flex items-center gap-1.5">
                  <span className={cn(
                    "h-1 w-1 rounded-full transition-all duration-300",
                    searchVal ? "bg-indigo-500 animate-pulse" : "bg-emerald-500"
                  )} />
                  <span className="text-slate-500">
                    {searchVal ? `FOUND: ${filteredSkills.length}` : `TOTAL: ${filteredTotal}`}
                  </span>
                </div>
              </div>
            </div>

            {/* Active filters display bar */}
            {hasFilters && (
              <div className="hidden sm:flex items-center gap-1.5 flex-wrap text-[10px] font-mono text-slate-400">
                <span>{t("catalog.activeFilters")}</span>
                {searchVal && (
                  <span className="px-2 py-0.5 rounded bg-slate-100 border border-slate-200 text-slate-600">
                    {t("catalog.filterSearch")} &quot;{searchVal}&quot;
                  </span>
                )}
                {activeCategory && (
                  <span className="px-2 py-0.5 rounded bg-slate-100 border border-slate-200 text-slate-600">
                    {t("catalog.filterCategory")} {t(("category." + activeCategory) as TranslationKey) || CATEGORIES[activeCategory]?.label || activeCategory}
                  </span>
                )}
                {activeProvider && (
                  <span className="px-2 py-0.5 rounded bg-slate-100 border border-slate-200 text-slate-600">
                    {t("catalog.filterSource")} {activeProvider === "antigravity" ? "Antigravity" : "Minimax"}
                  </span>
                )}

                <button
                  onClick={clearFilters}
                  className="text-indigo-600 hover:underline border-none bg-transparent cursor-pointer font-bold pl-1"
                >
                  {t("catalog.clearFilters")}
                </button>
              </div>
            )}

            {/* Encyclopedia Content Output */}
            <div className="min-h-[40vh]">
              {filteredSkills.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex flex-col items-center justify-center text-center py-16 px-6 rounded-xl border border-slate-200 bg-white/70 backdrop-blur-md max-w-md mx-auto shadow-lg"
                >
                  <div className="mb-4 p-4 rounded-full bg-red-500/10 text-red-500/70 border border-red-500/10">
                    <Search size={24} />
                  </div>
                  <h3 className="text-base font-bold font-mono text-slate-800 mb-1">
                    {t("catalog.noSkills")}
                  </h3>
                  <p className="text-xs text-slate-500 mb-6 max-w-xs leading-relaxed">
                    {t("catalog.noSkillsDesc")}
                  </p>
                  <button
                    onClick={clearFilters}
                    className="px-4 py-2 text-xs font-bold rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 hover:scale-[1.02] text-white transition-all duration-150 cursor-pointer shadow-lg"
                  >
                    {t("catalog.clearSearchFilters")}
                  </button>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="skills-table-container border-0 sm:border border-slate-200 bg-transparent sm:bg-white/70 backdrop-blur-none sm:backdrop-blur-md rounded-none sm:rounded-xl overflow-hidden shadow-none sm:shadow-[0_8px_30px_rgba(0,0,0,0.025)]"
                >
                  {/* Header Row */}
                  <div className="hidden sm:flex items-center justify-between py-2.5 px-4 bg-slate-50/50 border-b border-slate-200/60 text-[10px] text-slate-400 uppercase tracking-wider font-mono font-bold">
                    <div className="w-[35%]">{t("catalog.tableHeaderSyntax")}</div>
                    <div className="w-[53%]">{t("catalog.tableHeaderDesc")}</div>
                    <div className="w-[12%] text-right whitespace-nowrap">{t("catalog.tableHeaderDocs")}</div>
                  </div>

                  {/* Skills flat list with smooth transition */}
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-2 gap-3 sm:flex sm:flex-col sm:divide-y sm:divide-slate-100"
                  >
                    <AnimatePresence mode="popLayout">
                      {filteredSkills.map((skill) => (
                        <motion.div
                          key={skill.slug}
                          variants={cardVariants}
                          layout
                          className="w-full"
                        >
                          <SkillRow skill={skill} navigateTo={navigateTo} />
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </motion.div>
                </motion.div>
              )}
            </div>


          </div>

        </div>
        </div>

      {/* Embedded style elements for Hologram cards hover shadow effects and card override resets */}
      <style dangerouslySetInnerHTML={{ __html: `
        @media (min-width: 640px) {
          /* Override global .skill-card card-like styles inside the skills list container */
          .skills-table-container .skill-card {
            display: flex !important;
            flex-direction: row !important;
            align-items: center !important;
            justify-content: space-between !important;
            gap: 0 !important;
            padding: 0.75rem 1rem !important;
            background: transparent !important;
            border: none !important;
            border-bottom: 1px solid rgba(148, 163, 184, 0.12) !important;
            border-radius: 0 !important;
            transform: none !important;
            box-shadow: none !important;
            transition: background 0.15s ease !important;
          }
          
          .skills-table-container .skill-card:hover {
            background: rgba(99, 102, 241, 0.025) !important;
            border-bottom-color: rgba(148, 163, 184, 0.25) !important;
            transform: none !important;
            box-shadow: none !important;
          }
        }

        @media (max-width: 639px) {
          /* Style .skill-card as beautiful compact light-themed cards on mobile view */
          .skills-table-container .skill-card {
            display: flex !important;
            flex-direction: column !important;
            gap: 0.35rem !important;
            padding: 0.75rem 0.85rem !important;
            background: #ffffff !important;
            border: 1px solid rgba(226, 232, 240, 0.9) !important;
            border-radius: 0.75rem !important;
            box-shadow: 0 4px 12px rgba(99, 102, 241, 0.02), 
                        0 1px 2px rgba(0, 0, 0, 0.025) !important;
            transform: none !important;
            transition: all 0.2s ease-in-out !important;
            color: #1e293b !important;
          }
          
          .skills-table-container .skill-card:hover,
          .skills-table-container .skill-card:active {
            background: #f8fafc !important;
            border-color: rgba(99, 102, 241, 0.35) !important;
            box-shadow: 0 6px 16px rgba(99, 102, 241, 0.05), 
                        0 1px 3px rgba(99, 102, 241, 0.02) !important;
            transform: translateY(-1px) !important;
          }
        }

        .skill-card-glow {
          position: relative;
        }
        .skill-card-glow::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 0.75rem;
          padding: 1.1px;
          background: radial-gradient(
            180px circle at var(--mouse-x, 0px) var(--mouse-y, 0px),
            rgba(99, 102, 241, 0.25) 0%,
            rgba(167, 139, 250, 0.15) 50%,
            transparent 100%
          );
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: 2;
        }
        .skill-card-glow:hover::before {
          opacity: 1;
        }
        .skill-card-glow::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 0.75rem;
          background: radial-gradient(
            220px circle at var(--mouse-x, 0px) var(--mouse-y, 0px),
            rgba(99, 102, 241, 0.03) 0%,
            rgba(167, 139, 250, 0.01) 50%,
            transparent 100%
          );
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: 0;
        }
        .skill-card-glow:hover::after {
          opacity: 1;
        }
      `}} />
      </motion.div>
    </div>
  );
}
