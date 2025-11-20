import { cn } from "@/shared/lib/utils";
import { Heart } from "lucide-react";
import { ABOUT_SECTION_IDS, ABOUT_TEXTS } from "../constants/aboutConfig";
import { HistorySection } from "./HistorySection";
import { MissionVisionSection } from "./MissionVisionSection";
import { ValuesSection } from "./ValuesSection";
import { BeliefsSection } from "./BeliefsSection";

/**
 * Sección de contenido principal de la página About
 * Integra todas las subsecciones: Misión, Visión, Valores e Historia
 */
export function AboutContentSection() {
  return (
    <section 
      id={ABOUT_SECTION_IDS.CONTENT} 
      className={cn(
        "panel flex flex-col items-center",
        "w-full py-20 px-4 md:px-8",
        "bg-background pb-[100px]"
      )}
    >
      {/* Header principal */}
      <div className="flex flex-col items-center gap-6 text-center max-w-4xl mb-16">
        <div className="flex items-center gap-3 justify-center">
          <h2 className={cn(
            "text-4xl md:text-5xl lg:text-6xl font-bold",
            "text-foreground tracking-tight"
          )}>
            {ABOUT_TEXTS.CONTENT_TITLE}
          </h2>
        </div>
        
        {/* Descripción principal */}
        <p className="text-muted-foreground text-lg md:text-xl max-w-3xl leading-relaxed">
          {ABOUT_TEXTS.CONTENT_SUBTITLE}
        </p>

        {/* Línea decorativa */}
        <div className="w-24 h-1 bg-primary rounded-full" />
      </div>
      
      {/* Subsecciones */}
      <div className="w-full space-y-16">
        {/* Misión y Visión */}
        <MissionVisionSection />

        {/* Separador visual */}
        <div className="w-full max-w-7xl mx-auto">
          <div className="h-px bg-linear-to-r from-transparent via-border to-transparent" />
        </div>

        {/* Valores */}
        <ValuesSection />

        {/* Separador visual */}
        <div className="w-full max-w-7xl mx-auto">
          <div className="h-px bg-linear-to-r from-transparent via-border to-transparent" />
        </div>
        

        <BeliefsSection />

        <div className="w-full max-w-7xl mx-auto">
          <div className="h-px bg-linear-to-r from-transparent via-border to-transparent" />
        </div>

        {/* Historia */}
        <HistorySection />
      </div>

      {/* Call to Action final (opcional) */}
      <div className="mt-20 text-center">
        <p className="text-muted-foreground text-lg mb-6">
          ¿Quieres saber más sobre nosotros?
        </p>
        <a
          href="/home#Contactanos"
          className={cn(
            "inline-flex items-center justify-center gap-2",
            "bg-primary text-primary-foreground",
            "hover:bg-primary/90 active:bg-primary/80",
            "px-8 py-3 rounded-lg",
            "text-lg font-semibold",
            "transition-all duration-200",
            "shadow-lg hover:shadow-xl hover:scale-105"
          )}
        >
          <Heart className="w-5 h-5" />
          Contáctanos
        </a>
      </div>
    </section>
  );
}

