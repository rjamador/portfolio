import { useState } from "react";

interface Props {
  renderHeader: (isOpen: boolean) => React.ReactNode
  children: React.ReactNode
}

export default function Card({ renderHeader, children }: Props): React.JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <div
      className={`relative p-2 min-h-[10vh] rounded-[2px] w-full cursor-pointer hover:bg-[var(--subtle-transparent)] hover:backdrop-blur-md ${isOpen ? 'bg-[var(--subtle-transparent)]' : ''}`}
      onClick={(): void => setIsOpen(!isOpen)}
    >
      {renderHeader(isOpen)}
      <div className={`transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? "max-h-[1000px]" : "max-h-0"}`}>
        {isOpen && <>{children}</>}
      </div>
    </div>
  )
}