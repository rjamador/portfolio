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
    <div className="my-auto">
      <section className="w-full flex gap-6 items-center flex-wrap max-md:gap-2 my-4">
        <article className="flex flex-col justify-center">
          <div>
            <p className="text-xl md:text-2xl lg:text-3xl font-semibold">
              {repositories?.reduce((acc, repository) => acc + repository.stargazers_count, 0)}
            </p>
          </div>

          <div className="flex gap-2 items-center">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" aria-hidden="true" />
            <p className="text-xs md:text-sm lg:text-base text-muted-foreground">
              {isSpanish ? 'Estrellas' : 'Total stars'}
            </p>
          </div>
        </article>

        <article className="flex flex-col justify-center">
          <div>
            <p className="text-xl md:text-2xl lg:text-3xl font-semibold">
              {repositories?.reduce((acc, repository) => acc + repository.forks_count, 0)}
            </p>
          </div>

          <div className="flex gap-2 items-center">
            <Fork className="w-4 h-4 fill-blue-400" aria-hidden="true" />
            <p className="text-xs md:text-sm lg:text-base text-muted-foreground">
              {isSpanish ? 'Forks' : 'Total forks'}
            </p>
          </div>
        </article>

        <article>
          <div>
            <p className="text-xl md:text-2xl lg:text-3xl font-semibold">
              {repositories?.length}
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <GitRepository className="w-4 h-4 fill-emerald-400 text-emerald-400" aria-hidden="true" />
            <p className="text-xs md:text-sm lg:text-base text-muted-foreground">
              {isSpanish ? 'Repositorios' : 'Repositories'}
            </p>
          </div>
        </article>
      </section>

      <div className="my-6">
        <Separator />
      </div>

      {isLoading ? (
        <div className="h-[50vh] w-full flex items-center justify-center">
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