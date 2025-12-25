import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Item, ItemContent } from "@/components/ui/item";
import { useLanguage } from "@/core/contexts/language.context";
import { useMediaQuery } from "@/core/hooks/use-media-query";

import TailwindcssOriginal from "devicons-react/icons/tailwindcssOriginal";
import DotnetcoreOriginal from "devicons-react/icons/DotNetPlain";
import AngularOriginal from "devicons-react/icons/AngularOriginal";
import ReactOriginal from "devicons-react/icons/ReactOriginal";
import RxjsOriginal from "devicons-react/icons/RxjsOriginal";
import TypescriptOriginal from "devicons-react/icons/TypescriptOriginal";
import PostgresqlOriginal from "devicons-react/icons/PostgresqlOriginal";
import AngularMaterialOriginal from "devicons-react/icons/AngularMaterialOriginal";
import MssqlOriginal from "devicons-react/icons/MicrosoftsqlserverOriginal";

export default function Stack(): React.JSX.Element {
  const { isSpanish } = useLanguage()
  const isDesktop = useMediaQuery("(min-width: 768px)")
  const iconSize = isDesktop ? 64 : 48

  return (
    <section className="mt-8" aria-labelledby="stack-heading">
      <h2 id="stack-heading" className="text-xl md:text-2xl lg:text-3xl font-bold mb-6">
        {isSpanish ? 'Stack de desarrollo' : 'Development stack'}
      </h2>

      <div className="w-full">
        <Tabs defaultValue="languages" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-4 bg-muted/40 p-1 rounded-2xl">
            <TabsTrigger value="languages" className="rounded-xl data-[state=active]:bg-background data-[state=active]:shadow-sm">
              {isSpanish ? 'Lenguajes' : 'Languages'}
            </TabsTrigger>
            <TabsTrigger value="libraries" className="rounded-xl data-[state=active]:bg-background data-[state=active]:shadow-sm">
              {isSpanish ? 'Librerías' : 'Libraries'}
            </TabsTrigger>
            <TabsTrigger value="frameworks" className="rounded-xl data-[state=active]:bg-background data-[state=active]:shadow-sm">
              Frameworks
            </TabsTrigger>
          </TabsList>

          <TabsContent value="languages" className="animate-in fade-in-50 slide-in-from-bottom-5 duration-500">
            <Item variant="outline" className="p-8 md:p-10 justify-center bg-card text-card-foreground rounded-lg">
              <ItemContent className="flex-row flex-wrap justify-center gap-10 md:gap-16 w-full">
                <figure className="flex flex-col items-center gap-4 group cursor-pointer">
                  <TypescriptOriginal size={iconSize} className="transition-all duration-300 group-hover:scale-110 drop-shadow-sm group-hover:drop-shadow-lg" />
                  <figcaption className="text-sm text-muted-foreground font-medium group-hover:text-primary transition-colors">TypeScript</figcaption>
                </figure>
                <figure className="flex flex-col items-center gap-4 group cursor-pointer">
                  <PostgresqlOriginal size={iconSize} className="transition-all duration-300 group-hover:scale-110 drop-shadow-sm group-hover:drop-shadow-lg" />
                  <figcaption className="text-sm text-muted-foreground font-medium group-hover:text-primary transition-colors">PostgreSQL</figcaption>
                </figure>
                <figure className="flex flex-col items-center gap-4 group cursor-pointer">
                  <MssqlOriginal size={iconSize} className="transition-all duration-300 group-hover:scale-110 drop-shadow-sm group-hover:drop-shadow-lg" />
                  <figcaption className="text-sm text-muted-foreground font-medium group-hover:text-primary transition-colors">MSSQL</figcaption>
                </figure>
              </ItemContent>
            </Item>
          </TabsContent>

          <TabsContent value="libraries" className="animate-in fade-in-50 slide-in-from-bottom-5 duration-500">
            <Item variant="outline" className="p-8 md:p-12 justify-center bg-card text-card-foreground shadow-sm">
              <ItemContent className="flex-row flex-wrap justify-center gap-10 md:gap-16 w-full">
                <figure className="flex flex-col items-center gap-4 group cursor-pointer">
                  <ReactOriginal size={iconSize} className="transition-all duration-300 group-hover:scale-110 drop-shadow-sm group-hover:drop-shadow-lg" />
                  <figcaption className="text-sm text-muted-foreground font-medium group-hover:text-primary transition-colors">React</figcaption>
                </figure>
                <figure className="flex flex-col items-center gap-4 group cursor-pointer">
                  <RxjsOriginal size={iconSize} className="transition-all duration-300 group-hover:scale-110 drop-shadow-sm group-hover:drop-shadow-lg" />
                  <figcaption className="text-sm text-muted-foreground font-medium group-hover:text-primary transition-colors">RxJS</figcaption>
                </figure>
                <figure className="flex flex-col items-center gap-4 group cursor-pointer">
                  <AngularMaterialOriginal size={iconSize} className="transition-all duration-300 group-hover:scale-110 drop-shadow-sm group-hover:drop-shadow-lg" />
                  <figcaption className="text-sm text-muted-foreground font-medium group-hover:text-primary transition-colors">Material</figcaption>
                </figure>
              </ItemContent>
            </Item>
          </TabsContent>

          <TabsContent value="frameworks" className="animate-in fade-in-50 slide-in-from-bottom-5 duration-500">
            <Item variant="outline" className="p-8 md:p-12 justify-center bg-card text-card-foreground shadow-sm">
              <ItemContent className="flex-row flex-wrap justify-center gap-10 md:gap-16 w-full">
                <figure className="flex flex-col items-center gap-4 group cursor-pointer">
                  <TailwindcssOriginal size={iconSize} className="transition-all duration-300 group-hover:scale-110 drop-shadow-sm group-hover:drop-shadow-lg" />
                  <figcaption className="text-sm text-muted-foreground font-medium group-hover:text-primary transition-colors">Tailwind</figcaption>
                </figure>
                <figure className="flex flex-col items-center gap-4 group cursor-pointer">
                  <DotnetcoreOriginal size={iconSize} className="transition-all duration-300 group-hover:scale-110 drop-shadow-sm group-hover:drop-shadow-lg" />
                  <figcaption className="text-sm text-muted-foreground font-medium group-hover:text-primary transition-colors">.NET</figcaption>
                </figure>
                <figure className="flex flex-col items-center gap-4 group cursor-pointer">
                  <AngularOriginal size={iconSize} className="transition-all duration-300 group-hover:scale-110 drop-shadow-sm group-hover:drop-shadow-lg" />
                  <figcaption className="text-sm text-muted-foreground font-medium group-hover:text-primary transition-colors">Angular</figcaption>
                </figure>
              </ItemContent>
            </Item>
          </TabsContent>
        </Tabs>
      </div>
    </section >
  )
}