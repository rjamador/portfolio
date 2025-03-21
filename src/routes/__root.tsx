import { createRootRoute, Outlet, useLocation } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import Header from '../core/layout/header'
import Main from '../core/layout/main'
import { motion } from "motion/react"

export const Route = createRootRoute({
  component: (): React.JSX.Element => Layout()
})

function Layout(): React.JSX.Element {
  const location = useLocation()

  return (
    <>
      <div id="app" className="lg:max-w-[80vw] lg:px-8 max-lg:py-4 max-w-[90vw] min-h-screen mx-auto">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <Header />
          <Main>
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: -20 }}
              exit={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              <Outlet />
            </motion.div>
          </Main>
        </div>
      </div>
      <TanStackRouterDevtools />
    </>
  )
}