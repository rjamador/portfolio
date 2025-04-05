import React from "react";
import { useLanguage } from "../contexts/language.context";

export default function LanguageSwitch(): React.JSX.Element {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex">
      <span
        className={`relative cursor-pointer text-lg md:text-xl transition-all duration-300
          ${language === 'es'
            ? 'after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-full after:h-[2px] after:bg-[var(--accent)] after:transition-all after:duration-300'
            : 'after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[2px] after:bg-[var(--accent)] after:transition-all after:duration-300'
          }`}
        onClick={(): void => setLanguage('es')}
      >
        ES
      </span>

      <div className="border border-solid border-white mx-[6px]"></div>

      <span
        className={`relative cursor-pointer text-lg md:text-xl transition-all duration-300
          ${language === 'en'
            ? 'after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-full after:h-[2px] after:bg-[var(--accent)] after:transition-all after:duration-300'
            : 'after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[2px] after:bg-[var(--accent)] after:transition-all after:duration-300'
          }`}
        onClick={(): void => setLanguage('en')}
      >
        EN
      </span>
    </div>
  )
}