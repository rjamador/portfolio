import { PropsWithChildren } from "react";

export default function Main({ children }: PropsWithChildren): React.JSX.Element {
  return (
    <main className="lg:w-full min-h-screen">
      {children}
    </main>
  )
}