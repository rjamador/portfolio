import { createFileRoute } from '@tanstack/react-router'
import Projects from '../features/projects'
import PageTransition from '../core/components/page-transition'
import { RepositoryProvider } from '../modules/projects/providers/repositories.provider'

export const Route = createFileRoute('/projects')({
  component: () => (
    <RepositoryProvider>
      <RouteComponent />
    </RepositoryProvider>
  )
})

function RouteComponent(): React.JSX.Element {
  return (
    <PageTransition>
      <Projects />
    </PageTransition>
  )
}