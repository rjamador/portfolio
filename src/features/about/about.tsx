import { useLanguage } from "../../core/contexts/language.context";
import useTranslation from "../../core/hooks/useTranslations";
import { Angular, Angularmaterial, Cake, Dotnet, Location, Postgresql, React, Rxjs, Tailwindcss, Typescript } from "../../assets/icons";
import Box from "./components/box";

const pageTranslation = {
  ['es']: {
    content: [
      'Mi enfoque se centra en crear diseños limpios y minimalistas que mejoran la experiencia del usuario.',

      'Mi conjunto de habilidades técnicas incluye un sólido entendimiento de los principios de diseño UI/UX, sistemas de control de versiones como Git y conocimiento de patrones de diseño.'
    ]
  },
  ['en']: {
    content: [
      'My approach focuses on creating clean and minimalist designs that enhance user experience.',

      'My technical skill set includes a solid understanding of UI/UX design principles, experience with version control like Git and knowledge of design patterns.'
    ]
  }
}

function currentAge(): number {
  const today: Date = new Date()
  const birthday: Date = new Date(2003, 4, 9)

  let age: number = today.getFullYear() - birthday.getFullYear()

  if (today < new Date(today.getFullYear(), birthday.getMonth(), birthday.getDate())) age--
  return age
}

export default function About(): React.JSX.Element {
  const { language, isSpanish } = useLanguage()
  const translation = useTranslation(language, pageTranslation)

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
        <div className="flex flex-col gap-6">
          <Box>
            <h3 className="text-xl font-semibold text-[var(--gray)] mb-3">
              {isSpanish ? 'Lenguajes' : 'Programming languages'}
            </h3>
            <div className="flex gap-4 items-center">
              <Typescript />
              <Postgresql />
            </div>
          </Box>

          <Box>
            <h3 className="text-xl font-semibold text-[var(--gray)] mb-3">
              {isSpanish ? 'Librerías' : 'Libraries'}
            </h3>
            <div className="flex gap-4 items-center">
              <React />
              <Rxjs />
              <Angularmaterial />
            </div>
          </Box>

          <Box>
            <h3 className="text-xl font-semibold text-[var(--gray)] mb-3">Frameworks</h3>
            <div className="flex gap-4 items-center">
              <Tailwindcss />
              <Dotnet />
              <Angular />
            </div>
          </Box>
        </div>
      </section>
    </>
  )
}