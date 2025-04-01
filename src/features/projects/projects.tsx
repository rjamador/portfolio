import { RepositoryDto } from "../../models/github.model";
import Box from "../../components/box";
import { Star } from "../../assets/icons/star.icon";
import { Fork } from "../../assets/icons/fork.icon";

interface ProjectsProps {
  repositories: RepositoryDto[] | undefined
}

const languageColors: Record<string, string> = {
  ['TypeScript']: '#2b7489',
  ['C#']: '#239120',
  ['Visual Basic .NET']: '#945db7',
  ['PHP']: '#4f5d95',
}

export default function Projects({ repositories }: ProjectsProps): React.JSX.Element {
  return (
    <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {repositories?.map((repository: RepositoryDto, index: number): React.JSX.Element => (
        <li key={index}>
          <Box onClick={() => window.open(repository.svn_url, '_blank')}>
            <h2>{repository.name}</h2>
            <div className="flex max-lg:flex-col-reverse gap-2 justify-between">
              <div className="flex gap-2 items-center">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: languageColors[repository.language] }} />
                <p>{repository.language}</p>
              </div>
              <div className="flex gap-2">
                <div className="flex gap-1 items-center">
                  <Star className="w-4 h-4" />
                  <p>{repository.stargazers_count}</p>
                </div>
                <div className="flex gap-1 items-center">
                  <Fork className="w-4 h-4" />
                  <p>{repository.forks_count}</p>
                </div>
              </div>
            </div>
          </Box>
        </li>
      ))}
    </ul>
  )
}