import { createFileRoute } from '@tanstack/react-router'
import { useLanguage } from '../core/contexts/language.context'
import { useQuery } from '@tanstack/react-query'
import { fetchExperience } from '../modules/experience'
import type { Experience as ExperienceType } from '../modules/experience'
import Experience from '../features/experience'
import PageTransition from '../core/components/page-transition'

export const Route = createFileRoute('/experience')({
  component: RouteComponent
})

function RouteComponent(): React.JSX.Element {
  const { language, isSpanish } = useLanguage()

  const { data } = useQuery({
    queryKey: ['experience', language],
    queryFn: (): Promise<ExperienceType[]> => fetchExperience(language)
  })

  return (
    <PageTransition>
      <Experience data={data} isSpanish={isSpanish} />
    </PageTransition>
  )
}