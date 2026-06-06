"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Sparkles, Menu, X, Terminal, Info, ChevronRight, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { useTransitionNavigator } from "@/hooks/useTransitionNavigator";

export function Header(): React.ReactElement {
  const pathname = usePathname() || "";
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();
  const { navigateTo } = useTransitionNavigator();

  useEffect(() => {
    const handleScroll = (): void => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = pathname === "/";

  const navLinks = [
    {
      href: "/skills",
      label: t("nav.skills"),
      icon: Terminal,
      activeCheck: (path: string): boolean => path.startsWith("/skills"),
    },
    {
      href: "/about",
      label: t("nav.about"),
      icon: Info,
      activeCheck: (path: string): boolean => path === "/about",
    },
  ];

  const isLightThemePage = pathname === "/skills" || pathname === "/about";

  // Mobile menu items
  const mobileNavLinks = [
    ...navLinks,
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 transform-gpu",
        scrolled
          ? isLightThemePage
            ? "py-3 bg-white/75 backdrop-blur-md shadow-[0_4px_30px_rgba(99,102,241,0.05)] border-b border-slate-200/50 opacity-100 translate-y-0 pointer-events-auto"
            : "py-3 bg-[var(--color-bg-glass)] backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.3)] opacity-100 translate-y-0 pointer-events-auto"
          : isHome
          ? "opacity-0 -translate-y-full pointer-events-none"
          : isLightThemePage
          ? "py-4 bg-transparent opacity-100 translate-y-0 pointer-events-auto"
          : "py-4 bg-[var(--color-bg-primary)]/80 backdrop-blur-md opacity-100 translate-y-0 pointer-events-auto"
      )}
    >
      {/* Dynamic bottom borders */}
      <div
        className={cn(
          "absolute bottom-0 left-0 right-0 h-[1px] pointer-events-none transition-opacity duration-500",
          isLightThemePage ? "bg-slate-200/40" : "bg-[var(--color-border)]",
          scrolled ? "opacity-0" : "opacity-100"
        )}
      />
      <div
        className={cn(
          "absolute bottom-0 left-0 right-0 h-[1px] pointer-events-none transition-opacity duration-500 bg-gradient-to-r from-transparent via-[var(--color-cyber-violet)]/30 to-transparent",
          scrolled ? "opacity-100 animate-pulse" : "opacity-0"
        )}
      />

      <nav aria-label="Menu chính" className="mx-auto max-w-7xl px-6 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 group no-underline"
        >
          <div className={cn(
            "w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300",
            isLightThemePage
              ? "bg-indigo-50 border border-indigo-100 group-hover:shadow-[0_0_12px_rgba(99,102,241,0.2)]"
              : "bg-[var(--color-accent-glow)] border border-[var(--color-border-accent)] group-hover:shadow-[0_0_12px_hsla(285,100%,64%,0.3)]"
          )}>
            <Sparkles
              size={16}
              className={cn(
                "animate-[spin_10s_linear_infinite] group-hover:animate-[spin_2s_linear_infinite]",
                isLightThemePage ? "text-indigo-600" : "text-[var(--color-accent-primary)]"
              )}
              aria-hidden="true"
            />
          </div>
          <span className={cn(
            "text-xl font-bold tracking-tight transition-colors duration-200",
            isLightThemePage ? "text-slate-800" : "text-[var(--color-text-primary)]"
          )}>
            Skillbook <span className={isLightThemePage ? "text-indigo-600" : "text-[var(--color-accent-primary)]"}>Agents</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = link.activeCheck(pathname);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => navigateTo(e, link.href)}
                className={cn(
                  "text-sm font-medium transition-colors duration-200 no-underline relative group py-1",
                  isActive
                    ? isLightThemePage
                      ? "text-indigo-600 font-semibold"
                      : "text-[var(--color-accent-primary)] font-semibold"
                    : isLightThemePage
                    ? "text-slate-600 hover:text-slate-800"
                    : "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
                )}
                aria-current={isActive ? "page" : undefined}
              >
                {link.label}
                <span
                  className={cn(
                    "absolute bottom-0 left-0 right-0 h-[2px] transition-all duration-300 origin-left transition-transform duration-300",
                    isLightThemePage
                      ? "bg-gradient-to-r from-indigo-600 to-purple-600"
                      : "bg-gradient-to-r from-[var(--color-cyber-violet)] to-[var(--color-neon-indigo)]",
                    isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  )}
                />
              </Link>
            );
          })}



          {/* Premium Language Switcher (Desktop) */}
          <button
            onClick={toggleLanguage}
            className={cn(
              "flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border text-xs font-mono font-bold transition-all duration-300 active:scale-95 cursor-pointer ml-1",
              isLightThemePage
                ? "bg-slate-50 border-slate-200 text-slate-600 hover:text-indigo-600 hover:border-indigo-200 hover:shadow-sm"
                : "bg-white/5 border-white/10 text-[var(--color-text-secondary)] hover:text-white hover:border-white/20"
            )}
            aria-label={language === "vi" ? "Switch to English" : "Chuyển sang tiếng Việt"}
            title={language === "vi" ? "Switch to English" : "Chuyển sang tiếng Việt"}
          >
            <Globe size={13} className="shrink-0" aria-hidden="true" />
            <span className={cn(
              language === "vi"
                ? isLightThemePage ? "text-indigo-600 font-extrabold" : "text-[var(--color-accent-primary)] font-extrabold"
                : "opacity-40"
            )}>VI</span>
            <span className="opacity-20 font-light">/</span>
            <span className={cn(
              language === "en"
                ? isLightThemePage ? "text-indigo-600 font-extrabold" : "text-[var(--color-accent-primary)] font-extrabold"
                : "opacity-40"
            )}>EN</span>
          </button>
        </div>

        {/* Mobile Toggle & Language Switcher */}
        <div className="flex items-center gap-2 md:hidden">
          {/* Quick Language Toggle on Mobile Bar */}
          <button
            onClick={toggleLanguage}
            className={cn(
              "flex items-center gap-1 px-2 py-1 rounded-lg border text-[10px] font-mono font-bold transition-all duration-300 active:scale-95 cursor-pointer",
              isLightThemePage
                ? "bg-slate-50 border-slate-200 text-slate-600"
                : "bg-white/5 border-white/10 text-[var(--color-text-secondary)]"
            )}
            aria-label={language === "vi" ? "Switch to English" : "Chuyển sang tiếng Việt"}
            title={language === "vi" ? "Switch to English" : "Chuyển sang tiếng Việt"}
          >
            <Globe size={11} className="shrink-0" aria-hidden="true" />
            <span className={cn(language === "vi" ? (isLightThemePage ? "text-indigo-600 font-extrabold" : "text-[var(--color-accent-primary)] font-extrabold") : "opacity-40")}>VI</span>
            <span className="opacity-20">/</span>
            <span className={cn(language === "en" ? (isLightThemePage ? "text-indigo-600 font-extrabold" : "text-[var(--color-accent-primary)] font-extrabold") : "opacity-40")}>EN</span>
          </button>



          <button
            className={cn(
              "bg-transparent border-none cursor-pointer p-1",
              isLightThemePage ? "text-slate-600" : "text-[var(--color-text-secondary)]"
            )}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className={cn(
              "md:hidden absolute top-[calc(100%+12px)] left-6 right-6 p-4 flex flex-col gap-2 rounded-2xl shadow-[0_20px_50px_rgba(99,102,241,0.12)] border backdrop-blur-lg select-none",
              isLightThemePage
                ? "bg-white/95 border-slate-200/80 text-slate-800"
                : "bg-[var(--color-bg-secondary)]/95 border-[var(--color-border)] text-white"
            )}
          >
            {mobileNavLinks.map((link) => {
              const isActive = link.activeCheck(pathname);
              const IconComponent = link.icon;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    setMobileOpen(false);
                    navigateTo(e, link.href);
                  }}
                  className={cn(
                    "flex items-center justify-between p-3 rounded-xl border transition-all duration-300 no-underline cursor-pointer group",
                    isActive
                      ? isLightThemePage
                        ? "bg-indigo-50/80 border-indigo-200 text-indigo-600 font-bold shadow-[0_4px_12px_rgba(99,102,241,0.06)]"
                        : "bg-[var(--color-accent-glow)] border-[var(--color-border-accent)] text-[var(--color-accent-primary)] font-bold shadow-[0_4px_12px_rgba(167,139,250,0.1)]"
                      : isLightThemePage
                      ? "bg-slate-50/40 border-slate-100 hover:bg-slate-50 hover:border-slate-200 text-slate-600"
                      : "bg-white/5 border-transparent hover:bg-white/10 hover:border-white/10 text-[var(--color-text-secondary)]"
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  <div className="flex items-center gap-3">
                    <div className={cn(
                      "w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300",
                      isActive
                        ? isLightThemePage
                          ? "bg-indigo-600 text-white"
                          : "bg-[var(--color-accent-primary)] text-slate-900"
                        : isLightThemePage
                        ? "bg-slate-100 text-slate-400 group-hover:text-slate-600 group-hover:bg-slate-200/60"
                        : "bg-white/5 text-slate-400 group-hover:text-white group-hover:bg-white/10"
                    )}>
                      <IconComponent size={14} aria-hidden="true" />
                    </div>
                    <span className="text-xs font-semibold font-sans tracking-wide">
                      {link.label}
                    </span>
                  </div>
                  
                  <ChevronRight 
                    size={14} 
                    className={cn(
                      "transition-all duration-300 transform group-hover:translate-x-1",
                      isActive
                        ? isLightThemePage ? "text-indigo-500" : "text-[var(--color-accent-primary)]"
                        : "text-slate-300 group-hover:text-slate-400"
                    )}
                    aria-hidden="true"
                  />
                </Link>
              );
            })}

            {/* Mobile Language Switcher (Expanded) */}
            <div className={cn(
              "mt-3 pt-3 border-t flex items-center justify-between px-3",
              isLightThemePage ? "border-slate-200/60" : "border-white/10"
            )}>
              <span className={cn("text-[9px] font-mono font-bold tracking-wider", isLightThemePage ? "text-slate-400" : "text-[var(--color-text-muted)]")}>
                NGÔN NGỮ / LANGUAGE
              </span>
              <button
                onClick={toggleLanguage}
                className={cn(
                  "flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-mono font-bold transition-all duration-300 active:scale-95 cursor-pointer",
                  isLightThemePage
                    ? "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
                    : "bg-white/5 border-white/10 text-white hover:bg-white/10"
                )}
                aria-label={language === "vi" ? "Switch to English" : "Chuyển sang tiếng Việt"}
              >
                <Globe size={13} aria-hidden="true" />
                <span className={cn(language === "vi" ? (isLightThemePage ? "text-indigo-600 font-extrabold" : "text-[var(--color-accent-primary)] font-extrabold") : "opacity-40")}>VI</span>
                <span className="opacity-20 font-light">/</span>
                <span className={cn(language === "en" ? (isLightThemePage ? "text-indigo-600 font-extrabold" : "text-[var(--color-accent-primary)] font-extrabold") : "opacity-40")}>EN</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
