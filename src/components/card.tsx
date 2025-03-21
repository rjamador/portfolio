import { useState } from "react";

interface Props {
  renderHeader: (isOpen: boolean) => React.ReactNode
  children: React.ReactNode
}

export default function Card({ renderHeader, children }: Props): React.JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <div
      className="relative min-h-[10vh] rounded-[2px] w-full cursor-pointer"
      onClick={(): void => setIsOpen(!isOpen)}
    >
      {renderHeader(isOpen)}
      {isOpen && <>{children}</>}
    </div>
  )
}