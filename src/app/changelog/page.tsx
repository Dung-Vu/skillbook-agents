import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { getAllSkills } from "@/lib/skills";
import { CATEGORIES } from "@/lib/categories";
import { COMPLEXITY_CONFIG } from "@/types/skill";
import { Calendar, ShieldCheck, ArrowRight, Milestone, Cpu } from "lucide-react";

export const metadata: Metadata = {
  title: "Lịch sử cập nhật (Changelog)",
  description: "Dòng thời gian phát triển hệ thống và lịch sử cập nhật, xác minh các kỹ năng AI Agent động.",
};

interface CoreMilestone {
  milestone: string;
  title: string;
  date: string;
  description: string;
  tag: string;
  badgeColor: string;
}

const CORE_MILESTONES: CoreMilestone[] = [
  {
    milestone: "M4",
    title: "Hoạt Cảnh GSAP & Fuse.js Search",
    date: "2026-05-28",
    description: "Tích hợp hoạt cảnh mượt mà bằng GSAP tại trang chủ và tối ưu hóa tính năng tìm kiếm mờ (fuzzy search) với Fuse.js trong trang catalog giúp việc tìm kiếm kỹ năng nhanh chóng, chính xác tuyệt đối.",
    tag: "Feature",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  },
  {
    milestone: "M3",
    title: "Tích Hợp 10 Kỹ Năng Y Sinh Mới",
    date: "2026-05-20",
    description: "Nạp thêm 10 kỹ năng chuyên sâu về phân tích dữ liệu y sinh học (AlphaGenome, dbSNP, ChEMBL, Clinical Trials, gnomAD, GTEx, QuickGO, Reactome, UniProt, và PyMOL) mở rộng khả năng hỗ trợ đắc lực cho các tác vụ nghiên cứu khoa học.",
    tag: "Content",
    badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  },
  {
    milestone: "M2",
    title: "Detail Page UX & TOC Scroll Spy",
    date: "2026-05-10",
    description: "Cải tiến giao diện trang chi tiết kỹ năng với mục lục động (Sticky TOC Sidebar) tự động cập nhật trạng thái khi cuộn (Scroll Spy), tích hợp bộ chuyển đổi platform và công cụ sao chép mã nguồn tiện lợi.",
    tag: "UX/UI",
    badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  },
  {
    milestone: "M1",
    title: "E2E Test Infra & CI Setup",
    date: "2026-04-25",
    description: "Thiết lập cơ sở hạ tầng kiểm thử tự động E2E bằng Playwright, đảm bảo độ ổn định cao và ngăn ngừa lỗi hồi quy (regression) cho các tính năng tương tác chính.",
    tag: "Infrastructure",
    badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  },
];

export default function ChangelogPage(): React.ReactElement {
  const skills = getAllSkills();
  
  // Sort skills by lastVerified date descending
  const sortedSkills = [...skills].sort((a, b) => {
    return new Date(b.lastVerified).getTime() - new Date(a.lastVerified).getTime();
  });

  return (
    <>
      <Header />
      <main className="min-h-screen pt-28 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <p className="section-title justify-center mb-3">Changelog</p>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
              Lịch sử phát triển & <br />
              <span className="gradient-text">Xác minh Kỹ năng</span>
            </h1>
            <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
              Theo dõi tiến trình hoàn thiện của Skillbook Agents và nhật ký cập nhật, xác minh kỹ năng tự động dành cho các AI Agents.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Core Milestones */}
            <div className="lg:col-span-6">
              <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <Milestone className="text-[var(--color-accent-primary)]" size={24} />
                Mốc Lịch Sử Lõi (Core Milestones)
              </h2>
              
              <div className="relative pl-6 border-l border-[var(--color-border)] ml-3 space-y-12">
                {CORE_MILESTONES.map((item) => (
                  <div key={item.milestone} className="relative group">
                    {/* Glowing Dot */}
                    <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-[var(--color-bg-primary)] border-2 border-[var(--color-accent-primary)] flex items-center justify-center transition-all duration-300 group-hover:scale-125 group-hover:bg-[var(--color-accent-primary)] shadow-[0_0_8px_var(--color-accent-glow)]" />
                    
                    <div className="glass-card p-6 relative overflow-hidden transition-all duration-300 hover:-translate-y-1">
                      <div className="flex items-center justify-between gap-4 mb-3 flex-wrap">
                        <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${item.badgeColor}`}>
                          {item.milestone} • {item.tag}
                        </span>
                        <span className="text-xs text-[var(--color-text-muted)] flex items-center gap-1">
                          <Calendar size={12} />
                          {item.date}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold mb-2 text-[var(--color-text-primary)]">
                        {item.title}
                      </h3>
                      <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Dynamic Skill updates */}
            <div className="lg:col-span-6">
              <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <ShieldCheck className="text-[var(--color-accent-primary)]" size={24} />
                Xác Minh Kỹ Năng Động (Dynamic Updates)
              </h2>

              <div className="relative pl-6 border-l border-[var(--color-border)] ml-3 space-y-8">
                {sortedSkills.map((skill) => {
                  const category = CATEGORIES[skill.category];
                  const complexity = COMPLEXITY_CONFIG[skill.complexity];
                  
                  return (
                    <div key={skill.slug} className="relative group">
                      {/* Glowing Dot */}
                      <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-[var(--color-bg-primary)] border-2 border-emerald-500 flex items-center justify-center transition-all duration-300 group-hover:scale-125 group-hover:bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.3)]" />
                      
                      <div className="glass-card p-6 transition-all duration-300 hover:-translate-y-1">
                        <div className="flex items-center justify-between gap-4 mb-3 flex-wrap">
                          <span className="text-xs text-[var(--color-text-muted)] flex items-center gap-1 font-mono">
                            <Cpu size={12} className="text-emerald-500" />
                            {skill.command}
                          </span>
                          <span className="text-xs text-[var(--color-text-muted)] flex items-center gap-1">
                            <Calendar size={12} />
                            Verified: {skill.lastVerified}
                          </span>
                        </div>

                        <h3 className="text-base font-bold mb-2 group-hover:text-[var(--color-accent-primary)] transition-colors">
                          <Link href={`/skills/${skill.slug}`} className="hover:underline flex items-center gap-1.5">
                            {skill.title}
                            <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                          </Link>
                        </h3>

                        <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed mb-4 line-clamp-2">
                          {skill.description}
                        </p>

                        <div className="flex items-center justify-between flex-wrap gap-2 pt-3 border-t border-[var(--color-border)]/50">
                          {category && (
                            <span className="text-xs text-[var(--color-text-muted)] flex items-center gap-1.5">
                              <span>{category.icon}</span>
                              {category.label}
                            </span>
                          )}
                          <span
                            className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
                            style={{
                              color: complexity.color,
                              background: `${complexity.color}15`,
                              border: `1px solid ${complexity.color}20`,
                            }}
                          >
                            {complexity.dot} {complexity.label}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
