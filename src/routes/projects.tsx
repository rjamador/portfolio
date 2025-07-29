import { createFileRoute } from '@tanstack/react-router'
import { useQuery } from '@tanstack/react-query'
import Loading from '../components/loading'
import { fetchRepositories, filteredRepositories, RepositoryDto, useRepositories } from '../modules/projects'
import Projects from '../features/projects'
import PageTransition from '../core/components/page-transition'
import { RepositoryProvider } from '../modules/projects/providers/repositories.provider'
import { useEffect } from 'react'
import { GITHUB_NICKNAME } from '../modules/projects/models/github.model'

export const Route = createFileRoute('/projects')({
  component: () => (
    <RepositoryProvider>
      <RouteComponent />
    </RepositoryProvider>
  ),
  pendingComponent: () => <Loading />
})

function RouteComponent(): React.JSX.Element {
  const { setRepositories } = useRepositories()

  const { data: repositories, isLoading } = useQuery({
    queryKey: ['repositories'],
    queryFn: async (): Promise<RepositoryDto[]> => {
      const response: RepositoryDto[] = await fetchRepositories(GITHUB_NICKNAME)
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

  useEffect((): void => {
    if (repositories) {
      setRepositories(repositories)
    }
  }, [repositories, setRepositories])

  if (isLoading) {
    return <Loading />
  }

  return (
    <PageTransition>
      <Projects />
    </PageTransition>
  )
}