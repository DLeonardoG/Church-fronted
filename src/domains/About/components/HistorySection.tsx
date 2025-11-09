import { Card, CardContent } from "@/core/components/ui/card";
import { cn } from "@/shared/lib/utils";
import { Church, Clock } from "lucide-react";
import { CHURCH_HISTORY } from "../constants/aboutConfig";

/**
 * Sección de Historia
 * Muestra la historia y legado de la iglesia
 */
export function HistorySection() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16">
      <Card className="border-2 hover:border-primary/50 transition-all">
        <CardContent className="p-8 md:p-12">
          {/* Header con icono */}
          <div className="flex items-center gap-4 mb-6">
            <div className="p-4 bg-primary/10 rounded-xl">
              <Clock className="w-10 h-10 text-primary" />
            </div>
            <div>
              <h3 className={cn(
                "text-3xl md:text-4xl font-bold",
                "text-foreground tracking-tight"
              )}>
                {CHURCH_HISTORY.TITLE}
              </h3>
              <p className="text-primary font-semibold text-lg mt-1">
                {CHURCH_HISTORY.SUBTITLE}
              </p>
            </div>
          </div>

          {/* Contenido */}
          <div className="space-y-6 mt-8">
            <p className="text-muted-foreground text-lg leading-relaxed">
              {CHURCH_HISTORY.DESCRIPTION}
            </p>

            {/* Highlight box */}
            <div className={cn(
              "relative p-6 rounded-xl",
              "bg-primary/5 border-l-4 border-primary"
            )}>
              <div className="flex gap-4">
                <Church className="w-8 h-8 text-primary shrink-0 mt-1" />
                <p className="text-foreground text-lg font-medium leading-relaxed">
                  {CHURCH_HISTORY.HIGHLIGHT}
                </p>
              </div>
            </div>

            {/* Estadísticas o datos adicionales (opcional) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pt-8 border-t">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">+10</div>
                <p className="text-muted-foreground font-medium">Años de Servicio</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">+500</div>
                <p className="text-muted-foreground font-medium">Miembros Activos</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">+5</div>
                <p className="text-muted-foreground font-medium">Congregaciones</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

