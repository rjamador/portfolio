import LanguageSwitch from "../components/language-switch";
import Navigation from "../components/navigation";
import { Github, Linkedin, Pdf } from "../../assets/icons";

interface Icons {
  Icon: (props: React.SVGProps<SVGSVGElement>) => React.JSX.Element
}

const socialIcons: Icons[] = [
  { Icon: Github },
  { Icon: Linkedin },
  { Icon: Pdf },
]

export default function Header(): React.JSX.Element {
  return (
    <header className="lg:w-full lg:max-h-screen lg:sticky lg:py-16 flex flex-col justify-between">
      <div>
        <div>
          <h1 className="lg:text-[3rem] font-bold">Roberto Amador</h1>
          <div className="lg:w-[350px] flex justify-between items-center">
            <h2 className="inline font-[300] my-[0.4rem]">Ingeniero Frontend</h2>
            <LanguageSwitch />
          </div>
        </div>

        <div className="lg:mt-8 lg:w-[20rem] text-justify text-[var(--gray)]">
          <p>Construyendo sitios web funcionales con tecnologías modernas.</p>
        </div>

        <div className="flex gap-4 mt-4">
          {socialIcons.map(({ Icon }, index: number) => (
            <Icon key={index} />
          ))}
        </div>
      </div>

      <Navigation />
    </header>
  )
}