import { useLanguage } from "../core/contexts/language.context";
import useTranslation from "../core/hooks/useTranslations";
import { Cake, Location } from "../assets/icons";
import { aboutTranslations } from "../modules/about";
import Stack from "@/modules/about/components/stack";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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
        <Avatar className="size-16 border-4 border-muted/20 shadow-xl">
          <AvatarImage src="/webp/github_profile.webp" alt="Profile picture" className="object-cover" />
          <AvatarFallback className="bg-muted text-muted-foreground">JA</AvatarFallback>
        </Avatar>

        <div className="flex flex-col justify-around">
          <div className="flex items-center gap-2">
            <Cake className="fill-foreground" aria-hidden="true" />
            <time dateTime="2003-04-09" className="text-muted-foreground">{`${isSpanish ? 'Abril' : 'April'}`} 9</time>
            <div className="text-muted-foreground" aria-hidden="true">|</div>
            <p className="text-muted-foreground">{`${currentAge()} ${isSpanish ? 'años' : 'years old'}`}</p>
          </div>
          <div className="flex items-center gap-2">
            <Location className="fill-foreground" aria-hidden="true" />
            <address className="not-italic">Managua, Nicaragua</address>
          </div>
        </div>
      </header>

      <div className="flex flex-col gap-4 text-muted-foreground">
        {translation('content').map((paragraph: string, index: number) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      <Stack />
    </article >
  )
}