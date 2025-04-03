import { createLazyFileRoute } from '@tanstack/react-router'
import { lazy, Suspense } from 'react'
import { useQuery } from '@tanstack/react-query'
import Loading from '../components/loading'
import { fetchRepositories, RepositoryDto } from '../modules/github'

export const Route = createLazyFileRoute('/projects')({
  component: RouteComponent
})

const LazyProjects = lazy(() => import('../features/projects'))
const filteredRepositories: string[] = ['Coinflow', 'Starpay', 'GymCheck', 'Perfumeria', 'GestorCitas', 'portfolio', 'Programatic', 'ClinicaAsp']

function RouteComponent(): React.JSX.Element {
  const { data: repositories } = useQuery({
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

  return (
    <Suspense fallback={<Loading />}>
      <LazyProjects repositories={repositories} />
    </Suspense>
  )
}