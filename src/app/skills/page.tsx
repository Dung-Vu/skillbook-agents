import type { Metadata } from "next";
import { Suspense } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SkillCatalogClient } from "@/components/catalog/SkillCatalogClient";
import { getAllSkills, getSkillCountByCategory } from "@/lib/skills";

export const metadata: Metadata = {
  title: "Skills Catalog",
  description:
    "Khám phá bộ sưu tập skills chất lượng cho AI agents — được phân loại, kiểm chứng, và giải thích chi tiết.",
};

export default function SkillsCatalogPage(): React.ReactElement {
  const skills = getAllSkills();
  const categoryCountMap = getSkillCountByCategory();

  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1} className="outline-none">
        <Suspense fallback={
          <div className="min-h-screen pt-24 flex items-center justify-center bg-[#f4f6fc]">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
          </div>
        }>
          <SkillCatalogClient
            skills={skills}
            categoryCountMap={categoryCountMap}
          />
        </Suspense>
      </main>
      <Footer isLight={true} />
    </>
  );
}
