import { ModeToggle } from "@/core/components/mode-toggle"
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
import { cn } from "@/shared/lib/utils"
import { ChevronDown, Menu, X } from "lucide-react"
import * as React from "react"
import { Link, useLocation } from "react-router-dom"
import { DepartmentItem } from "@/domains/Departaments/components/DepartamentItem"

export function NavigationMenuDemo() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const [openSubmenu, setOpenSubmenu] = React.useState<string | null>(null)
  const location = useLocation()

  React.useEffect(() => {
    setMobileMenuOpen(false)
    setOpenSubmenu(null)
  }, [location])

  const toggleSubmenu = (menu: string) => {
    setOpenSubmenu(openSubmenu === menu ? null : menu)
  }


  return (
    <>
      {/* Desktop Navigation */}
      <NavigationMenu 
        viewport={false} 
        className="hidden lg:flex border-b border-border/50 shadow-sm"
      >
        <div className="absolute left-6 top-1/2 -translate-y-1/2 flex items-center gap-3">
          <Link 
            to="/" 
            className="flex items-center gap-2 hover:opacity-80 transition-opacity duration-200"
          >
            <img
              src="/logo-remove.png"
              alt="Logo IASD"
              className="h-13 w-auto dark:brightness-0 dark:invert transition-all duration-300"
            />
          </Link>
        </div>

        <NavigationMenuList className="gap-1">
          <NavigationMenuItem>
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
              <Link 
                to="/" 
                className="font-medium text-foreground hover:text-primary transition-colors"
              >
                Inicio
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
    
          <NavigationMenuItem>
            <NavigationMenuTrigger className="cursor-pointer font-medium text-foreground hover:text-primary data-[state=open]:text-primary transition-colors">
              <Link to="/nosotros">Nosotros</Link>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-0 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-4">
                  <NavigationMenuLink asChild>
                    <Link
                      className="relative flex h-full w-full  flex-col justify-end rounded-lg overflow-hidden p-6 no-underline outline-none select-none hover:shadow-xl hover:ring-2 hover:ring-ring transition-all duration-300 group border border-border"
                      to="/nosotros"
                    >
                      <img
                        src="/logo.jpg"
                        alt="Iglesia Adventista Norte"
                        className="absolute inset-0 w-full h-full object-cover z-0 group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(to_top,oklch(0_0_0/0.8),oklch(0_0_0/0.3),oklch(0_0_0/0))] z-5"></div>
                      <div className="relative z-10 space-y-2">
                        <div className="flex text-center text-xl font-bold text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                          Comunicaciones Norte
                        </div>
                        <p className="text-sm text-center leading-relaxed text-white/95 drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]">
                          Iglesia Adventista del Séptimo Día Norte Bucaramanga
                        </p>
                      </div>
                    </Link>
                  </NavigationMenuLink>
                </li>
                <ListItem to="/nosotros#quienes-somos" title="¿Quiénes Somos?">
                  Una familia global de cristianos unidos por la fe y el servicio
                </ListItem>
                <ListItem to="/nosotros#creencias" title="Creencias">
                  Principios fundamentales basados en las Escrituras
                </ListItem>
                <ListItem to="/nosotros#historia" title="Nuestra Historia">
                  Décadas de servicio y testimonio en Bucaramanga
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>


          <NavigationMenuItem>
            <NavigationMenuTrigger className="cursor-pointer font-medium text-foreground hover:text-primary data-[state=open]:text-primary transition-colors">
              Departamentos
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[25rem] gap-0 p-1 md:grid-cols-2 bg-popover">
                <DepartmentItem to="/departamentos/mayordomia" title="Mayordomía" />
                <DepartmentItem to="/departamentos/diaconos" title="Diáconos" />
                <DepartmentItem to="/departamentos/conquistadores" title="Conquistadores" />
                <DepartmentItem to="/departamentos/ministerios-personales" title="Ministerios Personales" />
                <DepartmentItem to="/departamentos/comunicaciones" title="Comunicaciones" />
                <DepartmentItem to="/departamentos/escuela-sabatica" title="Escuela Sabática" />
                <DepartmentItem to="/departamentos/jovenes" title="Jóvenes" />
                <DepartmentItem to="/departamentos/universitarios" title="Universitarios" />
                <DepartmentItem to="/departamentos/educacion" title="Educación" />
                <DepartmentItem to="/departamentos/familia" title="Familia" />
                <DepartmentItem to="/departamentos/salud" title="Salud" />
                <DepartmentItem to="/departamentos/dorcas" title="Dorcas" />
                <DepartmentItem to="/departamentos/tesoreria" title="Tesorería" />
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
              <Link 
                to="/recursos" 
                className="font-medium text-foreground hover:text-primary transition-colors"
              >
                Recursos
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
              <Link 
                to="/eventos" 
                className="font-medium text-foreground hover:text-primary transition-colors"
              >
                Eventos
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
              <Link 
                to="/contact" 
                className="font-medium text-foreground hover:text-primary transition-colors"
              >
                Contactanos
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>

        <div className="absolute right-6 top-1/2 -translate-y-1/2 flex items-center gap-1.5 z-50">
          <ModeToggle />
          <ProfileLogin />
        </div>
      </NavigationMenu>

      {/* Mobile Navigation */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-md border-b border-border/50 shadow-sm">
        <div className="flex items-center justify-between px-4 py-3">
          <Link to="/" className="flex items-center hover:opacity-80 transition-opacity">
            <img
              src="/logo-remove.png"
              alt="Logo IASD"
              className="h-9 w-auto dark:brightness-0 dark:invert transition-all duration-300"
            />
          </Link>
          
          <div className="flex items-center gap-1.5">
            <ModeToggle />
            <ProfileLogin />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 hover:bg-accent/80 hover:text-accent-foreground rounded-md transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-background/85 backdrop-blur-lg border-b border-border/50 shadow-xl max-h-[calc(100vh-80px)] overflow-y-auto">
            <nav className="p-4 space-y-1">
              <MobileNavLink to="/" onClick={() => setMobileMenuOpen(false)}>
                Inicio
              </MobileNavLink>
              
              <MobileSubmenu
                title="Nosotros"
                isOpen={openSubmenu === 'nosotros'}
                onToggle={() => toggleSubmenu('nosotros')}
              >
                <MobileNavLink to="/nosotros#quienes-somos" onClick={() => setMobileMenuOpen(false)}>
                  ¿Quiénes Somos?
                </MobileNavLink>
                <MobileNavLink to="/nosotros#creencias" onClick={() => setMobileMenuOpen(false)}>
                  Creencias
                </MobileNavLink>
                <MobileNavLink to="/nosotros#historia" onClick={() => setMobileMenuOpen(false)}>
                  Nuestra Historia
                </MobileNavLink>
              </MobileSubmenu>


              <MobileSubmenu
                title="Departamentos"
                isOpen={openSubmenu === 'departamentos'}
                onToggle={() => toggleSubmenu('departamentos')}
              >
                <div className="grid grid-cols-2 gap-1">
                  <MobileNavLink to="/departamentos/mayordomia" onClick={() => setMobileMenuOpen(false)}>Mayordomía</MobileNavLink>
                  <MobileNavLink to="/departamentos/ministerios-personales" onClick={() => setMobileMenuOpen(false)}>Min. Personales</MobileNavLink>
                  <MobileNavLink to="/departamentos/comunicaciones" onClick={() => setMobileMenuOpen(false)}>Comunicaciones</MobileNavLink>
                  <MobileNavLink to="/departamentos/escuela-sabatica" onClick={() => setMobileMenuOpen(false)}>Esc. Sabática</MobileNavLink>
                  <MobileNavLink to="/departamentos/jovenes" onClick={() => setMobileMenuOpen(false)}>Jóvenes</MobileNavLink>
                  <MobileNavLink to="/departamentos/universitarios" onClick={() => setMobileMenuOpen(false)}>Universitarios</MobileNavLink>
                  <MobileNavLink to="/departamentos/educacion" onClick={() => setMobileMenuOpen(false)}>Educación</MobileNavLink>
                  <MobileNavLink to="/departamentos/familia" onClick={() => setMobileMenuOpen(false)}>Familia</MobileNavLink>
                  <MobileNavLink to="/departamentos/salud" onClick={() => setMobileMenuOpen(false)}>Salud</MobileNavLink>
                  <MobileNavLink to="/departamentos/dorcas" onClick={() => setMobileMenuOpen(false)}>Dorcas</MobileNavLink>
                  <MobileNavLink to="/departamentos/tesoreria" onClick={() => setMobileMenuOpen(false)}>Tesorería</MobileNavLink>
                </div>
              </MobileSubmenu>

              <MobileNavLink to="/recursos" onClick={() => setMobileMenuOpen(false)}>
                Recursos
              </MobileNavLink>

              <MobileNavLink to="/eventos" onClick={() => setMobileMenuOpen(false)}>
                Eventos
              </MobileNavLink>
              <MobileNavLink to="/contact" onClick={() => setMobileMenuOpen(false)}>
                Contactanos
              </MobileNavLink>
            </nav>
          </div>
        )}
      </div>

      {/* Mobile Spacer */}
      <div className="lg:hidden h-[60px]"></div>
    </>
  )
}

