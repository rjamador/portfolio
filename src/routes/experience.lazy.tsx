import { createLazyFileRoute } from '@tanstack/react-router'
import { useLanguage } from '../core/contexts/language.context'
import { useQuery } from '@tanstack/react-query'
import { lazy, Suspense } from 'react'
import Loading from '../components/loading'
import { fetchExperience, Experience } from '../modules/experience'

export const Route = createLazyFileRoute('/experience')({
  component: RouteComponent
})

const LazyExperience = lazy(() => import('../features/experience'))

function RouteComponent(): React.JSX.Element {
  const { language, isSpanish } = useLanguage()

  const { data } = useQuery({
    queryKey: ['experience', language],
    queryFn: (): Promise<Experience[]> => fetchExperience(language)
  })

  return (
    <Suspense fallback={<Loading />}>
      <LazyExperience data={data} isSpanish={isSpanish} />
    </Suspense>
  )
}
