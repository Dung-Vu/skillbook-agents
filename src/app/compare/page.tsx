import type { Metadata } from "next";
import { Suspense } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { getAllSkills } from "@/lib/skills";
import { SkillCompareClient } from "@/components/compare/SkillCompareClient";

export const metadata: Metadata = {
  title: "So sánh Nhà cung cấp | Skillbook Agents",
  description: "So sánh trực quan các tính năng, hiệu năng và cấu trúc lệnh giữa hai nhà cung cấp Antigravity và Minimax.",
};

export default function ComparePage(): React.ReactElement {
  const skills = getAllSkills();

  return (
    <>
      <Header />
      <main>
        <Suspense fallback={
          <div className="min-h-screen pt-24 flex items-center justify-center bg-[#f4f6fc]">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
          </div>
        }>
          <SkillCompareClient skills={skills} />
        </Suspense>
      </main>
      <Footer isLight={true} />
    </>
  );
}
