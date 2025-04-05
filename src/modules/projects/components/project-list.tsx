import { useState } from "react";
import { OpenInNew } from "../../../assets/icons/open-new.icon";
import Box from "../../../components/box";
import { useRepositories } from "../context/repositories.context";
import { RepositoryDto } from "../models/github.model";
import { Fork, Star } from "../../../assets/icons";

interface Hover {
  index: number
  hover: boolean
}

const languageColors: Record<string, string> = {
  ['TypeScript']: '#2b7489',
  ['C#']: '#239120',
  ['VB.NET']: '#945db7',
  ['PHP']: '#4f5d95',
  ['Java']: '#e76f00',
}

function isHoveringItem(hover: Hover, index: number): boolean {
  return hover.index === index && hover.hover
}

export function ProjectList(): React.JSX.Element {
  const { repositories } = useRepositories()
  const [hover, setHover] = useState<Hover>({ index: 0, hover: false })

  return (
    <section className="grid grid-cols-1 gap-4 xl:grid-cols-2">
      {repositories?.map((repository: RepositoryDto, index: number): React.JSX.Element => (
        <article key={index}
          onMouseEnter={(): void => setHover({ index, hover: true })}
          onMouseLeave={(): void => setHover({ index, hover: false })}
          className="hover:scale-105 transition-transform"
        >
          <Box onClick={() => window.open(repository.svn_url, '_blank')} padding={{ y: 'py-4' }}>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2 items-center relative">
                <h2 className="text-lg lg:text-xl font-semibold">{repository.name}</h2>
                <OpenInNew className={`w-4 h-4 transition-transform duration-600 ${isHoveringItem(hover, index) ? 'scale-110 fill-[var(--accent)]' : 'fill-white'}`} aria-hidden="true" />
              </div>
              <div className="flex gap-2 justify-between">
                <div className="flex gap-2 items-center">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: languageColors[repository.language] }} />
                  <p className="text-sm text-[var(--gray)]">{repository.language}</p>
                </div>
                <div className="flex gap-2">
                  <div className="flex gap-1 items-center">
                    <Star className={`w-4 h-4 transition-transform duration-600 ${isHoveringItem(hover, index) ? 'fill-yellow-400' : 'fill-white'}`} aria-hidden="true" />
                    <p className="text-sm text-[var(--gray)]">{repository.stargazers_count}</p>
                  </div>
                  <div className="flex gap-1 items-center">
                    <Fork className="w-4 h-4" aria-hidden="true" />
                    <p className="text-sm text-[var(--gray)]">{repository.forks_count}</p>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </article>
      ))}
    </section>
  )
}