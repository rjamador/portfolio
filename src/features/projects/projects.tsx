import { useQuery } from "@tanstack/react-query";
import { useLanguage } from "../../core/contexts/language.context";
import { Project } from "../../models/project.model";
import { Data, Language } from "../../core/models/data.model";
import Card from "../../components/card";

const imageMapping: Record<string, string> = {
  ['Starpay']: '/webp/starpay.webp',
  ['Coinflow']: '/webp/coinflow.webp'
}

function fetchProjects(language: Language): Promise<Project[]> {
  return fetch('/data/projects.json')
    .then((response: Response) => response.json())
    .then((json: Data<Project[]>) => json.data[language].map((project): Project =>
      ({ ...project, imagePath: imageMapping[project.name] })
    ))
}

export default function Projects(): React.JSX.Element {
  const { language, isSpanish } = useLanguage()

  const { data } = useQuery({
    queryKey: ['projects', language],
    queryFn: () => fetchProjects(language)
  })

  return (
    <ul>
      {data?.map((project: Project, index: number): React.JSX.Element => (
        <li key={index}>
          <Card>
            <div className="flex justify-between">
              <img src={project.imagePath} alt={project.name} />
              <h2>{project.name}</h2>
            </div>
          </Card>
        </li>
      ))}
    </ul>
  )
}