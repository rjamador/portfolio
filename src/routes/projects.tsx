import { createFileRoute } from '@tanstack/react-router'
import Projects from '../features/projects/projects'

export const Route = createFileRoute('/projects')({
  component: RouteComponent,
})

function RouteComponent(): React.JSX.Element {
  return <Projects />
}
