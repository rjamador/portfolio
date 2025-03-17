import { createFileRoute } from '@tanstack/react-router'
import Experience from '../features/experience/experience'

export const Route = createFileRoute('/experience')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <Experience />
  )
}
