import { useLanguage } from "../../core/contexts/language.context";
import Biography from "./components/biography";

export default function About(): React.JSX.Element {

  const { language } = useLanguage()

  return (
    <>
      <Biography language={language} />
    </>
  )
}