import type { Metadata } from "next";
import { AboutClient } from "@/components/about/AboutClient";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Giới thiệu | Skillbook Agents",
  description: "Khám phá sứ mệnh và giải pháp của hệ thống bách khoa toàn thư kỹ năng dành cho các AI Agent tự hành.",
};

export default function AboutPage(): React.ReactElement {
  return (
    <>
      <Header />
      <AboutClient />
      <Footer isLight={true} />
    </>
  );
}
