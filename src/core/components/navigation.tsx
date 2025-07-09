import { Link, useLocation, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useLanguage } from "../contexts/language.context";
import { Language } from "../models/data.model";

type KeyMappings = Record<Language, Record<string, string>>
type RouteMapping = Record<Language, Route[]>

interface Route { title: string, url: string, keymap: string }

const routes: RouteMapping = {
  ['es']: [
    { title: 'sobre mí', url: '/', keymap: 's' },
    { title: 'experiencia', url: '/experience', keymap: 'e' },
    { title: 'proyectos', url: '/projects', keymap: 'p' }
  ],
  ['en']: [
    { title: 'about me', url: '/', keymap: 'a' },
    { title: 'experience', url: '/experience', keymap: 'e' },
    { title: 'projects', url: '/projects', keymap: 'p' }
  ]
}

const keyMappings: KeyMappings = {
  ['es']: {
    ['s']: "/",
    ['e']: "/experience",
    ['p']: "/projects"
  },
  ['en']: {
    ['a']: "/",
    ['e']: "/experience",
    ['p']: "/projects"
  }
}

export default function Navigation(): React.JSX.Element {
  const location = useLocation()
  const navigate = useNavigate()

  const [hoveredItem, setHoveredItem] = useState<number | null>(null)
  const { language } = useLanguage()

  useEffect(() => {
    const keyPressHandler = (event: KeyboardEvent): void => {
      if (keyMappings[language]) {
        const url: string = keyMappings[language][event.key]
        if (url) navigate({ to: url })
      }
    }

    window.addEventListener('keydown', keyPressHandler)
    return () => window.removeEventListener('keydown', keyPressHandler)
  }, [navigate, language])

  return (
    <nav>
      <ul className="flex flex-col gap-[0.6rem]">
        {routes[language].map(({ title, url, keymap }, index: number) => (
          <li
            data-item={`item-${index}`}
            key={index}
            className="flex items-center"
            onMouseEnter={(): void => setHoveredItem(index)}
            onMouseLeave={(): void => setHoveredItem(null)}
          >
            <div className={
              `h-[1px] mr-4 transition-all duration-200 ease-in-out 
            ${location.pathname === url || hoveredItem === index ? "w-16 bg-[var(--accent)]" : "w-8 bg-[var(--gray)]"}`
            }></div>

            <Link className={
              `${location.pathname === url || hoveredItem === index ? "text-[var(--accent)]" : "text-[var(--gray)]"}`
            } to={url}>{`[${keymap}] ${title}`}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}