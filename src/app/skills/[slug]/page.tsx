import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import {
  getSkillBySlug,
  getSkillSlugs,
  getRelatedSkills,
  getAllSkills,
} from "@/lib/skills";
import { CATEGORIES } from "@/lib/categories";
import { PLATFORM_CONFIG, PlatformId } from "@/types/skill";
import { SkillDetailClient } from "@/components/detail/SkillDetailClient";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams(): Promise<Array<{ slug: string }>> {
  return getSkillSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata(
  props: PageProps
): Promise<Metadata> {
  const { slug } = await props.params;
  const skill = getSkillBySlug(slug);
  if (!skill) return { title: "Skill Not Found" };

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://skillbook.agents";
  const title = skill.seoTitle || skill.title;
  const description = skill.seoDescription || skill.description;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${baseUrl}/skills/${skill.slug}`,
      type: "article",
      locale: "vi_VN",
      siteName: "Skillbook Agents",
      images: [
        {
          url: `${baseUrl}/images/og-skills-generic.jpg`,
          width: 1200,
          height: 630,
          alt: skill.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${baseUrl}/images/og-skills-generic.jpg`],
    },
  };
}

export default async function SkillDetailPage(
  props: PageProps
): Promise<React.ReactElement> {
  const { slug } = await props.params;
  const skill = getSkillBySlug(slug);

  if (!skill) notFound();

  const category = CATEGORIES[skill.category];
  const relatedSkills = getRelatedSkills(skill);
  const allSkills = getAllSkills();
  const currentIndex = allSkills.findIndex((s) => s.slug === skill.slug);
  const prevSkill = currentIndex > 0 ? allSkills[currentIndex - 1] : null;
  const nextSkill =
    currentIndex < allSkills.length - 1 ? allSkills[currentIndex + 1] : null;

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://skillbook.agents";
  const skillUrl = `${baseUrl}/skills/${skill.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "@id": `${skillUrl}#application`,
        "name": skill.title,
        "description": skill.description,
        "applicationCategory": "DeveloperApplication",
        "operatingSystem": "All",
        "downloadUrl": skill.command.startsWith("/") ? skill.command : `/${skill.command}`,
        "featureList": skill.tags.join(", "),
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        },
        "author": {
          "@type": "Organization",
          "name": skill.sourceAuthor || "Antigravity",
          "url": skill.sourceUrl || baseUrl
        }
      },
      {
        "@type": "HowTo",
        "@id": `${skillUrl}#howto`,
        "name": `Hướng dẫn cấu hình kỹ năng ${skill.command}`,
        "description": `Hướng dẫn chi tiết cách cấu hình và sử dụng kỹ năng ${skill.title} (${skill.command}) trên các nền tảng AI.`,
        "mainEntityOfPage": skillUrl,
        "about": {
          "@id": `${skillUrl}#application`
        },
        "totalTime": "PT5M",
        "tool": skill.platforms.map((platform) => ({
          "@type": "HowToTool",
          "name": PLATFORM_CONFIG[platform as PlatformId]?.label || platform
        })),
        "step": skill.platforms.map((platform, index) => {
          const platformLabel = PLATFORM_CONFIG[platform as PlatformId]?.label || platform;
          return {
            "@type": "HowToStep",
            "name": `Cấu hình trên ${platformLabel}`,
            "text": `Hướng dẫn chi tiết cách cấu hình và kích hoạt lệnh ${skill.command} trên nền tảng ${platformLabel} để AI Agent tối ưu hóa hiệu năng.`,
            "position": index + 1,
            "url": `${skillUrl}#${platform}`
          };
        }),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <SkillDetailClient
        slug={slug}
        skill={skill}
        category={category}
        relatedSkills={relatedSkills}
        prevSkill={prevSkill}
        nextSkill={nextSkill}
      />
      <Footer />
    </>
  );
}

