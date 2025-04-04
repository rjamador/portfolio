import { PropsWithChildren, useState } from "react";
import { RepositoryDto } from "../models/github.model";
import { RepositoryContext } from "../context/repositories.context";

export function RepositoryProvider({ children }: PropsWithChildren): React.JSX.Element {
  const [repositories, setRepositories] = useState<RepositoryDto[] | undefined>([])

  return (
    <RepositoryContext.Provider value={{ repositories, setRepositories }}>
      {children}
    </RepositoryContext.Provider>
  )
}