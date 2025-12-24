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
      <header className="flex items-center gap-6 mb-8 animate-in fade-in slide-in-from-top-4 duration-700">
        <Avatar className="size-16 border-2 border-muted shadow-sm">
          <AvatarImage src="/webp/github_profile.webp" alt="Profile picture" className="object-cover" />
          <AvatarFallback>RA</AvatarFallback>
        </Avatar>

        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-2.5 text-foreground/90 font-medium">
            <Cake className="size-5 fill-foreground" aria-hidden="true" />
            <span>{currentAge()} {isSpanish ? 'años' : 'years old'}</span>
            <span className="text-muted-foreground/40" aria-hidden="true">•</span>
            <span className="text-muted-foreground">09 {isSpanish ? 'Abril' : 'April'}</span>
          </div>

          <div className="flex items-center gap-2.5 text-muted-foreground">
            <Location className="size-5 fill-foreground" aria-hidden="true" />
            <span>Managua, Nicaragua</span>
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