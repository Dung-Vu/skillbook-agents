"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
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


export function AboutClient(): React.ReactElement {
  const [activeBlock, setActiveBlock] = useState<"llm" | "tools" | "skills">("skills");
  const [activeStep, setActiveStep] = useState<number>(0);
  const { t, language } = useLanguage();

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
      setTimeout(() => {
        if (!window.__paperCrumpleOverlayRegistered) {
          window.__canvasPaused = false;
          window.dispatchEvent(new CustomEvent("canvas-resume"));
        }
      }, 0);
    }
  }, []);

  const timelineSteps = [
    {
      title: t("about.curationStep1Title"),
      desc: t("about.curationStep1Desc"),
      highlight: t("about.curationStep1Highlight"),
      color: "from-violet-500 to-indigo-500"
    },
    {
      title: t("about.curationStep2Title"),
      desc: t("about.curationStep2Desc"),
      highlight: t("about.curationStep2Highlight"),
      color: "from-indigo-500 to-emerald-500"
    },
    {
      title: t("about.curationStep3Title"),
      desc: t("about.curationStep3Desc"),
      highlight: t("about.curationStep3Highlight"),
      color: "from-emerald-500 to-teal-500"
    }
  ];

  const agentBlocks = {
    llm: {
      title: t("about.llmTitle"),
      subtitle: t("about.llmSub"),
      desc: t("about.llmDesc"),
      badge: t("about.llmBadge"),
      color: "text-blue-500",
      bgClass: "bg-blue-500/10 border-blue-500/20"
    },
    tools: {
      title: t("about.toolsTitle"),
      subtitle: t("about.toolsSub"),
      desc: t("about.toolsDesc"),
      badge: t("about.toolsBadge"),
      color: "text-emerald-500",
      bgClass: "bg-emerald-500/10 border-emerald-500/20"
    },
    skills: {
      title: t("about.skillsTitle"),
      subtitle: t("about.skillsSub"),
      desc: t("about.skillsDesc"),
      badge: t("about.skillsBadge"),
      color: "text-violet-500",
      bgClass: "bg-violet-500/10 border-violet-500/20"
    }
  };

  return (
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
            {t("about.briefing")}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 leading-tight tracking-tight text-slate-900">
            {language === "vi" ? (
              <>
                Tri thức Bản địa dành cho{" "}
                <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  AI Agents tự chủ
                </span>
              </>
            ) : (
              <>
                Local Knowledge for{" "}
                <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Autonomous AI Agents
                </span>
              </>
            )}
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-sans">
            {t("about.desc")}
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
            {t("about.paradigmTitle")}
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left Column: Interactive Graph */}
            <div className="lg:col-span-6 flex flex-col justify-center gap-4 relative select-none">
              <p className="text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-2">
                {t("about.paradigmPrompt")}
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
                  <span className="text-xs font-mono font-bold text-blue-600">{agentBlocks.llm.subtitle}</span>
                  <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-blue-100 text-blue-700 font-semibold uppercase">{agentBlocks.llm.badge}</span>
                </div>
                <h3 className="text-sm font-bold text-slate-800 mt-2 flex items-center gap-1.5">
                  <Activity size={12} className="text-blue-500" />
                  {agentBlocks.llm.title}
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
                  <span className="text-xs font-mono font-bold text-emerald-600">{agentBlocks.tools.subtitle}</span>
                  <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-emerald-100 text-emerald-700 font-semibold uppercase">{agentBlocks.tools.badge}</span>
                </div>
                <h3 className="text-sm font-bold text-slate-800 mt-2 flex items-center gap-1.5">
                  <Terminal size={12} className="text-emerald-500" />
                  {agentBlocks.tools.title}
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
                  <span className="text-xs font-mono font-bold text-violet-600">{agentBlocks.skills.subtitle}</span>
                  <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-violet-100 text-violet-700 font-semibold uppercase">{agentBlocks.skills.badge}</span>
                </div>
                <h3 className="text-sm font-bold text-slate-900 mt-2 flex items-center gap-1.5">
                  <Lightbulb size={12} className="text-violet-500 animate-pulse" />
                  {agentBlocks.skills.title}
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
            {t("about.curationTitle")}
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
                          <span>{t("about.curationFooter")}</span>
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
                  {t("about.curationSub")}
                </span>
                <p className="text-sm text-slate-700 leading-relaxed font-sans mt-4">
                  {timelineSteps[activeStep].desc}
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="flex items-center gap-1.5 text-[9px] font-mono text-slate-400 mt-6 pt-4 border-t border-slate-200/60">
              <ChevronRight size={10} />
              <span>{t("about.curationFooter")}</span>
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
              <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-tight">{t("about.curateNotCreateTitle")}</h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {t("about.curateNotCreateDesc")}
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
              <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-tight">{t("about.qualityTitle")}</h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {t("about.qualityDesc")}
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
          <h3 className="text-2xl font-black text-slate-900 mb-3">{t("about.ctaTitle")}</h3>
          <p className="text-sm text-slate-600 mb-8 max-w-xl mx-auto font-sans leading-relaxed">
            {t("about.ctaDesc")}
          </p>
          <Link 
            href="/skills" 
            className="inline-flex items-center gap-2 px-6 py-3 text-xs font-mono font-bold tracking-wider uppercase text-white bg-indigo-600 hover:bg-indigo-700 active:scale-98 transition-all duration-300 rounded-full shadow-lg hover:shadow-indigo-500/20 cursor-pointer border-none"
          >
            {t("about.ctaButton")}
            <ArrowRight size={14} />
          </Link>
        </motion.div>

      </div>
    </main>
  );
}
