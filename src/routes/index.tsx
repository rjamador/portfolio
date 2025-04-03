import { createFileRoute } from '@tanstack/react-router'
import Loading from '../components/loading'
import About from '../features/about'
import PageTransition from '../core/components/page-transition'

export const Route = createFileRoute('/')({
  component: Index,
  pendingComponent: () => <Loading />
})

function Index(): React.JSX.Element {
  return (
    <PageTransition>
      <About />
    </PageTransition>
  )
}