import LanguageSwitch from "../components/language-switch";
import Navigation from "../components/navigation";
import { Github, Linkedin, Pdf } from "../../assets/icons";
import { useLanguage } from "../contexts/language.context";

const GITHUB_PROFILE: string = 'https://github.com/Papudog'
const LINKED_IN: string = 'https://www.linkedin.com/in/roberto-amador-1590a629b/'
const CV: string = '/public/Roberto Amador - CV.pdf'

interface IconsHref {
  Icon: (props: React.SVGProps<SVGSVGElement>) => React.JSX.Element,
  href?: string
}

const pageTranslation = {
  ['es']: {
    title: 'Ingeniero Frontend',
    content: 'Diseñando experiencias web modernas y funcionales.'
  },
  ['en']: {
    title: 'Frontend Engineer',
    content: 'Designing modern, functional web experiences.'
  }
}

const socialIcons: IconsHref[] = [
  { Icon: Github, href: GITHUB_PROFILE },
  { Icon: Linkedin, href: LINKED_IN },
  { Icon: Pdf, href: CV },
]

export default function Header(): React.JSX.Element {
  const { language } = useLanguage()

  return (
    <header className="lg:w-full lg:max-h-screen lg:top-0 lg:sticky lg:py-16 max-lg:gap-8 flex flex-col justify-between">
      <section>
        <div>
          <h1 className="text-3xl md:text-4xl lg:text-[3rem] font-bold">Roberto Amador</h1>
          <div className="lg:w-[350px] flex justify-between items-center">
            <h2 className="text-xl md:text-2xl lg:text-3xl inline font-light my-[0.4rem]">{pageTranslation[language]['title']}</h2>
            <LanguageSwitch />
          </div>
        </div>

        <div className="lg:my-8 lg:w-[20rem] my-4 text-[var(--gray)]">
          <p className="text-base lg:text-lg">{pageTranslation[language]['content']}</p>
        </div>

        <div className="flex gap-4 mt-4">
          {socialIcons.map(({ Icon, href }, index: number) => (
            <Icon
              onClick={() => window.open(href, '_blank')}
              className="cursor-pointer hover:scale-110 transition-transform"
              key={index}
            />
          ))}
        </div>
      </section>

      <Navigation />
    </header>
  )
}