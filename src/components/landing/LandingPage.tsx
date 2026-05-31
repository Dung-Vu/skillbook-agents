"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HeroSection } from "./HeroSection";
import { EvolutionSection } from "./EvolutionSection";
import { SandboxSection } from "./SandboxSection";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function LandingPage(): React.ReactElement {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // Turn off loader after 300ms (just enough to cover canvas initial shift)
    // then refresh GSAP ScrollTrigger to ensure all pinning coordinates are pristine
    const loaderTimer = setTimeout(() => {
      setIsLoading(false);
      const refreshTimer = setTimeout(() => {
        if (typeof window !== "undefined") {
          ScrollTrigger.refresh();
        }
      }, 50);
      return () => clearTimeout(refreshTimer);
    }, 300);

    return () => {
      clearTimeout(loaderTimer);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[var(--color-bg-primary)] overflow-x-hidden">
      {/* Premium Cyberpunk Intro Loader */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.28, ease: "easeOut" } }}
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#070b13] font-mono select-none"
          >
            {/* Retro radial glow backdrop */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(167,139,250,0.03)_0%,transparent_80%)] pointer-events-none" />
            
            <div className="relative flex flex-col items-center gap-4 text-center">
              {/* Spinning Cyberpunk Neon Indicator */}
              <div className="relative w-16 h-16">
                <div className="absolute inset-0 rounded-full border-2 border-white/5" />
                <div 
                  className="absolute inset-0 rounded-full border-t-2 border-r-2 border-[var(--color-cyber-violet)]" 
                  style={{ animation: "spin 1.0s linear infinite" }}
                />
                <div 
                  className="absolute inset-2 rounded-full border-b-2 border-l-2 border-[var(--color-neon-indigo)]" 
                  style={{ animation: "spin 1.5s linear infinite reverse" }}
                />
              </div>

              {/* Glowing Loading Text */}
              <div className="mt-4 flex flex-col items-center gap-1">
                <span className="text-xs font-semibold tracking-[0.25em] text-[var(--color-text-primary)] uppercase animate-pulse">
                  Initializing Agents
                </span>
                <span className="text-[9px] tracking-widest text-[var(--color-text-muted)] uppercase">
                  Skillbook Protocol v0.1.0
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section with Cyberpunk Dynamic Grid */}
      <HeroSection />

      {/* Evolution Timeline Section */}
      <EvolutionSection />

      {/* Interactive Code Editor Sandbox Section */}
      <SandboxSection />
    </div>
  );
}
