import LanguageSwitcher from "../../components/language-switcher";
import Navigation from "../components/navigation";
import { Github, Linkedin } from "../../assets/icons";
import { useLanguage } from "../contexts/language.context";
import { GITHUB_NICKNAME } from "../../modules/projects/models/github.model";
import { ThemeSwitcher } from "@/components/ui/shadcn-io/theme-switcher";

const GITHUB_PROFILE: string = `https://github.com/${GITHUB_NICKNAME}`
const LINKED_IN: string = 'https://www.linkedin.com/in/roberto-amador-1590a629b/'
// const CV: string = '/Roberto Amador - CV.pdf'

interface IconsHref {
  Icon: (props: React.SVGProps<SVGSVGElement>) => React.JSX.Element,
  href?: string
}

const pageTranslation = {
  ['es']: {
    title: 'Ingeniero en Sistemas',
    content: 'Diseñando experiencias web modernas y funcionales.'
  },
  ['en']: {
    title: 'Systems Engineer',
    content: 'Designing modern, functional web experiences.'
  }
}

const socialIcons: IconsHref[] = [
  { Icon: Github, href: GITHUB_PROFILE },
  { Icon: Linkedin, href: LINKED_IN }
  // { Icon: Pdf, href: CV },
]

export default function Header(): React.JSX.Element {
  const { language } = useLanguage()

  return (
    <header className="lg:w-full lg:max-h-screen lg:top-0 lg:sticky lg:py-16 max-lg:gap-8 flex flex-col justify-between">
      <section className="flex flex-col gap-6 lg:gap-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl md:text-4xl lg:text-[3rem] font-bold leading-tight">Roberto Amador</h1>
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-light">{pageTranslation[language]['title']}</h2>
            <div className="flex items-center gap-2">
              <ThemeSwitcher />
              <LanguageSwitcher />
            </div>
          </div>
        </div>

        <div className="max-w-md text-muted-foreground">
          <p className="text-base lg:text-lg leading-relaxed">{pageTranslation[language]['content']}</p>
        </div>

        <div className="flex gap-4">
          {socialIcons.map(({ Icon, href }, index: number) => (
            <Icon
              onClick={() => window.open(href, '_blank')}
              className="cursor-pointer hover:scale-110 transition-transform w-6 h-6"
              key={index}
            />
          ))}
        </div>
      </section>
      <Navigation />
    </header>
  )
}