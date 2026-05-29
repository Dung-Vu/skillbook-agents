"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { BookOpen, ExternalLink, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function Header(): React.ReactElement {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = (): void => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[var(--color-bg-primary)]/80 backdrop-blur-xl border-b border-[var(--color-border)]"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 text-[var(--color-text-primary)] no-underline group"
        >
          <BookOpen
            size={24}
            className="text-[var(--color-accent-primary)] transition-transform duration-300 group-hover:scale-110"
          />
          <span className="font-bold text-lg tracking-tight">
            Skill<span className="text-[var(--color-accent-primary)]">book</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            href="/skills"
            className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors duration-200 no-underline"
          >
            Skills Catalog
          </Link>
          <Link
            href="/about"
            className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors duration-200 no-underline"
          >
            About
          </Link>
          <Link
            href="/changelog"
            className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors duration-200 no-underline"
          >
            Changelog
          </Link>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors duration-200"
          >
            <ExternalLink size={20} />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-[var(--color-text-secondary)] bg-transparent border-none cursor-pointer"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[var(--color-bg-secondary)] border-t border-[var(--color-border)] px-6 py-4 flex flex-col gap-4">
          <Link
            href="/skills"
            className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] no-underline"
            onClick={() => setMobileOpen(false)}
          >
            Skills Catalog
          </Link>
          <Link
            href="/about"
            className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] no-underline"
            onClick={() => setMobileOpen(false)}
          >
            About
          </Link>
          <Link
            href="/changelog"
            className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] no-underline"
            onClick={() => setMobileOpen(false)}
          >
            Changelog
          </Link>
        </div>
      )}
    </header>
  );
}
