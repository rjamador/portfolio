import { Language } from "../models/data.model";

export default function useTranslation(language: Language, translations: Record<string, any>) {
  return (key: string) => translations[language][key]
}