export default function Card({ children }: React.PropsWithChildren): React.JSX.Element {
  return (
    // bg-var[(--subtle-transparent)] blur-xs shadow (activo)
    <div className="relative min-h-[10vh] rounded-[2px]">
      <div className="flex items-center justify-center">
        {children}
      </div>
    </div>
  )
}