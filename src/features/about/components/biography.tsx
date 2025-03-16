import useTranslation from "../../../core/hooks/useTranslations";
import { Language } from "../../../core/models/data.model";

interface BiographyProps {
  language: Language
}

const pageTranslation = {
  ['es']: {
    title: 'Biografía',
    content: [
      'Soy un estudiante de Ingeniería en Sistemas de Información de 21 años de Managua, Nicaragua, con una gran pasión por las tecnologías web.',

      'Mi experiencia se centra en crear diseños limpios y minimalistas que mejoran la experiencia del usuario.',

      'Mi conjunto de habilidades técnicas incluye un sólido entendimiento de los principios de diseño UI/UX, sistemas de control de versiones como Git y conocimiento de patrones de diseño.'
    ]
  },
  ['en']: {
    title: 'Biography',
    content: [
      'I am a 21-year-old Information Systems Engineering student from Managua, Nicaragua, with a strong passion for web technologies.',

      'My expertise lies in creating clean and minimalist designs that enhance user experience.',

      'My technical skill set includes a solid understanding of UI/UX design principles, experience with version control like Git and knowledge of design patterns.'
    ]
  }
}

export default function Biography({ language }: BiographyProps): React.JSX.Element {
  const translation = useTranslation(language, pageTranslation)

  return (
    <div>
      <h2 className="font-bold">{translation('title')}</h2>

      <div className="flex flex-col gap-4 text-[var(--gray)]">
        {translation('content').map((paragraph: string, index: number) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  )
}