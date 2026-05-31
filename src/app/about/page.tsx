"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MeshGridBackground } from "@/components/ui/MeshGridBackground";
import { 
  Target, 
  Cpu, 
  Terminal, 
  Lightbulb, 
  Heart, 
  ChevronRight, 
  Activity, 
  ShieldCheck, 
  Sparkles,
  ArrowRight
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface CustomWindow extends Window {
  __canvasPaused?: boolean;
}

export default function AboutPage(): React.ReactElement {
  const [activeBlock, setActiveBlock] = useState<"llm" | "tools" | "skills">("skills");
  const [activeStep, setActiveStep] = useState<number>(0);

  const handleBlockClick = (block: "llm" | "tools" | "skills") => {
    setActiveBlock(block);
    if (typeof window !== "undefined" && window.innerWidth < 1024) {
      const element = document.getElementById("paradigm-details");
      if (element) {
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - 90;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
  };

  const handleStepClick = (index: number) => {
    setActiveStep(index);
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      const element = document.getElementById("timeline-details");
      if (element) {
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - 90;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      (window as unknown as CustomWindow).__canvasPaused = false;
      window.dispatchEvent(new CustomEvent("canvas-resume"));
    }
  }, []);

  const timelineSteps = [
    {
      title: "1. Curation & Localization",
      desc: "Chúng tôi tuyển chọn các tri thức lập trình, giải thuật tối ưu, tự động hóa quy trình và các giải pháp công nghệ tiên tiến từ các dự án mã nguồn mở hàng đầu trên thế giới. Sau đó tiến hành dịch thuật, tối ưu hóa cấu trúc chỉ dẫn và bản địa hóa thuật ngữ sang tiếng Việt chuyên ngành chính xác.",
      highlight: "Sưu tầm tinh hoa ➔ Bản địa hóa chuẩn xác",
      color: "from-violet-500 to-indigo-500"
    },
    {
      title: "2. Refinement & Format Optimization",
      desc: "Tri thức thô được tinh chỉnh và đóng gói vào cấu trúc chỉ dẫn markdown chuẩn mực (như CLAUDE.md, .cursorrules). Cấu trúc này được tối ưu hóa mật độ thông tin để AI Agent dễ dàng hấp thụ, giảm tải Context Window và triệt tiêu hành vi ảo tưởng (hallucination).",
      highlight: "Tối ưu hóa tri thức ➔ Tiết kiệm tài nguyên",
      color: "from-indigo-500 to-emerald-500"
    },
    {
      title: "3. E2E Audit & Playwright Verification",
      desc: "Mỗi chỉ dẫn phải vượt qua quy trình kiểm thử tự động nghiêm ngặt bằng Playwright E2E. Chúng tôi kiểm chứng thực tế xem AI Agent có thực hiện đúng 100% các bước hành động, bắt lỗi ngoại lệ chuẩn và đưa ra kết quả chính xác trong sandbox hay không trước khi xuất bản.",
      highlight: "Kiểm định thực tế ➔ Tin cậy tuyệt đối",
      color: "from-emerald-500 to-teal-500"
    }
  ];

  const agentBlocks = {
    llm: {
      title: "LLM Core (Động cơ trí tuệ)",
      subtitle: "ENGINE / COGNITION",
      desc: "Là mô hình ngôn ngữ lớn nền tảng (ví dụ: Claude 4.8 Opus, GPT-5.5, Gemini 3.5, DeepSeek-V4). Nó cung cấp khả năng suy luận nâng cao, lập luận đa bước phức tạp, hiểu ngữ cảnh sâu sắc và đóng vai trò như 'bộ não nguyên bản' của Agent.",
      badge: "Cognitive Engine",
      color: "text-blue-500",
      bgClass: "bg-blue-500/10 border-blue-500/20"
    },
    tools: {
      title: "Tools & MCP Connectors (Khả năng hành động)",
      subtitle: "ACTUATOR / CAPABILITY",
      desc: "Là các công cụ vật lý, API connectors, hoặc mcp servers (Model Context Protocol). Nó cung cấp cho Agent khả năng tương tác với thế giới thực: đọc/ghi file, truy vấn cơ sở dữ liệu, duyệt web, chạy lệnh terminal. Tools cho Agent 'khả năng hành động', nhưng không cho nó 'phương pháp tư duy'.",
      badge: "Physical Action",
      color: "text-emerald-500",
      bgClass: "bg-emerald-500/10 border-emerald-500/20"
    },
    skills: {
      title: "Skills & Rules (Tri thức & Phương pháp)",
      subtitle: "PARADIGM / METRIC",
      desc: "Là hệ tri thức bản địa được thiết kế chuyên sâu (ví dụ: Skillbook). Nó hướng dẫn Agent cách tiếp cận một bài toán cụ thể theo cách tốt nhất (Best Practices). Skills định hình phương pháp tư duy, thứ tự thực thi hành động và các quy tắc safe-guard để Agent hoạt động an toàn, chính xác và hiệu quả vượt trội.",
      badge: "Structured Knowledge",
      color: "text-violet-500",
      bgClass: "bg-violet-500/10 border-violet-500/20"
    }
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
        <div className="absolute top-1/4 left-[10%] w-96 h-96 rounded-full bg-violet-400/10 blur-[100px] pointer-events-none" />
        <div className="absolute bottom-1/3 right-[10%] w-[30rem] h-[30rem] rounded-full bg-emerald-400/10 blur-[120px] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-6 relative z-10">
          
          {/* Header Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 18 }}
            className="mb-16 text-center max-w-3xl mx-auto"
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase text-indigo-600 bg-indigo-50 border border-indigo-100 mb-4">
              <Sparkles size={10} className="animate-spin" style={{ animationDuration: "6s" }} />
              MISSION BRIEFING / WHITEPAPER
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 leading-tight tracking-tight text-slate-900">
              Tri thức Bản địa dành cho{" "}
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                AI Agents tự chủ
              </span>
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-sans">
              Trong kỷ nguyên AI tự vận hành, sự khác biệt giữa một tác vụ thất bại và
              một kết quả hoàn mỹ nằm ở <strong className="font-bold text-slate-900">Skills</strong> — các gói tri thức chỉ dẫn được cấu trúc hóa
              để định hình phương pháp tư duy và hành động tối ưu cho Agent.
            </p>
          </motion.div>

          {/* Interactive AI Agent Paradigm Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 18, delay: 0.1 }}
            className="bg-white/70 backdrop-blur-md border border-slate-200/80 rounded-3xl transition-all duration-300 hover:bg-white/90 hover:border-slate-300 hover:shadow-md p-4 sm:p-8 mb-16 shadow-[0_8px_30px_rgba(0,0,0,0.02)]"
          >
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2 text-slate-900 border-b border-slate-200 pb-3 font-mono">
              <Cpu size={18} className="text-indigo-500" />
              INTERACTIVE AGENT PARADIGM
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              
              {/* Left Column: Interactive Graph */}
              <div className="lg:col-span-6 flex flex-col justify-center gap-4 relative select-none">
                <p className="text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-2">
                  Hover/Click để khám phá bảng mạch tri thức:
                </p>

                {/* LLM Block */}
                <button
                  onClick={() => handleBlockClick("llm")}
                  onMouseEnter={() => setActiveBlock("llm")}
                  className={cn(
                    "w-full text-left p-4 rounded-xl border transition-all duration-300 relative overflow-hidden group cursor-pointer",
                    activeBlock === "llm"
                      ? "bg-blue-50/60 border-blue-300 shadow-[0_0_15px_rgba(59,130,246,0.15)] scale-[1.01]"
                      : "bg-white/80 border-slate-200 hover:border-blue-200 hover:bg-blue-50/20"
                  )}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-blue-600">01 / ENGINE / COGNITION</span>
                    <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-blue-100 text-blue-700 font-semibold uppercase">LLM Core</span>
                  </div>
                  <h3 className="text-sm font-bold text-slate-800 mt-2 flex items-center gap-1.5">
                    <Activity size={12} className="text-blue-500" />
                    Động cơ trí tuệ & Suy luận cơ bản
                  </h3>
                  
                  {/* Mobile-only inline details */}
                  <AnimatePresence>
                    {activeBlock === "llm" && (
                      <motion.div
                        initial={{ height: 0, opacity: 0, marginTop: 0 }}
                        animate={{ height: "auto", opacity: 1, marginTop: 12 }}
                        exit={{ height: 0, opacity: 0, marginTop: 0 }}
                        transition={{ duration: 0.2 }}
                        className="lg:hidden overflow-hidden border-t border-blue-200/40 pt-3 text-xs font-sans text-slate-600 leading-relaxed space-y-2 text-left"
                      >
                        <p>{agentBlocks.llm.desc}</p>
                        <div className="flex items-center justify-between text-[9px] font-mono text-slate-400 pt-2 border-t border-slate-100/60">
                          <span>{agentBlocks.llm.subtitle} • {agentBlocks.llm.badge}</span>
                          <span>PARADIGM 2.6</span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>

                {/* Connection line vector effect */}
                <div className="flex justify-center my-0.5 h-6 relative w-full">
                  <div className={cn(
                    "w-[2px] h-full transition-colors duration-500",
                    activeBlock === "llm" || activeBlock === "tools" ? "bg-gradient-to-b from-blue-400 to-emerald-400" : "bg-slate-200"
                  )} />
                </div>

                {/* Tools Block */}
                <button
                  onClick={() => handleBlockClick("tools")}
                  onMouseEnter={() => setActiveBlock("tools")}
                  className={cn(
                    "w-full text-left p-4 rounded-xl border transition-all duration-300 relative overflow-hidden group cursor-pointer",
                    activeBlock === "tools"
                      ? "bg-emerald-50/60 border-emerald-300 shadow-[0_0_15px_rgba(16,185,129,0.15)] scale-[1.01]"
                      : "bg-white/80 border-slate-200 hover:border-emerald-200 hover:bg-emerald-50/20"
                  )}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-emerald-600">02 / ACTUATOR / CAPABILITY</span>
                    <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-emerald-100 text-emerald-700 font-semibold uppercase">Tools & MCP</span>
                  </div>
                  <h3 className="text-sm font-bold text-slate-800 mt-2 flex items-center gap-1.5">
                    <Terminal size={12} className="text-emerald-500" />
                    Khả năng tương tác & Hành động vật lý
                  </h3>

                  {/* Mobile-only inline details */}
                  <AnimatePresence>
                    {activeBlock === "tools" && (
                      <motion.div
                        initial={{ height: 0, opacity: 0, marginTop: 0 }}
                        animate={{ height: "auto", opacity: 1, marginTop: 12 }}
                        exit={{ height: 0, opacity: 0, marginTop: 0 }}
                        transition={{ duration: 0.2 }}
                        className="lg:hidden overflow-hidden border-t border-emerald-200/40 pt-3 text-xs font-sans text-slate-600 leading-relaxed space-y-2 text-left"
                      >
                        <p>{agentBlocks.tools.desc}</p>
                        <div className="flex items-center justify-between text-[9px] font-mono text-slate-400 pt-2 border-t border-slate-100/60">
                          <span>{agentBlocks.tools.subtitle} • {agentBlocks.tools.badge}</span>
                          <span>PARADIGM 2.6</span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>

                {/* Connection line vector effect */}
                <div className="flex justify-center my-0.5 h-6 relative w-full">
                  <div className={cn(
                    "w-[2px] h-full transition-colors duration-500",
                    activeBlock === "tools" || activeBlock === "skills" ? "bg-gradient-to-b from-emerald-400 to-violet-400" : "bg-slate-200"
                  )} />
                </div>

                {/* Skills Block (Highlighted Focus) */}
                <button
                  onClick={() => handleBlockClick("skills")}
                  onMouseEnter={() => setActiveBlock("skills")}
                  className={cn(
                    "w-full text-left p-4 rounded-xl border transition-all duration-300 relative overflow-hidden group cursor-pointer",
                    activeBlock === "skills"
                      ? "bg-violet-50/80 border-violet-300 shadow-[0_0_20px_rgba(139,92,246,0.2)] scale-[1.02]"
                      : "bg-white/80 border-slate-200 hover:border-violet-200 hover:bg-violet-50/20"
                  )}
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-violet-400/5 blur-md rounded-full pointer-events-none" />
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-violet-600">03 / PARADIGM / METRIC (SKILLBOOK)</span>
                    <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-violet-100 text-violet-700 font-semibold uppercase">Tri thức & Quyết sách</span>
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 mt-2 flex items-center gap-1.5">
                    <Lightbulb size={12} className="text-violet-500 animate-pulse" />
                    Định hình tư duy & Quy tắc Safe-guard
                  </h3>

                  {/* Mobile-only inline details */}
                  <AnimatePresence>
                    {activeBlock === "skills" && (
                      <motion.div
                        initial={{ height: 0, opacity: 0, marginTop: 0 }}
                        animate={{ height: "auto", opacity: 1, marginTop: 12 }}
                        exit={{ height: 0, opacity: 0, marginTop: 0 }}
                        transition={{ duration: 0.2 }}
                        className="lg:hidden overflow-hidden border-t border-violet-200/40 pt-3 text-xs font-sans text-slate-600 leading-relaxed space-y-2 text-left"
                      >
                        <p>{agentBlocks.skills.desc}</p>
                        <div className="flex items-center justify-between text-[9px] font-mono text-slate-400 pt-2 border-t border-slate-100/60">
                          <span>{agentBlocks.skills.subtitle} • {agentBlocks.skills.badge}</span>
                          <span>PARADIGM 2.6</span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </div>

              {/* Right Column: Display description box */}
              <div id="paradigm-details" className="hidden lg:flex lg:col-span-6 flex-col justify-between min-h-[260px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeBlock}
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -15 }}
                    transition={{ duration: 0.2 }}
                    className={cn("p-4 sm:p-6 rounded-2xl border h-full flex flex-col justify-between", agentBlocks[activeBlock].bgClass)}
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <span className={cn("text-[10px] font-mono font-bold uppercase tracking-wider", agentBlocks[activeBlock].color)}>
                          {agentBlocks[activeBlock].subtitle}
                        </span>
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                        <span className="text-[10px] font-mono text-slate-500 font-semibold">
                          {agentBlocks[activeBlock].badge}
                        </span>
                      </div>
                      <h3 className="text-lg font-black text-slate-900 mb-4">
                        {agentBlocks[activeBlock].title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed font-sans">
                        {agentBlocks[activeBlock].desc}
                      </p>
                    </div>

                    <div className="mt-8 pt-4 border-t border-slate-200/40 flex items-center justify-between font-mono text-[10px] text-slate-400">
                      <span>VERIFIED ARCHITECTURE</span>
                      <span>PARADIGM 2.6</span>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

            </div>
          </motion.div>

          {/* Interactive Snappy Spring Workflow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 18, delay: 0.2 }}
            className="bg-white/70 backdrop-blur-md border border-slate-200/80 rounded-3xl transition-all duration-300 hover:bg-white/90 hover:border-slate-300 hover:shadow-md p-4 sm:p-8 mb-16 shadow-[0_8px_30px_rgba(0,0,0,0.02)]"
          >
            <h2 className="text-xl font-bold mb-8 flex items-center gap-2 text-slate-900 border-b border-slate-200 pb-3 font-mono">
              <ShieldCheck size={18} className="text-emerald-500 animate-pulse" />
              CURATION & AUDITING LIFECYCLE
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {timelineSteps.map((step, index) => {
                const isActive = activeStep === index;
                return (
                  <button
                    key={step.title}
                    onClick={() => handleStepClick(index)}
                    className={cn(
                      "text-left p-4 rounded-xl border transition-all duration-300 cursor-pointer relative overflow-hidden",
                      isActive
                        ? "bg-white border-slate-300 shadow-md scale-[1.01] z-10"
                        : "bg-slate-50/50 border-slate-200/60 hover:bg-white hover:border-slate-300"
                    )}
                  >
                    {isActive && (
                      <motion.div 
                        layoutId="activeTimelineBar"
                        className={cn("absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b", step.color)}
                      />
                    )}
                    <h3 className={cn("text-xs font-mono font-bold tracking-wide", isActive ? "text-slate-900" : "text-slate-400")}>
                      {step.title}
                    </h3>
                    <p className={cn("text-[10px] font-sans mt-1", isActive ? "text-indigo-600 font-semibold" : "text-slate-400")}>
                      {step.highlight}
                    </p>

                    {/* Mobile-only inline details */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0, marginTop: 0 }}
                          animate={{ height: "auto", opacity: 1, marginTop: 12 }}
                          exit={{ height: 0, opacity: 0, marginTop: 0 }}
                          transition={{ duration: 0.2 }}
                          className="md:hidden overflow-hidden border-t border-slate-200/60 pt-3 text-xs font-sans text-slate-600 leading-relaxed space-y-2 text-left"
                        >
                          <p>{step.desc}</p>
                          <div className="flex items-center gap-1.5 text-[9px] font-mono text-slate-400 pt-2 border-t border-slate-100/60">
                            <ChevronRight size={10} />
                            <span>Quy trình kiểm định 100% Passed</span>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>
                );
              })}
            </div>

            {/* Display active step details */}
            <div id="timeline-details" className="hidden md:flex bg-slate-50/50 border border-slate-200/60 rounded-xl p-4 sm:p-6 relative overflow-hidden min-h-[16rem] md:min-h-[12rem] flex-col justify-between">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="text-[9px] font-mono bg-indigo-50 border border-indigo-100 text-indigo-600 font-bold px-2 py-0.5 rounded uppercase">
                    Chi tiết quy trình kiểm định
                  </span>
                  <p className="text-sm text-slate-700 leading-relaxed font-sans mt-4">
                    {timelineSteps[activeStep].desc}
                  </p>
                </motion.div>
              </AnimatePresence>

              <div className="flex items-center gap-1.5 text-[9px] font-mono text-slate-400 mt-6 pt-4 border-t border-slate-200/60">
                <ChevronRight size={10} />
                <span>Quy trình tự động hóa kiểm soát liêm chính mã nguồn 100% Passed</span>
              </div>
            </div>
          </motion.div>

          {/* Philosophy Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100, damping: 18 }}
              className="bg-white/70 backdrop-blur-md border border-slate-200/80 rounded-3xl transition-all duration-300 hover:bg-white/90 hover:border-slate-300 hover:shadow-md p-4 sm:p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center shrink-0">
                  <Target size={18} className="text-indigo-600" />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-tight">Curate, Not Create (Sưu tầm & Tinh tuyển)</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Chúng tôi không phát minh ra tri thức thô. Skillbook tập trung vào việc tìm kiếm, tuyển chọn kỹ càng các instruction sets hoạt động tốt nhất từ cộng đồng phát triển AI Agents toàn cầu, sau đó cấu trúc lại và bản địa hóa tối đa.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100, damping: 18 }}
              className="bg-white/70 backdrop-blur-md border border-slate-200/80 rounded-3xl transition-all duration-300 hover:bg-white/90 hover:border-slate-300 hover:shadow-md p-4 sm:p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0">
                  <Heart size={18} className="text-emerald-600" />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-tight">Quality Over Quantity (Chất lượng thượng tầng)</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Không chạy theo số lượng. Mỗi câu lệnh hay bộ chỉ dẫn (ruleset) được đưa vào thư viện phải đáp ứng đầy đủ các tiêu chuẩn về an toàn ngữ cảnh, tối giản token và phải vượt qua 100% các kịch bản kiểm thử E2E tự động.
              </p>
            </motion.div>
          </div>

          {/* Call To Action Panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 18 }}
            className="relative rounded-3xl border border-slate-200/80 bg-gradient-to-br from-indigo-50 via-white to-emerald-50 p-4 sm:p-8 md:p-12 text-center overflow-hidden shadow-[0_15px_50px_rgba(0,0,0,0.02)]"
          >
            <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />
            <h3 className="text-2xl font-black text-slate-900 mb-3">Sẵn sàng trải nghiệm AI đỉnh cao?</h3>
            <p className="text-sm text-slate-600 mb-8 max-w-xl mx-auto font-sans leading-relaxed">
              Bắt đầu tra cứu kho tàng bách khoa toàn thư kỹ năng đã được kiểm định nghiêm ngặt để nâng cấp toàn diện năng lực cho AI Agent của bạn ngay hôm nay.
            </p>
            <Link 
              href="/skills" 
              className="inline-flex items-center gap-2 px-6 py-3 text-xs font-mono font-bold tracking-wider uppercase text-white bg-indigo-600 hover:bg-indigo-700 active:scale-98 transition-all duration-300 rounded-full shadow-lg hover:shadow-indigo-500/20 cursor-pointer border-none"
            >
              Tra cứu bách khoa toàn thư
              <ArrowRight size={14} />
            </Link>
          </motion.div>

        </div>
      </main>
      <Footer />
    </>
  );
}
