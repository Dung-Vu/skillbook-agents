import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BookOpen, Target, Heart, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description: "Về Skillbook Agents — Bách khoa toàn thư về skills cho AI agents.",
};

export default function AboutPage(): React.ReactElement {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-28 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="mb-16">
            <p className="section-title mb-3">About</p>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
              Tại sao{" "}
              <span className="gradient-text">Skillbook Agents</span>{" "}
              tồn tại?
            </h1>
            <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
              Trong thế giới AI agents, sự khác biệt giữa một agent tầm thường và
              một agent xuất sắc nằm ở <strong>skills</strong> — những instruction
              sets được thiết kế kỹ càng để hướng dẫn agent cách approach vấn đề.
            </p>
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
            {[
              {
                icon: Target,
                title: "Curate, Not Create",
                desc: "Chúng tôi không phát minh skill mới — mà tìm kiếm, tuyển chọn, và tinh chỉnh từ những nguồn chất lượng nhất trên thế giới.",
              },
              {
                icon: BookOpen,
                title: "Explain, Not Just List",
                desc: "Mỗi skill được giải thích tận gốc: WHY nó hoạt động, WHEN nào dùng, và HOW để áp dụng.",
              },
              {
                icon: Users,
                title: "Community-Driven",
                desc: "Mã nguồn mở. Mọi đóng góp, từ skill mới đến cải thiện content, đều được chào đón.",
              },
              {
                icon: Heart,
                title: "Quality Over Quantity",
                desc: "Mỗi skill phải pass 4/5 tiêu chí đánh giá trước khi được thêm vào bộ sưu tập.",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="glass-card p-6">
                  <div className="w-10 h-10 rounded-lg bg-[var(--color-accent-glow)] flex items-center justify-center mb-4">
                    <Icon size={20} className="text-[var(--color-accent-primary)]" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* How Skills Work */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">
              Skills là gì trong context AI Agents?
            </h2>
            <div className="skill-content">
              <p>
                Trong hệ sinh thái AI agents 2026, <strong>Skills</strong> là những
                instruction packages — thường dưới dạng markdown files (
                <code>.cursorrules</code>, <code>SKILL.md</code>,{" "}
                <code>CLAUDE.md</code>) — được inject vào context của agent để
                hướng dẫn nó cách tiếp cận một loại task cụ thể.
              </p>
              <p>
                Skills khác với <strong>Tools</strong> (MCP servers, API connectors)
                — tools cho agent <em>khả năng</em> thực hiện action, còn skills
                cho agent <em>kiến thức</em> để biết approach nào tốt nhất.
              </p>
              <p>
                Skillbook Agents tổ chức skills thành{" "}
                <strong>10 categories</strong>, từ Reasoning & Planning đến
                Workflow Orchestration, giúp bạn tìm đúng skill cho đúng bài toán.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="glass-card p-8 text-center glow-accent">
            <h3 className="text-xl font-bold mb-3">Sẵn sàng khám phá?</h3>
            <p className="text-sm text-[var(--color-text-secondary)] mb-6">
              Bắt đầu browse bộ sưu tập skills và nâng cấp AI agent của bạn.
            </p>
            <Link href="/skills" className="btn-primary">
              Explore Skills →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
