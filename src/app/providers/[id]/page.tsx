import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { getAllSkills } from "@/lib/skills";
import { ProviderDetailClient } from "@/components/provider/ProviderDetailClient";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateStaticParams(): Promise<Array<{ id: string }>> {
  return [{ id: "antigravity" }, { id: "minimax" }];
}

export async function generateMetadata(
  props: PageProps
): Promise<Metadata> {
  const { id } = await props.params;
  const validIds = ["antigravity", "minimax"];
  if (!validIds.includes(id)) {
    return { title: "Provider Not Found" };
  }

  const title = id === "antigravity" ? "Antigravity OS - AI Agent System" : "Minimax Technology - Agent Core";
  const description = id === "antigravity"
    ? "Khám phá các kỹ năng chuẩn hóa chuyên sâu cho lập trình, sinh học cấu trúc, phân tích mã nguồn từ Antigravity."
    : "Khám phá các kỹ năng điều phối, xử lý tài liệu thông minh, tích hợp chatbot từ Minimax.";

  return {
    title: `${title} | Skillbook Providers`,
    description,
  };
}

export default async function ProviderDetailPage(
  props: PageProps
): Promise<React.ReactElement> {
  const { id } = await props.params;
  const validIds = ["antigravity", "minimax"];
  if (!validIds.includes(id)) {
    notFound();
  }

  const allSkills = getAllSkills();
  const providerSkills = allSkills.filter((s) => s.provider === id);

  return (
    <>
      <Header />
      <main>
        <ProviderDetailClient providerId={id} skills={providerSkills} />
      </main>
      <Footer isLight={true} />
    </>
  );
}
