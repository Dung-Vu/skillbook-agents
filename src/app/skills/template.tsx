"use client";

import React from "react";

export default function SkillsTemplate({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  return (
    <div 
      className="w-full min-h-screen origin-top hardware-accelerated will-change-transform"
      style={{ willChange: "transform" }}
    >
      {children}
    </div>
  );
}
