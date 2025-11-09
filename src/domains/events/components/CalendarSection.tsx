import { CalendarView } from "@/core/components/calendarEvents";

/**
 * Sección del calendario de eventos
 * Muestra el calendario interactivo con todos los eventos programados
 */
export function CalendarSection() {
  return (
    <section className="w-full pt-25 min-h-screen bg-muted/30">
      <CalendarView />
    </section>
  );
}

