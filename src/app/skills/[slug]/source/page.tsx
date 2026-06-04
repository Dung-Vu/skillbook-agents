import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { getSkillBySlug, getSkillSourceFiles } from "@/lib/skills";
import { SourceViewerClient } from "@/components/detail/SourceViewerClient";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata(
  props: PageProps
): Promise<Metadata> {
  const { slug } = await props.params;
  const skill = getSkillBySlug(slug);
  if (!skill) return { title: "Skill Not Found" };

  return {
    title: `Mã nguồn ${skill.title} — Skillbook Agents`,
    description: `Xem chi tiết cấu trúc mã nguồn và các file script thực thi của kỹ năng ${skill.title}.`,
  };
}

export default async function SkillSourcePage(
  props: PageProps
): Promise<React.ReactElement> {
  const { slug } = await props.params;
  const skill = getSkillBySlug(slug);

  if (!skill) notFound();

  const files = getSkillSourceFiles(slug);
  
  // If no source files are available, return 404
  if (files.length === 0) {
    notFound();
  }

  return (
    <>
      <Header />
      <SourceViewerClient
        slug={slug}
        title={skill.title}
        files={files}
      />
      <Footer />
    </>
  );
}
