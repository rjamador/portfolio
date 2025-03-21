import { createContext, Dispatch, SetStateAction, useContext } from "react"

interface CardContextProps {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

export const CardContext = createContext<CardContextProps>({
  isOpen: false,
  setIsOpen: () => { }
})

export const useCard = () => useContext(CardContext)