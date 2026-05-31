import type { Metadata } from "next";
import { getAllSkills } from "@/lib/skills";
import { ChangelogClient } from "@/components/changelog/ChangelogClient";

export const metadata: Metadata = {
  title: "Lịch sử cập nhật (Changelog) | Skillbook Agents",
  description: "Dòng thời gian phát triển hệ thống và lịch sử cập nhật, xác minh các kỹ năng AI Agent động.",
};

export default function ChangelogPage(): React.ReactElement {
  const skills = getAllSkills();
  
  return <ChangelogClient skills={skills} />;
}
