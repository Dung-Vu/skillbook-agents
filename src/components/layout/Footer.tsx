import Link from "next/link";
import { ExternalLink, Heart, Sparkles } from "lucide-react";

export function Footer(): React.ReactElement {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-bg-primary)]/80 backdrop-blur-xl relative overflow-hidden py-16 px-6 sm:px-12">
      {/* Premium glowing top border */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--color-cyber-violet)] to-transparent opacity-50 z-10" />
      
      {/* Radial soft background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(167,139,250,0.03)_0%,transparent_70%)] pointer-events-none z-0" />

      <div className="mx-auto max-w-5xl w-full relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand block */}
          <div className="flex flex-col gap-4">
            <Link
              href="/"
              className="flex items-center gap-2 text-[var(--color-text-primary)] no-underline group"
            >
              <div className="w-6 h-6 rounded bg-[var(--color-accent-glow)] border border-[var(--color-border-accent)] flex items-center justify-center">
                <Sparkles size={12} className="text-[var(--color-accent-primary)] group-hover:rotate-12 transition-transform duration-300" />
              </div>
              <span className="font-bold tracking-tight text-base group-hover:text-[var(--color-accent-primary)] transition-colors duration-300">
                Skillbook <span className="text-[var(--color-accent-primary)]">Agents</span>
              </span>
            </Link>
            <p className="text-xs text-[var(--color-text-muted)] leading-relaxed max-w-xs font-sans">
              Bách khoa toàn thư mở lưu trữ và phân loại các kỹ năng tối ưu dành cho AI Agents. Được chọn lọc và kiểm chứng nghiêm ngặt.
            </p>
          </div>

          {/* Links block */}
          <div className="flex flex-col gap-3">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--color-text-muted)] mb-1">
              Navigation
            </span>
            <Link
              href="/skills"
              className="text-xs text-[var(--color-text-secondary)] hover:text-[var(--color-accent-primary)] hover:translate-x-1 no-underline transition-all duration-300 w-fit"
            >
              Skills Catalog
            </Link>
            <Link
              href="/about"
              className="text-xs text-[var(--color-text-secondary)] hover:text-[var(--color-accent-primary)] hover:translate-x-1 no-underline transition-all duration-300 w-fit"
            >
              About
            </Link>
            <Link
              href="/changelog"
              className="text-xs text-[var(--color-text-secondary)] hover:text-[var(--color-accent-primary)] hover:translate-x-1 no-underline transition-all duration-300 w-fit"
            >
              Changelog
            </Link>
          </div>

          {/* Community block */}
          <div className="flex flex-col gap-3">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--color-text-muted)] mb-1">
              Community
            </span>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs text-[var(--color-text-secondary)] hover:text-[var(--color-accent-primary)] hover:translate-x-1 no-underline transition-all duration-300 w-fit"
            >
              <ExternalLink size={12} className="opacity-60" />
              GitHub
            </a>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-[var(--color-border)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[10px] text-[var(--color-text-muted)] flex items-center gap-1 font-mono">
            Built with <Heart size={10} className="text-red-400 animate-pulse" /> for the AI agent community
          </p>
          <p className="text-[10px] text-[var(--color-text-muted)] font-mono">
            © {new Date().getFullYear()} Skillbook Agents
          </p>
        </div>
      </div>
    </footer>
  );
}
