"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Brain } from "lucide-react";
import { EvolutionDynamicBackground } from "./EvolutionDynamicBackground";
import { Stage0Graphic, Stage1Graphic, Stage2Graphic, Stage3Graphic } from "./StageGraphics";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface Stage {
  id: number;
  status: string;
  statusColor: string;
  label: string;
  tagline: string;
  narrative: string;
}

const STAGES: Stage[] = [
  {
    id: 0,
    status: "UNTRAINED",
    statusColor: "text-red-400 border-red-500/20 bg-red-950/20",
    label: "Khởi tạo Agent",
    tagline: "Bộ não sơ khai của AI",
    narrative: "Một AI Agent khi mới được tạo ra sở hữu năng lực xử lý ngôn ngữ khổng lồ, nhưng hoàn toàn thiếu định hướng. Không có 'skills' bổ trợ, nó giống như một cỗ máy siêu phàm nhưng không có hướng dẫn sử dụng.",
  },
  {
    id: 1,
    status: "UNSTRUCTURED",
    statusColor: "text-amber-400 border-amber-500/20 bg-amber-950/20",
    label: "Hỗn loạn & Sai sót",
    tagline: "Hậu quả khi thiếu Kỹ năng",
    narrative: "Khi nhận yêu cầu viết code tối ưu hay xử lý tác vụ phức tạp, Agent không có skill sẽ đoán mò. Nó lạm dụng kiểu 'any', bỏ qua việc xử lý lỗi, viết code thiếu an toàn và dễ gây sập hệ thống (runtime crash).",
  },
  {
    id: 2,
    status: "INJECTING PROTOCOL",
    statusColor: "text-blue-400 border-blue-500/20 bg-blue-950/20",
    label: "Nạp Giao thức Skillbook",
    tagline: "Tái cấu trúc tư duy AI",
    narrative: "Chúng ta bắt đầu nạp skill `/typescript-strict` từ Skillbook. Hệ thống lập tức thiết lập các rào chắn (guardrails) tư duy, ép Agent tuân thủ lập trình nghiêm ngặt và giải thích từng bước (Chain of Thought).",
  },
  {
    id: 3,
    status: "CERTIFIED EXPERT",
    statusColor: "text-emerald-400 border-emerald-500/20 bg-emerald-950/20",
    label: "Thức tỉnh & Vượt trội",
    tagline: "Khi AI Agent có Kỹ năng tối tân",
    narrative: "Được trang bị những skill hàng đầu, Agent biến đổi hoàn toàn. Nó viết code type-safe tuyệt đối, tự động kiểm tra lỗi trước khi compile, lập luận logic sâu sắc và đạt hiệu quả công việc vượt trội.",
  },
];

