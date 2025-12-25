import { OpenInNew } from "../../../assets/icons/open-new.icon";
import { RepositoryDto } from "../models/github.model";
import { Fork, Star } from "../../../assets/icons";
import { Item, ItemActions, ItemFooter, ItemHeader, ItemTitle } from "@/components/ui/item";
import { Empty, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "@/components/ui/empty";
import { PackageOpen } from "lucide-react";
import { useLanguage } from "@/core/contexts/language.context";

const languageColors: Record<string, string> = {
  ['TypeScript']: '#2b7489',
  ['C#']: '#239120',
  ['VB.NET']: '#945db7',
  ['PHP']: '#4f5d95',
  ['Java']: '#e76f00'
}

const getLanguageColor = (language: string): string => {
  return languageColors[language] ?? '#ccc'
}

interface ProjectListProps {
  repositories?: RepositoryDto[]
}

export function ProjectList({ repositories = [] }: ProjectListProps): React.JSX.Element {
  const { isSpanish } = useLanguage()

  if (!repositories || repositories.length === 0) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center">
        <Empty className="border-2 border-dashed border-muted-foreground rounded-lg p-6 md:p-12">
          <EmptyMedia>
            <PackageOpen className="size-8 md:size-10 text-muted-foreground" />
          </EmptyMedia>
          <EmptyHeader>
            <EmptyTitle>{isSpanish ? 'No se encontraron proyectos' : 'No projects found'}</EmptyTitle>
            <EmptyDescription>
              {isSpanish ?
                'No se pudieron cargar los proyectos o no hay ninguno disponible en el momento.' :
                'No projects could be loaded or none are available at the moment.'}
            </EmptyDescription>
          </EmptyHeader>
        </Empty>
      </div>
    )
  }

  return (
    <section className="grid grid-cols-1 gap-4 xl:grid-cols-2">
      {repositories?.map((repository: RepositoryDto, index: number): React.JSX.Element => (
        <Item
          key={index}
          variant="outline"
          onClick={() => window.open(repository.svn_url, '_blank')}
          className="group cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 relative overflow-hidden text-card-foreground rounded-lg"
        >
          <ItemHeader>
            <ItemTitle className="text-lg lg:text-xl font-semibold group-hover:text-primary transition-colors">
              {repository.name}
            </ItemTitle>
            <ItemActions>
              <OpenInNew
                className="w-5 h-5 transition-all duration-300 fill-muted-foreground group-hover:fill-primary group-hover:scale-110"
                aria-hidden="true"
              />
            </ItemActions>
          </ItemHeader>

          <ItemFooter>
            <div className="flex gap-2 items-center">
              <div
                className="w-3 h-3 rounded-full shadow-sm"
                style={{ backgroundColor: getLanguageColor(repository.language) }}
              />
              <p className="text-sm text-muted-foreground font-medium">{repository.language}</p>
            </div>
            <div className="flex gap-4">
              <div className="flex gap-1.5 items-center">
                <Star
                  className="w-4 h-4 transition-all duration-300 fill-muted-foreground group-hover:fill-yellow-400"
                  aria-hidden="true"
                />
                <p className="text-sm text-muted-foreground group-hover:text-yellow-400 group-hover:scale-110">{repository.stargazers_count}</p>
              </div>
              <div className="flex gap-1.5 items-center">
                <Fork className="w-4 h-4 fill-muted-foreground group-hover:fill-blue-400 group-hover:scale-110" aria-hidden="true" />
                <p className="text-sm text-muted-foreground group-hover:text-blue-400 group-hover:scale-110">{repository.forks_count}</p>
              </div>
            </div>
          </ItemFooter>
        </Item>
      ))}
    </section>
  )
}