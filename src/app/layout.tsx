import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { LanguageProvider } from "@/context/LanguageContext";
import { CommandPalette } from "@/components/ui/CommandPalette";

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
        <LanguageProvider>
          <SmoothScroll>
            {children}
            <CommandPalette />
          </SmoothScroll>
        </LanguageProvider>
      </body>
    </html>
  );
}
