import React from "react";

export default function SkillDetailLoading(): React.ReactElement {
  return (
    <div className="min-h-screen bg-[var(--color-bg-primary)] pt-32 pb-20 px-6 font-sans">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb Shimmer */}
        <div className="flex items-center gap-2 mb-8 animate-pulse select-none">
          <div className="h-4 w-12 bg-gray-800 rounded" />
          <span className="text-gray-800">/</span>
          <div className="h-4 w-32 bg-gray-800 rounded" />
          <span className="text-gray-800">/</span>
          <div className="h-4 w-20 bg-gray-800 rounded" />
        </div>

        {/* Header Shimmer */}
        <div className="mb-12 animate-pulse">
          <div className="flex items-start justify-between flex-wrap gap-4 mb-4">
            <div className="h-10 w-64 bg-gray-800 rounded-lg" />
            <div className="h-6 w-24 bg-gray-800 rounded-full" />
          </div>
          
          <div className="h-4 w-40 bg-gray-800/80 rounded-md mb-6" />
          
          <div className="space-y-2 mb-6">
            <div className="h-4 w-full bg-gray-800/60 rounded" />
            <div className="h-4 w-11/12 bg-gray-800/60 rounded" />
          </div>

          {/* Platform Tags Shimmer */}
          <div className="flex items-center gap-2 flex-wrap mb-6">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="h-6 w-16 bg-gray-800/50 rounded-full" />
            ))}
          </div>

          {/* Action Button Shimmer */}
          <div className="h-8 w-28 bg-gray-800 rounded-full" />
        </div>

        {/* Content Body Shimmer */}
        <div className="space-y-8 animate-pulse pt-8 border-t border-[var(--color-border)]">
          <div>
            <div className="h-6 w-48 bg-gray-800 rounded mb-4" />
            <div className="space-y-2">
              <div className="h-4 w-full bg-gray-800/50 rounded" />
              <div className="h-4 w-11/12 bg-gray-800/50 rounded" />
              <div className="h-4 w-4/5 bg-gray-800/50 rounded" />
            </div>
          </div>

          {/* Simulated Code Block */}
          <div className="p-5 bg-gray-900/60 border border-[var(--color-border)] rounded-xl space-y-2">
            <div className="h-4 w-1/3 bg-gray-800/70 rounded font-mono" />
            <div className="h-4 w-2/3 bg-gray-800/50 rounded font-mono" />
            <div className="h-4 w-1/2 bg-gray-800/50 rounded font-mono" />
          </div>

          <div>
            <div className="h-6 w-40 bg-gray-800 rounded mb-4" />
            <div className="space-y-2">
              <div className="h-4 w-full bg-gray-800/50 rounded" />
              <div className="h-4 w-5/6 bg-gray-800/50 rounded" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
