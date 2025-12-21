import { useLanguage } from "../core/contexts/language.context";
import useTranslation from "../core/hooks/useTranslations";
import { Angular, Angularmaterial, Cake, Dotnet, Location, Postgresql, React, Rxjs, Tailwindcss, Typescript } from "../assets/icons";
import { aboutTranslations } from "../modules/about";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
            <time dateTime="2003-04-09" className="text-muted-foreground">{`${isSpanish ? 'Abril' : 'April'}`} 9</time>
            <div className="text-muted-foreground" aria-hidden="true">|</div>
            <p className="text-muted-foreground">{`${currentAge()} ${isSpanish ? 'años' : 'years old'}`}</p>
          </div>
          <div className="flex items-center gap-2">
            <Location aria-hidden="true" />
            <address className="not-italic">Managua, Nicaragua</address>
          </div>
        </div>
      </header>

      <div className="flex flex-col gap-4 text-muted-foreground">
        {translation('content').map((paragraph: string, index: number) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      <section className="mt-8" aria-labelledby="stack-heading">
        <h2 id="stack-heading" className="text-xl md:text-2xl lg:text-3xl font-bold mb-6">
          {isSpanish ? 'Stack de desarrollo' : 'Development stack'}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="hover:shadow-lg transition-all border-muted/60">
            <CardHeader>
              <CardTitle className="text-lg md:text-xl">
                {isSpanish ? 'Lenguajes' : 'Languages'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-6 items-center">
                <figure className="flex flex-col items-center gap-2">
                  <Typescript className="w-12 h-12 transition-transform hover:scale-110" aria-hidden="true" />
                  <figcaption className="text-xs text-muted-foreground">TypeScript</figcaption>
                </figure>
                <figure className="flex flex-col items-center gap-2">
                  <Postgresql className="w-12 h-12 transition-transform hover:scale-110" aria-hidden="true" />
                  <figcaption className="text-xs text-muted-foreground">PostgreSQL</figcaption>
                </figure>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all border-muted/60">
            <CardHeader>
              <CardTitle className="text-lg md:text-xl">
                {isSpanish ? 'Librerías' : 'Libraries'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-6 items-center">
                <figure className="flex flex-col items-center gap-2">
                  <React className="w-12 h-12 transition-transform hover:scale-110" aria-hidden="true" />
                  <figcaption className="text-xs text-muted-foreground">React</figcaption>
                </figure>
                <figure className="flex flex-col items-center gap-2">
                  <Rxjs className="w-12 h-12 transition-transform hover:scale-110" aria-hidden="true" />
                  <figcaption className="text-xs text-muted-foreground">RxJS</figcaption>
                </figure>
                <figure className="flex flex-col items-center gap-2">
                  <Angularmaterial className="w-12 h-12 transition-transform hover:scale-110" aria-hidden="true" />
                  <figcaption className="text-xs text-muted-foreground">Material</figcaption>
                </figure>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all border-muted/60">
            <CardHeader>
              <CardTitle className="text-lg md:text-xl">Frameworks</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-6 items-center">
                <figure className="flex flex-col items-center gap-2">
                  <Tailwindcss className="w-12 h-12 transition-transform hover:scale-110" aria-hidden="true" />
                  <figcaption className="text-xs text-muted-foreground">Tailwind</figcaption>
                </figure>
                <figure className="flex flex-col items-center gap-2">
                  <Dotnet className="w-12 h-12 transition-transform hover:scale-110" aria-hidden="true" />
                  <figcaption className="text-xs text-muted-foreground">.NET</figcaption>
                </figure>
                <figure className="flex flex-col items-center gap-2">
                  <Angular className="w-12 h-12 transition-transform hover:scale-110" aria-hidden="true" />
                  <figcaption className="text-xs text-muted-foreground">Angular</figcaption>
                </figure>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </article>
  )
}