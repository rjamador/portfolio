import { createFileRoute } from '@tanstack/react-router'
import { lazy, Suspense } from 'react'
import Loading from '../components/loading'

export const Route = createFileRoute('/')({
  component: Index,
})

const LazyAbout = lazy(() => import('../features/about'))

function Index(): React.JSX.Element {
  return (
    <Suspense fallback={<Loading />}>
      <LazyAbout />
    </Suspense>
  )
}