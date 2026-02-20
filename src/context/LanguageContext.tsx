import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import translations, { type Language, type Translations } from "../i18n";

interface LanguageContextType {
  language: Language;
  t: Translations;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem("portfolio-lang");
    return (saved === "fr" || saved === "en") ? saved : "en";
  });

  const setLanguage = useCallback((lang: Language) => {
    localStorage.setItem("portfolio-lang", lang);
    setLang(lang);
  }, []);

  return (
    <LanguageContext.Provider value={{ language, t: translations[language], setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
}
