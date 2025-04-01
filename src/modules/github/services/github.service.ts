import { Repository, RepositoryDto } from "../models/github.model";

const GITHUB_API_BASE_URL = 'https://api.github.com'

export async function fetchRepositories(username: string): Promise<RepositoryDto[]> {
  try {
    const response = await fetch(`${GITHUB_API_BASE_URL}/users/${username}/repos?sort=updated&per_page=100`)
    const repositories: Repository[] = await response.json()

    return repositories.map((repository: Repository): RepositoryDto => ({
      id: repository.id,
      name: repository.name,
      svn_url: repository.svn_url,
      language: repository.language,
      stargazers_count: repository.stargazers_count,
      forks_count: repository.forks_count,
    }))
  } catch (error) {
    console.error(error)
    throw error
  }
}