import { createFileRoute } from '@tanstack/react-router'
import { useQuery } from '@tanstack/react-query'
import Loading from '../components/loading'
import { fetchRepositories, filteredRepositories, RepositoryDto } from '../modules/projects'
import Projects from '../features/projects'
import PageTransition from '../core/components/page-transition'

export const Route = createFileRoute('/projects')({
  component: RouteComponent,
  pendingComponent: () => <Loading />
})

function RouteComponent(): React.JSX.Element {
  const { data: repositories, isLoading } = useQuery({
    queryKey: ['repositories'],
    queryFn: async (): Promise<RepositoryDto[]> => {
      const response: RepositoryDto[] = await fetchRepositories('Papudog')
      return response
        .filter((repository: RepositoryDto) => filteredRepositories.includes(repository.name))
        .map((repository: RepositoryDto) => {
          if (repository.language === 'Visual Basic .NET') {
            return {
              ...repository,
              language: 'VB.NET'
            }
          }
          return repository
        })
    }
  })

  if (isLoading) { // Dos por si acaso XD
    return <Loading />
  }

  return (
    <PageTransition>
      <Projects repositories={repositories} />
    </PageTransition>
  )
}