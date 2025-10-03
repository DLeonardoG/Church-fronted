import * as React from "react"
import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from "lucide-react"
import { ModeToggle } from "@/core/components/mode-toggle"
import { LanguageToggle } from "@/core/components/language-selector"
import { ProfileLogin } from "@/core/components/profile-login"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/core/components/ui/navigation-menu"
import { Link } from "react-router-dom"
import scrollToSection from "@/shared/hooks/gsapScroll"

const components: { title: string; to: string; description: string }[] = [
  {
    title: "Alert Dialog",
    to: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    to: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    to: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    to: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    to: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    to: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
]

export function NavigationMenuDemo() {
  return (
    <NavigationMenu viewport={false}>
      <div className="absolute left-4 top-1/2 -translate-y-1/2">
        <img
          src="https://www.adventistas.org/es/wp-content/themes/pa-theme-sedes/assets/sedes/es/logo-iasd-vertical.svg"
          alt="Logo"
          className="h-15 w-40"
        />
      </div>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link to="/home">
              Inicio
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
  
        <NavigationMenuItem>
          <NavigationMenuTrigger className="cursor-pointer">Nosotros</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="relative flex h-full w-full flex-col justify-end rounded-md overflow-hidden p-6 no-underline outline-hidden select-none focus:shadow-md"
                    to="/"
                  >
                    <img
                      src="https://scontent.fbga1-3.fna.fbcdn.net/v/t1.6435-9/79649146_2211901442445196_8153083340790956032_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=-gu1bcLvCUwQ7kNvwHBdpIk&_nc_oc=AdlhjsIPMBKj4Xmk6MYPUZ61NdrBMx751qHW5PJYMrcwXqX8JfT3yxkbk5-lBSytbpU&_nc_zt=23&_nc_ht=scontent.fbga1-3.fna&_nc_gid=aakpHa2kkhTA7hs9nNwHmA&oh=00_Affl2cSVr394w9IEUD1zN3K2LI4xzcSXMHGTXFz3EGLBhg&oe=6906B48C"
                      alt="Fondo"
                      className="absolute inset-0 w-full h-full object-cover z-0"
                    />

                    <div className="absolute inset-0 bg-white/40 z-5"></div>

                    <div className="relative z-10 mt-4 mb-2 text-lg font-medium text-center text-black">
                      Comunicaciones Norte
                    </div>
                    <p className="relative z-10 text-sm leading-tight text-center text-black">
                      Somos la Iglesia Adventista del Séptimo Dia Norte Bucaramanga
                    </p>
                  </Link>

                </NavigationMenuLink>

              </li>
              <ListItem to="/docs" title="Quienes Somos?">
                Los Adventistas del Séptimo Día son una familia global de cristianos...
              </ListItem>
              <ListItem to="/docs/installation" title="Creencias">
                Desde las neuronas a las nebulosas, desde el ADN hasta las distantes galaxias...
              </ListItem>
              <ListItem to="/docs/primitives/typography" title="Equipo">
                Guiados por la fe y los principios adventistas, para servir y fortalecer a nuestra comunidad.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <button
              onClick={() => scrollToSection("Anuncios")}
              className="px-3 py-2 cursor-pointer"
            >
              Anuncios
            </button>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="cursor-pointer">Departamentos</NavigationMenuTrigger>
            <NavigationMenuContent>
            <ul className="grid w-[250px] gap-4">
              <li className="flex gap-2">
                <div>
                  <NavigationMenuLink asChild>
                    <Link to="#">Mayordomia</Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link to="#">Ministerios Personales</Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link to="#">Comunicaciones</Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link to="#">Escuela Sabatica</Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link to="#">Jovenes</Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link to="#">Universitarios</Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link to="#">Educacion</Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link to="#">Capellania</Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link to="#">Familia</Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link to="#">Salud</Link>
                  </NavigationMenuLink>
                </div>
                <div>
                  <NavigationMenuLink asChild>
                    <Link to="#">Dorcas</Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link to="#">Diaconos</Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link to="#">Evangelismo</Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link to="#">Tesoreria</Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link to="#">Secretaria</Link>
                  </NavigationMenuLink>
                </div>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="cursor-pointer">Recursos</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[300px] gap-4">
                <li>
                  <NavigationMenuLink asChild>
                    <Link to="#">
                      <div className="font-medium">"Las 28 Creencias Adventistas"</div>
                      <div className="text-muted-foreground">
                        No hay "289 creencias" adventistas, sino las 28 Creencias Fundamentales de la Iglesia Adventist...
                      </div>
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link to="#">
                      <div className="font-medium">Leccion Escuela Sabatica</div>
                      <div className="text-muted-foreground">
                        La leccion tiene como propósito en fortalecer la fe, profundizar el conocimiento de las Escrituras y fomen...
                      </div>
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link to="#">
                      <div className="font-medium">"Mente caracter y personalidad"</div>
                      <div className="text-muted-foreground">
                        Ser semejantes a Jesús en carácter es el ideal de Dios para su pueblo. Desde el principio fue el plan de...
                      </div>
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link to="#">
                      <div className="font-medium">Revista Adventista</div>
                      <div className="text-muted-foreground">
                        Se publica mensualmente en varios idiomas y se distribuye gratuitamente a más de 140 países, ofreciendo un panorama internacional de la iglesia. 
                      </div>
                    </Link>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link to="#">
              Eventos
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
      <div className="absolute right-4 top-1/2 -translate-y-1/2 flex gap-2">
        <ModeToggle/>
        <LanguageToggle/>
        <ProfileLogin/>
      </div>
    </NavigationMenu>
  )
}

function ListItem({
  title,
  children,
  to,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { to: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link to={to}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}
