import { PropsWithChildren, useState } from "react";
import { CardContext } from "../contexts/card.contex";

export default function CardProvider({ children }: PropsWithChildren): React.JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <CardContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </CardContext.Provider>
  )
}