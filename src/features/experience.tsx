import { Badge } from "@/components/ui/badge"
import type { Experience } from "../modules/experience"

interface ExperienceProps {
  data: Experience[] | undefined
  isSpanish: boolean
}

export default function Experience({ data, isSpanish }: ExperienceProps): React.JSX.Element {
  return (
    <section aria-labelledby="experience-heading">
      <h1 id="experience-heading" className="sr-only">
        {isSpanish ? 'Experiencia laboral' : 'Work experience'}
      </h1>

      <div className="relative border-l-2 border-muted/30 ml-3 md:ml-6 space-y-12 py-2">
        {data?.map((experience: Experience): React.JSX.Element => (
          <article key={experience.place} className="relative pl-8 md:pl-12 group">
            <span className="absolute -left-[9px] top-2 h-4 w-4 rounded-full bg-muted border-4 border-background transition-colors duration-300 group-hover:bg-primary group-hover:border-primary/20 shadow-sm" aria-hidden="true" />

            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2 gap-1">
              <h2 className="text-xl lg:text-2xl font-semibold tracking-tight text-foreground">{experience.position}</h2>
              <time dateTime={`${experience.startDate}/${experience.endDate ?? 'present'}`} className="text-sm font-medium text-muted-foreground tabular-nums whitespace-nowrap">
                {`${experience.startDate} - ${experience.endDate ?? (isSpanish ? 'Presente' : 'Present')}`}
              </time>
            </div>

            <div className="text-primary font-medium text-base mb-4 flex items-center gap-2">
              {experience.place}
            </div>

            <p className="text-muted-foreground leading-relaxed max-w-3xl mb-6">
              {experience.description}
            </p>

            <ul className="flex flex-wrap gap-2 mt-4" role="list">
              {experience.stack.map((stack: string): React.JSX.Element => (
                <li key={stack} role="listitem">
                  <Badge variant="outline" className="px-3 py-1 text-sm font-normal text-muted-foreground bg-muted/30 hover:bg-muted/50 hover:text-foreground transition-colors">
                    {stack}
                  </Badge>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}