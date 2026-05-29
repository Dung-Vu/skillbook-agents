import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Calendar,
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import {
  getSkillBySlug,
  getSkillSlugs,
  getRelatedSkills,
  getAllSkills,
} from "@/lib/skills";
import { CATEGORIES } from "@/lib/categories";
import {
  COMPLEXITY_CONFIG,
  PLATFORM_CONFIG,
  PlatformId,
} from "@/types/skill";
import { formatDate } from "@/lib/utils";
import { SkillDetailClient } from "@/components/detail/SkillDetailClient";

export async function generateStaticParams(): Promise<Array<{ slug: string }>> {
  return getSkillSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata(
  props: PageProps<"/skills/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const skill = getSkillBySlug(slug);
  if (!skill) return { title: "Skill Not Found" };

  return {
    title: skill.seoTitle || skill.title,
    description: skill.seoDescription || skill.description,
  };
}

export default async function SkillDetailPage(
  props: PageProps<"/skills/[slug]">
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
      <main className="min-h-screen pt-24 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-[var(--color-text-muted)] mb-8 flex-wrap">
            <Link
              href="/skills"
              className="hover:text-[var(--color-accent-primary)] no-underline transition-colors"
            >
              Skills
            </Link>
            <span>/</span>
            {category && (
              <>
                <span>
                  {category.icon} {category.label}
                </span>
                <span>/</span>
              </>
            )}
            <span className="text-[var(--color-text-primary)] font-medium">
              {skill.command}
            </span>
          </nav>

          {/* Skill Header */}
          <div className="mb-12">
            <div className="flex items-start justify-between flex-wrap gap-4 mb-4">
              <h1
                className="text-3xl md:text-4xl font-extrabold tracking-tight"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                <span className="text-[var(--color-accent-primary)]">
                  {skill.command}
                </span>
              </h1>
              <span
                className="text-sm font-medium px-3 py-1 rounded-full"
                style={{
                  color: COMPLEXITY_CONFIG[skill.complexity].color,
                  background: `${COMPLEXITY_CONFIG[skill.complexity].color}15`,
                  border: `1px solid ${COMPLEXITY_CONFIG[skill.complexity].color}30`,
                }}
              >
                {COMPLEXITY_CONFIG[skill.complexity].dot}{" "}
                {COMPLEXITY_CONFIG[skill.complexity].label}
              </span>
            </div>

            {category && (
              <p className="text-sm text-[var(--color-text-muted)] mb-4 flex items-center gap-2">
                <span>{category.icon}</span>
                {category.label}
              </p>
            )}

            <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed mb-6">
              {skill.description}
            </p>

            {/* Platform Tags */}
            <div className="flex items-center gap-2 flex-wrap mb-6">
              {skill.platforms.map((p) => (
                <span
                  key={p}
                  className="chip text-xs"
                  style={{
                    borderColor: `${PLATFORM_CONFIG[p as PlatformId]?.color || "#666"}30`,
                    color:
                      PLATFORM_CONFIG[p as PlatformId]?.color || "#999",
                  }}
                >
                  {PLATFORM_CONFIG[p as PlatformId]?.label || p}
                </span>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3 flex-wrap">
              {skill.sourceUrl && (
                <a
                  href={skill.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-xs"
                >
                  <ExternalLink size={14} />
                  View Source
                </a>
              )}
              <div className="flex items-center gap-2 text-xs text-[var(--color-text-muted)]">
                <Calendar size={12} />
                Last verified: {formatDate(skill.lastVerified)}
              </div>
            </div>
          </div>

          {/* Content */}
          <SkillDetailClient content={skill.content} platforms={skill.platforms} />

          {/* Related Skills */}
          {relatedSkills.length > 0 && (
            <div className="mt-16 pt-8 border-t border-[var(--color-border)]">
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                🔗 Skills Liên Quan
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {relatedSkills.map((rs) => (
                  <Link
                    key={rs.slug}
                    href={`/skills/${rs.slug}`}
                    className="skill-card"
                    id={`related-${rs.slug}`}
                  >
                    <span className="skill-card__command">{rs.command}</span>
                    <p className="skill-card__description">{rs.description}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Prev / Next Navigation */}
          <div className="mt-16 pt-8 border-t border-[var(--color-border)] grid grid-cols-2 gap-4">
            {prevSkill ? (
              <Link
                href={`/skills/${prevSkill.slug}`}
                className="glass-card p-4 no-underline group"
              >
                <span className="text-xs text-[var(--color-text-muted)] flex items-center gap-1 mb-1">
                  <ArrowLeft size={12} /> Previous
                </span>
                <span className="text-sm font-semibold text-[var(--color-accent-primary)] group-hover:underline">
                  {prevSkill.command}
                </span>
              </Link>
            ) : (
              <div />
            )}
            {nextSkill ? (
              <Link
                href={`/skills/${nextSkill.slug}`}
                className="glass-card p-4 no-underline text-right group"
              >
                <span className="text-xs text-[var(--color-text-muted)] flex items-center justify-end gap-1 mb-1">
                  Next <ArrowRight size={12} />
                </span>
                <span className="text-sm font-semibold text-[var(--color-accent-primary)] group-hover:underline">
                  {nextSkill.command}
                </span>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
