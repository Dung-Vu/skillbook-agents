"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { 
  Calendar, 
  ArrowRight, 
  Milestone, 
  Cpu, 
  Sparkles, 
  CheckCircle2 
} from "lucide-react";
import { motion } from "framer-motion";

const MeshGridBackground = dynamic(
  () => import("@/components/ui/MeshGridBackground").then((mod) => mod.MeshGridBackground),
  { ssr: false }
);
import { cn } from "@/lib/utils";
import { Skill } from "@/types/skill";
import { CATEGORIES } from "@/lib/categories";
import { useLanguage } from "@/context/LanguageContext";

interface ChangelogClientProps {
  skills: Skill[];
}

interface CoreMilestone {
  milestone: string;
  title: string;
  date: string;
  description: React.ReactNode;
  tag: string;
  badgeClass: string;
}

interface CustomWindow extends Window {
  __canvasPaused?: boolean;
}

export function ChangelogClient({ skills }: ChangelogClientProps): React.ReactElement {
  const { t } = useLanguage();

  // Sort skills by lastVerified date descending
  const sortedSkills = React.useMemo(() => {
    return [...skills].sort((a, b) => {
      return new Date(b.lastVerified).getTime() - new Date(a.lastVerified).getTime();
    });
  }, [skills]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      (window as unknown as CustomWindow).__canvasPaused = false;
      window.dispatchEvent(new CustomEvent("canvas-resume"));
    }
  }, []);

  const CORE_MILESTONES: CoreMilestone[] = React.useMemo(() => [
    {
      milestone: "M7",
      title: t("changelog.m7Title"),
      date: "2026-05-31",
      description: (
        <span>
          {t("changelog.m7Desc")}
        </span>
      ),
      tag: "Premium Visual",
      badgeClass: "bg-rose-50 border-rose-100 text-rose-600",
    },
    {
      milestone: "M6",
      title: t("changelog.m6Title"),
      date: "2026-05-31",
      description: (
        <span>
          {t("changelog.m6Desc")}
        </span>
      ),
      tag: "UX / Transitions",
      badgeClass: "bg-indigo-50 border-indigo-100 text-indigo-600",
    },
    {
      milestone: "M5",
      title: t("changelog.m5Title"),
      date: "2026-05-30",
      description: (
        <span>
          {t("changelog.m5Desc")}
        </span>
      ),
      tag: "Interactive Canvas",
      badgeClass: "bg-violet-50 border-violet-100 text-violet-600",
    },
    {
      milestone: "M4",
      title: t("changelog.m4Title"),
      date: "2026-05-30",
      description: (
        <span>
          {t("changelog.m4Desc")}
        </span>
      ),
      tag: "Performance",
      badgeClass: "bg-emerald-50 border-emerald-100 text-emerald-600",
    },
    {
      milestone: "M3",
      title: t("changelog.m3Title"),
      date: "2026-05-29",
      description: (
        <span>
          {t("changelog.m3Desc")}
        </span>
      ),
      tag: "Content Integration",
      badgeClass: "bg-blue-50 border-blue-100 text-blue-600",
    },
    {
      milestone: "M2",
      title: t("changelog.m2Title"),
      date: "2026-05-29",
      description: (
        <span>
          {t("changelog.m2Desc")}
        </span>
      ),
      tag: "UX / Navigation",
      badgeClass: "bg-cyan-50 border-cyan-100 text-cyan-600",
    },
    {
      milestone: "M1",
      title: t("changelog.m1Title"),
      date: "2026-05-29",
      description: (
        <span>
          {t("changelog.m1Desc")}
        </span>
      ),
      tag: "Infrastructure",
      badgeClass: "bg-amber-50 border-amber-100 text-amber-600",
    },
  ], [t]);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 18,
      }
    },
  };

  return (
    <>
      <Header />
      <main className="min-h-screen pt-28 bg-[#f4f6fc] text-slate-800 relative overflow-clip pb-20 transition-colors duration-300">
        
        {/* Luminous Interactive Mesh Grid Background */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-85">
          <MeshGridBackground />
        </div>

        {/* Floating Pastel Auroras */}
        <div className="absolute top-1/4 left-1/10 w-96 h-96 rounded-full bg-violet-400/10 blur-[100px] pointer-events-none" />
        <div className="absolute bottom-1/3 right-1/10 w-[30rem] h-[30rem] rounded-full bg-emerald-400/10 blur-[120px] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          
          {/* Header Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 18 }}
            className="mb-16 text-center max-w-3xl mx-auto"
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase text-indigo-600 bg-indigo-50 border border-indigo-100 mb-4">
              <Sparkles size={10} className="animate-spin" style={{ animationDuration: "6s" }} />
              {t("changelog.briefing")}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 leading-tight tracking-tight text-slate-900">
              {t("changelog.title")}
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-sans">
              {t("changelog.desc")}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start">
            
            {/* Left Column: Core Milestones */}
            <div className="lg:col-span-7">
              <h2 className="text-xl font-bold mb-8 flex items-center gap-2 text-slate-900 border-b border-slate-200 pb-3 font-mono">
                <Milestone className="text-indigo-500" size={18} />
                {t("changelog.coreMilestones")}
              </h2>
              
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="show"
                className="relative pl-6 sm:pl-8 border-l border-slate-200 ml-2 sm:ml-4 space-y-12"
              >
                {CORE_MILESTONES.map((item) => (
                  <motion.div 
                    key={item.milestone} 
                    variants={itemVariants}
                    className="relative group"
                  >
                    {/* Glowing Dot */}
                    <div className="absolute -left-8 sm:-left-10 top-1.5 w-4 h-4 rounded-full bg-white border-2 border-indigo-500 flex items-center justify-center transition-all duration-300 group-hover:scale-125 group-hover:bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.3)] group-hover:shadow-[0_0_12px_rgba(99,102,241,0.5)]" />
                    
                    <div className="bg-white/70 backdrop-blur-md border border-slate-200/80 rounded-3xl transition-all duration-300 hover:bg-white/95 hover:border-slate-300 hover:shadow-md p-4 sm:p-6 shadow-[0_8px_30px_rgba(0,0,0,0.02)]">
                      <div className="flex items-center justify-between gap-4 mb-4 flex-wrap">
                        <span className={cn("text-[10px] font-mono font-bold px-2 py-0.5 rounded border uppercase tracking-wider", item.badgeClass)}>
                          {item.milestone} • {item.tag}
                        </span>
                        <span className="text-xs text-slate-400 flex items-center gap-1 font-mono">
                          <Calendar size={12} className="text-slate-400" />
                          {item.date}
                        </span>
                      </div>
                      <h3 className="text-base font-black text-slate-900 mb-2 font-sans group-hover:text-indigo-600 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Right Column: Top 5 Recently Verified Skills */}
            <div className="lg:col-span-5 space-y-8">

              {/* Top 5 Recently Verified Skills */}
              <div>
                <h2 className="text-xl font-bold mb-6 flex items-center gap-2 text-slate-900 border-b border-slate-200 pb-3 font-mono">
                  <Cpu className="text-indigo-500" size={18} />
                  {t("changelog.recentlyVerified")}
                </h2>

                <motion.div 
                  variants={containerVariants}
                  initial="hidden"
                  animate="show"
                  className="relative pl-6 sm:pl-8 border-l border-slate-200 ml-2 sm:ml-4 space-y-6"
                >
                  {sortedSkills.slice(0, 5).map((skill) => {
                    const category = CATEGORIES[skill.category];
                    
                    return (
                      <motion.div 
                        key={skill.slug} 
                        variants={itemVariants}
                        className="relative group"
                      >
                        {/* Glowing Dot */}
                        <div className="absolute -left-8 sm:-left-10 top-1.5 w-4 h-4 rounded-full bg-white border-2 border-emerald-500 flex items-center justify-center transition-all duration-300 group-hover:scale-125 group-hover:bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.3)] group-hover:shadow-[0_0_12px_rgba(16,185,129,0.5)]" />
                        
                        <div className="bg-white/70 backdrop-blur-md border border-slate-200/80 rounded-3xl transition-all duration-300 hover:bg-white/95 hover:border-slate-300 hover:shadow-md p-4 shadow-[0_8px_30px_rgba(0,0,0,0.02)]">
                          <div className="mb-2.5">
                            <div className="flex items-center gap-1 font-mono font-bold text-[11px] text-slate-500 mb-1">
                              <Cpu size={11} className="text-emerald-500 shrink-0" />
                              <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent break-all">{skill.command}</span>
                            </div>
                            <span className="text-[9px] text-slate-400 flex items-center gap-1 font-mono">
                              <Calendar size={10} />
                              Verified: {skill.lastVerified}
                            </span>
                          </div>

                          <h3 className="text-xs font-black mb-1.5 text-slate-900 group-hover:text-indigo-600 transition-colors font-sans">
                            <Link href={`/skills/${skill.slug}`} className="hover:underline flex items-center gap-1 no-decoration">
                              {skill.title}
                              <ArrowRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity text-indigo-500" />
                            </Link>
                          </h3>

                          <p className="text-[11px] text-slate-500 leading-relaxed mb-3 line-clamp-1 font-sans">
                            {skill.description}
                          </p>

                          <div className="flex items-center justify-between flex-wrap gap-2 pt-2 border-t border-slate-100/60">
                            {category && (
                              <span className="text-[9px] text-slate-400 flex items-center gap-1 font-mono">
                                <span>{category.icon}</span>
                                {category.label.toUpperCase()}
                              </span>
                            )}
                            <div className="flex items-center gap-2">
                              <span className="inline-flex items-center gap-0.5 text-[8px] font-mono font-bold text-emerald-600 bg-emerald-50 border border-emerald-100 px-1 py-0.5 rounded">
                                <CheckCircle2 size={8} className="animate-pulse" />
                                PASSED
                              </span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </motion.div>

                {/* View All Skills CTA button */}
                <div className="mt-8 text-center">
                  <Link 
                    href="/skills" 
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 text-[10px] font-mono font-bold tracking-wider uppercase text-white bg-indigo-600 hover:bg-indigo-700 active:scale-98 transition-all duration-300 rounded-full shadow-md hover:shadow-indigo-500/10 cursor-pointer border-none"
                  >
                    {t("changelog.viewAll")}
                    <ArrowRight size={12} />
                  </Link>
                </div>
              </div>

            </div>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
