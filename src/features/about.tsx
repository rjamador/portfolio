import { useLanguage } from "../core/contexts/language.context";
import useTranslation from "../core/hooks/useTranslations";
import { Angular, Angularmaterial, Cake, Dotnet, Location, Postgresql, React, Rxjs, Tailwindcss, Typescript } from "../assets/icons";
import Box from "../components/box";
import { aboutTranslations } from "../modules/about";

function currentAge(): number {
  const today: Date = new Date()
  const birthday: Date = new Date(2003, 4, 9)

  let age: number = today.getFullYear() - birthday.getFullYear()

  if (today < new Date(today.getFullYear(), birthday.getMonth(), birthday.getDate())) age--
  return age
}

export default function About(): React.JSX.Element {
  const { language, isSpanish } = useLanguage()
  const translation = useTranslation(language, aboutTranslations)

  return (
    <>
      <div className="flex gap-6 mb-4">
        <div className="w-16">
          <img className="rounded-full" src="/webp/github_profile.webp" alt="profile_image" />
        </div>
        <div className="flex flex-col justify-around">
          <div className="flex items-center gap-2">
            <Cake />
            <p className="text-[var(--gray)]">{`${isSpanish ? 'Abril' : 'April'}`} 9</p>
            <div className="text-[var(--gray)]">|</div>
            <p className="text-[var(--gray)]">{`${currentAge()} ${isSpanish ? 'años' : 'years old'}`}</p>
          </div>
          <div className="flex items-center gap-2">
            <Location />
            <p >Managua, Nicaragua</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 text-[var(--gray)]">
        {translation('content').map((paragraph: string, index: number) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      <section className="mt-4">
        <h2 className="text-2xl font-bold mb-6">
          {isSpanish ? 'Stack de desarrollo' : 'Development stack'}
        </h2>

        {/* Revisar las fuentes responsivas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Box>
            <h3 className="text-xl font-semibold text-[var(--gray)] mb-3">
              {isSpanish ? 'Lenguajes' : 'Languages'}
            </h3>
            <div className="flex flex-wrap gap-6 items-center">
              <div className="flex flex-col items-center gap-2">
                <Typescript className="w-12 h-12 transition-transform hover:scale-110" />
                <span className="text-sm">TypeScript</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Postgresql className="w-12 h-12 transition-transform hover:scale-110" />
                <span className="text-sm">PostgreSQL</span>
              </div>
            </div>
          </Box>

          <Box>
            <h3 className="text-xl font-semibold text-[var(--gray)] mb-3">
              {isSpanish ? 'Librerías' : 'Libraries'}
            </h3>
            <div className="flex flex-wrap gap-6 items-center">
              <div className="flex flex-col items-center gap-2">
                <React className="w-12 h-12 transition-transform hover:scale-110" />
                <span className="text-sm">React</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Rxjs className="w-12 h-12 transition-transform hover:scale-110" />
                <span className="text-sm">RxJS</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Angularmaterial className="w-12 h-12 transition-transform hover:scale-110" />
                <span className="text-sm">Angular Material</span>
              </div>
            </div>
          </Box>

          <Box>
            <h3 className="text-xl font-semibold text-[var(--gray)] mb-3">Frameworks</h3>
            <div className="flex flex-wrap gap-6 items-center">
              <div className="flex flex-col items-center gap-2">
                <Tailwindcss className="w-12 h-12 transition-transform hover:scale-110" />
                <span className="text-sm">Tailwind CSS</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Dotnet className="w-12 h-12 transition-transform hover:scale-110" />
                <span className="text-sm">.NET</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Angular className="w-12 h-12 transition-transform hover:scale-110" />
                <span className="text-sm">Angular</span>
              </div>
            </div>
          </Box>
        </div>
      </section>
    </>
  )
}