import React from "react";
import { useLanguage } from "../contexts/language.context";

export default function LanguageSwitch(): React.JSX.Element {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex">
      {/* Colocar alguna transicion */}
      <span className={`relative cursor-pointer 
        ${language === 'es'
          ? 'after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[var(--accent)]'
          : ''}`
      } onClick={(): void => setLanguage('es')}>ES</span>
      <div className="border border-solid border-white mx-[6px]"></div>
      <span className={`relative cursor-pointer
        ${language === 'en'
          ? 'after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[var(--accent)]'
          : ''}`
      } onClick={(): void => setLanguage('en')}>EN</span>
    </div>
  )
}