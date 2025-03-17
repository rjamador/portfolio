export default function Box({ children }: React.PropsWithChildren) {
  return (
    <div className="p-4 rounded-md shadow-md border border-[var(--border-color)]">
      {children}
    </div>
  )
}