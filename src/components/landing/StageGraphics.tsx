"use client";

import React from "react";

export function Stage0Graphic(): React.JSX.Element {
  return (
    <div className="relative w-40 h-40 flex items-center justify-center select-none">
      <div className="absolute inset-4 rounded-full bg-red-500/10 blur-xl animate-pulse" />
      <svg className="w-full h-full" viewBox="0 0 100 100">
        <defs>
          <filter id="neon-glow-red" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(239, 68, 68, 0.15)" strokeWidth="1" />
        <circle 
          cx="50" cy="50" r="42" 
          fill="none" 
          stroke="#ef4444" 
          strokeWidth="2.5" 
          strokeDasharray="14 10"
          className="animate-neon-ring-fast origin-center"
          filter="url(#neon-glow-red)"
        />
        <path 
          d="M50 28 C38 28 32 38 36 50 C29 55 30 65 38 70 C42 73 48 72 50 68 C52 72 58 73 62 70 C70 65 71 55 64 50 C68 38 62 28 50 28 Z" 
          fill="none" 
          stroke="rgba(239, 68, 68, 0.4)" 
          strokeWidth="1.5"
        />
        <circle cx="43" cy="42" r="2.5" fill="#ef4444" className="animate-ping" style={{ animationDuration: "1.5s" }} />
        <circle cx="57" cy="42" r="2.5" fill="#ef4444" className="animate-ping" style={{ animationDuration: "2s" }} />
        <circle cx="50" cy="58" r="3.5" fill="#ef4444" />
        <line x1="50" y1="58" x2="43" y2="42" stroke="#ef4444" strokeWidth="1" strokeDasharray="3 3" />
        <line x1="50" y1="58" x2="57" y2="42" stroke="#ef4444" strokeWidth="1" strokeDasharray="3 3" />
      </svg>
    </div>
  );
}

export function Stage1Graphic(): React.JSX.Element {
  return (
    <div className="relative w-40 h-40 flex items-center justify-center select-none">
      <div className="absolute inset-4 rounded-full bg-amber-500/10 blur-xl animate-pulse" />
      <svg className="w-full h-full" viewBox="0 0 100 100">
        <defs>
          <filter id="neon-glow-amber" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(245, 158, 11, 0.15)" strokeWidth="1" />
        <circle 
          cx="50" cy="50" r="42" 
          fill="none" 
          stroke="#f59e0b" 
          strokeWidth="2.5" 
          strokeDasharray="20 12"
          className="animate-neon-ring-reverse origin-center"
          filter="url(#neon-glow-amber)"
        />
        <path d="M28 50 L42 50 L46 38 L54 62 L58 50 L72 50" fill="none" stroke="#f59e0b" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="8 6" />
        <path d="M35 35 L45 42 M65 65 L55 58" stroke="rgba(245, 158, 11, 0.5)" strokeWidth="1.5" strokeDasharray="2 2" />
        <circle cx="46" cy="38" r="3" fill="#f59e0b" />
        <circle cx="54" cy="62" r="3" fill="#f59e0b" />
      </svg>
    </div>
  );
}

export function Stage2Graphic(): React.JSX.Element {
  return (
    <div className="relative w-40 h-40 flex items-center justify-center select-none">
      <div className="absolute inset-4 rounded-full bg-blue-500/10 blur-xl animate-pulse" />
      <svg className="w-full h-full animate-spin" style={{ animationDuration: "12s" }} viewBox="0 0 100 100">
        <defs>
          <filter id="neon-glow-blue" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(59, 130, 246, 0.15)" strokeWidth="1" />
        <circle 
          cx="50" cy="50" r="42" 
          fill="none" 
          stroke="#3b82f6" 
          strokeWidth="2.5" 
          strokeDasharray="30 10"
          className="animate-neon-ring-slow origin-center"
          filter="url(#neon-glow-blue)"
        />
        <circle 
          cx="50" cy="50" r="30" 
          fill="none" 
          stroke="#60a5fa" 
          strokeWidth="1.5" 
          strokeDasharray="10 8"
          className="animate-neon-ring-reverse origin-center"
        />
        <polygon points="50,34 64,42 64,58 50,66 36,58 36,42" fill="none" stroke="#3b82f6" strokeWidth="2" />
        <line x1="50" y1="50" x2="50" y2="34" stroke="#3b82f6" strokeWidth="1.5" />
        <line x1="50" y1="50" x2="64" y2="58" stroke="#3b82f6" strokeWidth="1.5" />
        <line x1="50" y1="50" x2="36" y2="58" stroke="#3b82f6" strokeWidth="1.5" />
      </svg>
    </div>
  );
}

export function Stage3Graphic(): React.JSX.Element {
  return (
    <div className="relative w-40 h-40 flex items-center justify-center select-none">
      <div className="absolute inset-4 rounded-full bg-emerald-500/10 blur-xl animate-pulse" />
      <svg className="w-full h-full" viewBox="0 0 100 100">
        <defs>
          <filter id="neon-glow-emerald" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(16, 185, 129, 0.15)" strokeWidth="1" />
        <circle 
          cx="50" cy="50" r="42" 
          fill="none" 
          stroke="#10b981" 
          strokeWidth="3" 
          strokeDasharray="40 8"
          className="animate-neon-ring-fast origin-center"
          filter="url(#neon-glow-emerald)"
        />
        <path d="M50 32 L62 38 L62 52 C62 60 56 66 50 69 C44 66 38 60 38 52 L38 38 Z" fill="rgba(16, 185, 129, 0.1)" stroke="#10b981" strokeWidth="2" strokeLinejoin="round" />
        <path d="M45 50 L48 53 L55 45" fill="none" stroke="#10b981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" filter="url(#neon-glow-emerald)" />
        <circle cx="50" cy="50" r="2" fill="#fff" className="animate-ping" />
      </svg>
    </div>
  );
}
