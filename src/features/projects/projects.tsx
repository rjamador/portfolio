import { Project } from "../../models/project.model";
import Card from "../../components/card";
import { ChevronDown, ChevronUp, Github } from "../../assets/icons";

interface ProjectsProps {
  data: Project[] | undefined
  isSpanish: boolean
}

export default function Projects({ data, isSpanish }: ProjectsProps): React.JSX.Element {
  const cardHeader = (project: Project) => {
    return (isOpen: boolean): React.ReactNode => (
      <div className="flex items-center justify-between">
        {/* <img className="h-20 w-20" src={project.imagePath} alt={project.name} /> */}
        <div className="flex gap-2 items-center">
          <h2 className="text-[1.75rem] font-bold">{project.name}</h2>
          {isOpen ? <ChevronUp className="size-5" /> : <ChevronDown className="size-5" />}
        </div>
      </div>
    )
  }

  return (
    <ul className="flex flex-col gap-8">
      {data?.map((project: Project, index: number): React.JSX.Element => (
        <li key={index}>
          <Card renderHeader={cardHeader(project)}>
            <div className="mt-4">
              <div className="flex justify-between mb-2.5">
                <h3 className="text-lg">{isSpanish ? `Sobre ${project.name}` : `About ${project.name}`}</h3>
                <a
                  href={`https://github.com/Papudog/${project.name}`}
                  target="_blank"
                  onClick={(event): void => event.stopPropagation()}>
                  <Github className="cursor-pointer size-5" />
                </a>
              </div>
              <p className="text-lg text-[var(--gray)]">{project.description}</p>
            </div>
          </Card>
        </li>
      ))}
    </ul>
  )
}