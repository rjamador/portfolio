import { useState, type PropsWithChildren } from "react";
import type React from "react";
import { LanguageContext } from "../contexts/language.context";
import { Language } from "../models/data.model";

export default function LanguageProvider({ children }: PropsWithChildren): React.JSX.Element {

  const [language, setLanguage] = useState<Language>('es')

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}