import { Separator } from "@/components/ui/separator";
import { Fork, GitRepository, Star } from "../assets/icons";
import { useLanguage } from "../core/contexts/language.context";
import { ProjectList } from "../modules/projects";
import { useRepository } from "@/core/hooks/use-repository";
import { Spinner } from "@/components/ui/spinner";

export default function Projects(): React.JSX.Element {
  const { isSpanish } = useLanguage()
  const { data: repositories, isLoading } = useRepository()

  return (
    <div className="flex flex-col min-h-[70vh]">
      <section className="w-full grid grid-cols-3 gap-2 md:gap-8 my-6">
        <article className="flex flex-col gap-1">
          <div>
            <p className="text-xl md:text-2xl lg:text-3xl font-semibold">
              {isLoading || !repositories ? '-' : repositories.reduce((acc, repository) => acc + repository.stargazers_count, 0)}
            </p>
          </div>

          <div className="flex gap-2 items-center">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" aria-hidden="true" />
            <p className="text-xs md:text-sm lg:text-base text-muted-foreground truncate">
              {isSpanish ? 'Estrellas' : 'Total stars'}
            </p>
          </div>
        </article>

        <article className="flex flex-col gap-1">
          <div>
            <p className="text-xl md:text-2xl lg:text-3xl font-semibold">
              {isLoading || !repositories ? '-' : repositories.reduce((acc, repository) => acc + repository.forks_count, 0)}
            </p>
          </div>

          <div className="flex gap-2 items-center">
            <Fork className="w-4 h-4 fill-blue-400" aria-hidden="true" />
            <p className="text-xs md:text-sm lg:text-base text-muted-foreground truncate">
              {isSpanish ? 'Forks' : 'Total forks'}
            </p>
          </div>
        </article>

        <article className="flex flex-col gap-1">
          <div>
            <p className="text-xl md:text-2xl lg:text-3xl font-semibold">
              {isLoading || !repositories ? '-' : repositories.length}
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <GitRepository className="w-4 h-4 fill-emerald-400 text-emerald-400" aria-hidden="true" />
            <p className="text-xs md:text-sm lg:text-base text-muted-foreground truncate">
              {isSpanish ? 'Repositorios' : 'Repositories'}
            </p>
          </div>
        </article>
      </section>

      <div className="mb-6">
        <Separator />
      </div>

      {isLoading ? (
        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="flex flex-col items-center gap-2">
            <Spinner className="size-12" />
            <p className="text-muted-foreground text-sm">Cargando proyectos...</p>
          </div>
        </div>
      ) : (
        <ProjectList repositories={repositories} />
      )}
    </div>
  )
}