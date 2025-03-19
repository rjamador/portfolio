export default function Box({ children }: React.PropsWithChildren) {
  return (
    <div className="py-2 px-4 rounded-md shadow-md border border-[var(--subtle-transparent)]">
      {children}
    </div>
  )
}