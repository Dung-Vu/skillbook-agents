"use client";

import React, { useState, useMemo, useEffect, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Search, ArrowRight, Sparkles } from "lucide-react";
import Fuse from "fuse.js";
import { cn } from "@/lib/utils";
import {
  Skill,
  COMPLEXITY_CONFIG,
  PLATFORM_CONFIG,
  ComplexityLevel,
  PlatformId,
} from "@/types/skill";
import { CATEGORIES } from "@/lib/categories";

interface SkillCatalogClientProps {
  skills: Skill[];
  categoryCountMap: Record<string, number>;
}

// ============================================================================
// ANIMATION VARIANTS (R2.3 - Stagger Transitions & Elegant Spring Motions)
// ============================================================================
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.02,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.03,
      staggerDirection: -1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 15, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 14,
      mass: 0.8,
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    scale: 0.98,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
};

// ============================================================================
// MEMOIZED SKILL CARD COMPONENT (R1.3 & R2.1/R2.2 - Upgraded with Glassmorphism & Mouse Tracker)
// ============================================================================
interface SkillCardProps {
  skill: Skill;
}

const SkillCard = React.memo(function SkillCard({ skill }: SkillCardProps): React.ReactElement {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCoords({ x, y });
  }, []);

  return (
    <Link
      href={`/skills/${skill.slug}`}
      className="skill-card glass-panel group relative overflow-hidden border border-white/5 bg-[var(--color-bg-glass)] hover:border-white/10 transition-all duration-300 skill-card-glow cursor-pointer"
      id={`skill-${skill.slug}`}
      onMouseMove={handleMouseMove}
      style={{
        "--mouse-x": `${coords.x}px`,
        "--mouse-y": `${coords.y}px`,
      } as React.CSSProperties}
    >
      {/* Cyberpunk Laser Scan Line */}
      <div className="laser-scan-line absolute inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-[var(--color-cyber-violet)] to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none" />

      {/* Card Content Grid */}
      <div className="flex items-center justify-between z-10 relative">
        <span className="skill-card__command gradient-text">
          {skill.command}
        </span>
        <div className="flex items-center gap-2">
          <span
            className="text-xs font-medium px-2 py-0.5 rounded-full"
            style={{
              color: COMPLEXITY_CONFIG[skill.complexity]?.color || "#22c55e",
              background: `${COMPLEXITY_CONFIG[skill.complexity]?.color || "#22c55e"}15`,
            }}
          >
            {COMPLEXITY_CONFIG[skill.complexity]?.dot || "🟢"}{" "}
            {COMPLEXITY_CONFIG[skill.complexity]?.label || "Starter"}
          </span>
          {skill.featured && (
            <Sparkles
              size={14}
              className="text-yellow-400 animate-pulse"
            />
          )}
          <ArrowRight
            size={16}
            className="text-[var(--color-text-muted)] group-hover:text-[var(--color-accent-primary)] group-hover:translate-x-1 transition-all duration-200"
          />
        </div>
      </div>

      <p className="skill-card__description z-10 relative mt-2 text-[var(--color-text-secondary)]">
        {skill.description}
      </p>

      <div className="skill-card__meta z-10 relative mt-4">
        {skill.platforms.slice(0, 4).map((p) => (
          <span
            key={p}
            className="text-xs px-2 py-0.5 rounded-full bg-white/5 text-[var(--color-text-muted)] border border-white/5"
          >
            {PLATFORM_CONFIG[p as PlatformId]?.label || p}
          </span>
        ))}
        {skill.platforms.length > 4 && (
          <span className="text-xs text-[var(--color-text-muted)]">
            +{skill.platforms.length - 4}
          </span>
        )}
      </div>
    </Link>
  );
});

