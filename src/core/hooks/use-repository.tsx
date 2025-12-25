import { useQuery } from "@tanstack/react-query"
import { GITHUB_NICKNAME, RepositoryDto } from "@/modules/projects/models/github.model"
import { fetchRepositories, filteredRepositories } from "@/modules/projects"

export const useRepository = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['repositories'],
    queryFn: async (): Promise<RepositoryDto[]> => {
      const response: RepositoryDto[] = await fetchRepositories(GITHUB_NICKNAME)
      return response
        .filter((repository: RepositoryDto) => filteredRepositories.includes(repository.name))
        .map((repository: RepositoryDto) => {
          if (repository.language === 'Visual Basic .NET') {
            return {
              ...repository,
              language: 'VB.NET'
            }
          }
          return repository
        })
    },
    retry: 2
  })

  return {
    data, isLoading
  }
}