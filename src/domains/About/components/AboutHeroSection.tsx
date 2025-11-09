import { cn } from "@/shared/lib/utils";
import { MousePointerClick } from "lucide-react";
import { ABOUT_LINKS, ABOUT_MEDIA, ABOUT_TEXTS } from "../constants/aboutConfig";

/**
 * Sección Hero de la página About
 * Muestra el mensaje principal con imagen de fondo y CTAs
 */
export function AboutHeroSection() {
  return (
    <section className="panel w-full h-screen flex justify-center items-center pt-12 bg-background">
      <div
        className={cn(
          "flex flex-col relative w-[98%] md:w-200 lg:w-[90%] h-[90%] md:h-250 lg:h-[85%]",
          "rounded-4xl px-9 py-15 overflow-hidden",
          "border border-border shadow-2xl"
        )}
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center rounded-4xl"
          style={{
            backgroundImage: `url('${ABOUT_MEDIA.HERO_BACKGROUND}')`,
          }}
        />
        
        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40 dark:bg-black/60 rounded-4xl" />

        {/* Header con links de acción */}
        <div className="w-full flex justify-between text-m italic mb-18 relative z-10">
          <a 
            href={ABOUT_LINKS.JOIN_US_HREF} 
            className={cn(
              "flex gap-1 items-center group transition-all",
              "hover:scale-105"
            )}
          >
            <p className="text-white font-bold group-hover:text-white/80">
              {ABOUT_TEXTS.JOIN_US}
            </p>
            <MousePointerClick className="h-5 w-5 text-white group-hover:text-white/80" />
          </a>
          <span className="text-white font-bold">{ABOUT_TEXTS.VISIT_US}</span>
        </div>

        {/* Títulos principales */}
        <div className="flex flex-col space-y-2 w-full md:w-[70%] lg:w-[54%] mb-5 relative z-10">
          <span className={cn(
            "text-5xl md:text-6xl lg:text-7xl font-bold",
            "text-white tracking-tight"
          )}>
            {ABOUT_TEXTS.TITLE_1}
          </span>
          <span className={cn(
            "text-6xl md:text-7xl lg:text-8xl font-bold",
            "text-white tracking-tight"
          )}>
            {ABOUT_TEXTS.TITLE_2}
          </span>
        </div>

        {/* Descripción */}
        <div className="w-full md:w-[70%] lg:w-[54%] relative z-10">
          <p className="text-white/90 italic text-base md:text-lg leading-relaxed">
            {ABOUT_TEXTS.DESCRIPTION}
          </p>
        </div>

        {/* Botón de acción */}
        <a
          href={ABOUT_LINKS.HERO_BUTTON_HREF}
          className={cn(
            "relative mt-auto mx-auto md:mx-0 md:left-200 bottom-0 md:bottom-30",
            "flex items-center justify-center",
            "bg-white/90 text-black",
            "hover:bg-white active:bg-white/80",
            "w-full md:w-[30%] lg:w-[15%] py-2 px-4",
            "text-lg font-semibold rounded-3xl",
            "italic transition-all duration-200",
            "shadow-lg hover:shadow-xl hover:scale-105",
            "z-10"
          )}
        >
          {ABOUT_TEXTS.HERO_BUTTON}
        </a>
      </div>
    </section>
  );
}

