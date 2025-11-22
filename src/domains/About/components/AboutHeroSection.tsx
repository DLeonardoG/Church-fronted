import { cn } from "@/shared/lib/utils";
import { MousePointerClick } from "lucide-react";
import { ABOUT_LINKS, ABOUT_MEDIA, ABOUT_TEXTS } from "../constants/aboutConfig";

/**
 * Sección Hero de la página About
 * Totalmente responsiva y accesible
 */
export function AboutHeroSection() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-background">
      <div className="mx-auto max-w-7xl px-1 sm:px-6 lg:px-8">
        <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl border border-border">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('${ABOUT_MEDIA.HERO_BACKGROUND}')`,
            }}
          />

          {/* Overlay oscuro */}
          <div className="absolute inset-0 bg-black/40 dark:bg-black/60" />

          {/* Contenido posicionado con flex */}
          <div className="relative z-10 flex h-full flex-col justify-between p-6 sm:p-8 md:p-10">
            {/* Header con acciones */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-sm sm:text-base italic">
              <a
                href={ABOUT_LINKS.JOIN_US_HREF}
                className="flex items-center gap-2 group transition-transform text-xs md:text-lg hover:scale-105 text-white font-bold"
              >
                {ABOUT_TEXTS.JOIN_US}
                <MousePointerClick className="h-4 w-4 sm:h-5 sm:w-5 text-white group-hover:text-white/80" />
              </a>
              <span className="text-white font-bold text-xs md:text-lg">{ABOUT_TEXTS.VISIT_US}</span>
            </div>

            {/* Títulos */}
            <div className="max-w-2xl">
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight">
                {ABOUT_TEXTS.TITLE_1}
                 {ABOUT_TEXTS.TITLE_2}
              </h1>
            </div>

            {/* Descripción */}
            <div className="max-w-2xl">
              <p className="text-white/90 italic text-[10px] sm:text-base md:text-lg lg:text-xl  leading-relaxed">
                {ABOUT_TEXTS.DESCRIPTION}
              </p>
            </div>

            {/* Botón CTA */}
            <div className="mt-2 sm:mt-8">
              <a
                href={ABOUT_LINKS.HERO_BUTTON_HREF}
                className={cn(
                  "inline-flex items-center justify-center",
                  "bg-white/90 text-black font-semibold italic",
                  "hover:bg-white active:bg-white/80",
                  "px-6 py-1 sm:px-8 sm:py-4",
                  "rounded-3xl",
                  "text-xs sm:text-lg",
                  "shadow-lg hover:shadow-xl hover:scale-[1.02]",
                  "transition-all duration-200",
                  "w-full sm:w-auto"
                )}
              >
                {ABOUT_TEXTS.HERO_BUTTON}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}