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
    content: 'Construyendo sitios web funcionales con tecnologías modernas.'
  },
  ['en']: {
    title: 'Frontend Engineer',
    content: 'Building functional websites with modern stack.'
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
      <div>
        <div>
          <h1 className="lg:text-[3rem] font-bold">Roberto Amador</h1>
          <div className="lg:w-[350px] flex justify-between items-center">
            <h2 className="inline font-[300] my-[0.4rem]">{pageTranslation[language]['title']}</h2>
            <LanguageSwitch />
          </div>
        </div>

        <div className="lg:mt-8 lg:w-[20rem] mt-4 text-justify text-[var(--gray)]">
          <p>{pageTranslation[language]['content']}</p>
        </div>

        <div className="lg:mt-8 flex gap-4 mt-4">
          {socialIcons.map(({ Icon, href }, index: number) => (
            <Icon
              onClick={() => window.open(href, '_blank')}
              className="cursor-pointer hover:scale-[105%] transition-all ease-in-out duration-200"
              key={index}
            />
          ))}
        </div>
      </div>

      <Navigation />
    </header>
  )
}