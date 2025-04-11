import { useLanguage } from "../core/contexts/language.context";
import useTranslation from "../core/hooks/useTranslations";
import { Angular, Angularmaterial, Cake, Dotnet, Location, Postgresql, React, Rxjs, Tailwindcss, Typescript } from "../assets/icons";
import Box from "../components/box";
import { aboutTranslations } from "../modules/about";

function currentAge(): number {
  const today: Date = new Date()
  const birthday: Date = new Date(2003, 4, 9)

  let age: number = today.getFullYear() - birthday.getFullYear()

  if (today.getMonth() === birthday.getMonth() && today.getDate() < birthday.getDate()) age--

  return age
}

export default function About(): React.JSX.Element {
  const { language, isSpanish } = useLanguage()
  const translation = useTranslation(language, aboutTranslations)

  return (
    <article>
      <header className="flex gap-6 mb-4">
        <figure className="w-16">
          <img className="rounded-full" src="/webp/github_profile.webp" alt="Profile picture" width={64} height={64} />
        </figure>
        <div className="flex flex-col justify-around">
          <div className="flex items-center gap-2">
            <Cake aria-hidden="true" />
            <time dateTime="2003-04-09" className="text-[var(--gray)]">{`${isSpanish ? 'Abril' : 'April'}`} 9</time>
            <div className="text-[var(--gray)]" aria-hidden="true">|</div>
            <p className="text-[var(--gray)]">{`${currentAge()} ${isSpanish ? 'años' : 'years old'}`}</p>
          </div>
          <div className="flex items-center gap-2">
            <Location aria-hidden="true" />
            <address className="not-italic">Managua, Nicaragua</address>
          </div>
        </div>
      </header>

      <div className="flex flex-col gap-4 text-[var(--gray)]">
        {translation('content').map((paragraph: string, index: number) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      <section className="mt-4" aria-labelledby="stack-heading">
        <h2 id="stack-heading" className="text-xl md:text-2xl lg:text-3xl font-bold mb-6">
          {isSpanish ? 'Stack de desarrollo' : 'Development stack'}
        </h2>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
          <Box>
            <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-[var(--gray)] mb-3">
              {isSpanish ? 'Lenguajes' : 'Languages'}
            </h3>
            <div className="flex flex-wrap gap-6 items-center">
              <figure className="flex flex-col items-center gap-2">
                <Typescript className="w-12 h-12 transition-transform hover:scale-110" aria-hidden="true" />
                <figcaption className="text-sm">TypeScript</figcaption>
              </figure>
              <figure className="flex flex-col items-center gap-2">
                <Postgresql className="w-12 h-12 transition-transform hover:scale-110" aria-hidden="true" />
                <figcaption className="text-sm">PostgreSQL</figcaption>
              </figure>
            </div>
          </Box>

          <Box>
            <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-[var(--gray)] mb-3">
              {isSpanish ? 'Librerías' : 'Libraries'}
            </h3>
            <div className="flex flex-wrap gap-6 items-center">
              <figure className="flex flex-col items-center gap-2">
                <React className="w-12 h-12 transition-transform hover:scale-110" aria-hidden="true" />
                <figcaption className="text-sm">React</figcaption>
              </figure>
              <figure className="flex flex-col items-center gap-2">
                <Rxjs className="w-12 h-12 transition-transform hover:scale-110" aria-hidden="true" />
                <figcaption className="text-sm">RxJS</figcaption>
              </figure>
              <figure className="flex flex-col items-center gap-2">
                <Angularmaterial className="w-12 h-12 transition-transform hover:scale-110" aria-hidden="true" />
                <figcaption className="text-sm">Angular Material</figcaption>
              </figure>
            </div>
          </Box>

          <Box>
            <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-[var(--gray)] mb-3">Frameworks</h3>
            <div className="flex flex-wrap gap-6 items-center">
              <figure className="flex flex-col items-center gap-2">
                <Tailwindcss className="w-12 h-12 transition-transform hover:scale-110" aria-hidden="true" />
                <figcaption className="text-sm">Tailwind CSS</figcaption>
              </figure>
              <figure className="flex flex-col items-center gap-2">
                <Dotnet className="w-12 h-12 transition-transform hover:scale-110" aria-hidden="true" />
                <figcaption className="text-sm">.NET</figcaption>
              </figure>
              <figure className="flex flex-col items-center gap-2">
                <Angular className="w-12 h-12 transition-transform hover:scale-110" aria-hidden="true" />
                <figcaption className="text-sm">Angular</figcaption>
              </figure>
            </div>
          </Box>
        </div>
      </section>
    </article>
  )
}