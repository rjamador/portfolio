import { useState, type PropsWithChildren } from "react";
import type React from "react";
import { LanguageContext } from "../contexts/language.context";

export default function LanguageProvider({ children }: PropsWithChildren): React.JSX.Element {

  const [language, setLanguage] = useState<string>('es')

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}