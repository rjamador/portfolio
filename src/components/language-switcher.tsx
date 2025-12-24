import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useLanguage } from "../core/contexts/language.context"
import { Languages } from "lucide-react"

export default function LanguageSwitcher(): React.JSX.Element {
  const { setLanguage } = useLanguage()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="hover:cursor-pointer">
        <Button variant="ghost" className="ring-1 ring-border rounded-full" size="icon-sm">
          <Languages className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
          <span className="sr-only">Toggle language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[150px]" align="center">
        <DropdownMenuItem onClick={() => setLanguage('en')}>
          <span>English</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage('es')}>
          <span>Español</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}