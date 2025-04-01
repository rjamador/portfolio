import { Data, Language } from "../../../core/models/data.model"
import { Experience } from "../models/experience.model"

export async function fetchExperience(language: Language): Promise<Experience[]> {
  const response: Response = await fetch('/data/experience.json')
  const json: Data<Experience[]> = await response.json()
  return json.data[language]
}