// Helper Components
function ListItem({
  title,
  children,
  to,
  className,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { to: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link
          to={to}
          className={cn(
            "block select-none space-y-1.5 rounded-lg p-3 leading-none no-underline outline-none transition-all duration-200 hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground hover:shadow-sm border border-transparent hover:border-border",
            className
          )}
        >
          <div className="text-sm font-semibold leading-none text-foreground">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}



function MobileNavLink({ 
  to, 
  children, 
  onClick 
}: { 
  to: string; 
  children: React.ReactNode; 
  onClick?: () => void 
}) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="block px-4 py-2.5 text-sm font-medium rounded-lg hover:bg-accent/80 hover:text-accent-foreground transition-all duration-200 text-foreground"
    >
      {children}
    </Link>
  )
}

function MobileSubmenu({
  title,
  children,
  isOpen,
  onToggle,
}: {
  title: string
  children: React.ReactNode
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div>
      <button
        onClick={onToggle}
        className="flex items-center justify-between w-full px-4 py-2.5 text-sm font-medium rounded-lg hover:bg-accent/80 hover:text-accent-foreground transition-all duration-200 text-foreground"
      >
        {title}
        <ChevronDown
          className={cn(
            "h-4 w-4 transition-transform duration-300 text-muted-foreground",
            isOpen && "rotate-180 text-foreground"
          )}
        />
      </button>
      {isOpen && (
        <div className="mt-1 ml-4 space-y-1 border-l-2 border-primary/30 pl-3 animate-in slide-in-from-top-2 duration-200">
          {children}
        </div>
      )}
    </div>
  )
}
