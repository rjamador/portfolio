import { createLazyFileRoute } from '@tanstack/react-router'
import { Experience as IExperience } from "../models/experience.model"
import { Data, Language } from '../core/models/data.model'
import { useLanguage } from '../core/contexts/language.context'
import { useQuery } from '@tanstack/react-query'
import { lazy, Suspense } from 'react'
import Loading from '../components/loading'

async function fetchExperience(language: Language): Promise<IExperience[]> {
  const response = await fetch('/data/experience.json')
  const json: Data<IExperience[]> = await response.json()
  return json.data[language]
}

const LazyExperience = lazy(() => import('../features/experience/experience'))

export const Route = createLazyFileRoute('/experience')({
  component: RouteComponent
})

function RouteComponent(): React.JSX.Element {
  const { language, isSpanish } = useLanguage()

  const { data } = useQuery({
    queryKey: ['experience', language],
    queryFn: (): Promise<IExperience[]> => fetchExperience(language)
  })

  return (
    <Suspense fallback={<Loading />}>
      <LazyExperience data={data} isSpanish={isSpanish} />
    </Suspense>
  )
}
