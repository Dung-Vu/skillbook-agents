"use client";

import Link from "next/link";
import { ExternalLink, Heart, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";

interface FooterProps {
  isLight?: boolean;
}

export function Footer({ isLight = false }: FooterProps): React.ReactElement {
  const { t } = useLanguage();

  return (
    <footer className={cn(
      "border-t relative overflow-hidden py-4 sm:py-16 px-4 sm:px-12 transition-colors duration-300",
      isLight
        ? "border-slate-200 bg-white text-slate-600"
        : "border-[var(--color-border)] bg-[var(--color-bg-primary)]/80 backdrop-blur-xl text-[var(--color-text-secondary)]"
    )}>
      {/* Premium glowing top border */}
      <div className={cn(
        "absolute top-0 left-0 right-0 h-[1px] z-10",
        isLight
          ? "bg-gradient-to-r from-transparent via-indigo-600/30 to-transparent"
          : "bg-gradient-to-r from-transparent via-[var(--color-cyber-violet)] to-transparent opacity-50"
      )} />
      
      {/* Radial soft background glow */}
      <div className={cn(
        "absolute inset-0 pointer-events-none z-0",
        isLight
          ? "bg-[radial-gradient(ellipse_at_bottom,rgba(99,102,241,0.02)_0%,transparent_70%)]"
          : "bg-[radial-gradient(ellipse_at_bottom,rgba(167,139,250,0.03)_0%,transparent_70%)]"
      )} />

      <div className="mx-auto max-w-5xl w-full relative z-10">
        <div className="grid grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {/* Cột 1: Brand & Description */}
          <div className="flex flex-col gap-4">
            <Link
              href="/"
              className={cn("flex items-center gap-2 no-underline group", isLight ? "text-slate-800" : "text-[var(--color-text-primary)]")}
            >
              <div className={cn(
                "w-6 h-6 rounded flex items-center justify-center transition-colors duration-300",
                isLight
                  ? "bg-indigo-50 border border-indigo-100"
                  : "bg-[var(--color-accent-glow)] border border-[var(--color-border-accent)]"
              )}>
                <Sparkles size={12} className={cn("group-hover:rotate-12 transition-transform duration-300", isLight ? "text-indigo-600" : "text-[var(--color-accent-primary)]")} />
              </div>
              <span className={cn("font-bold tracking-tight text-base transition-colors duration-300", isLight ? "group-hover:text-indigo-600" : "group-hover:text-[var(--color-accent-primary)]")}>
                Skillbook <span className={isLight ? "text-indigo-600" : "text-[var(--color-accent-primary)]"}>Agents</span>
              </span>
            </Link>
            <p className={cn("hidden md:block text-[10px] sm:text-xs leading-relaxed max-w-xs font-sans", isLight ? "text-slate-500" : "text-[var(--color-text-muted)]")}>
              {t("footer.desc")}
            </p>

          </div>

          {/* Cột 2: Explore */}
          <div className="flex flex-col gap-3">
            <span className={cn("text-[10px] font-mono uppercase tracking-[0.2em] font-bold mb-1", isLight ? "text-slate-400" : "text-[var(--color-text-muted)]")}>
              {t("footer.explore")}
            </span>
            <Link
              href="/"
              className={cn("text-[10px] sm:text-xs no-underline transition-all duration-300 w-fit inline-block", isLight ? "text-slate-500 hover:text-indigo-600 hover:translate-x-1" : "text-[var(--color-text-secondary)] hover:text-[var(--color-cyber-violet)] hover:translate-x-1")}
            >
              {t("footer.home")}
            </Link>
            <Link
              href="/skills"
              className={cn("text-[10px] sm:text-xs no-underline transition-all duration-300 w-fit inline-block", isLight ? "text-slate-500 hover:text-indigo-600 hover:translate-x-1" : "text-[var(--color-text-secondary)] hover:text-[var(--color-cyber-violet)] hover:translate-x-1")}
            >
              {t("footer.skills")}
            </Link>
            <Link
              href="/about"
              className={cn("text-[10px] sm:text-xs no-underline transition-all duration-300 w-fit inline-block", isLight ? "text-slate-500 hover:text-indigo-600 hover:translate-x-1" : "text-[var(--color-text-secondary)] hover:text-[var(--color-cyber-violet)] hover:translate-x-1")}
            >
              {t("footer.about")}
            </Link>

          </div>

          {/* Cột 3: Resources */}
          <div className="hidden md:flex flex-col gap-3">
            <span className={cn("text-[10px] font-mono uppercase tracking-[0.2em] font-bold mb-1", isLight ? "text-slate-400" : "text-[var(--color-text-muted)]")}>
              {t("footer.resources")}
            </span>
            <a
              href="https://www.ncbi.nlm.nih.gov"
              target="_blank"
              rel="noopener noreferrer"
              className={cn("text-[10px] sm:text-xs no-underline transition-all duration-300 w-fit inline-block", isLight ? "text-slate-500 hover:text-indigo-600 hover:translate-x-1" : "text-[var(--color-text-secondary)] hover:text-[var(--color-cyber-violet)] hover:translate-x-1")}
            >
              NCBI
            </a>
            <a
              href="https://www.ncbi.nlm.nih.gov/clinvar"
              target="_blank"
              rel="noopener noreferrer"
              className={cn("text-[10px] sm:text-xs no-underline transition-all duration-300 w-fit inline-block", isLight ? "text-slate-500 hover:text-indigo-600 hover:translate-x-1" : "text-[var(--color-text-secondary)] hover:text-[var(--color-cyber-violet)] hover:translate-x-1")}
            >
              ClinVar
            </a>
            <a
              href="https://pubchem.ncbi.nlm.nih.gov"
              target="_blank"
              rel="noopener noreferrer"
              className={cn("text-[10px] sm:text-xs no-underline transition-all duration-300 w-fit inline-block", isLight ? "text-slate-500 hover:text-indigo-600 hover:translate-x-1" : "text-[var(--color-text-secondary)] hover:text-[var(--color-cyber-violet)] hover:translate-x-1")}
            >
              PubChem
            </a>
            <a
              href="https://reactome.org"
              target="_blank"
              rel="noopener noreferrer"
              className={cn("text-[10px] sm:text-xs no-underline transition-all duration-300 w-fit inline-block", isLight ? "text-slate-500 hover:text-indigo-600 hover:translate-x-1" : "text-[var(--color-text-secondary)] hover:text-[var(--color-cyber-violet)] hover:translate-x-1")}
            >
              Reactome
            </a>
          </div>

          {/* Cột 4: Community */}
          <div className="flex flex-col gap-3">
            <span className={cn("text-[10px] font-mono uppercase tracking-[0.2em] font-bold mb-1", isLight ? "text-slate-400" : "text-[var(--color-text-muted)]")}>
              {t("footer.community")}
            </span>
            <a
              href="https://github.com/Dung-Vu/skillbook-agents"
              target="_blank"
              rel="noopener noreferrer"
              className={cn("flex flex-row items-center gap-1.5 text-[10px] sm:text-xs no-underline transition-all duration-300 w-fit whitespace-nowrap", isLight ? "text-slate-500 hover:text-indigo-600 hover:translate-x-1" : "text-[var(--color-text-secondary)] hover:text-[var(--color-cyber-violet)] hover:translate-x-1")}
            >
              <ExternalLink size={10} className="opacity-60 shrink-0 sm:w-3 sm:h-3" />
              <span>GitHub</span>
            </a>

          </div>
        </div>

        <div className={cn("mt-6 sm:mt-12 pt-4 sm:pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-4", isLight ? "border-slate-200" : "border-[var(--color-border)]")}>
          <p className={cn("text-[10px] flex items-center gap-1 font-mono", isLight ? "text-slate-400" : "text-[var(--color-text-muted)]")}>
            {t("footer.builtWith")} <Heart size={10} className="text-red-400 animate-pulse" /> {t("footer.forCommunity")}
          </p>
          <p className={cn("text-[10px] font-mono", isLight ? "text-slate-400" : "text-[var(--color-text-muted)]")}>
            © 2026 Skillbook Agents
          </p>
        </div>
      </div>
    </footer>
  );
}
