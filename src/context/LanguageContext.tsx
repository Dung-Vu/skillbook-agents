"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { translations, Language, TranslationKey } from "@/lib/translations";

interface LanguageContextProps {
  language: Language;
  toggleLanguage: () => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }): React.ReactElement {
  const [language, setLanguage] = useState<Language>("vi");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("language") as Language;
      if (saved === "vi" || saved === "en") {
        setTimeout(() => {
          setLanguage(saved);
        }, 0);
      }
    }
  }, []);

  const toggleLanguage = (): void => {
    const nextLang: Language = language === "vi" ? "en" : "vi";
    setLanguage(nextLang);
    if (typeof window !== "undefined") {
      localStorage.setItem("language", nextLang);
    }
  };

  const t = (key: TranslationKey): string => {
    const dict = translations[language] || translations["vi"];
    return dict[key] || translations["vi"][key] || String(key);
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextProps {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
