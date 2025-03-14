import { useEffect } from "react"
import { fetchExperience } from "./utils/data.util"
import { useLanguage } from "../../core/contexts/language.context";

export default function Projects(): React.JSX.Element {
  const { language } = useLanguage()

  useEffect((): void => {
    const fetchData = async (): Promise<void> => {
      try {
        const data = await fetchExperience()
        console.log(data)
      } catch (error) {
        console.error('Error:', error)
      }
    }

    fetchData()
  }, [language])

  return (<></>)
}