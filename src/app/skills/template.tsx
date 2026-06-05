"use client";

import React from "react";
import { PaperCrumpleOverlay } from "@/components/ui/PaperCrumpleOverlay";

export default function SkillsTemplate({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  return (
    <>
      <PaperCrumpleOverlay />
      <div 
        className="w-full min-h-screen origin-top hardware-accelerated will-change-transform"
        style={{ willChange: "transform" }}
      >
        {children}
      </div>
    </>
  );
}
