import { createContext, Dispatch, SetStateAction, useContext } from "react";
import { RepositoryDto } from "../models/github.model";

type RepositoryType = RepositoryDto[] | undefined

interface RepositoriesContextProps {
  repositories: RepositoryType
  setRepositories: Dispatch<SetStateAction<RepositoryType>>
}

export const RepositoryContext = createContext<RepositoriesContextProps>({
  repositories: [],
  setRepositories: () => { }
})

export const useRepositories = () => useContext(RepositoryContext)