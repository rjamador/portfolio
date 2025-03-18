import { useEffect, useState, type PropsWithChildren } from "react";
import type React from "react";
import { LanguageContext } from "../contexts/language.context";
import { Language } from "../models/data.model";

export default function LanguageProvider({ children }: PropsWithChildren): React.JSX.Element {

  const [language, setLanguage] = useState<Language>('es')
  const [isSpanish, setIsSpanish] = useState<boolean>(true)

  useEffect((): void => setIsSpanish(language === 'es'), [language])

  return (
    <LanguageContext.Provider value={{ language, setLanguage, isSpanish }}>
      {children}
    </LanguageContext.Provider>
  )
}