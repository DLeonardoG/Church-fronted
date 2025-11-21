import { CalendarView } from "@/core/components/calendarEvents";

/**
 * Sección del calendario de eventos
 * Muestra el calendario interactivo con todos los eventos programados
 */
export function CalendarSection() {
  return (
    <section className="w-full min-h-screen py-16 px-4 md:px-8 lg:px-16">
      {/* Header de la sección */}
      <div className="max-w-7xl mx-auto mb-8">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          Calendario de Eventos
        </h2>
        <p className="text-muted-foreground text-lg">
          Explora todos nuestros eventos programados y planifica tu participación
        </p>
      </div>
      
      {/* Calendario */}
      <div className="max-w-7xl mx-auto">
        <CalendarView />
      </div>
    </section>
  );
}

