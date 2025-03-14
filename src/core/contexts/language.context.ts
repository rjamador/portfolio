import React, { createContext, useContext } from "react";
import { Language } from "../models/data.model";

interface LanguageContextProps {
  language: Language
  setLanguage: React.Dispatch<React.SetStateAction<Language>>
}

export const LanguageContext = createContext<LanguageContextProps>({
  language: 'es',
  setLanguage: () => { }
})

export const useLanguage = () => useContext(LanguageContext)