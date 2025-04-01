import { createLazyFileRoute } from '@tanstack/react-router'
import { lazy, Suspense } from 'react'
import { useQuery } from '@tanstack/react-query'
import Loading from '../components/loading'
import { fetchRepositories, RepositoryDto } from '../modules/github'

const filteredRepositories: string[] = ['Coinflow', 'Starpay', 'GymCheck', 'Perfumeria', 'GestorCitas']

export const Route = createLazyFileRoute('/projects')({
  component: RouteComponent
})

const LazyProjects = lazy(() => import('../features/projects'))

function RouteComponent(): React.JSX.Element {
  const { data: repositories } = useQuery({
    queryKey: ['repositories'],
    queryFn: async (): Promise<RepositoryDto[]> => {
      const response = await fetchRepositories('Papudog')
      return response.filter((repository: RepositoryDto) => filteredRepositories.includes(repository.name))
    }
  })

  return (
    <Suspense fallback={<Loading />}>
      <LazyProjects repositories={repositories} />
    </Suspense>
  )
}