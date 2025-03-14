import React, { createContext, useContext } from "react";

interface LanguageContextProps {
  language: string
  setLanguage: React.Dispatch<React.SetStateAction<string>>
}

export const LanguageContext = createContext<LanguageContextProps>({
  language: '',
  setLanguage: () => { }
})

export const useLanguage = () => useContext(LanguageContext)