// ============================================================================
// MAIN CATALOG CLIENT
// ============================================================================
export function SkillCatalogClient({
  skills = [],
  categoryCountMap = {},
}: SkillCatalogClientProps): React.ReactElement {
  // R1.1 - Two separate states to support fuzzy search debouncing (Fuse.js)
  const [searchVal, setSearchVal] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activePlatform, setActivePlatform] = useState<PlatformId | null>(null);
  const [activeComplexity, setActiveComplexity] =
    useState<ComplexityLevel | null>(null);

  // R1.1 - Synchronize searchVal to searchQuery after 200ms debounce
  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchQuery(searchVal);
    }, 200);
    return () => clearTimeout(timer);
  }, [searchVal]);

  const sortedCategories = useMemo(
    () => Object.values(CATEGORIES).sort((a, b) => a.order - b.order),
    []
  );

  const fuse = useMemo(() => {
    return new Fuse(skills || [], {
      keys: [
        { name: "title", weight: 0.4 },
        { name: "command", weight: 0.3 },
        { name: "description", weight: 0.2 },
        { name: "tags", weight: 0.1 },
      ],
      threshold: 0.35,
    });
  }, [skills]);

  // R1.4 - Multi-Filter Combinations (Harmony logic)
  const filteredSkills = useMemo(() => {
    let result = skills || [];

    if (searchQuery.trim()) {
      const searchResults = fuse.search(searchQuery);
      result = searchResults.map((r) => r.item);
    }

    if (activeCategory) {
      result = result.filter((s) => s.category === activeCategory);
    }

    if (activePlatform) {
      result = result.filter((s) => s.platforms && s.platforms.includes(activePlatform));
    }

    if (activeComplexity) {
      result = result.filter((s) => s.complexity === activeComplexity);
    }

    return result;
  }, [skills, fuse, searchQuery, activeCategory, activePlatform, activeComplexity]);

  // Group filtered skills by category
  const groupedSkills = useMemo(() => {
    const groups: Record<string, Skill[]> = {};
    for (const skill of filteredSkills) {
      if (!groups[skill.category]) groups[skill.category] = [];
      groups[skill.category].push(skill);
    }
    return groups;
  }, [filteredSkills]);

  // R1.2 - Memoize event handlers using useCallback
  const handleCategoryClick = useCallback((categoryId: string | null): void => {
    setActiveCategory((prev) => (prev === categoryId ? null : categoryId));
  }, []);

  const handlePlatformClick = useCallback((platform: PlatformId): void => {
    setActivePlatform((prev) => (prev === platform ? null : platform));
  }, []);

  const handleComplexityClick = useCallback((complexity: ComplexityLevel): void => {
    setActiveComplexity((prev) => (prev === complexity ? null : complexity));
  }, []);

  const clearFilters = useCallback((): void => {
    setSearchVal("");
    setSearchQuery("");
    setActiveCategory(null);
    setActivePlatform(null);
    setActiveComplexity(null);
  }, []);

  // R1.2 - Memoize filter state check
  const hasFilters = useMemo(() => {
    return !!(searchVal || activeCategory || activePlatform || activeComplexity);
  }, [searchVal, activeCategory, activePlatform, activeComplexity]);

  return (
    <div className="min-h-screen pt-24 bg-gradient-to-b from-[var(--color-bg-primary)] to-[var(--color-bg-secondary)] relative overflow-hidden">
      {/* Animated Artistic Catalog Background Image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img 
        src="/images/catalog_mouse_glow.png" 
        alt="Catalog Background"
        className="absolute inset-0 w-full h-full object-cover select-none filter blur-[0.5px] animate-bg-pulse pointer-events-none z-0"
        style={{ opacity: 0.45 }}
      />
      {/* Soft Vignette Overlay for Catalog */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-bg-primary)] via-transparent to-[var(--color-bg-primary)] opacity-50 pointer-events-none z-0" />
      {/* Dynamic Background Ambient Lights */}
      <div className="glow-core opacity-10 absolute -top-40 right-20 w-[40rem] h-[40rem] pointer-events-none" />
      <div className="glow-core glow-core--indigo opacity-10 absolute top-[40%] -left-40 w-[35rem] h-[35rem] pointer-events-none" />

      {/* Mini Hero */}
      <div className="px-6 pb-8 z-10 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="section-title mb-3 flex items-center gap-2">
              <Sparkles size={14} className="text-[var(--color-accent-primary)] animate-pulse" />
              Skill Encyclopedia
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-2 tracking-tight">
              Skills <span className="gradient-text">Catalog</span>
            </h1>
            <p className="text-[var(--color-text-secondary)] mb-8">
              {skills.length} curated skills across {sortedCategories.length}{" "}
              categories
            </p>

            {/* Search Glassmorphism */}
            <div className="relative max-w-xl glass-panel border border-white/5 focus-within:border-white/10 transition-all duration-300">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)]"
              />
              <input
                type="text"
                placeholder="Search skills... (e.g. chain-of-thought, MCP, Next.js)"
                value={searchVal}
                onChange={(e) => setSearchVal(e.target.value)}
                className="w-full pl-11 pr-4 py-3.5 bg-transparent border-none rounded-xl text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] outline-none"
                id="skill-search"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Filter Bar Glassmorphism */}
      <div className="sticky top-[72px] z-30 bg-[var(--color-bg-primary)]/70 backdrop-blur-xl border-b border-white/5 px-6 py-4 shadow-[0_8px_30px_rgb(0,0,0,0.3)]">
        <div className="max-w-6xl mx-auto space-y-4">
          {/* Category Filters with Sliding active bubble tab indicator (R2.4) */}
          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={() => handleCategoryClick(null)}
              className={cn(
                "chip cursor-pointer relative z-10 transition-colors duration-300 font-medium px-4 py-1.5",
                !activeCategory ? "text-[var(--color-accent-primary)] border-transparent bg-transparent shadow-none" : "text-[var(--color-text-secondary)]"
              )}
            >
              {!activeCategory && (
                <motion.span
                  layoutId="activeCategoryTab"
                  className="absolute inset-0 bg-gradient-to-r from-purple-500/15 to-indigo-500/15 border border-[var(--color-border-accent)] rounded-full -z-10 shadow-[0_0_15px_rgba(139,92,246,0.15)]"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              All
            </button>
            {sortedCategories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryClick(cat.id)}
                  className={cn(
                    "chip cursor-pointer relative z-10 transition-colors duration-300 font-medium px-4 py-1.5",
                    isActive ? "text-[var(--color-accent-primary)] border-transparent bg-transparent shadow-none" : "text-[var(--color-text-secondary)]"
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeCategoryTab"
                      className="absolute inset-0 bg-gradient-to-r from-purple-500/15 to-indigo-500/15 border border-[var(--color-border-accent)] rounded-full -z-10 shadow-[0_0_15px_rgba(139,92,246,0.15)]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span>{cat.icon} {cat.label}</span>
                  <span className="ml-1.5 opacity-60 text-xs">
                    {categoryCountMap[cat.id] || 0}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Platform + Complexity Sub-Filters with micro-glass tabs */}
          <div className="flex items-center gap-2 flex-wrap text-xs pt-1 border-t border-white/5">
            <span className="text-[var(--color-text-muted)] font-medium mr-1 uppercase tracking-wider text-[10px]">
              Platform:
            </span>
            {(
              Object.keys(PLATFORM_CONFIG) as PlatformId[]
            ).slice(0, 8).map((p) => (
              <button
                key={p}
                onClick={() => handlePlatformClick(p)}
                className={cn(
                  "chip cursor-pointer text-xs transition-all duration-200 px-3 py-1",
                  activePlatform === p ? "chip--active bg-[var(--color-accent-glow)] border-[var(--color-border-accent)]" : "bg-white/5 border-white/5"
                )}
              >
                {PLATFORM_CONFIG[p].label}
              </button>
            ))}

            <span className="text-[var(--color-text-muted)] font-medium ml-3 mr-1 uppercase tracking-wider text-[10px]">
              Level:
            </span>
            {(
              Object.keys(COMPLEXITY_CONFIG) as ComplexityLevel[]
            ).map((c) => (
              <button
                key={c}
                onClick={() => handleComplexityClick(c)}
                className={cn(
                  "chip cursor-pointer text-xs transition-all duration-200 px-3 py-1",
                  activeComplexity === c ? "chip--active bg-[var(--color-accent-glow)] border-[var(--color-border-accent)]" : "bg-white/5 border-white/5"
                )}
              >
                {COMPLEXITY_CONFIG[c].dot} {COMPLEXITY_CONFIG[c].label}
              </button>
            ))}

            {hasFilters && (
              <button
                onClick={clearFilters}
                className="text-xs text-[var(--color-accent-primary)] font-semibold ml-2 cursor-pointer hover:underline bg-transparent border-none py-1 px-2"
              >
                Clear all
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Skill List */}
      <div className="px-6 py-10 z-10 relative">
        <div className="max-w-6xl mx-auto">
          {filteredSkills.length === 0 ? (
            // ========================================================================
            // BEAUTIFUL "NO RESULTS FOUND" CONTAINER WITH CURRENT FILTER TAGS
            // ========================================================================
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="flex flex-col items-center justify-center text-center py-20 px-6 rounded-2xl border border-white/5 bg-[var(--color-bg-glass)] backdrop-blur-md max-w-lg mx-auto shadow-2xl"
            >
              <div className="relative mb-6 p-5 rounded-full bg-red-500/10 text-red-500/80 animate-pulse border border-red-500/20">
                <Search size={36} />
                <span className="absolute -top-1 -right-1 flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                </span>
              </div>

              <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mb-2">
                Không tìm thấy kỹ năng nào phù hợp
              </h3>
              <p className="text-sm text-[var(--color-text-secondary)] mb-8 max-w-sm">
                Chúng tôi không tìm thấy kết quả nào khớp với các tiêu chí tìm kiếm của bạn. Hãy thử thay đổi từ khóa hoặc xóa các bộ lọc.
              </p>

              {hasFilters && (
                <div className="flex flex-wrap gap-2 justify-center mb-8 max-w-md p-4 bg-white/5 rounded-xl border border-white/5">
                  {searchVal && (
                    <span className="text-xs px-2.5 py-1.5 rounded-md bg-white/5 border border-white/10 text-[var(--color-text-secondary)]">
                      Từ khóa: <strong className="text-[var(--color-text-primary)]">&quot;{searchVal}&quot;</strong>
                    </span>
                  )}
                  {activeCategory && (
                    <span className="text-xs px-2.5 py-1.5 rounded-md bg-white/5 border border-white/10 text-[var(--color-text-secondary)]">
                      Danh mục: <strong className="text-[var(--color-text-primary)]">{CATEGORIES[activeCategory]?.label || activeCategory}</strong>
                    </span>
                  )}
                  {activePlatform && (
                    <span className="text-xs px-2.5 py-1.5 rounded-md bg-white/5 border border-white/10 text-[var(--color-text-secondary)]">
                      Nền tảng: <strong className="text-[var(--color-text-primary)]">{PLATFORM_CONFIG[activePlatform]?.label}</strong>
                    </span>
                  )}
                  {activeComplexity && (
                    <span className="text-xs px-2.5 py-1.5 rounded-md bg-white/5 border border-white/10 text-[var(--color-text-secondary)]">
                      Độ khó: <strong className="text-[var(--color-text-primary)]">{COMPLEXITY_CONFIG[activeComplexity]?.label}</strong>
                    </span>
                  )}
                </div>
              )}

              <button
                onClick={clearFilters}
                className="px-6 py-3 text-sm font-bold rounded-xl bg-gradient-to-r from-[var(--color-cyber-violet)] to-[var(--color-neon-indigo)] hover:scale-[1.03] text-white transition-all duration-200 cursor-pointer shadow-lg shadow-purple-500/20"
              >
                Xóa tất cả bộ lọc
              </button>
            </motion.div>
          ) : (
            <div className="space-y-16">
              {sortedCategories
                .filter((cat) => groupedSkills[cat.id])
                .map((cat) => (
                  <div key={cat.id} id={`cat-${cat.id}`}>
                    {/* Category Header */}
                    <div className="flex items-center gap-3 mb-6">
                      <span className="text-3xl">{cat.icon}</span>
                      <h2 className="text-2xl font-bold tracking-tight">{cat.label}</h2>
                      <span className="text-sm font-mono text-[var(--color-text-muted)] bg-white/5 px-2.5 py-0.5 rounded-full border border-white/5">
                        {groupedSkills[cat.id].length} skills
                      </span>
                      <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent ml-4" />
                    </div>

                    {/* Skill Cards Grid with Stagger Entrance (R2.3) */}
                    <AnimatePresence mode="popLayout">
                      <motion.div
                        key={`${cat.id}-${activePlatform}-${activeComplexity}-${searchQuery}`}
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="grid grid-cols-1 md:grid-cols-2 gap-5"
                      >
                        {groupedSkills[cat.id].map((skill) => (
                          <motion.div
                            key={skill.slug}
                            variants={cardVariants}
                            layout="position"
                          >
                            <SkillCard skill={skill} />
                          </motion.div>
                        ))}
                      </motion.div>
                    </AnimatePresence>
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>

      {/* Modular styled element containing custom CSS for coordinate-based hover effects */}
      <style dangerouslySetInnerHTML={{ __html: `
        .skill-card-glow {
          position: relative;
        }
        .skill-card-glow::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: var(--radius-card, 1rem);
          padding: 1.5px;
          background: radial-gradient(
            220px circle at var(--mouse-x, 0px) var(--mouse-y, 0px),
            var(--color-cyber-violet) 0%,
            var(--color-neon-indigo) 50%,
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
          border-radius: var(--radius-card, 1rem);
          background: radial-gradient(
            320px circle at var(--mouse-x, 0px) var(--mouse-y, 0px),
            hsla(285, 100%, 64%, 0.12) 0%,
            hsla(230, 100%, 67%, 0.04) 50%,
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
    </div>
  );
}
