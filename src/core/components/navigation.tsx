import { Link, useLocation, useNavigate } from "@tanstack/react-router";
import React, { useEffect, useState } from "react";

interface Route {
  title: string
  url: string
  keymap: string
}

const routes: Route[] = [
  { title: 'sobre mí', url: '/', keymap: 's' },
  { title: 'experiencia', url: '/experience', keymap: 'e' },
  { title: 'proyectos', url: '/projects', keymap: 'p' },
]

const keyMappings: Record<string, string> = {
  ['s']: "/",
  ['e']: "/experience",
  ['p']: "/projects",
}

export default function Navigation(): React.JSX.Element {
  const location = useLocation()
  const navigate = useNavigate()
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)

  useEffect(() => {
    const keyPressHandler = (event: KeyboardEvent): void => {
      const url: string = keyMappings[event.key]
      if (url) navigate({ to: url })
    }

    window.addEventListener('keydown', keyPressHandler)
    return () => window.removeEventListener('keydown', keyPressHandler)
  }, [navigate])

  return (
    <ul className="flex flex-col gap-[0.6rem]">
      {routes.map(({ title, url, keymap }, index: number) => (
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
          } to={url}>{`[${keymap}] ${title}`}</Link>
        </li>
      ))}
    </ul>
  )
}