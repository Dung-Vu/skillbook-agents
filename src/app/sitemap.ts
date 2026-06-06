import { MetadataRoute } from "next";
import { getSkillSlugs } from "@/lib/skills";

export default function sitemap(): MetadataRoute.Sitemap {
  const slugs = getSkillSlugs();
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://skillbook.agents";
  const lastMod = new Date("2026-06-03");

  const staticPages = [
    {
      url: baseUrl,
      lastModified: lastMod,
      changeFrequency: "daily" as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/skills`,
      lastModified: lastMod,
      changeFrequency: "daily" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: lastMod,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    },
  ];

  const dynamicPages = slugs.map((slug) => ({
    url: `${baseUrl}/skills/${slug}`,
    lastModified: lastMod,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...dynamicPages];
}
