interface BoxProps extends React.PropsWithChildren {
  onClick?: () => void
}

export default function Box({ children, onClick }: BoxProps) {
  return (
    <div onClick={onClick} className="relative cursor-pointer py-2 px-4 rounded-md border border-[var(--medium)] shadow-[0_0_5px_1px_rgba(26,26,63,0.4)] transition-all duration-300 hover:shadow-[0_0_10px_2px_rgba(26,26,63,0.7)]">
      {children}
    </div>
  )
}