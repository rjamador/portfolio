import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import Header from '../core/layout/header'
import Main from '../core/layout/main'

export const Route = createRootRoute({
  component: (): React.JSX.Element => (
    <>
      <div id="app" className="lg:max-w-screen-xl lg:px-12 min-h-screen mx-auto">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <Header />
          <Main>
            <Outlet />
          </Main>
        </div>
      </div>
      <TanStackRouterDevtools />
    </>
  ),
})