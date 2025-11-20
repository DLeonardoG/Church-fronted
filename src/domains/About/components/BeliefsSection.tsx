import { cn } from "@/shared/lib/utils";
import { BookOpen, Cross, Heart, Sun } from "lucide-react";
import {
  CHURCH_BELIEFS,
  BELIEFS_SECTION_TEXTS,
  BELIEF_SECTION_IDS
} from "../constants/aboutConfig";

// Mapeo de nombres de íconos a componentes reales
const IconMap = {
  "book-open": BookOpen,
  cross: Cross,
  heart: Heart,
  sun: Sun,
};

/**
 * Sección de Creencias de la Iglesia Adventista del Séptimo Día
 */
export function BeliefsSection() {
  return (
    <section
      className={cn(
        "w-full py-20 px-4 md:px-8 bg-background",
        ""
      )}
    >
      <div id={BELIEF_SECTION_IDS.CONTENT} className="max-w-7xl mx-auto">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {BELIEFS_SECTION_TEXTS.SECTION_TITLE}
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            {BELIEFS_SECTION_TEXTS.SECTION_SUBTITLE}
          </p>
        </div>

        {/* Tarjetas de creencias */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {CHURCH_BELIEFS.map((belief, index) => {
            const IconComponent = IconMap[belief.ICON as keyof typeof IconMap];
            return (
              <div
                key={index}
                className={cn(
                  "flex flex-col items-center text-center p-6 rounded-2xl",
                  "bg-card border border-border shadow-sm",
                  "transition-all duration-300 hover:shadow-md hover:-translate-y-1"
                )}
              >
                <div className="mb-5 p-3 bg-primary/10 rounded-full">
                  {IconComponent && <IconComponent className="w-8 h-8 text-primary" />}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {belief.TITLE}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {belief.DESCRIPTION}
                </p>
              </div>
            );
          })}
        </div>

        {/* Llamado a acción */}
        <div className="mt-16 text-center">
          <div className="inline-block p-4 bg-secondary/20 rounded-2xl mb-6">
            <BookOpen className="w-10 h-10 mx-auto text-primary" />
          </div>
          <h3 className="text-2xl font-semibold text-foreground mb-4">
            {BELIEFS_SECTION_TEXTS.CTA_TITLE}
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            {BELIEFS_SECTION_TEXTS.CTA_DESCRIPTION}
          </p>
          <a
            href={BELIEFS_SECTION_TEXTS.CTA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "inline-flex items-center justify-center gap-2",
              "bg-primary text-primary-foreground",
              "hover:bg-primary/90 active:bg-primary/80",
              "px-6 py-3 rounded-lg font-semibold",
              "transition-all duration-200 shadow-md hover:shadow-lg"
            )}
          >
            {BELIEFS_SECTION_TEXTS.CTA_BUTTON_TEXT}
          </a>
        </div>
      </div>
    </section>
  );
}