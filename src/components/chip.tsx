export default function Chip({ children }: React.PropsWithChildren): React.JSX.Element {
  return (
    <div className="py-[3px] px-[7px] bg-[var(--chip-background)] text-[var(--accent)] rounded-2xl">
      <div className="flex items-center">
        {children}
      </div>
    </div>
  )
}