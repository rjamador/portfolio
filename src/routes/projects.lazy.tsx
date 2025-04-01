import { createLazyFileRoute } from '@tanstack/react-router'
import { lazy, Suspense } from 'react'
import { Data, Language } from '../core/models/data.model'
import { Project } from '../models/project.model'
import { useLanguage } from '../core/contexts/language.context'
import { useQuery } from '@tanstack/react-query'
import Loading from '../components/loading'

async function fetchProjects(language: Language): Promise<Project[]> {
  const response = await fetch('/data/projects.json')
  const json: Data<Project[]> = await response.json()
  return json.data[language]
}

const LazyProjects = lazy(() => import('../features/projects/projects'))

export const Route = createLazyFileRoute('/projects')({
  component: RouteComponent
})

function RouteComponent(): React.JSX.Element {
  const { language, isSpanish } = useLanguage()

  const { data } = useQuery({
    queryKey: ['projects', language],
    queryFn: (): Promise<Project[]> => fetchProjects(language)
  })

  return (
    <Suspense fallback={<Loading />}>
      <LazyProjects data={data} isSpanish={isSpanish} />
    </Suspense>
  )
}