import { useLanguage } from "../../core/contexts/language.context"
import { Experience as IExperience } from "../../models/experience.model"
import { Data, Language } from "../../core/models/data.model"
import { useQuery } from "@tanstack/react-query"
import Chip from "../../components/chip"

function fetchExperience(language: Language): Promise<IExperience[]> {
  return fetch('/data/experience.json')
    .then((response: Response) => response.json())
    .then((json: Data<IExperience[]>) => json.data[language])
}

export default function Experience(): React.JSX.Element {
  const { isSpanish, language } = useLanguage()

  const { data } = useQuery({
    queryKey: ['experience', language],
    queryFn: (): Promise<IExperience[]> => fetchExperience(language)
  })

  // Poner un cargando tal vez

  return (
    <>
      <ul className="flex flex-col gap-4">
        {data?.map((experience: IExperience): React.JSX.Element => ((
          <li key={experience.place} className="lg:grid lg:grid-cols-4 flex max-lg:flex-col">
            <div className="lg:col-span-1">
              <span className="text-sm text-[var(--gray)]">{`${experience.startDate} - ${experience.endDate ?? (isSpanish ? 'Presente' : 'Present')}`}</span>
            </div>
            <div className="lg:col-start-2 lg:col-span-3 flex flex-col">
              <div className="mb-4">
                <h2 className="text-lg">{experience.place}</h2>
                <h3 className="text-sm text-[var(--gray)]">{experience.position}</h3>
              </div>
              <p>{experience.description}</p>

              <ul className="flex flex-wrap gap-2 mt-3.5">
                {experience.stack.map((stack: string): React.JSX.Element => (
                  <li key={stack}>
                    <Chip>
                      <span className="text-sm">{stack}</span>
                    </Chip>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        )))}
      </ul>
    </>
  )
}