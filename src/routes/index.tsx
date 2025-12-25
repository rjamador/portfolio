import { createFileRoute } from '@tanstack/react-router'
import About from '../features/about'
import PageTransition from '../core/components/page-transition'

export const Route = createFileRoute('/')({
  component: Index
})

function Index(): React.JSX.Element {
  return (
    <PageTransition>
      <About />
    </PageTransition>
  )
}