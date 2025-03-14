import { Achievement } from "../../../models/experience.model";
import { Data } from "../../../core/models/data.model";

export function fetchExperience(): Promise<Data<Achievement>> {
  return fetch('/public/data/achievements.json').then((response: Response) => response.json())
}