import type { Metadata } from "next";
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
      <main>
        <SkillCatalogClient
          skills={skills}
          categoryCountMap={categoryCountMap}
        />
      </main>
      <Footer isLight={true} />
    </>
  );
}
