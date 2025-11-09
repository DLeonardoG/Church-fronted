import { CalendarSection } from "../components/CalendarSection";
import { CarouselSection } from "../components/CarouselSection";

/**
 * Página principal de Eventos
 * Organiza todas las secciones relacionadas con eventos
 */
export default function Events() {
  return (
    <main className="flex flex-col min-h-screen bg-background w-full items-center pt-20 gap-4">
      {/* Sección del carousel de eventos */}
      <CarouselSection />

      {/* Sección del calendario de eventos */}
      <CalendarSection />
    </main>
  );
}

