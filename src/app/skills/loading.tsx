import React from "react";

export default function SkillsCatalogLoading(): React.ReactElement {
  return (
    <div className="min-h-screen bg-[var(--color-bg-primary)] pt-32 pb-20 px-6 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Header Shimmer */}
        <div className="flex flex-col items-center text-center mb-12 animate-pulse">
          <div className="h-4 w-32 bg-gray-800 rounded-full mb-3" />
          <div className="h-10 w-80 bg-gray-800 rounded-lg mb-4" />
          <div className="h-5 w-96 bg-gray-800/60 rounded-md" />
        </div>

        {/* Search Bar Shimmer */}
        <div className="max-w-xl mx-auto mb-10 animate-pulse">
          <div className="h-12 w-full bg-gray-800 rounded-xl border border-[var(--color-border)]" />
        </div>

        {/* Category Filter Chips Shimmer */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 animate-pulse max-w-4xl mx-auto">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="h-8 w-28 bg-gray-800/80 rounded-full" />
          ))}
        </div>

        {/* Catalog Cards Grid Shimmer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="glass-card p-5 border border-[var(--color-border)] flex flex-col gap-4 animate-pulse"
              style={{ minHeight: "180px" }}
            >
              <div className="flex items-start justify-between">
                <div className="h-5 w-36 bg-gray-800 rounded-md" />
                <div className="h-4 w-16 bg-gray-800 rounded-full" />
              </div>
              <div className="flex-1 flex flex-col gap-2">
                <div className="h-3.5 w-full bg-gray-800/60 rounded" />
                <div className="h-3.5 w-4/5 bg-gray-800/60 rounded" />
              </div>
              <div className="flex items-center gap-2 flex-wrap">
                <div className="h-5 w-12 bg-gray-800/50 rounded-full" />
                <div className="h-5 w-16 bg-gray-800/50 rounded-full" />
                <div className="h-5 w-14 bg-gray-800/50 rounded-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
