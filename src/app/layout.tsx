import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { LanguageProvider } from "@/context/LanguageContext";
import { RouteFocusManager } from "@/components/layout/RouteFocusManager";

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: {
    default: "Skillbook Agents — Bách Khoa Toàn Thư về Skills cho AI Agents",
    template: "%s | Skillbook Agents",
  },
  description:
    "Bộ sưu tập skills chất lượng cao được tuyển chọn cho AI agents. Tìm, học, và trang bị skill cho Cursor, Claude Code, Windsurf, và mọi AI coding assistant.",
  keywords: [
    "AI agent skills",
    "cursor rules",
    "claude code skills",
    "MCP",
    "prompt engineering",
    "AI coding assistant",
  ],
  authors: [{ name: "Skillbook Agents" }],
  openGraph: {
    type: "website",
    locale: "vi_VN",
    siteName: "Skillbook Agents",
    title: "Skillbook Agents — Bách Khoa Toàn Thư về Skills cho AI Agents",
    description:
      "Bộ sưu tập skills chất lượng cao được tuyển chọn cho AI agents.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className={`${inter.variable} ${jetbrainsMono.variable}`} data-scroll-behavior="smooth" suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-indigo-600 focus:text-white focus:rounded-lg focus:shadow-lg focus:outline-none">
          Bỏ qua để vào nội dung chính / Skip to content
        </a>
        <LanguageProvider>
          <RouteFocusManager />
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </LanguageProvider>
      </body>
    </html>
  );
}
