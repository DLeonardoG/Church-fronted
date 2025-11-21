import { Map } from "@/core/components/geoChurch";
import { ChurchTable } from "@/core/components/tableChurch";
import { cn } from "@/shared/lib/utils";
import { HOME_SECTION_IDS, HOME_TEXTS } from "../constants/homeConfig";

export function ChurchesSection() {
  return (
    <section
      id={HOME_SECTION_IDS.CHURCHES}
      className="panel flex flex-col w-full min-h-screen items-center justify-center bg-background py-20 px-6 lg:px-16 gap-16"
    >
      {/* Header */}
      <div className="flex flex-col items-center gap-4 text-center max-w-3xl">
        <div className="flex items-center gap-3">
          <h2 className={cn(
            "text-4xl md:text-5xl lg:text-6xl font-bold",
            "text-foreground tracking-tight"
          )}>
            {HOME_TEXTS.CHURCHES_TITLE}
          </h2>
        </div>
        <p className="text-muted-foreground text-lg max-w-2xl">
          Descubre nuestras iglesias en la ciudad y únete a nuestra comunidad
        </p>
      </div>

      {/* Contenido: Mapa y Tabla */}
      <div className="flex flex-col lg:flex-row w-full max-w-7xl items-center justify-center gap-10">
        <Map />
        <div className="flex flex-col items-center justify-center w-full lg:w-1/2">
          <ChurchTable />
        </div>
      </div>
    </section>
  );
}

