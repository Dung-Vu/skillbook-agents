import { NextResponse } from "next/server";
import { getAllSkills } from "@/lib/skills";

export async function GET(): Promise<NextResponse> {
  try {
    const skills = getAllSkills();
    const searchData = skills.map((s) => ({
      slug: s.slug,
      title: s.title,
      command: s.command,
      category: s.category,
      tags: s.tags,
      description: s.description,
      oneLiner: s.oneLiner,
      featured: s.featured,
      en: s.en ? {
        title: s.en.title,
        description: s.en.description,
        oneLiner: s.en.oneLiner,
      } : undefined,
    }));

    return NextResponse.json(searchData, {
      headers: {
        "Cache-Control": "public, max-age=3600, s-maxage=3600",
      },
    });
  } catch (error) {
    console.error("Failed to fetch skills search data:", error);
    return NextResponse.json(
      { error: "Failed to fetch skills data" },
      { status: 500 }
    );
  }
}
