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
import { COMPLEXITY_CONFIG } from "@/types/skill";

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

const CORE_MILESTONES: CoreMilestone[] = [
  {
    milestone: "M7",
    title: "Nâng Cấp Premium Visual & Tối Ưu Hóa Trực Quan",
    date: "2026-05-31",
    description: (
      <>
        Viết lại toàn bộ trang Giới thiệu <Link href="/about" className="font-semibold text-indigo-600 hover:underline">/about</Link> thành bảng mạch tri thức tương tác 3D Glassmorphism và quy trình timeline trượt spring dẻo dai. Hiện đại hóa các dẫn chứng mô hình ngôn ngữ lớn sang thế hệ siêu việt (Claude 4.8 Opus, GPT-5.5, Gemini 3.5, DeepSeek-V4). Khắc phục triệt để lỗi hiển thị định dạng in đậm của từ khóa Skills trên giao diện. Tối ưu hóa hiệu năng canvas nền lượng tử (MeshGridBackground) đạt 60 FPS buttery-smooth.
      </>
    ),
    tag: "Premium Visual",
    badgeClass: "bg-rose-50 border-rose-100 text-rose-600",
  },
  {
    milestone: "M6",
    title: "Trải Nghiệm Chuyển Cảnh & Encyclopedia Docs",
    date: "2026-05-31",
    description: (
      <>
        Tái cấu trúc <Link href="/skills" className="font-semibold text-indigo-600 hover:underline">/skills</Link> thành Bách khoa toàn thư phẳng Docs 2 cột chuyên nghiệp, loại bỏ phân nhóm category và view mode rườm rà. Tích hợp hiệu ứng chuyển cảnh trang (Page Transitions) dạng chất lỏng &ldquo;Gliding Zoom &amp; Spring Reveal&rdquo; mượt mà thông qua Next.js template. Tối ưu hóa trang chi tiết kỹ năng, loại bỏ Platform Tab Switcher trùng lặp và nút chia sẻ dư thừa, tích hợp bong bóng mục lục TOC trượt đàn hồi.
      </>
    ),
    tag: "UX / Transitions",
    badgeClass: "bg-indigo-50 border-indigo-100 text-indigo-600",
  },
  {
    milestone: "M5",
    title: "Nền Neural Mesh Động Tương Tác & Search Hub",
    date: "2026-05-30",
    description: (
      <>
        Nâng cấp MeshGridBackground sang nền mạng lưới hạt động tương tác Neural Mesh phản hồi theo con trỏ chuột thời gian thực. Thiết kế lại ô tìm kiếm kính mờ Glassmorphism phát sáng gradient kép, tích hợp Monospace Tech Badge hiển thị số lượng kết quả thời gian thực. Tích hợp nút sao chép nhanh câu lệnh (Quick Copy) hiển thị mượt mà khi hover dòng phẳng của danh mục.
      </>
    ),
    tag: "Interactive Canvas",
    badgeClass: "bg-violet-50 border-violet-100 text-violet-600",
  },
  {
    milestone: "M4",
    title: "Hoạt Cảnh GSAP & Tối Ưu Hóa IDE Sandbox",
    date: "2026-05-30",
    description: (
      <>
        Tích hợp hoạt cảnh mượt mà bằng GSAP tại trang chủ và tối ưu hóa tính năng tìm kiếm mờ (fuzzy search) với Fuse.js trong trang catalog giúp việc tìm kiếm kỹ năng nhanh chóng, chính xác tuyệt đối. Tách biệt component SandboxIDE, giải phóng tài nguyên re-render của React 19 giúp triệt tiêu lag khựng.
      </>
    ),
    tag: "Performance",
    badgeClass: "bg-emerald-50 border-emerald-100 text-emerald-600",
  },
  {
    milestone: "M3",
    title: "Tích Hợp 10 Kỹ Năng Y Sinh Mới",
    date: "2026-05-29",
    description: (
      <>
        Nạp thêm 10 kỹ năng chuyên sâu về phân tích dữ liệu y sinh học (AlphaGenome, dbSNP, ChEMBL, Clinical Trials, gnomAD, GTEx, QuickGO, Reactome, UniProt, và PyMOL) mở rộng khả năng hỗ trợ đắc lực cho các tác vụ nghiên cứu khoa học.
      </>
    ),
    tag: "Content Integration",
    badgeClass: "bg-blue-50 border-blue-100 text-blue-600",
  },
  {
    milestone: "M2",
    title: "Detail Page UX & TOC Scroll Spy",
    date: "2026-05-29",
    description: (
      <>
        Cải tiến giao diện trang chi tiết kỹ năng với mục lục động (Sticky TOC Sidebar) tự động cập nhật trạng thái khi cuộn (Scroll Spy), tích hợp bộ chuyển đổi platform và công cụ sao chép mã nguồn tiện lợi.
      </>
    ),
    tag: "UX / Navigation",
    badgeClass: "bg-cyan-50 border-cyan-100 text-cyan-600",
  },
  {
    milestone: "M1",
    title: "E2E Test Infra & CI Setup",
    date: "2026-05-29",
    description: (
      <>
        Thiết lập cơ sở hạ tầng kiểm thử tự động E2E bằng Playwright, đảm bảo độ ổn định cao và ngăn ngừa lỗi hồi quy (regression) cho các tính năng tương tác chính.
      </>
    ),
    tag: "Infrastructure",
    badgeClass: "bg-amber-50 border-amber-100 text-amber-600",
  },
];

interface CustomWindow extends Window {
  __canvasPaused?: boolean;
}

export function ChangelogClient({ skills }: ChangelogClientProps): React.ReactElement {
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
              DEVELOPMENT JOURNAL / CHANGELOG
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 leading-tight tracking-tight text-slate-900">
              Lịch sử phát triển & <br />
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Xác minh Kỹ năng
              </span>
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-sans">
              Theo dõi nhật ký cập nhật toàn diện và quy trình xác minh kỹ năng tự động đảm bảo tính liêm chính 100% Passed dành cho AI Agents.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start">
            
            {/* Left Column: Core Milestones */}
            <div className="lg:col-span-7">
              <h2 className="text-xl font-bold mb-8 flex items-center gap-2 text-slate-900 border-b border-slate-200 pb-3 font-mono">
                <Milestone className="text-indigo-500" size={18} />
                MỐC LỊCH SỬ LÕI (CORE MILESTONES)
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
                  RECENTLY VERIFIED (TOP 5)
                </h2>

                <motion.div 
                  variants={containerVariants}
                  initial="hidden"
                  animate="show"
                  className="relative pl-6 sm:pl-8 border-l border-slate-200 ml-2 sm:ml-4 space-y-6"
                >
                  {sortedSkills.slice(0, 5).map((skill) => {
                    const category = CATEGORIES[skill.category];
                    const complexity = COMPLEXITY_CONFIG[skill.complexity];
                    
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
                              <span
                                className="text-[8px] font-mono font-bold px-1.5 py-0.5 rounded"
                                style={{
                                  color: complexity.color,
                                  background: `${complexity.color}15`,
                                  border: `1px solid ${complexity.color}20`,
                                }}
                              >
                                {complexity.dot} {complexity.label.toUpperCase()}
                              </span>
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
                    Xem tất cả kỹ năng
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