export function EvolutionSection(): React.ReactElement {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (typeof window === "undefined") return;

    const mm = gsap.matchMedia();

    // 1. Horizontal Scroll Pinning (Desktop only)
    mm.add("(min-width: 1024px)", () => {
      const track = document.querySelector(".horizontal-track") as HTMLElement;
      if (!track) return;

      // Sử dụng giá trị tuyệt đối dựa trên số lượng stage để đảm bảo an toàn 100% trước lỗi đo đạc trễ của trình duyệt
      const getScrollAmount = () => {
        return window.innerWidth * 3; // 4 stages, cần cuộn ngang 3 màn hình (300vw)
      };

      // Tiêu chuẩn vàng của GSAP: Sử dụng Timeline liên kết trực tiếp scrollTrigger
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current || "#section-evolution",
          pin: true,
          start: "top top",
          end: () => `+=${getScrollAmount()}`,
          scrub: 1.2,
          anticipatePin: 1,
          pinSpacing: true,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const el = containerRef.current;
            if (el) {
              el.style.setProperty("--evolution-progress", self.progress.toString());
            }
          },
        }
      });

      tl.to(".horizontal-track", {
        x: () => -getScrollAmount(),
        ease: "none",
      });

      return () => {
        tl.scrollTrigger?.kill();
        tl.kill();
      };
    });

    // 2. Mobile Scroll Progress tracking (without pinning)
    mm.add("(max-width: 1023px)", () => {
      const pin = ScrollTrigger.create({
        trigger: containerRef.current || "#section-evolution",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        onUpdate: (self) => {
          const el = containerRef.current;
          if (el) {
            el.style.setProperty("--evolution-progress", self.progress.toString());
          }
        },
      });

      return () => {
        pin.kill();
      };
    });

    // Refresh to sync layout sizing after a tiny delay and window load event
    const refreshAll = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener("load", refreshAll);
    const refreshTimer = setTimeout(refreshAll, 500);

    return () => {
      window.removeEventListener("load", refreshAll);
      clearTimeout(refreshTimer);
      mm.revert();
    };
  }, { scope: containerRef });

  return (
    <section 
      id="section-evolution" 
      ref={containerRef} 
      className="relative bg-[var(--color-bg-secondary)] border-y border-[var(--color-border)] w-full min-h-screen lg:h-screen lg:overflow-hidden"
    >
      <EvolutionDynamicBackground />
      
      {/* Section Header */}
      <div className="relative z-20 pt-8 pb-4 px-6 sm:px-12 lg:px-20 lg:absolute lg:top-12 lg:left-20 lg:pt-0 lg:pb-0 pointer-events-none">
        <p className="section-title mb-2 flex items-center gap-2">
          <Brain size={14} className="text-[var(--color-accent-primary)]" />
          Sự Tiến Hóa Của AI Agent
        </p>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--color-text-primary)]">
          Hành Trình Bừng Sáng Tri Thức
        </h2>
      </div>

      {/* DESKTOP VIEW: HORIZONTAL SCROLL */}
      <div className="hidden lg:block w-full h-screen relative overflow-hidden">
        <div className="horizontal-track flex w-[400vw] h-screen flex-nowrap relative">
          {STAGES.map((s, idx) => (
            <div
              key={s.id}
              className="w-screen h-screen shrink-0 flex items-center justify-center px-12 md:px-20 relative bg-transparent z-10"
            >
              <div className="max-w-5xl w-full grid grid-cols-12 gap-8 items-center">
                <div className="col-span-4 flex flex-col justify-center items-center relative select-none">
                  {idx === 0 && <Stage0Graphic />}
                  {idx === 1 && <Stage1Graphic />}
                  {idx === 2 && <Stage2Graphic />}
                  {idx === 3 && <Stage3Graphic />}
                  
                  <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-semibold tracking-wider uppercase mt-6 ${s.statusColor}`}>
                    <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                    {s.status}
                  </div>
                </div>

                <div className="col-span-8 flex flex-col justify-center items-start text-left">
                  <h3 className="text-4xl font-extrabold text-[var(--color-text-primary)] leading-tight mb-4 font-sans">
                    {s.tagline}
                  </h3>
                  <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed mb-8 max-w-2xl font-sans">
                    {s.narrative}
                  </p>
                  
                  <div className="flex items-center gap-2 text-sm text-[var(--color-accent-primary)] font-semibold font-sans">
                    <span>{s.label}</span>
                    <div className="w-12 h-px bg-[var(--color-accent-primary)]/50" />
                  </div>
                </div>
              </div>

              <div className="absolute bottom-6 right-20 text-xs font-mono text-[var(--color-text-muted)]">
                Evolution Stage &bull; 0{idx + 1} / 04
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MOBILE VIEW: VERTICAL TIMELINE FLOW */}
      <div className="block lg:hidden px-6 pb-20 pt-4 relative">
        <div className="absolute left-8 top-8 bottom-4 w-[2px] bg-gradient-to-b from-red-500 via-amber-500 via-blue-500 to-emerald-500 opacity-40" />

        <div className="flex flex-col gap-12 relative">
          {STAGES.map((s, idx) => (
            <div key={s.id} className="relative pl-10">
              <div className="absolute left-[-13px] top-4 w-6 h-6 rounded-full bg-[var(--color-bg-primary)] border-2 border-[var(--color-accent-primary)] flex items-center justify-center z-10 shadow-[0_0_10px_rgba(167,139,250,0.3)]">
                <span className="text-[10px] font-mono font-bold text-[var(--color-accent-primary)]">
                  {idx + 1}
                </span>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ type: "spring", stiffness: 100, damping: 15 }}
                className="glass-card rounded-xl p-5 border border-[var(--color-border)] bg-[var(--color-bg-secondary)]/50 hover:border-[var(--color-border-hover)] transition-all shadow-md relative overflow-hidden group"
              >
                <div className={`absolute -right-12 -top-12 w-24 h-24 rounded-full blur-2xl opacity-10 transition-opacity group-hover:opacity-25 ${
                  s.id === 0 ? "bg-red-500" :
                  s.id === 1 ? "bg-amber-500" :
                  s.id === 2 ? "bg-blue-500" :
                  "bg-emerald-500"
                }`} />

                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border text-[10px] font-mono tracking-wider uppercase ${s.statusColor}`}>
                    <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                    {s.status}
                  </div>
                  <span className="text-[10px] font-mono text-[var(--color-text-muted)]">
                    Evolution 0{idx + 1}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[var(--color-text-primary)] leading-tight mb-2 font-sans">
                  {s.tagline}
                </h3>
                
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4 font-sans">
                  {s.narrative}
                </p>

                <div className="flex items-center gap-2 text-xs text-[var(--color-accent-primary)] font-semibold mt-2 font-sans">
                  <span>{s.label}</span>
                  <div className="flex-1 h-px bg-[var(--color-accent-primary)]/20" />
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
