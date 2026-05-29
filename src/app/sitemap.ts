import { MetadataRoute } from "next";
import { getSkillSlugs } from "@/lib/skills";

export default function sitemap(): MetadataRoute.Sitemap {
  const slugs = getSkillSlugs();
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://skillbook.agents";

  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/skills`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/changelog`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 0.6,
    },
  ];

  const dynamicPages = slugs.map((slug) => ({
    url: `${baseUrl}/skills/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...dynamicPages];
}
