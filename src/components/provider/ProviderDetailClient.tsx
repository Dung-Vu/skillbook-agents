"use client";

import React, { useMemo } from "react";
import { Skill, PlatformId } from "@/types/skill";
import { CATEGORIES } from "@/lib/categories";
import { PLATFORM_CONFIG } from "@/types/skill";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";
import { Cpu, Terminal, Shield, Sparkles, BookOpen, Layers, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

interface ProviderDetailClientProps {
  providerId: string;
  skills: Skill[];
}

export function ProviderDetailClient({ providerId, skills }: ProviderDetailClientProps): React.ReactElement {
  const { language } = useLanguage();
  const isAntigravity = providerId === "antigravity";

  const totalSkills = skills.length;
  const featuredSkills = useMemo(() => skills.filter(s => s.featured), [skills]);

  const categoryStats = useMemo(() => {
    const stats: Record<string, number> = {};
    skills.forEach(s => {
      stats[s.category] = (stats[s.category] || 0) + 1;
    });
    return Object.entries(stats)
      .map(([catId, count]) => {
        const cat = CATEGORIES[catId as keyof typeof CATEGORIES];
        return {
          id: catId,
          label: cat?.label || catId,
          icon: cat?.icon || "📁",
          color: cat?.color || "#6366f1",
          count,
        };
      })
      .sort((a, b) => b.count - a.count);
  }, [skills]);

  const providerInfo = {
    title: isAntigravity ? "Antigravity OS" : "Minimax Technology",
    slogan: isAntigravity 
      ? (language === "en" 
          ? "Advanced Agentic Coding & Structural Biology" 
          : "Nền tảng kỹ năng chuyên sâu cho kỹ nghệ phần mềm và tin sinh học cấu trúc")
      : (language === "en" 
          ? "Document Intelligence & Office Automation" 
          : "Xây dựng các agent tự động xử lý văn bản và tri thức doanh nghiệp"),
    description: isAntigravity
      ? (language === "en"
          ? "Antigravity powers developer-focused agent tools with advanced reasoning and analysis. Providing out-of-the-box templates for protein structures, software engineering, and multi-agent coordination."
          : "Antigravity cung cấp các gói kỹ năng chuyên sâu định hướng nhà phát triển với khả năng suy luận và phân tích nâng cao. Hỗ trợ sẵn sàng các mẫu cấu trúc protein, kỹ nghệ phần mềm, và điều phối đa tác vụ.")
      : (language === "en"
          ? "Minimax optimizes workflows around business files and productivity tools. Enabling agentic parsing for Docx, PDF, Lark webhook integrations, and financial market research."
          : "Minimax tối ưu hóa các luồng công việc liên quan đến tài liệu văn phòng và công cụ làm việc. Cho phép agent tự động phân tích Docx, PDF, tích hợp Lark webhooks, và nghiên cứu thị trường tài chính."),
    color: isAntigravity ? "from-indigo-600 via-purple-600 to-pink-600" : "from-rose-500 via-pink-500 to-purple-600",
    glowColor: isAntigravity ? "rgba(99, 102, 241, 0.15)" : "rgba(244, 63, 94, 0.15)",
    textColor: isAntigravity ? "text-indigo-600" : "text-rose-500",
  };

  const changelog = isAntigravity 
    ? [
        { date: "2026-05-30", version: "v2.1.0", desc: language === "en" ? "Added AlphaFold structure analysis & dbSNP variant mapping tools." : "Thêm bộ công cụ phân tích cấu trúc AlphaFold & ánh xạ biến thể dbSNP." },
        { date: "2026-05-15", version: "v2.0.0", desc: language === "en" ? "Released Multi-Agent Project Coordination framework." : "Phát hành framework Điều phối dự án đa Agent." },
        { date: "2026-04-10", version: "v1.5.0", desc: language === "en" ? "Improved terminal theme integration in Sandbox IDE." : "Cải tiến tích hợp theme terminal trong Sandbox IDE." },
      ]
    : [
        { date: "2026-06-02", version: "v1.8.0", desc: language === "en" ? "Released Minimax Docx & PDF builtin handlers." : "Phát hành các bộ xử lý builtin cho Minimax Docx & PDF." },
        { date: "2026-05-20", version: "v1.6.0", desc: language === "en" ? "Added Lark / Feishu webhook connector templates." : "Thêm mẫu kết nối webhook Lark / Thư điện tử Feishu." },
        { date: "2026-04-25", version: "v1.2.0", desc: language === "en" ? "First release of business automation custom skills." : "Phát hành bản đầu tiên các kỹ năng tùy biến tự động hóa doanh nghiệp." },
      ];

  return (
    <div className="min-h-screen pt-24 bg-[#f4f6fc] text-slate-800 pb-16 flex flex-col font-sans relative overflow-clip">
      {/* Background Glow */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full blur-[120px] pointer-events-none -z-10 transition-all duration-1000"
        style={{ background: providerInfo.glowColor }}
      />

      <div className="max-w-6xl mx-auto px-6 w-full flex flex-col gap-8 z-10">
        
        {/* Banner Card */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/80 border border-slate-200/80 rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl backdrop-blur-md relative overflow-hidden"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative z-10">
            <div className="space-y-3">
              <span className={cn(
                "text-[10px] font-mono tracking-[0.2em] font-bold px-3 py-1 rounded-full bg-gradient-to-r text-white uppercase shadow-sm",
                providerInfo.color
              )}>
                {providerId} Provider
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-800">
                {providerInfo.title}
              </h1>
              <p className="text-sm font-mono font-medium text-slate-600">
                {providerInfo.slogan}
              </p>
              <p className="text-xs sm:text-sm text-slate-500 max-w-2xl leading-relaxed">
                {providerInfo.description}
              </p>
            </div>

            <div className="flex flex-col items-center md:items-end justify-center bg-slate-50 border border-slate-200/60 p-5 rounded-2xl shrink-0 w-full md:w-auto shadow-inner">
              <span className="text-4xl font-bold font-mono text-slate-800">
                {totalSkills}
              </span>
              <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider mt-1">
                {language === "en" ? "Total Skills" : "Tổng Số Kỹ Năng"}
              </span>
              <Link
                href={`/skills?provider=${providerId}`}
                className={cn(
                  "mt-4 text-xs font-mono font-bold px-4 py-2.5 rounded-xl text-white shadow-md flex items-center gap-2 hover:scale-[1.03] transition-all bg-gradient-to-r",
                  providerInfo.color
                )}
              >
                {language === "en" ? "Explore Catalog" : "Khám Phá Catalog"}
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Breakdown & Changelog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Categories Analysis */}
          <motion.div 
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm flex flex-col"
          >
            <h2 className="text-sm font-mono tracking-wider font-bold text-slate-400 uppercase flex items-center gap-2 mb-6 border-b border-slate-100 pb-3">
              <Layers size={16} className={providerInfo.textColor} />
              {language === "en" ? "CATEGORIES BREAKDOWN" : "PHÂN PHỐI LĨNH VỰC"}
            </h2>

            <div className="flex-1 space-y-4">
              {categoryStats.map((stat) => {
                const percentage = Math.round((stat.count / totalSkills) * 100);
                return (
                  <div key={stat.id} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="font-semibold text-slate-700 flex items-center gap-1.5">
                        <span className="text-sm">{stat.icon}</span>
                        {stat.label}
                      </span>
                      <span className="text-slate-400">
                        {stat.count} {language === "en" ? "skills" : "kỹ năng"} ({percentage}%)
                      </span>
                    </div>
                    <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                      <div 
                        className="h-full rounded-full transition-all duration-1000"
                        style={{ 
                          width: `${percentage}%`,
                          backgroundColor: stat.color 
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Changelog milestones */}
          <motion.div 
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm flex flex-col"
          >
            <h2 className="text-sm font-mono tracking-wider font-bold text-slate-400 uppercase flex items-center gap-2 mb-6 border-b border-slate-100 pb-3">
              <Cpu size={16} className={providerInfo.textColor} />
              {language === "en" ? "UPDATES & MILESTONES" : "LỊCH SỬ CẬP NHẬT"}
            </h2>

            <div className="flex-1 space-y-6 relative pl-4 before:absolute before:left-1.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-100">
              {changelog.map((milestone, idx) => (
                <div key={idx} className="relative space-y-1">
                  <div className="absolute -left-[19px] top-1.5 h-2 w-2 rounded-full border-2 border-white bg-indigo-500 shadow-sm" />
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <span className="text-xs font-mono font-bold text-slate-800">
                      {milestone.version}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400">
                      {milestone.date}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed font-mono">
                    {milestone.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

        {/* Featured Skills Segment */}
        {featuredSkills.length > 0 && (
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h2 className="text-sm font-mono tracking-wider font-bold text-slate-400 uppercase flex items-center gap-2 border-b border-slate-200 pb-3">
              <Sparkles size={16} className={providerInfo.textColor} />
              {language === "en" ? "FEATURED INSTRUCTION PACKAGES" : "CÁC BỘ CHỈ DẪN NỔI BẬT"}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {featuredSkills.map((skill) => (
                <Link 
                  href={`/skills/${skill.slug}`}
                  key={skill.slug}
                  className="bg-white border border-slate-200/80 hover:border-slate-300 p-5 rounded-2xl hover:shadow-md hover:-translate-y-0.5 transition-all group cursor-pointer flex flex-col gap-2 relative overflow-hidden"
                >
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-[9px] font-mono font-bold text-indigo-600 bg-indigo-50 border border-indigo-100/50 px-1.5 py-0.5 rounded">
                      {skill.command || skill.slug}
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-slate-800 group-hover:text-indigo-600 transition-colors">
                    {skill.title}
                  </h3>
                  <p className="text-[11px] text-slate-500 line-clamp-2 leading-relaxed flex-1 font-mono">
                    {skill.oneLiner || skill.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {skill.platforms.slice(0, 3).map((p) => {
                      const cfg = PLATFORM_CONFIG[p as PlatformId] || { label: p, color: "#8b5cf6" };
                      return (
                        <span 
                          key={p} 
                          className="text-[8px] font-mono px-1 py-0.2 rounded border bg-slate-50 text-slate-400"
                        >
                          {cfg.label}
                        </span>
                      );
                    })}
                    {skill.platforms.length > 3 && (
                      <span className="text-[8px] font-mono text-slate-400 flex items-center px-1">
                        +{skill.platforms.length - 3}
                      </span>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}

      </div>
    </div>
  );
}
