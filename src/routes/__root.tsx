import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import Header from '../core/layout/header'
import Main from '../core/layout/main'

export const Route = createRootRoute({
  component: (): React.JSX.Element => Layout()
})

function Layout(): React.JSX.Element {
  return (
    <>
      <div id="app" className="lg:max-w-[80vw] lg:px-8 max-lg:py-4 max-w-[90vw] min-h-screen mx-auto">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <Header />
          <hr className="lg:hidden max-lg:my-8 h-[1px] rounded-full bg-muted opacity-30"></hr>
          <Main>
            <Outlet />
          </Main>
        </div>
      </div>
      <TanStackRouterDevtools />
    </>
  )
}