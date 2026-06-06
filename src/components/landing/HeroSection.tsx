"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CyberpunkDynamicBackground } from "./CyberpunkDynamicBackground";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function HeroSection(): React.ReactElement {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroTitleWords = "Kiến Tạo Kỹ Năng Tối Tân Cho AI Agents".split(" ");

  useGSAP(() => {
    if (typeof window === "undefined") return;

    // 1. High-Fidelity Floating Glow Orbs - Infinity Floating Loop
    gsap.to(".orb-1", {
      x: "random(-150, 150)",
      y: "random(-100, 150)",
      scale: "random(0.95, 1.2)",
      duration: 7,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
    gsap.to(".orb-2", {
      x: "random(-160, 120)",
      y: "random(-120, 120)",
      scale: "random(0.9, 1.15)",
      duration: 9,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
    gsap.to(".orb-3", {
      x: "random(-130, 130)",
      y: "random(-150, 100)",
      scale: "random(0.95, 1.15)",
      duration: 11,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    // 2. Hero Reveal Title & Visual Explosion Shockwave
    const tl = gsap.timeline();

    tl.fromTo(
      ".explosion-core",
      { scale: 0, opacity: 0, filter: "blur(40px)" },
      {
        scale: 3.5,
        opacity: 0.9,
        duration: 1.4,
        ease: "power4.out",
        filter: "blur(140px)",
      }
    );

    tl.to(
      ".explosion-core",
      {
        opacity: 0.22,
        scale: 2.8,
        duration: 1.2,
        ease: "power2.inOut",
        onComplete: () => {
          gsap.to(".explosion-core", {
            rotation: 360,
            duration: 35,
            repeat: -1,
            ease: "none",
          });
          gsap.to(".explosion-core", {
            scale: 3.2,
            opacity: 0.32,
            duration: 7,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          });
        }
      },
      "<0.8"
    );

    tl.fromTo(
      ".hero-glow-core",
      { scale: 0.3, opacity: 0, filter: "blur(120px)" },
      {
        scale: 1.35,
        opacity: 0.75,
        duration: 1.8,
        ease: "power3.out",
        onComplete: () => {
          gsap.to(".hero-glow-core", {
            scale: 1.6,
            opacity: 0.9,
            duration: 4.5,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          });
        }
      },
      "<0.2"
    );

    // 3. Hero Staggered Entrance Animations (Badge, Mobile Title, Description, CTA Buttons)
    tl.fromTo(
      ".hero-reveal",
      { y: 25, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
      },
      "<0.3"
    );

    tl.to(
      ".hero-word",
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        stagger: 0.05,
        ease: "power4.out",
      },
      "<0.4"
    );
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="relative w-full z-10">
      {/* High-Fidelity Cyberpunk Floating Glow Orbs & Visual Explosion Core */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="floating-glow-orb orb-1 absolute w-[18rem] h-[18rem] sm:w-[35rem] sm:h-[35rem] rounded-full filter blur-[60px] sm:blur-[90px] opacity-[0.35] bg-gradient-to-r from-[var(--color-cyber-violet)] to-[var(--color-neon-indigo)] top-[-5%] left-[-10%]" />
        <div className="floating-glow-orb orb-2 absolute w-[15rem] h-[15rem] sm:w-[30rem] sm:h-[30rem] rounded-full filter blur-[50px] sm:blur-[80px] opacity-[0.3] bg-gradient-to-r from-[var(--color-accent-primary)] to-[var(--color-cyber-violet)] top-[35%] right-[-5%]" />
        <div className="floating-glow-orb orb-3 absolute w-[20rem] h-[20rem] sm:w-[40rem] sm:h-[40rem] rounded-full filter blur-[70px] sm:blur-[100px] opacity-[0.25] bg-gradient-to-r from-[var(--color-neon-indigo)] to-[var(--color-accent-secondary)] bottom-[-5%] left-[10%]" />
        <div className="explosion-core absolute w-[15rem] h-[15rem] sm:w-[30rem] sm:h-[30rem] rounded-full filter blur-[60px] sm:blur-[80px] bg-gradient-to-r from-[var(--color-cyber-violet)] via-[var(--color-accent-primary)] to-[var(--color-neon-indigo)] top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 scale-0 mix-blend-screen" />
      </div>

      {/* Decorative Cyber Grid Background Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none z-0" />
      {/* Soft radial glow directly behind the text for perfect readability on mobile */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.08)_0%,rgba(0,0,0,0)_70%)] pointer-events-none sm:hidden z-0" />

      <section id="section-hero" className="hero-section relative min-h-[100dvh] sm:min-h-screen flex flex-col justify-between overflow-hidden py-6 px-4 pt-16 pb-6 sm:py-12 sm:px-12 sm:pt-32">
        <CyberpunkDynamicBackground />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0">
          <div className="glow-core hero-glow-core opacity-0 w-[20rem] h-[20rem] sm:w-[35rem] sm:h-[35rem]" />
        </div>

        <div className="max-w-5xl mx-auto w-full flex-1 flex flex-col justify-center items-center text-center my-auto z-10 relative">
          {/* Mobile Title: Split into two high-contrast lines with neon drop-shadow */}
          <h1 className="hero-reveal opacity-0 block sm:hidden text-4xl font-extrabold tracking-tight leading-[1.15] mb-5 font-sans px-2">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-indigo-200 block">
              Kiến Tạo Kỹ Năng
            </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 block mt-1.5 drop-shadow-[0_0_15px_rgba(168,85,247,0.45)]">
              Tối Tân Cho AI Agents
            </span>
          </h1>

          {/* Desktop Title: Split word-by-word with GSAP */}
          <h1 className="hidden sm:block text-6xl md:text-7xl font-extrabold tracking-tight leading-tight mb-8">
            {heroTitleWords.map((word, idx) => (
              <span key={idx} className="inline-block overflow-hidden mr-3 py-1">
                <span className="hero-word inline-block translate-y-full opacity-0 bg-clip-text text-transparent bg-gradient-to-r from-purple-200 via-indigo-200 to-pink-200">
                  {word}
                </span>
              </span>
            ))}
          </h1>
          
          <p className="hero-reveal opacity-0 text-sm sm:text-xl text-slate-300/90 leading-relaxed max-w-2xl mb-8 sm:mb-12 font-sans px-4">
            Bách khoa toàn thư mở lưu trữ và phân loại các <span className="text-slate-100 font-semibold border-b border-indigo-500/30 pb-0.5">kỹ năng tối ưu</span> dành cho <span className="text-indigo-200 font-semibold drop-shadow-[0_0_10px_rgba(165,180,252,0.3)]">AI Agents</span>, được xây dựng từ thực tiễn của <span className="text-pink-300 font-mono font-semibold">Antigravity</span>.
          </p>

          <div className="hero-reveal opacity-0 flex items-center justify-center w-full max-w-[260px] px-2 sm:max-w-none sm:px-0">
            <Link 
              href="/skills" 
              className="btn-primary w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-sans no-underline whitespace-nowrap transition-all duration-300 shadow-[0_0_20px_rgba(168,85,247,0.2)] hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]"
            >
              <span>Thư viện Kỹ năng</span>
              <ArrowRight size={14} className="shrink-0 sm:w-4 sm:h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
