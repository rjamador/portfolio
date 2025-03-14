import { createFileRoute } from '@tanstack/react-router'
import About from '../features/about/about'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index(): React.JSX.Element {
  return (
    <About />
  )
}