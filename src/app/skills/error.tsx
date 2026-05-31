"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { AlertOctagon, RefreshCw, Home, ArrowLeft } from "lucide-react";

interface SkillsErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function SkillsError({ error, reset }: SkillsErrorProps): React.ReactElement {
  useEffect(() => {
    // Log error to an external service if necessary
    console.error("Skills Route Error:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-[var(--color-bg-primary)] flex items-center justify-center px-6 py-20 font-sans relative overflow-hidden">
      {/* Background Glow Red */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.06)_0%,transparent_60%)] pointer-events-none z-0" />
      
      <div className="max-w-md w-full glass-panel border border-red-500/20 p-8 text-center relative z-10 shadow-2xl">
        {/* Glow red line on top */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-red-500 to-transparent" />

        {/* Warning Icon with pulse */}
        <div className="w-16 h-16 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center mx-auto mb-6 animate-pulse">
          <AlertOctagon size={32} className="text-red-500" />
        </div>

        {/* Title */}
        <h1 className="text-2xl font-bold tracking-tight text-[var(--color-text-primary)] mb-2 font-mono">
          LỖI HỆ THỐNG
        </h1>
        <p className="text-sm text-[var(--color-text-muted)] uppercase tracking-wider mb-6">
          System Execution Interrupted
        </p>

        {/* Error Message Box */}
        <div className="p-4 bg-red-950/20 border border-red-950/40 rounded-xl mb-8 text-left">
          <p className="text-xs font-mono text-red-400 break-words leading-relaxed">
            {error.message || "Đã xảy ra lỗi không xác định trong quá trình tải dữ liệu kỹ năng."}
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col gap-3">
          <button
            onClick={() => reset()}
            className="btn-primary w-full justify-center text-sm font-sans flex items-center gap-2"
            style={{
              background: "linear-gradient(135deg, #ef4444 0%, #b91c1c 100%)",
              boxShadow: "0 4px 20px rgba(239, 68, 68, 0.25)"
            }}
          >
            <RefreshCw size={16} />
            Thử tải lại trang
          </button>
          
          <div className="flex gap-3 mt-1">
            <Link
              href="/skills"
              className="btn-secondary flex-1 justify-center text-xs py-2 px-3 no-underline font-sans"
            >
              <ArrowLeft size={14} />
              Trang thư viện
            </Link>
            <Link
              href="/"
              className="btn-secondary flex-1 justify-center text-xs py-2 px-3 no-underline font-sans"
            >
              <Home size={14} />
              Trang chủ
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
